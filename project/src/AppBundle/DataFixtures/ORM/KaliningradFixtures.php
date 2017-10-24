<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class KaliningradFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $kaliningrad = New City();
        $manager->persist($kaliningrad);

        // restaurant 1
        $restaurantKaliningrad1 = new Restaurant();
        $restaurantKaliningrad1->setPhone('+7 401 235-76-76');
        $restaurantKaliningrad1->setName('Borsch & Salo');
        $restaurantKaliningrad1->setCuisine('European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantKaliningrad1->setGoodfor('Business meetings, Families with children, Kids, Local cuisine, Large groups');
        $restaurantKaliningrad1->setPrice('€2 - €8');

        $slug = new Slugify();
        $restaurantKaliningrad1Slug = $slug->slugify($restaurantKaliningrad1->getName());
        $restaurantKaliningrad1->setSlug($restaurantKaliningrad1Slug);
        $restaurantKaliningrad1->setAddress('Pobedy Sq., 10, Kaliningrad 236010, Russia');
        $restaurantKaliningrad1->setCity($kaliningrad);

        $manager->persist($restaurantKaliningrad1);

        // restaurant2
        $restaurantKaliningrad2 = new Restaurant();
        $restaurantKaliningrad2->setPhone('+7 401 230-00-30');
        $restaurantKaliningrad2->setName('Britannica');
        $restaurantKaliningrad2->setCuisine('German, Bar, European, Pub, Russian, Eastern European, Central European, Fusion, Vegetarian Friendly');
        $restaurantKaliningrad2->setGoodfor('Bar scene, Business meetings, Families with children, Large groups, Special occasions, Local cuisine');
        $restaurantKaliningrad2->setPrice('€2 - €25');

        $slug = new Slugify();
        $restaurantKaliningrad2Slug = $slug->slugify($restaurantKaliningrad2->getName());
        $restaurantKaliningrad2->setSlug($restaurantKaliningrad2Slug);
        $restaurantKaliningrad2->setAddress('Gor\'kogo ul., 2, Kaliningrad 236029, Russia');
        $restaurantKaliningrad2->setCity($kaliningrad);

        $manager->persist($restaurantKaliningrad2);

        // restaurant 3
        $restaurantKaliningrad3 = new Restaurant();
        $restaurantKaliningrad3->setPhone('+7 401 291-91-81');
        $restaurantKaliningrad3->setName('Zotler Bier');
        $restaurantKaliningrad3->setCuisine('German, Brew Pub, Bar, European, Soups, Central European, Vegetarian Friendly');
        $restaurantKaliningrad3->setGoodfor('Large groups, Business meetings, Families with children, Special occasions, Local cuisine, Bar scene');
        $restaurantKaliningrad3->setPrice('€2 - €15');

        $slug = new Slugify();
        $restaurantKaliningrad3Slug = $slug->slugify($restaurantKaliningrad3->getName());
        $restaurantKaliningrad3->setSlug($restaurantKaliningrad3Slug);
        $restaurantKaliningrad3->setAddress('Leninskiy Ave., 3, Kaliningrad 236006, Russia');
        $restaurantKaliningrad3->setCity($kaliningrad);

        $manager->persist($restaurantKaliningrad3);

        // hotel 1
        $hotelKaliningrad1 = new Hotel();
        $hotelKaliningrad1->setName('Cottbus');
        $hotelKaliningrad1->setEmail('hotelcottbus@yandex.ru');
        $hotelKaliningrad1->setShortdescription('Located in the peaceful Rosgarten district of Kaliningrad, this hotel offers European cuisine, a sauna and a small pool. Guests enjoy free Wi-Fi and free on-site parking.');
        $hotelKaliningrad1->setDescription('Located in the peaceful Rosgarten district of Kaliningrad, this hotel offers European cuisine, a sauna and a small pool. Guests enjoy free Wi-Fi and free on-site parking. Individually furnished rooms are provided at the Cottbus Hotel. Every room includes cable TV and a private bathroom with shower.
        Decorated in the style of a Medieval church, Cottbus’s restaurant features a colourful bar. Wines, spirits and karaoke can be enjoyed here in the evenings. Guests also have use of a barbecue area, and can book packed lunches on request. Kaliningrad city centre is 6 km away, and the 24-hour reception can organise rental cars for you. The peaceful Botanichesky Sad gardens are just a 7-minute walk away.');
        $hotelKaliningrad1->setCategory('Eco');

        $slug = new Slugify();
        $hotelKaliningrad1Slug = $slug->slugify($hotelKaliningrad1->getName());
        $hotelKaliningrad1->setSlug($hotelKaliningrad1Slug);
        $hotelKaliningrad1->setAddress('Kaliningrad, ul. Kolkhoznaya, 6');
        $hotelKaliningrad1->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad1);

        // hotel 2
        $hotelKaliningrad2 = new Hotel();
        $hotelKaliningrad2->setName('Hotel Smile');
        $hotelKaliningrad2->setEmail('smilehostel27@mail.ru');
        $hotelKaliningrad2->setShortdescription('Set in Kaliningrad, 6 km from Church of the Holy Family, Traktir Zerkalny Karp features a barbecue and sauna. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.');
        $hotelKaliningrad2->setDescription('Featuring free WiFi and a terrace, Smile Hostel and Mini-Hotel offers accommodation in Kaliningrad, 2.7 km from Königsberg Cathedral. Free private parking is available on site. A flat-screen TV with cable channels is provided. Guests use shared or private bathroom facilities. There is a shared kitchen at the property. Transfer and tour desk services are available.
        The property also offers bike hire. The central square is 1.5 km from Smile Hostel and Mini-Hotel, while Amber Museum is 3.4 km away. Kaliningrad Khrabrovo Airport is 20 km from the property.');
        $hotelKaliningrad2->setCategory('Eco');

        $slug = new Slugify();
        $hotelKaliningrad2Slug = $slug->slugify($hotelKaliningrad2->getName());
        $hotelKaliningrad2->setSlug($hotelKaliningrad2Slug);
        $hotelKaliningrad2->setAddress('Kolomenskaya Ulitsa 27, 236010 Kaliningrad, Russia');
        $hotelKaliningrad2->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad2);

        // hotel 3
        $hotelKaliningrad3 = new Hotel();
        $hotelKaliningrad3->setName('Alfa');
        $hotelKaliningrad3->setEmail('email@address.fake');
        $hotelKaliningrad3->setShortdescription('Featuring free WiFi and a terrace, Smile Hostel and Mini-Hotel offers accommodation in Kaliningrad, 2.7 km from Königsberg Cathedral. Free private parking is available on site.');
        $hotelKaliningrad3->setDescription('Free Wi-Fi and paid private parking are provided at Alfa Hotel is located in the western suburbs of Rostov-on-Don city. Zolotoy Vavilon Shopping Mall and Fortuna 1 Car Market are 2 km away. Each room at Alfa includes classic-style interiors and air conditioning. Rostov-on-Don city centre with Train Station are 8 km from Alfa Hotel, and Rostov Airport is 19 km.');
        $hotelKaliningrad3->setCategory('Eco');

        $slug = new Slugify();
        $hotelKaliningrad3Slug = $slug->slugify($hotelKaliningrad3->getName());
        $hotelKaliningrad3->setSlug($hotelKaliningrad3Slug);
        $hotelKaliningrad3->setAddress('pr. Mira, 20, Konigsberg, Kaliningradskaya oblast, Russia, 236022');
        $hotelKaliningrad3->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad3);

        // hotel 4
        $hotelKaliningrad4 = new Hotel();
        $hotelKaliningrad4->setName('Hotel Tchaikovsky');
        $hotelKaliningrad4->setEmail('reception@tchaikovskyhotel.ru');
        $hotelKaliningrad4->setShortdescription('Located in a historical building in Kaliningrad, 2 km from the city centre, Hotel Chaikovsky features an on-site café serving Russian and French cuisine, a breakfast buffet, free Wi-Fi, and free private parking.');
        $hotelKaliningrad4->setDescription('Located in a historical building in Kaliningrad, 2 km from the city centre, Hotel Chaikovsky features an on-site café serving Russian and French cuisine, a breakfast buffet, free Wi-Fi, and free private parking. Rooms here provide guests with a refrigerator, a flat-screen TV, air conditioning, and a private bathroom with a bath or shower and free toiletries.
        Guests can enjoy the on-site Tchaikovsky restaurant. Other property facilities include a 24-hour front desk, room service, a daily maid service, and a shuttle service. Kenigsburg Cathedral is 3.5 km away, Kaliningrad Zoo is a 20-minute walk, and the Museum of the World Ocean is 3 km from the property. Hotel Chaikovsky is 4.5 km from Kaliningrad Train Station, and 24 km from Khrabrovo Airport.');
        $hotelKaliningrad4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelKaliningrad4Slug = $slug->slugify($hotelKaliningrad4->getName());
        $hotelKaliningrad4->setSlug($hotelKaliningrad4Slug);
        $hotelKaliningrad4->setAddress('ul. Chaykovskogo, 43, Konigsberg, Kaliningradskaya oblast, Russia, 236000');
        $hotelKaliningrad4->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad4);

        // hotel 5
        $hotelKaliningrad5 = new Hotel();
        $hotelKaliningrad5->setName('Chaika Hotel');
        $hotelKaliningrad5->setEmail('chaika@hotel.kaliningrad.ru');
        $hotelKaliningrad5->setShortdescription('Chaika Hotel is situated in historical Kaliningrad, just outside the city centre. There is public transport available from outside the hotel. Chaika offers free parking and free Wi-Fi');
        $hotelKaliningrad5->setDescription('Chaika Hotel is situated in historical Kaliningrad, just outside the city centre. There is public transport available from outside the hotel. Chaika offers free parking and free Wi-Fi. There is a choice of spacious rooms and suites at Chaika Hotel. All rooms have modern facilities, and a work desk. There is also a bar and 24-hour reception service. The hotel is 20 km from Kaliningrad Khrabrovo Airport.');
        $hotelKaliningrad5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelKaliningrad5Slug = $slug->slugify($hotelKaliningrad5->getName());
        $hotelKaliningrad5->setSlug($hotelKaliningrad5Slug);
        $hotelKaliningrad5->setAddress('Pugacheva st., 13, Kaliningrad, RF.');
        $hotelKaliningrad5->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad5);

        // hotel 6
        $hotelKaliningrad6 = new Hotel();
        $hotelKaliningrad6->setName('Hotel Usadba');
        $hotelKaliningrad6->setEmail('reception@hotelusadba.ru');
        $hotelKaliningrad6->setShortdescription('Housed in an old German mansion, this hotel offers resort-style accommodation and is surrounded by the peaceful, green woodlands of Kaliningrad’s countryside. It is 7 km from Kaliningard city centre.');
        $hotelKaliningrad6->setDescription('Housed in an old German mansion, this hotel offers resort-style accommodation and is surrounded by the peaceful, green woodlands of Kaliningrad’s countryside. It is 7 km from Kaliningard city centre. Behind a grand, white exterior, Hotel Usadba offers a variety of classic-style rooms and suites, all featuring a satellite TV and minibar. Serving a buffet breakfast each morning the Usadba’s elegant antique-style restaurant features a sun terrace and offers a selection of delicious Russian cuisine. Guests can relax in the sauna and spa bath.
        A 24-hour front desk can help guests plan their visit to Kaliningrad. The Cathedral of Christ the Saviour and Königsberg Castle are within a 15-minute drive of Hotel Usadba.');
        $hotelKaliningrad6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelKaliningrad6Slug = $slug->slugify($hotelKaliningrad6->getName());
        $hotelKaliningrad6->setSlug($hotelKaliningrad6Slug);
        $hotelKaliningrad6->setAddress('8, Zarechnaya st., Orlovka, Kaliningrad');
        $hotelKaliningrad6->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad6);

        // hotel 7
        $hotelKaliningrad7 = new Hotel();
        $hotelKaliningrad7->setName('Hotel Grand Palace');
        $hotelKaliningrad7->setEmail('reception@grandhotel.ru');
        $hotelKaliningrad7->setShortdescription('This property is 1 minute walk from the beach. Situated on the coast of the Baltic Sea, Grand Palace Hotel offers luxurious rooms with cable TV and Italian furniture. Facilities include a private beach and a heated outdoor swimming pool.');
        $hotelKaliningrad7->setDescription('This property is 1 minute walk from the beach. Situated on the coast of the Baltic Sea, Grand Palace Hotel offers luxurious rooms with cable TV and Italian furniture. Facilities include a private beach and a heated outdoor swimming pool.
        All rooms of Grand Palace Hotel feature a balcony or terrace with either a view of the sea or the landscaped areas of the town. Grand Palace has a health club with a sauna, indoor swimming pool and a fitness room.
        Guests can enjoy authentic Russian and Italian cuisine in the Grand Palace restaurant. The lobby bar has a panoramic view of the Baltic Sea, and serves a wide variety of cocktails and snacks.');
        $hotelKaliningrad7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelKaliningrad7Slug = $slug->slugify($hotelKaliningrad7->getName());
        $hotelKaliningrad7->setSlug($hotelKaliningrad7Slug);
        $hotelKaliningrad7->setAddress('Beregovoy per., 2, Svetlogorsk, Kaliningradskaya oblast, Russia, 238560');
        $hotelKaliningrad7->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad7);

        // hotel 8
        $hotelKaliningrad8 = new Hotel();
        $hotelKaliningrad8->setName('Kaiserhof Hotel');
        $hotelKaliningrad8->setEmail('booking@kaiserhof-hotel.com');
        $hotelKaliningrad8->setShortdescription('Located on the bank of the Pregolia River on the territory of so called Fishing Village, Kaiserhof Hotel offers elegant rooms with free WiFi. It features spa centre facilities.');
        $hotelKaliningrad8->setDescription('Located on the bank of the Pregolia River on the territory of so called Fishing Village, Kaiserhof Hotel offers elegant rooms with free WiFi. It features spa centre facilities. The Kaiserhof has spacious guest rooms and suites, many with balconies with a river or Cathedral view. Every room includes a flat-screen TV.
        Hofburg Restaurant with its transparent roof and stunning stained-glass windows is the perfect place to enjoy European cuisine. Spa facilities include a stylish pool, pool bar and sun terrace. There are also 5 steam baths and a hot tub.
        Kaiserhof Hotel is close to Konigsberg Cathedral and the BalticExpo Exhibition Centre.');
        $hotelKaliningrad8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelKaliningrad8Slug = $slug->slugify($hotelKaliningrad8->getName());
        $hotelKaliningrad8->setSlug($hotelKaliningrad8Slug);
        $hotelKaliningrad8->setAddress('ul. Oktyabrskaya, 6а, Konigsberg, Kaliningradskaya oblast, Russia, 236006');
        $hotelKaliningrad8->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad8);

        // hotel 9
        $hotelKaliningrad9 = new Hotel();
        $hotelKaliningrad9->setName('Buen Retiro');
        $hotelKaliningrad9->setEmail('buenretiro@mail.ru');
        $hotelKaliningrad9->setShortdescription('This property is 2 minutes walk from the beach. Located near the Kaliningrad Bay, Buen Retiro offers guests classically designed rooms, an on-site restaurant, and free Wi-Fi throughout the property.');
        $hotelKaliningrad9->setDescription('This property is 2 minutes walk from the beach. Located near the Kaliningrad Bay, Buen Retiro offers guests classically designed rooms, an on-site restaurant, and free Wi-Fi throughout the property. The rooms here provide a refrigerator, a flat-screen TV with satellite channels, air conditioning, and a private bathroom with a shower.
        Other property facilities include a 24-hour front desk, a children’s playground, a games room, room service, banquet facilities, and a shuttle service. There is a gazebo with barbecue facilities. The property offers waveboarding facilities among with necessary training. The city centre of Kaliningrad is 12 km away, Kaliningrad Train Station is 11 km from the property. Khrabrovo Airport is 36 km from Buen Retiro.');
        $hotelKaliningrad9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelKaliningrad9Slug = $slug->slugify($hotelKaliningrad9->getName());
        $hotelKaliningrad9->setSlug($hotelKaliningrad9Slug);
        $hotelKaliningrad9->setAddress('Rabochiy per., 7, Kaliningrad, Kaliningradskaya oblast, Russia, 236020');
        $hotelKaliningrad9->setCity($kaliningrad);

        $manager->persist($hotelKaliningrad9);

        // City Fixtures
        $kaliningrad->setName('Kaliningrad');
        $slug = new Slugify();
        $kaliningradSlug = $slug->slugify($kaliningrad->getName());
        $kaliningrad->setSlug($kaliningradSlug);
        $kaliningrad->setDescription('It was named Königsberg originally. It was the capital city of the German province of East Prussia, the earlier Duchy of Prussia, and before that of the Monastic State of the Teutonic Knights. The city had that name from 1254 to 1945.
        One of the famous people from Königsberg was the philosopher Immanuel Kant.');

        $kaliningrad->addHotel($hotelKaliningrad1);
        $kaliningrad->addHotel($hotelKaliningrad2);
        $kaliningrad->addHotel($hotelKaliningrad3);
        $kaliningrad->addHotel($hotelKaliningrad4);
        $kaliningrad->addHotel($hotelKaliningrad5);
        $kaliningrad->addHotel($hotelKaliningrad6);
        $kaliningrad->addHotel($hotelKaliningrad7);
        $kaliningrad->addHotel($hotelKaliningrad8);
        $kaliningrad->addHotel($hotelKaliningrad9);

        $kaliningrad->addRestaurant($restaurantKaliningrad1);
        $kaliningrad->addRestaurant($restaurantKaliningrad2);
        $kaliningrad->addRestaurant($restaurantKaliningrad3);

        $manager->persist($kaliningrad);

        $manager->flush();
    }
}
