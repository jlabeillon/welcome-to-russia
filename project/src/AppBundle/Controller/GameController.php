<?php

namespace AppBundle\Controller;

use AppBundle\Entity\City;
use AppBundle\Entity\FanZone;
use AppBundle\Entity\Restaurant;
use AppBundle\Entity\Game;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class GameController extends Controller
{

    /**
     * @Route("/json/game/all", name="game_all")
     */
    public function allAction()
    {

        $serializer = $this->container->get('jms_serializer');
        $game = $this->getDoctrine()->getRepository(Game::class)->findAll();
        $jsonContent = $serializer->serialize($game, 'json');

        return new Response($jsonContent);
    }

    /**
     * @Route("/json/game/{id}", name="game_show")
     */
    public function showAction($id)
    {

        $serializer = $this->container->get('jms_serializer');
        $game = $this->getDoctrine()->getRepository(Game::class)->findOneById($id);
        $jsonContent = $serializer->serialize($game, 'json');

        return new Response($jsonContent);


    }
}