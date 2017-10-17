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


class MoscowFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime('');

        $moscow = New City();
        $manager->persist($moscow);






        #Hotel Fixtures
        $hotelMoscow1 = new Hotel();
        $hotelMoscow1->setName('People Business Novinsky Hotel');
        $hotelMoscow1->setShortdescription('Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.');
        $hotelMoscow1->setDescription('One of our top picks in Moscow. Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.
                                        Set in a historic building with a grand façade and private yard, the hotel offers simply decorated rooms. Guests have use of a lounge with a flat-screen TV. Public computers with free internet access are also available.
                                        PEOPLE Business Novinsky Hotel offers a 24-hour front desk, where guests can book a wide variety of tours in and around Moscow. Help with visas and registration is also provided. Smolenskaya Metro Station (500 m) offers direct connections to Moscow’s city centre and all Moscow train stations. The American Embassy is a 2-minute walk away.');
        $hotelMoscow1->setImage('/images/hotels/Moscow/moscow-eco-novinsky.jpg');
        $hotelMoscow1->setCategory('Eco');
        $hotelMoscow1->setAddress('Ozerkovskaya Naberezhnaya 26, Zamoskvoretche, 115184 Moscou, Russie');
        $hotelMoscow1->setEmail('aquamarine@gmail.com');
        $slug = new Slugify();
        $hotelMoscow1Slug = $slug->slugify($hotelMoscow1->getName());
        $hotelMoscow1->setSlug($hotelMoscow1Slug);
        $hotelMoscow1->setCity($moscow);
        $manager->persist($hotelMoscow1);

        $hotelMoscowEco = new Hotel();
        $hotelMoscowEco->setName('Hotel Char');
        $slug = new Slugify();
        $hotelMoscowEcoSlug = $slug->slugify($hotelMoscowEco->getName());
        $hotelMoscowEco->setSlug($hotelMoscowEcoSlug);
        $hotelMoscowEco->setShortdescription('Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.');
        $hotelMoscowEco->setDescription('Featuring free WiFi, Hotel Char offers accommodation in Moscow. Guests can enjoy the on-site bar.');
        $hotelMoscowEco->setImage('https://t-ec.bstatic.com/images/hotel/max1024x768/843/84328014.jpg');
        $hotelMoscowEco->setAddress('blabla 54, Donskoy, 115191 Moscou, Russie');
        $hotelMoscowEco->setCategory('Eco');
        $hotelMoscowEco->setEmail('char@gmail.com');
        $hotelMoscowEco->setCity($moscow);
        $manager->persist($hotelMoscowEco);

        $hotelMoscowLux= new Hotel();
        $hotelMoscowLux->setName('Holiday Inn Moscow Sokolniki');
        $slug = new Slugify();
        $hotelMoscowLuxSlug = $slug->slugify($hotelMoscowLux->getName());
        $hotelMoscowLux->setSlug($hotelMoscowLuxSlug);
        $hotelMoscowLux->setShortdescription('Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.');

        $hotelMoscowLux->setDescription('Situé près du parc Sokolniki, l\'Holiday Inn Moscow Sokolniki se trouve en face du métro permettant d\'accéder facilement au centre de Moscou.');
        $hotelMoscowLux->setImage('https://s-ec.bstatic.com/images/hotel/max1024x768/635/63528966.jpg');
        $hotelMoscowLux->setAddress('Ulitsa Rusakovskaya 24, Sokolniki, 107014 Moscou, Russie');
        $hotelMoscowLux->setCategory('Luxury');
        $hotelMoscowLux->setEmail('sokolniki@gmail.com');
        $hotelMoscowLux->setCity($moscow);
        $manager->persist($hotelMoscowLux);






        #Restaurant Fixtures
        $restaurantMoscow1 = new Restaurant();
        $restaurantMoscow1->setPhone('+7 495 739-00-33');
        $restaurantMoscow1->setName('Cafe Pushkin');
        $restaurantMoscow1->setImage('/images/restaurants/Moscow/moscow-pushkin.jpg');
        $restaurantMoscow1->setCuisine('European, Russian, Eastern European, Central European, Vegetarian, Friendly, Vegan Options, Gluten Free Options');
        $restaurantMoscow1->setGoodfor('Local cuisine, Large groups, Special occasions, Business meetings, Families with children, Romantic');
        $restaurantMoscow1->setPrice('€51 - €59');
        $slug = new Slugify();
        $restaurantMoscow1Slug = $slug->slugify($restaurantMoscow1->getName());
        $restaurantMoscow1->setSlug($restaurantMoscow1Slug);
        $restaurantMoscow1->setAddress('Tverskoy Blvd., 26/3, Moscou 125009, Russie');
        $restaurantMoscow1->setCity($moscow);
        $manager->persist($restaurantMoscow1);

        $restaurantMoscow2 = new Restaurant();
        $restaurantMoscow2->setPhone('+7 495 621-73-29');
        $restaurantMoscow2->setName('Wine & Crab Restaurant');
        $restaurantMoscow2->setImage('/images/restaurants/Moscow/moscow-wine-crab.jpg');
        $restaurantMoscow2->setCuisine('Seafood, Mediterranean, Wine Bar, European, Gluten Free Options');
        $restaurantMoscow2->setGoodfor('Families with children, Special occasions, Business meetings, Large groups, Romantic');
        $restaurantMoscow2->setPrice('€40 - €50');
        $slug = new Slugify();
        $restaurantMoscow2Slug = $slug->slugify($restaurantMoscow2->getName());
        $restaurantMoscow2->setSlug($restaurantMoscow2Slug);
        $restaurantMoscow2->setAddress('Nikoliskaya st., 19/21, Moscow 109012, Russia');
        $restaurantMoscow2->setCity($moscow);
        $manager->persist($restaurantMoscow2);

        $restaurantMoscow3 = new Restaurant();
        $restaurantMoscow3->setName('SAVVA');
        $restaurantMoscow3->setImage('images/restaurants/Moscow/moscow-savva.jpg');
        $restaurantMoscow3->setAddress('Teatralny Dr., 2, Moscow 109012, Russia');
        $restaurantMoscow3->setCuisine('Russian, European, Eastern European, Central European, Vegetarian Friendly, Gluten Free Options');
        $restaurantMoscow3->setPrice('€22 - €51');
        $restaurantMoscow3->setGoodfor('Special occasions, Local cuisine, Business meetings, Families with children, Romantic, Scenic view, Large groups');
        $restaurantMoscow3->setPhone('+7 499 270-10-62');
        $slug = new Slugify();
        $restaurantMoscow3Slug = $slug->slugify($restaurantMoscow3->getName());
        $restaurantMoscow3->setSlug($restaurantMoscow3Slug);
        $restaurantMoscow3->setCity($moscow);
        $manager->persist($restaurantMoscow3);






        #GameFixtures
        $gameMoscow = new Game();
        $gameMoscow->setDate($date);
        $gameMoscow->setTeam('Russia vs France');
        $gameMoscow->setCity($moscow);
        $gameMoscow->setHour(18);
        $manager->persist($gameMoscow);







        #City Fixtures
        $moscow->setName('Moscou');
        $slug = new Slugify();
        $moscowSlug = $slug->slugify($moscow->getName());
        $moscow->setSlug($moscowSlug);
        $moscow->setDescription('Moscou (en russe : Москва, Moskva) est la capitale de la Fédération de Russie et la plus grande ville d\'Europe. Moscou est situé sur la rivière Moskova. La ville se situe dans la partie européenne de la Russie et administrativement dans le district fédéral central. Moscou a le statut de ville d\'importance fédérale. La ville est enclavée dans l\'oblast de Moscou, mais en est administrativement indépendante.');
        $moscow->setImage('https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/1005_2_3.jpg?itok=VCZXQOjA');
        $moscow->addHotel($hotelMoscow1);
        $moscow->addHotel($hotelMoscowEco);
        $moscow->addHotel($hotelMoscowLux);
        $moscow->addRestaurant($restaurantMoscow1);
        $moscow->addRestaurant($restaurantMoscow2);
        $moscow->addGame($gameMoscow);
        $manager->persist($moscow);





        $manager->flush();



    }
}