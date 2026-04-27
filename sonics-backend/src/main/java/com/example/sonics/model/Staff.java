package com.example.sonics.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "staff")
@Data
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "full_name",  nullable = false)
    private String name;

    @Column(name = "role")
    private String role;

    @Column(name = "department")
    private String department;

    @Column(name = "bio")
    private String bio;

    @Column(name = "image_url")
    private String url;
}
