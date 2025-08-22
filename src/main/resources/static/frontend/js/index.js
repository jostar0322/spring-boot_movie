const moviesPerPage = 9; // 每頁9張
        let currentPage = 1;

        // 模擬電影資料
        const moviesData = [
            { title: "電影名稱 1", desc: "介紹文字 1", img: "" },
            { title: "電影名稱 2", desc: "介紹文字 2", img: "" },
            { title: "電影名稱 3", desc: "介紹文字 3", img: "" },
            { title: "電影名稱 4", desc: "介紹文字 4", img: "" },
            { title: "電影名稱 5", desc: "介紹文字 5", img: "" },
            { title: "電影名稱 6", desc: "介紹文字 6", img: "" },
            { title: "電影名稱 7", desc: "介紹文字 7", img: "" },
            { title: "電影名稱 8", desc: "介紹文字 8", img: "" },
            { title: "電影名稱 9", desc: "介紹文字 9", img: "" },
            { title: "電影名稱 10", desc: "介紹文字 10", img: "" },
            { title: "電影名稱 11", desc: "介紹文字 11", img: "" },
            { title: "電影名稱 12", desc: "介紹文字 12", img: "" }
        ];

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
        renderMovies();
        renderPagination();