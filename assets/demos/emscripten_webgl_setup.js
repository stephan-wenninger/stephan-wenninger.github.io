var loading = document.getElementById("loading");

var frameElem = window.frameElement;

function getFile(name) {
  var base = (window.location != window.parent.location) ? window.parent.location.href : window.location.href;
    var url  = new URL(name, base);
    var path = url.pathname;
    var file = path.split('/').pop();
        return [ file, path ];
}

var Module = {
  print: function(text) {
    console.log(text);
  },

  printErr: function(text) {
    console.error(text);
  },

  postRun: function() {
    loading.style.display="none"
    document.getElementById('canvas').style.display="block"
  },

  canvas: (function() {
    var canvas = document.getElementById('canvas_canvas');
    canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
    return canvas;
  })(),
};

window.onerror = function() {
  Module.setStatus('Exception thrown, see JavaScript console');
  Module.setStatus = function(text) {
    if (text) Module.printErr('[post-exception status] ' + text);
  };
};
