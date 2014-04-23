Create an empty repository on github

Clone the repository 

cd Amber-Paper-Demo

delete existing files.

amber init

edit bower.json to have

    "dependencies": {
        "paper": "*",
        "amber": "~>= 0.12.4"

bower install

edit index.html and add the following after the body tag

       <script type='text/javascript'>
      require.config({ paths: {
        'paper': 'bower_components/paper/dist'
      }});
      require([
               'bower_components/paper/dist/paper-full.js'
              ], function( Paper ){ 
                    window.Paper=Paper;
                 }
      );
      </script>

amber serve

Open localhost:4000

Find Examples-Paper package
Rename class Examples-Paper to Paper1

Add main method on class side with this code

// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();

save method
Commit package

edit index.html and add

<button onclick="require('amber/helpers').globals.Paper1._main()">Paper Demo 1</button>
<canvas id="myCanvas" resize></canvas>


Reload localhost:4000
Click on button Paper Demo 1

