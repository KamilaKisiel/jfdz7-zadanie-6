// task 1.

function textMessage(sender, sms, receiver) {
    return '(FROM:' + sender.charAt(0).toUpperCase()
        + sender.substr(1).toLowerCase() + ') (TO:'
        + receiver.charAt(0).toUpperCase() + receiver.substr(1).toLowerCase()
        + ') (MESSAGE:' + sms.trim() + ')'
}

console.log(textMessage('janek', '       Nie mogę teraz rozmawiać. Oddzwonię po spotkaniu       ', 'FRANEK'));

// task 2.

function getInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase()
}

console.log(getInitials('john', 'doe'));

// task 3.

function randomLuckyNumber () {
    return 'Twoja szczęśliwa liczba to: ' + (Math.random()*100).toFixed(2);
}
console.log(randomLuckyNumber());

// task 4.

function getDinnerPrice() {

    var price = 100,
        tip = 20;
        return price + tip;
}
console.log(getDinnerPrice());