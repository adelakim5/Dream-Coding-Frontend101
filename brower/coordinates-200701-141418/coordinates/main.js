if(document.addEventListener){
    document.addEventListener("mousemove", showCoordinates, false)
    // chrome
} else if (document.attachEvent){
    document.attachEvent("onmousemove", showCoordinates)
    // ie
} else {
    document.onmousemove = showCoordinates
}

var result = document.getElementById('result')
var row = document.getElementById('row')
var col = document.getElementById('col')
// var cursor = document.getElementsById("cursor")
function showCoordinates(position){
    var positionLeft = position.clientX
    var positionTop = position.clientY
    var cursorText = (positionLeft+ 80) + "px, " + (positionTop + 80) + "px"
    result.innerHTML = cursorText
    // result.css({'cursor' : 'url(img/target.png)'})
    result.style.left = positionLeft + 80 +"px"
    result.style.top = positionTop + 80 + "px"
    col.style.left = positionLeft + +59 +"px"
    col.style.top = 0 + "px"
    row.style.top = positionTop + 59 + "px"
    row.style.left = 0 + "px"
}
