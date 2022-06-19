<?php
    include "dbLink.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>

    <body>
        <form>
        <div>
        <?php
            //SQL-Statement und Query für die Tabellen
            $sqlBefehl1 = "SELECT * FROM tables";
            $result = mysqli_query($link, $sqlBefehl1);
            ?>

            <!-- Auswahlfeld wird beim Laden der Seite befüllt -->
            <!-- wenn Select geändert wird, dann über AJAX neue PHP-Anfrage (fehlt) -->
            <select name="tauswahl" id="tauswahl" size="10" onchange="auswahl();">
                <option>testweise irgendwas</option>
                <?php
                if (mysqli_num_rows($result) > 0) {
                    while($row = mysqli_fetch_assoc($result)) {
                ?>
                <option><?php echo $row['name']; ?></option>
                    <?php }
                } else {
                    echo '<option">Table not available</option>'; 
                }
                ?>
            </select>

            <!-- Felderauswahlfeld wird befüllt -->
            <select id="fauswal" name="fauswahl" size="10">
                <option>Select table first!</option>
                <option>*</option>
            </select>
            </div>
        </form>
        <script src="SelectScreenNew.js"></script>
        <script src="../functions.js"></script>
    </body>
</html>