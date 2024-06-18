function kalorienrechner() {

    //Gewicht,Größe und Alter werden in die Funktion geholt
    const inputGewicht = Number(document.getElementById("gewicht").value);
    const inputGröße = Number(document.getElementById("körpergröße").value);
    const inputAlter = Number(document.getElementById("alter").value);

    //radio mit geschlechterwahl wird ausgelesen
    const inputGeschlecht = document.querySelector("input[name='geschlecht']:checked").value;

    console.log(inputGeschlecht);
    //kommende Outputs in die Funktion holen
    let outputGrundumsatzKcal = document.querySelector(".outputGrundumsatzKcal");
    let outputGrundumsatzKJ = document.querySelector(".outputGrundumsatzKJ");
    let outputGesamtumsatzKcal = document.querySelector(".outputGesamtumsatzKcal");
    let outputGesamtumsatzKJ = document.querySelector(".outputGesamtumsatzKJ");
    const palFaktor = Number(document.getElementById("palFaktor").value);

    //Fallunterscheidung + Berechnung
    if (inputGeschlecht == "Männlich") {
        //berechnung Grundumsatz im Fall "männlich" in kcal
        let berechnungGrundumsatzKcal = 66.47 + (13.7 * inputGewicht) + (5 * inputGröße) - (6.8 * inputAlter);
        
        //berechnung Grundumsatz im Fall "männlich" in kJ
        let berechnungGrundumsatzKJ = berechnungGrundumsatzKcal * 4.184;
        
        //berechnung Gesamtumsatz im Fall "männlich" in kcal 
        let berechnungGesamtumsatzKcal = berechnungGrundumsatzKcal * palFaktor;
        
        //berechnung Gesamtumsatz im Fall "männlich" in kJ
        let berechnungGesamtumsatzKJ = berechnungGesamtumsatzKcal * 4.184;

        //Ausgabe Daten
        outputGrundumsatzKJ.innerHTML = berechnungGrundumsatzKJ;
        outputGrundumsatzKcal.innerHTML = berechnungGrundumsatzKcal;

        outputGesamtumsatzKcal.innerHTML = berechnungGesamtumsatzKcal;        
        outputGesamtumsatzKJ.innerHTML = berechnungGesamtumsatzKJ;
        
    } else if (inputGeschlecht == "Weiblich") {
        //berechnung Grundumsatz im Fall "weiblich" in kcal
        let berechnungGrundumsatzKcal = 665.1 + (9.6 * inputGewicht) + (1.8 * inputGröße) - (4.7 * inputAlter);
        
        //berechnung Grundumsatz im Fall "weiblich" in kJ
        let berechnungGrundumsatzKJ = berechnungGrundumsatzKcal * 4.184;
        
        //berechnung Gesamtumsatz im Fall "weiblich" in kcal 
        let berechnungGesamtumsatzKcal = berechnungGrundumsatzKcal * palFaktor;
        
        //berechnung Gesamtumsatz im Fall "weiblich" in kJ
        let berechnungGesamtumsatzKJ = berechnungGesamtumsatzKcal * 4.184;

        //Ausgabe Daten
        outputGrundumsatzKJ.innerHTML = berechnungGrundumsatzKJ;
        outputGrundumsatzKcal.innerHTML = berechnungGrundumsatzKcal;

        outputGesamtumsatzKcal.innerHTML = berechnungGesamtumsatzKcal;        
        outputGesamtumsatzKJ.innerHTML = berechnungGesamtumsatzKJ;
    }
}











    