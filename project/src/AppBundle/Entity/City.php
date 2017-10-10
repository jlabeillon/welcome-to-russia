<?php
namespace AppBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Cocur\Slugify\Slugify;

/**
 * @ORM\Entity
 * @ORM\Table(name="city")
 */
class City
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $slug;

    /**
     * @ORM\Column(type="text")
     */
    private $description;


    /**
     * @ORM\Column(type="string")
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity="Hotel", mappedBy="city")
     */
    protected $hotel;

    /**
     * @ORM\OneToMany(targetEntity="Restaurant", mappedBy="city")
     */
    protected $restaurant;

    /**
     * @ORM\OneToMany(targetEntity="FanZone", mappedBy="city")
     */
    protected $fanzone;

    /**
     * @ORM\OneToMany(targetEntity="Game", mappedBy="city")
     */
    protected $Game;

    public function __construct()
    {
        $this->hotel = new ArrayCollection();
        $this->restaurant = new ArrayCollection();
        $this->fanzone = new ArrayCollection();
        $this->game = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }



    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @return mixed
     */
    public function getHotel()
    {
        return $this->hotel;
    }

    /**
     * @return mixed
     */
    public function getRestaurant()
    {
        return $this->restaurant;
    }

    /**
     * @return mixed
     */
    public function getFanzone()
    {
        return $this->fanzone;
    }

    /**
     * @return mixed
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }



    /**
     * @param mixed $image
     */
    public function setImage($image)
    {
        $this->image = $image;
    }


    public function addHotel(Hotel $hotel)
    {
        $this->hotel[] = $hotel;
    }

    public function addRestaurant(Restaurant $restaurant)
    {
        $this->restaurant[] = $restaurant;
    }

    public function addFanZone(FanZone $fanzone)
    {
        $this->fanzone[] = $fanzone;
    }

    public function addGame(Game $game)
    {
        $this->game[] = $game;
    }

    /**
     * @return mixed
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;
    }



}



?>