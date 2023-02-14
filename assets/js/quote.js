$(function() {
  //data used to simulate an ajax request on jsfiddle
  var mockData = { html : "We talked yesterday\nFreshman boys!\n5/10\nI'm having a heart attack *pounds chest super hard"};
  
	$.ajax({
  	type: "POST",
  	url: "/echo/html/",
    data: mockData,
  }).then(function(data) {
  	var lines = data.split('\n');
    var index = Math.floor(Math.random() * lines.length);
		$("#quoteDisplay").html(lines[index]);
  });
})