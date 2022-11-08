/*
Créez un programme qui affiche la racine carrée d’un entier positif.

Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

function racineCarre() {

    let arg1 =process.argv[2]
    //--------------TEST----------//
    if (isNaN(arg1) || Math.sign(arg1) !== 1) {
        console.log("Merci d'entrer un nombre entier positif")
        return
    }

    if (process.argv[3] !== undefined) {
        console.log("Merci de n'entrer qu'un seul argument")
        return
    }

    //-------------TEST DONE----------//

    let racine = arg1
    let step = 1

    for (let i = 0; i < arg1; i++) {

        racine = racine - step
        step +=2

        // racine = racine / 2
        // if ((racine - Math.floor(racine)) !== 0) {
        //     //decimal number
        //     console.log(racine)
        //     return
        // } else {
        //     //nb entier
        //     console.log("entier");
        // }
        

    }

}

racineCarre()