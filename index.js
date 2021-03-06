import {closePopup, openPopup} from './utils.js';
import {handleAddElement} from './modal.js';
import {createElementToElements} from './card.js';
import {enableValidation} from './validate.js';

// закрытие поп-апа по клику
document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup') == true) {
        closePopup(document.querySelector('.popup_condition_opened'));
    }
})

// закрытие поп-апа по кнопке esc
document.addEventListener('keydown', function (evt) {
    popup = document.querySelector('.popup_condition_opened');
    if (evt.key == 'Escape' && popup) {
        closePopup(popup);
    }
})

// найдем элементы поп-апа с открытой карточкой
const popupElement = document.querySelector('#popupImage');
const popupImage = popupElement.querySelector('.popup__image');
const popupCaption = popupElement.querySelector('.popup__caption');
const elementsOnline = document.querySelector('.elements');

// добавляем событие на изменение профиля
const popupEditProfile = document.querySelector('#popupEditProfile');
const nameInput = popupEditProfile.querySelector('[name="profile-name"]');
const captionInput = popupEditProfile.querySelector('[name="profile-caption"]');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

popupEditProfile.addEventListener('submit', handleEditProfileForm); 

// добавляем открытие поп-апа редактирования
document.querySelector('.profile__edit-button').addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;  
    openPopup(popupEditProfile);
})

// добавляем событие на добавление карточки
const popupPlace = document.querySelector('#popupNewPlace');
const namePlaceInput = popupPlace.querySelector('[name="image-name"]');
const linkPlaceInput = popupPlace.querySelector('[name="image-link"]');

// добавляем открытие этого поп-апа
document.querySelector('.profile__batton-box').addEventListener('click', function () { 
    // очистим поля
    popupPlace.querySelectorAll('.popup__field').forEach(element => element.value = '');  
    // откроем поп-ап
    openPopup(popupPlace);
})

popupPlace.addEventListener('submit', handleAddElement); 

 // для крестиков нужно добавить событие
document.querySelectorAll('.popup').forEach(popupElement =>
    popupElement.querySelector('.popup__icon-container').addEventListener('click', function () {
        closePopup(popupElement);
    })
)


// настройки для валидации
let settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_active'
}
//подключаем валидацию
enableValidation(settings);


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
