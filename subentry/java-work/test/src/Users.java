import javax.swing.*;
import java.sql.*;
import java.util.HashSet;
import java.util.Date;
import java.util.Set;


public class Users implements UserBiz {
    private Connection getConnection(){
        Connection conn = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://127.0.0.1:3306/demo?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai";
            conn = DriverManager.getConnection(url, "root", "root");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }
    @Override
    public  User register(String username, String password) {
        Connection conn=getConnection();
        PreparedStatement stmt;

        try{
            String sql = "INSERT INTO user (username, password_hash) VALUES (?, ?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,username);
            stmt.setString(2,password);
            stmt.execute();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int login(String username, String password) {
        Connection conn=getConnection();
        PreparedStatement stmt;
        ResultSet rs = null;
        int id=-1;
        try{
            String sql = "SELECT * FROM USER WHERE USERNAME=? AND PASSWORD_HASH =?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,username);
            stmt.setString(2,password);
            rs = stmt.executeQuery();
            while(rs.next()){
                id = rs.getInt("id");
                username=rs.getString("username");
            }
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

    @Override
    public int selectOnlineUsers() {
        Connection conn=getConnection();
        PreparedStatement stmt;
        ResultSet rs = null;
        Set<Integer> userSet=new HashSet<>();
        try {
            String sql = "SELECT id FROM USER ";
            stmt = conn.prepareStatement(sql);
            rs=stmt.executeQuery();
            while (rs.next()){
                userSet.add(rs.getInt("id"));
            }
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return userSet.size();
    }

    @Override
    public void updatet(String username) {
        Connection conn=getConnection();
        PreparedStatement stmt;
        try{
            String sql = "UPDATE USER SET LAST_ACTIVE_AT =? WHERE USERNAME=?";
            stmt = conn.prepareStatement(sql);
            stmt.setTimestamp(1,new Timestamp(new Date().getTime()));
            stmt.setString(2,username);
            stmt.executeUpdate();
            stmt.close();
            conn.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public String selectUsername(int id) {
        Connection conn=getConnection();
        PreparedStatement stmt;
        ResultSet rs;
        String username=null;
        try {
            String sql = "SELECT USERNAME FROM USER WHERE ID=?";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1,id);
            rs =stmt.executeQuery();
            while (rs.next()){
                username=rs.getString("username");
            }
            stmt.close();
            conn.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return username;
    }

    @Override
    public int selectUserId(String username) {
        Connection conn=getConnection();
        PreparedStatement stmt;
        ResultSet rs;
        int id=-1;
        try{
            String sql = "SELECT USERNAME FROM USER WHERE ID=?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,username);
            rs =stmt.executeQuery();
            while (rs.next()){
                id=rs.getInt("id");
            }
            stmt.close();
            conn.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

}
