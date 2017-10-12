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

class FanZoneController extends Controller
{

    /**
     * @Route("/json/fanzone/all", name="fanzone_all")
     */
    public function allAction()
    {

        $serializer = $this->container->get('jms_serializer');
        $fanzone = $this->getDoctrine()->getRepository(FanZone::class)->findAll();
        $jsonContent = $serializer->serialize($fanzone, 'json');

        return new Response($jsonContent);
    }

    /**
     * @Route("/json/fanzone/{id}", name="fanzone_show")
     */
    public function showAction($id)
    {

        $serializer = $this->container->get('jms_serializer');
        $fanzone = $this->getDoctrine()->getRepository(FanZone::class)->findOneById($id);
        $jsonContent = $serializer->serialize($fanzone, 'json');

        return new Response($jsonContent);


    }
}