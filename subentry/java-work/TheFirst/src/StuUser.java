public class StuUser {
    public int stuNum;
    public int classId;
    public String name;
    public int age;
    public String sex;
    public double money;

    public StuUser(int stuNum, int classId, String name, int age, String sex, double money) {
        this.stuNum = stuNum;
        this.classId = classId;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.money = money;
    }

    public StuUser(int stuNum, String sex, double money) {
        this.stuNum = stuNum;
        this.sex = sex;
        this.money = money;
    }

    public void change(int stuNum, double money) {
        if (stuNum == this.stuNum) {
            this.money = money + this.money;
        }

    }


}
