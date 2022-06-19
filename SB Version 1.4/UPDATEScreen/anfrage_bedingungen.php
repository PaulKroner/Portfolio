<?php
    //Verbindung zur DB einbinden
    include_once "dbLink.php";

    if(!empty($_POST["name"])){ 
        //erneute Datenbankanfrage -> Spaltennamen der angeklickten Tabelle
        $sqlBefehl = "SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE 
            TABLE_SCHEMA = Database()
            AND TABLE_NAME = '{$_POST["name"]}' ;";
        $result = $link->query($sqlBefehl);
        
            while($row = $result->fetch_assoc()){
                // in row muss die gesuchte Spalte rein aus dem Statement
                echo '<option>'.$row['COLUMN_NAME'].'</option>';}
                
    //ab hier kommt dann zusätzliches Feld

        // mysqli_num_rows($result) > 0
    // }elseif(!empty($_POST["state_id"])){ 
    //     // Fetch city data based on the specific state 
    //     $query = "SELECT * FROM cities WHERE state_id = ".$_POST['state_id']." AND status = 1 ORDER BY city_name ASC"; 
    //     $result = $db->query($query); 
        
    //     // Generate HTML of city options list 
    //     if($result->num_rows > 0){ 
    //         echo '<option value="">Select city</option>'; 
    //         while($row = $result->fetch_assoc()){  
    //             echo '<option value="'.$row['city_id'].'">'.$row['city_name'].'</option>'; 
    //         } 
    //     }else{ 
    //         echo '<option value="">City not available</option>'; 
    //     } 
    } 
?>
