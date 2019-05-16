import React from 'react';
import Pokedex from "../Pokedex/Pokedex";
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex />
      <div className="Attribution">
        Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
        <br/>
        Pokemon Logo By <a href="https://en.wikipedia.org/wiki/Game_Freak" title="en:Game Freak">en:Game Freak</a>, <a href="https://en.wikipedia.org/wiki/Nintendo" title="en:Nintendo">en:Nintendo</a>, <a href="https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company" title="en:The Pokémon Company">en:The Pokémon Company</a> - Transferred from <span><a href="//en.wikipedia.org">en.wikipedia</a></span> to Commons., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=16063375">Link</a>
      </div>
    </div>
  );
}

export default App;