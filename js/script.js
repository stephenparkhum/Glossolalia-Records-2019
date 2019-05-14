// GLOBAL FUNCS / VARIABLES
const mainDiv = document.getElementsByClassName('main');


// ARTISTS PAGE
let artistsClick = function () {
    let artists_link = document.getElementById('artists');
    artists_link.addEventListener('click', function () {
        let elem = document.getElementsByClassName('recent');
        elem[0].style.display = 'none';
        let news = document.getElementsByClassName('news');
        for (i = 0; i < news.length; i++) {
            news[i].style.display = 'none';
        }
        let artistsPages = document.getElementsByClassName('artists_page');
        artistsPages[0].style.display = 'block';
        let contactsPage = document.getElementsByClassName("contacts-page");
        contactsPage[0].style.display = 'none';
    });
};



// NEWS PAGE
let newsClick = function () {
    let news_nav = document.getElementById('news-nav');
    news_nav.addEventListener('click', function () {
        let elem = document.getElementsByClassName('artists_page');
        elem[0].style.display = 'none';
        let news = document.getElementsByClassName('news');
        for (i = 0; i < news.length; i++) {
            news[i].style.display = 'block';
        }
        let artistsPages = document.getElementsByClassName('recent');
        artistsPages[0].style.display = 'block';
        let contactPages = document.getElementsByClassName('contacts-page');
        contactPages[0].style.display = "none";

    });
};

// CONTACTS PAGE
let contactsClick = function () {
    let contacts_nav = document.getElementById('contact-nav');
    contacts_nav.addEventListener('click', function () {
        let elem = document.getElementsByClassName("recent");
        elem[0].style.display = "none";
        let artists = document.getElementsByClassName("artists_page");
        artists[0].style.display = "none";
        let news = document.getElementsByClassName("news");
        for (i = 0; i < news.length; i++) {
            news[i].style.display = "none";
        }
        let contact = document.getElementsByClassName("contacts-page");
        contact[0].style.display = "block";
    });
};

artistsClick();
newsClick();
contactsClick();