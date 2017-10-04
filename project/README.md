Project Welcome to Russia 2018
=======

### At the beginning :  ``` composer install ```  !

#### Configure your database parameters in ``` app/config/parameters.yml ```

#### Create your database with ``` php bin/console doctrine:database:create ```

#### Create your database columns with ``` php bin/console doctrine:migrations:diff and php bin/console doctrine:migrations:migrate ``` 
###### ( MigrationsBundle must be installed, click here : https://symfony.com/doc/master/bundles/DoctrineMigrationsBundle/index.html )

##### Don't forget to do : ``` sudo chmod -R 777 var ``` [ not safe ]

##### Or

``` HTTPDUSER=`ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1```

##### then

``` sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var ```

##### and finally

``` sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var ```


