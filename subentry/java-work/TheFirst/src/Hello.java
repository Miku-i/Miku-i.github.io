import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;// 导包， 找到Scanner的位置

public class Hello {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // 获取键盘输入
        System.out.print("======欢迎进入会员管理系统======\n");
        System.out.println("\n");
        welcome(); // 调用欢迎页面
        List<User> userList = new ArrayList();

        while (true) {
            int choose = input.nextInt(); // 获取输入

            switch (choose) {
                case 1:
                    System.out.println("------查看会员------\n");
                    System.out.println("姓名\t性别\t手机\t积分\t\n");
                    for (User user : userList) {
                        System.out.println(
                                user.name + "\t" +
                                        user.sex + "\t" +
                                        user.tel + "\t" +
                                        user.total + "\t\n"
                        );

                    }
                    break;
                case 2:
                    System.out.println("------新增会员------\n");
                    System.out.print("请输入名称:");
                    int string1 = input.nextInt();
                    String name = String.valueOf(string1);

                    System.out.print("请输⼊性别(0⼥1男):");
                    String sex;
                    int sexnum = input.nextInt();
                    switch (sexnum) {
                        case 0:
                            sex = "女";
                            break;
                        case 1:
                            sex = "男";
                            break;
                        default:
                            sex = "人妖";
                            System.out.println("乱写性别，设置为人妖。");
                    }
                    System.out.print("请输⼊⼿机:");
                    int tel = input.nextInt();
                    System.out.print("请输入积分:");
                    int total = input.nextInt();

                    User user = new User(name, sex, tel, total); // 新的用户数据
                    userList.add(user); // 添加到userlist
                    welcome();
                    break;
                case 3:
                    System.out.println("------修改会员------\n");
                    System.out.println("请输入要修改的积分的手机号码");
                    int changeTel = input.nextInt();
                    System.out.println("请输入要修改的积分");
                    int changeTotal = input.nextInt();

                    for (int i = 0; i < userList.size(); i++) {
                        if (userList.get(i).tel == changeTel) {
                            userList.get(i).change(changeTel, changeTotal); // 调用对象的方法改变值
                            System.out.println("[保存成功]");
                        } else {
                            System.out.println("查无此人");
                        }
                    }
                    welcome();
                    break;
                case 0:
                    System.out.println("感谢您的下次使用");
                    return;
                default:
                    System.out.println("请输入正确的数字\n");
                    welcome();
                    break;
            }
        }
    }


    // 欢迎界面
    public static void welcome() {

        System.out.print("------主菜单------\n");
        System.out.print("1. 查看会员\n");
        System.out.print("2. 新增会员\n");
        System.out.print("3. 积分管理\n");
        System.out.print("0. 退出\n");

    }
}
