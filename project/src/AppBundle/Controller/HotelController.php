<?php

namespace AppBundle\Controller;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Hotel;
use AppBundle\Entity\Restaurant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Cocur\Slugify\Slugify;

class HotelController extends Controller
{
    /**
     * @Route("/city/{slug_parent}/hotel/{slug_child}", name="hotel_show")
     */
    public function showAction($slug_parent, $slug_child)
    {

        $serializer = $this->container->get('jms_serializer');


        $hotel = $this->getDoctrine()->getRepository(City::class)->findOneByName($slug_parent)->leftjoin();
        $jsonContentHotel = $serializer->serialize($hotel, 'json');

        return new Response($jsonContentHotel);


    }
}