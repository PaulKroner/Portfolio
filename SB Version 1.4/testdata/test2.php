<!DOCTYPE html>
<html>
  <!--
    SELECT Dokument
  -->
  <head>
    <meta name="description" content="SQL Statementbuilder Startseite">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css;" href="SelectScreen.css">
    <link rel="stylesheet" type="text/css;" href="../tab.css">
    <link rel="stylesheet" type="text/css;" href="../navleiste.css">
    <title>SQL Statementbuilder Select</title>
    <link rel="icon" type="image/x-icon" href="../pictures/SB_Logo.JPG">

    <!----===== Boxicons CSS ===== -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
  </head>

<body>
    <!-- Navigationsleiste -->
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <!--<img src="logo.png" alt="">-->
                </span>

                <div class="text logo-text">
                    <span class="name">SQL-</span>
                    <span class="name">Statementbuilder</span>
                    <!--<span class="profession">Statementbuilder</span>-->
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Suchen...">
                </li>

                <ul class="menu-links">
                    <li class="nav-link" onclick="window.location.href = '../index.html'">
                        <a href="#">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Startseite</span>
                        </a>
                    </li>

                    <li class="nav-link" onclick="window.location.href = 'SelectScreen.php'">
                        <a href="#">
                            <i class='bx bx-pointer icon' ></i>
                            <span class="text nav-text">SELECT</span>
                        </a>
                    </li>

                    <li class="nav-link" onclick="window.location.href = '../UPDATEScreen/UpdateInsertScreen.html'">
                      <a href="#">
                          <i class='bx bxs-upvote icon' ></i>
                          <span class="text nav-text">UPDATE/INSERT</span>
                      </a>
                    </li>

                    <li class="nav-link">
                      <a href="#">
                          <i class='bx bx-dots-horizontal-rounded icon' ></i>
                          <span class="text nav-text">Mehr</span>
                      </a>
                    </li>
                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>

            </div>
        </div>
    </nav>
    <section class="hauptScreen">
    <!-- Tab links -->
        <div class="tab">
            <button class="tablinks" onclick="openTabs(event, 'tabellenFelderAuswahl')">Tabellen- und Felderauswahl</button>
            <button class="tablinks" onclick="openTabs(event, 'bedingungenSelect')">Bedingungen</button>
            <button class="tablinks" onclick="openTabs(event, 'exportAnfrage')">Export der Anfrage</button>
        </div>

        <!-- Tab content -->
        <form method="" action="SelectScreen.php">        
            <div id="tabellenFelderAuswahl" class="tabcontent tabellenFelderAuswahldings">
            <p class="infofelder linksoben">Bitte wählen Sie die Tabelle aus, welche sie Selektieren wollen.</p>
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
            <select name="tabellenAuswahl" id="tabellenAuswahl" class="tabellennamen linksunten" size=10 onchange="auswahl()">
                <?php
                    while($row=mysqli_fetch_array($result)) {
                    ?>
                    <option><?php echo $row['name']; ?></option>
                    <?php }
                ?>
            </select>
        
            <p class="infofelder mitteoben">Bitte wählen Sie die Felder aus.</p>
            <?php
            //Tabellenfeldersql
            //Verbindung
                $felderAuswahl = $_POST['tabellenAuswahl'];
                $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
                //"POST" geht nur, wenn in Form method="post"
                echo $felderAuswahl;

                $sqlBefehl = "SELECT COLUMN_NAME 
                FROM INFORMATION_SCHEMA.COLUMNS 
                WHERE 
                    TABLE_SCHEMA = Database()
                     AND TABLE_NAME = '$felderAuswahl' ;";
                $resultfelder = mysqli_query($link, $sqlBefehl);
                echo $sqlBefehl;
            ?>
            <!-- Auswahlfeld erstellen -->
            <select name="felderAuswahl" id="felderAuswahl" class="tabellennamen mitteunten" size=10 onchange="auswahl()">
            <option>*</option>
            <?php
                while($row=mysqli_fetch_array($resultfelder)) {
                ?>
                <option><?php echo $row['COLUMN_NAME']; ?></option>
                <?php }
            ?>
            </select>
        </div>
        </form>
        

        
    </section>

    <script src="../SELECTScreen/SelectScreen.js"></script>
    <script src="SelectScreenNew.js"></script>
    <script src="../functions.js"></script>
</body>
</html>

            <!-- onchange = this.form.submit() damit DB-anfrage abgesendet wird -->
            <select name="tauswahl" id="tauswahl" size="10" onchange="twofunc">
                <?php
                    while($row=mysqli_fetch_array($result)) {
                    ?>
                    <option><?php echo $row['name']; ?></option>
                    <?php }
                ?>
            </select>