var svg;
var ns = 'http://www.w3.org/2000/svg';
var count = 0;

var rand = function (min, max) {
    return min + Math.round(Math.random() * (max - min));
};

var crt = function (x, y, n) {
    for(var i =0; i < n; i++) {
        var cx = x + rand(20,40);
        var cy = y + rand(20,40);
        createCircle(cx, cy, 30+i*10);
    }
};

var makeRGB = function () {
    return 'rgba(' + rand(0,255) + ',' + rand(0,255) + ',' + rand(0,255) + ',' + rand(0,255) * 0.004 + ')'; 
}

var pln = function (p1, p2, p3, n) {
    for(var i=0; i < n; i++){
        var x1 = p1;
        var y1 = p1 + rand(0,300);
        var x2 = p2;
        var y2 = p2 + rand(-80,300);
        var x3 = p3;
        var y3 = p3 + rand(-120,20);
        createPolyline(x1, y1, x2, y2, x3, y3);
    }
};

var createCircle = function (cx, cy, r) {
    var c = document.createElementNS(ns,'circle');
    c.setAttribute('cx',cx);
    c.setAttribute('cy',cy);
    c.setAttribute('r',r);
    c.setAttribute('fill','none');
    c.setAttribute('stroke', 'rgba(' + rand(0, 255) + ',0,0,0.5)');
    c.setAttribute('stroke-width', rand(1,10));
    svg.appendChild(c);
};

var createPolyline = function (x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
    var pl = document.createElementNS(ns,'polyline');
    pl.setAttribute('fill', 'none');
    pl.setAttribute('stroke', makeRGB());
    pl.setAttribute('points', rand(x1-10, x1+10) + ',' + rand(y1-150, y1+150) + ',' + rand(x2-10, x2+10) + ',' + rand(y2-150, y2+150) + ' ' + x3 + ',' + y3 + ' ' + rand(x4-10, x4+10) + ',' + rand(y4-150, y4+150) + ',' + rand(x5-10, x5+10) + ',' + rand(y5-150, y5+150));
    svg.appendChild(pl);
}

window.onmousedown = function(e){
    for(i=0; i < 10; i++) {
    createPolyline(e.pageX - 200, e.pageY, e.pageX - 100, e.pageY, e.pageX, e.pageY, e.pageX + 100, e.pageY, e.pageX + 200, e.pageY);
    };
}

var init = function() {
    svg = document.querySelector('#svg');
};

window.onload = function() {
    init();
};
