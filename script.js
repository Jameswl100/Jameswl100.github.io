var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX) + 'px',
        y = (e.clientY) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};