export function getGenerationRequest(generation_number = 1) {
  return {
    type: '@pokemon/GET_GENERATION_REQUEST',
    payload: { generation_number },
  };
}

export function getGenerationSuccess(payload) {
  return {
    type: '@pokemon/GET_GENERATION_SUCCESS',
    payload,
  };
}

export function updateGeneration(generation_number) {
  return {
    type: '@pokemon/UPDATE_GENERATION',
    payload: { generation_number },
  };
}

export function getPokemonRequest(pokemon_id) {
  return {
    type: '@pokemon/GET_POKEMON_REQUEST',
    payload: { pokemon_id },
  };
}

export function getPokemonSuccess(payload) {
  return {
    type: '@pokemon/GET_POKEMON_SUCCESS',
    payload,
  };
}

export function getFailure() {
  return {
    type: '@pokemon/GET_FAILURE',
  };
}
