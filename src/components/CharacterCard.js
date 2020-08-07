import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/characterCard.scss';

class CharacterCard extends Component {
    render() {
        const {
            image, 
            name, 
            species
        } = this.props;
        
        return (
            <React.Fragment>
                <div className="image_container">
                    <img className="image_size" src={image} alt={name}/>
                </div>
                <h3 className="character_name">{name}</h3>
                <p className="character_species">{species}</p>
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
}

export default CharacterCard;