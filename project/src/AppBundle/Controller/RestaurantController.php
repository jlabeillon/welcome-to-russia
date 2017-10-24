<?php

namespace AppBundle\Controller;

use AppBundle\Entity\City;
use AppBundle\Entity\Restaurant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Repository\RestaurantRepository;


class RestaurantController extends Controller
{

    /**
     * @Route("/json/restaurant/all", name="restaurant_all")
     */
    public function allAction()
    {

        $serializer = $this->container->get('jms_serializer');
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();
        $jsonContent = $serializer->serialize($restaurant, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;    }

    /**
     * @Route("/json/restaurant/{id}", name="restaurant_show")
     */
    public function showAction($id)
    {

        $serializer = $this->container->get('jms_serializer');
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->findOneById($id);
        $jsonContent = $serializer->serialize($restaurant, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }

    /**
     * @Route("json/restaurant/by/city/{id}", name="restaurant_by_city")
     */
    public function byCityAction($id)
    {

        $serializer = $this->container->get('jms_serializer');

        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->findByCity($id);
        $jsonContent = $serializer->serialize($restaurant, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }

}