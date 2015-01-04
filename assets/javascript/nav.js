/**
 * 单页面处理程序
 * @param  {[type]} ){} [description]
 * @return {[type]}       [description]
 */
// $(function() {
// 	var href=document.location.href;
// 	if (href=== "http://atchina.me/"||href==="http://127.0.0.1:4000/") {
// 		href= "http://atchina.me/about.html";
// 	}
// });
// window.onload = function() {
// 	var href = document.location.href;
// 	if (href === "http://atchina.me/" || href === "http://127.0.0.1:4000/") {
// 		document.location.href = href + "about.html";
// 	}
// };
var href = document.location.href;
if (document.location.href === "http://atchina.me/" || document.location.href === "http://127.0.0.1:4000/") {
	document.location.href = href + "about.html";
}