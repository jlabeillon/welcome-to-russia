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

class KaliningradFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $restaurantKaliningrad1 = new Restaurant();
        $restaurantKaliningrad1->setPhone('+7 401 235-76-76');
        $restaurantKaliningrad1->setName('Borsch & Salo');
        $restaurantKaliningrad1->setImage('/images/restaurants/Kaliningrad/kaliningrad-salo.jpg');
        $restaurantKaliningrad1->setCuisine('European, Russian, Central European, Vegetarian Friendly, Vegan Options');
        $restaurantKaliningrad1->setGoodfor('Business meetings, Families with children, Kids, Local cuisine, Large groups');
        $restaurantKaliningrad1->setPrice('€2 - €8');

        $slug = new Slugify();
        $restaurantKaliningrad1Slug = $slug->slugify($restaurantKaliningrad1->getName());
        $restaurantKaliningrad1->setSlug($restaurantKaliningrad1Slug);
        $restaurantKaliningrad1->setAddress('Pobedy Sq., 10, Kaliningrad 236010, Russia');
        $restaurantKaliningrad1->setCity($Kaliningrad);

        $manager->persist($restaurantKaliningrad1);


        $restaurantKaliningrad2 = new Restaurant();
        $restaurantKaliningrad2->setPhone('+7 401 230-00-30');
        $restaurantKaliningrad2->setName('Britannica');
        $restaurantKaliningrad2->setImage('/images/restaurants/Kaliningrad/kaliningrad-britanika.jpg');
        $restaurantKaliningrad2->setCuisine('German, Bar, European, Pub, Russian, Eastern European, Central European, Fusion, Vegetarian Friendly');
        $restaurantKaliningrad2->setGoodfor('Bar scene, Business meetings, Families with children, Large groups, Special occasions, Local cuisine');
        $restaurantKaliningrad2->setPrice('€2 - €25');

        $slug = new Slugify();
        $restaurantKaliningrad2Slug = $slug->slugify($restaurantKaliningrad2->getName());
        $restaurantKaliningrad2->setSlug($restaurantKaliningrad2Slug);
        $restaurantKaliningrad2->setAddress('Gor\'kogo ul., 2, Kaliningrad 236029, Russia');
        $restaurantKaliningrad2->setCity($Kaliningrad);

        $manager->persist($restaurantKaliningrad2);

        $restaurantKaliningrad3 = new Restaurant();
        $restaurantKaliningrad3->setPhone('+7 401 291-91-81');
        $restaurantKaliningrad3->setName('Zotler Bier');
        $restaurantKaliningrad3->setImage('/images/restaurants/Kaliningrad/kaliningrad-zotler.jpg');
        $restaurantKaliningrad3->setCuisine('German, Brew Pub, Bar, European, Soups, Central European, Vegetarian Friendly');
        $restaurantKaliningrad3->setGoodfor('Large groups, Business meetings, Families with children, Special occasions, Local cuisine, Bar scene');
        $restaurantKaliningrad3->setPrice('€2 - €15');

        $slug = new Slugify();
        $restaurantKaliningrad3Slug = $slug->slugify($restaurantKaliningrad3->getName());
        $restaurantKaliningrad3->setSlug($restaurantKaliningrad3Slug);
        $restaurantKaliningrad3->setAddress('Leninskiy Ave., 3, Kaliningrad 236006, Russia');
        $restaurantKaliningrad3->setCity($Kaliningrad);

        $manager->persist($restaurantKaliningrad3);
        $manager->flush();
    }
}
