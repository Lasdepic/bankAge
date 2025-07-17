//Variable

let user = "Jordan";
let age = 30;
let compte = 3000;
let facture = 1200;
let loisir = 300;
let retrait = 500;


// Fonction calule le solde restant

function soldeRestant(compte, facture, loisir) {
    let solde = compte - facture - loisir;
    return solde;
}

console.log("Bonjour " + user + ", votre solde est de " + soldeRestant(compte, facture, loisir) + " euros.");

// Fonction de retrait avec conditon pour le retrait d'argent

function retraitArgent(solde, retrait){
    return solde - retrait; 
}

if (age <= 18){
    console.log("Vous n'avez pas le droit de retirer de l'argent.");
    return;
} else {
    console.log("Vous pouvez retirer de l'argent.");
}

if (retrait > soldeRestant(compte, facture, loisir)) {
    console.log("Vous n'avez pas assez d'argent pour retirer " + retrait + " euros.");
} else {
    console.log("Opération réussie, vous avez retiré " + retrait + " euros.");
}

console.log("Votre nouveau solde est de " + retraitArgent(soldeRestant(compte, facture, loisir), retrait) + " euros.");


