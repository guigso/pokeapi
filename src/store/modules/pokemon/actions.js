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

export function getGenerationFailure() {
  return {
    type: '@pokemon/GET_GENERATION_FAILURE',
  };
}
