import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { getGenerationSuccess, getPokemonSuccess, getFailure } from './actions';

export function* getGeneration({ payload }) {
  try {
    const { generation_number } = payload;

    const response = yield call(api.get, `generation/${generation_number}`);

    yield put(getGenerationSuccess({ ...response.data, generation_number }));
  } catch (err) {
    yield put(getFailure());
  }
}
export function* getPokemon({ payload }) {
  try {
    const { pokemon_id } = payload;
    const response = yield call(api.get, `details/${pokemon_id}`);

    yield put(getPokemonSuccess({ ...response.data }));
  } catch (err) {
    yield put(getFailure());
  }
}

export default all([
  takeLatest('@pokemon/GET_GENERATION_REQUEST', getGeneration),
  takeLatest('@pokemon/GET_POKEMON_REQUEST', getPokemon),
]);
