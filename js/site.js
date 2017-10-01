$(document).ready(function() {

$("a").hover(function(){
    $(this).css("overlay", "yellow");
    }, function(){
    $(this).css("background-color", "pink");

});