<?php

    define('DB_NAME','kasi_database');
    define('DB_USER','root');
    define('DB_PASSWORD','');
    define('DB_HOST','localhost');



    $mysqli = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);


     /*mysqli_connect('localhost','root','','kasi_database');
*/
?>