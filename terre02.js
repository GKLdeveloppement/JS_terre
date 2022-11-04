/*
Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.
*/

function showArgs(){
    //Etape 1: On récupère les arguments du terminal
    let args = process.argv
    let argsReturn = ""

    //Etape 2 : On boucle en commençant par l'index 2 car pas besoin des 2 premiers arguments (node + filePath)
    for (let i = 2; i < args.length; i++) {
        //Etape 3 : on affiche à chaque fois l'argument passé par le user dans le terminal
        console.log(args[i]);
    }
}
showArgs();