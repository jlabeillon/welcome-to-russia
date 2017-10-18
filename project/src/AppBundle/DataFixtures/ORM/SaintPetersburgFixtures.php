<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;


class SaintPetersburgFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $saintPetersbourg = New City();
        $manager->persist($saintPetersbourg);
        ####################################################################################################################







        #Hotel Fixtures
        ####################################################################################################################
        $hotel1 = new Hotel();
        $hotel1->setName('Piter’s house na Nevskom');
        $hotel1->setShortdescription('Piter’s house na Nevskom is located in the Tsentralny district district in Saint Petersburg, 2.7 km from State Russian Museum.
Each room has a flat-screen TV. Certain units feature a seating area for your convenience. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers, free toiletries and a hairdryer. Piters house na Nevskom features free WiFi throughout the property.');
        $hotel1->setDescription('Piter’s house na Nevskom is located in the Tsentralny district district in Saint Petersburg, 2.7 km from State Russian Museum.
Each room has a flat-screen TV. Certain units feature a seating area for your convenience. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers, free toiletries and a hairdryer. Piters house na Nevskom features free WiFi throughout the property.
Church of the Savior on Spilled Blood is 2.9 km from Piter’s house na Nevskom, while Palace Square is 3.5 km away. The nearest airport is Pulkovo Airport, 15 km from the property.');
        $hotel1->setCategory('Eco');
        $hotel1->setAddress('Nevsky avenue, 156, Saint Petersburg, Sankt-Peterburg, Russia, 190000');
        $hotel1->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel1Slug = $slug->slugify($hotel1->getName());
        $hotel1->setSlug($hotel1Slug);
        $hotel1->setCity($saintPetersbourg);
        $manager->persist($hotel1);

        $hotel2 = new Hotel();
        $hotel2->setName('Capital Hotel');
        $hotel2->setShortdescription('This hotel is located in the heart of Saint Petersburg, just a 4-minute walk from the Sennaya Square and Sadovaya Metro Station. Free Wi-Fi is featured at Capital Hotel.');
        $hotel2->setDescription('This hotel is located in the heart of Saint Petersburg, just a 4-minute walk from the Sennaya Square and Sadovaya Metro Station. Free Wi-Fi is featured at Capital Hotel.
The bright hotel rooms offer warm-coloured interiors and classic-style decor. Every room comes with a cable flat-screen TV and a private bathroom. Slippers and free toiletries are provided.
A microwave and a refrigerator are available at the hotel. A variety of cafes, shops and restaurants can be found within a 2-minute walk from the hotel.
The Kazansky Cathedral and the lively Nevsky Prospekt are a 15-minute walk from the hotel. The Hermitage Museum and the Neva River Embankment are a 20-minute walk away.');
        $hotel2->setCategory('Eco');
        $hotel2->setAddress('Moskovsky Ave, 6, Sankt-Peterburg, Russia, 190031');
        $hotel2->setEmail('vopros@mojotel.ru');
        $slug = new Slugify();
        $hotel2Slug = $slug->slugify($hotel2->getName());
        $hotel2->setSlug($hotel2Slug);
        $hotel2->setCity($saintPetersbourg);
        $manager->persist($hotel2);

        $hotel3 = new Hotel();
        $hotel3->setName('Pushka INN hotel');
        $hotel3->setShortdescription('Pushka Inn is a 18th Century mansion located in an historic part of St. Petersburg, one minute walk from the Palace Square. It offers non-smoking rooms with air conditioning, satellite TV and free Wi-Fi.');
        $hotel3->setDescription('');
        $hotel3->setCategory('');
        $hotel3->setAddress('');
        $hotel3->setEmail('');
        $slug = new Slugify();
        $hotel3Slug = $slug->slugify($hotel3->getName());
        $hotel3->setSlug($hotel3Slug);
        $hotel3->setCity($saintPetersbourg);
        $manager->persist($hotel3);

        $hotel4 = new Hotel();
        $hotel4->setName('Staraya Gora Hostel');
        $hotel4->setShortdescription('Featuring free WiFi throughout the property, Staraya Gora Hostel is located in Saint Petersburg, 900 m from State Russian Museum.');
        $hotel4->setDescription('Featuring free WiFi throughout the property, Staraya Gora Hostel is located in Saint Petersburg, 900 m from State Russian Museum.
You will find a kettle in the room. The rooms are fitted with a shared bathroom equipped with a shower. For your comfort, you will find free toiletries and a hairdryer. A flat-screen TV with cable channels is provided.
There is a 24-hour front desk at the property.
Church of the Savior on Spilled Blood is 1.1 km from Staraya Gora Hostel, while Palace Square is 1.8 km away. The nearest airport is Pulkovo Airport, 16 km from Staraya Gora Hostel.');
        $hotel4->setCategory('Eco');
        $hotel4->setAddress('Liteyniy avenue, 31, Sankt-Peterburg, Russia, 191028');
        $hotel4->setEmail('');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($saintPetersbourg);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('');
        $hotel5->setShortdescription('');
        $hotel5->setDescription('');
        $hotel5->setCategory('');
        $hotel5->setAddress('');
        $hotel5->setEmail('');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($saintPetersbourg);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('');
        $hotel6->setShortdescription('');
        $hotel6->setDescription(' ');
        $hotel6->setCategory('');
        $hotel6->setAddress('');
        $hotel6->setEmail('');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($saintPetersbourg);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('');
        $hotel7->setShortdescription('');
        $hotel7->setDescription('');
        $hotel7->setCategory('');
        $hotel7->setAddress('');
        $hotel7->setEmail('');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($saintPetersbourg);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('');
        $hotel8->setShortdescription('');
        $hotel8->setDescription('');
        $hotel8->setCategory('');
        $hotel8->setAddress('');
        $hotel8->setEmail('');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($saintPetersbourg);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('');
        $hotel9->setShortdescription('');
        $hotel9->setDescription('');
        $hotel9->setCategory('');
        $hotel9->setAddress('');
        $hotel9->setEmail('');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($saintPetersbourg);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('');
        $restaurant1->setName('');
        $restaurant1->setCuisine('');
        $restaurant1->setGoodfor('');
        $restaurant1->setPrice('');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('');
        $restaurant1->setCity($saintPetersbourg);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('');
        $restaurant2->setName('');
        $restaurant2->setCuisine('');
        $restaurant2->setGoodfor('');
        $restaurant2->setPrice('');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('');
        $restaurant2->setCity($saintPetersbourg);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('');
        $restaurant3->setAddress('');
        $restaurant3->setCuisine('');
        $restaurant3->setPrice('');
        $restaurant3->setGoodfor('');
        $restaurant3->setPhone('');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($saintPetersbourg);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $saintPetersbourg->setName('');
        $slug = new Slugify();
        $saintPetersbourgSlug = $slug->slugify($saintPetersbourg->getName());
        $saintPetersbourg->setSlug($saintPetersbourgSlug);
        $saintPetersbourg->setDescription('');
        $saintPetersbourg->addHotel($hotel1);
        $saintPetersbourg->addHotel($hotel2);
        $saintPetersbourg->addHotel($hotel3);
        $saintPetersbourg->addHotel($hotel4);
        $saintPetersbourg->addHotel($hotel5);
        $saintPetersbourg->addHotel($hotel6);
        $saintPetersbourg->addHotel($hotel7);
        $saintPetersbourg->addHotel($hotel8);
        $saintPetersbourg->addHotel($hotel9);
        $saintPetersbourg->addRestaurant($restaurant1);
        $saintPetersbourg->addRestaurant($restaurant2);
        $saintPetersbourg->addRestaurant($restaurant3);
        $manager->persist($saintPetersbourg);
        ####################################################################################################################





        $manager->flush();



    }
}
