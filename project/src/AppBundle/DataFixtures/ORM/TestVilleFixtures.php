namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class Fixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // create 20 products! Bam!
        for ($i = 0; $i < 20; $i++) {
            $City = new City();
            $City->setName('City '.$i);
            $City->setDescription('City '.$i);
            $City->setImage('City '.$i);
            $City->addHotel('City '.$i);
            $City->addRestaurant('City '.$i);
            $City->addFanZone('City '.$i);
            $City->addMatch('City '.$i);

            $manager->persist($City);
        }

        $manager->flush();
    }
}
