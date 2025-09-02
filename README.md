# JetBrains IntelliJ IDEA 个人使用及配置

本项目仅用于个人学习与参考，请勿转载分发、请勿用于商业用途。对于使用本项目造成的任何后果均与作者无关。如有侵权，请联系立即删除。

## 1. 简介

<!-- TOC -->
* [JetBrains IntelliJ IDEA 个人使用及配置](#jetbrains-intellij-idea-个人使用及配置)
  * [1. 简介](#1-简介)
  * [2. 激活](#2-激活)
    * [2.1 正式激活](#21-正式激活)
    * [2.2 利用开源项目激活](#22-利用开源项目激活)
    * [2.3 非正式激活（推荐）](#23-非正式激活推荐)
    * [2.4 非正式激活-支持功能列表](#24-非正式激活-支持功能列表)
  * [3. 配置同步](#3-配置同步)
    * [3.1 JetBrains 账号配置同步（推荐）](#31-jetbrains-账号配置同步推荐)
    * [3.2 GitHub 远程配置同步](#32-github-远程配置同步)
  * [4. 常用插件](#4-常用插件)
  * [5. 常用配置](#5-常用配置)
    * [5.1 主题](#51-主题)
    * [5.2 字体](#52-字体)
    * [5.3 编码](#53-编码)
    * [5.4 切换语言](#54-切换语言)
    * [5.5 代码模板](#55-代码模板)
    * [5.6 文件头注释](#56-文件头注释)
    * [5.7 注释不顶格（不在行首）](#57-注释不顶格不在行首)
<!-- TOC -->

## 2. 激活

### 2.1 正式激活

- 购买正版激活码，直接购买即可，官网地址：[https://www.jetbrains.com/idea](https://www.jetbrains.com/idea)

### 2.2 利用开源项目激活

- 利用开源项目免费申请 JetBrains 激活码，官方申请地址：[https://www.jetbrains.com/shop/eform/opensource?product=ALL](https://www.jetbrains.com/shop/eform/opensource?product=ALL)

申请条件：

1. GitHub 上有一个维护超过3个月的开源项目
2. 必须是 GitHub 开源项目的发起人或是活跃的 commiter
3. GitHub 开源项目必须指定一个 License

注意事项：

1. 提交申请前记得将 Github 个人信息中的 Email 公开
2. 收到申请成功的邮件后，如果没有注册 JetBrains 账号，记得去注册账号。注册地址：[https://account.jetbrains.com/login](https://account.jetbrains.com/login)
3. 申请成功后，可获得全家桶的使用权 1 年，如果到期了会提前给你发邮件还可以继续申请

> 或者直接参考这篇文章：[免费正版 IntelliJ IDEA license 详细指南](https://blog.csdn.net/zlt2000/article/details/115611788)

### 2.3 非正式激活（推荐）

- ~~2021.1.3版本，已不推荐（搭配试用30天到期自动续期插件永久免费食用），IDEA官方历史版本下载地址：[https://www.jetbrains.com/idea/download/other.html](https://www.jetbrains.com/idea/download/other.html)~~

- 使用始皇的：[ja-netfilter](https://gitee.com/ja-netfilter/ja-netfilter) 激活，相关文件已在本仓库中，参考如下步骤激活：

  1. 克隆本仓库：`git clone https://github.com/zpj80231/idea-set.git`

  2. 进入仓库，复制 `ja-netfilter.jar` 文件的绝对路径

  3. 修改 JetBrains 的 `.vmoptions` 文件（文件在哪，Google 一下）

     ```shell
     # 比如 idea 在 Mac 上的地址
     ~/Library/Application\ Support/JetBrains/IntelliJIdea2025.2/idea.vmoptions
     # 比如 pycharm 在 Mac 上的地址
     ~/Library/Application\ Support/JetBrains/IntelliJIdea2025.2/pycharm.vmoptions
     
     # 其他同理的。。。
     ```
     在末尾填上（若没有 `.vmoptions` 文件则创建即可）：
     ```shell
     -Xmx4096m
     
     --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
     --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
     
     -javaagent:/Users/xxx/idea-set/ja-netfilter.jar
     ```

     **将其中的 `/Users/xxx/idea-set/ja-netfilter.jar` 替换为本仓库下 `ja-netfilter.jar` 文件的绝对路径。**

  4. 打开IDEA，填入激活码（activation_code.txt 文件内容）

- 激活后只需定期更新本仓库即可，这样你能一直获取到最新功能。当然，有能力的还是推荐购买正版激活。

### 2.4 非正式激活-支持功能列表

- JetBrains 全家桶激活
- 付费插件激活：
  - 认证方式（使用佬友提供的linux.do认证提高使用门槛，认证需自行解决）：配合猴油脚本，手动添加 `MyJBLS.js` 脚本到猴油中，打开 [https://plugins.jetbrains.com](https://plugins.jetbrains.com/) 搜索你想要激活的插件，点击 `Generate Code` 按钮就能得到该插件的激活码，粘入到插件的 `Activation Code` 中即可
  - ~~离线方式（影响太大，已下架自用）：配合猴油脚本，手动添加 `jetbra.js` 脚本到猴油中，打开 [https://plugins.jetbrains.com](https://plugins.jetbrains.com/) 搜索你想要激活的插件，点击 `Generate Code` 按钮就能得到该插件的激活码，粘入到插件的 `Activation Code` 中即可~~
- ~~GitHub Copilot 激活：cocopilot 公车已废弃~~
- ~~Augment 激活：下载 Augment 插件，点击 Sign In 按钮【本地授权】，即可无限免费使用 Claude Sonnet 4 系列模型（代码开发和编程最强模型）~~

## 3. 配置同步

### 3.1 JetBrains 账号配置同步（推荐）

登录账号即可，无需过多解释

### 3.2 GitHub 远程配置同步

使用方法：

1. IntelliJ IDEA
2. File | Settings Repository 指定远程仓库地址 (自己在 GitHub 或者 Gitee 上新建一个空仓库即可)
3. Overwrite Local or Overwrite Remote

## 4. 常用插件

- 按需关闭自带插件。插件优化：[IDEA 关闭不必要的插件减少内存占用](https://blog.csdn.net/tutian2000/article/details/80074643)
- 以下是推荐的插件：

| 序号 | 名称                               | 备注                                                                                                                                                                                                                                                         |
|----|:---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Lombok                           | 以简单的注解形式简化 POJO，现 IDEA 默认已自带                                                                                                                                                                                                                               |
| 2  | SonarQube                        | 代码质量提升                                                                                                                                                                                                                                                     |
| 3  | Grep Console                     | 对控制台输出的不同级别的日志进行上色，比如 Info 级别是黑色，WARN 级别是黄色，ERROR 是橙色。不用找日志把眼睛找瞎了。<br/>配色方案：[利用grep-console插件使Intellij idea显示多颜色调试日志](https://blog.csdn.net/weixin_39973810/article/details/110190844)                                                                     |
| 4  | Translation                      | 翻译                                                                                                                                                                                                                                                         |
| 5  | JRebel                           | 热加载插件，代码改动之后无需重启服务，被修改的类会自动重新加载，破解请自行百度<br/>或者参考：[JRebel插件使用详解](https://blog.csdn.net/lianghecai52171314/article/details/105637251)<br/>修改完 Java 代码后，就可以通过快捷键 Ctrl+shift+F9 刷新项目                                                                           |
| 6  | CodeGlance Pro                   | 类似于 Sublime 的右侧，整体代码滚动条，使用此插件可以查看缩略图一样，快速切换到自己需要去的地方~                                                                                                                                                                                                      |
| 7  | Rainbow Brackets                 | 彩色括号匹配                                                                                                                                                                                                                                                     |
| 8  | Rainbow Variable                 | 方法内彩色变量匹配                                                                                                                                                                                                                                                  |
| 9  | MyBatis Log Free                 | MyBatis 日志打印                                                                                                                                                                                                                                               |
| 10 | MyBatisCodeHelper-Pro            | 生成 Mapper xml 文件<br/>快速从代码跳转到 Mapper 及从 Mapper 返回代码<br/> Mybatis 自动补全及语法错误提示<br/>集成 Mybatis Generator GUI 界面<br/>根据数据库注解，生成 Swagger Model 注解<br/>[MyBatisCodeHelper-Pro 破解指导](https://zpj80231.github.io/znote/views/crack/mybatiscodehelperprocrack.html) |
| 11 | Maven Helper                     | 查找和排除冲突依赖项的简便方法，[IDEA Maven 镜像配置](https://blog.csdn.net/idto315/article/details/122888893)                                                                                                                                                                 |
| 12 | maven-search                     | • 支持按类或仓库坐标快速查找 maven 依赖<br/>• 开启菜单：Tools/ Maven Search                                                                                                                                                                                                    |
| 13 | Generate All Getter And Setter   | 当你进行对象之间赋值的时候，你会发现好麻烦呀，能不能有一个更好的办法呢~ 有，只要你选中需要生成 set 方法的对象，按下快捷键 alt+enter <br/> 使用 .allget 生成所有 getter 方法                                                                                                                                                 |
| 14 | arthas idea                      | 基于 IntelliJ IDEA 开发的 Alibaba Arthas 命令生成插件，支持 Alibaba Arthas 官方常用的命令。                                                                                                                                                                                      |
| 15 | Easy Javadoc                     | 能帮助开发者快速生成类、方法、属性等中文 Java Doc / K Doc，快捷键 Ctrl+\                                                                                                                                                                                                           |
| 16 | Easy Naming                      | 选中需要命名的文本内容，按下快捷键 Alt + Z，AI智能命名。                                                                                                                                                                                                                          |
| 17 | Key Promoter X                   | 对你的 IDEA 操作，会提示相应的快捷键是什么                                                                                                                                                                                                                                   |
| 18 | Save Action X                    | 保存的时候进行格式化操作，去除某些文件的自动格式化<br/> `.*\.html`  `.*\.md`  `.*\.sql`  `.*\.xml`  `.*\.vue`                                                                                                                                                                       |
| 19 | String Manipulation 或 ConverterX | 对字符串的操作，支持大小写驼峰转换，字符串加解密等                                                                                                                                                                                                                                  |
| 20 | .ignore                          | 生成各种模板化的 git 忽略文件                                                                                                                                                                                                                                          |
| 21 | JarEditor                        | 可以直接编辑jar包中的文件                                                                                                                                                                                                                                             |
| 22 | Atom Material Icons              | 各种文件夹、文件图标                                                                                                                                                                                                                                                 |
| 23 | Apifox Helper                    | 在线接口文档调试                                                                                                                                                                                                                                                   |
| 24 | TONGYI Lingma                    | 通义灵码，AI 智能自动补全                                                                                                                                                                                                                                             |

## 5. 常用配置

看这两个就行：

1. [IDEA的常见的设置和优化（功能）](https://blog.csdn.net/zeal9s/article/details/83544074)
2. [2020年最新-IDEA最详细配置（配图文收藏版配置）](https://www.bilibili.com/read/cv5707434/)

### 5.1 主题

- Appearance & Behavior -> Appearance -> Theme

![image.png](https://images.gitee.com/uploads/images/2019/0118/000955_8a1a2c2a_945727.png)

### 5.2 字体

* 直接设置字体大小：Editor -> Font
* 使用鼠标滚轮调整字体大小：Editor -> General -> Change font size (Zoom) with Ctrl + Mouse Wheel

![IDEA应用字体](https://images.gitee.com/uploads/images/2019/0118/000955_06dda8fd_945727.png)
![代码字体](https://images.gitee.com/uploads/images/2019/0118/000955_dd80cfab_945727.png)

### 5.3 编码

* Editor -> File encodings

![IDEA编码设置](https://ucc.alicdn.com/pic/developer-ecology/vjpue72jdvvb2_20a1568e41754f01bfaced211af49527.png?x-oss-process=image%2Fresize%2Cw_1400%2Cm_lfit%2Fformat%2Cwebp)

### 5.4 切换语言

* Appearance & Behavior -> System Settings -> Language and Region

![IDEA语言设置](https://youtrack.jetbrains.com/api/files/334-60562?sign=MTc1NTMwMjQwMDAwMHwxMS0xfDMzNC02MDU2Mnw2V1gyXzhweHA2bEFoLUQ2eUl2cm1vNy0wakoxNEJsVlgySHBSV3RMRmJNDQo&updated=1725353354506)

### 5.5 代码模板

类似 sysout：

* Editor -> General -> Postfix Completion
* Editor -> Live Templates

相关配置见：[IDEA代码模板](https://blog.csdn.net/Yinyaowei/article/details/103836510)

![image.png](https://images.gitee.com/uploads/images/2019/0118/000956_1335a7b5_945727.png)

### 5.6 文件头注释

* Editor -> File and Code Templates

```java
/**
 * 
 * @author zhangpj
 * @date ${DATE}
 */
```

![image.png](https://images.gitee.com/uploads/images/2019/0118/000957_0a1a36f9_945727.png)

### 5.7 注释不顶格（不在行首）

* Editor -> Code Style -> Java -> Code Generation

![image.png](https://img2020.cnblogs.com/blog/2608583/202111/2608583-20211121101224349-1524924883.png)
![image.png](https://img2020.cnblogs.com/blog/2608583/202111/2608583-20211121101320181-294946330.png)