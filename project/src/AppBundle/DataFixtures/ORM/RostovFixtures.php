<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class RostovFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // restaurant 1
        $restaurantRostov1 = new Restaurant();
        $restaurantRostov1->setPhone('+7 863 244-16-11');
        $restaurantRostov1->setName('Smetana');
        $restaurantRostov1->setCuisine('European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantRostov1->setGoodfor('Business meetings, Families with children, Kids, Local cuisine, Large groups');
        $restaurantRostov1->setPrice('€5 - €15');

        $slug = new Slugify();
        $restaurantRostov1Slug = $slug->slugify($restaurantRostov1->getName());
        $restaurantRostov1->setSlug($restaurantRostov1Slug);
        $restaurantRostov1->setAddress('Bolshaya Sadovaya St., 80, Rostov-on-Don 344002, Russia');
        $restaurantRostov1->setCity($rostov);

        $manager->persist($restaurantRostov1);

        // restaurant 2
        $restaurantRostov2 = new Restaurant();
        $restaurantRostov2->setPhone('+7 863 201-80-00');
        $restaurantRostov2->setName('Onegin Dacha');
        $restaurantRostov2->setCuisine('Seafood, European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantRostov2->setGoodfor('Romantic, Kids, Special occasions, Large groups, Local cuisine, Business meetings, Families with children');
        $restaurantRostov2->setPrice('€5 - €40');

        $slug = new Slugify();
        $restaurantRostov2Slug = $slug->slugify($restaurantRostov2->getName());
        $restaurantRostov2->setSlug($restaurantRostov2Slug);
        $restaurantRostov2->setAddress('Chekhova ave, 45B, Rostov-on-Don, Russia');
        $restaurantRostov2->setCity($rostov);

        $manager->persist($restaurantRostov2);

        // restaurant 3
        $restaurantRostov3 = new Restaurant();
        $restaurantRostov3->setPhone('+7 863 221-12-95');
        $restaurantRostov3->setName('Cow Bar & Restaurant');
        $restaurantRostov3->setCuisine('Bar, Barbecue, European, Grill');
        $restaurantRostov3->setGoodfor('Bar scene, Business meetings, Families with children, Special occasions, Local cuisine, Large groups');
        $restaurantRostov3->setPrice('€10 - €22');

        $slug = new Slugify();
        $restaurantRostov3Slug = $slug->slugify($restaurantRostov3->getName());
        $restaurantRostov3->setSlug($restaurantRostov3Slug);
        $restaurantRostov3->setAddress('Gazetny Ln., 84, Rostov-on-Don 344038, Russia');
        $restaurantRostov3->setCity($rostov);

        $manager->persist($restaurantRostov3);

        // hotel 1
        $hotelRostov1 = new Hotel();
        $hotelRostov1->setName('Don Hotel');
        $hotelRostov1->setEmail('email@address.fake');
        $hotelRostov1->setShortdescription('This hotel is located in the western residential area, a 15-minute drive from the centre of Rostov-on-Don. Hotel Don offers free Wi-Fi and modern rooms with a flat-screen TV.');
        $hotelRostov1->setDescription('This hotel is located in the western residential area, a 15-minute drive from the centre of Rostov-on-Don. Hotel Don offers free Wi-Fi and modern rooms with a flat-screen TV. Rooms at Hotel Don feature classic design and air conditioning. All rooms include a refrigerator and a private bathroom with shower.
        Guests can find many shops and restaurants within a 10-minute walk. The 24-hour reception can also order food for guests. Hotel Don offers free parking, and shuttle services can be arranged. It is a 15-minute drive from Rostov-on-Don’s train station, bus station and ferry port. Rostov-on-Don Airport is a 30-minute drive away.');
        $hotelRostov1->setCategory('Eco');

        $slug = new Slugify();
        $hotelRostov1Slug = $slug->slugify($hotelRostov1->getName());
        $hotelRostov1->setSlug($hotelRostov1Slug);
        $hotelRostov1->setAddress('ul. Malinovskogo, 50Г, Rostov, Rostovskaya oblast, Russia, 344000');
        $hotelRostov1->setCity($rostov);

        $manager->persist($hotelRostov1);

        // hotel 2
        $hotelRostov2 = new Hotel();
        $hotelRostov2->setName('Dobroslawa Apart Hotel');
        $hotelRostov2->setEmail('dobroslawa-hotel@mail.ru');
        $hotelRostov2->setShortdescription('This property is 7 minutes walk from the beach. Featuring free Wi-Fi, a kitchen and 24-hour reception, this aparthotel is located in the South-Western suburb of Rostov-on-Don city, 200 m from the Don River Embankmet.');
        $hotelRostov2->setDescription('This property is 7 minutes walk from the beach. Featuring free Wi-Fi, a kitchen and 24-hour reception, this aparthotel is located in the South-Western suburb of Rostov-on-Don city, 200 m from the Don River Embankmet.
        Each apartment at Dobroslawa ApartHotel is decorated in neutral colours and includes a flat-screen TV. Bathrooms are fitted with a hairdryer. All apartments feature a fully equipped kitchen, which comes complete with a fridge, microwave and kettle. There is also a stove and dining area.
        Uritskogo bus stop is 10 minutes’ walk from Dobroslawa ApartHotel, offering access to Rostov-on-Don city centre and city’s main shopping malls. The Preopolovensky Cathedral is 700 m from the property.');
        $hotelRostov2->setCategory('Eco');

        $slug = new Slugify();
        $hotelRostov2Slug = $slug->slugify($hotelRostov2->getName());
        $hotelRostov2->setSlug($hotelRostov2Slug);
        $hotelRostov2->setAddress('ul. Vsesoyuznaya, 83a, Rostov, Rostovskaya oblast, Russia, 344033');
        $hotelRostov2->setCity($rostov);

        $manager->persist($hotelRostov2);

        // hotel 3
        $hotelRostov3 = new Hotel();
        $hotelRostov3->setName('Alfa');
        $hotelRostov3->setEmail('email@address.fake');
        $hotelRostov3->setShortdescription('Free Wi-Fi and paid private parking are provided at Alfa Hotel is located in the western suburbs of Rostov-on-Don city. Zolotoy Vavilon Shopping Mall and Fortuna 1 Car Market are 2 km away.');
        $hotelRostov3->setDescription('Free Wi-Fi and paid private parking are provided at Alfa Hotel is located in the western suburbs of Rostov-on-Don city. Zolotoy Vavilon Shopping Mall and Fortuna 1 Car Market are 2 km away. Each room at Alfa includes classic-style interiors and air conditioning. Rostov-on-Don city centre with Train Station are 8 km from Alfa Hotel, and Rostov Airport is 19 km.');
        $hotelRostov3->setCategory('Eco');

        $slug = new Slugify();
        $hotelRostov3Slug = $slug->slugify($hotelRostov3->getName());
        $hotelRostov3->setSlug($hotelRostov3Slug);
        $hotelRostov3->setAddress('Pravovaya Street 78, 344000 Rostov on Don, Russia');
        $hotelRostov3->setCity($rostov);

        $manager->persist($hotelRostov3);

        // hotel 4
        $hotelRostov4 = new Hotel();
        $hotelRostov4->setName('Nabokov Loft-Hotel');
        $hotelRostov4->setEmail('nabokovhotel@gmail.com');
        $hotelRostov4->setShortdescription('Offering free WiFi, Loft-Hotel Nabokov is located in in Rostov-on-Don. All rooms are air conditioned and come with either private or shared bathrooms.');
        $hotelRostov4->setDescription('Offering free WiFi, Loft-Hotel Nabokov is located in in Rostov-on-Don. All rooms are air conditioned and come with either private or shared bathrooms. Guests can cook in the shared kitchen and there is a 24-hour front desk at the property. Rostov-on-Don Train and Bus Station is 3 km away. The nearest airport is Rostov-on-Don Airport, 7 km from the property.');
        $hotelRostov4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelRostov4Slug = $slug->slugify($hotelRostov4->getName());
        $hotelRostov4->setSlug($hotelRostov4Slug);
        $hotelRostov4->setAddress('Gazetnyy per., 99, Rostov, Rostovskaya oblast, Russia, 344002');
        $hotelRostov4->setCity($rostov);

        $manager->persist($hotelRostov4);

        // hotel 5
        $hotelRostov5 = new Hotel();
        $hotelRostov5->setName('Hotel Legenda');
        $hotelRostov5->setEmail('bron@hotel-legend.ru');
        $hotelRostov5->setShortdescription('Hotel Legenda offers accommodation in Rostov on Don. Free WiFi is provided throughout the property and free private parking is available on site.');
        $hotelRostov5->setDescription('Hotel Legenda offers accommodation in Rostov on Don. Free WiFi is provided throughout the property and free private parking is available on site.
        All rooms include a flat-screen TV. Certain units include a seating area to relax in after a busy day. Each room is equipped with a private bathroom equipped with a shower. For your comfort, you will find bathrobes, slippers and free toiletries.
        Rostov Arena is 7 km from Hotel Legenda, while Olimp-2 Stadium is 5 km from the property. The nearest airport is Rostov on Don Airport, 2 km from Hotel Legenda. This property also has one of the best-rated locations in Rostov on Don! Guests are happier about it compared to other properties in the area.');
        $hotelRostov5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelRostov5Slug = $slug->slugify($hotelRostov5->getName());
        $hotelRostov5->setSlug($hotelRostov5Slug);
        $hotelRostov5->setAddress('prosp. 40-Letiya Pobedy, 256, Rostov-on-Don, Rostovskaya oblast, Russia, 344072');
        $hotelRostov5->setCity($rostov);

        $manager->persist($hotelRostov5);

        // hotel 6
        $hotelRostov6 = new Hotel();
        $hotelRostov6->setName('Hotel Petrovsky Prichal Luxury Hotel&SPA');
        $hotelRostov6->setEmail('hotel@pp1696.ru');
        $hotelRostov6->setShortdescription('Offering an indoor pool and a spa and wellness centre, Hotel Petrovsky Prichal Luxury Hotel&SPA is located in Rostov-on-Don, on the edge of the river. The luxury-style hotel features a restaurant, a terrace and a garden.');
        $hotelRostov6->setDescription('Offering an indoor pool and a spa and wellness centre, Hotel Petrovsky Prichal Luxury Hotel&SPA is located in Rostov-on-Don, on the edge of the river. The luxury-style hotel features a restaurant, a terrace and a garden.
        All of the en suite rooms feature a garden and river view. Most of the rooms are decorated in gold. They all include a flat-screen TV with satellite channels, free WiFi and a minibar.
        Tea/coffee facilities are also available in each accommodation. Guests can sample a drink at the bar and the continental breakfast or groceries can be delivered to the comfort of your room.
        At Hotel Petrovsky Prichal Luxury Hotel&SPA you will find a fitness centre. Other facilities offered at the property include meeting facilities, a shared lounge and a games room. Rostov- on-Don Airport is 21 km away and Rostov-on-Don Train Station is 7 km from the hotel.');
        $hotelRostov6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelRostov6Slug = $slug->slugify($hotelRostov6->getName());
        $hotelRostov6->setSlug($hotelRostov6Slug);
        $hotelRostov6->setAddress('Levoberezhnaya ul., 45г, Rostov, Rostovskaya oblast, Russia, 344002');
        $hotelRostov6->setCity($rostov);

        $manager->persist($hotelRostov6);

        // hotel 7
        $hotelRostov7 = new Hotel();
        $hotelRostov7->setName('Residentsiya (Izvolte) Hotel');
        $hotelRostov7->setEmail('booking@residencehotel.ru');
        $hotelRostov7->setShortdescription('Get the celebrity treatment with world-class service at Residentsiya (Izvolte) Hotel. One of our top picks in Rostov on Don. This hotel is situated in the historic building in the centre of Rostov. Hotel Residence features stylish rooms with free WiFi. It has a fitness centre, spa with massage services and wellness centre.');
        $hotelRostov7->setDescription('This hotel is situated in the historic building in the centre of Rostov. Hotel Residence features stylish rooms with free WiFi. It has a fitness centre, spa with massage services and wellness centre A flat-screen TV and a seating area with a sofa are included in each air-conditioned room. The bathrooms feature free free toiletries. A buffet breakfast is served daily. Guests can dine on Russian and European cuisine in the restaurant. Guests can also order dishes in the room.
        Guests can visit a fitness centre with modern state-of-the-art equipment free of charge. The spa centre is available at a special rate. The conference hall seating up to 100 people is also at guests’ service. Hotel Residence is centrally located, only 400 m from the National History Museum and 200 m from the Gorkogo Theatre. Ideal for a day trip is the Sea of Azov, 46 km away. A shuttle service is available upon request which takes guests too to the airport or local train station.');
        $hotelRostov7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelRostov7Slug = $slug->slugify($hotelRostov7->getName());
        $hotelRostov7->setSlug($hotelRostov7Slug);
        $hotelRostov7->setAddress('ul. Suvorova, 25, Rostov, Rostovskaya oblast, Russia, 344000');
        $hotelRostov7->setCity($rostov);

        $manager->persist($hotelRostov7);

        // hotel 8
        $hotelRostov8 = new Hotel();
        $hotelRostov8->setName('Grand Hotel Soho');
        $hotelRostov8->setEmail('email@address.fake');
        $hotelRostov8->setShortdescription('Grand Hotel Soho offers accommodation in Azov. Guests can enjoy the on-site restaurant. Free WiFi is offered throughout the property and free private parking is available on site.');
        $hotelRostov8->setDescription('Grand Hotel Soho offers accommodation in Azov. Guests can enjoy the on-site restaurant. Free WiFi is offered throughout the property and free private parking is available on site.
        Each room at this hotel is air conditioned and features a flat-screen TV with cable channels. Certain rooms include views of the river or city. Each room is equipped with a private bathroom equipped with a bath. Extras include bath robes and slippers. You will find a 24-hour front desk at the property.
        Rostov on Don is 24 km from Grand Hotel Soho, while Taganrog is 41 km away. The nearest airport is Rostov on Don Airport, 33 km from Grand Hotel Soho.
        This property also has one of the best-rated locations in Azov! Guests are happier about it compared to other properties in the area.');
        $hotelRostov8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelRostov8Slug = $slug->slugify($hotelRostov8->getName());
        $hotelRostov8->setSlug($hotelRostov8Slug);
        $hotelRostov8->setAddress('ul. Dzerzhinskogo, 6, Azov, Rostovskaya oblast, Russia, 346780');
        $hotelRostov8->setCity($rostov);

        $manager->persist($hotelRostov8);

        // hotel 9
        $hotelRostov9 = new Hotel();
        $hotelRostov9->setName('Mercure Rostov-On-Don Center');
        $hotelRostov9->setEmail('h8508@accor.com');
        $hotelRostov9->setShortdescription('Located a 7-minute walk from the Don River embankment, Mercure Rostov-On-Don Center features a sauna and a fitness centre. Free WiFi is available on site.');
        $hotelRostov9->setDescription('Located a 7-minute walk from the Don River embankment, Mercure Rostov-On-Don Center features a sauna and a fitness centre. Free WiFi is available on site. The rooms offer air conditioning, an electric kettle and a flat-screen TV with satellite channels. Guests can dine in D’Ajemoff Restaurant serving traditional Russian and French cuisine, or order room service and breakfasts in the room.
        Pushkinskaya Alleya is a 5-minute walk away, and Bolshaya Sadovaya Street is 100 m from the hotel. Rostov-on-Don Train Station is 3.5 km away, and Rostov-on-Don Airport is 9 km from Mercure Rostov-On-Don Center. This is our guests’ favourite part of Rostov on Don, according to independent reviews.');
        $hotelRostov9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelRostov9Slug = $slug->slugify($hotelRostov9->getName());
        $hotelRostov9->setSlug($hotelRostov9Slug);
        $hotelRostov9->setAddress('Voroshilovsky prospekt 35/107, Rostov-on-Don, Russia, 344002');
        $hotelRostov9->setCity($rostov);

        $manager->persist($hotelRostov9);

        // City Fixtures
        $rostov->setName('Rostov');
        $slug = new Slugify();
        $rostovSlug = $slug->slugify($rostov->getName());
        $rostov->setSlug($rostovSlug);
        $rostov->setDescription('Rostov is one of the oldest towns in Russia. It was first mentioned in the year 862 as an already important town. By the 13th century Rostov became the capital of an important area. Now it is an important tourist centre of the so called Golden ring. It is located on the shores of Lake Nero in Yaroslavl Oblast.While the official name of the town is Rostov, it is better known to Russians as Rostov Veliky, i.e. Rostov the Great.');

        $rostov->addHotel($hotelRostov1);
        $rostov->addHotel($hotelRostov2);
        $rostov->addHotel($hotelRostov3);
        $rostov->addHotel($hotelRostov4);
        $rostov->addHotel($hotelRostov5);
        $rostov->addHotel($hotelRostov6);
        $rostov->addHotel($hotelRostov7);
        $rostov->addHotel($hotelRostov8);
        $rostov->addHotel($hotelRostov9);

        $rostov->addRestaurant($restaurantRostov1);
        $rostov->addRestaurant($restaurantRostov2);
        $rostov->addRestaurant($restaurantRostov3);

        $manager->persist($rostov);

        $manager->flush();
    }
}
