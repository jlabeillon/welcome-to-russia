// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Header from 'src/components/Header';

// Code
class Competition extends React.Component {
 render() {
    return (
      <div className="container">
        <Header />
          <h1 className="page-title">Informations concernant la compétition</h1>
            <h2 className="page-desc">64 matches au total seront disputés pour décider du vainqueur de la Coupe du Monde de la FIFA ! 11 Villes au total vont accueillir ces matchs dans leurs stades respectifs</h2>
              <ul>
                <div className="col-xs-6 page-desc">
                      <li> Lekaterinbourg : Lekaterinbourg Arena </li>
                      <p> Les 15, 21, 24 et 27 Juin 2018 </p>
                      <li> Kaliningrad : Stade de Kaliningrad </li>
                      <p> Les 16, 22, 25 et 28 juin 2018 </p>
                      <li> Kazan : Kazan Arena </li>
                      <p> Les 16, 20, 24, 27, et 30 juin puis le 6 juillet 2018</p>
                      <li> Moscou : Stade Loujniki </li>
                      <p> Les 14, 17, 20 et 26 juin puis du 1er juillet, 11 juillet et 15 juillet 2018 </p>
                      <li> Moscou : Stade du Spartak </li>
                      <p> Les 16, 19, 23, 27 juin et 3 juillet 2018 </p>
                      <li> Nijni-Novgorod : Stade de Nijni-Novgorod </li>
                      <p> Les 18, 21, 24 et 27 juin puis les 1er et 6 juillet 2018 </p>
                </div>
                <div className="col-xs-6 page-desc">
                      <li> Rostov-sur-le-Don : Rostov Arena </li>
                      <p> Les 17, 20, 23 et 26 juin puis le 2 juillet 2018 </p>
                      <li> Saint-Petersbourg : Stade de Saint-Petersbourg </li>
                      <p> Les 15, 19, 22 et 26 juin puis 3, 10 et 14 juillet 2018 </p>
                      <li> Samara : Samara Arena </li>
                      <p> Les 17, 21, 25 et 28 juin puis les 2 et 7 juillet 2018 </p>
                      <li> Saransk : Stade de Mordovie </li>
                      <p> Les 16, 19, 25 et 28 juin 2018 </p>
                      <li> Sotchi : Stade Ficht </li>
                      <p> Les 15, 18, 23, 26 et 30 juin puis le 7 juillet 2018 </p>
                      <li> Volgograd : Volgograd Arena </li>
                      <p> Les 18, 22, 25 et 28 juin 2018 </p>
                </div>
              </ul>
            <p className="page-desc"> Plus de 500 000 billets pour la Coupe du monde 2018 en Russie ont déjà été demandés, 24 heures après l'ouverture de la billetterie, d'après la Fifa. Ce sont, sans surprise, les supporters russes qui ont effectué le plus de demandes devant les fans mexicains, argentins, brésiliens et chinois.
            Pour la finale, plus de 50 000 billets ont déjà été demandés et 40 000 pour le match d'ouverture, précise l'instance internationale. La première phase de vente est ouverte jusqu'au 12 octobre. A l'issue de celle-ci, un tirage au sort aléatoire aura lieu pour délivrer les places. </p>
      </div>
    )
  }
}
// Export
export default Competition;
