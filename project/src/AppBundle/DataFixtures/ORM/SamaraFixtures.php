<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Game;
use AppBundle\Entity\Restaurant;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\DateTime;
use Cocur\Slugify\Slugify;

class SamaraFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $restaurantSamara1 = new Restaurant();
        $restaurantSamara1->setPhone('+7 846 332-22-60');
        $restaurantSamara1->setName('Restaurant-museum Staraya Kvartira');
        $restaurantSamara1->setImage('/images/restaurants/Samara/samara-kvartira.jpg');
        $restaurantSamara1->setCuisine('European, Russian');
        $restaurantSamara1->setGoodfor('Business meetings, Families with children, Kids');
        $restaurantSamara1->setPrice('€4 - €14');

        $slug = new Slugify();
        $restaurantSamara1Slug = $slug->slugify($restaurantSamara1->getName());
        $restaurantSamara1->setSlug($restaurantSamara1Slug);
        $restaurantSamara1->setAddress('Samarskaya, 51, Samara 443020, Russia');
        $restaurantSamara1->setCity($Samara);

        $manager->persist($restaurantSamara1);


        $restaurantSamara2 = new Restaurant();
        $restaurantSamara2->setPhone('+7 846 989-33-32');
        $restaurantSamara2->setName('Cafe Puri');
        $restaurantSamara2->setImage('/images/restaurants/Samara/samara-puri.jpg');
        $restaurantSamara2->setCuisine('Georgian, Cafe, Vegetarian Friendly');
        $restaurantSamara2->setGoodfor('Romantic, Families with children, Kids, Business meetings, Special occasions');
        $restaurantSamara2->setPrice('€3 - €36');

        $slug = new Slugify();
        $restaurantSamara2Slug = $slug->slugify($restaurantSamara2->getName());
        $restaurantSamara2->setSlug($restaurantSamara2Slug);
        $restaurantSamara2->setAddress('Kuibysheva St., 79, Samara 443099, Russia');
        $restaurantSamara2->setCity($Samara);

        $manager->persist($restaurantSamara2);

        $restaurantSamara3 = new Restaurant();
        $restaurantSamara3->setPhone('+7 846 313-00-00');
        $restaurantSamara3->setName('Churchill\'s Bar');
        $restaurantSamara3->setImage('/images/restaurants/Samara/samara-churchill.jpg');
        $restaurantSamara3->setCuisine('European, British, Central European, Grill, Vegetarian Friendly');
        $restaurantSamara3->setGoodfor('Business meetings, Families with children, Kids, Special occasions, Romantic, Large groups');
        $restaurantSamara3->setPrice('€10 - €36');

        $slug = new Slugify();
        $restaurantSamara3Slug = $slug->slugify($restaurantSamara3->getName());
        $restaurantSamara3->setSlug($restaurantSamara3Slug);
        $restaurantSamara3->setAddress('Lenin avenue, 14, Samara 443110, Russia');
        $restaurantSamara3->setCity($Samara);

        $manager->persist($restaurantSamara3);
        $manager->flush();
    }
}
