package com.example.sonics.service;

import com.example.sonics.model.Player;
import com.example.sonics.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
}
