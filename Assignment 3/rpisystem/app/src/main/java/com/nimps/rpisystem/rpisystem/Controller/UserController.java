package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.User;
import com.nimps.rpisystem.rpisystem.Services.IUserService;
import com.nimps.rpisystem.rpisystem.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private IUserService userService;

//    public UserController(UserRepo UserRepo){
//        this.UserRepo = UserRepo;
//    }

    // Get All User
    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

//     Create a new User
//    @PostMapping("/api/users")
//    public User createUser(@Valid @RequestBody User user) {
//        return userService.save(user);
//    }
//
//    // Get a Single User
//    @GetMapping("/api/users/{id}")
//    public User getUserById(@PathVariable(value = "id") Long userId) {
//        return userService.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
//    }
//
//    // Update a User
//    @PutMapping("/api/users/{id}")
//    public User updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) {
//
//        User user = userService.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
//
//        user.setId(userDetails.getId());
//        user.setFirst_name(userDetails.getFirst_name());
//        user.setLast_name(userDetails.getLast_name());
//        user.setEmail(userDetails.getEmail());
//        user.setPassword(userDetails.getPassword());
//        user.setPantherId(userDetails.getPantherId());
//
//        User updatedUser = userService.save(user);
//        return updatedUser;
//    }
//    // Delete a User
//    @DeleteMapping("/api/users/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
//        User user = userService.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
//
//        userService.delete(user);
//
//        return ResponseEntity.ok().build();
//    }
}

