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



        $article = new Article();
        $article->setTitle('FIFA World Cup 2018 is coming soon !');
        $article->setContent('In 2018 the fifa world cup will start, and everyone is preparing to go to russia to support his team. The 2018 FIFA World Cup is the 21st edition of the FIFA World Cup, which brings together the best national selections. It will take place in Russia from June 14 to July 15, 2018. The kick-off of the opening match and the final will be given at 18:00 (Moscow time) or 17:00 (Paris time). In early 2008, England and the Belgium-Netherlands Association are the only countries officially applying for the 2018 edition. A Spain-Portugal nomination is added in January 2009. On 3 February 2009, Egypt, the United States and South Korea enter the race for the organization of the 2018 World Cup. On June 14, 2009, they are joined by Australia, which is bidding to organize a World Cup in 2018 or 2022. The principle of continental rotation instituted by Sepp Blatter should have led to an organization in North America, as he explained on February 28, 2007 in London during a meeting with officials English: "If the FIFA Executive Committee later decides that the rotation policy is maintained, according to the strict procedure, it will have to be in North America in 2018 and so three countries can organize it, the United States, Mexico and Canada. "FIFA, however, announced the end of the principle. This blog aims to exchange tips and testimonials, so that the road trip in Russia is going well! And you are ready to go, to the east, to attend live matches of our favorite sport !');
        $article->setImage('b72351e5642b58689467f89d20da9cf9.png');
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
