package com.projectajax;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

@Component
@Slf4j
public class TodoDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
    public TodoDAO(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/project1", "root", "1234");
        }
        catch (Exception e){
            log.error(e.toString());
        }


    }

    public boolean doPost(TodoDTO todoDTO){
        try {
            String sql = "insert into board(title,content) values(?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, todoDTO.getTitle());
            ps.setString(2,todoDTO.getContent());
            int count =ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }
        catch (Exception e){
            log.error(e.toString());
        }
        return false;
    }
    public ArrayList<TodoDTO> doGet(){
        ArrayList<TodoDTO> result = new ArrayList<>();
        try {
            String sql = "select * from board";
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()){
                result.add(new TodoDTO(rs.getInt(1), rs.getString(2),rs.getString(3)));
            }
        }
        catch (Exception e){
            log.error(e.toString());
        }
        return result;
    }
    public boolean doDelete(int id){
        try {
            String sql = "delete from board where bno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,id);
            int count = ps.executeUpdate();
            if(count == 1){return true;}
        }
        catch (Exception e){
            System.out.println(e);
        }
        return false;
    }
    public boolean doPut(TodoDTO todoDTO){
        try {
            String sql = "update board set title = ? , content = ? where bno = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,todoDTO.getTitle());
            ps.setString(2,todoDTO.getContent());
            ps.setInt(3,todoDTO.getBno());
            int count = ps.executeUpdate();
            if(count == 1){return true;}

        }
        catch (Exception e){
            System.out.println(e);
        }
        return false;
    }
    public TodoDTO show(int value){
        try {
            String sql = "select * from board where bno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,value);
            rs = ps.executeQuery();
            if(rs.next()){
                return new TodoDTO(rs.getInt(1),rs.getString(2),rs.getString(3));
            }

        }
        catch (Exception e){
            System.out.println(e);
        }
        return null;
    }
}
