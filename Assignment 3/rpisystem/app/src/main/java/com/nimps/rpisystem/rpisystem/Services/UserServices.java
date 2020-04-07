package com.nimps.rpisystem.rpisystem.Services;

import com.nimps.rpisystem.rpisystem.User;
import com.nimps.rpisystem.rpisystem.Repository.UserRepo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices implements IUserService{

    @Autowired
    private UserRepo userRepo;

    public List<User> findAll(){
        return (List<User>) userRepo.findAll();
    }

//    public User findById(int id){
//        List<User> users = findAll();
//        for(int i = 0; i < users.size(); i++){
//            User user = users.get(i);
//            if(user.id == id){
//                return user;
//            }
//        }
//        return null;
//    }
//
//    public void deleteUser(User user){
//        User userToDelete = findById(user.id);
//        if(userToDelete != null){
//            userRepo.delete(userToDelete);
//        }
//    }
}