(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_1", frames: [[0,0,1300,1052]]},
		{name:"banner_atlas_2", frames: [[586,1054,923,319],[0,1054,584,575],[1302,0,714,390],[1302,392,685,288],[0,0,1300,1052],[1511,682,459,397]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Capa2 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Capa3 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Capa4 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LOGO = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.model1 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.model2 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MODELO1 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zapspsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.instance = new lib.Capa3();
	this.instance.setTransform(139,356,0.9644,0.9644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139,356,563.2,554.5);


(lib.zaps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Capa4();
	this.instance.setTransform(-135.65,-74.1,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zaps, new cjs.Rectangle(-135.6,-74.1,271.29999999999995,148.2), null);


(lib.taco = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Capa2();
	this.instance.setTransform(-174.65,-60.35,0.3784,0.3784);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.taco, new cjs.Rectangle(-174.6,-60.3,349.29999999999995,120.69999999999999), null);


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.LOGO();
	this.instance.setTransform(-342.5,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-342.5,-144,685,288), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Ahora en Zara.com", "50px 'Myanmar Text'");
	this.text.textAlign = "center";
	this.text.lineHeight = 95;
	this.text.lineWidth = 646;
	this.text.parent = this;
	this.text.setTransform(-0.0117,-36.3,0.7242,0.7242);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-235.4,-37.7,470.8,75.5), null);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Todo en calzados", "50px 'Myanmar Text'");
	this.text.textAlign = "center";
	this.text.lineHeight = 95;
	this.text.lineWidth = 646;
	this.text.parent = this;
	this.text.setTransform(0.0127,-55.8,0.9384,0.9384);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-305,-57.7,610.1,97.9), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("R E B A J A S", "bold 50px 'Myanmar Text'");
	this.text.textAlign = "center";
	this.text.lineHeight = 97;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(-0.05,-79.65,1.6733,1.6733);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-304.9,-83,609.9,166), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiHJAfLMAAAg+VMEOTAAAMAAAA+Vg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-864.9,-199.4,1729.9,398.9);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Verano 2024", "40px 'Myanmar Text'");
	this.text.textAlign = "center";
	this.text.lineHeight = 76;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(0,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-118.7,-74.1,237.5,148.3), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("NUEVA COLECCIÓN", "bold 40px 'Myanmar Text'");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 409;
	this.text.parent = this;
	this.text.setTransform(8.8,-90.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-197.6,-92.7,412.9,185.5), null);


(lib.Sintítulo1psd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MODELO_1
	this.instance = new lib.MODELO1();
	this.instance.setTransform(1239,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1239,0,459,397);


(lib.PUNTO1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PUNTO1, new cjs.Rectangle(-20,-20,40,40), null);


(lib.Interpolación11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.model1();
	this.instance.setTransform(-100.7,-81.5,0.1549,0.1549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.7,-81.5,201.4,163);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.LOGO();
	this.instance.setTransform(-342.5,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.5,-144,685,288);


(lib.hola1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.model2();
	this.instance.setTransform(-119.25,-114,0.1973,0.1973,4.7239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hola1, new cjs.Rectangle(-136.3,-114,272.70000000000005,228.1), null);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.5,-144,685,288);


(lib.hola2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación11("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hola2, new cjs.Rectangle(-100.7,-81.5,201.4,163), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(-17.85,0,0.1907,0.1907,0,0,0,-93.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-65.3,-27.4,130.7,54.9), null);


// stage content:
(lib.banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,95];
	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.boton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://dulcefina-web.vercel.app/", "_blank");
		}
	}
	this.frame_95 = function() {
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.s.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			window.open("https://zarag2.000webhostapp.com/");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(66));

	// Capa_1
	this.s = new lib.Símbolo4();
	this.s.name = "s";
	this.s.setTransform(235,53.65,0.2717,0.2717,0,0,0,0.2,0);
	this.s.alpha = 0.0117;
	new cjs.ButtonHelper(this.s, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.s).wait(161));

	// Capa_6
	this.zapa = new lib.zaps();
	this.zapa.name = "zapa";
	this.zapa.setTransform(-44.75,67,0.2717,0.2717,0,0,0,-0.2,0);
	this.zapa.alpha = 0;
	this.zapa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zapa).wait(115).to({_off:false},0).to({regX:0,x:199.55,alpha:1},13).wait(22).to({alpha:0},10).wait(1));

	// Capa_5
	this.instance = new lib.Símbolo8();
	this.instance.setTransform(361.95,82.55,0.354,0.354,0,0,0,0.1,0.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({alpha:0.5508},5).to({alpha:1},4).wait(30).to({alpha:0},10).to({_off:true},1).wait(1));

	// Capa_2
	this.cal = new lib.Símbolo6();
	this.cal.name = "cal";
	this.cal.setTransform(361.95,29.45,0.354,0.354,0,0,0,0.1,0.3);
	this.cal.alpha = 0;
	this.cal._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cal).wait(110).to({_off:false},0).to({alpha:1},5).wait(39).to({alpha:0},6).wait(1));

	// Capa_7
	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(233.15,81,0.1211,0.1211);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.reb = new lib.Símbolo5();
	this.reb.name = "reb";
	this.reb.setTransform(361.95,62,0.354,0.354,0,0,0,0.1,0.3);
	this.reb.alpha = 0;
	this.reb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({regX:0.1,scaleX:0.2864,scaleY:0.2864,x:233.3,y:82.15,alpha:1},11).to({regY:0.3,scaleX:0.3194,scaleY:0.3194,x:233.2,y:81.75},27).to({regX:0.3,scaleX:0.3318,scaleY:0.3318,x:232.75,y:82.05,alpha:0},8).to({_off:true,regX:0.1,scaleX:0.354,scaleY:0.354,x:361.95,y:62},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.reb).wait(94).to({_off:false},1).to({alpha:1},18).wait(37).to({alpha:0},10).wait(1));

	// texto
	this.instance_2 = new lib.Símbolo2();
	this.instance_2.setTransform(232.55,74.85,0.076,0.076,0,0,0,0.7,0.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Símbolo11();
	this.instance_3.setTransform(26.55,12.7,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.3145,scaleY:0.3145,y:74.65,alpha:1},11).to({scaleX:0.361,scaleY:0.361,y:74.85},27).to({scaleX:0.375,scaleY:0.375,x:232.05,y:75.05,alpha:0},8).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({alpha:1},12).wait(24).to({alpha:0},10).wait(1));

	// Capa_4
	this.instance_4 = new lib.Interpolación3("synched",0);
	this.instance_4.setTransform(-98.2,54.35,0.2717,0.2717,0,0,0,0,0.2);

	this.instance_5 = new lib.Interpolación4("synched",0);
	this.instance_5.setTransform(127.55,54.35,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.hola1();
	this.instance_6.setTransform(110.1,82.55,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.tacox = new lib.taco();
	this.tacox.name = "tacox";
	this.tacox.setTransform(-50.2,70.7,0.2717,0.2717);
	this.tacox.alpha = 0;
	this.tacox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,regX:0.2,x:127.55},7).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},7).to({x:169.15},28).to({regX:0,x:-104.1},6).to({_off:true,regX:0.2,x:110.1,y:82.55,alpha:0,mode:"independent"},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},1).to({regX:0.1,scaleX:0.6305,scaleY:0.6305,x:117.7,y:64,alpha:1},10).to({scaleX:0.6809,scaleY:0.6809,x:106.9,y:63.1},34).to({scaleX:0.7074,scaleY:0.7074,x:101.5,y:62.8,alpha:0},8).to({_off:true},3).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.tacox).wait(106).to({_off:false},0).to({x:105.3,alpha:1},12).wait(32).to({alpha:0},10).wait(1));

	// Capa_3
	this.instance_7 = new lib.Sintítulo1psd("synched",0);
	this.instance_7.setTransform(383.6,53.9,0.2717,0.2717,0,0,0,864.1,198.4);

	this.instance_8 = new lib.hola2();
	this.instance_8.setTransform(363.1,87.9,0.2717,0.2717,0,0,0,0,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.bota = new lib.zapspsd();
	this.bota.name = "bota";
	this.bota.setTransform(45.45,54.4,0.0976,0.0976,0,0,0,1234.5,576.8);
	this.bota.alpha = 0;
	this.bota._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:864,x:234.7},7).to({x:205.4},28).to({x:387},6).to({_off:true,regX:0,regY:0.2,x:363.1,y:87.9,alpha:0,mode:"independent"},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},1).to({regX:0.1,regY:0.1,scaleX:0.8576,scaleY:0.8576,x:359.55,y:73.25,alpha:1},10).to({scaleX:0.9885,scaleY:0.9885,x:377.55,y:73.8},34).to({scaleX:1.027,scaleY:1.027,x:382.7,y:73.95,alpha:0},8).to({_off:true,regX:1234.5,regY:576.8,scaleX:0.0976,scaleY:0.0976,x:45.45,y:54.4},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.bota).wait(94).to({_off:false},1).to({regX:1235,regY:576.2,x:123.05,y:54.3,alpha:1},23).wait(32).to({alpha:0},10).wait(1));

	// Animación
	this.instance_9 = new lib.PUNTO1();
	this.instance_9.setTransform(-10.05,51.9,0.2716,0.2716,0,0,0,-0.2,0.2);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,scaleX:0.2717,scaleY:0.2717,x:-2.5826,y:51.85},0).wait(1).to({x:4.8348},0).wait(1).to({x:12.2522},0).wait(1).to({x:19.6696},0).wait(1).to({x:27.087},0).wait(1).to({x:34.5044},0).wait(1).to({x:41.9217},0).wait(1).to({x:49.3391},0).wait(1).to({x:56.7565},0).wait(1).to({x:64.1739},0).wait(1).to({x:71.5913},0).wait(1).to({x:79.0087},0).wait(1).to({x:86.4261},0).wait(1).to({x:93.8435},0).wait(1).to({x:101.2609},0).wait(1).to({x:108.6783},0).wait(1).to({x:116.0957},0).wait(1).to({x:123.513},0).wait(1).to({x:130.9304},0).wait(1).to({x:138.3478},0).wait(1).to({x:145.7652},0).wait(1).to({x:153.1826},0).wait(1).to({x:160.6},0).to({_off:true},1).wait(137));

	// Referencia
	this.instance_10 = new lib.PUNTO1();
	this.instance_10.setTransform(5.45,103.25,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_10.alpha = 0;

	this.instance_11 = new lib.PUNTO1();
	this.instance_11.setTransform(144,103.25,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.PUNTO1();
	this.instance_12.setTransform(144,5.45,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_12.alpha = 0;

	this.instance_13 = new lib.PUNTO1();
	this.instance_13.setTransform(5.45,5.45,0.2717,0.2717,0,0,0,0.2,0.2);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).to({state:[]},24).wait(137));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,36,576.7,121.6);
// library properties:
lib.properties = {
	id: '4369C8DB2754A94CBDD00C7702DBFBB2',
	width: 468,
	height: 108,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/banner_atlas_1.png", id:"banner_atlas_1"},
		{src:"img/banner_atlas_2.png", id:"banner_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4369C8DB2754A94CBDD00C7702DBFBB2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;