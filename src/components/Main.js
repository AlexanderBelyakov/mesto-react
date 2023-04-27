import React from 'react';
import editButton from '../images/eddit-button.png';
import addButton from '../images/add-button.png';
import api from '../utils/Api.js';
import Card from './Card.js'

export function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, getCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([res1, res2]) => {
      setUserName(res1.name);
      setUserDescription(res1.about);
      setUserAvatar(res1.avatar);
      getCards(res2.reverse());
    })
    .catch((err) => {
      console.log(err); 
    }) 
    }, [])

    return (
        <main className="content">
        <section className="profile">
          <div className="shell">
           <button type="button" className="profile__button profile__edit-avatar-button" onClick={props.onEditAvatar}><img src={userAvatar} className="profile__avatar" alt="Аватарка" /></button>
           <div className="profile__info">
             <h1 className="profile__name">{userName}</h1>
             <p className="profile__profession">{userDescription}</p>
            </div>
            <button type="button" className="profile__button" onClick={props.onEditProfile}><img src={editButton} className="profile__edit-button" alt="Редактировать профиль" /></button>
          </div>
          <button type="button" className="profile__button" onClick={props.onAddPlace}><img src={addButton} className="profile__add-button" alt="Добавить" /></button>
        </section>
    
        <section className="places">
          {cards.map((card) => (
            <Card 
            card={card}
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            />
          ))}
        </section>
      </main>
    )
}