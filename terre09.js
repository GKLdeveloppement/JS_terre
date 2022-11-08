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
   let i = 0, y=arg1;
   while(i <= y) {
        let mid = Math.floor((i + y) / 2);
        if(mid * mid > arg1) y = mid - 1;
        else i = mid + 1;
   }
   console.log(y);
}

racineCarre()