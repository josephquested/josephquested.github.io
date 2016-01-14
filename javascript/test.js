
  console.log("The test.JS exists!");

$(document).ready(function(){
    $(".bg").interactive_bg(); // function call
});
 
  // change background size on window resize
  $(window).resize(function() {
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
   })