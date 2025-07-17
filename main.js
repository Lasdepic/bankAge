// Outils de node.js pour intéragir avec le terminal

const readline = require('readline'); // https://nodejs.org/api/readline.html#rlquestionquery-options

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables
let compte = 3000;
let facture = 1200;
let loisir = 300;

// Fonction qui calcule le solde restant
function soldeRestant(compte, facture, loisir) {
    return compte - facture - loisir;
}

// Fonction de retrait
function retraitArgent(solde, retrait) {
    return solde - retrait;
}

// Demande prénom
rl.question("Comment vous appelez-vous ? ", function(user) {
    console.log(`Je m'appelle ${user}`);

    // Demande âge
    rl.question("Quel est votre âge ? ", function(age) {
        age = parseInt(age); // converti en nombre

        // Demande montant à retirer
        rl.question("Quel montant souhaitez-vous retirer ? ", function(retrait) {
            retrait = parseInt(retrait); // converti en nombre

            console.log(`Vous avez ${age} ans.`);

            let solde = soldeRestant(compte, facture, loisir);
            console.log(`Bonjour ${user}, votre solde est de ${solde} euros.`);

            if (age <= 18) {
                console.log("Vous n'avez pas le droit de retirer de l'argent.");
            } else {
                console.log("Vous pouvez retirer de l'argent.");

                if (retrait > solde) {
                    console.log(`Vous n'avez pas assez d'argent pour retirer ${retrait} euros.`);
                } else {
                    console.log(`Opération réussie, vous avez retiré ${retrait} euros.`);
                    solde = retraitArgent(solde, retrait);
                }

                console.log(`Votre nouveau solde est de ${solde} euros.`);
            }

            rl.close(); // sinon mon code ne s'arrete pas
        });
    });
});
