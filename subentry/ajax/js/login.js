$(function () {
    $(".ajax-login").click(function () {
        var username = $(".username").val()
        var password = $(".password").val()
        if (username.length == 0) {
            $(".err").toggle();
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://playground.it266.com/login",
            data: { "username": username, "password": password },
            dataType: "json",
            success: function (result) {
                if (result.status == true) {
                    location.href = "ajax.html";
                    window.localStorage.setItem('token', result.data.token);
                } else {
                    $(".err").toggle();
                    return;
                }
            },
            error: function () {
                alert("出错了");
            }
        })
    })
})


