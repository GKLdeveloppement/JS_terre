/*
Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

function puissanceNb(){
    let arg1 =process.argv[2]
    let arg2 =process.argv[3]
    let result = arg1

    //--------TEST----------//
    if (isNaN(arg1) || isNaN(arg2) || Math.sign(arg2) !== 1) {
        console.log("Merci d'entrer un nombre entier positif")
        return
    }

    if (process.argv[4] !== undefined) {
        console.log("Merci de n'entrer que deux arguments")
        return
    }
    //-----TEST DONE----//

    //---Traitement---//
    for (let i = 1; i < arg2 ; i++) {
        result = result * arg1
    }
    console.log(result)
}

puissanceNb()