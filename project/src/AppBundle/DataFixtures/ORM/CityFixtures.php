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

class CityFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
            $date = new \DateTime('');

            $city = new City();
            $manager->persist($city);

            $hotel = new Hotel();
            $hotel->setName('Hotel');
            $hotel->setDescription('Hotel');
            $hotel->setImage('Hotel');
            $hotel->setAddress('Hotel');
            $hotel->setCategory('Hotel');
            $hotel->setEmail('Hotel');
            $hotel->setPhone('0555555555');
            $hotel->setCity($city);

            $manager->persist($hotel);

            $restaurant = new Restaurant();
            $restaurant->setPhone('0555555555');
            $restaurant->setEmail('Resto');
            $restaurant->setDescription('Resto');
            $restaurant->setName('Resto');
            $restaurant->setAddress('Resto');
            $restaurant->setCity($city);

            $manager->persist($restaurant);


            $fanzone = new FanZone();
            $fanzone->setName('Fan');
            $fanzone->setImage('Fan');
            $fanzone->setCapacity(8000);
            $fanzone->setLocalization('Fan');
            $fanzone->setCity($city);

            $manager->persist($fanzone);

            $game = new Game();
            $game->setDate($date);
            $game->setTeam('Game');
            $game->setCity($city);
            $game->setHour(18);

            $manager->persist($game);


            $city->setName('City');
            $city->setDescription('City');
            $city->setImage('City');
            $city->addHotel($hotel);
            $city->addRestaurant($restaurant);
            $city->addFanZone($fanzone);
            $city->addGame($game);

            $manager->persist($city);


        $manager->flush();
    }
}
?>
