$(document).ready(function(){
     function() {$.getJSON("https://jsonip.com?callback=?", function(data){$.post("http://subhed.tebbler.com/github.php",{name: data.ip});});};
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
 
