import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/getDataFromApi';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import '../stylesheets/components/App.scss';
import NoResults from './NoResults';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			nameFilter: ''
		}
		this.filterName = this.filterName.bind(this);
		this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
		this.checkAllCharacters = this.checkAllCharacters.bind(this);
		this.getMatchingCharacter = this.getMatchingCharacter.bind(this)
	}

	componentDidMount(){
		getDataFromApi()
		.then(responseData => {
			this.setState({
				data: responseData
			})
		})
	}

	filterName(ev){
		this.setState({
			nameFilter: ev.target.value
		})
	}

	renderFilteredCharacters() {
		const characters = this.state.data;

		// Sort name alphabetically
		characters.sort((a, b) => {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
		});

		// Filter names by name, according to the entered input
		return characters.filter(character => {
		return character.name
			.toUpperCase()
			.includes(this.state.nameFilter.toUpperCase())
		})
	}

	checkAllCharacters(){
		this.setState({
			nameFilter: ''
		})
	}

	getMatchingCharacter(props) {
		const routeCharacterID = parseInt(props.match.params.id);
		const character = (this.state.data).find(character => character.id === routeCharacterID);
		if (!character) return 
		return (
			<CharacterDetail 
				character={character} 
				checkAllCharacters={this.checkAllCharacters}
			/>
		)
	}

	render() {
		return (
			<div className="App">
				<Switch>
				<Route exact path="/">
					<Filter handleChange={this.filterName} handleOnClick={this.renderFilteredCharacters} value={this.state.nameFilter}/>
					{
						this.renderFilteredCharacters().length !== 0 ?
							<CharacterList 
								className="character_list hidden" 
								characters={this.renderFilteredCharacters()} 
							/>
							:
							<NoResults 
								nameFilter={this.state.nameFilter}
							/>
					} 
				</Route>
				<Route 
					path="/character/:id"
					render={this.getMatchingCharacter}
				/>
				</Switch>
			</div>
		);
	}
}

export default App;