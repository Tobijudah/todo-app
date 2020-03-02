// strikethrough and gray out onclick
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

// delete todo onclick
$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
	event.stopPropagation();
});

$("input[type='text']").keypress(function (e) { 
    if (e.which === 13){
        var newTodo = $(this).val()
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>")
        $(this).val("")
    }
});

$(".fa-plus").on("click", function(){
    $("input").fadeToggle(400);

})