import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedesk.css';

class Pokedesk extends Component {
  static defaultProps = {
    pokemon: [
      { id: 100, _name: 'Prashant', type: 'fire', exp: 50 },
      { id: 200, _name: 'Kiran', type: 'Water', exp: 60 },
      { id: 300, _name: 'Sujan', type: 'Snake', exp: 70 },
      { id: 400, _name: 'Saugat', type: 'Electric', exp: 80 },
      { id: 500, _name: 'Bishal', type: 'Posion', exp: 90 },
      { id: 600, _name: 'Anish', type: 'Thunder', exp: 100 },
      { id: 700, _name: 'Dikpal', type: 'Wind', exp: 110 },
      { id: 800, _name: 'Anish', type: 'Neuclear', exp: 120 },
    ],
  };
  render() {
    return (
      <div className="Pokedesk">
        {this.props.pokemon.map((p) => {
          return <Pokemon id={p.id} name={p._name} type={p.type} exp={p.exp} />;
        })}
      </div>
    );
  }
}

export default Pokedesk;
