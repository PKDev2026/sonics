package com.example.sonics.service;

import com.example.sonics.model.Social_Media;
import com.example.sonics.repository.Social_MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Social_MediaService {

    @Autowired
    private Social_MediaRepository socialMediaRepository;

    public Social_MediaService(Social_MediaRepository socialMediaRepository) {
        this.socialMediaRepository = socialMediaRepository;
    }

    public List<Social_Media> getAllSocialMedia() {
        return socialMediaRepository.findAll();
    }
}
