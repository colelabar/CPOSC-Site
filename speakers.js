var dropdown = document.getElementsByClassName('dropDown')[0];
dropdown.addEventListener('click', function show() {
  var dropContent = document.getElementsByClassName('dropdownContent')[0];
  if (dropContent.classList == 'dropdownContent') {
    dropContent.classList.add('none');
    dropContent.classList.remove('dropdownContent');
  } else if (dropContent.classList == 'none') {
    dropContent.classList.add('dropdownContent');
    dropContent.classList.remove('none');
  }
});
