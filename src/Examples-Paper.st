Smalltalk createPackage: 'Examples-Paper'!
Object subclass: #Fabric1
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!Fabric1 class methodsFor: 'not yet classified'!

canvas
<return new fabric.Canvas('myCanvas'); >
!

circle
<

var circle = new fabric.Circle({
  left: 100,
  top: 50,
  radius: 50
});

circle.setGradient('fill', {
  x1: 0,
  y1: circle.height / 2,
  x2: circle.width,
  y2: circle.height / 2,
  colorStops: {
    0: "red",
	0.2: "orange",
    1: "yellow"
  }
});

return circle;
>
!

main
"http://fabricjs.com/fabric-intro-part-1/"

^self canvas add: self circle.
!

main1
"http://fabricjs.com/fabric-intro-part-1/"
(fabric Canvas) inspect
!

mainAsJSON
"http://fabricjs.com/fabric-intro-part-1/"

^JSON stringify: Fabric1 main
!

mainAsSVG
"http://fabricjs.com/fabric-intro-part-1/"

^Fabric1 main toSVG
!

rectangle
"// create a rectangle object"
<return new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});
 >
! !

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
| canvas aPath start | 
   canvas := document getElementById: 'myCanvas'.
   
   "Create an empty project and a view for the canvas:"	
    paper setup: canvas.
	
    aPath := (paper Path) new.
	
	"Give the stroke a color"
	aPath inspect.
	
	"aPath strokeColor: 'red'."
	
	start := (paper Point) newValue: 100 value: 200.
	
	aPath moveTo: start.
	
	aPath lineTo: (start add: { 200. -50 }).
	
	paper view draw.
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
! !

Object subclass: #SVG1
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!SVG1 class methodsFor: 'not yet classified'!

main

| draw rect | 

"http://documentup.com/wout/svg.js#usage/create-a-svg-document"

draw := (SVG value: 'drawing') size: 500 y: 150.
rect := draw rect width: 100.
rect height: 100.
rect fill: '#a03'.

rect := draw rect width: 100.
rect height: 100; fill: '#bbb'; dx: 120.

(draw rect width: 100) height: 100; fill: '#709'; dx: 240.
! !

Object subclass: #SnapSVG1
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!SnapSVG1 class methodsFor: 'not yet classified'!

main
"translation to Smalltalk points 1 to 4 of
http://snapsvg.io/start/ "

| s bigCircle smallCircle |

s := Snap value:  300 value: 600.
bigCircle := s circle: 150 value: 150 value: 100.
bigCircle attr: #{'fill' -> '#bada55'.  'stroke' -> '#000'. 'strokeWidth' -> 5}.
smallCircle := s circle: 100 value: 150 value: 70.
! !

