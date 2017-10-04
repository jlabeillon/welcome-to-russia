// Types

// Cities
// const CITY_CHANGE_MOSCOW = 'CITY_CHANGE_MOSCOW';

// Initial State
const initialState = {};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case CITY_CHANGE_MOSCOW:
    //   return {
    //     ...state,
    //     currentView: 'moscow',
    //   };
    //
    // case MESSAGE_SEND:
    //   return {
    //     ...state,
    //     messageInput: '',
    //   };

    default:
      return state;
  }
};

// Cities actions creators
// export const changeMessageInput = messageInput => ({
//   type: FORM_INPUT_CHANGE,
//   messageInput,
// });
//
// export const changeCityMoscow = () => ({
//   type: CITY_CHANGE_MOSCOW,
// });


// Selectors
