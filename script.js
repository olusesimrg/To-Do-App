//addin line through and changin the color to gray
$("ul").on("click", "li", function(){
	$(this).toggleClass("connect");
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val("");
//creating a new li and add to the ul
		$("ul").append('<li><span><i class="fas fa-trash"></i></span>' + todoText + '</li>');
	}
});

// creating the delate button
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//hiding and showing the text input
$(".icon").click(function(){
	$("input[type='text']").fadeToggle(700);
});
