define("AmberPaper/Examples-Paper", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-Paper');
smalltalk.packages["Examples-Paper"].transport = {"type":"amd","amdNamespace":"AmberPaper"};

smalltalk.addClass('Fabric1', globals.Object, [], 'Examples-Paper');

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new fabric.Canvas('myCanvas'); ;
return self}, function($ctx1) {$ctx1.fill(self,"canvas",{},globals.Fabric1.klass)})},
args: [],
source: "canvas\x0a<return new fabric.Canvas('myCanvas'); >",
messageSends: [],
referencedClasses: []
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 


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

return circle;;
return self}, function($ctx1) {$ctx1.fill(self,"circle",{},globals.Fabric1.klass)})},
args: [],
source: "circle\x0a<\x0a\x0avar circle = new fabric.Circle({\x0a  left: 100,\x0a  top: 50,\x0a  radius: 50\x0a});\x0a\x0acircle.setGradient('fill', {\x0a  x1: 0,\x0a  y1: circle.height / 2,\x0a  x2: circle.width,\x0a  y2: circle.height / 2,\x0a  colorStops: {\x0a    0: \x22red\x22,\x0a\x090.2: \x22orange\x22,\x0a    1: \x22yellow\x22\x0a  }\x0a});\x0a\x0areturn circle;\x0a>",
messageSends: [],
referencedClasses: []
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._canvas())._add_(self._circle());
return $1;
}, function($ctx1) {$ctx1.fill(self,"main",{},globals.Fabric1.klass)})},
args: [],
source: "main\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^self canvas add: self circle.",
messageSends: ["add:", "canvas", "circle"],
referencedClasses: []
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "main1",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(fabric)._Canvas())._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"main1",{},globals.Fabric1.klass)})},
args: [],
source: "main1\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a(fabric Canvas) inspect",
messageSends: ["inspect", "Canvas"],
referencedClasses: []
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mainAsJSON",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Fabric1(){return globals.Fabric1||(typeof Fabric1=="undefined"?nil:Fabric1)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSON())._stringify_(_st($Fabric1())._main());
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainAsJSON",{},globals.Fabric1.klass)})},
args: [],
source: "mainAsJSON\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^JSON stringify: Fabric1 main",
messageSends: ["stringify:", "main"],
referencedClasses: ["JSON", "Fabric1"]
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mainAsSVG",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Fabric1(){return globals.Fabric1||(typeof Fabric1=="undefined"?nil:Fabric1)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Fabric1())._main())._toSVG();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainAsSVG",{},globals.Fabric1.klass)})},
args: [],
source: "mainAsSVG\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^Fabric1 main toSVG",
messageSends: ["toSVG", "main"],
referencedClasses: ["Fabric1"]
}),
globals.Fabric1.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});
 ;
return self}, function($ctx1) {$ctx1.fill(self,"rectangle",{},globals.Fabric1.klass)})},
args: [],
source: "rectangle\x0a\x22// create a rectangle object\x22\x0a<return new fabric.Rect({\x0a  left: 100,\x0a  top: 100,\x0a  fill: 'red',\x0a  width: 20,\x0a  height: 20\x0a});\x0a >",
messageSends: [],
referencedClasses: []
}),
globals.Fabric1.klass);


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


smalltalk.addClass('Paper2', globals.Object, [], 'Examples-Paper');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var canvas,aPath,start;
return smalltalk.withContext(function($ctx1) { 
canvas=_st(document)._getElementById_("myCanvas");
_st(paper)._setup_(canvas);
aPath=_st(_st(paper)._Path())._new();
_st(aPath)._inspect();
start=_st(_st(paper)._Point())._newValue_value_((100),(200));
_st(aPath)._moveTo_(start);
_st(aPath)._lineTo_(_st(start)._add_([(200),(-50)]));
_st(_st(paper)._view())._draw();
return self}, function($ctx1) {$ctx1.fill(self,"main",{canvas:canvas,aPath:aPath,start:start},globals.Paper2.klass)})},
args: [],
source: "main\x0a| canvas aPath start | \x0a   canvas := document getElementById: 'myCanvas'.\x0a   \x0a   \x22Create an empty project and a view for the canvas:\x22\x09\x0a    paper setup: canvas.\x0a\x09\x0a    aPath := (paper Path) new.\x0a\x09\x0a\x09\x22Give the stroke a color\x22\x0a\x09aPath inspect.\x0a\x09\x0a\x09\x22aPath strokeColor: 'red'.\x22\x0a\x09\x0a\x09start := (paper Point) newValue: 100 value: 200.\x0a\x09\x0a\x09aPath moveTo: start.\x0a\x09\x0a\x09aPath lineTo: (start add: { 200. -50 }).\x0a\x09\x0a\x09paper view draw.\x0a\x09",
messageSends: ["getElementById:", "setup:", "new", "Path", "inspect", "newValue:value:", "Point", "moveTo:", "lineTo:", "add:", "draw", "view"],
referencedClasses: []
}),
globals.Paper2.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mainJS",
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
return self}, function($ctx1) {$ctx1.fill(self,"mainJS",{},globals.Paper2.klass)})},
args: [],
source: "mainJS\x0a<\x0a// Get a reference to the canvas object\x0a\x09\x09var canvas = document.getElementById('myCanvas');\x0a\x09\x09// Create an empty project and a view for the canvas:\x0a\x09\x09paper.setup(canvas);\x0a\x09\x09// Create a Paper.js Path to draw a line into it:\x0a\x09\x09var path = new paper.Path();\x0a\x09\x09// Give the stroke a color\x0a\x09\x09path.strokeColor = 'black';\x0a\x09\x09var start = new paper.Point(100, 100);\x0a\x09\x09// Move to start and draw a line from there\x0a\x09\x09path.moveTo(start);\x0a\x09\x09// Note that the plus operator on Point objects does not work\x0a\x09\x09// in JavaScript. Instead, we need to call the add() function:\x0a\x09\x09path.lineTo(start.add([ 200, -50 ]));\x0a\x09\x09// Draw the view now:\x0a\x09\x09paper.view.draw();\x0a\x09\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Paper2.klass);


smalltalk.addClass('SVG1', globals.Object, [], 'Examples-Paper');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var draw,rect;
function $SVG(){return globals.SVG||(typeof SVG=="undefined"?nil:SVG)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
draw=_st(_st($SVG())._value_("drawing"))._size_y_((500),(150));
$1=_st(draw)._rect();
$ctx1.sendIdx["rect"]=1;
rect=_st($1)._width_((100));
$ctx1.sendIdx["width:"]=1;
_st(rect)._height_((100));
$ctx1.sendIdx["height:"]=1;
_st(rect)._fill_("#a03");
$ctx1.sendIdx["fill:"]=1;
$2=_st(draw)._rect();
$ctx1.sendIdx["rect"]=2;
rect=_st($2)._width_((100));
$ctx1.sendIdx["width:"]=2;
$3=rect;
_st($3)._height_((100));
$ctx1.sendIdx["height:"]=2;
_st($3)._fill_("#bbb");
$ctx1.sendIdx["fill:"]=2;
$4=_st($3)._dx_((120));
$ctx1.sendIdx["dx:"]=1;
$5=_st(_st(draw)._rect())._width_((100));
_st($5)._height_((100));
_st($5)._fill_("#709");
$6=_st($5)._dx_((240));
return self}, function($ctx1) {$ctx1.fill(self,"main",{draw:draw,rect:rect},globals.SVG1.klass)})},
args: [],
source: "main\x0a\x0a| draw rect | \x0a\x0a\x22http://documentup.com/wout/svg.js#usage/create-a-svg-document\x22\x0a\x0adraw := (SVG value: 'drawing') size: 500 y: 150.\x0arect := draw rect width: 100.\x0arect height: 100.\x0arect fill: '#a03'.\x0a\x0arect := draw rect width: 100.\x0arect height: 100; fill: '#bbb'; dx: 120.\x0a\x0a(draw rect width: 100) height: 100; fill: '#709'; dx: 240.",
messageSends: ["size:y:", "value:", "width:", "rect", "height:", "fill:", "dx:"],
referencedClasses: ["SVG"]
}),
globals.SVG1.klass);

});
