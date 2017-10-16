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
use AppBundle\Repository\HotelRepository;

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

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }

    /**
     * @Route("json/hotel/{slug}", name="hotel_show")
     */
    public function showAction($slug)
    {

        $serializer = $this->container->get('jms_serializer');
        $hotel = $this->getDoctrine()->getRepository(Hotel::class)->findOneBySlug($slug);
        $jsonContent = $serializer->serialize($hotel, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }

    /**
     * @Route("json/hotel/by/city/{id}", name="hotel_by_city")
     */
    public function byCityAction($id)
    {

        $serializer = $this->container->get('jms_serializer');

        $hotel = $this->getDoctrine()->getRepository(Hotel::class)->findByCity($id);
        $jsonContent = $serializer->serialize($hotel, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }
}