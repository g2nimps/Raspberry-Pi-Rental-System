package com.nimps.rpisystem.rpisystem.Service;

import com.nimps.rpisystem.rpisystem.User;
import com.nimps.rpisystem.rpisystem.Repository.UserRepo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{

    @Autowired
    private UserRepo userRepo;

    public List<User> findAll(){
        return (List<User>) userRepo.findAll();
    }

    public User findById(int id){
        List<User> users = findAll();
        for(int i = 0; i < users.size(); i++){
            User user = users.get(i);
            if(user.Id == id){
                return user;
            }
        }
        return null;
    }

    public void deleteUser(User user){
        User userToDelete = findById(user.Id);
        if(userToDelete != null){
            userRepo.delete(userToDelete);
        }
    }
}