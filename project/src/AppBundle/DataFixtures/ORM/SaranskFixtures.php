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

class SaranskFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $restaurantSaransk1 = new Restaurant();
        $restaurantSaransk1->setPhone('+7 834 236-36-36');
        $restaurantSaransk1->setName('Mordovskoe Podvorye');
        $restaurantSaransk1->setImage('/images/restaurants/Saransk/saransk-podvorye.jpg');
        $restaurantSaransk1->setCuisine('Russian');
        $restaurantSaransk1->setGoodfor('Families with children, Business meetings, Large groups');
        $restaurantSaransk1->setPrice('€5 - €30');

        $slug = new Slugify();
        $restaurantSaransk1Slug = $slug->slugify($restaurantSaransk1->getName());
        $restaurantSaransk1->setSlug($restaurantSaransk1Slug);
        $restaurantSaransk1->setAddress('Saranskaya St., 21, Saransk 430005, Russia');
        $restaurantSaransk1->setCity($Saransk);

        $manager->persist($restaurantSaransk1);


        $restaurantSaransk2 = new Restaurant();
        $restaurantSaransk2->setPhone('+7 834 236-00-29');
        $restaurantSaransk2->setName('Kaban&Bryukva');
        $restaurantSaransk2->setImage('/images/restaurants/Saransk/saransk-kaban.jpg');
        $restaurantSaransk2->setCuisine('European');
        $restaurantSaransk2->setGoodfor('Special occasions, Kids, Large groups, Families with children, Local cuisine');
        $restaurantSaransk2->setPrice('€2 - €21');

        $slug = new Slugify();
        $restaurantSaransk2Slug = $slug->slugify($restaurantSaransk2->getName());
        $restaurantSaransk2->setSlug($restaurantSaransk2Slug);
        $restaurantSaransk2->setAddress('Lenina Ave., 29, Saransk 430000, Russia');
        $restaurantSaransk2->setCity($Saransk);

        $manager->persist($restaurantSaransk2);

        $restaurantSaransk3 = new Restaurant();
        $restaurantSaransk3->setPhone('+7 844 238-32-07');
        $restaurantSaransk3->setName('Baron Munchhausen');
        $restaurantSaransk3->setImage('/images/restaurants/Saransk/saransk-baron.jpg');
        $restaurantSaransk3->setCuisine('European');
        $restaurantSaransk3->setGoodfor('Business meetings, Special occasions, Large groups, Romantic, Kids, Families with children');
        $restaurantSaransk3->setPrice('€2 - €18');

        $slug = new Slugify();
        $restaurantSaransk3Slug = $slug->slugify($restaurantSaransk3->getName());
        $restaurantSaransk3->setSlug($restaurantSaransk3Slug);
        $restaurantSaransk3->setAddress('Kommunisticheskaya St., 35, Saransk, Russia');
        $restaurantSaransk3->setCity($Saransk);

        $manager->persist($restaurantSaransk3);
        $manager->flush();
    }
}
