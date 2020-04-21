import java.util.*;
import java.util.List;

public class Stu {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // 获取键盘输入
        List<StuUser> user = new ArrayList(); // 存放学生信息
        Map<String, Integer> people = new HashMap<>(); // 男女人数
        List<ClassList> classList = new ArrayList(); // 班级

        classList.add(new ClassList(1,"一班"));
        classList.add(new ClassList(2,"二班"));
        classList.add(new ClassList(3,"三班"));


        StuUser stu1 = new StuUser(2019110101, 1, "张三", 18, "男", 88.88);
        StuUser stu2 = new StuUser(2019110102, 2, "王舞", 19, "女", 66.66);
        user.add(stu1);
        user.add(stu2);

        System.out.println("======欢迎进入学员管理系统======");
        welcome();
        while (true) {
            int choose = input.nextInt(); // 获取输入
            switch (choose) {
                case 1:
                    for (StuUser u : user) {
                        System.out.println("学号\t班级ID\t姓名\t年龄\t性别\t饭卡余额");
                        System.out.println(u.stuNum + "\t" + u.classId + "\t" + u.name + "\t" + u.age + "\t" + u.sex + "\t" + u.money);
                    }
                    welcome();
                    break;
                case 2:
                    System.out.println("------新增学员------\n");
                    System.out.println("请输入学号");
                    int stuNum = input.nextInt();
                    int flag1 = 0;
                    for (StuUser u : user) {
                        if (u.stuNum == stuNum) {
                            System.out.println("该学号学员已存在");
                            flag1 = 1;
                            break;
                        }

                    }
                    if(flag1 == 1){
                        welcome();
                        break;
                    }
                    System.out.println("请输入班级ID");
                    int classId = input.nextInt();
                    String str = input.nextLine(); // 吸收回车
                    System.out.println("请输入姓名");
                    String name = input.nextLine();

                    System.out.println("请输入年龄");
                    int age = input.nextInt();

                    System.out.println("请输入性别(0:人妖 1:男 2:女)");
                    int sexNum = input.nextInt();
                    String sex;
                    switch (sexNum) {
                        case 1:
                            sex = "男";
                            break;
                        case 2:
                            sex = "女";
                            break;
                        default:
                            sex = "人妖";
                            System.out.println("乱写性别，设置为人妖。");
                    }
                    System.out.println("请输入饭卡余额");
                    double money = input.nextInt();
                    StuUser stu = new StuUser(stuNum, classId, name, age, sex, money);
                    user.add(stu);
                    System.out.println("添加成功");
                    welcome();
                    break;
                case 3:
                    System.out.println("------充值饭卡------\n");
                    System.out.println("请输入要充值的学号");
                    int changeStuNum = input.nextInt();
                    System.out.println("请输入要充值的数值");
                    double changeMoney = input.nextDouble();
                    int flag = 0; // 使用标记，备注：感谢磊哥，卡了我5分钟这里

                    for (int i = 0; i < user.size(); i++) {
                        if (user.get(i).stuNum == changeStuNum) {
                            flag = 0;
                            user.get(i).change(changeStuNum, changeMoney); // 调用对象的方法改变值
                            System.out.println("[充值成功]");
                            break;
                        }
                        if (user.get(i).stuNum != changeStuNum) {
                            flag = 1;
                        }
                    }
                    if (flag == 1) {
                        StuUser stu3 = new StuUser(changeStuNum,"人妖", changeMoney);
                        user.add(stu3);
                    }
                    welcome();
                    break;
                case 4:
                    Integer man = new Integer(0);
                    Integer women = new Integer(0);
                    Integer shemale = new Integer(0);

                    for (int i =0;i < user.size(); i++) {


                        switch (user.get(i).sex) {
                            case "男":
                                man++;
                                people.put(user.get(i).sex,man);
                                break;
                            case "女":
                                women++;
                                people.put(user.get(i).sex,women);
                                break;
                            case "人妖":
                                shemale++;
                                people.put(user.get(i).sex,shemale);
                                break;
                        }
                    }
                    for(String key : people.keySet()){
                        System.out.println(key + ":" + people.get(key));
                    }
                    welcome();
                    break;
                case 5:
                    String classNames = "";
                    for (StuUser u : user) {
                        for(ClassList l : classList){
                           if(l.classId == u.classId){
                               classNames = l.className;
                           }
                        }
                        System.out.println("学号\t班级\t姓名\t年龄\t性别\t饭卡余额");
                        System.out.println(u.stuNum + "\t" + classNames + "\t" + u.name + "\t" + u.age + "\t" + u.sex + "\t" + u.money);
                    }
                    welcome();
                    break;
                case 6:
                    String className = "未知";
                    for (StuUser u : user) {
                        for(ClassList l : classList){
                            if(l.classId == u.classId){
                                className = l.className;
                            }
                        }
                        System.out.println( className +"\n" );
                        System.out.println("学号\t姓名\t年龄\t性别\t饭卡余额");
                        System.out.println(u.stuNum + "\t"+ u.name + "\t" + u.age + "\t" + u.sex + "\t" + u.money);
                        className = "未知";
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

    public static void welcome() {
        System.out.print("------主菜单------\n");
        System.out.print("1. 查看学生信息\n");
        System.out.print("2. 新增学生\n");
        System.out.print("3. 饭卡充值\n");
        System.out.print("4. 统计男女学生\n");
        System.out.print("5. 精确查看学生信息\n");
        System.out.print("6. 班级查看学生信息\n");
        System.out.print("0. 退出\n");
    }
}
