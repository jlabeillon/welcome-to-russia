// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Header from 'src/components/Header';

// Code

const show = (arg) => {

  for(var x = 1; x < 7; x++) {
    if (arg == x) {
      document.getElementById("reponse" + x).style.display = "block";
    };
  };

};

class Transport extends React.Component {
 render() {
    return (
      <div className="container">
        <Header />
          <div className="col-xs-12" className="page-container">
            <h1 className="page-title"> Transports </h1>
              <p className="page-desc">Bus, trolleybus, tramway, métro et bateaux : les transports
              publics abondent à Moscou. La plupart sont bon marché, la principale difficulté
              étant de se repérer au sein de cet écheveau passablement embrouillé. La
              complexité du réseau est en effet loin d’être commode pour un étranger.</p>
            <h2 onClick={function(){show(1)}}>Les bus</h2>
              <p id="reponse1">Mieux vaut se renseigner à l'avance auprès d'un tiers pour savoir précisément quelle ligne empunter.
              On achète son ticket ("talon") auprès du conducteur et on le composte à une petite machine située près des fenêtres. On peut aussi acheter un coupon, valable pour tous les transports en commun, aux guichets du métro.</p>
            <h2 onClick={function(){show(2)}}>Le métro</h2>
              <p id="reponse2">Rapide, propre et bon marché, le métro se révèle infiniment plus simple à utiliser à condition de se munir d’un plan bilingue pour déchiffrer les noms des stations. Le métro fonctionne de 5 h 30 à 1 h 30 du matin avec des périodes de forte affluence le matin vers 9 h et le soir vers 18 h. On peut acheter un jeton pour chaque trajet ou bien utiliser une carte magnétique rechargeable ou encore un coupon mensuel. Les entrées de métro servent également de passages souterrains entre les avenues et abritent de nombreux kiosques et vendeurs ambulants. La décoration des stations de métro (statues, fresques, vitraux), façon art prolétaire ou Russie impériale, est en outre très spectaculaire au point de constituer un but de visite en soi.</p>
            <h2 onClick={function(){show(3)}}>Les bateaux-mouches</h2>
              <p id="reponse3"> Ils sillonnent la Moskova. Les embarcadères sont répartis tout
              au long des rives. Les prix sont modiques et c’est un moyen idéal pour avoir un
              rapide aperçu des principaux points touristiques. Certains grands hôtels
              organisent des croisières fluviales avec une formule dîner et spectacle. A
              Moscou, Flotilla Radisson Royal Moscow, l’une des meilleures sociétés de
              croisière d’Europe, vous fait découvrir les principaux sites touristiques de la
              ville, lors d’une mini croisière de 2h30 sur la Moskova.</p>
            <h2 onClick={function(){show(4)}}>Les Taxis</h2>
              <p id="reponse4"> De nombreux taxis officiels (de couleur jaune) et clandestins ("tchastniks") circulent dans la capitale. On les hèle au hasard des rues en levant le bras (les taxis libres ont un petit feu vert allumé situé près du rétroviseur). Les prix sont libres et les véhicules ne sont pas munis de compteur. Il faut donc négocier le tarif de la course au départ sachant que les prix tournent autour de 5 à 10 dollars US. Bon nombre de véhicules particuliers jouent les taxis occasionnels, histoire de mettre un peu de beurre dans les épinards. La pratique est très courante et l'on n'hésitera pas à y avoir recours, les tarifs étant souvent très concurrentiels. On peut appeler un taxi par téléphone au 927 00 00.</p>
            <h2 onClick={function(){show(5)}}>En voiture</h2>
              <p id="reponse5"> Il est possible de louer une voiture avec ou sans chauffeur à des prix tout à fait corrects variant selon la catégorie du véhicule. On conseille de prendre un chauffeur pour le confort et la sécurité. On trouve des agences de location (Avis, Hertz, Europcar, Intourtrans, Aerotour...) un peu partout en ville et à l’aéroport. Des croisières fluviales relient Moscou et Saint-Pétersbourg, mais les plus pressé prendront le Sapsan, le TGV russe construit par Siemens, opérationnel depuis 2009. Il met 4h pour parcourir les 700 km qui séparent les deux villes.
              Pour les vols intérieurs, la compagnie nationale Aeroflot a désormais sa compagnie à bas coûts Dobroliot, avec des prix de 40 % inférieurs à ceux pratiqués jusqu'à présent en Russie. Basée à Moscou, elle relie la capitale russe aux grandes villes de l'ouest de la Russie, dont Saint-Pétersbourg, mais aussi Kaliningrad, Samara, Ekaterinbourg, Krasnodar, Oufa, Novy Urengoy et Makhatchkala. En 2016, Dobroliot devrait se lancer vers l’étranger avec des vols vers Kiev, Erevan et Istanbul.</p>
        </div>
      </div>
    )
  }
}
// Export
export default Transport;
