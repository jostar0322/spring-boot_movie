const moviesPerPage = 9; // 每頁9張
        let currentPage = 1;

        // 從後端 API 取得電影資料
        let moviesData = [];

        async function fetchMovies() {
            try {
                const response = await fetch('/api/movies');
                if (!response.ok) throw new Error('載入失敗');
                const data = await response.json();
                // 後端欄位: id, title, description, img
                moviesData = data.map(m => ({
                    title: m.title,
                    desc: m.description,
                    img: m.img || ''
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
        <h3>${movie.title}</h3>
        <p>${movie.desc}</p>
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