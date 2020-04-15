# Java

## 字符串

- **字符串比较问题**

```
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        List<UserTest> userList = new ArrayList();

        UserTest u = new UserTest("李七夜");
        userList.add(u);

        System.out.println("输入：" + userList.get(0).name);
        String test = input.nextLine();

//        String name = String.valueOf(test);


            if (userList.get(0).name == test) {
                System.out.println("相等");
            } else {
                System.out.println(test instanceof String);
                System.out.println(userList.get(0).name instanceof String);
                System.out.println("不等");
            }




    }
}

```

```
public class UserTest {
    public String name;


    public UserTest(String name){
        this.name = name;
    }
    }
}

```

- 经典错误:不相等
- 原因:
  - 两个变量的内存地址不一样，也就是说它们指向的对象不一样
- 解决:
  - .equals()
  - userList.get(0).name.equals(test) 是 true
  - 两个变量的所包含的内容是李七夜，故相等。

```
Scanner input = new Scanner(System.in);
String test = input.nextLine();
String test = input.nextLine();
一定要多一个 去消掉回车
```

