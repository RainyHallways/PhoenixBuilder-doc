# 安装
## Android安卓
### 安装Termux
[点击此处下载](https://kgithub.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)
### A安装PhoenixBuilder

首先给Termux`"访问文件和媒体"`(不同手机可能叫法不同)的权限

某些华为手机可能没有这个选项，需要用 `termux-setup-storage` 指令

打开Termux并复制粘贴以下更新代码并回车(如果无法粘贴，长按屏幕后，点击Paste)

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://ghproxy.com/https://github.com/" && bash -c "$(curl -fsSL https://ghproxy.com/https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)" 
```

或者

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://gh.ddlc.top/https://github.com/" && bash -c "$(curl -fsSL https://gh.ddlc.top/https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)" 
```

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://hub.gitmirror.com/https://github.com/" && bash -c "$(curl -fsSL raw.gitmirror.com/bouldev/PhoenixBuilder/main/install.sh)"
```

若无法更新，可尝试使用 Github 官方站更新：

```sh
export PB_USE_GH_REPO=1 && bash -c "$(curl -fsSL https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)"
```

安装/更新 Libre 版本您仅需将 main 改为 libre

安装/更新 FastBuilder-Dev 版本您仅需将 bouldev/PhoenixBuilder 改为 rnhws-Team/PhoenixBuilder

如镜像站2,3出现无法使用的情况，您也可以将 https://xxx.com/https://github.com/ 中的 https://xxx.com/ 改为以下的链接：

```txt
https://ghps.cc/
https://github.yeqingg.cn/
```

**若出现需要 Root 权限的问题，请尝试使用以下命令解决**

```sh
which which || pkg install which
```

成功会有绿色字提示你： Use command "fastbuilder" to launch it. 即代表安装成功

### A启动PhoenixBuilder

输入 fastbuilder 即可启动

## Windows

### W下载PhoenixBuilder

[前往此处下载](https://github.com/bouldev/PhoenixBuilder/releases)

版本号旁有 Latest 标签的为最新稳定版 PhoenixBuilder，向下滑动，即可查看(下载)往期版本

点击 `▶ Assets` ,往下滑点击 `Show all 54 assets` 选择 `phoenixbuilder-windows-executable-x86.exe` 与 `phoenixbuilder-windows-executable-x86_64.exe` 这两个中的一个（若您要查看您的系统为32位(x86)还是64(x86_64)位，可以右键左下角的Win图标点击 `系统` 选项卡 (系统类型) 来查看）

注:Edge/FireFox/Chrome浏览器可能会报风险，不用管它，点击保留，启动时Windows也可能警告，也还是选择继续运行

### W启动PhoenixBuilder

左键双击刚刚下载好的.exe文件，如果提示有病毒风险，直接点击详情，然后运行吧

Tips:
1.想换行或者确定 请点击键盘上的 "Ent" 键或 "Enter" 键
2.路径请用`\\`来代替`\`
## Linux

注意:如果您的系统内核是基于Linux的，推荐使用 `Ubuntu 22.04` 或 `kali Linux(Latest)` 因为这些预构建的二进制文件需要相对较高的“Libc6”版本。

### L下载PhoenixBuilder

#### 使用安装脚本安装

首先确保您有 `curl` `bash`组件，若没有请执行下列命令

```sh
sudo apt-get install curl bash -y
```

其次复制粘贴以下更新代码并回车(请在Root权限下执行 详情请见<a href="#rootneed">此处</a> )

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://ghproxy.com/https://github.com/" && bash -c "$(curl -fsSL https://ghproxy.com/https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)" 
```

或者

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://gh.ddlc.top/https://github.com/" && bash -c "$(curl -fsSL https://gh.ddlc.top/https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)" 
```

```sh
export PB_USE_GH_REPO=1 && export GH_DOMAIN="https://hub.gitmirror.com/https://github.com/" && bash -c "$(curl -fsSL raw.gitmirror.com/bouldev/PhoenixBuilder/main/install.sh)"
```

若无法更新，可尝试使用 Github 官方站更新：

```sh
export PB_USE_GH_REPO=1 && bash -c "$(curl -fsSL https://raw.githubusercontent.com/bouldev/PhoenixBuilder/main/install.sh)"
```

安装/更新 FastBuilder-Dev 版本您仅需将 bouldev/PhoenixBuilder 改为 rnhws-Team/PhoenixBuilder

如镜像站2,3出现无法使用的情况，您也可以将 https://xxx.com/https://github.com/ 中的 https://xxx.com/ 改为以下的链接：

```txt
https://ghps.cc/
https://github.yeqingg.cn/
```

<a id="rootneed">若出现需要 Root 权限的问题，请尝试使用以下方法解决</a>

先执行以下命令

```sh
sudo passwd root
```

输入当前账户密码 → 修改密码 → 确认密码

执行

```sh
su
```

输入刚才重置的密码 → 重新执行安装脚本

成功会有绿色字提示你： Use command "fastbuilder" to launch it. 即代表安装成功

日后启动输入 `fastbuilder` 即可

如要进行更新，重新执行脚本即可

#### 手动执行命令安装

首先确保您有 `curl` `bash`组件，若没有请执行下列命令

```sh
sudo apt-get install curl bash -y
```

执行下列命令

```sh
curl -O https://ghproxy.com/https://github.com/bouldev/PhoenixBuilder/releases/download/${此处填写你想选择的版本，例如v5.4.1}/phoenixbuilder && chmod +x ./phoenixbuilder && ./phoenixbuilder
```

以下为备用命令

```sh
sudo apt-get install axel -y && axel -n 4 https://ghproxy.com/https://github.com/bouldev/PhoenixBuilder/releases/download/${此处填写你想选择的版本，例如v5.4.1}/phoenixbuilder && chmod +x ./phoenixbuilder && ./phoenixbuilder
```

```sh
curl -O https://hub.gitmirror.com/https://github.com/bouldev/PhoenixBuilder/releases/download/${此处填写你想选择的版本，例如v5.4.1}/phoenixbuilder && chmod +x ./phoenixbuilder && ./phoenixbuilder
```

日后启动输入 `./phoenixbuilder` 即可

如要进行更新，请输入

```sh
sudo rm -rf ./phoenixbuilder
```

再重新执行以上命令即可
