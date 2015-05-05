var number = 16;
var color = "#660066";
$(document).ready(function(){
	initialCanvas();
	$('#default').click(initialCanvas); 
	$('#resize').click(resizeCanvas);
	$('#color').click(createColor);
	
	function initialCanvas(){
		$( "#canvas" ).empty();
		var table = document.getElementById("canvas");
		number = 16;
		color = "#660066";
		for(i = 0; i < number; i++)
		{
			var row = table.insertRow(i);
			for(j = 0; j < number; j++)
			{
			row.insertCell(j);
			}
		};
		$('table tbody td').mouseover(function() {
			$(".selectedCell").css("backgroundColor", color);
			$(this).addClass('selectedCell');
	});}
	
	function resizeCanvas() {
		$( "#canvas" ).empty();
		number = prompt("How 'pixels' would you like on each side? (1-100)");
		var table = document.getElementById("canvas");
		for(i = 0; i < number; i++)
		{
			var row = table.insertRow(i);
			for(j = 0; j < number; j++)
			{
				row.insertCell(j);
			}
		};
		$('table tbody td').mouseover(function() {
			$(".selectedCell").css("backgroundColor", color);
			 $(this).addClass('selectedCell');
		  })
		};
	
	function createColor() {
		$( "#canvas" ).empty();
		color = prompt("What color would you like to use?")
			var table = document.getElementById("canvas");
		$(".selectedCell").css("backgroundColor", color);
		for(i = 0; i < number; i++)
		{
			var row = table.insertRow(i);
			for(j = 0; j < number; j++)
			{
				row.insertCell(j);
			}
		};
		$('table tbody td').mouseover(function() {
			$(".selectedCell").css("backgroundColor", color);
			 $(this).addClass('selectedCell');
		  })
		};
	
});
