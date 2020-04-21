$(function (){
    var token = localStorage.getItem('token');
    if(token != null){
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://playground.it266.com/profile?token="+token,
            success: function(result){
                let userInfo = result.data
                $(".block").css({ "display": "none" });
                $(".hidden").css({ "display": "block" });
                $('.ajax-right-top img').attr('src',userInfo.avatar)
                $('.login-title').text('Hi! '+userInfo.username)
                $('#balance').text(userInfo.balance)
                $('#message').text(userInfo.message)
                $('#point').text(userInfo.point)
            }
        });
    }	
})