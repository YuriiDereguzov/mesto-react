import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(!selectedCard)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        children={
          <>
            <input
              type="text"
              id="name-user"
              name="name"
              className="popup__input popup__input_type_name"
              // minlength="2"
              // maxlength="40"
              required
              placeholder="Имя"
            />
            <span className="name-user-error popup__input-error"></span>
            <input
              type="text"
              id="job"
              name="job"
              className="popup__input popup__input_type_job"
              // minlength="2"
              // maxlength="200"
              required
              placeholder="Вид деятельности"
            />
            <span className="job-error popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="add_card"
        title="Новое место"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        children={
          <>
            <input
              type="text"
              id="name-card"
              name="name"
              className="popup__input popup__input_card_name"
              // minlength="2"
              // maxlength="30"
              required
              placeholder="Название"
            />
            <span className="name-card-error popup__input-error"></span>
            <input
              type="url"
              id="link"
              name="link"
              className="popup__input popup__input_card_image"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="link-error popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="edit_avatar"
        title="Обновить аватар"
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        children={
          <>
            <input
              type="url"
              id="linkAvatar"
              name="link"
              className="popup__input popup__input_avatar_image"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="linkAvatar-error popup__input-error"></span>
          </>
        }
      />
      {/* <PopupWithForm name="delete_card" title="Вы уверены?" isOpen={is} /> */}

      {/* <section className="popup popup_delete_card">
        <div className="popup__container popup__container_delete_card">
          <form
            name="deleteForm"
            className="popup__form popup__form_delete_card"
            // novalidate
          >
            <h2 className="popup__title popup__title_delete_card">
              Вы уверены?
            </h2>
            <button
              type="submit"
              className="button popup__button-save"
              aria-label="Подтверждение удаления"
            >
              Да
            </button>
          </form>
          <button
            type="button"
            className="popup__close popup__close-button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section> */}
    </div>
  );
}

export default App;
