import React, { Component } from 'react';
import '../stylesheets/components/noResults.scss';

class NoResults extends Component {
    render() {
        return (
            <div className="no_results_container">
                <p className="no_results">
                    We can't seem to find a character named {this.props.nameFilter}.
                </p>
                <p className="no_results">
                    You might be looking in the wrong dimension!
                </p>
             </div>
        );
    }
}

export default NoResults;