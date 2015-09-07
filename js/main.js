$(document).ready(function(){
    $('p').fadeIn(4000);
    $('h2').fadeTo(10000,1);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
 $('button').click(function(e) {
    e.preventDefault();
    var new_tag = $('input').val();
    if (new_tag == '') {
        alert("Really? Nothing? You must be a robot!");//code
    }
    else {
    $('#list').append('<li style="margin:0 2.5px 1em 2.5px;">'+new_tag+'</li>').css('margin', '0 1em 0 1em');
    }
 });
});



