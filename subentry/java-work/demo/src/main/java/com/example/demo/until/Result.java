package com.example.demo.until;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Result<T> {
    private String code;
    private String message;
    private T data;
}
