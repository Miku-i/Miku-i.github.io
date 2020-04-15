# Spring Boot

- **start.ailiyun.com**  网站创建项目



- \+ Spring Web
- \+ MySQL Driver
- \+ MyBatis Framework

- \+ Lombok
- \+ Spring Boot DevTools
- \+ Thymeleaf



Idea

装个lombok插件







```
spring.application.name=demo
server.port=8080

spring.profiles.active=dev

spring.datasource.url=jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf8&useSSL=false&zeroDateTimeBehavior=convertToNull&serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# 列名下划线转驼峰
mybatis.configuration.map-underscore-to-camel-case=true
# 控制台打印sql
#mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```







- 管理jar包的文件:pom.xml