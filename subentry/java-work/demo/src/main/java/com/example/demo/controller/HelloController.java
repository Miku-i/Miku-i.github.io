package com.example.demo.controller;


import com.example.demo.dto.DemoRequest;
import com.example.demo.entity.Book;
import com.example.demo.until.Result;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/hello/hi")
    public String hi() {
        return "hi";
    }

    @GetMapping("/hello/getBook")
    public Book getBook() {
        Book book = Book.builder().id(1).name("java").build();

        return book;
    }

    @GetMapping("/hello/getBooks")
    public List<Book> getBooks() {
        List<Book> books = new ArrayList<>();

        books.add(Book.builder().id(1).name("java").build());
        books.add(Book.builder().id(2).name("js").build());

        return books;
    }

    @GetMapping("/hello/GetResult")
    public Result<Book> GetResult() {
        Book book = Book.builder().id(1).name("java").build();

        Result result = new Result<Book>("SUCESS", null, book);

        return result;
    }


    @GetMapping("/hello/GetResult2")
    public Result<List<Book>> GetResult2() {
        List<Book> books = new ArrayList<>();

        books.add(Book.builder().id(1).name("java").build());
        books.add(Book.builder().id(2).name("js").build());
        Result result = new Result<List<Book>>("SUCESS", null, books);

        return result;
    }


    @GetMapping("/hello/params")
    public String params(DemoRequest demoRequest) {
        System.out.println(demoRequest.getName());
//        System.out.println(page);
//        System.out.println(limit);
//        String demo = name + "," + page + "," + limit;
        return "demo";
    }





    @PostMapping("/hello/paramsPost")
    public String paramsPost(DemoRequest demoRequest) {
        System.out.println(demoRequest.getName());
        System.out.println(demoRequest.getPage());
        System.out.println(demoRequest.getLimit());
//        System.out.println(page);
//        System.out.println(limit);
//        String demo = name + "," + page + "," + limit;
        return "demo";
    }


    @PostMapping("/hello/paramsPost2")
    public String paramsPost2(@RequestBody DemoRequest demoRequest) {
        System.out.println(demoRequest.getName());
        System.out.println(demoRequest.getPage());
        System.out.println(demoRequest.getLimit());
//        System.out.println(page);
//        System.out.println(limit);
//        String demo = name + "," + page + "," + limit;
        return "demo";
    }

    @PostMapping("/hello/book/{bookid}")
    public String paramsPost3(@PathVariable String bookid) {
        System.out.println(bookid);
        return "demo";
    }

}
