<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="newcss.css">
    <title>News</title>
    <script>
        // Function to alternate tab title
        function blinkTabTitle(title1, title2, interval) {
            let showingTitle1 = true;
            setInterval(() => {
                document.title = showingTitle1 ? title1 : title2;
                showingTitle1 = !showingTitle1;
            }, interval);
        }

        // Start blinking the title after receiving a notification
        function receiveNotification() {
            blinkTabTitle("NEWS", "TNCHS", 1000);
        }

        // Simulating the reception of a notification after 5 seconds
        setTimeout(receiveNotification, 5000);
    </script>
</head>
<body>
<header>
        <h1>Tanza National Comprehensive High School News</h1>
    </header>
    <main>
        <section id="news-articles">
            <!-- News articles will be loaded here -->
        </section>
    </main>
    <footer>
        <p>&copy; 1949 High School</p>
    </footer>

    <div id="news-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <img id="modal-image" src="" alt="News Image">
            <p id="modal-content"></p>
            <small id="modal-date"></small>
        </div>
    </div>


    <script src="newsjs.js"></script>
</body>
</html>