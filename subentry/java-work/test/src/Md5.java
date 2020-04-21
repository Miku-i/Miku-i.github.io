import org.apache.commons.codec.digest.DigestUtils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

//public class Md5 {
//    public static String stringToMD5(String password) {
//        byte[] secretBytes = null;
//        try {
//            secretBytes = MessageDigest
//                    .getInstance("md5")
//                    .digest(password.getBytes());
//
//        } catch (NoSuchAlgorithmException e) {
//            throw new RuntimeException("没有这个md5算法！");
//        }
//        String md5code = new BigInteger(1, secretBytes).toString(16);
//        for (int i = 0; i < 32 - md5code.length(); i++) {
//            md5code = "0" + md5code;
//        }
//        return md5code;
//    }
//
//}


public class Md5{
    public static String Md5(String password){
        return DigestUtils.md5Hex(password);
    };
}