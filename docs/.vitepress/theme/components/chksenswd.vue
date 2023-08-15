<script>
import nreg from "./new_reg.json";
export default {
  data() {
  return {
    userInput: "",
    result: null,
    isLoading: false,
  };
  },
  methods: {
  async checkSensitive() {
    this.isLoading = true;
    this.result = await this.checkSensitiveWord(this.userInput);
    this.isLoading = false;
  },
  checkSensitiveWord(word) {
    return new Promise((resolve) => {
    setTimeout(() => {
      for (let val in nreg.regex) {
      for (let n in nreg.regex[val]) {
        let cur = new RegExp(
        nreg.regex[val][n]
          .replace(/\(\?(i|\#\d)\)/g, "")
          .replace(/^.*?content=/g, "")
          .replace(/[\u4e00-\u9fa5]/g, (m) =>
          String.fromCharCode(m.charCodeAt(0) - 1)
          ),
        "ig"
        );
        let sm = word.match(cur);
        if (sm) {
        // 添加判断条件，如果匹配成功就输出replace后的regex
        let replaceRegex = nreg.regex[val][n].replace(/\(\?(i|\#\d)\)/g, "");
        resolve([`${val}.${n}`, sm, replaceRegex]);
        return;
        }
      }
      }
      resolve(null);
    }, 2000);
    });
  },
  },
};
</script>

<template>
  <div>
  <input v-model="userInput" type="text" placeholder="输入文字">
  <button @click="checkSensitive" :disabled="isLoading">{{ isLoading ? '等待中' : '判断' }}</button>
  <div v-if="isLoading">正在进行敏感词判断，请稍候...</div>
  <div v-if="result">
    敏感词: {{ result[0] }}
    匹配结果: {{ result[1] }}
    <div v-if="result[2]">替换的regex: {{ result[2] }}</div>
  </div>
  <div v-else>
    当前语句中不包含违禁词
  </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
