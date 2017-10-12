<?php

namespace AppBundle\Controller;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Restaurant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class CityController extends Controller
{

    /**
     * @Route("/json/city/all", name="city_all")
     */
    public function allAction()
    {

        $serializer = $this->container->get('jms_serializer');
        $city = $this->getDoctrine()->getRepository(City::class)->findAll();
        $jsonContent = $serializer->serialize($city, 'json');

        return new Response($jsonContent);
    }

    /**
     * @Route("/json/city/{slug}", name="city_show")
     */
    public function showAction($slug)
    {

        $serializer = $this->container->get('jms_serializer');
        $city = $this->getDoctrine()->getRepository(City::class)->findOneBySlug($slug);
        $jsonContent = $serializer->serialize($city, 'json');

        return new Response($jsonContent);


    }
}
