<?php
namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Commentaire;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\User;
use AppBundle\Entity\Article;
use Symfony\Component\Validator\Constraints\DateTime;


class ArticleMoscowFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime('');



        $article = new Article();
        $article->setTitle('How to stay in Russia.');
        $article->setContent('Tourism in Russia has been growing strongly since the Soviet years, firstly thanks to domestic tourism and also thanks to international tourism. A rich cultural heritage and a wide variety of landscapes make the country one of the most popular tourist destinations in the world. In 2013, 27 million foreign tourists visited Russia, bringing $ 11.2 billion to the country in international tourist receipts. Including Russian and foreign tourists, the tourism industry has generated 860 billion rubles of Russia\'s GDP, and employs 966,500 people in the country. The most popular tourist destinations in Russia are St. Petersburg (which is in the list of the most visited European cities in 2010) and Moscow, the old and current capital of the country and major cultural centers, recognized as world cities . Moscow and St. Petersburg have world famous museums such as the Hermitage Museum and the Tretyakov Gallery, as well as famous theaters such as Bolshoi and Mariinsky, churches such as St. Basil\'s Cathedral, the cathedral of Christ the Savior, St. Isaac\'s Cathedral and the Cathedral of the Holy Savior on Spilled Blood, impressive fortifications such as the Moscow Kremlin and the Peter and Paul Fortress, beautiful squares such as the Red Square and Palace Square, and streets such as Tverskaya Street and Nevsky Prospekt. During your trip to Russia you will have the opportunity to rest in many hotels. From economy class, through hotels that we classify as authentic, and ending with luxury hotels !');
        $article->setImage('ede2dbd036fd70fe3c2c02d8476623a0.png');
        $manager->persist($article);



        $commentary1 = new Commentaire();
        $commentary1->setContent('I love to sleep at the hotel and be served!');
        $commentary1->setPublishedAt($date);
        $commentary1->setArticle($article);
        $commentary1->setUsername('Maylee');
        $manager->persist($commentary1);


        $commentary2 = new Commentaire();
        $commentary2->setContent('I know a great hotel in Moscow.');
        $commentary2->setPublishedAt($date);
        $commentary2->setArticle($article);
        $commentary2->setUsername('Anton');
        $manager->persist($commentary2);


        $commentary3 = new Commentaire();
        $commentary3->setContent('Personally I planned the tent!');
        $commentary3->setPublishedAt($date);
        $commentary3->setArticle($article);
        $commentary3->setUsername('Jean-Luc');
        $manager->persist($commentary3);


        $commentary4 = new Commentaire();
        $commentary4->setContent('Does it cost the hotel there?');
        $commentary4->setPublishedAt($date);
        $commentary4->setArticle($article);
        $commentary4->setUsername('Johanna');
        $manager->persist($commentary4);


        $commentary5 = new Commentaire();
        $commentary5->setContent('Another great article!');
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
