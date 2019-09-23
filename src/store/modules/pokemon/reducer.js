import produce from 'immer';

const INITIAL_STATE = {
  pokemons: [],
  generation_number: 1,
  background: null,
  header: null,
};

export default function pokemon(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemon/GET_GENERATION_SUCCESS': {
        draft.pokemons = action.payload.pokemons;
        draft.background = action.payload.background;
        draft.header = action.payload.header;
        draft.generation_number = action.payload.generation_number;
        break;
      }
      default:
    }
  });
}
