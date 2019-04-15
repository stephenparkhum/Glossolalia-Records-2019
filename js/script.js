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
        artistsPage();


    });
};

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

    });
};

const mainDiv = document.getElementsByClassName('main');

// let artistsPage = function () {

//     let div = document.createElement('div');
//     // let ul = document.createElement('ul');
//     // let li = document.createElement('li');
//     let h4 = document.createElement('h4');
//     let table = document.createElement('table');
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     document.getElementsByClassName('main_in_wrapper')[0].appendChild(div);
//     div.classList.add('artist_list');
//     div.appendChild(table);
//     // ul.appendChild(li);
//     table.appendChild(tr);


//     for (let i = 0; i < bands.length; i++) {
//         // let artistNames = document.createElement('h4');
//         // div.appendChild(artistNames);
//         let artist_names = bands[i].artist;
//         tr.appendChild(td);
//         td.appendChild(h4);
//         h4.innerHTML = '<h4>' + bands[i].artist + '</h4>';
//         console.log(artist_names + ' - ' + bands[i].genre);
//     }

    





//     // let h1 = document.createElement('h1');
//     // for (let i = 0; i < artists.length; i++) {
//     //     console.log(artist[0].name);
//     // }
// };

artistsClick();
newsClick();
// console.log(bands);

// CONTACT PAGE