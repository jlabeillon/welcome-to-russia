<?php
namespace AppBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

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
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="text")
     */
    private $transport;

    /**
     * @ORM\Column(type="string")
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity="Hotel", mappedBy="city")
     */
    protected $hotels;

    /**
     * @ORM\OneToMany(targetEntity="Restaurant", mappedBy="city")
     */
    protected $restaurants;

    /**
     * @ORM\OneToMany(targetEntity="FanZone", mappedBy="city")
     */
    protected $fanzones;

    /**
     * @ORM\OneToMany(targetEntity="Match", mappedBy="city")
     */
    protected $matchs;

    public function __construct()
    {
        $this->hotels = new ArrayCollection();
        $this->restaurants = new ArrayCollection();
        $this->fanzones = new ArrayCollection();
        $this->matchs = new ArrayCollection();
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
    public function getTransport()
    {
        return $this->transport;
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
    public function getHotels()
    {
        return $this->hotels;
    }

    /**
     * @return mixed
     */
    public function getRestaurants()
    {
        return $this->restaurants;
    }

    /**
     * @return mixed
     */
    public function getFanzones()
    {
        return $this->fanzones;
    }

    /**
     * @return mixed
     */
    public function getMatchs()
    {
        return $this->matchs;
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
     * @param mixed $transport
     */
    public function setTransport($transport)
    {
        $this->transport = $transport;
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
        $this->hotels[] = $hotel;
    }

    public function addRestaurant(Restaurant $restaurant)
    {
        $this->restaurants[] = $restaurant;
    }

    public function addFanZone(FanZone $fanzone)
    {
        $this->fanzones[] = $fanzone;
    }

    public function addMatch(Match $match)
    {
        $this->matchs[] = $match;
    }

}



?>