define("AmberPaper/Examples-Paper", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-Paper');
smalltalk.packages["Examples-Paper"].transport = {"type":"amd","amdNamespace":"AmberPaper"};

smalltalk.addClass('Paper1', globals.Object, [], 'Examples-Paper');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

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
		;
return self}, function($ctx1) {$ctx1.fill(self,"main",{},globals.Paper1.klass)})},
args: [],
source: "main\x0a<\x0a// Get a reference to the canvas object\x0a\x09\x09var canvas = document.getElementById('myCanvas');\x0a\x09\x09// Create an empty project and a view for the canvas:\x0a\x09\x09paper.setup(canvas);\x0a\x09\x09// Create a Paper.js Path to draw a line into it:\x0a\x09\x09var path = new paper.Path();\x0a\x09\x09// Give the stroke a color\x0a\x09\x09path.strokeColor = 'black';\x0a\x09\x09var start = new paper.Point(100, 100);\x0a\x09\x09// Move to start and draw a line from there\x0a\x09\x09path.moveTo(start);\x0a\x09\x09// Note that the plus operator on Point objects does not work\x0a\x09\x09// in JavaScript. Instead, we need to call the add() function:\x0a\x09\x09path.lineTo(start.add([ 200, -50 ]));\x0a\x09\x09// Draw the view now:\x0a\x09\x09paper.view.draw();\x0a\x09\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Paper1.klass);

});
