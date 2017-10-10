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

class HotelController extends Controller
{
    /**
     * @Route("/hotel/{id}", name="hotel_show")
     */
    public function showAction($id)
    {

        $serializer = $this->container->get('jms_serializer');


        $hotel = $this->getDoctrine()->getRepository(Hotel::class)->findOneById($id);
        $jsonContentHotel = $serializer->serialize($hotel, 'json');

        return new Response($jsonContentHotel);


    }
}