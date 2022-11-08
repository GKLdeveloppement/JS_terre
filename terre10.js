/*
Créez un programme qui affiche si un nombre est premier ou pas.

Exemples d’utilisation :
$> node exo.js 5
Oui, 5 est un nombre premier.

$> node exo.js 6
Non, 6 n’est pas un nombre premier.

Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.
*/

function nbPremier() {

    let arg1 =process.argv[2]

    //--------------TEST----------//
    if (isNaN(arg1) || Math.sign(arg1) !== 1) {
        console.log("Merci d'entrer un nombre entier positif")
        return
    }

    if (arg1 < 2) {
        console.log("Entrer un nombre supérieur à 2.")
        return
    }

    if (process.argv[3] !== undefined) {
        console.log("Merci de n'entrer qu'un seul argument")
        return
    }

    //-------------TEST DONE----------//

    //--------TRAITEMENT---------//

    //Comme un nombre premier ne se divise que par 2 ou par lui même donc si il se divise par 2 ou par 3 c'est qu'il n'est pas entier et je suis parti du principe que tout chiffre non premier peur se diviser soit par 2 pour les pairs soit par 3 pour les impairs 
    let div2 = (arg1/2).toString()
    let div3 = (arg1/3).toString()

    if (arg1 == 2 || arg1 == 3) { 
        console.log("Oui, "+ arg1 + " est un nombre premier");
        return
    }

    if (div2.indexOf(".") == -1 || div3.indexOf(".") == -1 ) {
        console.log("Non, "+ arg1 + " n'est pas un nombre premier");
    } else {
        console.log("Oui, "+ arg1 + " est un nombre premier");
    }      
}
nbPremier()