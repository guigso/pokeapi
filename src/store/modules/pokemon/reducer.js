import produce from 'immer';

const INITIAL_STATE = {
  pokemons: [],
  pokemon_detail: null,
  generation_number: 1,
  background: null,
  header: null,
  loading: true,
};

export default function pokemon(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemon/GET_GENERATION_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/GET_POKEMON_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/GET_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@pokemon/GET_GENERATION_SUCCESS': {
        draft.pokemons = action.payload.pokemons;
        draft.background = action.payload.background;
        draft.header = action.payload.header;
        draft.generation_number = action.payload.generation_number;
        draft.loading = false;
        break;
      }
      case '@pokemon/GET_POKEMON_SUCCESS': {
        draft.pokemon_detail = action.payload.pokemon;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
