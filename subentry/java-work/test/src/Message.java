import java.sql.Timestamp;
public class Message {
    private int id;
    private int from_user_id;
    private int to_user_id;
    private String content;
    private Timestamp createdAt;

    public Message(int id, int from_user_id, int to_user_id, String content, Timestamp createdAt) {
        this.id = id;
        this.from_user_id = from_user_id;
        this.to_user_id = to_user_id;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Message(int id, String content, Timestamp createdAt) {
        this.to_user_id = to_user_id;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Message(int from_user_id, int to_user_id, String content, Timestamp createdAt) {
        this.from_user_id = from_user_id;
        this.to_user_id = to_user_id;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Message() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFrom_user_id() {
        return from_user_id;
    }

    public void setFrom_user_id(int from_user_id) {
        this.from_user_id = from_user_id;
    }

    public int getTo_user_id() {
        return to_user_id;
    }

    public void setTo_user_id(int to_user_id) {
        this.to_user_id = to_user_id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", from_user_id=" + from_user_id +
                ", to_user_id=" + to_user_id +
                ", content='" + content + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
