var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Dark part of the background
ctx.fillStyle = "#E44D26";
ctx.beginPath();
ctx.moveTo(46.8, 302.4);
ctx.lineTo(20.2, 0.0);
ctx.lineTo(316.1, 0.0);
ctx.lineTo(289.2, 302.4);
ctx.lineTo(168.0, 336.0);
ctx.closePath();
ctx.fill();

// Light part of the background
ctx.fillStyle = "#F16529";
ctx.beginPath();
ctx.moveTo(168.0, 310.2);
ctx.lineTo(266.0, 283.1);
ctx.lineTo(289.2, 24.7);
ctx.lineTo(168.0, 24.7);
ctx.closePath();
ctx.fill();

// Dark part of the foreground
ctx.fillStyle = "#EBEBEB";
ctx.beginPath();
ctx.moveTo(168.0, 136.9);
ctx.lineTo(118.9, 136.9);
ctx.lineTo(115.5, 98.9);
ctx.lineTo(168.0, 98.9);
ctx.lineTo(168.0, 61.8);
ctx.lineTo(75.0, 61.8);
ctx.lineTo(85.0, 174.0);
ctx.lineTo(168.0, 174.0);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(168.0, 233.2);
ctx.lineTo(126.6, 222.1);
ctx.lineTo(123.9, 192.6);
ctx.lineTo(86.7, 192.6);
ctx.lineTo(91.9, 250.7);
ctx.lineTo(168.0, 271.8);
ctx.closePath();
ctx.fill();

// Light part of the foreground
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.moveTo(168.0, 136.9);
ctx.lineTo(168.0, 174.0);
ctx.lineTo(213.6, 174.0);
ctx.lineTo(209.2, 222.1);
ctx.lineTo(168.0, 233.2);
ctx.lineTo(168.0, 271.8);
ctx.lineTo(244.5, 250.7);
ctx.lineTo(254.2, 136.9);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(168.0, 61.8);
ctx.lineTo(168.0, 98.9);
ctx.lineTo(257.5, 98.9);
ctx.lineTo(260.9, 61.8);
ctx.closePath();
ctx.fill();
