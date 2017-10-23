// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code

const show = (arg) => {
  for (var x = 1; x < 7; x++) {
    if (arg === x) {
      document.getElementById('reponse' + x).style.display = 'block';
    }
  }
};

const Visa = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-12 page-container">
        <h1 className="page-title">Formalités territoriales</h1>
        <p className="page-desc">Vous souhaitez vous rendre en Russie pour assister aux matchs de la Coupe du Monde 2018 qui débutera le 14 juin 2018 à Moscou ? Il faudra dans ce cas vous munir de votre « passeport du supporter » ! Explications. </p>

        <h2 onClick={function(){show(1)}}>Pourquoi un passeport du supporter ?</h2>

        <p id="reponse1">Désireux d’organiser une Coupe du Monde « sûre » et afin d’éviter tout incident, la Russie, dont la réputation des supporters n’est plus à faire, instaure un nouveau procédé afin d’assister aux rencontres de la compétition, prévue du 14 juin au 15 juillet 2018. Vous devrez donc, en plus de votre billet acheté sur le site internet de la FIFA, être en possession du tout nouveau « passeport du supporter » ou « Fan-ID ». Sans ce document, il vous sera impossible de pénétrer dans l’un des douze stades accueillant les rencontres de la phase finale.</p>

        <h2 onClick={function(){show(2)}}>La coupe des confédération pour roder le dispositif</h2>

        <p id="reponse2">Avant de recevoir la Coupe du Monde à l’été 2018, la Russie organisera la traditionnelle Coupe de Confédération, du 17 juin au 2 juillet 2017, pour ce qui est considéré comme un test grandeur nature en terme d’organisation. A l’instar de l’achat des billets pour la Coupe du Monde, les procédures d’obtention de ce passeport pour la compétition prévue en 2018 ne seront disponibles qu’après la Coupe des Confédérations. Actuellement, seules des demandes de Fan-ID pour la Coupe des Confédérations sont donc disponibles. Sachez également qu’un passeport spécifique vous sera demandé pour chacune des compétitions. Vous devrez donc éditer un Fan-ID  pour la Coupe des Confédérations de la FIFA 2017, et un autre pour la Coupe du Monde de la FIFA 2018, après l’achat d’un billet pour l’une de ces compétitions. Des informations plus détaillées sur la délivrance d’un FAN ID pour la Coupe du Monde de la FIFA 2018 seront publiées sur le site internet officiel, après la Coupe des Confédérations de la FIFA 2017.</p>

        <h2 onClick={function(){show(3)}}>Comment obtenir son passport du supporter ?</h2>

        <p id="reponse3">Après l’achat de votre place, une demande devra être faite sur le site internet officiel ou directement dans le centre de distribution. Un numéro de billet (ou numéro de commande), ainsi qu’un document d’identité seront nécessaires (certificat de naissance pour les enfants de moins de 14 ans). Une fois votre demande approuvée, un SMS (ou un email) vous sera envoyé. Le passeport vous sera alors envoyé à votre domicile, ou sera à retirer dans un centre de délivrance FAN ID.</p>

        <h2 onClick={function(){show(4)}}>Un passeport pour tous</h2>

        <p id="reponse4">Les enfants devront également posséder leur Fan-ID propre. Pour obtenir ce passeport, le représentant légal de l’enfant devra soumettre une demande pour un enfant de moins de 14 ans, et devra donner son consentement pour le traitement des données personnelles de l’enfant. Il faudra dans ce cas se munir de l’original du certificat de naissance de l’enfant, de la pièce d’identité du représentant légal de l’enfant, d’un billet ou une preuve de l’achat du billet. Sachez également qu’il sera possible d’aller retirer les Fan-ID pour vos amis, parents ou conjoints sous présentation d’une photocopie de la pièce d’identité de la personne, d’une procuration dûment remplie et de la pièce d’identité du mandataire. Si vous posséder plusieurs places, il ne vous sera pas demandé un Fan ID pour chaque place. Il suffira d’associer votre Fan ID à vos différentes places.</p>

        <h2 onClick={function(){show(5)}}>A quoi va ressemlber le passeport du supporter ?</h2>

        <p id="reponse5">Le Fan-ID se présentera sous la forme d’une petite carte personnalisée en plastique, comportant les informations essentielles tel que le nom et prénom, le numéro de la pièce d’identité ainsi qu’une photo. Ces cartes ne seront valables que pendant la période des matches de la compétition.</p>

        <h2 onClick={function(){show(6)}}>Quels droits procurent le passeport du supporter ?</h2>

        <p id="reponse6">Pour les étrangers, le passeport fera office de visa. Vous pourrez vous rendre en Russie et assister aux matchs sans problème. Le Fan-ID vous permettra également de bénéficier du service de transport gratuit pendant les jours des matches dans les villes accueillant la compétition, dans les transports publics urbains (excepté le taxi). Des places dans les trains à destination des villes organisatrices seront également disponibles après une inscription sur le site web de la Direction des transports de la Coupe du Monde de la FIFA 2018.</p>
      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default Visa;
