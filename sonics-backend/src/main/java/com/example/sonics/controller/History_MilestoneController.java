package com.example.sonics.controller;

import com.example.sonics.model.History_Milestone;
import com.example.sonics.service.History_MilestoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/history_milestone")
public class History_MilestoneController {

    private final History_MilestoneService historyMilestoneService;

    public History_MilestoneController(History_MilestoneService historyMilestoneService) {
        this.historyMilestoneService = historyMilestoneService;
    }

    @GetMapping
    public List<History_Milestone> getAllHistoryMilestones() {
        return this.historyMilestoneService.getAllMilestones();
    }
}
