function tickets(x) {
  var tick = document.getElementsByClassName('ticketDrop');
      tick[x].classList.toggle('ticketShow');
    }

var valueDisplay = document.getElementsByClassName('ticketValueDisp');
function valDisplay(vari, val) {
  valueDisplay[vari].innerHTML = val;
}


function ticketsCalc(h,y,w,x,v,s) {
  var ticketTotal = document.getElementsByClassName('tickTotal')[0];
  var answer = (y*42);
  var open = (w*0);
  var college = (x*10);
  var high = (v*0);
  var totes = (answer + open + college + high);
  ticketTotal.innerHTML = totes;
  tickets(h);
  valDisplay(h,s);
}
