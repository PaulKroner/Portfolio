<?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    //Tabellensql
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

    // Check connection 
    if (!$link) { 
        die("Connection failed: " . mysqli_connect_error()); 
    }
?>