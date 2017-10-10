<?php

namespace AppBundle\Controller;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Restaurant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function homePageAction(Request $request)
    {

        $serializer = $this->container->get('jms_serializer');
        $cities = $this->getDoctrine()->getRepository(City::class)->findAll();
        $jsonContent = $serializer->serialize($cities, 'json');

        return new Response($jsonContent);


    }
}
