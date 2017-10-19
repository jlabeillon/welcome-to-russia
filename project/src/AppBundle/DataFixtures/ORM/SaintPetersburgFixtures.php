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
        $hotel3->setDescription('Pushka Inn is a 18th Century mansion located in an historic part of St. Petersburg, one minute walk from the Palace Square. It offers non-smoking rooms with air conditioning, satellite TV and free Wi-Fi.
The Pushka Inn’s restaurant offers European and Russian cuisine and has an extensive wine list.
Pushka Inn’s concierge service can provide assistance with booking of flights, train tickets, and theatre and concert tickets. Tsentralny district is a great choice for travellers interested in museums, culture and ambience.');
        $hotel3->setCategory('Authentic');
        $hotel3->setAddress('Russia, Saint-Petersburg, Moyka river embankment, 14');
        $hotel3->setEmail('pushka@pushkainn.ru');
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
        $hotel4->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($saintPetersbourg);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('Ekaterina Hotel');
        $hotel5->setShortdescription('Featuring free WiFi and a restaurant, Ekaterina Hotel offers accommodation in Saint Petersburg, 600 m from Church of the Savior on Spilled Blood and 700 m from Hermitage.');
        $hotel5->setDescription('Featuring free WiFi and a restaurant, Ekaterina Hotel offers accommodation in Saint Petersburg, 600 m from Church of the Savior on Spilled Blood and 700 m from Hermitage.
Rooms are air conditioned and have a flat-screen TV. The private bathrooms come with bathrobes. There is a 24-hour front desk at the property. Plenty of dining options can be found within a 5-minute walk from Ekaterina Hotel.
Palace Square is 700 m away. Moskovsky Train Station is 4 km from the hotel, and Pulkovo Airport is 20 km away.');
        $hotel5->setCategory('Authentic');
        $hotel5->setAddress('Millionnaya St, 10, Sankt-Peterburg, Russia, 191186');
        $hotel5->setEmail('info@ekaterinahotel.com');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($saintPetersbourg);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('The State Hermitage Museum Official Hotel');
        $hotel6->setShortdescription('This exclusive 5-star hotel is set in the 1830s mansion in the centre of Saint Petersburg and represents the atmosphere of the original Hermitage Museum. Spa and wellness centre and free Wi-Fi is featured here.');
        $hotel6->setDescription('This exclusive 5-star hotel is set in the 1830s mansion in the centre of Saint Petersburg and represents the atmosphere of the original Hermitage Museum. Spa and wellness centre and free Wi-Fi is featured here.
The luxurious rooms and suites of The State Hermitage Museum Official Hotel Saint Petersburg offer elegant furnishings, designed by Italian woodwork masters from Florence. Every room includes a flat-screen TV, a minibar and a private bathroom decorated with Italian and Greek marble and fitted with bathrobes.
Michelangelo Boutique Restaurant offers traditional Italian dishes and exquisite desserts. The quiet Lobby Bar welcomes guests to the tradition of Russian pastime of tea drinking. The elegant Catherine the Great Restaurant serves Russian cuisine based on the menu of the historic Winter Palace.
The lively Nevsky Prospekt is a 15-minute walk away, and the Hermitage Museum itself is 3 km from the hotel.
Vladimirskaya Metro Station is a 7-minute walk from The State Hermitage Museum Official Hotel Saint Petersburg. Moskovsky Train Station is 1.8 km away, and Pulkovo International Airport is 22 km from the hotel.');
        $hotel6->setCategory('Authentic');
        $hotel6->setAddress('ul. Pravdy, 10, Sankt-Peterburg, Leningradskaya oblast, Russia, 191119');
        $hotel6->setEmail('info@thehermitagehotel.ru');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($saintPetersbourg);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('Four Seasons Hotel Lion Palace St. Petersburg');
        $hotel7->setShortdescription('Four Seasons Hotel Lion Palace is located in the heart of Saint Petersburg, just 300 m from the Dvortsovaya Square. It boasts luxury interiors in Russian Empire style and exclusive fine dining options.');
        $hotel7->setDescription('Four Seasons Hotel Lion Palace is located in the heart of Saint Petersburg, just 300 m from the Dvortsovaya Square. It boasts luxury interiors in Russian Empire style and exclusive fine dining options.
All elegant, air conditioned rooms come with a flat-screen TV, a DVD player, a minibar and a coffee machine. Free Wi-Fi and 2 telephone lines are provided. Marble bathrooms are fitted with a soak bath tub, separated walk-in tropical shower and built-in mirror flat-screen TV. The free toiletries are by Lorenzo Villoresi.
Percorso Restaurant specializes in fine Italian cuisine, while Sintoho Restaurant offers contemporary Asian dishes. Guests can have a drink at the stylish Xander Bar or enjoy delicious snacks and pastry at the Tea Lounge. The exquisite breakfast is served there every morning.
The Hermitage Museum is 3 minutes’ walk from Four Seasons Hotel Lion Palace, and the lively Nevsky Prospekt is 400 m away. The Mariinsky Theatre is within a 15-minute walk of the hotel.');
        $hotel7->setCategory('Luxury');
        $hotel7->setAddress('Voznesensky Prospect, 1, Sankt-Peterburg, Leningrad region, Russia, 190000');
        $hotel7->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($saintPetersbourg);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('Lotte Hotel St. Petersburg');
        $hotel8->setShortdescription('Offering a terrace and spa centre, Lotte Hotel St. Petersburg is located in Saint Petersburg. The hotel has a sauna and fitness centre, and guests can enjoy a meal at the restaurant.');
        $hotel8->setDescription('Offering a terrace and spa centre, Lotte Hotel St. Petersburg is located in Saint Petersburg. The hotel has a sauna and fitness centre, and guests can enjoy a meal at the restaurant.
Every room is equipped with a flat-screen TV. All rooms come with a private bathroom equipped with a bath or shower. For your comfort, you will find bathrobes, slippers and a hairdryer. There is a 24-hour front desk at the property.
Saint Isaac’s Cathedral is 400 m from Lotte Hotel St. Petersburg, while Admiralty Building is 700 m away. The nearest airport is Pulkovo Airport, 21 km from the property.');
        $hotel8->setCategory('Luxury');
        $hotel8->setAddress('per. Antonenko, 2, Sankt-Peterburg, Russia, 190000');
        $hotel8->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($saintPetersbourg);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('Belmond Grand Hotel Europe');
        $hotel9->setShortdescription('Set in a stunning central location of St. Petersburg is this grand hotel that offers elegant accommodation in a fantastic setting.');
        $hotel9->setDescription('Set in a stunning central location of St. Petersburg is this grand hotel that offers elegant accommodation in a fantastic setting.');
        $hotel9->setCategory('Luxury');
        $hotel9->setAddress('ul. Mikhaylovskaya, 1/7, 1/7, Sankt-Peterburg, Russia, 191186');
        $hotel9->setEmail('reservations.france@belmond.com');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($saintPetersbourg);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('+7 812 339-80-44');
        $restaurant1->setName('Percorso');
        $restaurant1->setCuisine('talian, Mediterranean, European, Vegetarian Friendly, Vegan Options, Gluten Free Options');
        $restaurant1->setGoodfor('Special occasions, Large groups, Romantic, Families with children, Scenic view, Business meetings');
        $restaurant1->setPrice('€35 - €58');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('');
        $restaurant1->setCity($saintPetersbourg);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('+7 921 951-63-96');
        $restaurant2->setName('Severyanin');
        $restaurant2->setCuisine('European, Russian, Eastern European, Central European, Vegetarian Friendly');
        $restaurant2->setGoodfor('Kids, Special occasions, Local cuisine, Families with children, Business meetings, Large groups, Romantic');
        $restaurant2->setPrice('€3 - €17');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('');
        $restaurant2->setCity($saintPetersbourg);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('Pelmenya');
        $restaurant3->setAddress('Reki Fontanki Embankment, 25, St. Petersburg 197198, Russia');
        $restaurant3->setCuisine('Chinese, European, Russian, Eastern European, Ukrainian, International, Vegetarian Friendly, Vegan Options');
        $restaurant3->setPrice('€3 - €8');
        $restaurant3->setGoodfor('Families with children, Kids, Local cuisine');
        $restaurant3->setPhone('+7 812 415-41-83');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($saintPetersbourg);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $saintPetersbourg->setName('Saint Petersburg');
        $slug = new Slugify();
        $saintPetersbourgSlug = $slug->slugify($saintPetersbourg->getName());
        $saintPetersbourg->setSlug($saintPetersbourgSlug);
        $saintPetersbourg->setDescription('zfzfzfzfzfz');
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
