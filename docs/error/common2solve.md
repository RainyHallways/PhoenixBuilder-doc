# Global
## 无法访问有关Github.com的任何项目
**问题描述** : 访问有关 `Github.com` 的任何项目时加载速度慢或无法加载

**解决方法** : 

> 1.使用 `kgithub.com` 来替代 `github.com` 
> 
> 2.使用魔法

## 用户中心404
**问题描述** : 访问用户中心时出现 `404` 界面

**解决方法** : 请检查你使用的地址是否为[https://user.fastbuilder.pro/](https://user.fastbuilder.pro/)

# Installer-Bash
## Unix
### IBS1
**问题描述** : 执行安装脚本后出现以下报错
```txt
bash: line 183: which: command not found
Found curl:
bash: line 184: which: command not found
bash: line 189: [: ==: unary operator expected
----------------------------------------------
bash: line 401: -fSL: command not found
Download failure! Please check your connections (curl: 127)
```
**解决方法** : 执行下列代码

Termux
```sh
which which || pkg install which -y
```
Linux
```sh
which which || apt install which -y
```

# PhoenixBuilder
## 执行bdump后出现问题
**问题描述** : 执行 `bdump` 后出现以下报错
```txt
ERROR go routine @ fastbuilder.task lexport crashed
ERROR runtime error: index out of range [0] with length 0
```
**解决方法** : 目前已进行修复，请等待高于 [`v5.7.4`](https://github.com/LNSSPsd/PhoenixBuilder/releases/tag/v5.7.4) 的预构建版本发布

## 执行schem后无反应
**问题描述** : 执行 `schem` 后无反应

**解决方法** : 详见 [`#339`](https://github.com/LNSSPsd/PhoenixBuilder/issues/339)
> 此功能在 [`3ed4e3b`](https://github.com/LNSSPsd/PhoenixBuilder/commit/3ed4e3b78d4f0b9647ff58dbb65f850669b4918e) 被重名为 `schematic` ，现在请使用 `schematic -p <path>` 来调起此功能。

## 执行schematic后无建筑生成
**问题描述** : 执行 `schematic` 后无建筑生成
> 自PhoenixBuilder 5.4.0起，由FastBuilder开发组所提供的预构建发行版本 (PrebuiltRelease) 将中止 `schematic` 与 `mcacblock` 格式的支持，此举为表明开发组对当前出现的盗用行为的立场。但出于对开源自由软件 (FOSS) 的考量，与之有关的代码仍然可以在 repo 中找到。用户可以选择下载 “libre” 分支构建来维持原有功能的使用。用户使用自由分支版本所进行的一切行为与开发组无关，请自行承担风险。详见 issue [#313](https://github.com/LNSSPsd/PhoenixBuilder/issues/313)

**解决方法** : 请使用 `libre` 分支 

**使用方法** : 将安装代码里的 `main` 改为 `libre` 即可

## 执行plot后无反应
**问题描述** : 执行 `plot` 后无反应

**解决方法** : `plot` 已被替换为 `paint` 请使用 `paint` 命令

## 连接至服务器后断开连接
### 情况1
**问题描述** : 报错中出现 `use of closed network connection`

**可能的情况** : 

> 1.本地网络不稳定导致断开连接 
> 
> 2.租赁服崩溃 
> 
> 3.不明原因

**解决方法** : 

> 1.检查本地网络环境 
> 
> 2.检查是否为租赁服崩溃所致 
> 
> 3.未知(重启能解决 99% 的问题)

## 无法与API服务器联通
**问题描述** : 报错中出现 `Failed to contact with API`

**可能的情况** : 

> 1.本地网络不稳定
> 
> 2.API服务器出现后台错误
> 
> 3.API服务器被 DDoS 
> 
> 4.不明原因

**解决方法** : 

> 1.检查本地网络环境
> 
> 2&3.等待官方通知
> 
> 4.未知(重启能解决 99% 的问题)

## 电脑端无法导入
**问题描述** : 报错中出现 `The system cannot find the file specified.`

**解决方法** : 请将路径改为双斜杠

**使用方法** : 将路径改为双斜杠即可，例如 `C:\Users\114514\Desktop\fb` 改为 `C:\\Users\\114514\\Desktop\\fb`

# Legacy-Omega

> 自 [`v5.7.0`](https://github.com/LNSSPsd/PhoenixBuilder/releases/tag/v5.7.0) 版本起 `PhoenixBuilder` 已停止对 `Legacy-Omega` 的支持
