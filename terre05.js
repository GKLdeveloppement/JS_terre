/*
Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1


$> python exo.py 10 0
erreur.


$> python exo.py 3 5
erreur.

*/

function divisionRest(){
    const nb1 = parseInt(process.argv[2])
    const nb2 = parseInt(process.argv[3])
    let result = Math.trunc(nb1 / nb2);

    nb1 == 0 || nb2 == 0 || result == 0 ? console.log("erreur.") :
        console.log("résultat: " + Math.trunc(nb1 / nb2) + "\nreste: " + nb1 % nb2)
}

divisionRest();