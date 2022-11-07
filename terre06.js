/*
Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH

$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

function reverseString() {
    let stringArr = process.argv[2]
    let reverseStr = [];

    for (let i = stringArr.length - 1; i >= 0; i--) {
        reverseStr += (stringArr[i])
    }
    console.log(reverseStr)
}
reverseString();