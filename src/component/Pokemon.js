import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokemon extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}${id}.png`;
    return (
      <div className="pokemon-card ">
        <h1 className="pokemon-title">{name}</h1>
        <img src={imgSrc} alt="logo" />
        <div className="pokemon-data">Type: {type}</div>
        <div className="pokemon-data">Experience: {exp}</div>
      </div>
    );
  }
}

export default Pokemon;
