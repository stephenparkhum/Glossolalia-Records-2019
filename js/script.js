// GLOBAL FUNCS / VARIABLES
const mainDiv = document.getElementsByClassName('main');



// SHOW / HIDE FUNCTIONS


// -- ARTISTS SHOW/HIDE--
let artistShow = () => {
    let artistsPages = document.getElementsByClassName('artists_page');
    artistsPages[0].style.display = 'block';
};

let artistHide = () => {
    let elem = document.getElementsByClassName('artists_page');
    elem[0].style.display = 'none';
};



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
        let contact = document.getElementsByClassName('contacts-page');
        contact[0].style.display = "block";
        let elem = document.getElementsByClassName('recent');
        elem[0].style.display = "none";
        let artists = document.getElementsByClassName('artists_page');
        artists[0].style.display = "none";
        let news = document.getElementsByClassName('news');
        for (i = 0; i < news.length; i++) {
            news[i].style.display = "none";
        }
    });
};

artistsClick();
newsClick();
contactsClick();


// BUTTON / POP-UP

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    // let modalHeader = modal.getElementsByClassName('modal-header');
    // let header = modal.getElementsByClassName('artist-name');
    // header.textContent = 'Fuck you';

};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // let mailingList = document.getElementsByClassName('mailing-list');
    // mailingList[0].style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};