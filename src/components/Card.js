import React from 'react';

 function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card);
      } 

    return(
    <div className="places__card">
      <button type="button" className="places__button-image" onClick={handleClick}><img src={props.link} className="places__image" alt={props.name} /></button>
      <h2 className="places__text">{props.name}</h2>
      <button type="button" className="places__like"></button>
      <p className="places__like-counter">{props.likes}</p>
      <button type="button" className="places__delete-button"></button>
    </div>
    )
}
export default  Card
