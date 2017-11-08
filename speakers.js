var dropdown = document.getElementsByClassName('dropDown');

dropdown.onclick = function show() {
  var dropContent = document.getElementsByClassName('dropdownContent');
  if (dropContent.css({'display' : 'none'})) {
    dropContent.css({'display' : 'block'});
  } else if (dropContent.css({'display' : 'block'})) {
    dropContent.css({'display' : 'none'});
  }
}
