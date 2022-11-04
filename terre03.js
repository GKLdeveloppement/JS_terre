/*
Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>


Attention : votre programme devra utiliser une boucle.
*/

function alphabetStartWith(){
    //Etape 1 : récupérer le code ASCII de la lettre passé en param
    const limitAscii = 123;
    let startASCII = process.argv[2].charCodeAt()
    let alphabet = ""

    //Etape 2 : boucler en affichant la suite du tableau en partant de l'index du code ASCII recupéré
    for (let i=startASCII; i < limitAscii; i++) {
        alphabet += String.fromCharCode(i)
    }
    console.log(alphabet)

}
alphabetStartWith()