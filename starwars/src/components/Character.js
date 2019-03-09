import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
        <div className="Character">
        <h3 className="Name">{props.data.name}</h3>
        <p className="Gender">Gender: {props.data.gender}</p>
        <p className="Year">Year Born: {props.data.birth_year}</p>
        <p className="EyeColor">Eye Color: {props.data.eye_color}</p>
        <p className="HairColor">Hair: {props.data.hair_color}</p>
        {/* <p>Vehicles: {props.char.vehicles}</p>
        <p>Films: {props.char.films}</p> */}
        </div>
    )
}

export default Character;