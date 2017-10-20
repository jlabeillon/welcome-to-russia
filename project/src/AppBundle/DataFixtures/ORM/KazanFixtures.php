<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Cocur\Slugify\Slugify;


class KazanFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $city = New City();
        $manager->persist($city);
        ####################################################################################################################







        #Hotel Fixtures
        ####################################################################################################################
        $hotel1 = new Hotel();
        $hotel1->setName('Berison Moskovskaya');
        $hotel1->setShortdescription('Berison Moskovskaya is located in the centre of Kazan, on the bank of Lake Kaban. The Kazan Kremlin is 2 km away. Free WiFi access is available.');
        $hotel1->setDescription('erison Moskovskaya is located in the centre of Kazan, on the bank of Lake Kaban. The Kazan Kremlin is 2 km away. Free WiFi access is available.
Each room here will provide you with air conditioning and cable TV. Featuring a shower, private bathroom also comes with free toiletries.
At Berison Moskovskaya you will find a 24-hour front desk. A variety of cafés and restaurants can be found within a 5-minute walk of the hotel.
Ploshchad Tukaya Metro Station is 500 m away. Kazan Central Train Station is 1.5 km from the hotel, and Kazan International Airport is 25 km away.');
        $hotel1->setCategory('Eco');
        $hotel1->setAddress('ul. Parizhskoy Kommuny, 13, Kazan, Respublika Tatarstan, Russia, 420021');
        $hotel1->setEmail('booking@berison-hotel.ru');
        $slug = new Slugify();
        $hotel1Slug = $slug->slugify($hotel1->getName());
        $hotel1->setSlug($hotel1Slug);
        $hotel1->setCity($city);
        $manager->persist($hotel1);

        $hotel2 = new Hotel();
        $hotel2->setName('Berison Kamala');
        $hotel2->setShortdescription('Set in Kazan, 800 m from Marcani Mosque, Berison Kamala features free WiFi. The air-conditioned rooms have a flat-screen TV. Every room includes a private bathroom equipped with a shower.');
        $hotel2->setDescription('Set in Kazan, 800 m from Marcani Mosque, Berison Kamala features free WiFi.
The air-conditioned rooms have a flat-screen TV. Every room includes a private bathroom equipped with a shower. You will find a 24-hour front desk at the property.
Kazan State University is 900 m from Berison Kamala, while Peter and Paul Cathedral is 900 m from the property. The nearest airport is Kazan International Airport, 23 km from the property.');
        $hotel2->setCategory('Eco');
        $hotel2->setAddress('ul. Galiaskara Kamala, 5, Kazan, Respublika Tatarstan, Russia, 420111');
        $hotel2->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel2Slug = $slug->slugify($hotel2->getName());
        $hotel2->setSlug($hotel2Slug);
        $hotel2->setCity($city);
        $manager->persist($hotel2);

        $hotel3 = new Hotel();
        $hotel3->setName('Gvardeiskaya Hotel');
        $hotel3->setShortdescription('Located 3 km from the large Koltso shopping mall, this hotel in South-East Kazan offers a 24-hour reception, and rooms feature refrigerators and free toiletries. Individually furnished rooms and suites await you at the Gvardeiskaya Hotel. Each room has a living area with desk and TV.');
        $hotel3->setDescription('Located 3 km from the large Koltso shopping mall, this hotel in South-East Kazan offers a 24-hour reception, and rooms feature refrigerators and free toiletries. Individually furnished rooms and suites await you at the Gvardeiskaya Hotel. Each room has a living area with desk and TV.
Gvardeiskaya’s café-bar is open all day, and serves a range of international meals. Packed lunches can be prepared on request.
The Ulitsa Adelya Kutuya Tram Stop is 100 m from Hotel Gvardeiskaya, and Omet’evo Train Station is 1 km away.');
        $hotel3->setCategory('Eco');
        $hotel3->setAddress('ul. Gvardeyskaya, 35, Kazan, Respublika Tatarstan, Russia, 420073');
        $hotel3->setEmail('gvardeyskaya@slavhotels.ru');
        $slug = new Slugify();
        $hotel3Slug = $slug->slugify($hotel3->getName());
        $hotel3->setSlug($hotel3Slug);
        $hotel3->setCity($city);
        $manager->persist($hotel3);

        $hotel4 = new Hotel();
        $hotel4->setName('Don Kikhot Hotel');
        $hotel4->setShortdescription('Offering a fitness centre, Don Kikhot Hotel is located in the centre of Kazan, just a 5-minute walk from Kazan Central Train Station and a 15-minute walk from the Kremlin. Free WiFi access is available.');
        $hotel4->setDescription('Offering a fitness centre, Don Kikhot Hotel is located in the centre of Kazan, just a 5-minute walk from Kazan Central Train Station and a 15-minute walk from the Kremlin. Free WiFi access is available.
Each elegant room here will provide you with a flat-screen TV, air conditioning and a minibar. Featuring a hairdryer, private bathroom also comes with free toiletries and slippers. Extras include cable channels.
At Don Kikhot Hotel you will find a 24-hour front desk. The on-site restaurant serves Tatar, Russian and Spanish cuisine. The property offers free parking. Kazan International Airport is a 30-minute drive away.');
        $hotel4->setCategory('Authentic');
        $hotel4->setAddress('ul. Burkhana Shakhidi, 11/16, Kazan, Respublika Tatarstan, Russia, 420111');
        $hotel4->setEmail('booking@donquixote-kazan.com');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($city);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('Hotel Sapozhok-Kaushchi');
        $hotel5->setShortdescription('Set in Kazan, 200 m from Marcani Mosque, Kaushchi features air-conditioned rooms.The rooms have a flat-screen TV. Kaushchi features free WiFi throughout the property. You will find a 24-hour front desk at the property.');
        $hotel5->setDescription('Set in Kazan, 200 m from Marcani Mosque, Kaushchi features air-conditioned rooms. The rooms have a flat-screen TV. Kaushchi features free WiFi throughout the property. You will find a 24-hour front desk at the property.
Church of the Exaltation of the Holy Cross is 800 m from Kaushchi, while Kazan State University is 1.4 km away. Kazan International Airport is 22 km from the property.');
        $hotel5->setCategory('Authentic');
        $hotel5->setAddress('ul. Fatykha Karima, 7, Kazan, Respublika Tatarstan, Russia, 420021');
        $hotel5->setEmail('kaushotel@yandex.ru');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($city);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('Tatarskaya Usadba');
        $hotel6->setShortdescription('ocated a 2-minute walk from Al-Mardzhani Mosque on the bank of Nizhny Kaban Lake in Kazan, Tatarskaya Usadba offers free WiFi. All rooms are air conditioned and come with cable TV and a minibar. A private bathroom includes free toiletries.');
        $hotel6->setDescription('One of our top picks in Kazan. Located a 2-minute walk from Al-Mardzhani Mosque on the bank of Nizhny Kaban Lake in Kazan, Tatarskaya Usadba offers free WiFi. All rooms are air conditioned and come with cable TV and a minibar. A private bathroom includes free toiletries. Guests can dine in the hotel’s own restaurant that features traditional Tatar dishes baked in an old Bulgarian wood oven. The local vinotheque provides a variety of wine types.
A gallery of folk craft with local crafted goods is available on site. Kol Sharif Mosque and Kazan Kremlin are 2 km from the property. Kazan Train Station is 1.5 km away, and Kazan International Airport is 25 km from Tatarskaya Usadba.');
        $hotel6->setCategory('Authentic');
        $hotel6->setAddress('ul. Marjani, 8, Kazan, Respublika Tatarstan, Russia, 420022');
        $hotel6->setEmail('tatusadba@mail.ru');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($city);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('DoubleTree by Hilton Kazan City Center');
        $hotel7->setShortdescription('Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.');
        $hotel7->setDescription('Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.
All light and airy rooms offer air conditioning, an electric kettle, minibar, tea/coffee facilities and flat-screen TV with satellite channels. The bathrooms provide a hairdryer. For extra space and city views, select a suite with a separate living area and two bathrooms. Some rooms also offer views of the Saints Peter and Paul Cathedral.
European, Russian and Tatar cuisines are served in the hotel’s restaurant. The restaurant also offers breakfast and 24-hour room service. At the end of the day unwind at the lobby bar with a wide selection of wine, whisky and cocktails. Business travellers will appreciate a meeting room for up to 60 guests.');
        $hotel7->setCategory('Luxury');
        $hotel7->setAddress('ul. Chernyshevskogo, 21, Kazan, Respublika Tatarstan, Russia, 420111');
        $hotel7->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($city);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('Shalyapin Palace Hotel');
        $hotel8->setShortdescription('The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street. The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.');
        $hotel8->setDescription('The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street. The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.
Every morning a rich buffet breakfast is servied in the on-site restaurant. Guests can also enjoy delicious Tatar and Russian cuisine in the Capella Restaurant, which also serves a range of European dishes. The Shalyapins Piano Bar is open 24-hours.
All guests of the Shalyapin Palace receive complimentary access to the fitness centre with its indoor swimming pool, gym and sauna. The hotel offers business meeting facilities of different capacity. There is also an on site car parking, available upon request to hotel guests.');
        $hotel8->setCategory('Luxury');
        $hotel8->setAddress('ul. Universitetskaya, 7, Kazan, Respublika Tatarstan, Russia, 420111');
        $hotel8->setEmail('reservation@shph.ru');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($city);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('Spa Complex Premium Luciano');
        $hotel9->setShortdescription('This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.');
        $hotel9->setDescription('This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.
Spa Complex Premium Luciano offers air-conditioned rooms with a flat-screen TV, free WiFi, safe, free minibar and bathrobes, free toiletries and slippers in the bathroom. They feature a peaceful green colour scheme, soft lighting and wooden floors. Guests are granted unlimited access to the spa and fitness centre.
Italian and European cuisine is offered at 2 Luciano’s restaurants, where a continental breakfast is also provided. After dinner, guests can relax in 3 stylish bars or play billiards.
The luxurious wellness area includes a spa bath and Turkish steam room. A range of beauty treatments and massages are available in the hotel’s beauty salon and spa centre.');
        $hotel9->setCategory('Luxury');
        $hotel9->setAddress('Ostrovskogo Street 26 - Kazan, Kazan, Respublika Tatarstan, Russia, 420111');
        $hotel9->setEmail('email@address.fake');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($city);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('+7 987 225-04-33');
        $restaurant1->setName('Tatarskaya Usadba');
        $restaurant1->setCuisine('Russian, European, Delicatessen, Grill, Vegetarian Friendly, Halal');
        $restaurant1->setGoodfor('Scenic view, Kids, Business meetings, Families with children, Large groups, Local cuisine, Special occasions, Romantic');
        $restaurant1->setPrice('€4 - €22');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('Shigabutdina Mardzhani, 8, Kazan 420021, Russia');
        $restaurant1->setCity($city);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('+7 843 236-74-33');
        $restaurant2->setName('Malabar');
        $restaurant2->setCuisine('European, Russian, Indian, Vegetarian Friendly, Vegan Options, Gluten Free Options');
        $restaurant2->setGoodfor('Business meetings, Special occasions, Large groups, Romantic, Kids, Families with children');
        $restaurant2->setPrice('€14 - €29');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('Malaya Krasnaya St., 13, Kazan 420015, Russia');
        $restaurant2->setCity($city);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('TOP HOP');
        $restaurant3->setAddress('Baumana St., 36, Kazan, Russia');
        $restaurant3->setCuisine('American, European, Bar, Pub, Vegetarian Friendly');
        $restaurant3->setPrice('€3 - €11');
        $restaurant3->setGoodfor('Large groups, Bar scene');
        $restaurant3->setPhone('+7 987 226-36-63');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($city);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $city->setName('Kazan');
        $slug = new Slugify();
        $citySlug = $slug->slugify($city->getName());
        $city->setSlug($citySlug);
        $city->setDescription('Kazan is the capital and largest city of the Republic of Tatarstan, Russia. With a population of 1,143,535, it is the eighth most populous city in Russia. Kazan lies at the confluence of the Volga and Kazanka Rivers in European Russia. The Kazan Kremlin is a World Heritage Site. Kazan is one of the largest industrial and financial centers of Russia, and a leading city of the Volga economic region in construction and accumulated investment. City\'s Gross Regional Product had reached 380 billion rubles in 2011. Kazan now is one of the most developed cities in Russia in terms of sport. The city has hosted two Bandy World Championships, in 2005 and 2011, the World Summer Universiade 2013, the World Championship in fencing in 2014, the Aquatics Championship FINA 2015, 2017 FIFA Confederations Cup and other international competitions of various levels. In the future the city will hold the 2018 FIFA World Cup.');
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
