/*
 * Module dependencies
 */

import React from 'react';
import PokeRow from './PokeRow';

export default class PokeTable extends React.Component {
  render() {
    return <ul className="poketable">
      {
        this.props.pokemons.map((pokemon) => {
          return <PokeRow
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            growl={this.props.onGrowl} />
        })
      }
    </ul>
  }
}