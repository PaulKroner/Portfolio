<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
        <form method="POST" action="test.php">
        <div>
             <?php
            //Verbindungsdaten
                define('DB_SERVER', 'localhost');
                define('DB_USERNAME', 'root');
                define('DB_PASSWORD', '');
                define('DB_NAME', 'testdb');
            //Tabellensql
                $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
                if (!$link) {
                die("Connection failed: " . mysqli_connect_error());
                }
                $sqlBefehl1 = "SELECT * FROM tables";
                $result = mysqli_query($link, $sqlBefehl1);
                
            ?>
            <!-- onchange = this.form.submit() damit DB-anfrage abgesendet wird -->
            <select name="tauswahl" id="tauswahl" size="10" onchange="this.form.submit()">
                <?php
                    while($row=mysqli_fetch_array($result)) {
                    ?>
                    <option><?php echo $row['name']; ?></option>
                    <?php }
                ?>
            </select>
            <?PHP
            //"POST" geht nur, wenn in Form method="post"
                $variablex= $_POST['tauswahl'];

                echo $variablex;

                $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
                $sqlBefehl2 = "SELECT COLUMN_NAME 
                FROM INFORMATION_SCHEMA.COLUMNS 
                WHERE 
                    TABLE_SCHEMA = Database()
                     AND TABLE_NAME = '$variablex' ;";
                $resultf = mysqli_query($link, $sqlBefehl2);
                echo $sqlBefehl2
            ?>
            <select name="fauswahl" id="fauswahl" size="10">
                <option>*</option>
                <?php
                    while($row=mysqli_fetch_array($resultf)) {
                    ?>
                    <option><?php echo $row['COLUMN_NAME']; ?></option>
                    <?php }
                ?>
            </select>
            </div>
        </form>
    </body>
</html>