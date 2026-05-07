package com.example.sonics.service;

import com.example.sonics.model.Team_Store_Product;
import com.example.sonics.repository.Team_Store_ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class Team_Store_ProductService {

    private final Team_Store_ProductRepository team_Store_ProductRepository;

    public Team_Store_ProductService(Team_Store_ProductRepository team_Store_ProductRepository) {
        this.team_Store_ProductRepository = team_Store_ProductRepository;
    }

    public List<Team_Store_Product> getAllInventory() {
        return team_Store_ProductRepository.findAll();
    }
}
