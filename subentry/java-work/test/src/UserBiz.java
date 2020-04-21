public interface UserBiz {
    User register(String username, String password);//注册
    int login(String username, String password);//登入
    int selectOnlineUsers();//多少人在线
    void updatet(String username);//是否在线
    String selectUsername(int id);//获取名字
    int selectUserId(String username);//获取id
}
