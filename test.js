      var cvsDraw;
      var ctxDraw;
      var draw;

      function init() {
        // Find the canvas element.
        cvsDraw = document.getElementById("cvsDraw");

        // Get the 2D canvas context.
        ctxDraw = cvsDraw.getContext('2d');

        // Pencil tool instance.
        draw = new tool_pencil();

        // Attach the mousedown, mousemove and mouseup event listeners.
        cvsDraw.addEventListener('mousedown', ev_canvas, false);
        cvsDraw.addEventListener('mousemove', ev_canvas, false);
        cvsDraw.addEventListener('mouseup', ev_canvas, false);
      }

      // This painting tool works like a drawing pencil which tracks the mouse 
      // movements.
      function tool_pencil() {
        var draw = this;
        this.started = false;

        // This is called when you start holding down the mouse button.
        // This starts the pencil drawing.
        this.mousedown = function (ev) {
          ctxDraw.beginPath();
          ctxDraw.moveTo(ev._x, ev._y);
          draw.started = true;
        };

        // This function is called every time you move the mouse. Obviously, it only 
        // draws if the tool.started state is set to true (when you are holding down 
        // the mouse button).
        this.mousemove = function (ev) {
          if (draw.started) {
            ctxDraw.lineTo(ev._x, ev._y);
            ctxDraw.stroke();
          }
        };

        // This is called when you release the mouse button.
        this.mouseup = function (ev) {
          if (draw.started) {
            draw.mousemove(ev);
            draw.started = false;
          }
        };
      }

      // The general-purpose event handler. This function just determines the mouse 
      // position relative to the canvas element.
      function ev_canvas(ev) {
        if (ev.layerX || ev.layerX == 0) { // Firefox
          ev._x = ev.layerX;
          ev._y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
          ev._x = ev.offsetX;
          ev._y = ev.offsetY;
        }

        // Call the event handler of the tool.
        var func = draw[ev.type];
        if (func) {
          func(ev);
        }
      }