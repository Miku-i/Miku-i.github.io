// 导入net模块
const net = require('net');

// mysql
const mysql = require('mysql');

// 搜索数据库

// 接收
let users = []; // 用户的数量
// 创建服务端
const server = net.createServer((sock) => {
    sock.write('hi你好')

    let username = [];

    // 接收到用户的数据
    sock.on('data', (data) => {
        let sql = 'SELECT * FROM test';
        let message = data.toString();
        let messages = message.split(' ');
        let head = messages[0];
        let user = messages[1];
        
        // let body = Chat[1].trim();
        // console.log(message)
        let pwd = messages[2];
        let count = 0;
        // console.log(user, user.length);

        async function searchMysql(sql) {
            return await new Promise((res, rej) => {
                let connection = mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: 'onion',
                    port: '3306',
                    database: 'test'
                });

                connection.connect();

                //查
                connection.query(sql, function (err, result) {
                    res(result);
                    connection.end();
                });

            })
        }

        async function regarding(mysqlMessages) {
            return await new Promise((res, rej) => {

                if (head == 'login') {
                    for (let i = 0; i < mysqlMessages.length; i++) {
                        if (mysqlMessages[i].user == user && mysqlMessages[i].pwd == pwd) {
                            sock.write('1 登陆成功');
                            username.push(sock);
                            username.push(user);
                            users.push(username);
                            // console.log(username);
                            return;
                        }
                    }
                    sock.write('0 登陆失败');
                    return
                }
                // 群聊
                if (head == 'all') {
                    for (let i in users) {
                        (users[i])[0].write(message.substr(4))
                    }
                };

                if(head == '@'){
                    
                        let othername=messages[1];//收信人账号
                        let realmessage=messages[2]
                        users.map((client)=>{
                            if(othername==client[1]){
                                client[0].write(realmessage);
                            }   
                        });
                        
                }
            })
        }

        (async () => {
            // console.log(message)
            let mysqlMessages = await searchMysql(); // 真的数据库
            await regarding(mysqlMessages);
        })()

    })

});
// 服务器开启的端口
let port = 8880;
server.listen(port, `0.0.0.0`);
console.log(`服务器：${port}端口创建成功`);