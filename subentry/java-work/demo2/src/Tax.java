import java.util.Scanner;

public class Tax {
    public void calc() {

        Scanner input = new Scanner(System.in);
        System.out.println("请输入税前工资:");
        double salary = input.nextDouble();
        System.out.println("请输入抵扣项总额");
        double deduction = input.nextDouble();

        if (salary > 1 && salary <= 5000) {
            System.out.println("税率为 0%");
            System.out.println("个税扣除 0");
            System.out.println("税后输入 " + salary + "元");
        }

        if (salary > 5001 && salary <= 8000) {
            System.out.println("税率为 3%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.03);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.03) + "元");
        }

        if (salary > 8001 && salary <= 17000) {
            System.out.println("税率为 10%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.1);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.1) + "元");
        }

        if (salary > 17001 && salary <= 30000) {
            System.out.println("税率为 20%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.2);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.2) + "元");
        }

        if (salary > 30001 && salary <= 40000) {
            System.out.println("税率为 25%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.25);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.25) + "元");
        }

        if (salary > 40001 && salary <= 60000) {
            System.out.println("税率为 30%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.3);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.3) + "元");
        }

        if (salary > 60001 && salary <= 85000) {
            System.out.println("税率为 35%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.35);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.35) + "元");
        }

        if (salary > 85001) {
            System.out.println("税率为 45%");
            System.out.println("个税扣除 " + (salary - deduction - 5000) * 0.45);
            System.out.println("税后输入 " + (salary - 1000 - (salary - deduction - 5000) * 0.45) + "元");
        }
    }
}
