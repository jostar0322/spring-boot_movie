const moviesPerPage = 9; // 每頁9張
        let currentPage = 1;

        // 從後端 API 取得電影資料
        let moviesData = [];

        async function fetchMovies() {
            try {
                const response = await fetch('/api/movies');
                if (!response.ok) throw new Error('載入失敗');
                const data = await response.json();
                // 後端欄位: id, title, director, subtitle, rating, description, premiereDate, duration, posterUrl
                moviesData = data.map(m => ({
                    title: m.title,
                    subtitle: m.subtitle || '',
                    director: m.director || '未知導演',
                    rating: m.rating || 'PG',
                    desc: m.description || '暫無描述',
                    img: m.posterUrl || '/frontend/img/no.png', //如果沒有圖片，使用預設圖片
                    duration: m.duration || 0,
                    premiereDate: m.premiereDate || ''
                }));
                renderMovies();
                renderPagination();
            } catch (e) {
                alert('無法載入電影資料');
            }
        }

        function renderMovies() {
            const container = document.querySelector('.movie-container');
            container.innerHTML = '';
            const start = (currentPage - 1) * moviesPerPage;
            const end = start + moviesPerPage;
            const pageMovies = moviesData.slice(start, end);

            pageMovies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h3>電影名稱: ${movie.title}</h3>
        <p class="director">導演: ${movie.director}</p>
        ${movie.subtitle ? `<p class="subtitle">字幕: ${movie.subtitle}</p>` : ''}
        <p class="rating">分級: ${movie.rating}</p>
        <p class="description">電影介紹: ${movie.desc}</p>
        ${movie.premiereDate ? `<p class="premiere-date">上映日期: ${movie.premiereDate}</p>` : ''}
        <p class="duration">片長: ${movie.duration ? movie.duration + '分鐘' : '未知'}</p>
        `;
                container.appendChild(card);
            });
        }

        function renderPagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';
            const totalPages = Math.ceil(moviesData.length / moviesPerPage);

            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.textContent = i;
                if (i === currentPage) btn.classList.add('active');
                btn.addEventListener('click', () => {
                    currentPage = i;
                    renderMovies();
                    renderPagination();
                });
                pagination.appendChild(btn);
            }
        }

    // 初始化
    fetchMovies();