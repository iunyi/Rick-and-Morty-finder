import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../stylesheets/components/characterList.scss';

class CharacterList extends Component {
    render() {
        const charactersJSX = this.props.characters.map((character, index) => {
            return (
                <li className="list_item" key={index}>
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
            <main className="main_list">
                <div className="wrapper">
                    <ul className="list">{charactersJSX}</ul>
                </div>
            </main>
        );
    }
}

CharacterList.propTypes = {
    characters: PropTypes.array
};

export default CharacterList;