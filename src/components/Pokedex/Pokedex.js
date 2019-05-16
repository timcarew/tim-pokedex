import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import logo from '../../pokemon_logo.svg';
import "./Pokedex.css";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [
        { id: 4, name: 'charmander'},
        { id: 7, name: 'squirtle'},
        { id: 11, name: 'metapod'},
        { id: 12, name: 'butterfree'},
        { id: 25, name: 'pikachu'},
        { id: 39, name: 'jigglypuff'},
        { id: 94, name: 'gengar'},
        { id: 133, name: 'eevee'}
      ]
    }
  }

  addPokemon = (pokemon) => {
    let pokemonObj = { name: pokemon, type: "normal" }
    this.setState(prevState => ({
      pokemonList: [...prevState.pokemonList, pokemonObj]
    }));
  }

  render() {
    const { pokemonList } = this.state;
    return(
      <div className="Pokedex">
        <img className="Pokedex-title" src={logo} alt="Pokemon Logo"/>
        <div className="Pokedex-cards">
          {pokemonList.map(pokemon => 
            <div className="Pokedex-card">
              <Pokecard
                name={pokemon.name}
                hasContent
              />
            </div>
          )}
          <div>
            <Pokecard addPokemon={this.addPokemon} hasContent={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;