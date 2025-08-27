package com.aaj.movie.frontend.repository;

import com.aaj.movie.frontend.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 電影資料存取介面，繼承 JpaRepository
 * 可自動取得基本 CRUD 功能
 */
public interface MovieRepository extends JpaRepository<Movie, Long> {
	// 可自訂查詢方法
}
