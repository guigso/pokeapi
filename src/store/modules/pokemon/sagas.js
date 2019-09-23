import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { getGenerationSuccess, getGenerationFailure } from './actions';

export function* getGeneration({ payload }) {
  try {
    const { generation_number } = payload;

    const response = yield call(api.get, `generation/${generation_number}`);

    yield put(getGenerationSuccess({ ...response.data, generation_number }));
  } catch (err) {
    yield put(getGenerationFailure());
    console.tron.log(err);
  }
}

export default all([
  takeLatest('@pokemon/GET_GENERATION_REQUEST', getGeneration),
]);
