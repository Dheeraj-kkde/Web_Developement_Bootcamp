$("h1").css("color","red");

$("a").attr("href","https://www.bing.com");

$("button").click(function(){
  $("h1").css("color","purple");
});

$(document).keypress(function(event){
  //console.log(event.key);
  $("h1").text(event.key);
});
