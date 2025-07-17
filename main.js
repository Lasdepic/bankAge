let user = "Jordan";
let age = 30; // Changé en nombre au lieu de chaîne
let bank = 1200;
let depense = 300;

function major(age) {
    if (age < 18) { // Changé <= en < pour une logique plus correcte
        console.log("Vous ne pouvez pas retirer de l'argent");
        return false;
    }
    else {
        console.log("Vous pouvez retirer de l'argent");
        return true;
    }
}

function restant(bank, depense) {
    let reste = bank - depense;
    if (reste <= 0) {
        console.log("Fonds insuffisants");
    }
    else {
        console.log("Il vous reste " + reste + " euros");
    }
    return reste; // Retourner la valeur pour l'utiliser ailleurs
}

// Appeler les fonctions et utiliser leurs résultats
major(age);
let soldeRestant = restant(bank, depense);
console.log(user + " Il vous reste " + soldeRestant + " euros dans votre compte");