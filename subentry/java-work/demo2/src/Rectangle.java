import java.util.Scanner;

public class Rectangle {
    public int width;
    public int height;

    public void draw() {
        Scanner input = new Scanner(System.in);


        System.out.println("请输入宽:");
        this.width = input.nextInt();

        System.out.println("请输入高:");
        this.height = input.nextInt();

        // 打印高度有几行
        for (int i = 0; i < this.height; i++) {
            // 第一行和最后一行有宽度的星星
            if (i == 0 || i == this.height - 1) {
                for (int j = 0; j < this.width; j++) {
                    System.out.printf("*");
                }
                System.out.println("");
            } else {

                // 中间是空的
                System.out.printf("*");
                for (int x = 0; x < this.width - 2; x++) {
                    System.out.printf(" ");
                }
                System.out.printf("*");
                System.out.println("");
            }


        }
    }
}
