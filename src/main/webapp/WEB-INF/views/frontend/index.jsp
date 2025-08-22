<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文暨電影院</title>
    <link rel="stylesheet" type="text/css" href="/frontend/css/index.css">
</head>

<body>

    <header>
        <h1>文暨電影院</h1>
        <nav>
            <a href="#browse">遊覽電影</a>
            <a href="#booking">訂票</a>
        </nav>
    </header>

    <!-- 電影卡片 -->
    <section class="movie-container" id="browse"></section>

    <!-- 分頁 -->
    <div class="pagination" id="pagination"></div>

    <script src="/frontend/js/index.js"></script>

</body>

</html>