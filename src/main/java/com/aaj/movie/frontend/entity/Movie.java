
// 電影實體類別，對應資料庫 movies 資料表
package com.aaj.movie.frontend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "movies")
/**
 * 電影實體類別，對應資料庫 movies 資料表
 */
public class Movie {
    /**
     * 主鍵，自動遞增
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 電影名稱
     */
    @Column(name = "title", length = 100, nullable = false)
    private String title;

    /**
     * 導演
     */
    @Column(name = "director", length = 50)
    private String director;

    /**
     * 字幕
     */
    @Column(name = "subtitle", length = 50)
    private String subtitle;

    /**
     * 評級
     */
    @Column(name = "rating", length = 20)
    private String rating;

    /**
     * 電影描述
     */
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    /**
     * 首映日期
     */
    @Column(name = "premiere_date")
    private LocalDate premiereDate;

    /**
     * 片長（分鐘）
     */
    @Column(name = "duration")
    private Integer duration;

    /**
     * 海報圖片網址
     */
    @Column(name = "poster_url", length = 255)
    private String posterUrl;

    // ===== Getter 與 Setter =====

    /**
     * 取得主鍵
     */
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    /**
     * 取得電影名稱
     */
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    /**
     * 取得導演
     */
    public String getDirector() { return director; }
    public void setDirector(String director) { this.director = director; }

    /**
     * 取得字幕
     */
    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    /**
     * 取得評級
     */
    public String getRating() { return rating; }
    public void setRating(String rating) { this.rating = rating; }

    /**
     * 取得電影描述
     */
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    /**
     * 取得首映日期
     */
    public LocalDate getPremiereDate() { return premiereDate; }
    public void setPremiereDate(LocalDate premiereDate) { this.premiereDate = premiereDate; }

    /**
     * 取得片長
     */
    public Integer getDuration() { return duration; }
    public void setDuration(Integer duration) { this.duration = duration; }

    /**
     * 取得海報圖片網址
     */
    public String getPosterUrl() { return posterUrl; }
    public void setPosterUrl(String posterUrl) { this.posterUrl = posterUrl; }
}
