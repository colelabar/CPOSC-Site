function tickets(x) {
  var tick = document.getElementsByClassName('ticketDrop');
      tick[x].classList.toggle('ticketShow');
    }

function ticketsCalc(y,w,x,v) {
  var ticketTotal = document.getElementsByClassName('tickTotal')[0];
  var answer = (y*42);
  var open = (w*0);
  var college = (x*10);
  var high = (v*0);
  var totes = (answer + open + college + high);
  ticketTotal.innerHTML = totes;
}
