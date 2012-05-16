var subCount = 0;

$(document).ready(function() {

    $(".listitem").each(function(index) {
    	$(this).css("top", ((index + 1.5) * 6) + "%");
    });

    $(".listitem").click(function(e) {
   		displayCode($(this).attr("id").replace("sub", ""));
    });

    $(".hiddenListitem").click(function(){
   		displayCode($(this).attr("id").replace("sub", ""));
    });

    $(".notes").click(function(e) {
		$("#notes").hide();
		var notes = $(this).parents().filter("li").attr("data-notes");
		if (notes != "") $("#notes").text(notes).show();
    	e.stopPropagation();
    });

    $("#notes").click(function() {
   		$("#notes").hide();
    });

    $("#code").click(function() {
   		$("#code").hide();
    });

    $("#navPrev").click(function() {
        window.location.href = prev;
    });

    $("#navNext").click(function() {
        window.location.href = next;
    });

    $("#main").click(function(){
    	subCount++;
    	var id = "#sub" + subCount;
    	$(id).css("top", ((subCount + 1.5) * 6) + "%");
    	$(id).show();
    });
});

function spaces(times) {
	var spaces = "";
	
	times += "";

	if (times.substr(0, 1) == "-") {
		times = parseInt(times.substr(1));
	} else {
		spaces = "<br />";
		times = parseInt(times);
	}

	for (t = 0; t < times; t++) {spaces += "&nbsp;"};

	return spaces;
}
