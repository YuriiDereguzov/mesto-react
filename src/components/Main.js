import React from "react";
import { api } from "../utils.js/Api";
import Card from "./Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        // console.log(userData)
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        // console.log(cardList)
        // console.log(cards)
        setCards(cardList);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`); // выведем ошибку в консоль
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар"
            /*style={{ backgroundImage: `url(${userAvatar})` }}*/
          />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-edit-btn"
          ></button>
          <div className="profile__info-item">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Редактировать"
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__button-add"
          aria-label="Добавить"
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
