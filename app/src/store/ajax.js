// Import
import axios from 'axios';

// Local import
import { sendCity } from 'src/store/reducer';

// Code
export default store => next => (action) => {
  switch (action.type) {

    case 'LOAD_MOSCOW': {
      axios
        .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/moscow')
        .then(({ data }) => {
          store.dispatch(sendCity(data));
          console.log(data)
        })
        .catch(() => {
          console.error('Ajax failed');
        });
      break;
    }

    // case 'LOAD_PETERSBOURG': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/saint-petersbourg')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_YEKATERINBURG': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/yekaterinburg')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_SOCHI': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/sochi')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_KAZAN': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/kazan')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_VOLGOGRAD': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/volgograd')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_SARANSK': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/saransk')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_SAMARA': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/samara')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_ROSTOV': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/rostov')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_KALININGRAD': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/kaliningrad')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }

    // case 'LOAD_NOVGOROD': {
    //   axios
    //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/novgorod')
    //     .then(({ data }) => {
    //       store.dispatch(sendCity(data));
    //       console.log(data)
    //     })
    //     .catch(() => {
    //       console.error('Ajax failed');
    //     });
    //   break;
    // }
    default:
  }
  next(action);
};
