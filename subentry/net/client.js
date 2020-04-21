// 导入net模块
const net = require('net');
// 导入process模块
const readline = require('readline');
const process = require('process');

// 使用客户端方法
const client = net.Socket();
var name;
let islog = false;
client.connect(8880, '127.0.0.1', () => {
    async function input(msg) {
        return await new Promise((resolve, reject) => {

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(msg, (answer) => {

                resolve(answer.trim())

                rl.close();

            });

        })
    }

    client.on('data', (data) => {
        let message = data.toString();
        let messages = message.split(' ');
        let head = messages[0];
        let body = messages[1];

        // console.log(message);

        // var name ;
        if (messages.length === 1) {
            console.log(head);
        }
        if (messages.length === 3) {
            console.log(messages[2])
        }
        if (messages.length === 2) {
            console.log(body);

        }
        if (messages.length > 3) {
            var tmp;
            for (let i = 1; i < messages.length; i++) {
                tmp += messages[i];
            }
            // console.log(tmp);
        }
        // console.log(message);
        if (head == '1') {
            islog = true;
        }


        (async () => {
            switch (islog) {
                case false:
                    console.log('请登陆')
                    var username = await input("请输入用户名:")
                    var password = await input("请输入密码:")
                    name = username;
                    client.write(`login ${username} ${password}`);
                    break;
                case true:
                    process.stdin.setEncoding('utf8');

                    process.stdin.on('readable', () => {
                        let chunk;
                        // 使用循环确保我们读取所有的可用数据。
                        while ((chunk = process.stdin.read()) !== null) {
                            client.write('all ' + name + ': ' + chunk.trim())
                            if(chunk[0] == '@'){
                                client.write(chunk.trim())
                            }
                            // console.log('all ' + chunk)
                        }
                    });

                    process.stdin.on('end', () => {
                        process.stdout.write('结束');
                    });
                    break;
                default:
                    console.log('请登陆')
                    var username = await input("请输入用户名:")
                    var password = await input("请输入密码:")
                    name = username;
                    client.write(`login ${username} ${password}`);
                    break;
            }
        })();

    })

})