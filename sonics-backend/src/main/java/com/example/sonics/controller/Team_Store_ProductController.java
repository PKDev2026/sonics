package com.example.sonics.controller;

import com.example.sonics.model.Staff;
import com.example.sonics.model.Team_Store_Product;
import com.example.sonics.service.StaffService;
import com.example.sonics.service.Team_Store_ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/store")
public class Team_Store_ProductController {

    private final Team_Store_ProductService team_Store_ProductService;

    public Team_Store_ProductController(Team_Store_ProductService team_Store_ProductService) {
        this.team_Store_ProductService = team_Store_ProductService;
    }

    @GetMapping
    public List<Team_Store_Product> getAllInventory() {
        return this.team_Store_ProductService.getAllInventory();
    }

}
