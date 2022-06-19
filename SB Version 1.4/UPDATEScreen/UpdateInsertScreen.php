<?php
    include "dbLink.php";
?>
<!DOCTYPE html>
<html>
  <!--
    Update/Insert Dokument
  -->
  <head>
    <meta name="description" content="SQL Statementbuilder Update/Insert">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="UpdateInsertScreen.css">
    <link rel="stylesheet" href="../tab.css">
    <link rel="stylesheet" href="../navleiste.css">
    <title>SQL Statementbuilder Update/Insert</title>
    <link rel="icon" type="image/x-icon" href="../pictures/SB_Logo.JPG">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="UpdateInsertScreen.js"></script>

    <!----===== Boxicons CSS ===== -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
  </head>

<body>
  <!-- Navigationsleiste -->
  <nav class="sidebar close">
    <header>
        <div class="image-text">
            <!--<<span class="image">
              hier kann das SB Bild rein
                img src="logo.png" alt="">
            </span>-->

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

                <li class="nav-link" onclick="window.location.href = '../SELECTScreen/SelectScreen.php'">
                    <a href="#">
                        <i class='bx bx-pointer icon' ></i>
                        <span class="text nav-text">SELECT</span>
                    </a>
                </li>

                <li class="nav-link" onclick="window.location.href = 'UpdateInsertScreen.php'">
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
      <button class="tablinks" onclick="openTabs(event, 'import')">Import</button>
      <button class="tablinks" onclick="openTabs(event, 'statementundZieltabelle')">Statementtyp und Zieltabelle</button>
      <button class="tablinks" onclick="openTabs(event, 'einstellen')">Einstellen</button>
      <!-- <button class="tablinks" onclick="openTabs(event, 'bedingungen')">Bedingungen</button> -->
      <button class="tablinks" onclick="openTabs(event, 'felder')">Felder</button>
      <button class="tablinks" onclick="openTabs(event, 'fertigesStatement')">fertiges Statement</button>
    </div>

    <!-- Tab content -->
    <div id="import" class="tabcontent import">
      <input class="file-upload__input linksoben" type="file" name="myFile[]" id="myFile" multiple>
      <button class="file-upload__button importbutton linksoben" type="button">Datei auswählen</button>
      <p class="file-upload__label linksoben"></p>
      <p class="importinfofeld linksunten">Importieren sie, falls vorhanden, die benötigte CSV aus dem PMA.</p>
    </div>

    <div id="statementundZieltabelle" class="tabcontent zweiMalDreiSpalten">
      <p class="infofelder linksoben">Bitte wählen Sie die den Statementtyp aus.</p>
      <select id="statementtyp" size="2" class="tabellennamen linksunten" onchange="auswahl()">
        <option>UPDATE</option>
        <option>INSERT</option>
      </select>

      <!-- in der Mitte (zwischen den äußeren beiden Spalten)-->
      <p class="infofelder mitteoben">
        Update: aktualisiert eine Tabelle oder Feld
        <br>
        Insert: fügt Wert in Tabelle ein
      </p>

      <p class="infofelder rechtsoben">Bitte wählen Sie die Zieltabelle aus.</p>
    <select id="zieltabelle" name="zieltabelle" size="10" class="tabellennamen rechtsunten" onchange="auswahl()">
    <?php
        $query = "SELECT table_name FROM information_schema.tables
            WHERE table_schema = 'testdb'";
        $result = mysqli_query($link, $query);
        if(mysqli_num_rows($result) > 0){ 
            while($row = $result->fetch_assoc()){  
                echo '<option value="'.$row['id'].'">'.$row['table_name'].'</option>'; 
            } 
        }else{ 
            echo '<option value=""table not available</option>'; 
        } 
    ?>
    </select>
    </div>

    <div id="einstellen" class="tabcontent zweiMalDreiSpalten">
      <p class="infofelder linksoben">Stellen Sie hier das Feld ein, was Sie verändern wollen.</p>
      <select id="einstellenTabelle" name="einstellenTabelle" size="10" class="tabellennamen linksunten" onchange="auswahl()">
        <option>Wählen Sie eine Tabelle aus!</option>
      </select>
      <script>
        //das muss auch in ausgelagerter Datei gehen
            $(document).ready(function(){
                $('#zieltabelle').on('change', function() {
                    //holt selected Wert und packt ihn in Variable zum übergeben
                    var select = document.getElementById('zieltabelle');
                    var tableAuswahl = select.options[select.selectedIndex].text;

                    if(tableAuswahl){
                        $.ajax({
                            type:'POST',
                            url:'anfrage.php',
                            data:'name='+tableAuswahl,
                            success:function(html){
                                $('#einstellenTabelle').html(html);
                            }
                        });
                    }else{
                        $('#einstellenTabelle').html('<option value="">Select Table first</option>');
                        alert("Fehler bei AJAX")
                    }
                });
            });
        </script>

      <p class="infofelder mitteoben"> Tragen Sie hier den Wert ein.</p>
      <input type="text" maxlength=20 id="werteingabeEinstellen" class="werte mitteunten" oninput="auswahl()">
    </div>
  
    <div id="bedingungen" class="tabcontent zweiMalDreiSpalten">
      <p class="infofelder linksoben">Wählen Sie hier die aus importierten Feldern, das aus, was Sie benötigen</p>
      <select id="bedingungenTabelle" size="10" class="tabellennamen linksunten" onchange="auswahl()">
        <!-- hier muss was mit Import passierenl -->
        <option>Noch nicht Fertig!</option>
      </select>
      <script>
        //das muss auch in ausgelagerter Datei gehen
            $(document).ready(function(){
                $('#zieltabelle').on('change', function() {
                    //holt selected Wert und packt ihn in Variable zum übergeben
                    var select = document.getElementById('zieltabelle');
                    var tableAuswahl = select.options[select.selectedIndex].text;

                    if(tableAuswahl){
                        $.ajax({
                            type:'POST',
                            url:'anfrage_bedingungen.php',
                            data:'name='+tableAuswahl,
                            success:function(html){
                                $('#bedingungenTabelle').html(html);
                            }
                        });
                    }else{
                        $('#bedingungenTabelle').html('<option value="">Select Table first</option>');
                        alert("Fehler bei AJAX")
                    }
                });
            });
        </script>
    </div>
    
    <div id="felder" class="tabcontent zweiMalDreiSpalten">
      <p class="infofelder linksoben">Hier tragen Sie die Bedingungen ein.</p>
      <select id="felderTabelle" size="10" class="tabellennamen linksunten" onchange="auswahl()">
        <option>Wählen Sie eine Tabelle aus!</option>
      </select>
      <script>
            //das muss auch in ausgelagerter Datei gehen
                $(document).ready(function(){
                    $('#zieltabelle').on('change', function() {
                        //holt selected Wert und packt ihn in Variable zum übergeben
                        var select = document.getElementById('zieltabelle');
                        var tableAuswahl = select.options[select.selectedIndex].text;

                        if(tableAuswahl){
                            $.ajax({
                                type:'POST',
                                url:'anfrage_bedingungen.php',
                                data:'name='+tableAuswahl,
                                success:function(html){
                                    $('#felderTabelle').html(html);
                                }
                            });
                        }else{
                            $('#felderTabelle').html('<option value="">Select Table first</option>');
                            alert("Fehler bei AJAX")
                        }
                    });
                });
            </script>
      
      <p class="infofelder mitteoben">Wählen Sie hier den Operator aus.</p>
      <label for="operatorFelder"></label>
      <select name="operatorFelder" id="operatorFelder" size="1" class="operator mitteunten">
        <option disabled selected value>-- Wählen Sie einen Operator aus --</option>
        <option><</option>
        <option>></option>
        <option>=</option>
        <option><=</option>
        <option>>=</option>
        <option><=</option>
        <option>IN</option>
      </select>

      <p class="infofelder rechtsoben"> Tragen Sie hier den Wert ein.</p>
      <input type="text" maxlength=20 id="werteingabeFelder" class="werte rechtsunten" oninput="auswahl()">
    </div>

    <div id="fertigesStatement" class="tabcontent zweiMalDreiSpalten">
      <p class="statementInfofeld linksoben">Hier können Sie das fertige Statement kopieren und ins PMA eingeben.</p>
      <input type="text" id="ausgabeStatement" class="statementAusgabefeld linksunten">
      <button class="statementbuttons1 mitteunten" onclick="kopierenFunktion();">Kopieren</button>
      <button class="statementbuttons2 mitteunten" onclick="test();">Exportieren</button>
    </div>
  </section>

  <script type="text/javascript" src="../functions.js"></script>
</body>
</html>