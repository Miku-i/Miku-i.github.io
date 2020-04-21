const readline = require('readline');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
});


async function query(sql, params) {
    connection.connect();

    return await new Promise((resolve, reject) => {
        connection.query(sql, params, function (error, results) {
            if (error) {
                reject(error)
            }

            resolve(results)

            connection.end();
        })

    })


}


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

(async () => {
    var username = await input("请输入用户名:")
    var password = await input("请输入密码:")

    var result = await query('SELECT * FROM user WHERE username=? LIMIT 1', [username]);

    if (result.length === 0) {
        console.log("用户名或密码不匹配")
        return
    }

    var user = result[0]

    console.log("username:" + username)
    console.log("password:" + password)

    if (user.password_hash === password) {
        console.log("登录成功")
    } else {
        console.log("用户名或密码不匹配")
    }

})()

