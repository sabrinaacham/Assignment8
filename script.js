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

//assignment10

function idCard (patronName, expirationDate){
  this.name = patronName;
  this.expirationDate = new Date (expiryDate);
  this.today = new Date();
  this.checkExpiry = function() {
    var difference = this.today.getTime() - this.expirationDate.getTime();
    var sign = Math.sign(difference)
    if (sign == -1) {
      return false;
    } else if (sign == 1){
      return true;
    }

 var patron1 = new idCard('Daenerys Targaryen ', '01/011/2022');
 var patron2 = new idCard('Brienne OfTarth', '01/01/2022');
 var patron3 = new idCard('Jamie Lannister', '23/04/2021');
 var patron4 = new idCard('Daario Naharis', '30/06/2024');
 var patron5 = new idCard('Ned Stark', '12/04/2023');
 var patron6 = new idCard('Jorah Mormont', '04/13/2020');

 var idCardArray = [patron1,patron2, patron3, patron4, patron5, patron6];

 if (idCardArray.checkExpiry == true) {
   var reply = "Your ID has expired"
   return reply;
 }else if

  function vaccinationCard(patronName, secondShotDate, firstShotDate) {
    this.name = patronName;
    this.secondShotDate = new Date(second);
    this.firstShotDate = new Date(first);
    this.checkDifference = function() {
      var today = new Date();
      var difference = today.getTime() - this.secondShotDate.getTime();
      difference = Math.floor(difference / 86400000);
      return difference;
    }


    this.checkVaccinationCard = function(index) {
      var date = this.checkDifference();
      var twoWeekWindow = 14 - date;

      //if (twoWeekWindow == 1) {
      //  Message = "day";
      //} else {
      //  Message = "days";
      //}
