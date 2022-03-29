/*eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { fetchPokemons } from '../../actions';
import './styles.css';

function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
