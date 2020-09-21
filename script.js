const name = prompt('Veuillez saisir votre nom');
let randomNumber = Math.floor(Math.random() * 100) +1;
let playerNumber;
let i = 0;

while (randomNumber != playerNumber) {
    playerNumber = parseInt(prompt('Saisir un nombre entre 0 et 100'));
    i++
    if (playerNumber < randomNumber) {
        console.log('Votre chiffre est plus petit que le chiffre mystère');
    } else if (playerNumber > randomNumber) {
        console.log('Votre chiffre est plus grand que le chiffre mystère');
    } else 
        if (playerNumber == randomNumber) {
            alert(`Bravo ${name} vous avez trouvé le chiffre mystère en ${i} essai(s)`);
        } else {
            alert('Merci de ne pas fermer la fenetre!');
        } 
 }