<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;

class VolgogradFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $volgograd = New City();
        $manager->persist($volgograd);
        // restaurant 1
        $restaurantVolgograd1 = new Restaurant();
        $restaurantVolgograd1->setPhone('+7 844 294-40-24');
        $restaurantVolgograd1->setName('Knyagininskiy Dvor');
        $restaurantVolgograd1->setCuisine('European, Russian, Central European');
        $restaurantVolgograd1->setGoodfor('Kids, Special occasions, Local cuisine, Families with children, Business meetings, Large groups, Romantic');
        $restaurantVolgograd1->setPrice('€5 - €20');

        $slug = new Slugify();
        $restaurantVolgograd1Slug = $slug->slugify($restaurantVolgograd1->getName());
        $restaurantVolgograd1->setSlug($restaurantVolgograd1Slug);
        $restaurantVolgograd1->setAddress('Akademicheskaya, 8, Volgograd 400001, Russia');
        $restaurantVolgograd1->setCity($volgograd);

        $manager->persist($restaurantVolgograd1);

        // restaurant 2
        $restaurantVolgograd2 = new Restaurant();
        $restaurantVolgograd2->setPhone('+7 844 252-35-33');
        $restaurantVolgograd2->setName('Harat\'s Irish Pub');
        $restaurantVolgograd2->setCuisine('Bar, European, Pub, Brew Pub, Grill, Vegetarian Friendly');
        $restaurantVolgograd2->setGoodfor('Large groups, Bar scene');
        $restaurantVolgograd2->setPrice('€3 - €25');

        $slug = new Slugify();
        $restaurantVolgograd2Slug = $slug->slugify($restaurantVolgograd2->getName());
        $restaurantVolgograd2->setSlug($restaurantVolgograd2Slug);
        $restaurantVolgograd2->setAddress('Kommunisticheskaya St., 6D, Volgograd 400131, Russia');
        $restaurantVolgograd2->setCity($volgograd);

        $manager->persist($restaurantVolgograd2);

        // restaurant 3
        $restaurantVolgograd3 = new Restaurant();
        $restaurantVolgograd3->setPhone('+7 844 238-32-07');
        $restaurantVolgograd3->setName('Nosorog');
        $restaurantVolgograd3->setCuisine('Central European');
        $restaurantVolgograd3->setGoodfor('Business meetings, Special occasions, Large groups, Romantic, Kids, Families with children');
        $restaurantVolgograd3->setPrice('€14 - €22');

        $slug = new Slugify();
        $restaurantVolgograd3Slug = $slug->slugify($restaurantVolgograd3->getName());
        $restaurantVolgograd3->setSlug($restaurantVolgograd3Slug);
        $restaurantVolgograd3->setAddress('Mira St., 20, Volgograd 400131, Russia');
        $restaurantVolgograd3->setCity($volgograd);

        $manager->persist($restaurantVolgograd3);

        // hotel 1
        $hotelVolgograd1 = new Hotel();
        $hotelVolgograd1->setName('Guest House Lambert');
        $hotelVolgograd1->setEmail('email@address.fake');
        $hotelVolgograd1->setShortdescription('Set in Volgograd, 2.4 km from Mamayev Kurgan, Mini-Hotel Lambert features a barbecue and views of the garden. Free WiFi is available throughout the property and free private parking is available on site.');
        $hotelVolgograd1->setDescription('Set in Volgograd, 2.4 km from Mamayev Kurgan, Mini-Hotel Lambert features a barbecue and views of the garden. Free WiFi is available throughout the property and free private parking is available on site. A terrace or balcony are featured in certain rooms. Superior rooms feature a spa bath or a hot tub. A flat-screen TV is featured.');
        $hotelVolgograd1->setCategory('Eco');

        $slug = new Slugify();
        $hotelVolgograd1Slug = $slug->slugify($hotelVolgograd1->getName());
        $hotelVolgograd1->setSlug($hotelVolgograd1Slug);
        $hotelVolgograd1->setCity($volgograd);

        $manager->persist($hotelVolgograd1);

        // hotel 2
        $hotelVolgograd2 = new Hotel();
        $hotelVolgograd2->setName('Kani');
        $hotelVolgograd2->setEmail('email@address.fake');
        $hotelVolgograd2->setShortdescription('Offering a sauna and hammam, Kani is located in Volgograd in the Volgograd Region Region, 5 km from River Port.');
        $hotelVolgograd2->setDescription('Offering a sauna and hammam, Kani is located in Volgograd in the Volgograd Region Region, 5 km from River Port.
        The rooms come with a flat-screen TV. Certain rooms have a seating area where you can relax. You will find a kettle in the room. For your comfort, you will find slippers, free toiletries and a hairdryer. Kani features free WiFi throughout the property.
        There is a 24-hour front desk at the property.
        Motherland Monument is 6 km from Kani, while Volgograd Arena is 6 km from the property. The nearest airport is Volgograd International Airport, 11 km from Kani.');
        $hotelVolgograd2->setCategory('Eco');

        $slug = new Slugify();
        $hotelVolgograd2Slug = $slug->slugify($hotelVolgograd2->getName());
        $hotelVolgograd2->setSlug($hotelVolgograd2Slug);
        $hotelVolgograd2->setCity($volgograd);

        $manager->persist($hotelVolgograd2);

        // hotel 3
        $hotelVolgograd3 = new Hotel();
        $hotelVolgograd3->setName('Ram Hotel');
        $hotelVolgograd3->setEmail('email@address.fake');
        $hotelVolgograd3->setShortdescription('Featuring free WiFi throughout the property, Ram Hotel offers accommodation in Volgograd, 24 km from River Port. Free private parking is available on site.');
        $hotelVolgograd3->setDescription('Featuring free WiFi throughout the property, Ram Hotel offers accommodation in Volgograd, 24 km from River Port. Free private parking is available on site. Each room is equipped with a flat-screen TV with cable channels. You will find a kettle in the room. Each room has a private bathroom equipped with a bath or shower.
        Volgograd Arena is 27 km from Ram Hotel, while Motherland Monument is 28 km from the property. The nearest airport is Volgograd International Airport, 38 km from Ram Hotel.');
        $hotelVolgograd3->setCategory('Eco');

        $slug = new Slugify();
        $hotelVolgograd3Slug = $slug->slugify($hotelVolgograd3->getName());
        $hotelVolgograd3->setSlug($hotelVolgograd3Slug);
        $hotelVolgograd3->setCity($volgograd);

        $manager->persist($hotelVolgograd3);

        // hotel 4
        $hotelVolgograd4 = new Hotel();
        $hotelVolgograd4->setName('Zamok Hotel');
        $hotelVolgograd4->setEmail('email@address.fake');
        $hotelVolgograd4->setShortdescription('Zamok Hotel is located a 7-minute drive from Mamaev Kurgan in Volgograd. The hotel features a sauna, free Wi-Fi and free private parking.');
        $hotelVolgograd4->setDescription('Zamok Hotel is located a 7-minute drive from Mamaev Kurgan in Volgograd. The hotel features a sauna, free Wi-Fi and free private parking.
        Featuring classic style interiors, the rooms come with a TV and air conditioning. The bathroom include free toiletries.
        Guests are welcome to visit the on-site restaurant, which serves European, Caucasian and Japanese cuisine.');
        $hotelVolgograd4->setCategory('Authentic');

        $slug = new Slugify();
        $hotelVolgograd4Slug = $slug->slugify($hotelVolgograd4->getName());
        $hotelVolgograd4->setSlug($hotelVolgograd4Slug);
        $hotelVolgograd4->setCity($volgograd);

        $manager->persist($hotelVolgograd4);

        // hotel 5
        $hotelVolgograd5 = new Hotel();
        $hotelVolgograd5->setName('Plaza Hotel');
        $hotelVolgograd5->setEmail('email@address.fake');
        $hotelVolgograd5->setShortdescription('Featuring free Wi-Fi and a sauna, Plaza Hotel is located 5 minutes’ walk from the Kazan Cathedral in Volgograd city. It offers a fitness centre and rooms with air conditioning.');
        $hotelVolgograd5->setDescription('Featuring free Wi-Fi and a sauna, Plaza Hotel is located 5 minutes’ walk from the Kazan Cathedral in Volgograd city. It offers a fitness centre and rooms with air conditioning.
        Relaxation at Plaza is provided by the sauna, and a massage service is offered on request. Active guests can work out in the fitness centre. Each room at the hotel includes classic-style décor and a flat-screen TV, as well as a fridge. Bathrooms come with a shower. Snacks and drinks are offered at Plaza\'s bar, and Voroshilovsky Shopping Centre with cafes is 10 minutes\' walk away.');
        $hotelVolgograd5->setCategory('Authentic');

        $slug = new Slugify();
        $hotelVolgograd5Slug = $slug->slugify($hotelVolgograd5->getName());
        $hotelVolgograd5->setSlug($hotelVolgograd5Slug);
        $hotelVolgograd5->setCity($volgograd);

        $manager->persist($hotelVolgograd5);

        // hotel 6
        $hotelVolgograd6 = new Hotel();
        $hotelVolgograd6->setName('Tsaritsinskaya Sloboda');
        $hotelVolgograd6->setEmail('email@address.fake');
        $hotelVolgograd6->setShortdescription('Featuring a spa centre with a sauna and outdoor swimming pool, Tsaritsinskaya Sloboda is located in natural surroundings in Volgograd, a 10-minute drive to the city centre. It also offers a large garden with BBQ facilities. Free Wi-Fi and parking are available.');
        $hotelVolgograd6->setDescription('Featuring a spa centre with a sauna and outdoor swimming pool, Tsaritsinskaya Sloboda is located in natural surroundings in Volgograd, a 10-minute drive to the city centre. It also offers a large garden with BBQ facilities. Free Wi-Fi and parking are available.
        The comfortable rooms are air conditioned and come with a flat-screen satellite TV and fridge. The private bathrooms feature a shower or bath, hairdryer and free toiletries. All cottages are made from ecological materials. The restaurant at Tsaritsinskaya Sloboda serves Russian and European cuisine. It features live music. The hotel has a horse riding club.');
        $hotelVolgograd6->setCategory('Authentic');

        $slug = new Slugify();
        $hotelVolgograd6Slug = $slug->slugify($hotelVolgograd6->getName());
        $hotelVolgograd6->setSlug($hotelVolgograd6Slug);
        $hotelVolgograd6->setCity($volgograd);

        $manager->persist($hotelVolgograd6);

        // hotel 7
        $hotelVolgograd7 = new Hotel();
        $hotelVolgograd7->setName('Hampton by Hilton Volgograd Profsoyuznaya');
        $hotelVolgograd7->setEmail('email@address.fake');
        $hotelVolgograd7->setShortdescription('Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.');
        $hotelVolgograd7->setDescription('Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.
        All bright, air-conditioned rooms come with a flat-screen TV, a safety deposit box and a kettle. Free toiletries, ironing facilities and a hairdryer are available. The on-site restaurant serves various Russian and European dishes. Also it is possible to have a drink or a snack at the bar. Fitness center is free for guests and is open 24/7.
        The Mamaev Kurgan Memorial is 7 km from Hampton by Hilton Volgograd Profsoyuznaya, and Volgograd Central Station is 3 km away. The distance to Volgograd International Airport is 20 km.');
        $hotelVolgograd7->setCategory('Luxury');

        $slug = new Slugify();
        $hotelVolgograd7Slug = $slug->slugify($hotelVolgograd7->getName());
        $hotelVolgograd7->setSlug($hotelVolgograd7Slug);
        $hotelVolgograd7->setCity($volgograd);

        $manager->persist($hotelVolgograd7);

        // hotel 8
        $hotelVolgograd8 = new Hotel();
        $hotelVolgograd8->setName('Hampton by Hilton Volgograd Profsoyuznaya');
        $hotelVolgograd8->setEmail('email@address.fake');
        $hotelVolgograd8->setShortdescription('Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.');
        $hotelVolgograd8->setDescription('Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.
        All bright, air-conditioned rooms come with a flat-screen TV, a safety deposit box and a kettle. Free toiletries, ironing facilities and a hairdryer are available. The on-site restaurant serves various Russian and European dishes. Also it is possible to have a drink or a snack at the bar. Fitness center is free for guests and is open 24/7.
        The Mamaev Kurgan Memorial is 7 km from Hampton by Hilton Volgograd Profsoyuznaya, and Volgograd Central Station is 3 km away. The distance to Volgograd International Airport is 20 km.');
        $hotelVolgograd8->setCategory('Luxury');

        $slug = new Slugify();
        $hotelVolgograd8Slug = $slug->slugify($hotelVolgograd8->getName());
        $hotelVolgograd8->setSlug($hotelVolgograd8Slug);
        $hotelVolgograd8->setCity($volgograd);

        $manager->persist($hotelVolgograd8);

        // hotel 9
        $hotelVolgograd9 = new Hotel();
        $hotelVolgograd9->setName('Hotel Volgograd');
        $hotelVolgograd9->setEmail('email@address.fake');
        $hotelVolgograd9->setShortdescription('Located in the centre of Volgograd, a 5-minute walk to Komsomolskaya Metro Station, Hotel Volgograd offers a fitness centre and business facilities. Free WiFi is available. Guests can order a meal in the 24-hour on-site restaurant serving dishes of European and Russian cuisine.');
        $hotelVolgograd9->setDescription('Located in the centre of Volgograd, a 5-minute walk to Komsomolskaya Metro Station, Hotel Volgograd offers a fitness centre and business facilities. Free WiFi is available. Guests can order a meal in the 24-hour on-site restaurant serving dishes of European and Russian cuisine.
        The comfortable rooms offer air conditioning, a flat-screen TV, minibar and private bathroom with a shower or bath, hairdryer and free toiletries. Various cafes and restaurants are situated within a 5-minute walk. The Battle for Stalingrad Museum is 1.5 km away. The Mamayev Kurgan Memorial is 5 metro stops away. Free parking is available.');
        $hotelVolgograd9->setCategory('Luxury');

        $slug = new Slugify();
        $hotelVolgograd9Slug = $slug->slugify($hotelVolgograd9->getName());
        $hotelVolgograd9->setSlug($hotelVolgograd9Slug);
        $hotelVolgograd9->setCity($volgograd);

        $manager->persist($hotelVolgograd9);

        // City Fixtures
        $volgograd->setName('Volgograd');
        $slug = new Slugify();
        $volgogradSlug = $slug->slugify($volgograd->getName());
        $volgograd->setSlug($volgogradSlug);
        $volgograd->setDescription('Volgograd formerly called Tsaritsyn (1589–1925) and Stalingrad (1925–1961) is an important industrial city and the administrative center of Volgograd Oblast, Russia. It is 80 km long, north to south, on the western bank of the Volga River and has a population of 1.011 millon people. The city was made famous for its heroic resistance and extensive damage during the Battle of Stalingrad during World War II.');
        $volgograd->addHotel($hotelVolgograd1);
        $volgograd->addHotel($hotelVolgograd2);
        $volgograd->addHotel($hotelVolgograd3);
        $volgograd->addHotel($hotelVolgograd4);
        $volgograd->addHotel($hotelVolgograd5);
        $volgograd->addHotel($hotelVolgograd6);
        $volgograd->addHotel($hotelVolgograd7);
        $volgograd->addHotel($hotelVolgograd8);
        $volgograd->addHotel($hotelVolgograd9);

        $volgograd->addRestaurant($restaurantVolgograd1);
        $volgograd->addRestaurant($restaurantVolgograd2);
        $volgograd->addRestaurant($restaurantVolgograd3);
        $manager->persist($volgograd);

        $manager->flush();
    }
}
