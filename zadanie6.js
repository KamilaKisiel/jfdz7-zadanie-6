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