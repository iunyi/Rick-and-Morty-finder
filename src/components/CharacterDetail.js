import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/characterDetail.scss';

class CharacterDetail extends Component {
    constructor(props) {
        super(props);
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(){
        const spoiler = document.querySelector('.spoiler');
        spoiler.classList.remove('hidden');
        const spoilerAlert = document.querySelector('.spoiler_alert');
        spoilerAlert.classList.add('hidden');
        const censored = document.querySelector('.censored');
        censored.classList.add('hidden');
    }

    render() {
        const characters = this.props.characters;
        const selectedCharacterId = this.props.match.params.id;
        const matchingCharacter = characters.find(character => character.id === parseInt(selectedCharacterId));

        return (
            <main>
                <Link to="/">
                    <div className="back">
                        <i className="fas fa-times"></i>
                    </div>
                </Link>
                {matchingCharacter ? 
                    <div className="detail_card">
                        <img 
                            className="detail_card-image" 
                            src={matchingCharacter.image} 
                            alt={matchingCharacter.name} 
                        />
                        <div className="detail_card-text">
                            <p>Name: {matchingCharacter.name}</p>
                            <p>Species: {matchingCharacter.species}</p>
                            <p>Status: {matchingCharacter.status}</p>
                            <p>Origin: {matchingCharacter.origin.name}</p>
                            <p>Number of episodes: {matchingCharacter.episode.length}</p>
                            <div>
                                Status:&nbsp;
                                <span className="censored">_____</span>
                                <span className="spoiler hidden"> {matchingCharacter.status}</span>
                                <div className="spoiler_alert">
                                    <p>Spoiler alert! Are you sure you want to know?</p>
                                    <button className="spoiler_button" onClick={this.showInfo}>YES</button>
                                </div>
                                
                            </div>

                        </div>
                    </div>  
                    :
                    <p> Sin resultados </p>
                }
            </main>
        );
    }
}

export default CharacterDetail;