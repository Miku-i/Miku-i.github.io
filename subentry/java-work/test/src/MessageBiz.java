import java.util.List;
public interface MessageBiz {
    List<Message> findMessages(int userId,int nextId);
    void createMessage(Message message);

}
