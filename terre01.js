/*
Créez un programme qui affiche son nom de fichier.
*/

function fileName(){
    //Etape 1 : avoir le chemin du fichier
    const urlFile = __filename
    //Etape 2 : Découper la string par le /
    let filenameArr = urlFile.split("/")
    //Etape 3 : récupérer le dernier élément
    let lastItem = filenameArr.pop()
    console.log(lastItem)
}

fileName();