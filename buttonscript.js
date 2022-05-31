const buttons = document.querySelectorAll('.favButton');
for (let step = 0; step < buttons.length; step++) {
    buttons[step].addEventListener('click', () => {
        buttons[step].classList.toggle('kleurAnimatie');
    });

}



const filterGenreButton = document.querySelector('.filterGenre');
const filterGenrePopup = document.querySelector('.genreFilter');
const filterKruisje = document.querySelector('.filterKruisje');
filterGenreButton.addEventListener('click', () => {
    filterGenrePopup.classList.toggle('show');
});

filterKruisje.addEventListener('click', () => {
    filterGenrePopup.classList.toggle('show');
});

filterGenrePopup.addEventListener('click', e => {
    if (e.target !== e.currentTarget) console.log('');
    else filterGenrePopup.classList.toggle('show');
});

const genres = document.querySelectorAll('.genreButton');
for (let step = 0; step < genres.length; step++) {
    genres[step].addEventListener('click', () => {
        genres[step].classList.toggle('kleurAnimatie2');
    });
}

const oproepFilterKnop = document.querySelector('.filterOproepen');
const oproepScherm = document.querySelector('.oproepScherm');
const oproepFilterScherm = document.querySelector('.oproepFilterScherm');
const filtersToepassen = document.querySelector('.filtersToepassen');
const filterKruisje2 = document.querySelector('.filterKruisje2');

oproepFilterKnop.addEventListener('click', () => {
    oproepFilterScherm.classList.toggle('show');
    oproepScherm.classList.toggle('hide');

});


filtersToepassen.addEventListener('click', () => {
    console.log('yes');
    oproepFilterScherm.classList.toggle('show');
    oproepScherm.classList.toggle('hide');

});

filterKruisje2.addEventListener('click', () => {
    oproepFilterScherm.classList.toggle('show');
    oproepScherm.classList.toggle('hide');
});

