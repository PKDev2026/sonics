package com.example.sonics.repository;

import com.example.sonics.model.Social_Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Social_MediaRepository extends JpaRepository<Social_Media, Integer> {
}
