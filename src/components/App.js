import React from 'react';
import getDataFromApi from '../services/getDataFromApi';
import Filter from './Filter';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      nameFilter: '',
    }
    this.filterName = this.filterName.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
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
    return characters
      .filter(character => {
        return character.name
          .toUpperCase()
          .includes(this.state.nameFilter.toUpperCase())
      })
  }

  render() {
    console.log(this.renderFilteredCharacters())
    return (
      <div className="App">
          <Filter handleChange={this.filterName}/>
          <CharacterList characters={this.renderFilteredCharacters()} />
      </div>
    );
  }
}

export default App;
