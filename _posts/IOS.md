# IOS

## Xcode

> ```sh
> defaults delete com.apple.dt.Xcode
> rm -rf ~/Library/Application\ Support/Xcode
> 恢复默认设置
> ```

- 打开xcode点击Create a new Xcode project

- Single View App

- Product Name:demo

- Organization ldentifier:demo

  > 它是组织唯一标示，一般我们会使用公司的域名形式（这个域名一般会倒序书写，例如公司域名为：www.zhouzijing.com，我们这里就写成com.zhouzijing），和项目名称共同组成一个程序的唯一标示“Bundle Identifier”，这个标示在整个App Store中是唯一的，如果两个应用程序标示完全一样，那么安装时会先卸载前面的程序再安装新程序。

- Language:objective-c

  > 选择你需要的语言如:oc,swift

- **Create Git repository on my Mac 点击取消**

## 下载模拟机

- **打开控制台,不是终端!!!**console.app ,点击清除/clear

- Xcode - Preferences - Components：点击模拟器下载，1秒后取消下载

- ```
    DVTDownloadable: Download Cancelled . 
  ```

- 搜索Xcode,查看上面开头的

- [下载软件](https://www.freedownloadmanager.org/zh/)

- ```
  cd /Users/{你的用户名}/Library/caches
  ```

- 给下载的文件放进去,然后xcode再次点击下载,就只需要安装了

## 视图

- 