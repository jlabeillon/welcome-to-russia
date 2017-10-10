// Import
import axios from 'axios';

// Local import

// Code

export default store => next => (action) => {

  switch (action.type) {
    case RECIPES_LOAD: {
      axios
        .get('url')
        .then(({ data }) => {
          console.log(data);
        })
        .catch(() => {
          console.error('La requête ajax a échoué :(');
        });
      break;
    }

    default:
  }

  next(action);
};
