import React from 'react';
import Character from './Character'
import './StarWars.css';




function CharacterList(props) {
    return (
        <div className="hero">
            {props.data.map((character, index) => {
                return (
                    
                    <Character data={character} key={index} />
                    
                )
            })}
        </div>
    );
};

export default CharacterList;