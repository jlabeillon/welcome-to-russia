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
        $hotel1->setName('');
        $hotel1->setShortdescription('');
        $hotel1->setDescription('');
        $hotel1->setCategory('');
        $hotel1->setAddress('');
        $hotel1->setEmail('');
        $slug = new Slugify();
        $hotel1Slug = $slug->slugify($hotel1->getName());
        $hotel1->setSlug($hotel1Slug);
        $hotel1->setCity($city);
        $manager->persist($hotel1);

        $hotel2 = new Hotel();
        $hotel2->setName('');
        $hotel2->setShortdescription('');
        $hotel2->setDescription('');
        $hotel2->setCategory('');
        $hotel2->setAddress('');
        $hotel2->setEmail('');
        $slug = new Slugify();
        $hotel2Slug = $slug->slugify($hotel2->getName());
        $hotel2->setSlug($hotel2Slug);
        $hotel2->setCity($city);
        $manager->persist($hotel2);

        $hotel3 = new Hotel();
        $hotel3->setName('');
        $hotel3->setShortdescription('');
        $hotel3->setDescription('');
        $hotel3->setCategory('');
        $hotel3->setAddress('');
        $hotel3->setEmail('');
        $slug = new Slugify();
        $hotel3Slug = $slug->slugify($hotel3->getName());
        $hotel3->setSlug($hotel3Slug);
        $hotel3->setCity($city);
        $manager->persist($hotel3);

        $hotel4 = new Hotel();
        $hotel4->setName('');
        $hotel4->setShortdescription('');
        $hotel4->setDescription(' ');
        $hotel4->setCategory('');
        $hotel4->setAddress('');
        $hotel4->setEmail('');
        $slug = new Slugify();
        $hotel4Slug = $slug->slugify($hotel4->getName());
        $hotel4->setSlug($hotel4Slug);
        $hotel4->setCity($city);
        $manager->persist($hotel4);

        $hotel5 = new Hotel();
        $hotel5->setName('');
        $hotel5->setShortdescription('');
        $hotel5->setDescription('');
        $hotel5->setCategory('');
        $hotel5->setAddress('');
        $hotel5->setEmail('');
        $slug = new Slugify();
        $hotel5Slug = $slug->slugify($hotel5->getName());
        $hotel5->setSlug($hotel5Slug);
        $hotel5->setCity($city);
        $manager->persist($hotel5);

        $hotel6 = new Hotel();
        $hotel6->setName('');
        $hotel6->setShortdescription('');
        $hotel6->setDescription(' ');
        $hotel6->setCategory('');
        $hotel6->setAddress('');
        $hotel6->setEmail('');
        $slug = new Slugify();
        $hotel6Slug = $slug->slugify($hotel6->getName());
        $hotel6->setSlug($hotel6Slug);
        $hotel6->setCity($city);
        $manager->persist($hotel6);

        $hotel7 = new Hotel();
        $hotel7->setName('');
        $hotel7->setShortdescription('');
        $hotel7->setDescription('');
        $hotel7->setCategory('');
        $hotel7->setAddress('');
        $hotel7->setEmail('');
        $slug = new Slugify();
        $hotel7Slug = $slug->slugify($hotel7->getName());
        $hotel7->setSlug($hotel7Slug);
        $hotel7->setCity($city);
        $manager->persist($hotel7);

        $hotel8 = new Hotel();
        $hotel8->setName('');
        $hotel8->setShortdescription('');
        $hotel8->setDescription('');
        $hotel8->setCategory('');
        $hotel8->setAddress('');
        $hotel8->setEmail('');
        $slug = new Slugify();
        $hotel8Slug = $slug->slugify($hotel8->getName());
        $hotel8->setSlug($hotel8Slug);
        $hotel8->setCity($city);
        $manager->persist($hotel8);

        $hotel9 = new Hotel();
        $hotel9->setName('');
        $hotel9->setShortdescription('');
        $hotel9->setDescription('');
        $hotel9->setCategory('');
        $hotel9->setAddress('');
        $hotel9->setEmail('');
        $slug = new Slugify();
        $hotel9Slug = $slug->slugify($hotel9->getName());
        $hotel9->setSlug($hotel9Slug);
        $hotel9->setCity($city);
        $manager->persist($hotel9);
        ####################################################################################################################







        #Restaurant Fixtures
        ####################################################################################################################
        $restaurant1 = new Restaurant();
        $restaurant1->setPhone('');
        $restaurant1->setName('');
        $restaurant1->setCuisine('');
        $restaurant1->setGoodfor('');
        $restaurant1->setPrice('');
        $slug = new Slugify();
        $restaurant1Slug = $slug->slugify($restaurant1->getName());
        $restaurant1->setSlug($restaurant1Slug);
        $restaurant1->setAddress('');
        $restaurant1->setCity($city);
        $manager->persist($restaurant1);

        $restaurant2 = new Restaurant();
        $restaurant2->setPhone('');
        $restaurant2->setName('');
        $restaurant2->setCuisine('');
        $restaurant2->setGoodfor('');
        $restaurant2->setPrice('');
        $slug = new Slugify();
        $restaurant2Slug = $slug->slugify($restaurant2->getName());
        $restaurant2->setSlug($restaurant2Slug);
        $restaurant2->setAddress('');
        $restaurant2->setCity($city);
        $manager->persist($restaurant2);

        $restaurant3 = new Restaurant();
        $restaurant3->setName('');
        $restaurant3->setAddress('');
        $restaurant3->setCuisine('');
        $restaurant3->setPrice('');
        $restaurant3->setGoodfor('');
        $restaurant3->setPhone('');
        $slug = new Slugify();
        $restaurant3Slug = $slug->slugify($restaurant3->getName());
        $restaurant3->setSlug($restaurant3Slug);
        $restaurant3->setCity($city);
        $manager->persist($restaurant3);
        ####################################################################################################################






        #City Fixtures
        ####################################################################################################################
        $city->setName('');
        $slug = new Slugify();
        $citySlug = $slug->slugify($city->getName());
        $city->setSlug($citySlug);
        $city->setDescription('');
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
