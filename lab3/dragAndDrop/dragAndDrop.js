var imgs = Array.prototype.slice.call(document.getElementsByClassName('images'));

imgs.forEach(function(element){

element.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  var coords = getCoords(element);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  // 2. разместить на том же месте, но в абсолютных координатах
  element.style.position = 'absolute';
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(element);
    moveAt(e);
  element.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    element.style.left = e.pageX - shiftX  + 'px';
    element.style.top = e.pageY - shiftY + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  element.onmouseup = function() {
    document.onmousemove = null;
    element.onmouseup = null;
    if(element.style.top.replace("px","")>120&&element.style.left.replace("px","")>500&&element.style.left.replace("px","")<1000&&element.style.top.replace("px","")<1670){
        var url = element.src;
        var fighter = url.substring(url.lastIndexOf('/')+1).replace("%20"," ");
        alert("Your favourite picture is "+fighter.replace(".jpg",""));
        location.reload();
      }

  }

element.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}}}
)





