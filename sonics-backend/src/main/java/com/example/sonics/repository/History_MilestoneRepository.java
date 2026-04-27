package com.example.sonics.repository;

import com.example.sonics.model.History_Milestone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface History_MilestoneRepository extends JpaRepository<History_Milestone, Integer> {
}
