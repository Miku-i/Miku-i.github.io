import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Scanner;
public class ChatRoom {
    Scanner input = new Scanner(System.in);
    Users userService=new Users();
    Messages messageService=new Messages();
    Message message = new Message();
    int isLock=1;
    int nextid =0;
    //聊天室主页
    public void show(){
        System.out.println("========================================");
        System.out.println("\t\t\t欢迎进入内部交流系统\tv0.1");
        System.out.println("========================================");
        System.out.println("请选择 [1]登录 [2]注册 [0]退出:");
    }
    public void start(){
        while (true){
            show();
            int num = input.nextInt();
            switch (num){
                case 1 :
                    log();
                    break;
                case 2 :
                    register1();
                    break;
                case 0 :
                    System.out.println("退出系统成功!!!");
                    System.exit(-1);
            }
        }
    }
    //登入
    public void log(){
        System.out.println("========================================");
        System.out.println("\t\t\t登 录");
        System.out.println("========================================");
        System.out.println("请输入账号:");
        String name=input.next();
        System.out.println("请输入密码:");
        String pwd=input.next();
        int id=userService.login(name,pwd);
        if (id!=-1){
            userService.updatet(name);
            System.out.println("登录成功！");
            homechat(id);
        }
        if(id==-1){
            System.out.println("账号或密码不匹配");
        }
    }
    //注册
    public void register1(){
        System.out.println("========================================");
        System.out.println("\t\t\t注 册");
        System.out.println("========================================");
        System.out.println("请输入账号:");
        String name=input.next();
        while(!checkName(name)) {
            System.out.println("用户名不合法，请重新输入：");
            name=input.next();
        }
        System.out.println("请输入密码:");
        String pwd=input.next();
        while(!checkPwd(pwd)) {
            System.out.println("密码不合法，请重新输入：");
            pwd=input.next();
        }
        System.out.println("注册成功！");
        userService.register(name,pwd);
    }
    //账号格式验证
    public static boolean checkName(String name) {
        String nJudge = "^[\u4e00-\u9fa5\\w_]{2,10}$";
        if(name.matches(nJudge)) {
            return true;
        }else {
            return false;
        }
    }
    //密码格式验证
    public static boolean checkPwd(String pwd) {
        String regExp = "^[\\w_]{4,10}$";
        if(pwd.matches(regExp)) {
            return true;
        }
        return false;
    }
    //聊天界面显示
    public void homechat(int id){
        System.out.println("========================================");
        System.out.println("\t\t聊天室");
        System.out.println("\t\t\t当前在线:"+userService.selectOnlineUsers());
        System.out.println("[1]发言\t[0]退出");
        System.out.println("==============================");


        new Thread(()->{
            while (true){
                if(isLock==1){
                    List<Message> messageList= messageService.findMessages(id,nextid);
                    nextid=messageList.size();
                    for(Message message:messageList){
                        System.out.println( userService.selectUsername(message.getFrom_user_id())+":"+message.getContent());
                    }
                }
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }).start();
        //主线程控制发言
        while (true){
            int nu=input.nextInt();
            switch (nu){
                case 1:
                    isLock=2;
                    messageService.createMessage(getContent(id));
                    isLock=1;
                    break;
                case 0:
                    isLock=2;
                    System.out.println("退出聊天");
                    break;
            }
        }
    }

    private Message getContent(int id) {
        while (true){
            System.out.println("请输入:");
            String inp=input.next();
            if(inp.startsWith("@")){
                String toUsername=inp.substring(inp.indexOf("@"));
                int toUserId=userService.selectUserId(toUsername);
                String content=inp.substring(inp.indexOf(":"));
                return new Message(id,toUserId,content,new Timestamp(new Date().getTime()));
            } else {
                return new Message(id,0,inp,new Timestamp(new Date().getTime()));
            }
        }
    }
}