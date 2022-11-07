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

    if (process.argv[4] !== undefined || Math.sign(arg2) !== 1) {
        if (isNaN(arg2) || isNaN(arg1)) {
            console.log("erreur.")
            return
        } else {
            console.log(Math.pow(arg1, arg2))
        }
    } else {
        console.log("erreur.");
    }
}

puissanceNb()