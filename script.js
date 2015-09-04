var mode;
var colours = [];
$(document).ready(function(){
	$("#aColButton").click(function(e){
		addColour("000000");	
	});
});

function colourPosted(sender, index){
	var colour = $('#c'+index).val()
	colours[index] = colour;	
}
function deleteColour(index){
	colours.splice(index,1 );
	refreshColourList();

}
function addColour(colour){
	colours.push(colour);
	refreshColourList();
}
function refreshColourList(){
		$list = $("#colourlist");
		$list.empty();
	$.each(colours, function(i){
		$list.append("<li><input type='color' value='" + colours[i] + "' name='test' id='c"+i+"' onchange='colourPosted(this, "+i+")'><button type='button'  class='btn btn-default btn-xs' onclick='deleteColour("+i+")'>X</button> </li> ");
});
}
function submit(){
	switch(mode){
		case "strobe":

	}
		
}

function getRequest(url){
	$.get(
			"http://192.168.1.141:8080",
			crossDomain: true,
			{mode: "breathe", hexcolour: "#FF0000"}, 
			function (data){
				
			}
	     );
}
