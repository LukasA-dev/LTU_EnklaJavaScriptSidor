// Funktion för att generera en array med 10 unika slumpmässiga tal mellan 1 och 100
function genereraUnikaTal() {
    const talArray = []; // Skapa en tom array för att lagra de slumpmässiga talen
    while (talArray.length < 10) { // Loopa tills arrayen innehåller 10 tal
        const tal = Math.floor(Math.random() * 100) + 1; // Generera ett slumpmässigt heltal mellan 1 och 100
        if (!talArray.includes(tal)) { // Kontrollera om det slumpmässiga talet redan finns i arrayen
            talArray.push(tal); // Om inte, lägg till talet i arrayen
        }
    }
    return talArray; // Returnera den genererade arrayen med unika tal
}

// Funktion för att sortera en array av tal i stigande ordning
function sorteraTal(array) {
    return array.sort((a, b) => a - b); // Använd array.sort() för att sortera talen i stigande ordning
}

// Funktion för att visa talen i HTML
function visaTal(array, elementId, beskrivning) {
    const element = document.getElementById(elementId); // Hämta referensen till det HTML-element som ska uppdateras
    if (element) { // Kontrollera om elementet finns
        // Uppdatera HTML-innehållet med de aktuella talen och beskrivningen
        element.innerHTML = `<strong>${beskrivning}</strong> ${array.join(', ')}`;
    }
}

// Generera arrayen med unika tal och spara i en variabel
const osorteradeTal = genereraUnikaTal();

// Sortera de genererade talen och spara i en annan variabel
const sorteradeTal = sorteraTal([...osorteradeTal]); // Använder spread operator för att klona arrayen

// Visa både de osorterade och sorterade talen i HTML-dokumentet
visaTal(osorteradeTal, 'osorteradeTal', 'Osoterade tal');
visaTal(sorteradeTal, 'sorteradeTal', 'Sorterade tal');


// Registreringsformulär
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att formuläret skickas direkt

    // Hitta fältelement och felmeddelandeelement
    var username = document.getElementById('username').value; // Hämta användarnamnet från formuläret
    var password = document.getElementById('password').value; // Hämta lösenordet från formuläret
    var confirmPassword = document.getElementById('confirmPassword').value; // Hämta bekräftelsen av lösenordet från formuläret
    var email = document.getElementById('email').value; // Hämta e-postadressen från formuläret
    var terms = document.getElementById('terms').checked; // Hämta om användaren godkänt villkoren från formuläret
    var errorMessages = document.getElementById('errorMessages'); // Hämta referensen till felmeddelandeelementet

    // Töm tidigare felmeddelanden
    errorMessages.innerHTML = '';

    // Skapa en array för att lagra felmeddelanden
    var errors = [];

    // Kontrollera att användarnamnet är minst 3 tecken långt
    if (username.length < 3) {
        errors.push("Användarnamnet måste vara minst 3 tecken långt.");
    }

    // Kontrollera att lösenorden matchar
    if (password !== confirmPassword) { 
        errors.push("Lösenorden matchar inte."); 
    }


    // Kontrollera att epostadressen är giltig
    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
        errors.push("E-postadressen är inte giltig.");
    }

    // Kontrollera att användaren godkänt villkoren
    if (!terms) {
        errors.push("Du måste godkänna villkoren för att fortsätta.");
    }

    // Visa felmeddelanden om det finns
    if (errors.length > 0) {
        errors.forEach(function(error) {
            var errorElement = document.createElement('div');
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    } else {
        // Omdirigera till tack-sidan om allt är korrekt
        window.location.href = 'thankyou.html';
    }
});

// HTML5-registreringsformulär
document.getElementById('html5RegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas till en server
    alert('Tack för din registrering!'); // Visar ett tackmeddelande i en alertruta
});