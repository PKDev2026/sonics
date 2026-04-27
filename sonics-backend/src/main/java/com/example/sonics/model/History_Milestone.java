package com.example.sonics.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "history_milestones")
@Data
public class History_Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "year",  nullable = false)
    private Integer year;

    @Column(name = "event_title")
    private String event;

    @Column(name = "description")
    private String description;

    @Column(name = "is_championship", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean championship;
}
