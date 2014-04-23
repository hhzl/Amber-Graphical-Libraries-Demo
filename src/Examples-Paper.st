Smalltalk createPackage: 'Examples-Paper'!
Object subclass: #Paper1
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!Paper1 class methodsFor: 'not yet classified'!

main
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
! !

Object subclass: #Paper2
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!Paper2 class methodsFor: 'not yet classified'!

main
| canvas aPath | 
   canvas := document getElementById: 'myCanvas'.
   
   "Create an empty project and a view for the canvas:"	
    paper setup: canvas.
	
    aPath := self newPath.
	
	"Give the stroke a color"
	aPath inspect.
	aPath strokeColor: 'red'.
!

mainJS
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
!

newPath
<return (new paper.Path());>
!

newPoint100
<return new paper.Point(100, 100);>
!

newPoint200
<return new paper.Point(200, 200);>
! !

