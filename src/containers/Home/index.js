import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { setPokemon as setPokemonsAction } from '../../actions';
import './styles.css';

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value))
});

function Home({setPokemons, pokemons}) {
  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.results);
    });
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
