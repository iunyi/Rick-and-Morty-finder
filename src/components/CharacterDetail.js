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
        this.showSpoilerAlert = this.showSpoilerAlert.bind(this);
    }

    // Get a random number to show a random character
    min = 1;
    max = 120;
    getRandomNumber = () => {
        let randomNumber = parseInt(this.min + (Math.random() * (this.max - this.min)));

        if (randomNumber > 100) {
            randomNumber += 80
        }
        
        this.setState({
          random: randomNumber
        });
    };

    showSpoilerAlert(){
        const status = document.querySelector('.status');
        status.classList.remove('hidden');
        const spoiler = document.querySelector('.spoiler');
        spoiler.classList.add('hidden');
        const spoilerAlert = document.querySelector('.spoiler_alert');
        spoilerAlert.classList.remove('hidden');
        const censored = document.querySelector('.censored');
        censored.classList.remove('hidden');
    }
    
    handlePortalClick(){
        this.getRandomNumber();
        this.props.checkAllCharacters();
        this.showSpoilerAlert();
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
        const url = window.location.href
        const idFromURL= url.substring(url.lastIndexOf('/')+1);
        
        return (
            <main className="character_detail_container">
                <div className="detailed_card">
                    <Link to="/">
                        <div className="back">
                            <i className="fas fa-times"
                                id={idFromURL}
                            ></i>
                        </div>
                    </Link>
                    {this.props.character ? 
                        <section className="card">
                            <img 
                                className="card-image" 
                                src={this.props.character.image} 
                                alt={this.props.character.name} 
                            />
                            <div className="detail_card-text">
                                <p>
                                    <span className="label">Name: </span> 
                                    <span>{this.props.character.name}</span>
                                </p>
                                <p>
                                    <span className="label">Species: </span> 
                                    <span>{this.props.character.species}</span>
                                </p>
                                <p>
                                    <span className="label">Origin: </span> 
                                    <span>{this.props.character.origin.name}</span>
                                </p>
                                <p>
                                    <span className="label">Number of episodes: </span> 
                                    <span>{this.props.character.episode.length}</span>
                                </p>
                                <div className="status">
                                    <span className="label">Status:&nbsp;</span>
                                    <span className="censored">_______</span>
                                    <span className="spoiler hidden"> {this.props.character.status}</span>
                                    <div className="spoiler_alert">
                                        <h4 className="alert_title">Spoiler alert!</h4>
                                        <p className="alert_text">Are you sure you want to check whether {this.props.character.name} is alive?</p>
                                        <div className="spoiler_button">
                                            <button className="spoiler_button_yes" onClick={this.showInfo}>YES</button>
                                            <button className="spoiler_button_no" onClick={this.dontShowInfo}>Not yet!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
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