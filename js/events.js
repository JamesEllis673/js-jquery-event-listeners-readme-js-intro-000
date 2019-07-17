function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  document.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key = 'g') {
      alert('You pressed the G key!');
    }
  });
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()

});
