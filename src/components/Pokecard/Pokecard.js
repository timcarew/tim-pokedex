import React, { Component } from 'react';
import "./Pokecard.css";
import star from '../../star.svg';
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';
const BACK_BUTTON_URL = "https://img.icons8.com/windows/32/000000/back.png";

class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprite: "",
      weight: "",
      base_exp: "",
      type: "",
      addIsClicked: false,
      errorClass: "",
      pokemonToAdd: ""
    }
  }

  componentDidMount() {
    if (this.props.hasContent) {
      fetch(POKEAPI_URL + this.props.name)
        .then(res => res.json())
        .then(data => {
          this.setState({ sprite: data.sprites.front_default });
          this.setState({ weight: data.weight});
          this.setState({ base_exp: data.base_experience });
          let typeToFormat = data.types[0].type.name;
          let formattedType = typeToFormat[0].toUpperCase() + typeToFormat.substring(1);
          this.setState({ type: formattedType});
        })
        .catch(err => console.log(err));
    }
  }

  toggleAddCard = () => {
    this.setState({ addIsClicked: !this.state.addIsClicked });
  }

  updateInput = (event) => {
    this.setState({ pokemonToAdd: event.target.value.toLowerCase() });
  }

  handleInput = () => {
    if (this.state.pokemonToAdd) {
      let pokemonName = this.state.pokemonToAdd;
      fetch(POKEAPI_URL + pokemonName)
        .then(res => res.json())
        .then(() => {
          this.props.addPokemon(this.state.pokemonToAdd);
          this.setState({ shouldPlayError: false });
          this.setState({ addIsClicked: false });
          this.refs.nameInput.value = "";
          this.setState({pokemonToAdd: ""});
        })
        .catch(err => {
          this.setState({ errorClass: "Pokecard-side-back-clicked-error" });
          console.log(err);
        })
    }
    else {
      this.setState({ errorClass: "Pokecard-side-back-clicked-error" });
      console.log("No input value");
    }
  }

  render() {
    const { name, hasContent } = this.props;
    if (hasContent) {
      // fill card
      let formattedName = name[0].toUpperCase() + name.substring(1);
      return (
        <div className="Pokecard">
          <div className="Pokecard-side Pokecard-side-front">
            <h4>{formattedName}</h4>
            <img className="Pokecard-sprite" src={this.state.sprite} alt="none" />
          </div>
          <div className="Pokecard-side Pokecard-side-back Pokecard-side-back">
            <h4 className="Pokecard-side-name">{formattedName}</h4>
            <h4>Type(s): {this.state.type}</h4>
            <h4>Weight: {this.state.weight}</h4>
            <h4>Base Experience: {this.state.base_exp}</h4>
          </div>
        </div>
      );
    }
    else {
      // return Add Pokemon card
      let addClassFront = this.state.addIsClicked ? 'Pokecard-side-front-clicked' : null;
      let addClassBack = this.state.addIsClicked ? 'Pokecard-side-back-clicked' : null;
      return(
        <div className="Pokecard-last">
          <div className="Pokecard-add">
            <div onClick={this.toggleAddCard} className={`Pokecard-side Pokecard-side-front ${addClassFront}`}>
              <img className="Pokecard-addicon" src={star} alt="Add New Card Icon" />
              <h2>Add Pokemon</h2>
            </div>
            <div onAnimationEnd={() => { this.setState({ errorClass: "" }) }}className={`Pokecard-side Pokecard-side-back ${addClassBack} ${this.state.errorClass}`}>
              <img src={BACK_BUTTON_URL} alt="Back Button" onClick={this.toggleAddCard} className="Pokecard-side-back-button"/>
              <h2>Add A Pokemon</h2>
              <input ref="nameInput" onChange={this.updateInput} className="Pokecard-side-back-input" placeholder="Name" name="pokemon-name" type="text"/>
              <button onClick={this.handleInput} type="submit" className="Pokecard-side-back-submit">Submit</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Pokecard;