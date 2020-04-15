# Linux

## 远程控制

- **Mac**

```
- ping ip  (查看是否连接成功)
- ssh 用户名@ip地址  (远程连接)
- ip addr  ( 查看ip)
- sudo apt install -y openssh-server  (安装ssh远程控制)
- sudo service ssh start  (启动ssh服务)
```

- **Windows**

```
- 安装git
- 然后和mac一样
```

## 常用命令

```
- pwd (查看当前目录)


- cd (切换目录)
	cd .  (当前目录)
	cd .. (上一层目录)


- ls  (列出目录list缩写)
	-l  (详细信息)
	-a  (显示所有文件)
	-F  (目录后面斜线显示)
	-lh (人性化显示单位大小)
	

- mkdir  (创建文件夹)
- touch  (创建文件)
- rm  (删除文件)
	-i  (提示)
	-f  (不提示)
	-r  (删除目录)
	-rf  (删除目录不提示)
	
	
- mv 文件 路径(移动文件或者改名)
- cp         (复制) 
	-r  (递归文件夹)
	
	
- find -name 文件名  (搜索)
	文件名*    (开头的)
	?文件名    (结尾的)
	-size +3m  (查找大于3m的文件)
	
	
- which java  查看java在哪
- cat 查看文件内容
- more 查看
	- 空格翻页
	- 回车下一行
	- b 上一页
	- q 推出
	
	
	
- head -n (显示前面10行)
- tail -n  (最后)

ln  源文件 新文件  (创建硬链接)
	-s  (软连接)
```

- **软件压缩解压**

```
- tar zcvf  demo.tar.gz test
(给test文件打包成demo.tar.gz文件)
- tar zxvf demo.tar.gz 
(解压demo.tar.gz文件)


.bz2
- tar -cjf
      -xjf
      
  

.zip(先安装apt install zip)
- zip -r test.zip test
压缩
- unzip
解压


```

