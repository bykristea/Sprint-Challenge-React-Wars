import React from 'react';
import Character from './Character'
import './StarWars.css';




function CharacterList(props) {
    return (
        <div className="hero">
            {props.char.map(character => {
                return (
                    <Character char={character} />
                )
            })}
        </div>
    );
};

export default CharacterList;