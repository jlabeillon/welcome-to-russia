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

class RostovFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $restaurantRostov1 = new Restaurant();
        $restaurantRostov1->setPhone('+7 863 244-16-11');
        $restaurantRostov1->setName('Smetana');
        $restaurantRostov1->setImage('/images/restaurants/Rostov/rostov-smetana.jpg');
        $restaurantRostov1->setCuisine('European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantRostov1->setGoodfor('Business meetings, Families with children, Kids, Local cuisine, Large groups');
        $restaurantRostov1->setPrice('€5 - €15');

        $slug = new Slugify();
        $restaurantRostov1Slug = $slug->slugify($restaurantRostov1->getName());
        $restaurantRostov1->setSlug($restaurantRostov1Slug);
        $restaurantRostov1->setAddress('Bolshaya Sadovaya St., 80, Rostov-on-Don 344002, Russia');
        $restaurantRostov1->setCity($Rostov);

        $manager->persist($restaurantRostov1);


        $restaurantRostov2 = new Restaurant();
        $restaurantRostov2->setPhone('+7 863 201-80-00');
        $restaurantRostov2->setName('Onegin Dacha');
        $restaurantRostov2->setImage('/images/restaurants/Rostov/rostov-onegin.jpg');
        $restaurantRostov2->setCuisine('Seafood, European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantRostov2->setGoodfor('Romantic, Kids, Special occasions, Large groups, Local cuisine, Business meetings, Families with children');
        $restaurantRostov2->setPrice('€5 - €40');

        $slug = new Slugify();
        $restaurantRostov2Slug = $slug->slugify($restaurantRostov2->getName());
        $restaurantRostov2->setSlug($restaurantRostov2Slug);
        $restaurantRostov2->setAddress('Chekhova ave, 45B, Rostov-on-Don, Russia');
        $restaurantRostov2->setCity($Rostov);

        $manager->persist($restaurantRostov2);

        $restaurantRostov3 = new Restaurant();
        $restaurantRostov3->setPhone('+7 863 221-12-95');
        $restaurantRostov3->setName('Cow Bar & Restaurant');
        $restaurantRostov3->setImage('/images/restaurants/Rostov/rostov-cow.jpg');
        $restaurantRostov3->setCuisine('Bar, Barbecue, European, Grill');
        $restaurantRostov3->setGoodfor('Bar scene, Business meetings, Families with children, Special occasions, Local cuisine, Large groups');
        $restaurantRostov3->setPrice('€10 - €22');

        $slug = new Slugify();
        $restaurantRostov3Slug = $slug->slugify($restaurantRostov3->getName());
        $restaurantRostov3->setSlug($restaurantRostov3Slug);
        $restaurantRostov3->setAddress('Gazetny Ln., 84, Rostov-on-Don 344038, Russia');
        $restaurantRostov3->setCity($Rostov);

        $manager->persist($restaurantRostov3);
        $manager->flush();
    }
}
