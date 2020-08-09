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

        const speciesIcon = () => {
            if(species === 'Human') {
                return (
                    <span>
                        <i className="fas fa-meh"></i>
                    </span>
                )
            } else if(species === 'Alien') {
                return <span role="img" aria-label="alien">👾</span>
            } 
        }
        
        return (
            <React.Fragment>
                <div className="image_container">
                    <img className="image_size" src={image} alt={name}/>
                </div>
                <div className="text_container">
                    <h3 className="character_name">
                        {name} 
                    </h3>
                    <span className="character_species">
                            {speciesIcon()}
                    </span>
                </div>
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