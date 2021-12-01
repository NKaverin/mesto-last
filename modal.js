import {closePopup, openPopup} from './utils.js';

function handleEditProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    // нужно закрыть форму
    closePopup(popupEditProfile);
}

export function handleAddElement (evt) {
    evt.preventDefault(); 
    if (namePlaceInput.value === '' || linkPlaceInput.value === '' ) {
        alert('Вы не заполнили данные для добавления карточки');
    } else {
        elementsOnline.prepend(createElementToElements(namePlaceInput.value, linkPlaceInput.value));
        // нужно закрыть форму
        closePopup(popupPlace);
    }
}