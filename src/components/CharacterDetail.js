import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/characterDetail.scss';
import portal from '../images/portal.gif';

class CharacterDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 1,
        }
        this.showInfo = this.showInfo.bind(this);
        this.dontShowInfo = this.dontShowInfo.bind(this);
        this.handlePortalClick = this.handlePortalClick.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    // Get a random number to show a random character
    min = 1;
    max = 20;
    getRandomNumber = () => {
        this.setState({
          random: parseInt(this.min + (Math.random() * (this.max - this.min)))
        });
    };

    handlePortalClick(){
        this.getRandomNumber();
        this.props.checkAllCharacters();
    }

    showInfo(){
        const spoiler = document.querySelector('.spoiler');
        spoiler.classList.remove('hidden');
        const spoilerAlert = document.querySelector('.spoiler_alert');
        spoilerAlert.classList.add('hidden');
        const censored = document.querySelector('.censored');
        censored.classList.add('hidden');
    }

    dontShowInfo(){
        const spoilerAlert = document.querySelector('.spoiler_alert');
        spoilerAlert.classList.add('hidden');
        const status = document.querySelector('.status');
        status.classList.add('hidden');
    }

    render() {
        const characters = this.props.characters;
        const selectedCharacterId = this.props.match.params.id;
        const matchingCharacter = characters.find(character => character.id === parseInt(selectedCharacterId));

        return (
            <main className="character_detail_container">
                <div className="detailed_card">
                    <Link to="/">
                        <div className="back">
                            <i className="fas fa-times"></i>
                        </div>
                    </Link>
                    {matchingCharacter ? 
                        <div className="card">
                            <img 
                                className="card-image" 
                                src={matchingCharacter.image} 
                                alt={matchingCharacter.name} 
                            />
                            <div className="detail_card-text">
                                <p>Name: {matchingCharacter.name}</p>
                                <p>Species: {matchingCharacter.species}</p>
                                <p>Origin: {matchingCharacter.origin.name}</p>
                                <p>Number of episodes: {matchingCharacter.episode.length}</p>
                                <div className="status">
                                    Status:&nbsp;
                                    <span className="censored">_______</span>
                                    <span className="spoiler hidden"> {matchingCharacter.status}</span>
                                    <div className="spoiler_alert">
                                        <h4 className="alert_title">Spoiler alert!</h4>
                                        <p className="alert_text">Are you sure you want to check whether {matchingCharacter.name} is alive?</p>
                                        <div className="spoiler_button">
                                            <button className="spoiler_button_yes" onClick={this.showInfo}>YES</button>
                                            <button className="spoiler_button_no" onClick={this.dontShowInfo}>Not yet!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        :
                        <p> The entered URL does not exist. </p>
                    }
                </div>
                <Link to={`/character/${this.state.random}`}>
                    <img 
                        className="portal" 
                        src={portal} 
                        alt="Take me somewhere else" 
                        onClick={this.handlePortalClick}
                    />
                </Link>
            </main>
        );
    }
}

export default CharacterDetail;