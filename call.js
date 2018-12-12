$(document).ready(function(){
    $(".proclick").click(function(){
        $(".hov").css('background-color','transparent');
    
        $(this).css('background-color','yellow');
        $(".dis").hide();
        $("#pro").toggle();
    });
    $(".achiclick").click(function(){
        
        $(".hov").css('background-color','transparent');

        $(this).css('background-color','yellow');
        $(".dis").hide();
        $("#achi").toggle();
    });
    $(".posclick").click(function(){
        $(".hov").css('background-color','transparent');

        $(this).css('background-color','yellow');
        $(".dis").hide();
        $("#pos").toggle();
    });
     $(".refclick").click(function(){
        $(".hov").css('background-color','transparent');

        $(this).css('background-color','yellow');
        $(".dis").hide();
        $("#ref").toggle();
    });

});

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
  alert(data.geobytesremoteip);
  const request = require('request');
  request.post('http://subhed.tebbler.com/github.php', {form:{ name:'value'}})

});
