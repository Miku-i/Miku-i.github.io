
var banner = document.getElementById("banner");
var img = banner.getElementTagNames('img');
var li = banner.getElementClassNames("round").getElementTagNames("li");

var num = 0; // 图片索引, 第几张图片
run();
timer = setInterval(run, 2000);

// 定时切换图片
function run() {
    // 超出图片个数, 重置为0, 重新从第一张开始计数
    if (num >= img.length) {
        num = 0;
    }

    showImg(num);
    num++;
}

// 显示第n张图片
function showImg(n) {
    // 隐藏所有图片
    for (var i = 0; i < img.length; i++) {
        img[i].style.opacity = 0;

        li[i].style.background = 'rgba(181, 181, 181, 0.2)';
    }

    // 单独显示第n张
    img[n].style.opacity = 1;
    li[n].style.background = 'rgb(255, 106, 0)';
}

