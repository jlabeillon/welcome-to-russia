<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class NizhnyNovgorodFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $nizhnyNovgorod = New City();
        $manager->persist($nizhnyNovgorod);
        // restaurant 1
        $restaurantNizhnyNovgorod1 = new Restaurant();
        $restaurantNizhnyNovgorod1->setPhone('+7 831 213-80-82');
        $restaurantNizhnyNovgorod1->setName('Pelmennaya Lepi Testo');
        $restaurantNizhnyNovgorod1->setCuisine('Russian, Vegetarian Friendly');
        $restaurantNizhnyNovgorod1->setGoodfor('Local cuisine, Large groups, Families with children');
        $restaurantNizhnyNovgorod1->setPrice('€6');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod1Slug = $slug->slugify($restaurantNizhnyNovgorod1->getName());
        $restaurantNizhnyNovgorod1->setSlug($restaurantNizhnyNovgorod1Slug);
        $restaurantNizhnyNovgorod1->setAddress('Minina St., 12 & Bolshaya Pokrovskaya st, 47, Nizhny Novgorod 603005, Russia');
        $restaurantNizhnyNovgorod1->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod1);

        // restaurant 2
        $restaurantNizhnyNovgorod2 = new Restaurant();
        $restaurantNizhnyNovgorod2->setPhone('+7 831 433-69-34');
        $restaurantNizhnyNovgorod2->setName('Biblioteka');
        $restaurantNizhnyNovgorod2->setCuisine('Italian, European, Vegetarian Friendly, Vegan Option');
        $restaurantNizhnyNovgorod2->setGoodfor('Large groups, Families with children, Kids, Romantic');
        $restaurantNizhnyNovgorod2->setPrice('€14');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod2Slug = $slug->slugify($restaurantNizhnyNovgorod2->getName());
        $restaurantNizhnyNovgorod2->setSlug($restaurantNizhnyNovgorod2Slug);
        $restaurantNizhnyNovgorod2->setAddress('Biblioteka ul. Bolshaya Pokrovskaya 46, Nizhny Novgorod 603000, Russia');
        $restaurantNizhnyNovgorod2->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod2);

        // restaurant 3
        $restaurantNizhnyNovgorod3 = new Restaurant();
        $restaurantNizhnyNovgorod3->setPhone('+7 401 291-91-81');
        $restaurantNizhnyNovgorod3->setName('Angliyskoye Posolstvo');
        $restaurantNizhnyNovgorod3->setCuisine('Irish, Bar, European, British, Pub, Central European');
        $restaurantNizhnyNovgorod3->setGoodfor('Kids, Large groups, Bar scene, Business meetings');
        $restaurantNizhnyNovgorod3->setPrice('€8 - €14');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod3Slug = $slug->slugify($restaurantNizhnyNovgorod3->getName());
        $restaurantNizhnyNovgorod3->setSlug($restaurantNizhnyNovgorod3Slug);
        $restaurantNizhnyNovgorod3->setAddress('Angliyskoye Posolstvo ul. Zvezdinka 12, Nizhny Novgorod 603000, Russia');
        $restaurantNizhnyNovgorod3->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod3);

        // hotel 1
        $hotelNizhnyNovgorod1 = new Hotel();
        $hotelNizhnyNovgorod1->setName('Hotel Mona Lisa');
        $hotelNizhnyNovgorod1->setEmail('monalisa59@yandex.ru');
        $hotelNizhnyNovgorod1->setShortdescription('Located in a green area of Nizhniy Novgorod, a 30-minute drive to the city centre, Hotel Mona Lisa features an outdoor swimming pool. The Volga River is a 15-minute walk away.');
        $hotelNizhnyNovgorod1->setDescription('Located in a green area of Nizhniy Novgorod, a 30-minute drive to the city centre, Hotel Mona Lisa features an outdoor swimming pool. The Volga River is a 15-minute walk away. The comfortable rooms feature air conditioning and free Wi-Fi. They have a flat-screen satellite TV and fridge. The private bathrooms come with a shower or bath, hairdryer and free toiletries.
        The restaurant at Hotel Mona Lisa serves dishes of European and Russian cuisine. The 24-hour front desk offers laundry and ironing services. Free private parking is available. The nearest bus stop is a 3-minute walk from the hotel. Nizhniy Novgorod Moskovskiy Train Station is 10 km away, while Nizhniy Novgorod Airport is 33 km away.');
        $hotelNizhnyNovgorod1->setCategory('Eco');

        $slug = new Slugify();
        $hotelNizhnyNovgorod1Slug = $slug->slugify($hotelNizhnyNovgorod1->getName());
        $hotelNizhnyNovgorod1->setSlug($hotelNizhnyNovgorod1Slug);
        $hotelNizhnyNovgorod1->setAddress('ul. Khalzovskaya, 59, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603068');
        $hotelNizhnyNovgorod1->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod1);

        // hotel 2
        $hotelNizhnyNovgorod2 = new Hotel();
        $hotelNizhnyNovgorod2->setName('Baget Hotel');
        $hotelNizhnyNovgorod2->setEmail('bagethotel@gmail.com');
        $hotelNizhnyNovgorod2->setShortdescription('Located a 10-minute walk from the Nizhny Novgorod Kremlin, Baget Hotel features rooms with a contemporary décor. It offers a 24-hour front desk.');
        $hotelNizhnyNovgorod2->setDescription('Located a 10-minute walk from the Nizhny Novgorod Kremlin, Baget Hotel features rooms with a contemporary décor. It offers a 24-hour front desk.
        With air conditioning, rooms all come with a flat-screen TV and a private bathroom equipped with free toiletries. Studios also have an equipped kitchenette. Guests will find several cafes and restaurants within a radius of 200 m of the property.
        Nizhniy Novgorod Train Station is a 15-minute drive from Hotel Baget. Nizhny Novgorod International Airport is 25 km away. This is our guests’ favourite part of Nizhny Novgorod, according to independent reviews.');
        $hotelNizhnyNovgorod2->setCategory('Eco');

        $slug = new Slugify();
        $hotelNizhnyNovgorod2Slug = $slug->slugify($hotelNizhnyNovgorod2->getName());
        $hotelNizhnyNovgorod2->setSlug($hotelNizhnyNovgorod2Slug);
        $hotelNizhnyNovgorod2->setAddress('Ilinskaya street 3, Nizhny Novgorod, Russia');
        $hotelNizhnyNovgorod2->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod2);

        // hotel 3
        $hotelNizhnyNovgorod3 = new Hotel();
        $hotelNizhnyNovgorod3->setName('MaxxRoyal Hotel');
        $hotelNizhnyNovgorod3->setEmail('maxxroyal-nn@yandex.ru');
        $hotelNizhnyNovgorod3->setShortdescription('Offering a restaurant, MaxxRoyal Hotel is located in Nizhniy Novgorod, a 20-minute drive from city centre. Free WiFi access is available.');
        $hotelNizhnyNovgorod3->setDescription('Offering a restaurant, MaxxRoyal Hotel is located in Nizhniy Novgorod, a 20-minute drive from city centre. Free WiFi access is available.
        Each room here will provide you with a TV. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. Extras include a desk and a fan.
        Guests are welcome to visit the on-site cafe, which serves European, Caucasian and Italian cuisine. At MaxxRoyal Hotel you will find a 24-hour front desk and a bar. Other facilities offered at the property include an ironing service and laundry facilities. The distance to Nizhniy Novgorod Train Station is 10 km from the property, and Nizhniy Novgorod Airport is 15 km away.');
        $hotelNizhnyNovgorod3->setCategory('Eco');

        $slug = new Slugify();
        $hotelNizhnyNovgorod3Slug = $slug->slugify($hotelNizhnyNovgorod3->getName());
        $hotelNizhnyNovgorod3->setSlug($hotelNizhnyNovgorod3Slug);
        $hotelNizhnyNovgorod3->setAddress('Nijni Novgorod, ul. Oudmourte, 34a');
        $hotelNizhnyNovgorod3->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod3);

        // hotel 4
        $hotelNizhnyNovgorod4 = new Hotel();
        $hotelNizhnyNovgorod4->setName('Na Volne Hotel');
        $hotelNizhnyNovgorod4->setEmail('email@address.fake');
        $hotelNizhnyNovgorod4->setShortdescription('Offering a private beach area, Na Volne Hotel is set in the historic part of Nizhniy Novgorod. Moskovskaya Train Station is a 5-minute walk away. Free WiFi is featured throughout the hotel.');
        $hotelNizhnyNovgorod4->setDescription('Offering a private beach area, Na Volne Hotel is set in the historic part of Nizhniy Novgorod. Moskovskaya Train Station is a 5-minute walk away. Free WiFi is featured throughout the hotel. Rooms are fitted with a TV and air conditioning. Each bed offers individual curtain and socket.
        You will find a 24-hour front desk and gift shop at the property. Guests can use a shared fully equipped kitchen with bar counters and panoramic windows. A shared lounge with deck chairs and barbecue facilities is available. A selection of activities are offered in the area, such as windsurfing, cycling and fishing. Water sports facilities rental is available and the hostel offers tour desk.
        Moskovsky Train Station is a 5-minute walk from the property. Nizhegorodsky Circus is located steps from the property. Spaso-Preobrazhensky Cathedral is 1.3 km from Na Volne Hotel, while Alexander Nevsky Cathedral is 1.8 km away. The nearest airport is Nizhny Novgorod International Airport, 15 km from the property.');
        $hotelNizhnyNovgorod4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelNizhnyNovgorod4Slug = $slug->slugify($hotelNizhnyNovgorod4->getName());
        $hotelNizhnyNovgorod4->setSlug($hotelNizhnyNovgorod4Slug);
        $hotelNizhnyNovgorod4->setAddress('ul. Marata, 23А, Nizhnij Novgorod, Nizhegorodskaya oblast, Russie, 603002');
        $hotelNizhnyNovgorod4->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod4);

        // hotel 5
        $hotelNizhnyNovgorod5 = new Hotel();
        $hotelNizhnyNovgorod5->setName('Joy Hotel');
        $hotelNizhnyNovgorod5->setEmail('hotel-joy@mail.ru');
        $hotelNizhnyNovgorod5->setShortdescription('Joy Hotel is located in the historic centre, a 5-minute walk from Nizhny Novgorod Kremlin. The rooms offer air conditioning, a safety deposit box, flat-screen TV with cable channels, and kitchenette equipped with a fridge, microwave and electric kettle. The bathrooms include a hairdryer.');
        $hotelNizhnyNovgorod5->setDescription('Joy Hotel is located in the historic centre, a 5-minute walk from Nizhny Novgorod Kremlin. The rooms offer air conditioning, a safety deposit box, flat-screen TV with cable channels, and kitchenette equipped with a fridge, microwave and electric kettle. The bathrooms include a hairdryer.
        Guests are welcome to eat out in the cafés and restaurants within a 5-minute walk away. Breakfasts in the room are served upon request. Free WiFi is available throughout the property and parking is provided at surcharge. Guests can enjoy billiards on site. The Oka River embankment is a 12-minute walk from the property. Nizhny Novgorod Train Station is 5.5 km away, and Nizhny Novgorod International Airport is 23 km from Joy Hotel.
        This is our guests’ favourite part of Nizhny Novgorod, according to independent reviews. This property also has one of the best-rated locations in Nizhny Novgorod! Guests are happier about it compared to other properties in the area.');
        $hotelNizhnyNovgorod5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelNizhnyNovgorod5Slug = $slug->slugify($hotelNizhnyNovgorod5->getName());
        $hotelNizhnyNovgorod5->setSlug($hotelNizhnyNovgorod5Slug);
        $hotelNizhnyNovgorod5->setAddress('ul. Oktyabrskaya, 4, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603005');
        $hotelNizhnyNovgorod5->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod5);

        // hotel 6
        $hotelNizhnyNovgorod6 = new Hotel();
        $hotelNizhnyNovgorod6->setName('Nikitin Hotel');
        $hotelNizhnyNovgorod6->setEmail('info@nikitin-hotel.ru');
        $hotelNizhnyNovgorod6->setShortdescription('Free Wi-Fi and a full English breakfast are offered at this hotel, located just 350 m from where the River Volga meets the River Oka. The design hotel offers a 24-hour reception.');
        $hotelNizhnyNovgorod6->setDescription('Free Wi-Fi and a full English breakfast are offered at this hotel, located just 350 m from where the River Volga meets the River Oka. The design hotel offers a 24-hour reception. Rooms at Nikitin Hotel feature a mixture of bright and deep colours. Each one comes with a flat-screen TV, minibar, and air conditioning. The private bathroom includes a bathrobe, slippers, and free toiletries. Nikitin Hotel offers a laundry and ironing service to guests, as well as a shoe shine. A shuttle  service is also available.
        The hotel is a 9-minute walk from Nizhniy Novgorod Fair Exhibition Grounds. Alexandra Nevskogo Cathedral is less than 1 minute away by foot. Nizhny Novgorod Main Station is 2 km away and Nizhny Novgorod Airport is 20 km away.');
        $hotelNizhnyNovgorod6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelNizhnyNovgorod6Slug = $slug->slugify($hotelNizhnyNovgorod6->getName());
        $hotelNizhnyNovgorod6->setSlug($hotelNizhnyNovgorod6Slug);
        $hotelNizhnyNovgorod6->setAddress('Strelka Street, 13, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603086');
        $hotelNizhnyNovgorod6->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod6);

        // hotel 7
        $hotelNizhnyNovgorod7 = new Hotel();
        $hotelNizhnyNovgorod7->setName('City Hotel Sova');
        $hotelNizhnyNovgorod7->setEmail('reception@hotelsova.ru');
        $hotelNizhnyNovgorod7->setShortdescription('This 4-star business City Hotel Sova is located a 10-minute drive to the centre of Nizhniy Novgorod and offers free WiFi, a business centre and underground parking. The Kremlin and the pedestrian street Bolshaya Pokrovskaya are just a few bus stops away.');
        $hotelNizhnyNovgorod7->setDescription('This 4-star business City Hotel Sova is located a 10-minute drive to the centre of Nizhniy Novgorod and offers free WiFi, a business centre and underground parking. The Kremlin and the pedestrian street Bolshaya Pokrovskaya are just a few bus stops away.
        The modern rooms are air conditioned and come with orthopedic mattresses, hypoallergenic pillows, a TV and a minibar. The private bathrooms feature a bath or shower, hairdryer and free toiletries. Bathrobes and slippers are offered.
        The Sova restaurant serves Russian and European cuisine, as well as buffet breakfast, business lunch and dinner. The hotel offers a sauna. Guests can use Fizkult fitness centre, located a 4-minute walk away.');
        $hotelNizhnyNovgorod7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelNizhnyNovgorod7Slug = $slug->slugify($hotelNizhnyNovgorod7->getName());
        $hotelNizhnyNovgorod7->setSlug($hotelNizhnyNovgorod7Slug);
        $hotelNizhnyNovgorod7->setAddress('ul. Vaneeva, 121, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603105');
        $hotelNizhnyNovgorod7->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod7);

        // hotel 8
        $hotelNizhnyNovgorod8 = new Hotel();
        $hotelNizhnyNovgorod8->setName('Courtyard by Marriott Nizhny Novgorod City Center');
        $hotelNizhnyNovgorod8->setEmail('reservation@courtyard-nnovgorod.com');
        $hotelNizhnyNovgorod8->setShortdescription('Featuring a fitness centre, Courtyard by Marriott Nizhny Novgorod City Center is located a 20-minute walk from Nizhny Novgorod Kremlin. Free WiFi and free private parking are available on site.');
        $hotelNizhnyNovgorod8->setDescription('Featuring a fitness centre, Courtyard by Marriott Nizhny Novgorod City Center is located a 20-minute walk from Nizhny Novgorod Kremlin. Free WiFi and free private parking are available on site.
        All rooms are fitted with air conditioning, a flat-screen TV with satellite channels, electric kettle and working area. The bathrooms come with a hairdryer and free toiletries. Guests can dine in the hotel’s restaurant and there is also a 24-hour front desk at the property. Moskovsky Train Station is 5 km away and Nizhny Novgorod International Airport is 23 km from Courtyard by Marriott Nizhny Novgorod City Center.');
        $hotelNizhnyNovgorod8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelNizhnyNovgorod8Slug = $slug->slugify($hotelNizhnyNovgorod8->getName());
        $hotelNizhnyNovgorod8->setSlug($hotelNizhnyNovgorod8Slug);
        $hotelNizhnyNovgorod8->setAddress('Ilinskaïa rue, 46, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603109');
        $hotelNizhnyNovgorod8->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod8);

        // hotel 9
        $hotelNizhnyNovgorod9 = new Hotel();
        $hotelNizhnyNovgorod9->setName('Park-Hotel Chayka');
        $hotelNizhnyNovgorod9->setEmail('malto:sales@volnahotel.ru');
        $hotelNizhnyNovgorod9->setShortdescription('Park-Hotel Chayka offers accommodation in Zhelnino. The hotel has a spa centre and water sports facilities, and guests can enjoy a drink at the bar.');
        $hotelNizhnyNovgorod9->setDescription('Park-Hotel Chayka offers accommodation in Zhelnino. The hotel has a spa centre and water sports facilities, and guests can enjoy a drink at the bar.
        All rooms have a TV. Some units have a seating area where you can relax. The rooms are equipped with a private bathroom fitted with a bath or shower. For your comfort, you will find bath robes and slippers. There is a 24-hour front desk, a cash machine, a shared lounge and hairdresser’s at the property.
        You can play tennis at this hotel, and ski equipment hire is available. Nizhniy Novgorod is 37 km from Park-Hotel Chayka, while Dzerzhinsk is 8 km away. This property also has one of the best-rated locations in Zhelnino! Guests are happier about it compared to other properties in the area.');
        $hotelNizhnyNovgorod9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelNizhnyNovgorod9Slug = $slug->slugify($hotelNizhnyNovgorod9->getName());
        $hotelNizhnyNovgorod9->setSlug($hotelNizhnyNovgorod9Slug);
        $hotelNizhnyNovgorod9->setAddress('pr. Lenina, 98, Nizhnij Novgorod, Nizhegorodskaya oblast, Russia, 603049');
        $hotelNizhnyNovgorod9->setCity($nizhnyNovgorod);

        $manager->persist($hotelNizhnyNovgorod9);

        // City Fixtures
        $nizhnyNovgorod->setName('NizhnyNovgorod');
        $slug = new Slugify();
        $nizhnyNovgorodSlug = $slug->slugify($nizhnyNovgorod->getName());
        $nizhnyNovgorod->setSlug($nizhnyNovgorodSlug);
        $nizhnyNovgorod->setDescription('Nizhny Novgorod is the fourth largest city in Russia. Nizhny Novgorod had a population of 1,311,252 in 2002, and one of 1,438,133 in 1989. It is the economic and cultural center of the vast Volga-Vyatka economic region, and also the administrative center of Nizhny Novgorod Oblast and Volga Federal District.
        From 1932 to 1990 the city was known as Gorky after the writer Maxim Gorky.');

        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod1);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod2);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod3);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod4);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod5);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod6);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod7);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod8);
        $nizhnyNovgorod->addHotel($hotelNizhnyNovgorod9);

        $nizhnyNovgorod->addRestaurant($restaurantNizhnyNovgorod1);
        $nizhnyNovgorod->addRestaurant($restaurantNizhnyNovgorod2);
        $nizhnyNovgorod->addRestaurant($restaurantNizhnyNovgorod3);

        $manager->persist($nizhnyNovgorod);

        $manager->flush();
    }
}
