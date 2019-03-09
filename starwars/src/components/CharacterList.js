import React from 'react';
import './StarWars';



function CharacterList(props) {
    return (
        <div>
        <h3>{props.char.name}</h3>
        <p>Gender: {props.char.gender}</p>
        <p>Year Born: {props.char.birth_year}</p>
        <p>Eye Color: {props.char.eye_color}</p>
        <p>Hair: {props.char.hair_color}</p>
        <p>Homeworld: {props.char.homeworld}</p>
        <p>Starships: {props.char.starships}</p>
        </div>
    )
}

export default CharacterList;