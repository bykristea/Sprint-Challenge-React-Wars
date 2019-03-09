import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
        <div>
        <h3>{props.char.name}</h3>
        <p>Gender: {props.char.gender}</p>
        <p>Year Born: {props.char.birth_year}</p>
        <p>Eye Color: {props.char.eye_color}</p>
        <p>Hair: {props.char.hair_color}</p>
        <p>Vehicles: {props.char.vehicles}</p>
        <p>Films: {props.char.films}</p>
        </div>
    )
}

export default Character;