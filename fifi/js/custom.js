var array = ["graph", "graph1", "graph2", "graph3", "graph4", "graph5", "graph6", "graph7"];

for (var i = 0; i < array.length; i++) {

	var el = document.getElementById(array[i]); // get canvas

	var options = {
	    percent:  el.getAttribute('data-percent') || 25,
	    size: el.getAttribute('data-size') || 110,
	    lineWidth: el.getAttribute('data-line') || 3,
	    rotate: el.getAttribute('data-rotate') || 0
	}

	var canvas = document.createElement('canvas');
	var porcentaje = document.createElement('porcentaje');
	porcentaje.textContent = options.percent + '%';
	    
	if (typeof(G_vmlCanvasManager) !== 'undefined') {
	    G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');
	canvas.width = canvas.height = options.size;

	el.appendChild(porcentaje);
	el.appendChild(canvas);

	ctx.translate(options.size / 2, options.size / 2); // change center
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

	//imd = ctx.getImageData(0, 0, 240, 240);
	var radius = (options.size - options.lineWidth) / 2;

	var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
	        ctx.lineCap = 'round'; // butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();
	};

	drawCircle('#f9f9f9', options.lineWidth, 100 / 100);
	drawCircle('#181c21', options.lineWidth, options.percent / 100);
}


