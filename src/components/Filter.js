import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.preventDefault = this.preventDefault.bind(this);
    }

    preventDefault(ev){
        ev.preventDefault()
    }

    render() {
        return (
            <header>
                <form onSubmit={this.preventDefault}>
                    <input type="text" onChange={this.props.handleChange} />
                </form>
            </header>
        );
    }
}

export default Filter;