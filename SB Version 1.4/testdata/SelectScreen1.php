<?php
    include "dbLink.php";
?>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

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
            <div id="tabellenFelderAuswahl" class="tabcontent tabellenFelderAuswahldings">
            <p class="infofelder linksoben">Bitte wählen Sie die Tabelle aus, welche sie Selektieren wollen.</p>
            <select name="tabellenAuswahl" id="tabellenAuswahl" class="tabellennamen linksunten" size=10 onchange="auswahl(); this.form.submit()">
            <?php
            $query = "SELECT name FROM tables";
            $result = mysqli_query($link, $query);
            if(mysqli_num_rows($result) > 0){ 
                while($row = $result->fetch_assoc()){  
                    echo '<option value="'.$row['id'].'">'.$row['name'].'</option>'; 
                } 
            }else{ 
                echo '<option value=""table not available</option>'; 
            } 
            ?>
            </select>
        
            <p class="infofelder mitteoben">Bitte wählen Sie die Felder aus.</p>
            <select name="felderAuswahl" id="felderAuswahl" class="tabellennamen mitteunten" size=10 onchange="auswahl()">
            <option>*</option>
            </select>
            <script>
            //das muss auch in ausgelagerter Datei gehen
                $(document).ready(function(){
                    $('#tables').on('change', function() {
                        //holt selected Wert und packt ihn in Variable zum übergeben
                        var select = document.getElementById('tables');
                        var tableAuswahl = select.options[select.selectedIndex].text;

                        if(tableAuswahl){
                            $.ajax({
                                type:'POST',
                                url:'anfrage.php',
                                data:'name='+tableAuswahl,
                                success:function(html){
                                    $('#felder').html(html);
                                }
                            });
                        }else{
                            $('#felder').html('<option value="">Select country first</option>');
                            alert("Fehler bei AJAX")
                        }
                    });
                });
            </script>
        </div>
        <div id="bedingungenSelect" class="tabcontent zweiMalDreiSpalten">
            <p class="infofelder linksoben">Hier können Sie zusätzliche Bedingungen eintragen.</p>
            <select id="bedingungenTabelle" size="10" class="tabellennamen linksunten" onChange="auswahl()">
                <option value="">Select table first</option>
            </select>
            <script>
            //das muss auch in ausgelagerter Datei gehen
                $(document).ready(function(){
                    $('#tables').on('change', function() {
                        //holt selected Wert und packt ihn in Variable zum übergeben
                        var select = document.getElementById('tables');
                        var tableAuswahl = select.options[select.selectedIndex].text;

                        if(tableAuswahl){
                            $.ajax({
                                type:'POST',
                                url:'anfrage.php',
                                data:'name='+tableAuswahl,
                                success:function(html){
                                    $('#felder').html(html);
                                }
                            });
                        }else{
                            $('#felder').html('<option value="">Select country first</option>');
                            alert("Fehler bei AJAX")
                        }
                    });
                });
            </script>
            
            <p class="infofelder mitteoben">Wählen Sie hier den Operator aus.</p>
            <label for="operatorBedingungen"></label>
            <select name="operatorBedingungen" id="operatorFelder" size="1" class="operator mitteunten">
                <option disabled selected value> -- Wählen Sie einen Operator aus -- </option>
                <option><</option>
                <option>></option>
                <option>=</option>
                <option><=</option>
                <option>>=</option>
                <option><=</option>
                <option>IN</option>
            </select>
        
            <p class="infofelder rechtsoben"> Tragen Sie hier den Wert ein.</p>
            <input type="text" maxlength=20 id="werteingabeBedingungen" class="werte rechtsunten" oninput="auswahl()">
        </div>

        <div id="exportAnfrage" class="tabcontent zweiMalDreiSpalten">
            <p class="statementInfofeld linksoben">Hier können Sie das SELECT-Statement kopieren und ins PMA eingeben.</p>
            <input type="text" id="ausgabeStatement" class="statementAusgabefeld linksunten">
            <button class="statementbuttons2 mitteunten" onclick="testzahlen()">Exportieren</button>
            <button class="statementbuttons1 mitteunten" onclick="kopierenFunktion()">Kopieren</button>
            <button class="weiterButton rechtsoben" onclick="window.location.href = '../UPDATEScreen/UpdateInsertScreen.html'">Weiter</button>
        </div>
    </section>

    <script src="SelectScreen.js"></script>
    <script src="../functions.js"></script>
</body>
</html>