package com.example.sonics.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "social_links")
@Data
public class Social_Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "platform_name")
    private String platform;

    @Column(name = "handle")
    private String handle;

    @Column(name = "url")
    private String url;
}
