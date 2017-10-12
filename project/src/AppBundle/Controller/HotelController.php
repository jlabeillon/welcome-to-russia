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
     * @Route("/json/hotel/all/", name="hotel_all")
     */
    public function allAction()
    {

        $serializer = $this->container->get('jms_serializer');


        $hotel = $this->getDoctrine()->getRepository(Hotel::class)->findAll();
        $jsonContent = $serializer->serialize($hotel, 'json');

        return new Response($jsonContent);

    }

    /**
     * @Route("json/hotel/{id}", name="hotel_show")
     */
    public function showAction($id)
    {

        $serializer = $this->container->get('jms_serializer');
        $hotel = $this->getDoctrine()->getRepository(Hotel::class)->findOneById($id);
        $jsonContent = $serializer->serialize($hotel, 'json');

        return new Response($jsonContent);


    }

    /**
     * @Route("json/hotel/by/{slug}", name="hotel_by_city")
     */
    public function byCityAction($slug)
    {

        $serializer = $this->container->get('jms_serializer');

        $hotel = $this->getDoctrine()->getRepository(Hotel::class);
        $jsonContent = $serializer->serialize($hotel, 'json');

        return new Response($jsonContent);


    }
}