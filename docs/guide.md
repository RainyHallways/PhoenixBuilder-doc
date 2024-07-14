---
contributors: []
---
# 简介

:::warning 写在前面的话
开发者和贡献者并没有义务回复您的问题, 您应该具备基本的提问技巧。
:::

> PhoenixBuilder 是专门为网易版租赁服设计的多功能结构生成工具。~~兼有服务器管理功能的可选的 Omega 模块~~(此功能在v5.7.0被移除)  
> 目前建筑方面支持的功能有 欧几里得几何 ~~·ACME文件~~ (已移除)  ·BDP (BDump, bdx) ·schematic 文件的建筑生成，以及图像绘制。

- 本文中除特殊说明之处外，所述之 FastBuilder 均代表 PhoenixBuilder 。

# 源代码开放

PhoenixBuilder 客户端 完整代码已开源（包括验证系统客户端以及核心算法），源代码点击[此处](https://github.com/bouldev/PhoenixBuilder)可见（AGPL v3 协议）。
但开放源代码并不意味着免费，您必须拥有 FastBuilder 账号才能使用它进入网易的服务器。

-以 AGPL v3 协议发布代表着开发组允许您对软件本体进行修改并进行再发布，且并不阻止商业行为。

:::warning 注意
(p.s. 通过验证并进入服务器是付费项目 所以请不要被 **fb 原版客户端需要打💴所骗**) 
:::

# 基本概念

PhoenixBuilder 与其他程序的不同点在于，存在 **「客户端」** 与 **「服务端」** 概念。玩家正在运行的游戏与 PhoenixBuilder 同为 **客户端** ，而玩家所欲使用 FastBuilder 于之中的租赁服为 **服务端** 。

众所周知，客户端不一定都要在同一台设备上，所以即使您自己的游戏没有运行也能使用/正常运行FastBuilder。

由于使用命令行操作，需要用户具备如下基础：

- 文件操作能力，能够理解路径和文件层级。
- 简单的英语能力，能够认出 “Error” · “Permission denied” · “Not found” 等系统提示之字眼并明白其含义。
- 能够区分全角符号与半角符号。
- (最好具有)在命令行界面输入并执行命令的能力。

请确保您具备以上能力，如果您不具备这样的条件仍执意购买 FastBuilder 导致无法/不会使用，开发组不承担任何责任，更不会提供帮助。

# 相关版本介绍

:::tip 官方分支<Badge type="fb" text="官方分支" />
版本号格式为 v1.1.4 且有指向于 https://github.com/bouldev/PhoenixBuilder 的链接
:::

:::tip libre分支<Badge type="libre" text="libre分支" />
版本号格式为 Branche de Liberté 5.7.4-libre 且有指向于  https://github.com/bouldev/PhoenixBuilder/tree/libre 的链接
:::

:::tip Dev分支<Badge type="unsupport" text="已停止支持" />
版本号格式为 Dev 1.1.45141 且有指向于 https://github.com/rnhws-Team/PhoenixBuilder 的链接
:::