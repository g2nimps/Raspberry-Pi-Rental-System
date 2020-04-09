package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.User;
import com.nimps.rpisystem.rpisystem.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepo UserRepo;

    public UserController(UserRepo UserRepo){
        this.UserRepo = UserRepo;
    }

    // Get All User
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return UserRepo.findAll();
    }

    // Create a new User
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return UserRepo.save(user);
    }

    // Get a Single User
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable(value = "id") long userId) {
        return UserRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    }

    // Update a User
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable(value = "id") long userId, @Valid @RequestBody User userDetails) {

        User user = UserRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        user.setId(userDetails.getId());
        user.setFirst_name(userDetails.getFirst_name());
        user.setLast_name(userDetails.getLast_name());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setPantherId(userDetails.getPantherId());

        User updatedUser = UserRepo.save(user);
        return updatedUser;
    }
    // Delete a User
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") long userId) {
        User user = UserRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        UserRepo.delete(user);

        return ResponseEntity.ok().build();
    }
}

