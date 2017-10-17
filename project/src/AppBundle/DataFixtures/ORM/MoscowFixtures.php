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
        $moscow = New City();
        $manager->persist($moscow);
    ####################################################################################################################







        #Hotel Fixtures
    ####################################################################################################################
        $hotelMoscow1 = new Hotel();
        $hotelMoscow1->setName('People Business Novinsky Hotel');
        $hotelMoscow1->setShortdescription('Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.');
        $hotelMoscow1->setDescription('One of our top picks in Moscow. Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.
                                        Set in a historic building with a grand façade and private yard, the hotel offers simply decorated rooms. Guests have use of a lounge with a flat-screen TV. Public computers with free internet access are also available.
                                        PEOPLE Business Novinsky Hotel offers a 24-hour front desk, where guests can book a wide variety of tours in and around Moscow. Help with visas and registration is also provided. Smolenskaya Metro Station (500 m) offers direct connections to Moscow’s city centre and all Moscow train stations. The American Embassy is a 2-minute walk away.');
        $hotelMoscow1->setCategory('Eco');
        $hotelMoscow1->setAddress('Novinskiy boulevard, 11, Moskva, Russiea, 121099');
        $hotelMoscow1->setEmail('manager@hotel-people.ru');
        $slug = new Slugify();
        $hotelMoscow1Slug = $slug->slugify($hotelMoscow1->getName());
        $hotelMoscow1->setSlug($hotelMoscow1Slug);
        $hotelMoscow1->setCity($moscow);
        $manager->persist($hotelMoscow1);

        $hotelMoscow2 = new Hotel();
        $hotelMoscow2->setName('Cosmos Hotel');
        $hotelMoscow2->setShortdescription('Located next to the All-Russia Exhibition Centre, this hotel offers a spa with a swimming pool, fitness centre and massage services. VDNKh Metro Station is 400 m away.');
        $hotelMoscow2->setDescription('Located next to the All-Russia Exhibition Centre, this hotel offers a spa with a swimming pool, fitness centre and massage services. VDNKh Metro Station is 400 m away.
                                        The colourful rooms at the Cosmos Hotel have Wi-Fi access, a flat-screen TV with satellite channels, and a refrigerator. Toiletries and a hairdryer are provided in the private bathrooms.
                                        There are 11 restaurants and cafés at Cosmos Hotel. Planet Cosmos restaurant serves Russian and European cuisine and offers views of the Moscow skyline from the 25th floor.
                                        An American-style breakfast is served in the Kalinka restaurant. Guests can also enjoy Mediterranean dishes in the Il Gusto restaurant, and Chinese meals and karaoke in the Empress Hall restaurant.');
        $hotelMoscow2->setCategory('Eco');
        $hotelMoscow2->setAddress('Prospect Mira, 150, Moscow, Russia, 129366');
        $hotelMoscow2->setEmail('reservations@hotelcosmos.ru');
        $slug = new Slugify();
        $hotelMoscow2Slug = $slug->slugify($hotelMoscow2->getName());
        $hotelMoscow2->setSlug($hotelMoscow2Slug);
        $hotelMoscow2->setCity($moscow);
        $manager->persist($hotelMoscow2);

        $hotelMoscow3 = new Hotel();
        $hotelMoscow3->setName('Izmailovo Beta Hotel');
        $hotelMoscow3->setShortdescription('Set near the Izmailovsky Park, within a 3-minute walk of Partizanskaya Metro Station, Izmailovo Beta Hotel features free WiFi, banquet and meeting facilities and a variety of dining options. It is located within a 15-minute metro ride from the city centre.');
        $hotelMoscow3->setDescription('Set near the Izmailovsky Park, within a 3-minute walk of Partizanskaya Metro Station, Izmailovo Beta Hotel features free WiFi, banquet and meeting facilities and a variety of dining options. It is located within a 15-minute metro ride from the city centre.
                                        The restaurant serves a selection of traditional Russian and European dishes. At the lobby café, fresh pastry from the hotel’s bakery is offered. Guests can enjoy a drink in one of the on-site bars or order room service.
                                        The modern rooms have a TV and a private bathroom with a hairdryer. The hotel offers a business centre and 11 conference halls with a capacity from 10 to 700 guests.
                                        Lokomotiv Stadium is within a 10-minute drive of Izmailovo Beta Hotel and Kursky Train Station is 4 metro stops away. Kazansky, Leningradsky and Yaroslavsky Train Stations are within a 23-minute drive. Domodedovo International Airport is 57 km from the property. It takes 30 minutes to drive to Belorussky Train Station from which you can get to Sheremetyevo International Airport by Aeroexpress.');
        $hotelMoscow3->setCategory('Eco');
        $hotelMoscow3->setAddress('Izmaylovskoye sh., 71 Building 2B, Moskva, Russia, 105613');
        $hotelMoscow3->setEmail('info@beta-hotel.ru');
        $slug = new Slugify();
        $hotelMoscow3Slug = $slug->slugify($hotelMoscow3->getName());
        $hotelMoscow3->setSlug($hotelMoscow3Slug);
        $hotelMoscow3->setCity($moscow);
        $manager->persist($hotelMoscow3);

        $hotelMoscow4 = new Hotel();
        $hotelMoscow4->setName('Tchaikovsky Hotel');
        $hotelMoscow4->setShortdescription('Situated in Moscow, 1 km from Kremlin, Red Square and State Historical Museum, Tchaikovsky Hotel boasts air-conditioned rooms with free WiFi throughout the property. The hotel is located in the historical building. Guests can enjoy the on-site bar. Private parking is available on site.');
        $hotelMoscow4->setDescription('Situated in Moscow, 1 km from Kremlin, Red Square and State Historical Museum, Tchaikovsky Hotel boasts air-conditioned rooms with free WiFi throughout the property. The hotel is located in the historical building. Guests can enjoy the on-site bar. Private parking is available on site.
                                        Each room has a flat-screen TV. Some rooms feature a seating area for your convenience. You will find a coffee machine in the room. For your comfort, you will find bathrobes, slippers and free toiletries.
                                        You will find a 24-hour front desk at the property. Russian and European cuisine is offered in the on’site restaurant. Banquet facilities are also offered.
                                        Arbat Street is 1 km from Tchaikovsky Hotel, while The Kremlin is 1.1 km away. The nearest airport is Sheremetyevo International Airport, 26 km from Tchaikovsky Hotel. ');
        $hotelMoscow4->setCategory('Authentic');
        $hotelMoscow4->setAddress('24/1 c.6 Bolshaya Nikitskaya ulitsa, Presnensky, 125009 Moscow, Russia');
        $hotelMoscow4->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotelMoscow4Slug = $slug->slugify($hotelMoscow4->getName());
        $hotelMoscow4->setSlug($hotelMoscow4Slug);
        $hotelMoscow4->setCity($moscow);
        $manager->persist($hotelMoscow4);

        $hotelMoscow5 = new Hotel();
        $hotelMoscow5->setName('Radisson Royal Hotel');
        $hotelMoscow5->setShortdescription('This luxury hotel is situated at the intersection of Moscow’s Kutuzovskiy Prospekt and Novy Arbat and occupies a Stalinist skyscraper. It offers free Wi-Fi, an indoor pool and modern spa facilities.');
        $hotelMoscow5->setDescription('This luxury hotel is situated at the intersection of Moscow’s Kutuzovskiy Prospekt and Novy Arbat and occupies a Stalinist skyscraper. It offers free Wi-Fi, an indoor pool and modern spa facilities.
                                        Rooms at Radisson Royal Hotel offer stylish décor and classic-style furniture, offering a flat-screen TV and views of the city or inner courtyard. All rooms have high ceilings, and some have a separate seating area.
                                        11 restaurants of the Radisson Royal are known for their unique cuisine, original cocktails and panoramic views of Moscow. Breakfast, served at Veranda Restaurant, offers a variety of dining options. Guests can enjoy evening cocktails and light snacks at the Radisson’s 24-hour Lobby Bar and Club restaurant.
                                        After working out in the gym, visitors can relax in the sauna or in the spa bath. Massage services can also be booked. River boat trips along the Moskva River are available all year round.');
        $hotelMoscow5->setCategory('Authentic');
        $hotelMoscow5->setAddress('Kutuzovsky Prospekt 2/1 bld.1, Dorogomilovo, 121248 Moscow, Russia');
        $hotelMoscow5->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotelMoscow5Slug = $slug->slugify($hotelMoscow5->getName());
        $hotelMoscow5->setSlug($hotelMoscow5Slug);
        $hotelMoscow5->setCity($moscow);
        $manager->persist($hotelMoscow5);

        $hotelMoscow6 = new Hotel();
        $hotelMoscow6->setName('Ivan Chai Hotel');
        $hotelMoscow6->setShortdescription('Featuring free WiFi throughout the property, Ivan Chai - hotel and coffee offers accommodation in Moscow. All rooms are equipped with a private bathroom. Extras include free toiletries and a hairdryer.');
        $hotelMoscow6->setDescription('One of our bestsellers in Moscow! Featuring free WiFi throughout the property, Ivan Chai - hotel and coffee offers accommodation in Moscow.
                                        All rooms are equipped with a private bathroom. Extras include free toiletries and a hairdryer. You will find a 24-hour front desk at the property.
                                        The hotel also offers free use of bicycles. Gorky Park is 6 km from Ivan Chai - hotel and coffee, while Luzhniki Stadium is 7 km away. The nearest airport is Vnukovo International Airport, 24 km from Ivan Chai - hotel and coffee. ');
        $hotelMoscow6->setCategory('Authentic');
        $hotelMoscow6->setAddress('Nagatinskaya nab., 10 korpus 3, 115533 Moscow, Russia');
        $hotelMoscow6->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotelMoscow6Slug = $slug->slugify($hotelMoscow6->getName());
        $hotelMoscow6->setSlug($hotelMoscow6Slug);
        $hotelMoscow6->setCity($moscow);
        $manager->persist($hotelMoscow6);

        $hotelMoscow7 = new Hotel();
        $hotelMoscow7->setName('Ararat Park Hyatt');
        $hotelMoscow7->setShortdescription('Ararat Park Hyatt has an excellent location 5 minutes from Red Square in the prime shopping area, moments from both TSUM and Detsky Mir department stores. It features superb service.');
        $hotelMoscow7->setDescription('Ararat Park Hyatt has an excellent location 5 minutes from Red Square in the prime shopping area, moments from both TSUM and Detsky Mir department stores. It features superb service.
                                        The hotel rooms have been renovated in 2012 and feature new design by a famous architect Tony Chi.
                                        Energize at the fitness centre. Rejuvenate at the spa and Turkish bath. Pamper yourself at the solarium, or with a massage in one of the treatment rooms. Have a drink at the juice bar and a dip in the pool.
                                        When going out, ask for advice at the tours and tickets desk. Take a tasty packed lunch, and use the handy ATM. Return to write about the trip with the free Wi-Fi internet access, or to relax on the terrace.
                                        Enjoy European cuisine and speciality Armenian food, or the flavours at the Japanese sushi bar. The Café features marble columns and carvings, while the rooftop lounge offers stunning views over a drink.');
        $hotelMoscow7->setCategory('Luxury');
        $hotelMoscow7->setAddress('ul. Neglinnaya, 4, Moskva, Russia, 109012');
        $hotelMoscow7->setEmail('moscow.park@hyatt.com');
        $slug = new Slugify();
        $hotelMoscow7Slug = $slug->slugify($hotelMoscow7->getName());
        $hotelMoscow7->setSlug($hotelMoscow7Slug);
        $hotelMoscow7->setCity($moscow);
        $manager->persist($hotelMoscow7);

        $hotelMoscow8 = new Hotel();
        $hotelMoscow8->setName('The St. Regis Moscow Nikolskaya');
        $hotelMoscow8->setShortdescription('This 5-star hotel is in a central location in the heart of Moscow, right on Lubyanka Square, a 10-minute walk from the Kremlin. Rooms with personalized St. Regis Butler Service and free Wi-Fi are featured at St. Regis Moscow Nikolskaya.');
        $hotelMoscow8->setDescription('This hotel offers a central location in the heart of Moscow, right on Lubyanka Square, a 10-minute walk from the Kremlin. Rooms with free personalised St. Regis Butler Service and free WiFi are featured at St. Regis Moscow Nikolskaya.
                                        The elegant, air-conditioned hotel rooms and suites are decorated in beige and brown colours. Every room comes complete with a flat-screen TV, a minibar, a seating area and a private bathroom with bathrobes and slippers. Some rooms feature views of the Kremlin and Red Square, while others have balconies with views of the interior courtyard.
                                        Breakfasts are served in the Italian A Tavola Restaurant. Guests can also have Russian snacks and dishes from the Wok menu at Orlov Lobby Bar and Lounge, as well as enjoy evening champagne.
                                        Lubyanka Metro Station is only steps away. Belorussky Train Station is 4 km from St. Regis Moscow Nikolskaya, and Sheremetyevo International Airport is a 35-minute express train ride from this station.');
        $hotelMoscow8->setCategory('Luxury');
        $hotelMoscow8->setAddress('Nikolskaya St, 12, Moskva, Russia, 109012');
        $hotelMoscow8->setEmail('moscow@stregis.com');
        $slug = new Slugify();
        $hotelMoscow8Slug = $slug->slugify($hotelMoscow8->getName());
        $hotelMoscow8->setSlug($hotelMoscow8Slug);
        $hotelMoscow8->setCity($moscow);
        $manager->persist($hotelMoscow8);

        $hotelMoscow9 = new Hotel();
        $hotelMoscow9->setName('Four Seasons Hotel Moscow');
        $hotelMoscow9->setShortdescription('Four Seasons Hotel Moscow is in the historic building of Moskva Hotel, in the very heart of Moscow, a short walk from the Kremlin, Red Square and the Bolshoi Theatre. Free Wi-Fi access is available in this 5-star hotel.');
        $hotelMoscow9->setDescription('Four Seasons Hotel Moscow is located in the historic building of Moskva Hotel, in the very heart of Moscow, a minutes’ walk from the Kremlin, Red Square and the Bolshoi Theatre. Free WiFi access is available in this hotel.
                                        Each elegant room and suite will provide you with air conditioning, a flat-screen TV, a Nespresso coffee machine and an Ipad. Featuring a bath, private bathroom also comes with a hairdryer and free toiletries by Roberto Cavalli. Extras include a desk and a safety deposit box.
                                        Quadrum Restaurant serves Italian cuisine, and Bystro offers Russian dishes with a Nordic touch. Guests can enjoy a drink at The Silk Lounge or Moskovsky Bar. Other facilities offered at the property include meeting facilities, a ticket service and luggage storage.');
        $hotelMoscow9->setCategory('Luxury');
        $hotelMoscow9->setAddress('ul. Okhotny Ryad, 2, Moscow, Russia, 109012');
        $hotelMoscow9->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotelMoscow9Slug = $slug->slugify($hotelMoscow9->getName());
        $hotelMoscow9->setSlug($hotelMoscow9Slug);
        $hotelMoscow9->setCity($moscow);
        $manager->persist($hotelMoscow9);
    ####################################################################################################################







        #Restaurant Fixtures
    ####################################################################################################################
        $restaurantMoscow1 = new Restaurant();
        $restaurantMoscow1->setPhone('+7 495 739-00-33');
        $restaurantMoscow1->setName('Cafe Pushkin');
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
    ####################################################################################################################






        #City Fixtures
    ####################################################################################################################
        $moscow->setName('Moscow');
        $slug = new Slugify();
        $moscowSlug = $slug->slugify($moscow->getName());
        $moscow->setSlug($moscowSlug);
        $moscow->setDescription('Moscou est la capitale de la Fédération de Russie et la plus grande ville d\'Europe. Moscou est situé sur la rivière Moskova. Cette ville a une place importante dans l\'économie russe : elle produit 25 % du PIB de la Fédération. Moscou est l\'hôte des Jeux olympiques d\'été en 1980 ');
        $moscow->addHotel($hotelMoscow1);
        $moscow->addHotel($hotelMoscow2);
        $moscow->addHotel($hotelMoscow3);
        $moscow->addHotel($hotelMoscow4);
        $moscow->addHotel($hotelMoscow5);
        $moscow->addHotel($hotelMoscow6);
        $moscow->addHotel($hotelMoscow7);
        $moscow->addHotel($hotelMoscow8);
        $moscow->addHotel($hotelMoscow9);
        $moscow->addRestaurant($restaurantMoscow1);
        $moscow->addRestaurant($restaurantMoscow2);
        $moscow->addRestaurant($restaurantMoscow3);
        $manager->persist($moscow);
    ####################################################################################################################





        $manager->flush();



    }
}
