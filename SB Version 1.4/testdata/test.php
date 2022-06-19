<?php
    include "dbLink.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css;" href="test.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>

    <body>
        <!-- Country dropdown -->
        <select id="tables" onchange="newfunc(this)">
            <option value="">Select Table</option>
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

        <!-- hier dann Felder dropdown -->
        <select id="felder" class="testfelddings" onchange="testweise()">
            <option value="">Select table first</option>
        </select>


        <script>
            
            $(document).ready(function(){
                $('#tables').on('change', function() {
                    //holt selected Wert und packt ihn in Variable zum übergeben
                    var select = document.getElementById('tables');
                    var tableAuswahl = select.options[select.selectedIndex].text;
                    //codezeile aus tutorial (kann so aber eigentlich nicht funktionieren)
                    // var tableAuswahl = $(this).val();

                    // alert(tableAuswahl)

                    if(tableAuswahl){
                        $.ajax({
                            type:'POST',
                            url:'anfrage.php',
                            data:'name='+tableAuswahl,
                            success:function(html){
                                $('#felder').html(html);
                            }
                        });
                        // alert("bis hierher") 
                    }else{
                        $('#felder').html('<option value="">Select country first</option>');
                        alert("Fehler bei AJAX")
                    }
                });
               
                
                // $('#state').on('change', function(){
                //     var stateID = $(this).val();
                //     if(stateID){
                //         $.ajax({
                //             type:'POST',
                //             url:'ajaxData.php',
                //             data:'state_id='+stateID,
                //             success:function(html){
                //                 $('#city').html(html);
                //             }
                //         }); 
                //     }else{
                //         $('#city').html('<option value="">Select state first</option>'); 
                //     }
                // });
            });
</script>
            <button onclick="test()">hello There</button>
        <script src="SelectScreenNew.js"></script>
    </body>
</html>