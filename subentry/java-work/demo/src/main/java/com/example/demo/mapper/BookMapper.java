package com.example.demo.mapper;

import com.example.demo.entity.Book;
import org.apache.ibatis.annotations.Select;
import com.example.demo.until.Pagination;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface BookMapper {

    @Select("SELECT * FROM book")
    List<Book> findAllBooks();

    @Select("SELECT * FROM book WHERE id=#{id} LIMIT 1")
    Book findBookById(@Param("id") int id);

    @Insert("INSERT INTO book (name, `describe`) VALUES ( #{name}, #{describe} )")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Book book);

    @Update("UPDATE book SET name=#{book.name}, `describe`=#{book.describe} WHERE id=#{id}")
    int update(@Param("id") int bookId, @Param("book") Book book);

    @Delete("DELETE FROM book WHERE id=#{id}")
    int delete(@Param("id") int id);

    @Select("<script>" +
            "SELECT * FROM book WHERE id in" +
            "<foreach collection='ids' item='item' index='index' open='(' separator=',' close=')'> #{item} </foreach>" +
            "</script>")
    List<Book> findBooksByIds(@Param("ids") List<Integer> ids);


    //MyBatis会自动处理WHERE后紧跟的多余AND
    @Select("<script>" +
            "SELECT * FROM book" +
            "<where>" +
            "<if test='book.name != null'> AND name LIKE CONCAT('%', #{book.name}, '%') </if>" +
            "<if test='book.id != 0'> AND id=#{book.id}</if> " +
            "</where>" +
            " ORDER BY id DESC" +
            " LIMIT #{pagination.offset}, #{pagination.limit}" +
            "</script>")
    List<Book> findBooks(@Param("book") Book book, @Param("pagination") Pagination pagination);

    @Select("<script>" +
            "SELECT COUNT(*) FROM book" +
            "<where>" +
            "<if test='book.name != null'> AND name LIKE CONCAT('%', #{book.name}, '%') </if>" +
            "<if test='book.id != 0'> AND id=#{book.id} </if>" +
            "</where> " +
            "</script>")
    long count(@Param("book") Book book);

}
