<?php
namespace AppBundle\Repository;
use Doctrine\ORM\EntityRepository;
class RestaurantRepository extends EntityRepository
{
    public function FindByCity($city)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT restaurant, city FROM AppBundle:Restaurant restaurant
            JOIN restaurant.city city
            WHERE city.id = :id'
            )->setParameter('id', $city->getId())
            ->getResult();
    }
}
