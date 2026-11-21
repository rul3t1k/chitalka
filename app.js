
const textWrap = document.querySelector('.content__wrap');
const paragraphs = document.querySelectorAll('.text');


const fontSelect = document.querySelector('.settings__form select');
if (fontSelect) {
    fontSelect.addEventListener('change', (evt) => {
        textWrap.style.fontFamily = evt.target.value;
    });
}


const fontSizeInput = document.querySelector('#fontSize');
if (fontSizeInput) {
    fontSizeInput.addEventListener('input', (evt) => {
        const size = evt.target.value;
        paragraphs.forEach(p => {
            p.style.fontSize = size + 'px';
        });
    });
}


const fontColorInput = document.querySelector('input[type="color"]');
if (fontColorInput) {
    fontColorInput.addEventListener('input', (evt) => {
        textWrap.style.color = evt.target.value;
    });
}


const lineHeightInput = document.querySelector('input[type="range"]');
if (lineHeightInput) {
    lineHeightInput.addEventListener('input', (evt) => {
        paragraphs.forEach(p => {
            p.style.lineHeight = evt.target.value + '%';
        });
    });
}


const bgRadios = document.querySelectorAll('.settings__background-color-label input[type="radio"]');
bgRadios.forEach(radio => {
    radio.addEventListener('change', (evt) => {
        const label = evt.target.closest('.settings__background-color-label');

        if (label.classList.contains('white')) {
            textWrap.style.backgroundColor = 'white';
        } else if (label.classList.contains('bisque')) {
            textWrap.style.backgroundColor = 'bisque';
        } else if (label.classList.contains('grey')) {
            textWrap.style.backgroundColor = 'grey';
        } else if (label.classList.contains('black')) {
            textWrap.style.backgroundColor = 'black';
        }
    });
});


function togglePopup() {
    const popupBg = document.querySelector('.popup-bg');
    if (popupBg) {
        popupBg.classList.toggle('show');
    }
}


const authBtn = document.querySelector('.auth__btn');
if (authBtn) {
    authBtn.addEventListener('click', (e) => {
        e.preventDefault();
        togglePopup();
    });
}