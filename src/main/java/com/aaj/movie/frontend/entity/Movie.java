
// 電影實體類別，對應資料庫 movie 資料表
package com.aaj.movie.frontend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "movie")
/**
 * 電影實體類別，對應資料庫 movie 資料表
 */
public class Movie {
    /**
     * 主鍵，自動遞增
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 電影名稱
     */
    private String title;

    /**
     * 電影描述
     */
    @Column(name = "description")
    private String description;

    /**
     * 圖片網址
     */
    private String img;

    // ===== Getter 與 Setter =====

    /**
     * 取得主鍵
     */
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    /**
     * 取得電影名稱
     */
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    /**
     * 取得電影描述
     */
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    /**
     * 取得圖片網址
     */
    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }
}
