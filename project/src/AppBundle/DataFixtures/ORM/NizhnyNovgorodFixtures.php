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

class NizhnyNovgorodFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $restaurantNizhnyNovgorod1 = new Restaurant();
        $restaurantNizhnyNovgorod1->setPhone('+7 831 213-80-82');
        $restaurantNizhnyNovgorod1->setName('Pelmennaya Lepi Testo');
        $restaurantNizhnyNovgorod1->setImage('/images/restaurants/Novgorod/novgorod-testo.jpg');
        $restaurantNizhnyNovgorod1->setCuisine('Russian, Vegetarian Friendly');
        $restaurantNizhnyNovgorod1->setGoodfor('Local cuisine, Large groups, Families with children');
        $restaurantNizhnyNovgorod1->setPrice('€6');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod1Slug = $slug->slugify($restaurantNizhnyNovgorod1->getName());
        $restaurantNizhnyNovgorod1->setSlug($restaurantNizhnyNovgorod1Slug);
        $restaurantNizhnyNovgorod1->setAddress('Minina St., 12 & Bolshaya Pokrovskaya st, 47, Nizhny Novgorod 603005, Russia');
        $restaurantNizhnyNovgorod1->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod1);


        $restaurantNizhnyNovgorod2 = new Restaurant();
        $restaurantNizhnyNovgorod2->setPhone('+7 831 433-69-34');
        $restaurantNizhnyNovgorod2->setName('Biblioteka');
        $restaurantNizhnyNovgorod2->setImage('/images/restaurants/Novgorod/novgorod-biblioteka.jpg');
        $restaurantNizhnyNovgorod2->setCuisine('Italian, European, Vegetarian Friendly, Vegan Option');
        $restaurantNizhnyNovgorod2->setGoodfor('Large groups, Families with children, Kids, Romantic');
        $restaurantNizhnyNovgorod2->setPrice('€14');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod2Slug = $slug->slugify($restaurantNizhnyNovgorod2->getName());
        $restaurantNizhnyNovgorod2->setSlug($restaurantNizhnyNovgorod2Slug);
        $restaurantNizhnyNovgorod2->setAddress('Biblioteka ul. Bolshaya Pokrovskaya 46, Nizhny Novgorod 603000, Russia');
        $restaurantNizhnyNovgorod2->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod2);

        $restaurantNizhnyNovgorod3 = new Restaurant();
        $restaurantNizhnyNovgorod3->setPhone('+7 401 291-91-81');
        $restaurantNizhnyNovgorod3->setName('Angliyskoye Posolstvo');
        $restaurantNizhnyNovgorod3->setImage('/images/restaurants/Novgorod/novgorod-posolstvo.jpg');
        $restaurantNizhnyNovgorod3->setCuisine('Irish, Bar, European, British, Pub, Central European');
        $restaurantNizhnyNovgorod3->setGoodfor('Kids, Large groups, Bar scene, Business meetings');
        $restaurantNizhnyNovgorod3->setPrice('€8 - €14');

        $slug = new Slugify();
        $restaurantNizhnyNovgorod3Slug = $slug->slugify($restaurantNizhnyNovgorod3->getName());
        $restaurantNizhnyNovgorod3->setSlug($restaurantNizhnyNovgorod3Slug);
        $restaurantNizhnyNovgorod3->setAddress('Angliyskoye Posolstvo ul. Zvezdinka 12, Nizhny Novgorod 603000, Russia');
        $restaurantNizhnyNovgorod3->setCity($nizhnyNovgorod);

        $manager->persist($restaurantNizhnyNovgorod3);
        $manager->flush();
    }
}
