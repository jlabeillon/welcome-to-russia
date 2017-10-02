Project Welcome to Russia 2018
=======

Penser à faire un ``` sudo chmod -R 777 var ```

Ou un

``` HTTPDUSER=`ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1`
           sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var
           sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var```

Le 2ème est plus propre.