# Java使用JDBC操作MySQL数据库

-  选择版本 `mysql-connector-java-5.1.48.jar`
-   https://mvnrepository.com/artifact/mysql/mysql-connector-java

## 将下载的MySQL驱动jar包移动到lib目录，编写`BookDao.java`类，目录结构如下

```
- BookDao.java
- lib/
    - mysql-connector-java-5.1.48.jar
```

```
mac 遇到的问题
- cp mysql-connector-java-5.1.48.jar /usr/lib
cp: /usr/lib/mysql-connector-java-5.1.48.jar: Operation not permitted

解决: 重启 command + r 打开终端输入 csrutil disable

- sudo cp mysql-connector-java-5.1.48.jar /usr/lib
Password:
cp: /usr/lib/mysql-connector-java-5.1.48.jar: Read-only file system

解决:sudo mount -uw /


sudo cp mysql-connector-java-5.1.48.jar /usr/lib
```

​	