import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import {Footer} from './Footer.js';
import {PopupWithForm} from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, showEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, showAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, showAvatarPopup] = React.useState(false);
  // const [isDeletionConfirmPopupOpen, showDeletionConfirmPopup] = React.useState(false); maybe later?
  const [selectedCard, showSelectedCard] = React.useState(null);
  
  function handleEditAvatarClick() {
    showAvatarPopup(true);
  }

  function handleEditProfileClick() {
    showEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    showAddPlacePopup(true);
  }

  // function handleDeleteCard() {
  //   showDeletionConfirmPopup(true);
  // }

  function handleCardClick(card) {
    showSelectedCard(card);
  }


  function closeAllPopups() {
    showAvatarPopup(false);
    showEditProfilePopup(false);
    showAddPlacePopup(false);
    showSelectedCard(null);
  }


  return (
<div className="page">

  <Header />
  <Main
  onEditAvatar={handleEditAvatarClick}
  onEditProfile={handleEditProfileClick}
  onAddPlace={handleAddPlaceClick}
  onCardClick={handleCardClick}
  />
  <Footer />

  <PopupWithForm
    isOpen={isEditProfilePopupOpen}
    title={'Редактировать профиль'}
    form={'traveler'}
    name={'editor'}
    submitText={'Сохранить'}
    onClose={closeAllPopups}
    children={(
      <>
        <input type="text" id="name-input" placeholder="Имя" name="travelerName" className="popup__input" required minLength="2" maxLength="40" />
        <span className="name-input-error popup__input-error">ОЩИБКА</span>
        <input type="text" id="job-input" placeholder="Вид деятельности" name="travelerJob" className="popup__input" required minLength="2" maxLength="200" />
        <span className="job-input-error popup__input-error">ОЩИБКА</span>
      </>
    )}
  />

<PopupWithForm
    isOpen={isAddPlacePopupOpen}
    title={'Новое место'}
    form={'country'}
    name={'additor'}
    submitText={'Сохранить'}
    onClose={closeAllPopups}
    children={(
      <>
        <input type="text" id="country-name-input" placeholder="Название" name="countryName" className="popup__input" required minLength="2" maxLength="30" />
        <span className="country-name-input-error popup__input-error">ОЩИБКА</span>
        <input type="url" id="country-image-input" placeholder="Ссылка на картинку" name="countryImage" className="popup__input" required />
        <span className="country-image-input-error popup__input-error">ОЩИБКА</span>
      </>
    )}
  />

<PopupWithForm
    isOpen={isEditAvatarPopupOpen}
    title={'Новое место'}
    form={'avatar'}
    name={'avatar-editor'}
    submitText={'Сохранить'}
    onClose={closeAllPopups}
    children={(
      <>
        <input type="url" id="avatar-image-input" placeholder="Ссылка на картинку" name="avatarImage" className="popup__input" required />
        <span className="avatar-image-input-error popup__input-error">ОЩИБКА</span>
      </>
    )}
  />

{/* <PopupWithForm
    isOpen={isEditAvatarPopupOpen}
    title={'Вы уверены?'}
    form={'confirm'}
    name={'confirm'}
    submitText={'Да'}
    onClose={closeAllPopups}
    children={(
      <>
      </>
    )}
  /> */}

<ImagePopup 
card={selectedCard}
onClose={closeAllPopups}
/>

</div>
  );
}

export default App;
