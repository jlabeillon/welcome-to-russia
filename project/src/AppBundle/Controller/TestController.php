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

class TestController extends Controller
{

    /**
     * @Route("/testcity", name="testcity_show")
     */
    public function testCityAction()
    {



        $serializer = $this->container->get('jms_serializer');
        $citytest = $this->getDoctrine()->getRepository(City::class)->find(1);
        $jsonContent = $serializer->serialize($citytest, 'json');


        return new Response($jsonContent);

    }

}