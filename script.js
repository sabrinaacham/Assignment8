var vaccinated = true;
var name = 'Hello There! ';
var message = name + 'Please present your vaccination card upon entry';

var element = document.getElementById('tea');
element.textContent = message;

var today = new Date();
var year = today.getFullYear();
var fullyvaxed = new Date('Sept 9, 2021');
var difference = today.getTime() - fullyvaxed.getTime();
difference = (difference / (1000 * 60 * 60 * 24));

var Stat = document.getElementById('status');
Stat.textContent = Math.floor(difference) + ' days after being fully vaccinated';

//If date of entry is after September 23rd: Entry Admitted!
//If date of entry is before September 23rd: Entry Dendied!
//Otherwise: Please present your vaccination card upon Entry

 let date = 'September 9, 2021';
 if (date >= 'September 9, 2021' && date < 'September 23, 2021')
 console.log('Access Denied');
else if (date >= 'September 23, 2021' && <'November 10, 2021')
console.log('Access Permitted');
