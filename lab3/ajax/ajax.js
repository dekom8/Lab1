document.getElementById("getJsonTable").addEventListener("click", function(){
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'ajax/phones.json', false);
xhr.send();
if (xhr.status!=200){
    alert(xhr.status+': '+ xhr.statusText);
}else{
    var object = JSON.parse(xhr.response);
    var table = document.getElementById("jsonTable");
    var row = table.insertRow();
    for (var key in object[0]){
        if(object[0].hasOwnProperty(key)){
            var row = table.insertRow();
            var keycell = row.insertCell();
            var valuecell = row.insertCell();
            keycell.innerHTML = key;
            valuecell.innerHTML = object[0][key];
        }
    }
}
});

document.getElementById("getText").addEventListener("click", function(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'ajax/story.txt', false);
xhr.send();
if (xhr.status!=200){
	alert(xhr.status+': '+ xhr.statusText);
}else{
	var block = document.getElementById('textBlock');
	block.innerHTML = xhr.response;
    block.style.display = "block";
}
});

document.getElementById("getHTMLFromXml").addEventListener("click", function(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'ajax/xml.xml', false);
xhr.send();
if (xhr.status!=200){
	alert(xhr.status+': '+ xhr.statusText);
}
else{
	var parser = new DOMParser();
	var xmlDOC = parser.parseFromString(xhr.response, "text/xml");
	console.log(xmlDOC);
	var div = document.getElementById("for-xml");
	var xmlText = new XMLSerializer().serializeToString(xmlDOC);
	console.log(xmlText);
	div.innerHTML = xmlText;
}
});


var uploadImage = document.querySelector('#image-input');
uploadImage.addEventListener('change', function () {
    var files = this.files;
    for(var i=0; i<files.length; i++){
        previewImage(this.files[i]);
    }
}, false);

function previewImage(file) {
    var galleryId = "gallery";
    var gallery = document.getElementById(galleryId);
    var imageType = /image.*/;
    if (!file.type.match(imageType)) {
        throw "File Type must be an image";
    }
    var thumb = document.createElement("div");
    thumb.classList.add('thumbnail'); // Add the class thumbnail to the created div
    var img = document.createElement("img");
    img.file = file;
    thumb.appendChild(img);
    gallery.appendChild(thumb);
    // Using FileReader to display the image content
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
}

var uploadVideo = document.querySelector('#video-input');
uploadVideo.addEventListener('change', function () {
    var file = this.files[0];
    viewVideo(file);
}, false);
	
function viewVideo(file) {
    var videoId = "video";
    var videoDiv = document.getElementById('video');
    videoDiv.innerHTML="";
    var videoType = /video.*/;
    if (!file.type.match(videoType)) {
        throw "File Type must be an video";
    }
    var video = document.createElement("video");
    video.classList.add('video');
    video.setAttribute('controls', ""); 
    video.file = file;
    videoDiv.appendChild(video);
    // Using FileReader to display the image content
    var reader = new FileReader();
    reader.onload = (function(aVideo) { return function(e) { aVideo.src = e.target.result; }; })(video);
    reader.readAsDataURL(file);
}

