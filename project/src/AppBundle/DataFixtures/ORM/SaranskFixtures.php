<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class SaranskFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $saransk = New City();
        $manager->persist($saransk);

        // restaurant 1
        $restaurantSaransk1 = new Restaurant();
        $restaurantSaransk1->setPhone('+7 834 236-36-36');
        $restaurantSaransk1->setName('Mordovskoe Podvorye');
        $restaurantSaransk1->setCuisine('Russian');
        $restaurantSaransk1->setGoodfor('Families with children, Business meetings, Large groups');
        $restaurantSaransk1->setPrice('€5 - €30');

        $slug = new Slugify();
        $restaurantSaransk1Slug = $slug->slugify($restaurantSaransk1->getName());
        $restaurantSaransk1->setSlug($restaurantSaransk1Slug);
        $restaurantSaransk1->setAddress('Saranskaya St., 21, Saransk 430005, Russia');
        $restaurantSaransk1->setCity($saransk);

        $manager->persist($restaurantSaransk1);

        // restaurant 2
        $restaurantSaransk2 = new Restaurant();
        $restaurantSaransk2->setPhone('+7 834 236-00-29');
        $restaurantSaransk2->setName('Kaban&Bryukva');
        $restaurantSaransk2->setCuisine('European');
        $restaurantSaransk2->setGoodfor('Special occasions, Kids, Large groups, Families with children, Local cuisine');
        $restaurantSaransk2->setPrice('€2 - €21');

        $slug = new Slugify();
        $restaurantSaransk2Slug = $slug->slugify($restaurantSaransk2->getName());
        $restaurantSaransk2->setSlug($restaurantSaransk2Slug);
        $restaurantSaransk2->setAddress('Lenina Ave., 29, Saransk 430000, Russia');
        $restaurantSaransk2->setCity($saransk);

        $manager->persist($restaurantSaransk2);

        // restaurant 3
        $restaurantSaransk3 = new Restaurant();
        $restaurantSaransk3->setPhone('+7 844 238-32-07');
        $restaurantSaransk3->setName('Baron Munchhausen');
        $restaurantSaransk3->setCuisine('European');
        $restaurantSaransk3->setGoodfor('Business meetings, Special occasions, Large groups, Romantic, Kids, Families with children');
        $restaurantSaransk3->setPrice('€2 - €18');

        $slug = new Slugify();
        $restaurantSaransk3Slug = $slug->slugify($restaurantSaransk3->getName());
        $restaurantSaransk3->setSlug($restaurantSaransk3Slug);
        $restaurantSaransk3->setAddress('Kommunisticheskaya St., 35, Saransk, Russia');
        $restaurantSaransk3->setCity($saransk);

        $manager->persist($restaurantSaransk3);

        // hotel 1
        $hotelSaransk1 = new Hotel();
        $hotelSaransk1->setName('Hostel Shpinat');
        $hotelSaransk1->setEmail('email@address.fake');
        $hotelSaransk1->setShortdescription('Hostel Shpinat is located in Saransk, just 1.9 km from Mordovia Arena.');
        $hotelSaransk1->setDescription('Hostel Shpinat is located in Saransk, just 1.9 km from Mordovia Arena. There is a 24-hour front desk at the property. Sobornaya Square is 1.3 km from Hostel Shpinat, and Pushkin Park is 1.9 km from the property. This property also has one of the top-rated locations in Saransk! Guests are happier about it compared to other properties in the area.');
        $hotelSaransk1->setCategory('Eco');

        $slug = new Slugify();
        $hotelSaransk1Slug = $slug->slugify($hotelSaransk1->getName());
        $hotelSaransk1->setSlug($hotelSaransk1Slug);
        $hotelSaransk1->setAddress('ul. Fedoseenko, 17, Saransk, Respublika Mordoviya, Russia, 430001');
        $hotelSaransk1->setCity($saransk);

        $manager->persist($hotelSaransk1);

        // hotel 2
        $hotelSaransk2 = new Hotel();
        $hotelSaransk2->setName('Hotel Olympia');
        $hotelSaransk2->setEmail('olympia-saransk@yandex.ru');
        $hotelSaransk2->setShortdescription('Located just a 15-minute walk from Mordovian Fine Arts Museum, Hotel Olympia features a sauna, indoor swimming pool and wellness centre. This property offers a steam bath, fitness centre and billiards.');
        $hotelSaransk2->setDescription('Located just a 15-minute walk from Mordovian Fine Arts Museum, Hotel Olympia features a sauna, indoor swimming pool and wellness centre. This property offers a steam bath, fitness centre and billiards.
        The air-conditioned rooms feature a minibar, fridge and flat-screen TV with cable channels. The private bathroom is equipped with a hairdryer, slippers and free toiletries. Guests can have a meal at the restaurant on site and have a drink at the bar. Plenty of cafes and restaurants are just a 5-minute walk away. Olympia Hotel is 3 km from Saransk Central Train Station and 11 km from Saransk Airport. The nearest bus stop is a 5-minute walk away.');
        $hotelSaransk2->setCategory('Eco');

        $slug = new Slugify();
        $hotelSaransk2Slug = $slug->slugify($hotelSaransk2->getName());
        $hotelSaransk2->setSlug($hotelSaransk2Slug);
        $hotelSaransk2->setAddress('Titova Street 23 A, Saransk 430000, Russia');
        $hotelSaransk2->setCity($saransk);

        $manager->persist($hotelSaransk2);

        // hotel 3
        $hotelSaransk3 = new Hotel();
        $hotelSaransk3->setName('Hotel Vizit');
        $hotelSaransk3->setEmail('email@address.fake');
        $hotelSaransk3->setShortdescription('Featuring free WiFi throughout the property, Hotel Vizit offers accommodations in Saransk. Guests can enjoy the on-site restaurant. Free private parking is available on site.');
        $hotelSaransk3->setDescription('Featuring free WiFi throughout the property, Hotel Vizit offers accommodations in Saransk. Guests can enjoy the on-site restaurant. Free private parking is available on site. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers and free toiletries. A flat-screen TV is available.');
        $hotelSaransk3->setCategory('Eco');

        $slug = new Slugify();
        $hotelSaransk3Slug = $slug->slugify($hotelSaransk3->getName());
        $hotelSaransk3->setSlug($hotelSaransk3Slug);
        $hotelSaransk3->setAddress('Stroitelnaya, 11, 430000 Saransk, Russia');
        $hotelSaransk3->setCity($saransk);

        $manager->persist($hotelSaransk3);

        // hotel 4
        $hotelSaransk4 = new Hotel();
        $hotelSaransk4->setName('Meridian');
        $hotelSaransk4->setEmail('hotel@meridian13.ru');
        $hotelSaransk4->setShortdescription('This hotel is located in the centre of Saransk, a 5-minute walk from the National Theatre of Mordovia. Free Wi-Fi, a sauna, billiards and a 24-hour reception are featured at Meridian Hotel.');
        $hotelSaransk4->setDescription('This hotel is located in the centre of Saransk, a 5-minute walk from the National Theatre of Mordovia. Free Wi-Fi, a sauna, billiards and a 24-hour reception are featured at Meridian Hotel. The bright, air-conditioned rooms offer warm-coloured interiors and classic-style décor. Each room includes a flat-screen TV, a minibar and a private bathroom.
        Meridian Restaurant serves European cuisine, and a variety of drinks is offered at the bar. Saransk Central Train Station is a 15-minute walk from Meridian Hotel, and Saransk Airport is 12 km away.');
        $hotelSaransk4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSaransk4Slug = $slug->slugify($hotelSaransk4->getName());
        $hotelSaransk4->setSlug($hotelSaransk4Slug);
        $hotelSaransk4->setAddress('ul. Bogdana Khmelnitskogo, 34, Saransk, Respublika Mordoviya, Russia, 430000');
        $hotelSaransk4->setCity($saransk);

        $manager->persist($hotelSaransk4);

        // hotel 5
        $hotelSaransk5 = new Hotel();
        $hotelSaransk5->setName('Park Hotel');
        $hotelSaransk5->setEmail('commande@parkhotel-saransk.ru');
        $hotelSaransk5->setShortdescription('Located 1.3 km from Mordovia Arena in Saransk, Park Hotel features a restaurant and free WiFi. The hotel has a sauna and fitness center, and guests can enjoy a meal at the restaurant. Free private parking is available on site.');
        $hotelSaransk5->setDescription('Located 1.3 km from Mordovia Arena in Saransk, Park Hotel features a restaurant and free WiFi. The hotel has a sauna and fitness center, and guests can enjoy a meal at the restaurant. Free private parking is available on site.
        You can play pool at the hotel. Pushkin Park is 201 m from Park Hotel, and Sobornaya Square is 400 m from the property.');
        $hotelSaransk5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSaransk5Slug = $slug->slugify($hotelSaransk5->getName());
        $hotelSaransk5->setSlug($hotelSaransk5Slug);
        $hotelSaransk5->setAddress('ul. Krasnaya, 4, Saransk, Respublika Mordoviya, Russia, 430000');
        $hotelSaransk5->setCity($saransk);

        $manager->persist($hotelSaransk5);

        // hotel 6
        $hotelSaransk6 = new Hotel();
        $hotelSaransk6->setName('Hotel Makarovskaya');
        $hotelSaransk6->setEmail('gost-makar@yandex.ru');
        $hotelSaransk6->setShortdescription('Located 8 km from the city centre of Saransk, Hotel Makarovskaya features an on-site restaurant serving Russian cuisine, free internet access, and free private parking.');
        $hotelSaransk6->setDescription('Located 8 km from the city centre of Saransk, Hotel Makarovskaya features an on-site restaurant serving Russian cuisine, free internet access, and free private parking.
        The classically designed rooms here provide guests with a flat-screen TV, a desk, heating, and a private bathroom with a shower and free toiletries. Other hotel facilities include a 24-hour front desk, meeting and banquet facilities, a garden, a billiards table and a tennis table.');
        $hotelSaransk6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSaransk6Slug = $slug->slugify($hotelSaransk6->getName());
        $hotelSaransk6->setSlug($hotelSaransk6Slug);
        $hotelSaransk6->setAddress('ul. Nagornaya, 35, Makarovka, Саранск, Russia, 430012');
        $hotelSaransk6->setCity($saransk);

        $manager->persist($hotelSaransk6);

        // hotel 7
        $hotelSaransk7 = new Hotel();
        $hotelSaransk7->setName('Admiral Hotel');
        $hotelSaransk7->setEmail('welcome@admiral-saransk.ru');
        $hotelSaransk7->setShortdescription('Located a 10-minute walk from Sovetskaya Square in Saransk, Admiral Hotel features a free access to indoor pool and a gym. A spa and wellness centre and a bar are also featured.');
        $hotelSaransk7->setDescription('Located a 10-minute walk from Sovetskaya Square in Saransk, Admiral Hotel features a free access to indoor pool and a gym. A spa and wellness centre and a bar are also featured. All rooms are air-conditioned and come with flat-screen TV with satellite channels, and safety deposit box.
        The hotel serves a buffet breakfast. Guests can dine in the property’s à la carte restaurant offering European, Mediterranean and Mordovian cuisine. Saransk Airport is within a 20-minute drive of Admiral Hotel. A shuttle service to the airport and Central Train Station is provided upon request.');
        $hotelSaransk7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSaransk7Slug = $slug->slugify($hotelSaransk7->getName());
        $hotelSaransk7->setSlug($hotelSaransk7Slug);
        $hotelSaransk7->setAddress('Respublikanskaya ul., 103, Saransk, Respublika Mordoviya, Russia, 430010');
        $hotelSaransk7->setCity($saransk);

        $manager->persist($hotelSaransk7);

        // hotel 8
        $hotelSaransk8 = new Hotel();
        $hotelSaransk8->setName('Hotel Victoria at the sports school');
        $hotelSaransk8->setEmail('email@address.fake');
        $hotelSaransk8->setShortdescription('Located in Saransk, 6 km from Mordovia Arena, Hotel Victoria at the sports school features air-conditioned rooms with free WiFi throughout the property. The hotel has a hot tub and sauna, and guests can enjoy a drink at the bar.');
        $hotelSaransk8->setDescription('Located in Saransk, 6 km from Mordovia Arena, Hotel Victoria at the sports school features air-conditioned rooms with free WiFi throughout the property. The hotel has a hot tub and sauna, and guests can enjoy a drink at the bar.
        All rooms include a flat-screen TV with cable channels. Certain accommodations have a sitting area for your convenience. Enjoy a cup of tea while looking out at the garden or city. The rooms are equipped with a private bathroom. For your comfort, you will find bathrobes and slippers.
        Bike rental is available at this hotel and the area is popular for hiking. Saransk Bus Station is 1.9 km from Hotel Victoria at the sports school, and Leninsky District Park is 2.1 km from the property.');
        $hotelSaransk8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSaransk8Slug = $slug->slugify($hotelSaransk8->getName());
        $hotelSaransk8->setSlug($hotelSaransk8Slug);
        $hotelSaransk8->setAddress('ul. Pobedy, 3а, Saransk, Respublika Mordoviya, Russia, 430013');
        $hotelSaransk8->setCity($saransk);

        $manager->persist($hotelSaransk8);

        // hotel 9
        $hotelSaransk9 = new Hotel();
        $hotelSaransk9->setName('Severny Zamok Hotel');
        $hotelSaransk9->setEmail('email@address.fake');
        $hotelSaransk9->setShortdescription('Located in Saransk, Severny Zamok Hotel features free WiFi and free private parking.Each room offers a air conditioning and a flat-screen TV with satellite channels. You will also find a fridge. The private bathrooms are fitted with a hairdryer.');
        $hotelSaransk9->setDescription('Located in Saransk, Severny Zamok Hotel features free WiFi and free private parking. Each room offers a air conditioning and a flat-screen TV with satellite channels. You will also find a fridge. The private bathrooms are fitted with a hairdryer.
        Guests can enjoy breakfast or lunch at the properties cafe. Banquet facilities with an à la carte service are also available. An array of activities offered on site include billiards and table tennis. Saransk Train Station is 7 km away, and Saransk Airport is 13.5 km from Severny Zamok Hotel.');
        $hotelSaransk9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSaransk9Slug = $slug->slugify($hotelSaransk9->getName());
        $hotelSaransk9->setSlug($hotelSaransk9Slug);
        $hotelSaransk9->setAddress('Lyambirskoe Shosse, 2 Km, 430034 Saransk, Russia');
        $hotelSaransk9->setCity($saransk);

        $manager->persist($hotelSaransk9);

        // City Fixtures
        $saransk->setName('Saransk');
        $slug = new Slugify();
        $saranskSlug = $slug->slugify($saransk->getName());
        $saransk->setSlug($saranskSlug);
        $saransk->setDescription('Saransk is the capital city of the Republic of Mordovia, Russia, as well as its financial and economic center. It is located in the Volga basin at the confluence of the Saranka and Insar Rivers, about 630 kilometers (390 mi) east of Moscow.');

        $saransk->addHotel($hotelSaransk1);
        $saransk->addHotel($hotelSaransk2);
        $saransk->addHotel($hotelSaransk3);
        $saransk->addHotel($hotelSaransk4);
        $saransk->addHotel($hotelSaransk5);
        $saransk->addHotel($hotelSaransk6);
        $saransk->addHotel($hotelSaransk7);
        $saransk->addHotel($hotelSaransk8);
        $saransk->addHotel($hotelSaransk9);

        $saransk->addRestaurant($restaurantSaransk1);
        $saransk->addRestaurant($restaurantSaransk2);
        $saransk->addRestaurant($restaurantSaransk3);

        $manager->persist($saransk);

        $manager->flush();
    }
}
