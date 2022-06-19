//****Ausgabe Statement****
function auswahl() {
  //Listfelder
  var statementtypInhalt = better_get("statementtyp");
  var zieltabelleInhalt = better_get("zieltabelle");
  var einstellenInhalt = better_get("einstellenTabelle");
  var bedingungenInhalt = better_get("bedingungenTabelle");
  var felderInhalt = better_get("felderTabelle");
  var operatorFelderInhalt = better_get("operatorFelder");
  //Texteingabefelder
  var werteingabeEinstellenInhalt = document.querySelector("#werteingabeEinstellen").value;
  var werteingabeFelderInhalt = document.querySelector("#werteingabeFelder").value;

    //Ausgabe
    if (statementtypInhalt == "" || zieltabelleInhalt == "" || einstellenInhalt == "" || werteingabeEinstellenInhalt == "") {
        document.getElementById("ausgabeStatement").value = "";
    }
    else if (statementtypInhalt !== "" && zieltabelleInhalt !== "" && einstellenInhalt !== "" && werteingabeEinstellenInhalt !== "" && (felderInhalt == "" || operatorFelderInhalt == "-- Wählen Sie einen Operator aus --" || werteingabeFelderInhalt == "")) {
        document.getElementById("ausgabeStatement").value = "";
    }
    else if (statementtypInhalt !== "" && zieltabelleInhalt !== "" && einstellenInhalt !== "" && werteingabeEinstellenInhalt !== ""  && felderInhalt !== "" && operatorFelderInhalt !== "-- Wählen Sie einen Operator aus --" && werteingabeFelderInhalt !== "") {
        document.getElementById("ausgabeStatement").value = `${statementtypInhalt} ${zieltabelleInhalt} SET ${einstellenInhalt} = ${werteingabeEinstellenInhalt} WHERE ${felderInhalt} ${operatorFelderInhalt} ${werteingabeFelderInhalt}`;
    }
    else if (statementtypInhalt !== "" && zieltabelleInhalt !== "" && einstellenInhalt !== "" && werteingabeEinstellenInhalt !== ""  && felderInhalt !== "" && operatorFelderInhalt !== "-- Wählen Sie einen Operator aus --" && werteingabeFelderInhalt !== "") {
        document.getElementById("ausgabeStatement").value = `${statementtypInhalt} ${zieltabelleInhalt} SET ${einstellenInhalt} = ${werteingabeEinstellenInhalt} WHERE ${felderInhalt} ${operatorFelderInhalt} ${werteingabeFelderInhalt}`;
    }

}
function better_get(id) { 
  let e = document.getElementById(id) 
  return e.options[e.selectedIndex]?.text ?? "" 
}

//Importknopf Funktion (JQuery?)
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);
function test() {
    alert("Copied the text: " + copyText.value);
}