import React from 'react';
import './App.css';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import Title from './Title';
import { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState('en')

 function selectHandler(event){
     setLanguage(event.target.value)
  }

  return (
    <div className="App">
      <select value={language} onChange={selectHandler}>
        <option value='en'>ENGLISH</option>
        <option value='it'>ITALIANO</option>
      </select>

      <LanguageContext.Provider value={language}>
        <DisplayLanguage>
          <Title />
        </DisplayLanguage>
      </LanguageContext.Provider>
    </div >
  );
}
