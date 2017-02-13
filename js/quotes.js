$(document).ready(function() {

  $(".quote").html('<i class="fa fa-quote-left" aria-hidden="true"></i> Never interrupt your enemy when he is making a mistake. <i class="fa fa-quote-right" aria-hidden="true"></i>');
  $(".author").html("- Napoleon Bonaparte (1769-1821)");
  var colors = ["#00FFFF", "#FFFF00", "#FFA500", "#00FF00"];
  var randColor;
  var quot = "Never interrupt your enemy when he is making a mistake. - Napoleon Bonaparte (1769-1821)";

  $("#new").on('click', function() {
    
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json) {

      randColor = colors[Math.floor(Math.random() * colors.length)];
      var begin = '<i class="fa fa-quote-left" aria-hidden="true"></i> ';

      var end = ' <i class="fa fa-quote-right" aria-hidden="true"></i>';
      $(".quote").html(begin + json.quote + end);
      $(".quote").css({
        'color': randColor
      });
      quot = json.quote + " - " + json.author;
      $(".author").html("- " + json.author);
      $(".author").css({
        'color': randColor
      });

      $(".quotes").css({
        'border': randColor
      });
         $(".quotes").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated pulse');
    });   
    });
  });

  $("#tweet").on('click', function() {
    window.open("https:twitter.com/intent/tweet?text=" + quot);
  });
});