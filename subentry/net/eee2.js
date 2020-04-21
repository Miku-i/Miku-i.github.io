const readline = require('readline');


function input(msg) {
    return new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(msg, (answer) => {

            resolve(answer)

            rl.close();

        });

    })
}

input("请输入用户名:").then((username) => {
    console.log("用户名是：" + username)

}).then(() => {

    input("请输入密码:").then((username) => {
        console.log("密码是：" + username)
    })

})
