import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/getDataFromApi';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
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
    return (
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Filter handleChange={this.filterName}/>
              <CharacterList characters={this.renderFilteredCharacters()} />
            </Route>
            <Route 
            path="/character/:id" 
            render={routerProps => (
              <main className="main">
                <CharacterDetail match={routerProps.match} name={this.detailedInfo} characters={this.renderFilteredCharacters()} />
              </main>
            )}
          />
          </Switch>
      </div>
    );
  }
}

export default App;
