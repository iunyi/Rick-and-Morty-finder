import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    render() {
        const charactersJSX = this.props.characters.map((character, index) => {
            return (
                <li key={index}>
                    <CharacterCard 
                        index={index}
                        image={character.image}
                        name={character.name}
                        species={character.species}
                    />
                </li>
            )
        })
        return (
            <ul>{charactersJSX}</ul>
        );
    }
}

export default CharacterList;