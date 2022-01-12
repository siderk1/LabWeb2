function funcA(){
	var tmp = document.getElementById('exch1').innerHTML;
	document.getElementById('exch1').innerHTML = document.getElementById('div6').innerHTML;
	document.getElementById('div6').innerHTML = tmp;
	
}

function solveS(){
	var d1 = 5;
	var d2 = 16;
	var s = (d1+d2)/2;
	document.getElementById('div5').innerHTML += s;

}
function generate(){
	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.innerText = "add Image";
	button.setAttribute("onclick", "addImage()");

	var button1 = document.createElement("button");
	button1.setAttribute("type", "button");
	button1.innerText = "store and add to div4";
	button1.setAttribute("onclick", "storeImages()");

	var button2 = document.createElement("button");
	button2.setAttribute("type", "button");
	button2.innerText = "clear Images";
	button2.setAttribute("onclick", "clearImages()");

	document.getElementById("div5").appendChild(button);
	document.getElementById("div5").appendChild(button1);
	document.getElementById("div5").appendChild(button2);

}
function storeImages(){
	var items = document.getElementsByClassName("imgs");

	for(var i = 0; i<items.length; i++){
		var current = items[i]
		localStorage.setItem(i,current.src);
	}
	for(var i = 0; i<items.length; i++){
		document.getElementById("div4").innerHTML += "<img src="+localStorage.getItem(i)+ "></img>";
	}
	//document.querySelectorAll('.imgs').forEach(e => document.getElementById("div4").appendChild(e));
}

function clearImages(){
	document.querySelectorAll('.imgs').forEach(e => e.remove());


}

function addImage(){
	var imgSrc = "http://vid.speechyard.com/downloader/videos/5804e9fa7f8b9a3a188b46ca/medium/8.jpg";
	var img = new Image();
	img.src = imgSrc;
	img.className = "imgs";
	document.getElementById("div1").appendChild(img);
	var imgSrc2 = "https://static-sl.insales.ru/images/products/1/2473/20548009/%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B5%D1%82%D0%BA%D0%B0.jpg";
	var img2 = new Image();
	img2.src = imgSrc2;
	img2.className = "imgs";

	document.getElementById("div1").appendChild(img2);
}
function minmaxArray(el) {
	var input = el.array.value.split(',').map(Number).filter(a => a==0 ? true : !!a).sort(); //input string to num array and delete all falsy + sort
	var min = input[0];
	var max = input[input.length-1]
	alert("min is: " + min + " max is: " + max); 
	document.cookie = "min=" + min;
	document.cookie = "max=" + max;
	return true;
}

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (document.cookie.split(';').filter((x) => x.trim().startsWith('color=')).length) {
	var items = document.getElementsByClassName("item");
	var color = localStorage.getItem("color");
	for (var i = 0; i<items.length; i++) {
		items[i].style.borderColor = color;
	}
}
if (document.cookie.split(';').filter((x) => x.trim().startsWith('min=')).length) {

    var min = getCookie("min");
    var max = getCookie("max");
    document.getElementById("arrayinp").remove();
    if(confirm("min is: " + min + " max is: " + max + "\n Do you want to delete this values?")){
    	document.cookie = "min=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "max=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
		window.location.reload(true);

	}else{
		confirm("You have some cookies, you  need to reload page");
	}
}

var colorer = document.getElementById("colorer");
colorer.addEventListener("focus", function (){
	var items = document.getElementsByClassName("item");
	for (var i = 0; i<items.length; i++) {
		items[i].style.borderColor = colorer.value;
	}
	localStorage.setItem("color", colorer.value)
})

