function calcDate() {
  var cposc = new Date('November, 1 2018');
  var now = new Date();
  var numberDays = ((cposc.getTime() / 1000 / 60 / 60 / 24) - (now.getTime() / 1000 / 60 / 60 / 24));
  return Math.floor(numberDays);
}
function countdownTimer(string) {
  string = string + '';
  string.split('')
  var firstString = document.createTextNode(string[0]);
  var firstBox = document.getElementsByClassName('count-box1')[0];
  firstBox.appendChild(firstString);
  var secondString = document.createTextNode(string[1]);
  var secondBox = document.getElementsByClassName('count-box2')[0];
  secondBox.appendChild(secondString);
  var thirdString = document.createTextNode(string[2]);
  var thirdBox = document.getElementsByClassName('count-box3')[0];
  thirdBox.appendChild(thirdString);
}
countdownTimer(calcDate());
