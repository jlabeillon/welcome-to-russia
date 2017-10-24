<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Commentaire;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\User;
use AppBundle\Entity\Article;
use Symfony\Component\Validator\Constraints\DateTime;


class ArticleFifaFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime('');
        $em = $this->container->get('doctrine.orm.entity_manager');
        $author = $em->getRepository(User::class)->findOneById(1);


        $article = new Article();
        $article->setTitle('FIFA World Cup 2018 is coming soon !');
        $article->setContent('In 2018 the fifa world cup will start, and everyone is preparing to go to russia to support his team. This blog aims to exchange tips and testimonials, so that the road trip in Russia is going well! And you are ready to go, to the east, to attend live matches of our favorite sport, do you think that the atmosphere will be at the rendezvous? Feel free to leave us your comments !');
        $article->setImage('b72351e5642b58689467f89d20da9cf9.png');
        $article->setAuthor($author);
        $manager->persist($article);



        $commentary1 = new Commentaire();
        $commentary1->setContent('I\'m too close to be there!');
        $commentary1->setPublishedAt($date);
        $commentary1->setArticle($article);
        $commentary1->setUsername('Maylee');
        $manager->persist($commentary1);


        $commentary2 = new Commentaire();
        $commentary2->setContent('Go Russia!');
        $commentary2->setPublishedAt($date);
        $commentary2->setArticle($article);
        $commentary2->setUsername('Anton');
        $manager->persist($commentary2);


        $commentary3 = new Commentaire();
        $commentary3->setContent('I do not like football!');
        $commentary3->setPublishedAt($date);
        $commentary3->setArticle($article);
        $commentary3->setUsername('Jean-Luc');
        $manager->persist($commentary3);


        $commentary4 = new Commentaire();
        $commentary4->setContent('Is it expensive to travel to Russia?');
        $commentary4->setPublishedAt($date);
        $commentary4->setArticle($article);
        $commentary4->setUsername('Johanna');
        $manager->persist($commentary4);


        $commentary5 = new Commentaire();
        $commentary5->setContent('Super article!');
        $commentary5->setPublishedAt($date);
        $commentary5->setArticle($article);
        $commentary5->setUsername('Angélique');
        $manager->persist($commentary5);


        $article->addCommentaire($commentary1);
        $article->addCommentaire($commentary2);
        $article->addCommentaire($commentary3);
        $article->addCommentaire($commentary4);
        $article->addCommentaire($commentary5);
        $manager->persist($article);





        $manager->flush();


    }

}
