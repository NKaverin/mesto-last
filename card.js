import {openPopup} from './utils.js';

// добавляет картинке сердца смену картинки по клику 
function addHandlerClickOnHeart(element) {
    element.addEventListener('click', function () {
        if (element.src.includes('/vendor/images/heart.svg')) {
            element.src = './vendor/images/FullHeart.svg';
        }
        else {
            element.src = './vendor/images/heart.svg';
        }
    }); 
}

// функция создает карточку в elements
export function createElementToElements(elemTitle='', elemSrc=''){
    // копируем шаблон
    const elementsTemplate = document.querySelector('#element-of-elements').content;
    const elementsElement = elementsTemplate.querySelector('.elements__element').cloneNode(true);
    // наполняем содержимым
    const elementsImage = elementsElement.querySelector('.elements__image'); 
    elementsImage.src = elemSrc;
    elementsImage.alt = elemTitle;
    elementsElement.querySelector('.elements__caption').textContent = elemTitle;
    //добавим попап-эвент
    elementsImage.addEventListener('click', function () {
        popupImage.src = elemSrc;    
        popupCaption.textContent = elemTitle;    
        openPopup(popupElement);
    })
    // добавляем клик на сердце
    addHandlerClickOnHeart(elementsElement.querySelector('.elements__heart-image'));
    // добавляем удаление при нажатии на кнопку удаления
    elementsElement.querySelector('.elements__delete-button').addEventListener('click', function () {
        elementsElement.remove();
    }); 
    return elementsElement; 
}

// добавляем предопределенные карточки
const initialCards = [
    {
        name: 'Лондон',
        link: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Жираф',
        link: 'https://images.unsplash.com/photo-1610186355675-ccfb7dcbd513?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=482&q=80'
    },
    {
        name: 'Веллингтон',
        link: 'https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Мельбурн',
        link: 'https://images.unsplash.com/photo-1602559227639-3bba8ce496df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Осло',
        link: 'https://images.unsplash.com/photo-1608914876485-4e48b8d4b6c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Киев',
        link: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
]; 

// создаем карточки отображаем на странице
initialCards.forEach(element => elementsOnline.prepend(createElementToElements(element.name,element.link)));
