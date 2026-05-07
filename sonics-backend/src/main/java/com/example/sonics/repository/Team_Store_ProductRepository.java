package com.example.sonics.repository;

import com.example.sonics.model.Team_Store_Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Team_Store_ProductRepository extends JpaRepository<Team_Store_Product, Integer> {

    List<Team_Store_Product> findByCategory(String category);

}
