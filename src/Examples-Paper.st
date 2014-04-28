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

Object subclass: #Physics1
	instanceVariableNames: ''
	package: 'Examples-Paper'!

!Physics1 class methodsFor: 'not yet classified'!

main
<


//
// PhysicsJS
// A modular, extendable, and easy-to-use physics engine for javascript
//
// Use the select box in the top right to see more examples!!
//
// Smalltalk:
// | Physics |
// Physics := (require value: 'physicsjs/physicsjs-full-0.6.0') .
// JavaScript
// require('physicsjs/physicsjs-full-0.6.0')


var Physics = require('physicsjs/physicsjs-full-0.6.0');

Physics(function (world) {

    var viewWidth = window.innerWidth
        ,viewHeight = window.innerHeight
        // center of the window
        ,center = Physics.vector(viewWidth, viewHeight).mult(0.5)
        // bounds of the window
        ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
        ,attractor
        ,edgeBounce
        ,renderer
        ;

    // create a renderer
    renderer = Physics.renderer('canvas', {
        el: 'viewport'
        ,width: viewWidth
        ,height: viewHeight
    });

    // add the renderer
    world.add(renderer);
    // render on each step
    world.on('step', function () {
        world.render();
    });

    // attract bodies to a point
    attractor = Physics.behavior('attractor', {
        pos: center
        ,strength: .1
        ,order: 1
    });

    // constrain objects to these bounds
    edgeBounce = Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds
        ,restitution: 0.2
        ,cof: 0.8
    });

    // resize events
    window.addEventListener('resize', function () {

        viewWidth = window.innerWidth;
        viewHeight = window.innerHeight;

        renderer.el.width = viewWidth;
        renderer.el.height = viewHeight;

        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
        // update the boundaries
        edgeBounce.setAABB(viewportBounds);

    }, true);

    // move the attractor position to match the mouse coords
    renderer.el.addEventListener('mousemove', function( e ){
        attractor.position({ x: e.pageX, y: e.pageY });
    });

    // some fun colors
    var colors = [
        '#b58900',
        '#cb4b16',
        '#dc322f',
        '#d33682',
        '#6c71c4',
        '#268bd2',
        '#2aa198',
        '#859900'
    ];
    // create some bodies
    var l = 10;
    var bodies = [];
    var v = Physics.vector(0, 300);
    var b, r;

    while ( l-- ) {
        r = (20 + Math.random()*30)|0;
        b = Physics.body('circle', {
            radius: r
            ,mass: r
            ,x: v.x + center.x
            ,y: v.y + center.y
            ,vx: v.perp().mult(0.0001).x
            ,vx: v.y
            ,styles: {
                fillStyle: colors[ l % colors.length ]
            }
        });
        bodies.push(b);
        v.perp(true)
            .mult(10000)
            .rotate(l / 3);
    }

    // add things to the world
    world.add( bodies );
    world.add([
        Physics.behavior('newtonian', {
            strength: 0.005
            ,min: 10
        })
        ,Physics.behavior('body-impulse-response')
        ,edgeBounce
        ,attractor
    ]);

    // subscribe to ticker to advance the simulation
    Physics.util.ticker.on(function( time ) {
        world.step( time );
    });

    // start the ticker
    Physics.util.ticker.start();
});

// go ahead... expand the code and play around...


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

