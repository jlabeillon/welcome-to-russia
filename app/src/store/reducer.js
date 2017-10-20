// Types

// Cities

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
        restaurantName1: action.data.restaurant[0].name,
        restaurantName2: action.data.restaurant[1].name,
        restaurantName3: action.data.restaurant[2].name,
        restaurantAdress1: action.data.restaurant[0].address,
        restaurantAdress2: action.data.restaurant[1].address,
        restaurantAdress3: action.data.restaurant[2].address,
        restaurantCuisine1: action.data.restaurant[0].cuisine,
        restaurantCuisine2: action.data.restaurant[1].cuisine,
        restaurantCuisine3: action.data.restaurant[2].cuisine,
        restaurantGood1: action.data.restaurant[0].goodfor,
        restaurantGood2: action.data.restaurant[1].goodfor,
        restaurantGood3: action.data.restaurant[2].goodfor,
        restaurantPhone1: action.data.restaurant[0].phone,
        restaurantPhone2: action.data.restaurant[1].phone,
        restaurantPhone3: action.data.restaurant[2].phone,
        restaurantPrice1: action.data.restaurant[0].price,
        restaurantPrice2: action.data.restaurant[1].price,
        restaurantPrice3: action.data.restaurant[2].price,
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
// Selectors
