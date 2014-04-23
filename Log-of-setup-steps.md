How was this project created?
=============================


1. Create an new repository on github
2. Clone the repository `git clone https://github.com/myGithubID/Amber-Paper-Demo`
3. cd Amber-Paper-Demo
4. delete existing files.
5. `amber init`
6. edit bower.json to include
      
      "dependencies": {
          "paper": "*",
          "amber": "~>= 0.12.4"

7. `bower install`

8. edit `index.html` and add the following after the body tag

          <script type='text/javascript'>
          require.config({ paths: { 
                          'paper': 'bower_components/paper/dist'
                         }}
                        );
          require([
               'bower_components/paper/dist/paper-full.js'
              ], function( Paper ){ 
                    window.Paper=Paper;
                 }
          );
          </script>

7. `amber serve`
8. Open `localhost:4000`
9. Identify the  `Examples-Paper` package
10. Rename class `Examples-Paper` to `Paper1`
11. Add main method on class side with this code (copy/paste from http://paperjs.org/tutorials/getting-started/using-javascript-directly/)

              <
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
              >

12. save method
13. Evaluate in workspace `Paper1 main` to check if everything is OK.
13. Commit package
14. edit `index.html` and add

        <button onclick="require('amber/helpers').globals.Paper1._main()">Paper Demo 1</button>
        <canvas id="myCanvas" resize></canvas>
        
15. Reload localhost:4000
16. Click on button *Paper Demo 1*

