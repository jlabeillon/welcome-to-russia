<?php
namespace AppBundle\Repository;
use Doctrine\ORM\EntityRepository;
class GameRepository extends EntityRepository
{
    public function FindByCity($city)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT game, city FROM AppBundle:Game game
            JOIN game.city city
            WHERE city.id = :id'
            )->setParameter('id', $city->getId())
            ->getResult();
    }

}
