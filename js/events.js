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
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('You pressed the G key');
    }
  });
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()

});
