function closeArticle(article){
	article.css("opacity", 0);
	setTimeout(function(){
		article.css("visibility", "hidden")
	}, 500);
}

$(".bubble").click(function(){
	var bubble = $(this)
	var article = $("#"+bubble.data("article"));
	article.css({"visibility": "visible", "opacity": 1});
})

$(".close").click(function(){
	var article = $(this).parent();
	closeArticle(article);
})