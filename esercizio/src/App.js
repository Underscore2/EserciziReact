import React from 'react';
import './App.css';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import Title from './Title';

class App extends React.Component {
  state = {
    language: 'en'
  }

  selectHandler = (event) => {
    this.setState((state) => {
      return { language: state.language = event.target.value }
    })
  }

  /*Ho unito esercizio 1 e 2 Senza rendermene conto
  LOL! questo commento mi serve per committare */

  render() {
    return (
      <div className="App">
        <select value={this.state.language} onChange={this.selectHandler}>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage>
            <Title />
          </DisplayLanguage>
        </LanguageContext.Provider>
      </div >
    );
  }
}

export default App;
