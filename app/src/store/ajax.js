// /*
//  * Npm import
//  */
// import axios from 'axios';
//
//
// /*
//  * Local import
//  */
// import { RECIPES_LOAD, setRecipes } from 'src/store/reducer';
// import { slugify } from 'src/utils';
//
//
// /*
//  * Code
//  */
// const url = 'https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json';
//
//
// /*
//  * Middleware
//  */
// export default store => next => (action) => {
//   // On écoute les actions qui nous intéressent
//   switch (action.type) {
//     // A l'action RECIPES_LOAD, on va chercher les données
//     case RECIPES_LOAD: {
//       // On fait une requête ajax vers l'API
//       axios
//         .get(url)
//         .then(({ data }) => {
//           /* Je rajoute mon slug */
//           const recipes = data.map(recipe => ({
//             // On reprend ce qu'il y a dans l'objet
//             ...recipe,
//             // Et en plus, on rajoute un slug
//             slug: slugify(recipe.name),
//           }));
//
//           /* Je l'envoie dans le store */
//           store.dispatch(setRecipes(recipes));
//         })
//         .catch(() => {
//           console.error('La requête ajax a échoué :(');
//         });
//       break;
//     }
//
//     default:
//   }
//
//   // Je passe à mon voisin
//   next(action);
// };
