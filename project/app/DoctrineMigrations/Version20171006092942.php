<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171006092942 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, date DATE NOT NULL, hour INT NOT NULL, team VARCHAR(50) NOT NULL, INDEX IDX_232B318C8BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('DROP TABLE `match`');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE `match` (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, date DATE NOT NULL, hour INT NOT NULL, team VARCHAR(50) NOT NULL COLLATE utf8_unicode_ci, INDEX IDX_7A5BC5058BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC5058BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('DROP TABLE game');
    }
}
