// Initial State
const initialState = {
  cityRestaurant: 'moscow',
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        cityName: action.data.name,
        cityDesc: action.data.description,
      };
    case 'SET_RESTAURANT':
      return {
        ...state,
        cityRestaurant: action.data.name,
        restaurant1: action.data.restaurant[0],
        restaurant2: action.data.restaurant[1],
        restaurant3: action.data.restaurant[2],
      };
    case 'SET_HOTEL':
      return {
        ...state,
        hotel1: action.data.hotel[0],
        hotel2: action.data.hotel[1],
        hotel3: action.data.hotel[2],
        hotel4: action.data.hotel[3],
        hotel5: action.data.hotel[4],
        hotel6: action.data.hotel[5],
        hotel7: action.data.hotel[6],
        hotel8: action.data.hotel[7],
        hotel9: action.data.hotel[8],
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

export const sendRestaurant = data => ({
  type: 'SET_RESTAURANT',
  data,
});

export const sendHotel = data => ({
  type: 'SET_HOTEL',
  data,
});

export const loadMoscow = () => ({
  type: 'LOAD_MOSCOW',
});

export const loadPetersbourg = () => ({
  type: 'LOAD_PETERSBOURG',
});

export const loadYekaterinburg = () => ({
  type: 'LOAD_YEKATERINBURG',
});

export const loadSochi = () => ({
  type: 'LOAD_SOCHI',
});

export const loadKazan = () => ({
  type: 'LOAD_KAZAN',
});

export const loadVolgograd = () => ({
  type: 'LOAD_VOLGOGRAD',
});

export const loadSaransk = () => ({
  type: 'LOAD_SARANSK',
});

export const loadSamara = () => ({
  type: 'LOAD_SAMARA',
});

export const loadRostov = () => ({
  type: 'LOAD_ROSTOV',
});

export const loadKaliningrad = () => ({
  type: 'LOAD_KALININGRAD',
});

export const loadNovgorod = () => ({
  type: 'LOAD_NOVGOROD',
});
