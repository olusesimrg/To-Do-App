
//addin line through and changin the color to gray
$("li").click( function() {
	$(this).toggleClass("connect");
});

//creating the delate button

$("span").click( function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val("");
//creating a new li and add to the ul
		$("ul").append("<li><span>X</span>" + todoText + "</li>");
	}
});
//hiding and showing the text input
$(".plus").click(function(){
	$("input[type='text']").fadeToggle(700);
});