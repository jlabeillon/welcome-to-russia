<?php
namespace AppBundle\Repository;
use Doctrine\ORM\EntityRepository;
class HotelRepository extends EntityRepository
{
    public function FindByCity($city)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT hotel, city FROM AppBundle:Hotel hotel
            JOIN hotel.city city
            WHERE city.id = :id'
            )->setParameter('id', $city->getId())
            ->getResult();
    }
}
