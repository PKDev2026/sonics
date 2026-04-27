package com.example.sonics.service;

import com.example.sonics.model.History_Milestone;
import com.example.sonics.repository.History_MilestoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class History_MilestoneService {

    @Autowired
    private History_MilestoneRepository historyMilestoneRepository;

    public History_MilestoneService(History_MilestoneRepository historyMilestoneRepository) {
        this.historyMilestoneRepository = historyMilestoneRepository;
    }

    public List<History_Milestone> getAllMilestones() {
        return historyMilestoneRepository.findAll();
    }
}
