//Redirect Index.html Page To About.html Page,when first Visit Blog.
var href = document.location.href;
if (document.location.href === "http://atchina.me/" || document.location.href === "http://127.0.0.1:4000/") {
	document.location.href = href + "about.html";
}
//Disabled Copy
window.onload = function() {
	document.body.onmouseup = document.selection.empty();
	document.body.oncontextmenu = "return false";
	document.body.onselectstart = "return false";
	document.body.ondragstart = "return false";
	document.body.onbeforecopy = "return false";
	document.body.oncopy = document.selection.empty();
}