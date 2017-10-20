<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;


class SochiFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $city = New City();
        $manager->persist($city);
        ####################################################################################################################







        #Hotel Fixtures
        ####################################################################################################################
        $hotel1 = new Hotel();
        $hotel1->setName('Hotel Victor');
        $hotel1->setShortdescription('This property is 7 minutes walk from the beach. Just 450 m from the Black Sea, this non-smoking hotel in Sochi stands beside the Arboretum Park and State Circus. It offers Wi-Fi, a 24-hour reception, and a spacious terrace.');
        $hotel1->setDescription('This property is 7 minutes walk from the beach. Just 450 m from the Black Sea, this non-smoking hotel in Sochi stands beside the Arboretum Park and State Circus. It offers Wi-Fi, a 24-hour reception, and a spacious terrace.');
        $hotel1->setCategory('Eco');
        $hotel1->setAddress('Bolshoy Sochi, Krasnodar Krai, Russia, 354008');
        $hotel1->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel1Slug = $slug->slugify($hotel1->getName());
        $hotel1->setSlug($hotel1Slug);
        $hotel1->setCity($city);
        $manager->persist($hotel1);

        $hotel2 = new Hotel();
        $hotel2->setName('Pansionat PrimaVera');
        $hotel2->setShortdescription('This property is 4 minutes walk from the beach. Featuring free WiFi, a year-round outdoor pool and a seasonal outdoor pool, Pansionat PrimaVera offers accommodation in Sochi. Guests can enjoy the on-site restaurant.');
        $hotel2->setDescription('This property is 4 minutes walk from the beach. Featuring free WiFi, a year-round outdoor pool and a seasonal outdoor pool, Pansionat PrimaVera offers accommodation in Sochi. Guests can enjoy the on-site restaurant.
All rooms are equipped with a flat-screen TV with cable channels. A terrace or balcony are featured in certain rooms.');
        $hotel2->setCategory('Eco');
        $hotel2->setAddress('Poltavskaya Ulitsa 32b, 354053 Sochi, Russia');
        $hotel2->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel2Slug = $slug->slugify($hotel2->getName());
        $hotel2->setSlug($hotel2Slug);
        $hotel2->setCity($city);
        $manager->persist($hotel2);

        $hotel3 = new Hotel();
        $hotel3->setName('Marika Hotel');
        $hotel3->setShortdescription('Offering an outdoor pool and barbecue, Marika Hotel is set in Sochi, a 10-minute walk of the Black Sea coast. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.');
        $hotel3->setDescription('Offering an outdoor pool and barbecue, Marika Hotel is set in Sochi, a 10-minute walk of the Black Sea coast. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.
Rooms come with a flat-screen TV. You will find a kettle in the room. For your comfort, you will find bathrobes and slippers. You will find a 24-hour front desk at the property.
Green Theatre is 5 km from Marika Hotel, while Tayny Okeana Aquarium is 5 km from the property. The nearest airport is Adler-Sochi International Airport, 28 km from the property.');
        $hotel3->setCategory('Eco');
        $hotel3->setAddress('ul. Zagorodnaya, 7, Sochi, Krasnodarskiy kray, Russia, 354000');
        $hotel3->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel3Slug = $slug->slugify($hotel3->getName());
        $hotel3->setSlug($hotel3Slug);
        $hotel3->setCity($city);
        $manager->persist($hotel3);

        $hotel4 = new Hotel();
        $hotel4->setName('Villa Anna');
        $hotel4->setShortdescription('This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.');
        $hotel4->setDescription('This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.
Each room is simply furnished and includes air conditioning and a minibar. Satellite TV and a dressing room are also available in several rooms at Villa Anna.
Good Merlin restaurant serves European and Caucasian cuisine in a chateau-style atmosphere. During the summer, Chateau Compound café offers drinks and refreshments surrounded by palm trees and banana groves.
Guests can relax with a massage treatment and enjoy a game of table tennis and bowling. Villa Anna’s front desk is open 24 hours. Guests have access to a private beach at a nearby hotel which is 10 minutes’ walk away.');
        $hotel4->setCategory('Authentic');
        $hotel4->setAddress('Kurortny Prospekt 72/7, 354006 Sochi, Russia');
        $hotel4->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($city);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('Chebotarev Hotel');
        $hotel5->setShortdescription('This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.');
        $hotel5->setDescription('This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.
Rooms at Chebotaryov Hotel are cosy, air conditioned, with fully equipped bathrooms and refrigerators. All rooms provide bathrobes and slippers and balconies with views of the swimming pool and surrounding area.This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.
Chebotaryov guests can relax with a massage or take a spa bath. Play a round of billiards by the bar or take a swim in the outdoor pool. For your convenience, the hotel provides airport shuttle, babysitting and ironing services as well as 24 hour assistance.
There is much to discover around the area. Head to the beaches, lakes, or rivers of Sochi or go mountain climbing. Chebotaryov’s staff are happy to arrange excursions or offer suggestions of what to see and do. There are also theatres, concert halls and museums boasting Sochis rich culture.');
        $hotel5->setCategory('Authentic');
        $hotel5->setAddress('Vinogradnaya ul., 12, Sochi, Krasnodarskiy kray, Russia, 354008');
        $hotel5->setEmail('chebotarev2004@mail.ru');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($city);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('Tsvetnoy 5 Hotel');
        $hotel6->setShortdescription('This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property.');
        $hotel6->setDescription('This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property. Guests can enjoy the on-site bar.
Each room at this hotel is air conditioned and is fitted with a TV. Rooms have a private bathroom. Free toiletries are provided.
Central Market is 1.2 km from Tsvetnoy 5 Hotel, while Riviera Park is 1.5 km away. The nearest airport is Adler-Sochi International Airport, 31 km from the property.');
        $hotel6->setCategory('Authentic');
        $hotel6->setAddress('Tsvetnoy Blvd, 5, Sochi, Krasnodarskiy kray, Russia, 354000');
        $hotel6->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($city);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('Pullman Sochi Centre Hotel');
        $hotel7->setShortdescription('This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.');
        $hotel7->setDescription('This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.
The luxurious rooms are equipped with a king size bed, a flat-screen TV and a balcony. Complete with a fridge and minibar, the dining area also has tea & coffee facilities. Featuring a rain shower, private bathroom comes with a hairdryer and C.O. Bigelow toiletries. Some rooms have a sea view. There are also a working area, safety deposit box and laptop safe.
Sel Marin Restaurant serves Mediterranean cuisine, and a variety of drinks is offered at the lobby bar.');
        $hotel7->setCategory('Luxury');
        $hotel7->setAddress('ul. Ordzhonikidze, 11A, Sochi, Krasnodarskiy kray, Russia, 354000');
        $hotel7->setEmail('h8591@accor.com');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($city);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('Hyatt Regency Sochi');
        $hotel8->setShortdescription('This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.');
        $hotel8->setDescription('This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.
The modern, air-conditioned rooms include a flat-screen TV, a minibar and a balcony with sea view. Featuring a shower, private bathroom also comes with a bath and a hairdryer. Extras include an iPod dock, a seating area and satellite channels.
Passage Restaurant serves a selection of European, Caucasian and Russian dishes. An access to the terrace is available in summer.
A two-storey spa centre Evania offers traditional aromatherapy sessions, therapeutic treatment, various types of massage services and restorative practice. The hotel features a fitness centre and an outdoor swimming pool.
Guests are invited to visit a private beach within a 3-minute walk away, free of charge. The beach is equipped with sunbeds, umbrellas and shower cabins. A children’s playground and lounge are also available at the beach.');
        $hotel8->setCategory('Luxury');
        $hotel8->setAddress('ul. Ordzhonikidze, 17, Sochi, Krasnodarskiy kray, Russia, 354000');
        $hotel8->setEmail('sochi.regency@hyatt.com');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($city);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('Rodina Grand Hotel & SPA');
        $hotel9->setShortdescription('This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club.');
        $hotel9->setDescription('This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club. Rodina Grand Hotel & SPA is surrounded by 15-hectare sub-tropical gardens. Its stylish rooms and suites feature flat-screen TVs and designer furniture.
Buffet breakfasts are served in the main Moscow Restaurant. The beachside BSBC Restaurant serves drinks and snacks, and guests can relax with a cocktail in one of the stylish bars. There is also a rooftop terrace, Nebesa.
Rodina Grand Hotel & SPA is the only 5-star boutique hotel in Sochi. Other exclusive facilities include a private movie theatre, billiard room, tennis courts and basketball and volleyball courts. Rodina provides guests with golf carts for transport around the resort.');
        $hotel9->setCategory('Luxury');
        $hotel9->setAddress('Vinogradnaya St, 33, Sochi, Krasnodarskiy kray, Russia, 354008');
        $hotel9->setEmail('info@grandhotelrodina.ru');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($city);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('+7 918 001-19-74');
        $restaurant1->setName('Traktir Trikoni');
        $restaurant1->setCuisine('Pizza, Seafood, Caucasian, Vegetarian Friendly, Vegan Options, Gluten Free Options');
        $restaurant1->setGoodfor('Romantic, Special occasions, Local cuisine, Large groups, Kids, Families with children');
        $restaurant1->setPrice('€8 - €29');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('Michurina St., 1, Sochi 354392, Russia');
        $restaurant1->setCity($city);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('+7 938 455-38-38');
        $restaurant2->setName('Bar Hudojestvenniy');
        $restaurant2->setCuisine('Bar, Wine Bar, Vegetarian Friendly');
        $restaurant2->setGoodfor('Takeout, Reservations, Outdoor Seating, Seating, Waitstaff, Serves Alcohol, Full Bar, Wine and Beer, Accepts Mastercard, Accepts Visa, Free Wifi');
        $restaurant2->setPrice('€3 - €14');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('Kurortniy Ave., 29, Sochi 354000, Russia');
        $restaurant2->setCity($city);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('Olivye');
        $restaurant3->setAddress('Roz St., 52, Sochi 354000, Russia');
        $restaurant3->setCuisine('Italian, French, Seafood, European, Russian, Central European, Vegetarian Friendly');
        $restaurant3->setPrice('€5 - €15');
        $restaurant3->setGoodfor('Special occasions, Large groups, Romantic, Families with children, Kids, Local cuisine, Business meetings');
        $restaurant3->setPhone('+7 862 264-06-42');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($city);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $city->setName('Sochi');
        $slug = new Slugify();
        $citySlug = $slug->slugify($city->getName());
        $city->setSlug($citySlug);
        $city->setDescription('Sochi is a city in Krasnodar Krai, Russia, located on the Black Sea coast near the border between Georgia and Russia. Sochi is also known for its sport facilities: a local tennis school spawned the careers of such notable players as Grand Slam champions Maria Sharapova and Yevgeny Kafelnikov. In late 2005, the Russian Football Union announced that it was planning to establish a year-round training center for the country\'s national teams in Sochi. The city\'s warm climate was cited as one of the main incentives. Sochi is also the home for the football team FC Zhemchuzhina which plays in the Russian First Division and for the ice hockey team HC Sochi which plays in the Kontinental Hockey League. ');
        $city->addHotel($hotel1);
        $city->addHotel($hotel2);
        $city->addHotel($hotel3);
        $city->addHotel($hotel4);
        $city->addHotel($hotel5);
        $city->addHotel($hotel6);
        $city->addHotel($hotel7);
        $city->addHotel($hotel8);
        $city->addHotel($hotel9);
        $city->addRestaurant($restaurant1);
        $city->addRestaurant($restaurant2);
        $city->addRestaurant($restaurant3);
        $manager->persist($city);
        ####################################################################################################################





        $manager->flush();



    }
}
