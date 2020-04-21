CREATE TABLE `users`(
    `id` INT UNIQUE AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
    `username` VARCHAR(50)  NOT NULL COMMENT '帐号',
    `password_hash` char(32)  NOT NULL COMMENT '密码哈希值(md5)',
    `status` INT  NOT NULL DEFAULT 1 COMMENT '状态(1.正常用户 2.黑名单用户)',
    `last_active_at` datetime NOT NULL DEFAULT NULL COMMENT '最近活动时间(距离当前时间小于2分钟表示在线)',
    `created_at` datetime NOT NULL DEFAULT NULL COMMENT '注册时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `message`(
    `id` INT UNIQUE AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
    `from_user_id` INT NOT NULL COMMENT '发信息人id',
    `to_user_id` INT  NOT NULL DEFAULT 0 COMMENT '接收信息人id (如果为0，表示大厅公开聊天)',
    `content` text  NOT NULL  COMMENT '消息内容',
    `created_at` datetime NOT NULL COMMENT '发信息时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO user VALUES (

0,
admin,
21232f297a57a5a743894a0e4a801fc3,
1,
2020-03-16 01:11:40,

)



INSERT INTO user VALUES (

0,
0,
0,
"[系统]: "+id+"进入了聊天室，当前在线人数:" 4,
2020-03-16 01:11:40,

)