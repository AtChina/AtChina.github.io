//Redirect Index.html Page To About.html Page,when first Visit Blog.
var href = document.location.href;
if (document.location.href === "http://atchina.me/" || document.location.href === "http://127.0.0.1:4000/") {
	document.location.href = href + "about.html";
}