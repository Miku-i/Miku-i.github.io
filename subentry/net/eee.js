const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入用户名:', (answer) => {

    console.log(`输入的内容是：${answer}`);
    rl.close();

    var rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl2.question('请输入密码:', (answer) => {
        console.log(`输入的内容是：${answer}`);
        rl2.close();
    });


});

