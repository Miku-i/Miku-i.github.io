public class User {
    public String name;
    public String sex;
    public int tel;
    public int total;

    public User(String name, String sex, int tel, int total) {
        this.name = name;
        this.sex = sex;
        this.tel = tel;
        this.total = total;
    }

    public void change(int tel, int total) {
        if (tel == this.tel) {
            this.total = total;
        }

    }
}
