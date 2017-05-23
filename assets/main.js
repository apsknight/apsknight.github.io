var attribute = ["Aman Pratap Singh",
                 "an Indian",
                 "a Computer Science Undergraduate",
                 "an IITian",
                 "a CS:Go Fanatic",
                 "a Quoraphile",
                 "an ambivert",
                 "an agnostic",
                 "a programmer",
                 "interested in MEAN stack",
                 "looking for some cool projects"];

var len = attribute.length;

var i = 0;
var j = 0;
function myLoop () {
   var temp = setTimeout(function () {
      $(".magic").append(attribute[i][j]);
      j++;
      if (j <= attribute[i].length) {
         myLoop();
      }
      else {
        setTimeout(function(){
          $(".magic").text("");
          i = (i + 1)%len;
          j = 0;
          myLoop();
        }, 2000);
      }
   }, 130);
};

function blink() {
  setInterval(function() {
    $(".cursor").toggleClass('trans');
  }, 400);
};

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".name").addClass('trans');
  blink();
  setTimeout(function() {
    myLoop();
    $(".attribute").css("opacity", 1);
  }, 1500);

  if($(window).width() >= 1024){
    $(".main-btn").click();
  };
  $(".main-btn").click(function(){
    $(".main-btn").toggleClass("pulse");
  });

});
