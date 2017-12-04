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