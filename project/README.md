Project Welcome to Russia 2018
=======

Penser à faire un ``` sudo chmod -R 777 var ``` [ Pas propre ]

Ou 

``` HTTPDUSER=`ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1```

puis

``` sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var ```

et enfin

``` sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var ```
