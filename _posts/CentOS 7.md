[toc]

# CentOS 7

> 前言:穷逼就别玩了,2gb 内存 40g 硬盘

## 虚拟机安装

- 使用镜像 1908

  > 我是一直下一步的........

- minimal 配置

  - 网卡

    - cd /etc/sysconfig/network-scripts/
    - vi 网卡名为 ensxx 开的文件
    - ONBOOT=yes
    - BOOTPROTO=none
    - service restart network

      > 重启网络 ok 了

    - yum -y install wget

  - 换源

    - 163yum

```
cd /etc/yum.repos.d/
cp ./CentOS-Base.repo ./CentOS-Base-repo.bak    ->  备份
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo   ->  下载163yum源repo文件
yum clean all   ->  清理旧包
mv CentOS7-Base-163.repo CentOS-Base.repo   ->  替换默认源
yum makecache   ->  生成
yum update   ->  更新
```

    - 阿里云

```
cd /etc/yum.repos.d/
cp ./CentOS-Base.repo ./CentOS-Base-repo.bak    ->  备份
wget http://mirrors.aliyun.com/repo/Centos-7.repo   ->  下载阿里yum源repo文件
yum clean all   ->  清理旧包
mv Centos-7.repo CentOS-Base.repo   ->  替换默认源
yum makecache   ->  生成
yum update   ->  更新
```

## GitLab

- su root

- vi /etc/yum.repos.d/gitlab-ce.repo

```
[gitlab-ce]
name=Gitlab CE Repository
baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/
gpgcheck=0
enabled=1
```

- yum makecache
- yum install gitlab-ce #自动安装最新版本

> 注：若需安装指定版本，则添加版本号即可，即 yum install gitlab-ce-x.x.x

```
GitLab常用命令
gitlab-ctl start # 启动所有 gitlab 组件；
gitlab-ctl stop # 停止所有 gitlab 组件；
gitlab-ctl restart # 重启所有 gitlab 组件；
gitlab-ctl status # 查看服务状态；
gitlab-ctl reconfigure # 启动服务；（重新加载配置文件，在GitLab初次安装后可以使用，但是在业务环境中不可随意使用，reconfigure会把一些过去的config还原，导致修改的端口以及域名等都没有了。）
vim /etc/gitlab/gitlab.rb # 修改默认的配置文件；
gitlab-rake gitlab:check SANITIZE=true --trace # 检查gitlab；
sudo gitlab-ctl tail # 查看日志；
```

## mysql5.7

- wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-community-server-5.7.30-1.el7.x86_64.rpm
- yum -y install mysql57-community-release-el7-10.noarch.rpm
- yum -y install mysql-community-server
- vi /etc/my.cnf
- 在[mysql]之后加上`default-character-set=utf8`

  > 重启会报错

[参考](https://blog.csdn.net/qq_37194598/article/details/81190153?utm_medium=distribute.pc_relevant_right.none-task-blog-BlogCommendFromMachineLearnPai2-11.nonecase&depth_1-utm_source=distribute.pc_relevant_right.none-task-blog-BlogCommendFromMachineLearnPai2-11.nonecase)

### 安装 2

- cd /etc/yum.repos.d/
  https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-community-server-5.7.30-1.el7.x86_64.rpm
- wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
- yum -y install mysql57-community-release-el7-10.noarch.rpm
- yum install mysql-server
- systemctl start mysqld
- grep "password" /var/log/mysqld.log

  > 查看历史记录的密码

### 解决

1. 安装命令：

- yum install mysql-server

2. 启动 msyql：

- systemctl start mysqld #启动 MySQL

3. 获取安装时的临时密码（在第一次登录时就是用这个密码）：

- grep 'temporary password' /var/log/mysqld.log

4. 倘若没有获取临时密码，则删除原来安装过的 mysql 残留的数据

- rm -rf /var/lib/mysql

5. 再启动 mysql

- systemctl start mysqld #启动 MySQL

6. 跳过登录验证

- vim /etc/my.cnf
- 在[mysqld]后面任意一行添加`skip-grant-tables`用来跳过密码验证的过程

7. mysql ERROR 1046 (3D000):

- use mysql
- set global validate_password_policy=0;
- set global validate_password_length=1;
- flush privileges;
- alter user 'root'@'localhost' identified by 'Tcc0312..';

## JDK8

- yum list java-1.8
- yum install java-1.8.0-openjdk\* -y
- java -version

## confluence 6.12 的安装

### 环境

- mysql5.7,my.cnf 中设置了 utf-8
- jdk8
- centos7.7

### 数据库初始化

```
vi /etc/my.cnf ，找到datadir，rm data目录
mysqld --initialize-insecure
mysql -uroot
Mysql>SET GLOBAL tx_isolation='READ-COMMITTED';
Mysql>CREATE DATABASE `confluence` CHARACTER SET utf8 COLLATE utf8_bin;
Mysql>grant all on demo.* to confluence@"%" identified by 'demo';
Mysql>grant all on demo.* to ceshi@"%";
Mysql>FLUSH PRIVILEGES;
```

### 安装 confluence

- wget https://product-downloads.atlassian.com/software/confluence/downloads/atlassian-confluence-6.12.0-x64.bin

  > 下载 confluence

- chmod +x atlassian-confluence-6.12.0-x64.bin

  > 设置文件可执行权限

- ./atlassian-confluence-6.12.0-x64.bin

  > 安装

- 安装后选择
  - o
  - 1
  - i
  - y

### 报错

- 安装后的第四个选项之后,询问你`y`or`c`

  > 磁盘没空间了 ...............

- mysqld --initialize-insecure 报错 error

  > 我是直接跳过然后进数据库 mysql -uroot -p

- 数据库操作第三第四条操作无效

  > 无法解决

- 最后发现好像是要可视化窗口才能操作

  > ?????????????????

https://blog.csdn.net/Forrest__shao/article/details/104402039?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158502884819195239811386%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158502884819195239811386&biz_id=0&utm_source=distribute.pc_search_result.none-task

##

## 开放端口

```
yum -y install net-tools
netstat -ntpl (TCP类型的端口)

1.先查看防火墙是否开启的状态，以及开放端口的情况：
systemctl status firewalld.service(查看防火墙开启还是关闭)
sudo firewall-cmd --list-all(可以查看端口开放情况)
问题:firewall-cmd not runing
解决:service firewalld start
问题:firewall-cmd 未找到
解决:安装 yum install firewalld systemd -y


2.使用以下命令来开启或者关闭虚拟机的防火墙
systemctl stop firewalld.service(停止防火墙)
systemctl start firewalld.service(打开防火墙)
disable firewalld.service（关闭开机自启）
3.接下来通过以下命令开放http 8080（80） 端口：
sudo firewall-cmd --add-service=http --permanent (允许http服务)
sudo firewall-cmd --add-port=8080/tcp --permanent（打开8080端口）
注：命令末尾的–permanent表示用久有效，不加这句的话重启后刚才开放的端口就又失效了。
4.最后重启防火墙：
sudo firewall-cmd --reload （查看端口开放情况）
sudo firewall-cmd --list-all
发现 services: 出现 http 服务，ports：出现了8080/80 端口：
5.本机浏览器访问虚拟机ip地址访问成功。
```

- my.cnf

```
[mysqld]
#skip-grant-tables
character-set-server=utf8mb4
collation-server=utf8mb4_bin
default-storage-engine=INNODB
max_allowed_packet=256M
innodb_log_file_size=2GB
sql_mode = NO_AUTO_VALUE_ON_ZERO
transaction-isolation=READ-COMMITTED
binlog_format=row


[client]
default-character-set=utf8

```

