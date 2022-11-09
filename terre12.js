/*
Le code est identique à celui de l'exercice précédent j'ai fais un script permettant de gérer les deux
*/

function engHoraire() {
    //Récupération des arguments et définission des variables

    let arg0 =process.argv[2]

    let arg1 = arg0.split(":")
    let hourArg = arg1[0]
    let minuteArg = arg1[1]


    //Tests de conformités des args 
    //--------------TEST----------//
    if (parseInt(arg1) >= 24 || parseInt(arg1) < 0 || isNaN(parseInt(arg1))) {
        console.log("Merci d'entrer un nombre entier positif compris entre 00 et 23")
        return
    }

    if (parseInt(minuteArg) > 59 || parseInt(minuteArg) < 0) {
        console.log("Merci d'indiquer des minutes entre 0 et 59");
        return
    }

    if (process.argv[3] !== undefined) {
        console.log("Merci de n'entrer qu'un seul argument")
        return
    }

    //-------------TEST DONE----------//

    if (hourArg < 13) {
        if (hourArg == 12) {
            console.log(arg0+ " PM");
            return
        }
        console.log(arg0 + " AM")
        return
    }

    let indexHour = 01

    for (let i = 13; i < hourArg+1; i++){

        if (hourArg == i) {
            console.log(indexHour+":"+minuteArg+" PM");
            return
        } else {
            indexHour ++
        }
    }   
}
engHoraire()