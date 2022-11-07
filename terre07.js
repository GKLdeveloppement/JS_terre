/*
Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

Exemples d’utilisation :
$> python exo.py “Hello world!”
12

$> python exo.py
erreur.

$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.
*/

function stringSize(){
    let stringArr = process.argv[2]

    if (process.argv[3] !== undefined || !isNaN(parseInt(stringArr))  ) {
        console.log("erreur.")
    } else {
        console.log(stringArr.length)
    }
}
stringSize();