/*
Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34

$> ruby exo.rb 2 1 3
2

$> ruby exo.rb 2 2 2
erreur.
*/

function midlleNb(){
    let arrArg0 =process.argv.slice(2)
    let nb1 = parseInt(arrArg0[0])
    let nb2 = parseInt(arrArg0[1])
    let nb3 = parseInt(arrArg0[2])
    
    //--------------TEST----------//
    if (isNaN(nb1) || isNaN(nb2) || isNaN(nb3)) {
        console.log("Merci d'entrer un nombre")
        return
    }

    if (process.argv[5] !== undefined) {
        console.log("Merci de n'entrer que trois arguments.")
        return
    }
    //-------------TEST DONE----------//

    if (nb1 == nb2 && nb2 == nb3) {
        return console.log("erreur.");
    }
    if ((nb1 - nb2) > 0) {
        if ((nb2 - nb3) > 0) {
            return console.log(nb2);
        } else {
            if ((nb1 - nb3) > 0) { 
                return console.log(nb3)
            } else {
                return console.log(nb1)
            }
        }
    } else {
        if ((nb1 - nb3) > 0) { 
            return console.log(nb3)
        } else {
            return console.log(nb1)
        }
    }
}
midlleNb()