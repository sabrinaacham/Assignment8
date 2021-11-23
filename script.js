var vaccinated = true;
var name = 'Hello There! ';
var message = name + 'Please present your vaccination card upon entry';

var element = document.getElementById('tea');
element.textContent = message;

var today = new Date();    //built in object

//vaxcard object containing date of second shot, the present date and their status
var vaxCard = {}
vaxCard.name = patron's name
vaxCard.secondShotDate = new Date('Sept 9, 2021');
vaxCard.presentDate = today; //referencing object
vaxCard.checkStatus = function () {
  return (this.presentDate.getTime() - this.secondShotDate.getTime()) / (1000 * 60 * 60 * 24);

};

var stat = document.getElementById('status');
stat.textContent = Math.floor(answer) + ' days after being fully vaccinated';

var answer = vaxCard.checkStatus();
//difference = (difference / (1000 * 60 * 60 * 24));

//ID object containing expiration Date
var iD = {}
iD.name = patron's name
iD.expirationDate = new Date('April 10, 2022')




//If date of entry is after September 23rd: Entry Admitted!
//If date of entry is before September 23rd: Entry Dendied!
//Otherwise: Please present your vaccination card upon Entry

 let date = 'September 9, 2021';
 if (date >= 'September 9, 2021' && date < 'September 23, 2021')
 console.log('Access Denied');
else if (date >= 'September 23, 2021' && date < 'November 10, 2021')
console.log('Access Permitted');
