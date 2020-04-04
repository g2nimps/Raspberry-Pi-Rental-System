package com.nimps.rpisystem.rpisystem.Service;

import com.nimps.rpisystem.rpisystem.User;
import java.util.*;

public interface IUserService{
    List<User> findAll();
    User findById(int id);
    void deleteUser(User user);
}