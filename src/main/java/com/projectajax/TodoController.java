package com.projectajax;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class TodoController {
    private int bno;
    @PostMapping("/show/set.do")
    public boolean setBno(@RequestParam("i") Integer i) {
        // 요청으로 전달된 파라미터 i를 bno 변수에 할당합니다.
        if (i == null) {
            return false; // i가 null인 경우 false를 반환합니다.
        }
        this.bno = i;

        // 응답은 성공 상태 코드만 반환합니다.
        return true;
    }

    @GetMapping("/show/get")
    public TodoDTO show(@RequestParam("i") Integer i){
        return todoDao.show(i);
    }

    @GetMapping("/show/get.do")
    public int getBno(){
        return bno;
    }

    @Autowired
    private TodoDAO todoDao;
    @PostMapping("/todo/post.do")
    public boolean doPost(TodoDTO todoDto){
        return todoDao.doPost(todoDto);
    }
    @GetMapping("/todo/get.do")
    public ArrayList<TodoDTO> doGet(){
        return todoDao.doGet();
    }


    //localhost:80/todo/get.do
    @PostMapping("show/put.do")
    public boolean doPut(TodoDTO todoDto){
        return todoDao.doPut(todoDto);
    }
    @DeleteMapping("show/delete.to")
    public boolean doDelete(@RequestParam("i") int i){
        return todoDao.doDelete(i);
    }


}
