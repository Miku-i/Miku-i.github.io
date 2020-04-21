import sun.security.util.ArrayUtil;

import java.util.Arrays;
import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        System.out.println("按1为打印矩形");
        System.out.println("按2为冒泡排序");
        System.out.println("按3为个人所得税计算器");
        System.out.println("按0为退出");

        // 获取键盘输入
        Scanner input = new Scanner(System.in);
        int choose = input.nextInt();


        switch (choose) {
            case 1:
                new Rectangle().draw();
                break;
            case 2:
                int arr[] = {2, 5, 1, 7, 8, 4, 3, 9, 4};
                arr = new Bubble().sort(arr);
                System.out.println(Arrays.toString(arr));
                break;
            case 3:
                new Tax().calc();
                break;
            case 0:
                System.out.println("感谢你的使用");
                return;
            default:
                System.out.println("请输入正确的数字");
                break;
        }
    }
}
