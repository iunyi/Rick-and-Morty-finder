import React, { Component } from 'react';

class CharacterCard extends Component {
    render() {
        const {
            image, 
            name, 
            species
        } = this.props;
        
        return (
            <React.Fragment>
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <p>{species}</p>
            </React.Fragment>
        );
    }
}

export default CharacterCard;