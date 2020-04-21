
import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Messages implements MessageBiz {
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
    public List<Message> findMessages(int userId,int nextId) {
        List<Message> messageList=new ArrayList<>();
        Connection conn=getConnection();
        PreparedStatement stmt;
        ResultSet rs ;
        try{
            String sql = "SELECT * FROM message WHERE to_user_id =? or to_user_id=0 and id>? order by id limit 5 ";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1,userId);
            stmt.setInt(2,nextId);
            rs=stmt.executeQuery();
            while (rs.next()){
                int id=rs.getInt("id");
                int fromUserId=rs.getInt("from_user_id");
                int toUserId=rs.getInt("to_user_id");
                String content=rs.getString("content");
                Timestamp createdAt=rs.getTimestamp("created_at");
                messageList.add(new Message(id,fromUserId,toUserId,content,createdAt));
            }
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return messageList;
    }

    @Override
    public void createMessage(Message message) {
        Connection conn=getConnection();
        PreparedStatement stmt;
        try{
            String sql = "INSERT INTO message (from_user_id,to_user_id,content,created_at) VALUES (?,?,?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1,message.getFrom_user_id());
            stmt.setInt(2,message.getTo_user_id());
            stmt.setString(3,message.getContent());
            stmt.setTimestamp(4,message.getCreatedAt());
            stmt.execute();
            stmt.close();
            conn.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
