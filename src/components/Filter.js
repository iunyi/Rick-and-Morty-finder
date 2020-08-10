import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/filter.scss';
import logo from '../images/logo.png';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.preventDefault = this.preventDefault.bind(this);
        this.removeAllScreenHeader = this.removeAllScreenHeader.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    preventDefault(ev){
        ev.preventDefault()
    }

    removeAllScreenHeader(){
        const header = document.querySelector('.header');
        header.classList.remove('header_before');
        header.classList.add('header_after');
    }

    handleChange(ev){
        this.props.handleChange(ev);
        this.removeAllScreenHeader();
    }

    handleOnClick(){
        this.props.handleOnClick();
        this.removeAllScreenHeader();
    }
    
    render() {
        return (
            <header className="header header_before ">
                <img className="logo" src={logo} alt="Rick and Morty logo"/>
                <div className="form_container">
                    <form className="form" onSubmit={this.preventDefault}>
                        <input 
                            className="form_input" 
                            type="text" 
                            placeholder="Enter the name of a character" 
                            onChange={this.handleChange} 
                            value={this.props.value} 
                        />
                    </form>
                    <i className="fas fa-search" onClick={this.handleOnClick}></i>
                </div>
            </header>
        );
    }
}

Filter.propTypes = {
    handleChange: PropTypes.func,
    handleOnClick: PropTypes.func,
    value: PropTypes.string
}

export default Filter;