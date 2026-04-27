package com.example.sonics.controller;

import com.example.sonics.model.Social_Media;
import com.example.sonics.service.Social_MediaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/social_media")
public class Social_MediaController {

    private final Social_MediaService socialMediaService;

    public Social_MediaController(Social_MediaService socialMediaService) {
        this.socialMediaService = socialMediaService;
    }

    @GetMapping
    public List<Social_Media> getAllSocialMedia() {
        return this.socialMediaService.getAllSocialMedia();
    }
}
