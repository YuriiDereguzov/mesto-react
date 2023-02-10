import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <button onClick={handleCardClick} className="card__image-btn">
        <img
          className="card__image"
          src={props.card.link}
          alt={props.card.name}
        />
      </button>
      <button
        type="button"
        className="card__delete"
        aria-label="Удалить"
      ></button>
      <div className="card__content">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className="card__like"
            aria-label="Оценить"
          ></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
