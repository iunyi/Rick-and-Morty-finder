import React, { Component } from 'react';

class Filter extends Component {

    render() {
        return (
            <form>
                <input type="text" onChange={this.props.handleChange}/>
            </form>
        );
    }
}

export default Filter;