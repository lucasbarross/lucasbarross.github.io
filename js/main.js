$(".bubble").click(function(){
	var bubble = $(this)
	var article = $("#"+bubble.data("article"));
	article.fadeToggle();
})

$(".close").click(function(){
	var article = $(this).parent();
	article.fadeToggle();
})
