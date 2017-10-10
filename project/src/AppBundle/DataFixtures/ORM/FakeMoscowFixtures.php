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


class FakeMoscowFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime('');

        $moscow = New City();
        $manager->persist($moscow);

        $hotelMoscowAuth = new Hotel();
        $hotelMoscowAuth->setName('Aquamarine Hotel');
        $slug = new Slugify();
        $hotelMoscowAuthSlug = $slug->slugify($hotelMoscowAuth->getName());
        $hotelMoscowAuth->setSlug($hotelMoscowAuthSlug);
        $hotelMoscowAuth->setDescription('Situé à 20 minutes à pied du Kremlin de Moscou et de la cathédrale Saint-Basile-le-Bienheureux, cet hôtel design propose des chambres spacieuses et modernes ainsi qu\'un restaurant international. Il abrite un spa et un parking gratuit. Une connexion Wi-Fi gratuite est également disponible.');
        $hotelMoscowAuth->setImage('https://s-ec.bstatic.com/images/hotel/max1024x768/103/10342689.jpg');
        $hotelMoscowAuth->setAddress('Ozerkovskaya Naberezhnaya 26, Zamoskvoretche, 115184 Moscou, Russie');
        $hotelMoscowAuth->setCategory('Authentic');
        $hotelMoscowAuth->setEmail('aquamarine@gmail.com');
        $hotelMoscowAuth->setPhone('05 55 87 91 06');
        $hotelMoscowAuth->setCity($moscow);
        $manager->persist($hotelMoscowAuth);

        $hotelMoscowEco = new Hotel();
        $hotelMoscowEco->setName('Hotel Char');
        $slug = new Slugify();
        $hotelMoscowEcoSlug = $slug->slugify($hotelMoscowEco->getName());
        $hotelMoscowEco->setSlug($hotelMoscowEcoSlug);
        $hotelMoscowEco->setDescription('Featuring free WiFi, Hotel Char offers accommodation in Moscow. Guests can enjoy the on-site bar.');
        $hotelMoscowEco->setImage('https://t-ec.bstatic.com/images/hotel/max1024x768/843/84328014.jpg');
        $hotelMoscowEco->setAddress('blabla 54, Donskoy, 115191 Moscou, Russie');
        $hotelMoscowEco->setCategory('Eco');
        $hotelMoscowEco->setEmail('char@gmail.com');
        $hotelMoscowEco->setPhone('05 55 87 91 06');
        $hotelMoscowEco->setCity($moscow);
        $manager->persist($hotelMoscowEco);


        $hotelMoscowLux= new Hotel();
        $hotelMoscowLux->setName('Holiday Inn Moscow Sokolniki');
        $slug = new Slugify();
        $hotelMoscowLuxSlug = $slug->slugify($hotelMoscowLux->getName());
        $hotelMoscowLux->setSlug($hotelMoscowLuxSlug);
        $hotelMoscowLux->setDescription('Situé près du parc Sokolniki, l\'Holiday Inn Moscow Sokolniki se trouve en face du métro permettant d\'accéder facilement au centre de Moscou.');
        $hotelMoscowLux->setImage('https://s-ec.bstatic.com/images/hotel/max1024x768/635/63528966.jpg');
        $hotelMoscowLux->setAddress('Ulitsa Rusakovskaya 24, Sokolniki, 107014 Moscou, Russie');
        $hotelMoscowLux->setCategory('Luxury');
        $hotelMoscowLux->setEmail('sokolniki@gmail.com');
        $hotelMoscowLux->setPhone('05 55 87 91 06');
        $hotelMoscowLux->setCity($moscow);
        $manager->persist($hotelMoscowLux);

        $restaurantMoscow1 = new Restaurant();
        $restaurantMoscow1->setPhone('05 55 87 91 06');
        $restaurantMoscow1->setEmail('turandot@gmail.com');
        $restaurantMoscow1->setDescription('Lieu magnifique, on se croirait au 19ème siècle dans un palace italien. Accueil chaleureux et serveurs attentionnés et discrets. Repas délicieux, poisson cuisines avec délicatesse, desserts succulents.');
        $restaurantMoscow1->setName('Turandot');
        $slug = new Slugify();
        $restaurantMoscow1Slug = $slug->slugify($restaurantMoscow1->getName());
        $restaurantMoscow1->setSlug($restaurantMoscow1Slug);
        $restaurantMoscow1->setAddress('Tverskoy Blvd., 26/3, Moscou 125009, Russie');
        $restaurantMoscow1->setCity($moscow);

        $manager->persist($restaurantMoscow1);

        $restaurantMoscow2 = new Restaurant();
        $restaurantMoscow2->setPhone('05 55 87 91 06');
        $restaurantMoscow2->setEmail('whiterabbit@gmail.com');
        $restaurantMoscow2->setDescription('Le classement parmi les 50 meilleurs restaurants au Monde n\'est pas usurpé. Le menu de dégustation est un véritable plongeon dans la cuisine Russe revisité.');
        $restaurantMoscow2->setName('White Rabbit');
        $slug = new Slugify();
        $restaurantMoscow2Slug = $slug->slugify($restaurantMoscow2->getName());
        $restaurantMoscow2->setSlug($restaurantMoscow2Slug);
        $restaurantMoscow2->setAddress('Smolenskaya Sq., 3 | Smolensky Passage Center, 16th floor, Moscou 121099, Russie');
        $restaurantMoscow2->setCity($moscow);

        $manager->persist($restaurantMoscow2);

        $fanzoneMoscow = new FanZone();
        $fanzoneMoscow->setName('Fan-Zone de Moscou');
        $slug = new Slugify();
        $fanzoneMoscowSlug = $slug->slugify($fanzoneMoscow->getName());
        $fanzoneMoscow->setSlug($fanzoneMoscowSlug);
        $fanzoneMoscow->setImage('http://www.leuroabordeaux.fr/wp-content/uploads/2016/04/fanzone-bordeaux-1.jpg');
        $fanzoneMoscow->setCapacity(4000);
        $fanzoneMoscow->setLocalization('Moscou');
        $fanzoneMoscow->setCity($moscow);

        $manager->persist($fanzoneMoscow);

        $gameMoscow = new Game();
        $gameMoscow->setDate($date);
        $gameMoscow->setTeam('Russia vs France');
        $gameMoscow->setCity($moscow);
        $gameMoscow->setHour(18);

        $manager->persist($gameMoscow);

        $moscow->setName('Moscou');
        $slug = new Slugify();
        $moscowSlug = $slug->slugify($moscow->getName());
        $moscow->setSlug($moscowSlug);
        $moscow->setDescription('Moscou (en russe : Москва, Moskva) est la capitale de la Fédération de Russie et la plus grande ville d\'Europe. Moscou est situé sur la rivière Moskova. La ville se situe dans la partie européenne de la Russie et administrativement dans le district fédéral central. Moscou a le statut de ville d\'importance fédérale. La ville est enclavée dans l\'oblast de Moscou, mais en est administrativement indépendante.');
        $moscow->setImage('https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/1005_2_3.jpg?itok=VCZXQOjA');
        $moscow->addHotel($hotelMoscowAuth);
        $moscow->addHotel($hotelMoscowEco);
        $moscow->addHotel($hotelMoscowLux);
        $moscow->addRestaurant($restaurantMoscow1);
        $moscow->addRestaurant($restaurantMoscow2);
        $moscow->addFanZone($fanzoneMoscow);
        $moscow->addGame($gameMoscow);

        $manager->persist($moscow);


        $manager->flush();



    }
}