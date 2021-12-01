import {closePopup, openPopup} from './utils';

function handleEditProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    // нужно закрыть форму
    closePopup(popupEditProfile);
}

function handleAddElement (evt) {
    evt.preventDefault(); 
    if (namePlaceInput.value === '' || linkPlaceInput.value === '' ) {
        alert('Вы не заполнили данные для добавления карточки');
    } else {
        elementsOnline.prepend(createElementToElements(namePlaceInput.value, linkPlaceInput.value));
        // нужно закрыть форму
        closePopup(popupPlace);
    }
}

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

