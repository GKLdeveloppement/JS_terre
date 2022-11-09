/*
Créez un programme qui détermine si une liste d’entiers est triée ou pas.

Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.
*/

function trieOuPas() {
    let arrArg =process.argv.slice(2)

    //---TEST---//
    for (let i = 0; i < arrArg.length; i++) {
        if (isNaN(arrArg[i])) {
            console.log("Ne doit contenir que des nombres");
            return
        }
    }
    //---DONE TEST ---//


    let comparArr

    for (let i = 0; i < arrArg.length; i++) {
        
        comparArr = arrArg[i+1] - arrArg[i];

        if (comparArr >= 0 || isNaN(arrArg[i+1])) {
            return console.log("Triée !");
        } else {
            return console.log("Pas triée !");
        }
    }
}

trieOuPas()