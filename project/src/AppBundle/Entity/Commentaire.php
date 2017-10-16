<?php
namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\Article;

/**
* @ORM\Entity
* @ORM\Table(name="commentaire")
*/
class Commentaire
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=150)
     */
    private $username;
    /**
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;
    /**
    * @var \DateTime
    * @ORM\Column(name="publishedAt", type="datetime")
    */
    private $publishedAt;
    /**
     * @ORM\ManyToOne(targetEntity="Article", inversedBy="commentaires")
     * @ORM\JoinColumn(name="article_id", referencedColumnName="id")
     */

    private $article;

    /**
     * Get the value of Id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of Username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set the value of Username
     *
     * @param string username
     *
     * @return self
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get the value of Content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set the value of Content
     *
     * @param string content
     *
     * @return self
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the value of Published At
     *
     * @return \DateTime
     */
    public function getPublishedAt()
    {
        return $this->publishedAt;
    }
    /**
     * Set the value of Published At
     *
     * @param \DateTime publishedAt
     *
     * @return self
     */
    public function setPublishedAt(\DateTime $publishedAt)
    {
        $this->publishedAt = $publishedAt;
        return $this;
    }

    /**
     * Get the value of Article
     *
     * @return mixed
     */
    public function getArticle()
    {
        return $this->article;
    }

    /**
     * Set the value of Article
     *
     * @param mixed article
     *
     * @return self
     */
    public function setArticle($article)
    {
        $this->article = $article;

        return $this;
    }

}
