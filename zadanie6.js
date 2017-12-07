// 1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver)
// a następnie zwraca stringa w następującym formacie:
//     "(FROM: sender) (TO: receiver) (MESSAGE: sms)"

function textMessage(sender, sms, receiver) {
    return '(FROM:' + sender.charAt(0).toUpperCase()
        + sender.substr(1).toLowerCase() + ') (TO:'
        + receiver.charAt(0).toUpperCase() + receiver.substr(1).toLowerCase()
        + ') (MESSAGE:' + sms.trim() + ')'
}

console.log(textMessage('janek', '       Nie mogę teraz rozmawiać. Oddzwonię po spotkaniu       ', 'FRANEK'));

// 2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName,
// a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter.
// Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe';

function getInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase()
}

console.log(getInitials('john', 'doe'));

// 3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku,
// a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"

function randomLuckyNumber () {
    return 'Twoja szczęśliwa liczba to: ' + (Math.round(Math.random()*100)/100)
}
console.log(randomLuckyNumber());

// 4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price
//
// Function get_dinner_price {
//     tip: '20';
//     tip + price;
//     var price = 100;
// }

function getDinnerPrice() {

    var price = 100,
        tip = 20;
        return price + tip;
}
console.log(getDinnerPrice());