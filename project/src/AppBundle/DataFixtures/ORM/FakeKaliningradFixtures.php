<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Game;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\DateTime;
use Cocur\Slugify\Slugify;

class FakeKaliningradFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime('');

        $kaliningrad = New City();
        $manager->persist($kaliningrad);

        $hotelKaliningradAuth = new Hotel();
        $hotelKaliningradAuth->setName('Marton Olimpic');
        $slug = new Slugify();
        $hotelKaliningradAuthSlug = $slug->slugify($hotelKaliningradAuth->getName());
        $hotelKaliningradAuth->setSlug($hotelKaliningradAuthSlug);
        $hotelKaliningradAuth->setDescription('Doté d\'une connexion Wi-Fi gratuite dans l\'ensemble de ses locaux, le Marton Olimpic vous propose un hébergement à Kaliningrad, à 2 km du musée de l\'ambre. Un parking privé gratuit est disponible sur place.');
        $hotelKaliningradAuth->setImage('https://t-ec.bstatic.com/images/hotel/max1024x768/639/63993197.jpg');
        $hotelKaliningradAuth->setAddress('Moskovskiy prospect 175, 236039 Kaliningrad, Russie');
        $hotelKaliningradAuth->setCategory('Authentic');
        $hotelKaliningradAuth->setEmail('marton@gmail.com');
        $hotelKaliningradAuth->setPhone('05 55 87 91 06');
        $hotelKaliningradAuth->setCity($kaliningrad);
        $manager->persist($hotelKaliningradAuth);

        $hotelKaliningradEco = new Hotel();
        $hotelKaliningradEco->setName('KoikaGO Hostel');
        $slug = new Slugify();
        $hotelKaliningradEcoSlug = $slug->slugify($hotelKaliningradEco->getName());
        $hotelKaliningradEco->setSlug($hotelKaliningradEcoSlug);
        $hotelKaliningradEco->setDescription('Situé à Kaliningrad, à 5 minutes à pied de Yuzh Park, le KoikaGo Hostel dispose d\'un coin salon, d\'un bureau d\'excursions et d\'une connexion Wi-Fi gratuite.');
        $hotelKaliningradEco->setImage('https://t-ec.bstatic.com/data/xphoto/max1024x768/291/29149785.jpg');
        $hotelKaliningradEco->setAddress('Ulitsa Bogdana Khmelnitskogo 33-37, 236039 Kaliningrad, Russie');
        $hotelKaliningradEco->setCategory('Eco');
        $hotelKaliningradEco->setEmail('koikago@gmail.com');
        $hotelKaliningradEco->setPhone('05 55 87 91 06');
        $hotelKaliningradEco->setCity($kaliningrad);
        $manager->persist($hotelKaliningradEco);


        $hotelKaliningradLux= new Hotel();
        $hotelKaliningradLux->setName('Kaiserhof Hotel');
        $slug= new Slugify();
        $hotelKaliningradLuxSlug = $slug->slugify($hotelKaliningradLux->getName());
        $hotelKaliningradLux->setSlug($hotelKaliningradLuxSlug);
        $hotelKaliningradLux->setDescription('Situé sur les rives de la Pregolia dans le village des pêcheurs, le Kaiserhof Hotel possède des chambres élégantes munies d\'une connexion Wi-Fi gratuite. Un spa est à votre disposition.');
        $hotelKaliningradLux->setImage('https://s-ec.bstatic.com/images/hotel/max1024x768/984/98419790.jpg');
        $hotelKaliningradLux->setAddress('Oktyabrskaya Street 6 A, 236006 Kaliningrad, Russie');
        $hotelKaliningradLux->setCategory('Luxury');
        $hotelKaliningradLux->setEmail('kaiserhof@gmail.com');
        $hotelKaliningradLux->setPhone('05 55 87 91 06');
        $hotelKaliningradLux->setCity($kaliningrad);
        $manager->persist($hotelKaliningradLux);

        $restaurantKaliningrad1 = new Restaurant();
        $restaurantKaliningrad1->setPhone('05 55 87 91 06');
        $restaurantKaliningrad1->setEmail('bretsel@gmail.com');
        $restaurantKaliningrad1->setDescription('Un resto de ouf malade');
        $restaurantKaliningrad1->setName('Brewery Bretsel');
        $slug = new Slugify();
        $restaurantKaliningrad1Slug = $slug->slugify($restaurantKaliningrad1->getName());
        $restaurantKaliningrad1->setSlug($restaurantKaliningrad1Slug);
        $restaurantKaliningrad1->setAddress('Nevskogo St., 10, Kaliningrad 236000, Russie');
        $restaurantKaliningrad1->setCity($kaliningrad);

        $manager->persist($restaurantKaliningrad1);

        $restaurantKaliningrad2 = new Restaurant();
        $restaurantKaliningrad2->setPhone('05 55 87 91 06');
        $restaurantKaliningrad2->setEmail('konigsbacker@gmail.com');
        $restaurantKaliningrad2->setDescription('Le classement parmi les 50 meilleurs restaurants au Monde n\'est pas usurpé. Le menu de dégustation est un véritable plongeon dans la cuisine Russe revisité.');
        $restaurantKaliningrad2->setName('Konigsbacker');
        $slug = new Slugify();
        $restaurantKaliningrad2Slug = $slug->slugify($restaurantKaliningrad2->getName());
        $restaurantKaliningrad2->setSlug($restaurantKaliningrad2Slug);
        $restaurantKaliningrad2->setAddress('Zhitomirskaya St., 6-8, Kaliningrad 236006, Russie');
        $restaurantKaliningrad2->setCity($kaliningrad);

        $manager->persist($restaurantKaliningrad2);

        $fanzoneKaliningrad = new FanZone();
        $fanzoneKaliningrad->setName('Fan-Zone de Kaliningrad');
        $slug = new Slugify();
        $fanzoneKaliningradSlug = $slug->slugify($fanzoneKaliningrad->getName());
        $fanzoneKaliningrad->setSlug($fanzoneKaliningradSlug);
        $fanzoneKaliningrad->setImage('http://edito.nicematin.net/AM/pdf/10-06-2016-23-10-46.jpg');
        $fanzoneKaliningrad->setCapacity(3000);
        $fanzoneKaliningrad->setLocalization('Kaliningrad');
        $fanzoneKaliningrad->setCity($kaliningrad);

        $manager->persist($fanzoneKaliningrad);

        $gameKaliningrad = new Game();
        $gameKaliningrad->setDate($date);
        $gameKaliningrad->setTeam('Allemagne vs Italie');
        $gameKaliningrad->setCity($kaliningrad);
        $gameKaliningrad->setHour(19);

        $manager->persist($gameKaliningrad);

        $kaliningrad->setName('Kalilingrad');
        $slug = new Slugify();
        $kaliningradSlug = $slug->slugify($kaliningrad->getName());
        $kaliningrad->setSlug($kaliningradSlug);
        $kaliningrad->setDescription('Kaliningrad, anciennement Königsberg en Prusse-Orientale, est une ville de Russie située dans une exclave territoriale, l\'oblast de Kaliningrad, totalement isolée du reste du territoire russe, entre la Pologne et la Lituanie. Sa population s\'élève à 441 376 habitants en 2013.');
        $kaliningrad->setImage('https://meridianes.files.wordpress.com/2016/02/kaliningrad_1.jpg');
        $kaliningrad->addHotel($hotelKaliningradAuth);
        $kaliningrad->addHotel($hotelKaliningradEco);
        $kaliningrad->addHotel($hotelKaliningradLux);
        $kaliningrad->addRestaurant($restaurantKaliningrad1);
        $kaliningrad->addRestaurant($restaurantKaliningrad2);
        $kaliningrad->addFanZone($fanzoneKaliningrad);
        $kaliningrad->addGame($gameKaliningrad);

        $manager->persist($kaliningrad);


        $manager->flush();



    }
}