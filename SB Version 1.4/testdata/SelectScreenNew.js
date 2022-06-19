//****Ausgabe Statement****
function auswahl() {
    //Listfelder
    var tabellenAuswahlInhalt = better_get("tabellenAuswahl");
    var felderAuswahlInhalt = better_get("felderAuswahl");
    var bedingungenInhalt = better_get("bedingungenTabelle");
    var operatorInhalt = better_get("operatorFelder");
    //Texteingabefelder
    var werteingabeBedingungenInhalt = document.querySelector("#werteingabeBedingungen").value;
  
    //Ausgabe
    if (tabellenAuswahlInhalt == "" && felderAuswahlInhalt == "" && bedingungenInhalt == "" && operatorInhalt == "" && werteingabeBedingungenInhalt == "") {
      document.getElementById("ausgabeStatement").value = "";
    }
    else if (tabellenAuswahlInhalt !== "" && felderAuswahlInhalt !== "" && bedingungenInhalt == "" && operatorInhalt == "-- Wählen Sie einen Operator aus --" && werteingabeBedingungenInhalt == "") {
      document.getElementById("ausgabeStatement").value = `SELECT ${felderAuswahlInhalt} FROM ${tabellenAuswahlInhalt}`;
    }
    else if (tabellenAuswahlInhalt !== "" && felderAuswahlInhalt !== "" && bedingungenInhalt !== "" && operatorInhalt !== "-- Wählen Sie einen Operator aus --" && werteingabeBedingungenInhalt !== "") {
      document.getElementById("ausgabeStatement").value = `SELECT ${felderAuswahlInhalt} FROM ${tabellenAuswahlInhalt} WHERE ${bedingungenInhalt} ${operatorInhalt} ${werteingabeBedingungenInhalt}`;
    }
  }
  
  function better_get(id) { 
    let e = document.getElementById(id) 
    return e.options[e.selectedIndex]?.text ?? "" 
  }


function openTabs(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks = document.getElementsByClassName("tablinks");
      tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}

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

function testweise() {
  var select2 = document.getElementById('felder');
  var tableAuswahl2 = select.options[select.selectedIndex].text;
  alert(tableAuswahl2)
}
 
  
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

function test() {
    alert("hi");
}