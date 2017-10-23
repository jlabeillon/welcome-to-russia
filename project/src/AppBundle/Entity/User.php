<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping  as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\Common\Collections\ArrayCollection;


/**
* @ORM\Entity
* @ORM\Table(name="`user`")
*/

class User extends BaseUser
{
  /**
  *@ORM\Id
  *@ORM\GeneratedValue (strategy="AUTO")
  *@ORM\Column(type="integer")
  */
  protected $id;

    /**
     * Get the value of Id
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @ORM\OneToMany(targetEntity="Article", mappedBy="author")
     */
    protected $article;


    public function __construct()
    {
        $this->article = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getArticle()
    {
        return $this->article;
    }

    public function addArticle(Article $article)
    {
        $this->article[] = $article;
    }

}
