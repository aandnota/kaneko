$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
    return false;
});

$(".toggle-vg").click(function() {
	$("#x-vg").toggle('500');
});


$(".toggle-3d").click(function() {
	$("#x-3d").toggle('500');
});