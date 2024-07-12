document.addEventListener('DOMContentLoaded', function() {
    const news = [
        {
            title: "School Year Begins",
            content: "The new school year starts qw9uhnjkajkhfjkabnfdfyshdgfhjsdbfhdsfs.",
            date: "2024-07-01",
            image: "bustin.jpg"
        },
        {
            title: "New Library Opens",
            content: "Our new library has officially opened. blasgduashjdashdjkhsadjhsuasdusajhdjksad.",
            date: "2024-07-05",
            image: "dodge.jpg"
        },
        {
            title: "Sports Day Announced",
            content: "SIMON PALITAN MO NALANG TO DI KO ALAM ILALAGAY.",
            date: "2024-07-10",
            image: "doja.jpg"
        }
    ];

    const newsSection = document.getElementById('news-articles');
    const modal = document.getElementById('news-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');
    const modalDate = document.getElementById('modal-date');
    const closeModal = document.querySelector('.close');

    news.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <small>${article.date}</small>
        `;
        articleElement.addEventListener('click', () => {
            modalTitle.textContent = article.title;
            modalImage.src = article.image;
            modalContent.textContent = article.content;
            modalDate.textContent = article.date;
            modal.style.display = 'block';
        });
        newsSection.appendChild(articleElement);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
