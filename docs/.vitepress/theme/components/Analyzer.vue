<script setup>
import { ref } from "vue";

// 元素引用
const fileUploader = ref(null)

// 变量初始化
const analyzerBackgroundColor = ref("")

const analysisShowResult = ref(false)
const isBtnDisabled = ref(false)
const labelMsg = ref("未选择文件")
const btnMsg = ref("开始上传")
const analysisResultMsg = ref("")
const redirectMsg = ref("导航到解决方案")
var redirect_url = null
var increaseOpacTimer = null
var increaseHeightTimer = null

const CUR_URL = window.location.href // 当前网址
const ROOT_URL = CUR_URL.substring( // 根网址
  0,
  CUR_URL.indexOf(window.location.pathname),
)
/*--
const SYSTEM_URL = ROOT_URL + "/client/system.html" // 系统问题
const VANILLA_URL = ROOT_URL + "/client/vanilla.html" // 原版问题
const MODS_URL = ROOT_URL + "/client/mods.html" // Mod 问题
const MIXIN_URL = ROOT_URL + "/mixin.html" // Mod 问题
--*/
// 阻止浏览器默认拖拽行为
function handleDragEnter(e) {
  analyzerBackgroundColor.value = "rgba(255,255,255,0.5)"
}

// 动画
function handleDragOver(e) {
  analyzerBackgroundColor.value = "rgba(255,255,255,0.5)"
}

// 动画
function handleDragLeave(e) {
  analyzerBackgroundColor.value = "var(--vp-custom-block-tip-bg)"
}

// 动画
function handleDrop(e) {
  const files = e.dataTransfer.files // 获取拖拽过来的文件
  // 处理文件
  handleFiles(files)
}

/**
 * 拖拽文件处理。
 * @param {File} files 拖拽的文件。
 */
function handleFiles(files) {
  console.log("文件拖拽：" + files)
  analyzerBackgroundColor.value = "var(--vp-custom-block-tip-bg)"
  clean() // 重新初始化
  if (files.length != 1) {
    labelMsg.value = "仅能上传一个文件"
  } else {
    var file = files[0]
    var filePath = files[0].name
    var ext = filePath.substring(filePath.lastIndexOf(".") + 1).toLowerCase()
    if (ext == "log" || ext == "txt") {
      btnMsg.value = "正在分析"
      isBtnDisabled.value = true
      labelMsg.value = file.name
      startAnalysis(file, ext)
      return true
    } else {
      labelMsg.value = "请上传 .txt/.log 文件!"
      return false
    }
  }
}

/**
 * 重新初始化。
 */
function clean() {
  console.log("重新初始化")
  analysisShowResult.value = false
  analysisResultMsg.value = "分析器歇逼了"
  redirectMsg.value = "导航到解决方案"
  redirect_url = null
  clearInterval(increaseOpacTimer)
  clearInterval(increaseHeightTimer)
}

/**
 * 分析文件。可以分析返回 true，不能分析返回 false。
 */
function checkfiles() {
  clean()
  var fup = fileUploader.value
  var filePath = fup.value
  var ext = filePath.substring(filePath.lastIndexOf(".") + 1).toLowerCase()
  if (["log", "txt"].includes(ext)) {
    console.log("分析文件：" + ext)
    btnMsg.value = "正在分析"
    isBtnDisabled.value = true
    var file = fileUploader.value.files[0]
    labelMsg.value = file.name
    startAnalysis(file, ext)
    return true
  } else {
    labelMsg.value = "请上传 .txt/.log 文件!"
    fup.focus()
    return false
  }
}

/**
 * 开始分析文件
 * @param {File} file 文件对象
 * @param {string} ext 文件后缀
 */
function startAnalysis(file, ext) {
  var reader = new FileReader(file)

  if (ext != "zip") { // Log / Txt 文件处理
    try {
      reader.readAsText(file)
      reader.onload = (e) => {
        var logMsg = e.target.result
        logAnalysis(logMsg)
      }
    } catch {
      // 日志读取错误
      finishAnalysis("ReadLogErr")
    }
  }
}

/**
 * 分析日志，并展示分析结果。
 * @param {string} log Log 原文。
 */
function logAnalysis(log) {
  console.log("开始分析日志")

  // 无法获得租赁服IP
  if (
    log.includes("ping raknet: dial udp: missing address")
  ) {
    showAnalysisResult(
      "Success",
      "请检查恁的租赁服状态或者你的网络环境",
//      SYSTEM_URL + "#内存问题",
      "PhoenixBuilder无法获得租赁服IP",
    )

  // 账密输错
  } else if (
    log.includes("Invalid username or password")
  ) {
    showAnalysisResult(
      "Success",
      "检查你输入的账号密码是否正确(一次性密码只能使用一次)",
      "账密输错",
    )

// 账密输错
  } else if (
    log.includes("Invalid username or password")
  ) {
    showAnalysisResult(
      "Success",
      "无法连接至API验证服务器，请检查你的网络环境或查看频道公告验证服务器是否正在维护",
      "无法连接至验证服务器",
    )

  // 以上都无
  } else {
    console.log("日志分析结束，没有找到可能的原因")
    showAnalysisResult(
      "Unrecord",
      "本工具还未收录您所遇到的错误，请点击下方按钮前往 GitHub 反馈。",
      "https://github.com/RainyHallways/PhoenixBuilder-doc/issues/new/choose",
      "Unrecord",
    )
  }
}

/**
 * 展示分析结果。
 * @param {string} status 状态消息。
 * @param {string} msg 向用户展示的消息。
 * @param {string} result_url 重定向 Url。
 * @param {string} status_msg 状态信息。
 */
function showAnalysisResult(status, msg, result_url, status_msg) {
  console.log("展示分析结果：(" + status + ") " + msg)
  // 信息更改
  redirect_url = result_url
  analysisResultMsg.value = msg
  analysisShowResult.value = true

  // 消息更改
  isBtnDisabled.value = false
  btnMsg.value = "重新上传"

  // 结束分析
  finishAnalysis(status, status_msg)
}

/**
 * 结束分析。
 * @param {string} status 分析状态。
 * @param {string} msg 传递信息。
 */
function finishAnalysis(status, msg) {
  console.log("结束分析：(" + status + ") " + msg)
  switch (status) {
    case "ReadLogErr":
      labelMsg.value = "Log 文件读取错误"
      btnMsg.value = "重新上传"
      isBtnDisabled = false
      umami.track("Analysis Error", {
        Status: "Cannot_Read_Log_File",
        ErrMsg: msg,
      })
      break
    case "ErrOpenRstPage":
      umami.track("Analysis Error", {
        Status: "Cannot_Redirect_To_Resolution",
      })
      break
    case "Unrecord":
      umami.track("Unrecord Crash", {
        Status: "Unrecord_Crash",
      })
      redirectMsg.value = "提交反馈"
    case "Success":
      umami.track("Analysis Finish", {
        Status: "Analysis_Success",
        CrashReason: msg,
      })
      break
    default:
      umami.track("Analysis Error", {
        Status: "Unknown_Error",
      })
      break
  }
}

/**
 * 重定向按钮。
 */
function redirectBtnClick() {
  if (
    redirect_url == "https://github.com/RainyHallways/PhoenixBuilder-doc/issues/new/choose"
  ) {
    window.open(redirect_url)
  } else if (redirect_url === null || typeof redirect_url === 'undefined') {
    labelMsg.value = "无法重定向到解决方案页面"
    finishAnalysis("ErrOpenRstPage", redirect_url)
  } else {
    window.location.href = redirect_url
  }
}
</script>

<template>
  <ClientOnly>
    <div
      class="analyzer-main"
      :style="{'background-color': analyzerBackgroundColor}"
      @dragenter.prevent="handleDragEnter"
      @dragover.prevent="handleDragOver"
      @drop.prevent="handleDrop"
      @dragleave.prevent="handleDragLeave">
      <h4 style="text-align: center">
        请点击按钮上传导出的 .txt/.log 文件, 并尽量不要更改导出文件的名称。
      </h4>
      <img class="icon-upload" src="../../../src/logo-upload.svg" />
      <div class="file-uploader-container">
        <h4 class="file-uploader-label" for="file-uploader" singleLine="false">
          {{ labelMsg }}
        </h4>
        <button
          :disabled="isBtnDisabled"
          class="file-uploader-btn"
          data-umami-event="Analysis Button Click"
          @click="fileUploader.click()">
          {{ btnMsg }}
        </button>
        <input
          ref="fileUploader"
          type="file"
          name="file_uploader"
          id="file-uploader"
          @change="checkfiles"
          style="display: none" />
      </div>
      <Transition name="analysis-result">
        <div v-if="analysisShowResult" class="analysis-result-main">
          <hr />
          <h4 class="analysis-result-title">分析结果:</h4>
          <p class="analysis-result-msg">{{analysisResultMsg}}</p>
          <button class="redirect-btn" @click="redirectBtnClick">
            {{ redirectMsg }}
          </button>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped>
div {
  height: 100%;
  width: 100%;
}

p {
  margin: 0;
  padding: 0;
}

.analysis-result-title {
  margin-top: 10px;
}

.analyzer-main {
  border: 1px solid transparent;
  border-color: var(--vp-custom-block-tip-border);
  color: var(--vp-custom-block-tip-text);
  background-color: var(--vp-custom-block-tip-bg);
  border-radius: 8px;
  padding: 16px 16px 8px;
  line-height: 24px;
  font-size: var(--vp-custom-block-font-size);
  display: block;
}

.analysis-result-main {
  text-align: center;
  margin: auto;
  width: 100%;
  height: 100%;
  max-height: 8rem;
}

.analysis-result-enter-active,
.analysis-result-leave-active {
  transition: all 0.6s;
}

.analysis-result-enter-from,
.analysis-result-leave-to {
  max-height: 0 !important;
  opacity: 0;
}

.icon-upload {
  margin: auto;
  height: 20%;
  width: 20%;
}

.file-uploader-container {
  text-align: center;
  margin: auto;
  width: 100%;
  height: 100%;
}

.file-uploader-btn {
  margin-top: 3px;
  height: 35px;
  width: 120px;
  border: 1px solid transparent;
  border-color: var(--vp-custom-block-tip-border);
  background-color: var(--vp-custom-block-tip-bg);
  border-radius: 8px;
  transition: all 0.3s;
}

.file-uploader-btn:hover {
  animation-direction: alternate;
  transform: scale(1.05);
  transition: all 0.3s;
}

</style>