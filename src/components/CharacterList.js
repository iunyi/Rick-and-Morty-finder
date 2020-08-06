import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    render() {
        const charactersJSX = this.props.characters.map((character, index) => {
            return (
                <li key={index}>
                    <Link to={`/character/${character.id}`}>
                        <CharacterCard 
                            index={index}
                            image={character.image}
                            name={character.name}
                            species={character.species}
                        />
                    </Link>
                </li>
            )
        })
        return (
            <main>
                <ul>{charactersJSX}</ul>
            </main>
        );
    }
}

export default CharacterList;