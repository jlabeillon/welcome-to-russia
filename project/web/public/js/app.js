$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu-burger" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu-burger" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu-burger" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
