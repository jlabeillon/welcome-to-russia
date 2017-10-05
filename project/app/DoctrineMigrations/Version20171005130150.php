<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171005130150 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE fanzone (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, image VARCHAR(255) NOT NULL, name VARCHAR(180) NOT NULL, localization VARCHAR(180) NOT NULL, capacity INT NOT NULL, INDEX IDX_110FAC698BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `match` (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, date DATE NOT NULL, hour INT NOT NULL, team VARCHAR(50) NOT NULL, INDEX IDX_7A5BC5058BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE city (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, description LONGTEXT NOT NULL, image VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hotel (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, name VARCHAR(180) NOT NULL, description LONGTEXT NOT NULL, image VARCHAR(255) NOT NULL, category VARCHAR(180) NOT NULL, address VARCHAR(180) NOT NULL, phone VARCHAR(20) NOT NULL, email VARCHAR(180) NOT NULL, INDEX IDX_3535ED98BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE restaurant (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, name VARCHAR(180) NOT NULL, address VARCHAR(180) NOT NULL, phone VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, INDEX IDX_EB95123F8BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE fanzone ADD CONSTRAINT FK_110FAC698BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC5058BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE hotel ADD CONSTRAINT FK_3535ED98BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE restaurant ADD CONSTRAINT FK_EB95123F8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE fanzone DROP FOREIGN KEY FK_110FAC698BAC62AF');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC5058BAC62AF');
        $this->addSql('ALTER TABLE hotel DROP FOREIGN KEY FK_3535ED98BAC62AF');
        $this->addSql('ALTER TABLE restaurant DROP FOREIGN KEY FK_EB95123F8BAC62AF');
        $this->addSql('DROP TABLE fanzone');
        $this->addSql('DROP TABLE `match`');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE hotel');
        $this->addSql('DROP TABLE restaurant');
    }
}
