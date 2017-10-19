<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class SamaraFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $samara = New City();
        $manager->persist($samara);

        // restaurant 1
        $restaurantSamara1 = new Restaurant();
        $restaurantSamara1->setPhone('+7 846 332-22-60');
        $restaurantSamara1->setName('Restaurant-museum Staraya Kvartira');
        $restaurantSamara1->setCuisine('European, Russian');
        $restaurantSamara1->setGoodfor('Business meetings, Families with children, Kids');
        $restaurantSamara1->setPrice('€4 - €14');

        $slug = new Slugify();
        $restaurantSamara1Slug = $slug->slugify($restaurantSamara1->getName());
        $restaurantSamara1->setSlug($restaurantSamara1Slug);
        $restaurantSamara1->setAddress('Samarskaya, 51, Samara 443020, Russia');
        $restaurantSamara1->setCity($samara);

        $manager->persist($restaurantSamara1);

        // restaurant 2
        $restaurantSamara2 = new Restaurant();
        $restaurantSamara2->setPhone('+7 846 989-33-32');
        $restaurantSamara2->setName('Cafe Puri');
        $restaurantSamara2->setCuisine('Georgian, Cafe, Vegetarian Friendly');
        $restaurantSamara2->setGoodfor('Romantic, Families with children, Kids, Business meetings, Special occasions');
        $restaurantSamara2->setPrice('€3 - €36');

        $slug = new Slugify();
        $restaurantSamara2Slug = $slug->slugify($restaurantSamara2->getName());
        $restaurantSamara2->setSlug($restaurantSamara2Slug);
        $restaurantSamara2->setAddress('Kuibysheva St., 79, Samara 443099, Russia');
        $restaurantSamara2->setCity($samara);

        $manager->persist($restaurantSamara2);

        // restaurant 3
        $restaurantSamara3 = new Restaurant();
        $restaurantSamara3->setPhone('+7 846 313-00-00');
        $restaurantSamara3->setName('Churchill\'s Bar');
        $restaurantSamara3->setCuisine('European, British, Central European, Grill, Vegetarian Friendly');
        $restaurantSamara3->setGoodfor('Business meetings, Families with children, Kids, Special occasions, Romantic, Large groups');
        $restaurantSamara3->setPrice('€10 - €36');

        $slug = new Slugify();
        $restaurantSamara3Slug = $slug->slugify($restaurantSamara3->getName());
        $restaurantSamara3->setSlug($restaurantSamara3Slug);
        $restaurantSamara3->setAddress('Lenin avenue, 14, Samara 443110, Russia');
        $restaurantSamara3->setCity($samara);

        $manager->persist($restaurantSamara3);

        // hotel 1
        $hotelSamara1 = new Hotel();
        $hotelSamara1->setName('Elyzium Hotel Complex');
        $hotelSamara1->setEmail('email@address.fake');
        $hotelSamara1->setShortdescription('Featuring free Wi-Fi access available throughout, Elyzium Hotel Complex offers rooms in Samara, a 10-minute drive from the city centre. A sauna, hot tub and a massage service are available upon request.');
        $hotelSamara1->setDescription('Featuring free Wi-Fi access available throughout, Elyzium Hotel Complex offers rooms in Samara, a 10-minute drive from the city centre. A sauna, hot tub and a massage service are available upon request.
        Each air-conditioned room is equipped with a flat-screen TV. The private bathroom comes with a shower, free toiletries and hairdryer. The restaurant serves Russian cuisine and International classics. A 24-hour front desk service is also available.');
        $hotelSamara1->setCategory('Eco');

        $slug = new Slugify();
        $hotelSamara1Slug = $slug->slugify($hotelSamara1->getName());
        $hotelSamara1->setSlug($hotelSamara1Slug);
        $hotelSamara1->setAddress('Alma-Atinskaya Street 268, 443035 Samara, Russia');
        $hotelSamara1->setCity($samara);

        $manager->persist($hotelSamara1);

        // hotel 2
        $hotelSamara2 = new Hotel();
        $hotelSamara2->setName('Hotel Stara Zagora');
        $hotelSamara2->setEmail('email@address.fake');
        $hotelSamara2->setShortdescription('Offering a sauna, tennis court and billiards, Stara Zagora Hotel is located in Samara, on the premises of a sports centre. Free Wi-Fi access is available.');
        $hotelSamara2->setDescription('Offering a sauna, tennis court and billiards, Stara Zagora Hotel is located in Samara, on the premises of a sports centre. Free Wi-Fi access is available. Rooms here will provide you with a flat-screen TV and air conditioning.
        The dormitory rooms have a shared bathroom, while the private room come with en-suite bathroom and a fridge. Kurumoch International Airport is 30 km away, and Samara Central Train Station is 10 km from Stara Zagora Hotel.');
        $hotelSamara2->setCategory('Eco');

        $slug = new Slugify();
        $hotelSamara2Slug = $slug->slugify($hotelSamara2->getName());
        $hotelSamara2->setSlug($hotelSamara2Slug);
        $hotelSamara2->setAddress('ul. Stara-Zagora, 143А, Samara, Samarskaya oblast, Russia, 443016');
        $hotelSamara2->setCity($samara);

        $manager->persist($hotelSamara2);

        // hotel 3
        $hotelSamara3 = new Hotel();
        $hotelSamara3->setName('Volna Hotel');
        $hotelSamara3->setEmail('info@slavhotels.ru');
        $hotelSamara3->setShortdescription('This property is a 9-minute walk from the beach. This hotel is located in the business and cultural centre of Samara, a 20-minute walk from Samara city centre. The Volna Hotel offers a 24-hour reception and billiard table.');
        $hotelSamara3->setDescription('This property is a 9-minute walk from the beach. This hotel is located in the business and cultural centre of Samara, a 20-minute walk from Samara city centre. The Volna Hotel offers a 24-hour reception and billiard table.
        Rooms at the Volna Hotel Samara are warmly decorated and feature classic décor. Some rooms include a TV, refrigerator, electric kettle and private bathroom. Restaurants and cafés can be found within a 10-minute walk of the hotel. Breakfast can be ordered to the room.');
        $hotelSamara3->setCategory('Eco');

        $slug = new Slugify();
        $hotelSamara3Slug = $slug->slugify($hotelSamara3->getName());
        $hotelSamara3->setSlug($hotelSamara3Slug);
        $hotelSamara3->setAddress('ul. Alekseya Tolstogo, 35, Samara, Samarskaya oblast, Russia, 443099');
        $hotelSamara3->setCity($samara);

        $manager->persist($hotelSamara3);

        // hotel 4
        $hotelSamara4 = new Hotel();
        $hotelSamara4->setName('HOTEL 19');
        $hotelSamara4->setEmail('email@address.fake');
        $hotelSamara4->setShortdescription('Featuring free WiFi, HOTEL 19 offers accommodation in Mekhzavod. Guests can enjoy the on-site restaurant. Free private parking is available on site.');
        $hotelSamara4->setDescription('Featuring free WiFi, HOTEL 19 offers accommodation in Mekhzavod. Guests can enjoy the on-site restaurant. Free private parking is available on site. All rooms have a flat-screen TV. Each room is fitted with a private bathroom. Extras include free toiletries and a hairdryer.
        You will find a 24-hour front desk at the property. The hotel offers a shuttle service at surcharge. Samara historical centre is 15 km from the property. Kurumoch International Airport is 25 km away.');
        $hotelSamara4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSamara4Slug = $slug->slugify($hotelSamara4->getName());
        $hotelSamara4->setSlug($hotelSamara4Slug);
        $hotelSamara4->setAddress('8а, Moskovskoye shosse 20 km, 19, Samara, Samarskaya oblast, Russia, 443072');
        $hotelSamara4->setCity($samara);

        $manager->persist($hotelSamara4);

        // hotel 5
        $hotelSamara5 = new Hotel();
        $hotelSamara5->setName('Dom Sivre Hotel');
        $hotelSamara5->setEmail('email@address.fake');
        $hotelSamara5->setShortdescription('This property is 4 minutes walk from the beach. Offering bike rental, Dom Sivre Hotel is located in Samara, a minutes’ walk from the bank of the Volga River. Free WiFi and private parking are available.');
        $hotelSamara5->setDescription('This property is 4 minutes walk from the beach. Offering bike rental, Dom Sivre Hotel is located in Samara, a minutes’ walk from the bank of the Volga River. Free WiFi and private parking are available.
        The bright rooms have a TV and a fridge. Some rooms have a balcony. Bathroom facilities are shared or private. Dom Sivre Hotel has a shared kitchen. The 24-hour front desk offers luggage storage and tour desk services. Samara Train Station is 3 km from the property. Kurumoch International Airport is 47 km away.');
        $hotelSamara5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSamara5Slug = $slug->slugify($hotelSamara5->getName());
        $hotelSamara5->setSlug($hotelSamara5Slug);
        $hotelSamara5->setAddress('ul. Stepana Razina, 128, Samara, Samarskaya oblast, Russia, 443099');
        $hotelSamara5->setCity($samara);

        $manager->persist($hotelSamara5);

        // hotel 6
        $hotelSamara6 = new Hotel();
        $hotelSamara6->setName('Hotel Europe');
        $hotelSamara6->setEmail('hoteleurope@samaramail.ru');
        $hotelSamara6->setShortdescription('This property is 11 minutes walk from the beach. Situated in the historic city centre of Samara, this hotel features free Wi-Fi. Russian specialities are served in the hotel restaurant, and guests benefit from a 24-hour reception.');
        $hotelSamara5->setDescription('This property is 11 minutes walk from the beach. Situated in the historic city centre of Samara, this hotel features free Wi-Fi. Russian specialities are served in the hotel restaurant, and guests benefit from a 24-hour reception.
        The air-conditioned rooms at Hotel Europe are decorated in shades of peach, and come with satellite TV and a seating area. A hairdryer is provided in the en suite bathroom. A variety of traditional cuisine is served in the Europe Hotel’s Dublin restaurant, a continental breakfast is served there too. After dinner guests can enjoy a drink at the bar.
        The Volga River is a 10-minute walk from the hotel, and Samara Opera and Drama Theatre is a 5-minute drive away. After a day of sightseeing, guests can relax in the hotel’s sauna.');
        $hotelSamara6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelSamara6Slug = $slug->slugify($hotelSamara6->getName());
        $hotelSamara6->setSlug($hotelSamara6Slug);
        $hotelSamara6->setAddress('Galaktionovskaya ul., 171, Samara, Samarskaya oblast, Russia, 443001');
        $hotelSamara6->setCity($samara);

        $manager->persist($hotelSamara6);

        // hotel 7
        $hotelSamara7 = new Hotel();
        $hotelSamara7->setName('Holiday Inn Samara');
        $hotelSamara7->setEmail('hisamara@hisamara.ru');
        $hotelSamara7->setShortdescription('This property is 3 minutes walk from the beach. Holiday Inn Samara is located in the historic centre of Samara, a 5-minute walk from the Volga River Embankment. Free WiFi, Swedish and Finnish saunas, swimming pool and a 24-hour fitness centre are offered.');
        $hotelSamara7->setDescription('This property is 3 minutes walk from the beach. Holiday Inn Samara is located in the historic centre of Samara, a 5-minute walk from the Volga River Embankment. Free WiFi, Swedish and Finnish saunas, swimming pool and a 24-hour fitness centre are offered. All rooms are air conditioned and have satellite TV and tea/coffee facilities.
        A rich buffet breakfast is served every morning in the Atrium Restaurant. Brazeria Restaurant serves dishes of Russian and European cuisine. Guests can enjoy a dessert and a coffe at the Atrium lobby bar. The hotel also features 13 conference rooms.
        Samara Central Train Station is 3 km from Holiday Inn Samara. Kurumoch International Airport is 47 km away.');
        $hotelSamara7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSamara7Slug = $slug->slugify($hotelSamara7->getName());
        $hotelSamara7->setSlug($hotelSamara7Slug);
        $hotelSamara7->setAddress('Alexey Tolstoy Ulitsa 99, Samara, Samara Oblast, Russia, 443099');
        $hotelSamara7->setCity($samara);

        $manager->persist($hotelSamara7);

        // hotel 8
        $hotelSamara8 = new Hotel();
        $hotelSamara8->setName('Renaissance Samara Hotel');
        $hotelSamara8->setEmail('email@address.fake');
        $hotelSamara8->setShortdescription('The Renaissance Samara Hotel is a luxury hotel with river views, located in the city centre. It combines impressive interiors with facilities that include restaurants and indoor swimming pool.');
        $hotelSamara8->setDescription('The Renaissance Samara Hotel is a luxury hotel with river views, located in the city centre. It combines impressive interiors with facilities that include restaurants and indoor swimming pool. Renaissance Samara Hotel also features a business centre with meeting rooms, sauna and 24-hour gym.
        All the rooms are equipped with air conditioning, minibar, safe and cable TV. You can easily stay in touch with Wi-Fi connection and double-line telephone, and benefit from 24-hour room service.
        The Renaissance Hotel includes a Viennese-style café, Sunlight restaurant and In Alto restaurant with panoramic views of the Volga River. Kurumoch International Airport is 31 km from the hotel.');
        $hotelSamara8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSamara8Slug = $slug->slugify($hotelSamara8->getName());
        $hotelSamara8->setSlug($hotelSamara8Slug);
        $hotelSamara8->setAddress('Novo-Sadovaya Street , 162V, Samara, Russia, 443011');
        $hotelSamara8->setCity($samara);

        $manager->persist($hotelSamara8);

        // hotel 9
        $hotelSamara9 = new Hotel();
        $hotelSamara9->setName('Hotel Moya Glinka');
        $hotelSamara9->setEmail('email@address.fake');
        $hotelSamara9->setShortdescription('Located in Samara, Hotel Moya Glinka features a spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is provided throughout the property and free private parking is available on site.');
        $hotelSamara9->setDescription('Located in Samara, Hotel Moya Glinka features a spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is provided throughout the property and free private parking is available on site.
        The rooms are fitted with a flat-screen TV. Extras include free toiletries and a hairdryer. You will find a 24-hour front desk at the property. The nearest airport is Kurumoch International Airport, 13 km from the property.');
        $hotelSamara9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelSamara9Slug = $slug->slugify($hotelSamara9->getName());
        $hotelSamara9->setSlug($hotelSamara9Slug);
        $hotelSamara9->setAddress('Krasnaya Glinka, Vtoroy kvartal, 35, 443048 Samara, Russia');
        $hotelSamara9->setCity($samara);

        $manager->persist($hotelSamara9);

        // City Fixtures
        $samara->setName('Samara');
        $slug = new Slugify();
        $samaraSlug = $slug->slugify($samara->getName());
        $samara->setSlug($samaraSlug);
        $samara->setDescription('Samara is the sixth largest city in Russia. It is the administrative center of Samara Oblast. About 1,164,685 people live in the city. It is on the east bank of the Volga. Samara is the economic and cultural center in European Russian. They hosted the European Union–Russia summit in May 2007. From 1935 to 1991 the city was known as Kuybyshev.');

        $samara->addHotel($hotelSamara1);
        $samara->addHotel($hotelSamara2);
        $samara->addHotel($hotelSamara3);
        $samara->addHotel($hotelSamara4);
        $samara->addHotel($hotelSamara5);
        $samara->addHotel($hotelSamara6);
        $samara->addHotel($hotelSamara7);
        $samara->addHotel($hotelSamara8);
        $samara->addHotel($hotelSamara9);

        $samara->addRestaurant($restaurantSamara1);
        $samara->addRestaurant($restaurantSamara2);
        $samara->addRestaurant($restaurantSamara3);

        $manager->persist($samara);

        $manager->flush();
    }
}
