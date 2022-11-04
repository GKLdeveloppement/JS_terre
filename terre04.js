/*
Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair

$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.

Attention : gérez aussi les entiers négatifs.
*/

function pairOuImpair() {
    let arg = parseInt(process.argv[2]);

    //isNaN = is Not a Number
    if (!isNaN(arg)) {
        arg % 2 == 0 ? console.log("pair") : console.log("impair")
    } else {
        console.log("Tu ne me la mettras pas à l'envers.")
    }
}

pairOuImpair();