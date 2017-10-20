<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;


class YekaterinburgFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $city = New City();
        $manager->persist($city);
        ####################################################################################################################







        #Hotel Fixtures
        ####################################################################################################################
        $hotel1 = new Hotel();
        $hotel1->setName('Bolshoy Ural na Malysheva Hotel');
        $hotel1->setShortdescription('Situated in Yekaterinburg, 400 m from the central stadium and Cathedral of St. John the Baptist, Bolshoy Ural na Malysheva Hotel features air-conditioned rooms with free WiFi. Free private parking is available on site.');
        $hotel1->setDescription('Situated in Yekaterinburg, 400 m from the central stadium and Cathedral of St. John the Baptist, Bolshoy Ural na Malysheva Hotel features air-conditioned rooms with free WiFi. Free private parking is available on site.
A flat-screen TV with cable channels, as well as a computer are available. Certain units feature a seating area where you can relax. Certain rooms include views of the garden or city.
You will find shops at the property. There is also a lounge area and conference rooms at the property. Yekaterinburg Train Station is a 12-minute tram ride away. Yekaterinburg city centre is a 5-minute drive away. Koltsovo International Airport is 17 km away.');
        $hotel1->setCategory('Eco');
        $hotel1->setAddress('ul. Stachek, 6, Ekaterinburg, Sverdlovskaya oblast \', Russia, 620017');
        $hotel1->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel1Slug = $slug->slugify($hotel1->getName());
        $hotel1->setSlug($hotel1Slug);
        $hotel1->setCity($city);
        $manager->persist($hotel1);

        $hotel2 = new Hotel();
        $hotel2->setName('Bolshoy Ural na Stachek Hotel');
        $hotel2->setShortdescription('Located 1.5 km from Mashinostroiteley Metro Station in Yekaterinburg, Bolshoy Ural na Stachek offers a 24-hour front desk and luggage storage. Yekaterinburg city centre is a 30-minute drive away.');
        $hotel2->setDescription('Located 1.5 km from Mashinostroiteley Metro Station in Yekaterinburg, Bolshoy Ural na Stachek offers a 24-hour front desk and luggage storage. Yekaterinburg city centre is a 30-minute drive away. The rooms come with shared bathroom facilities on every floor.
Guests are welcome to eat out at the on-site cafe and use laundry services. Free WiFi is available in the public areas. Yekaterinburg Train Station is a 15-minute drive away. Koltsovo International Airport is 25 km from Bolshoy Ural na Stachek.');
        $hotel2->setCategory('Eco');
        $hotel2->setAddress('ul. Stachek, 6, Ekaterinburg, Sverdlovskaya oblast \', Russia, 620017');
        $hotel2->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel2Slug = $slug->slugify($hotel2->getName());
        $hotel2->setSlug($hotel2Slug);
        $hotel2->setCity($city);
        $manager->persist($hotel2);

        $hotel3 = new Hotel();
        $hotel3->setName('Lhouse Hotel');
        $hotel3->setShortdescription('Lhouse Hotel is located in Yekaterinburg, 4 km from the city centre. It offers en suite accommodation, a quiet private yard and free WiFi. Free public parking is possible on site.');
        $hotel3->setDescription('Lhouse Hotel is located in Yekaterinburg, 4 km from the city centre. It offers en suite accommodation, a quiet private yard and free WiFi. Free public parking is possible on site. All the rooms at Lhouse Hotel features a TV, tea/coffee making facilities and a refrigerator. Each room benefits from an en suite shower room with free toiletries.
At Lhouse Hotel you will find a communal sauna and a bar. Other facilities offered at the property include laundry facilities. The inn is 2.1 km from Trinity Cathedral, 3 km from Big Zlatoust and 3.4 km from State Academic Opera and Ballet. Koltsovo International Airport is 13 km away.');
        $hotel3->setCategory('Eco');
        $hotel3->setAddress('ul. Stachek, 6, Ekaterinburg, Sverdlovskaya oblast \', Russia, 620017');
        $hotel3->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel3Slug = $slug->slugify($hotel3->getName());
        $hotel3->setSlug($hotel3Slug);
        $hotel3->setCity($city);
        $manager->persist($hotel3);

        $hotel4 = new Hotel();
        $hotel4->setName('R.E.D. Inn');
        $hotel4->setShortdescription('Featuring free WiFi throughout the property, R.E.D. Inn is located in Yekaterinburg, 400 m from Uralochka Sports Centre. Free private parking is available on site.');
        $hotel4->setDescription('Featuring free WiFi throughout the property, R.E.D. Inn is located in Yekaterinburg, 400 m from Uralochka Sports Centre. Free private parking is available on site. Rooms are fitted with a flat-screen TV. All rooms are equipped with a shared bathroom. For your comfort, you will find bathrobes and slippers.
There are shops at the property. The hotel also offers bike hire. Church of All Saints is 1 km from R.E.D. Inn, while Sevastyanov’s House is 1.4 km away. The nearest airport is Koltsovo International Airport, 17 km from R.E.D. Inn.');
        $hotel4->setCategory('Authentic');
        $hotel4->setAddress('Krasniy Pereulok 5, bld. 2, 620027 Ekaterinbourg, Russie');
        $hotel4->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($city);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('Chekhov Hotel');
        $hotel5->setShortdescription('The Chekhov is a 3-star hotel in central Ekaterinburg, 300 m from Geologicheskaya Metro Station. Set in 19th-century restored mansion, it features free Wi-Fi and free private parking on site.');
        $hotel5->setDescription('The Chekhov is a 3-star hotel in central Ekaterinburg, 300 m from Geologicheskaya Metro Station. Set in 19th-century restored mansion, it features free Wi-Fi and free private parking on site.
The soundproofed rooms of the Chekhov Hotel are equipped with air conditioning, flat-screen TVs and DVD player. The private bathrooms include a bathtub and provide comfortable bathrobes and slippers.
Hotel Chekhov offers a permanent exhibition dedicated to the life and work of the writer A.P. Chekhov and his days in Ekaterinburg.
Guests can enjoy the central location and discover contemporary Russian cuisine in one of the many cafes and restaurants that surround the hotel.');
        $hotel5->setCategory('Authentic');
        $hotel5->setAddress('ul. 8 Marta, 32, Yekaterinburg, Sverdlovskaya oblast \', Russia, 620014');
        $hotel5->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($city);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('Hotel Renomme');
        $hotel6->setShortdescription('Featuring a sauna and fitness centre, Hotel Renomme is located in Yekaterinburg, right by Geologicheskaya Metro Station. The pedestrian Vaynera Street is within a 5-minute walk. Free WiFi and free private parking are provided.');
        $hotel6->setDescription('Featuring a sauna and fitness centre, Hotel Renomme is located in Yekaterinburg, right by Geologicheskaya Metro Station. The pedestrian Vaynera Street is within a 5-minute walk. Free WiFi and free private parking are provided.
The air-conditioned rooms are decorated in bright colours and feature a flat-screen TV with cable channels. The bathroom comes with a hairdryer and free toiletries.
At Hotel Renomme you will find a 24-hour front desk and Mélange cafe, serving pastry and deserts as well as Kryushon Restaurant, offering provincial cuisine. Other facilities offered at the property include a shared lounge, luggage storage and an ironing service.');
        $hotel6->setCategory('Authentic');
        $hotel6->setAddress('ul. 8 Marta, 50, Yekaterinburg, Sverdlovskaya oblast \', Russia, 620014');
        $hotel6->setEmail('1@renome-hotel.ru');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($city);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('Hyatt Regency Ekaterinburg');
        $hotel7->setShortdescription('Hyatt Regency Ekaterinburg offers accommodation a short walk from the city square. All rooms feature individual climate control, LCD TVs and bathrooms with deep baths and rain showers.');
        $hotel7->setDescription('Hyatt Regency Ekaterinburg offers accommodation a short walk from the city square. All rooms feature individual climate control, LCD TVs and bathrooms with deep baths and rain showers.
The spa & fitness centre includes a state-of-the-art gym, a sauna, a hammam and a whirlpool bath. There’s also an indoor swimming pool with poolside seating and panoramic views of the city.
The hotel features 2 restaurants and 3 lounge bars. The lounge area provides daily complimentary evening cocktails and hors d’ oeuvres, available for Club room categories.
The Hyatt can provide guided tours of the historic city of Yekaterinburg, visiting the Historical Square, the Dam and the Cathedral–on–the-Blood.A dedicated concierge can help you make dinner reservations and arrange transportation to Koltsovo International Airport.');
        $hotel7->setCategory('Luxury');
        $hotel7->setAddress('8 Borisa Yeltsina Street, Ekaterinburg, Sverdlovsk Oblast, Russia, 620014');
        $hotel7->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($city);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('Vysotsky Hotel');
        $hotel8->setShortdescription('Vysotsky Hotel is located on the 39th floor of a business centre in Yekaterinburg, within a 15-minute walk of Ploshchad 1905 Goda Metro Station. Wi-Fi access in all areas and private on-site parking are available free of charge.');
        $hotel8->setDescription('Vysotsky Hotel is located on the 39th floor of a business centre in Yekaterinburg, within a 15-minute walk of Ploshchad 1905 Goda Metro Station. Wi-Fi access in all areas and private on-site parking are available free of charge.
The luxurious air-conditioned rooms feature a minibar and a flat-screen TV with cable channels. The private bathroom comes with a hairdryer and free toiletries.
The hotel’s à la carte restaurant serves dishes of European and Japanese cuisine and the bar offers a variety of drinks. At Vysotsky Hotel you can visit a nightclub and play billiards or bowling with friends. After a busy day, guests can relax in the hotel’s sauna or visit the spa and wellness centre with an indoor pool.');
        $hotel8->setCategory('Luxury');
        $hotel8->setAddress('ul. Malysheva, 51, Yekaterinburg, Sverdlovskaya oblast \', Russia, 620075');
        $hotel8->setEmail('hotel@visotsky-e.ru');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($city);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('Ramada Ekaterinburg Hotel & Spa');
        $hotel9->setShortdescription('This property is 3 minutes walk from the beach. A 10-minute drive from Koltsovo Airport, this hotel offers free Wi-Fi and a free spa with 2 swimming pools, sauna and steam room. This lakefront hotel is surrounded by forests.');
        $hotel9->setDescription('Get the celebrity treatment with world-class service at Ramada Ekaterinburg Hotel & Spa
One of our top picks in Yekaterinburg. This property is 3 minutes walk from the beach. A 10-minute drive from Koltsovo Airport, this hotel offers free Wi-Fi and a free spa with 2 swimming pools, sauna and steam room. This lakefront hotel is surrounded by forests.
The Ramada Ekaterinburg Hotel & Spa offers rooms with modern décor and wonderful views of the surrounding countryside. Each air-conditioned room has a seating area, a TV and tea/coffee facilities.
The Ramada Ekaterinburg spa features an indoor swimming pool and a year-round outdoor heated pool, hot tub and gym. Guests can also make an appointment in the hairdressing salon.');
        $hotel9->setCategory('Luxury');
        $hotel9->setAddress('15 10th km of the road, Ekaterinburg, Sverdlovsk Oblast, Russia, 620990');
        $hotel9->setEmail('address@email.fake');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($city);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('+7 343 228-00-59');
        $restaurant1->setName('Pashtet');
        $restaurant1->setCuisine('Italian, European, Russian, Eastern European, Central European, Vegetarian Friendly, Vegan Options, Gluten Free Options');
        $restaurant1->setGoodfor('Special occasions, Kids, Large groups, Families with children, Romantic, Local cuisine, Business meetings');
        $restaurant1->setPrice('€5 - €15');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('Tolmacheva St, House 23, Yekaterinburg 620075, Russia');
        $restaurant1->setCity($city);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('+7 343 298-98-88');
        $restaurant2->setName('Panorama');
        $restaurant2->setCuisine('Japanese, Seafood, European, Asian, Central European');
        $restaurant2->setGoodfor('Special occasions, Kids, Large groups, Families with children, Romantic, Business meetings');
        $restaurant2->setPrice('€8 - €35');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('Malysheva St., 51 | 50th Floor, Yekaterinburg 620075, Russia');
        $restaurant2->setCity($city);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('Ratatuy');
        $restaurant3->setAddress('Malysheva St., 25, Iekaterinbourg 620014, Russie');
        $restaurant3->setCuisine('Italian, Japanese, European, Russian');
        $restaurant3->setPrice('€5 - €15');
        $restaurant3->setGoodfor('Families with children, Kids, Local cuisine');
        $restaurant3->setPhone('+7 343 289-22-33');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($city);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $city->setName('Yekaterinburg');
        $slug = new Slugify();
        $citySlug = $slug->slugify($city->getName());
        $city->setSlug($citySlug);
        $city->setDescription('adazdazdazdkjhedvugbev');
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
