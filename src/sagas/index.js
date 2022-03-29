import { call, put, takeEvery } from 'redux-saga/effects';
import { setError, setPokemons } from '../actions';
import { FETCH_POKEMONS } from '../actions/type';
import { getPokemonsWithDetails } from '../api/getPokemons';

function* fetchPokemonsWithDetails(action) {
  try {
    const pokemonsWithDetails = yield call(
      getPokemonsWithDetails,
      action.payload
    );
    yield put(setPokemons(pokemonsWithDetails));
  } catch (e) {
    yield put(setError({ message: 'Error al obtener detalles', error: e }));
  }
}

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonsWithDetails);
}

export default pokemonSaga;