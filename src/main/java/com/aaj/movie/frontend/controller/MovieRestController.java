package com.aaj.movie.frontend.controller;

import com.aaj.movie.frontend.entity.Movie;
import com.aaj.movie.frontend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 提供電影資料 REST API
 */
@RestController
@RequestMapping("/api/movies")
public class MovieRestController {
    @Autowired
    private MovieRepository movieRepository;

    /**
     * 取得所有電影資料
     * @return 電影清單
     */
    @GetMapping
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
