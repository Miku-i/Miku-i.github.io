# Android Studio开发

## 真机运行

- system_profiler SPUSBDataType

  > 查看vendor id,Product ID,0开头的这种,记下来

- vi ~/.android/adb_usb.ini 

  > 给复制的粘贴进去,保存退出

- 打开Android手机的开发者模式和usb调试，重新拔插usb

- 打开AndroidStudio 运行一个正常的项目

## 模拟器

- 打开AVD Manager

- 点击下方Create Virtual Device

- 左侧有phone tv等选项,选择你所需要的

  - 例子

  - phone

  - Pixel 2

  - next

  - Android 10

    > 这里是android版本

  - 设置 AVD Name = demo

  - Finish

  - Actions 点击运行ok了

> 其中遇到下载问题,打开

```
打开设置
Appearance & Behavior 
System Settings
Android SDK
SDK Tools
点击Intel x86 Emulator Accele rator (HAXM installer)
apply > ok
```

