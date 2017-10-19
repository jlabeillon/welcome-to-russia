// Types

// Cities

// Initial State
const initialState = {};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        cityName: action.data.name,
        cityDesc: action.data.description,
      };
    default:
      return state;
  }
};

// Actions creators
export const sendCity = data => ({
  type: 'SET_CITY',
  data,
});

export const loadMoscow = () => ({
  type: 'LOAD_MOSCOW',
});

// export const loadPetersbourg = () => ({
//   type: 'LOAD_PETERSBOURG',
// });

// export const loadYekaterinburg = () => ({
//   type: 'LOAD_YEKATERINBURG',
// });

// export const loadSochi = () => ({
//   type: 'LOAD_SOCHI',
// });

// export const loadKazan = () => ({
//   type: 'LOAD_KAZAN',
// });

// export const loadVolgograd = () => ({
//   type: 'LOAD_VOLGOGRAD',
// });

// export const loadSaransk = () => ({
//   type: 'LOAD_SARANSK',
// });

// export const loadSamara = () => ({
//   type: 'LOAD_SAMARA',
// });

// export const loadRostov = () => ({
//   type: 'LOAD_ROSTOV',
// });

// export const loadKaliningrad = () => ({
//   type: 'LOAD_KALININGRAD',
// });

// export const loadNovgorod = () => ({
//   type: 'LOAD_NOVGOROD',
// });
// Selectors
