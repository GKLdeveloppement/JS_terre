/*
L'alphabet : 
Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.
*/

function showAlphabet(){
    //l'alphabet dans la table ASCII commence à 96 et termine à 123
    const codeAscii = 97;
    const limitAscii = 123;
    let alphabet = ""

    for (let i=codeAscii; i < limitAscii; i++) {
        alphabet += String.fromCharCode(i)
    }
    //le \n est là pour le retour à la ligne
    console.log(alphabet + "\n")
}
showAlphabet();