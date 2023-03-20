/*!
 * Actuate v1.8.9-beta
 * https://github.com/jgranick/actuate
 * 
 * Copyright Joshua Granick
 * Released under the MIT license
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("openfl/display/DisplayObject"), require("openfl/geom/ColorTransform"), require("openfl/media/SoundTransform"), require("openfl/Lib"));
	else if(typeof define === 'function' && define.amd)
		define(["openfl/display/DisplayObject", "openfl/geom/ColorTransform", "openfl/media/SoundTransform", "openfl/Lib"], factory);
	else if(typeof exports === 'object')
		exports["motion"] = factory(require("openfl/display/DisplayObject"), require("openfl/geom/ColorTransform"), require("openfl/media/SoundTransform"), require("openfl/Lib"));
	else
		root["motion"] = factory(root["openfl"]["display"]["DisplayObject"], root["openfl"]["geom"]["ColorTransform"], root["openfl"]["media"]["SoundTransform"], root["openfl"]["Lib"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {value: true});

exports.default = {
	Enum: {}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {value: true});

// exports.default = function $import(obj) {
// 	if(obj && obj.__esModule) {
// 		// if(!obj.hasOwnProperty('default')) obj.default = obj;
// 		return obj;
// 	} else { 
// 		var newObj = {};
// 		if (obj != null) {
// 			for (var key in obj) {
// 				if (Object.prototype.hasOwnProperty.call(obj, key))
// 					newObj[key] = obj[key];
// 			}
// 		} 
// 		newObj.default = obj;
// 		return newObj;
// 	}
// }
exports.default = function $import(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.IEasing

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var IEasing = function() {}

// Meta

IEasing.__name__ = ["motion","easing","IEasing"];
IEasing.prototype = {
	
};
IEasing.prototype.__class__ = $hxClasses["motion.easing.IEasing"] = IEasing;

// Init



// Statics




// Export

exports.default = IEasing;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {value: true});

exports.default = function $extend(from, fields) {
    function Inherit() {};
    Inherit.prototype = from;
    var proto = new Inherit();
    for (var name in fields) proto[name] = fields[name];
    if(fields.toString !== Object.prototype.toString) proto.toString = fields.toString;
    return proto;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: Reflect

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var Reflect = function(){}

// Meta

Reflect.__name__ = ["Reflect"];
Reflect.prototype = {
	
};
Reflect.prototype.__class__ = $hxClasses["Reflect"] = Reflect;

// Init



// Statics

Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	var tmp1;
	if(o.__properties__) {
		tmp = o.__properties__["set_" + field];
		tmp1 = tmp;
	} else {
		tmp1 = false;
	}
	if(tmp1) {
		o[tmp](value);
	} else {
		o[field] = value;
	}
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
}


// Export

exports.default = Reflect;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.SimpleActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_GenericActuator() {return __webpack_require__(14);}
function Reflect() {return __webpack_require__(5);}
function motion_actuators_PropertyDetails() {return __webpack_require__(8);}
function Std() {return __webpack_require__(7);}
function openfl_display_DisplayObject() {return $import(__webpack_require__(21));}
function openfl_Lib() {return $import(__webpack_require__(39));}

// Constructor

var SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = [];
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = (openfl_Lib().default).getTimer() / 1000;
	(motion_actuators_GenericActuator().default).call(this,target,duration,properties);
	if(!SimpleActuator.addedEvent) {
		SimpleActuator.addedEvent = true;
		(openfl_Lib().default).current.stage.addEventListener("enterFrame",SimpleActuator.stage_onEnterFrame);
	}
}

// Meta

SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
SimpleActuator.__super__ = (motion_actuators_GenericActuator().default);
SimpleActuator.prototype = $extend((motion_actuators_GenericActuator().default).prototype, {
	apply: function() {
		(motion_actuators_GenericActuator().default).prototype.apply.call(this);
		if(this.toggleVisible && (Reflect().default).hasField(this.properties,"alpha")) {
			if(this.getField(this.target,"visible") != null) {
				this.setField(this.target,"visible",(Reflect().default).field(this.properties,"alpha") > 0);
			}
		}
	},
	autoVisible: function(value) {
		if(value == null) {
			value = true;
		}
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) {
				this.setField(this.target,"visible",this.cacheVisible);
			}
		}
		return this;
	},
	delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	},
	getField: function(target,propertyName) {
		var value = null;
		if((Reflect().default).hasField(target,propertyName)) {
			value = (Reflect().default).field(target,propertyName);
		} else {
			value = (Reflect().default).getProperty(target,propertyName);
		}
		return value;
	},
	initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if((Reflect().default).hasField(this.target,i)) {
				start = (Reflect().default).field(this.target,i);
			} else {
				isField = false;
				start = (Reflect().default).getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				var value = this.getField(this.properties,i);
				if(start == null) {
					start = 0;
				}
				if(value == null) {
					value = 0;
				}
				details = new (motion_actuators_PropertyDetails().default)(this.target,i,start,value - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	},
	move: function() {
		this.toggleVisible = (Reflect().default).hasField(this.properties,"alpha") && (Std().default)["is"](this.target,(openfl_display_DisplayObject().default));
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		SimpleActuator.actuators.push(this);
		++SimpleActuator.actuatorsLength;
	},
	onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) {
			this._onUpdateParams = [];
		} else {
			this._onUpdateParams = parameters;
		}
		this.sendChange = true;
		return this;
	},
	pause: function() {
		if(!this.paused) {
			this.paused = true;
			(motion_actuators_GenericActuator().default).prototype.pause.call(this);
			this.pauseTime = (openfl_Lib().default).getTimer();
		}
	},
	resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += ((openfl_Lib().default).getTimer() - this.pauseTime) / 1000;
			(motion_actuators_GenericActuator().default).prototype.resume.call(this);
		}
	},
	setField: function(target,propertyName,value) {
		if((Reflect().default).hasField(target,propertyName)) {
			(Reflect().default).setField(target,propertyName,value);
		} else {
			(Reflect().default).setProperty(target,propertyName,value);
		}
	},
	setProperty: function(details,value) {
		if(details.isField) {
			(Reflect().default).setField(details.target,details.propertyName,value);
		} else {
			(Reflect().default).setProperty(details.target,details.propertyName,value);
		}
	},
	stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) {
					this.apply();
				}
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = (Reflect().default).fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if((Reflect().default).hasField(this.properties,i)) {
					this.active = false;
					if(complete) {
						this.apply();
					}
					this.complete(sendEvent);
					return;
				}
			}
		}
	},
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) {
				tweenPosition = 1;
			}
			if(!this.initialized) {
				this.initialize();
			}
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) {
					easing = this._ease.calculate(tweenPosition);
				} else {
					easing = this._ease.calculate(1 - tweenPosition);
				}
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) {
							rotation -= 360;
						} else if(rotation < -180) {
							rotation += 360;
						}
						endValue = details.start + rotation * easing;
					} else {
						endValue = details.start + details.change * easing;
					}
					if(!this._snapping) {
						this.setProperty(details,endValue);
					} else {
						this.setProperty(details,Math.round(endValue));
					}
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) {
						this.setField(this.target,"visible",false);
					}
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) {
						this.callMethod(this._onRepeat,this._onRepeatParams);
					}
					if(this._reflect) {
						this._reverse = !this._reverse;
					}
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) {
						this._repeat--;
					}
				}
			}
			if(this.sendChange) {
				this.change();
			}
		}
	}
});
SimpleActuator.prototype.__class__ = $hxClasses["motion.actuators.SimpleActuator"] = SimpleActuator;

// Init



// Statics

SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = (openfl_Lib().default).getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = SimpleActuator.actuators[j];
		if(actuator != null && actuator.active) {
			if(currentTime >= actuator.timeOffset) {
				actuator.update(currentTime);
			}
			++j;
		} else {
			SimpleActuator.actuators.splice(j,1);
			--SimpleActuator.actuatorsLength;
		}
	}
}
SimpleActuator.actuators = []
SimpleActuator.actuatorsLength = 0
SimpleActuator.addedEvent = false

// Export

exports.default = SimpleActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: Std

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function js_Boot() {return __webpack_require__(10);}

// Constructor

var Std = function(){}

// Meta

Std.__name__ = ["Std"];
Std.prototype = {
	
};
Std.prototype.__class__ = $hxClasses["Std"] = Std;

// Init

{
	String.prototype.__class__ = String
	String.__name__ = true;
	Array.__name__ = true;
	var Int = { __name__ : ["Int"]};
	var Dynamic = { __name__ : ["Dynamic"]};
	var Float = Number;
	Float.__name__ = ["Float"];
	var Bool = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = { __name__ : ["Class"]};
	var Enum = { };
};

// Statics

Std.is = function(v,t) {
	return (js_Boot().default).__instanceof(v,t);
}
Std.string = function(s) {
	return (js_Boot().default).__string_rec(s,"");
}


// Export

exports.default = Std;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.PropertyDetails

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) {
		isField = true;
	}
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
}

// Meta

PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
PropertyDetails.prototype = {
	
};
PropertyDetails.prototype.__class__ = $hxClasses["motion.actuators.PropertyDetails"] = PropertyDetails;

// Init



// Statics




// Export

exports.default = PropertyDetails;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.Actuate

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_actuators_SimpleActuator() {return __webpack_require__(6);}
function motion_easing_Expo() {return __webpack_require__(15);}
function haxe_ds_ObjectMap() {return __webpack_require__(31);}
function Type() {return __webpack_require__(17);}
function motion__$Actuate_EffectsOptions() {return __webpack_require__(33);}
function motion_actuators_MotionPathActuator() {return __webpack_require__(19);}
function Std() {return __webpack_require__(7);}
function motion_actuators_IGenericActuator() {return __webpack_require__(12);}
function Reflect() {return __webpack_require__(5);}
function js_Boot() {return __webpack_require__(10);}
function motion__$Actuate_TweenTimer() {return __webpack_require__(35);}
function motion__$Actuate_TransformOptions() {return __webpack_require__(36);}
function HxOverrides() {return __webpack_require__(16);}
function motion_actuators_MethodActuator() {return __webpack_require__(22);}

// Constructor

var Actuate = function(){}

// Meta

Actuate.__name__ = ["motion","Actuate"];
Actuate.prototype = {
	
};
Actuate.prototype.__class__ = $hxClasses["motion.Actuate"] = Actuate;

// Init



// Statics

Actuate.apply = function(target,properties,customActuator) {
	Actuate.stop(target,properties);
	if(customActuator == null) {
		customActuator = Actuate.defaultActuator;
	}
	var actuator = (Type().default).createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
}
Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) {
		overwrite = true;
	}
	return new (motion__$Actuate_EffectsOptions().default)(target,duration,overwrite);
}
Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) {
		allowCreation = true;
	}
	if(!Actuate.targetLibraries.exists(target) && allowCreation) {
		Actuate.targetLibraries.set(target,[]);
	}
	return Actuate.targetLibraries.get(target);
}
Actuate.isActive = function() {
	var result = false;
	var library = Actuate.targetLibraries.iterator();
	while(library.hasNext()) {
		var library1 = library.next();
		result = true;
		break;
	}
	return result;
}
Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) {
		overwrite = true;
	}
	return Actuate.tween(target,duration,properties,overwrite,(motion_actuators_MotionPathActuator().default));
}
Actuate.pause = function(target) {
	if((Std().default)["is"](target,(motion_actuators_IGenericActuator().default))) {
		var actuator = target;
		actuator.pause();
	} else {
		var library = Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator1 = library[_g];
				++_g;
				actuator1.pause();
			}
		}
	}
}
Actuate.pauseAll = function() {
	var library = Actuate.targetLibraries.iterator();
	while(library.hasNext()) {
		var library1 = library.next();
		var _g = 0;
		while(_g < library1.length) {
			var actuator = library1[_g];
			++_g;
			actuator.pause();
		}
	}
}
Actuate.reset = function() {
	var library = Actuate.targetLibraries.iterator();
	while(library.hasNext()) {
		var library1 = library.next();
		var i = library1.length - 1;
		while(i >= 0) {
			library1[i].stop(null,false,false);
			--i;
		}
	}
	Actuate.targetLibraries = new (haxe_ds_ObjectMap().default)();
}
Actuate.resume = function(target) {
	if((Std().default)["is"](target,(motion_actuators_IGenericActuator().default))) {
		var actuator = target;
		actuator.resume();
	} else {
		var library = Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator1 = library[_g];
				++_g;
				actuator1.resume();
			}
		}
	}
}
Actuate.resumeAll = function() {
	var library = Actuate.targetLibraries.iterator();
	while(library.hasNext()) {
		var library1 = library.next();
		var _g = 0;
		while(_g < library1.length) {
			var actuator = library1[_g];
			++_g;
			actuator.resume();
		}
	}
}
Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) {
		sendEvent = true;
	}
	if(complete == null) {
		complete = false;
	}
	if(target != null) {
		if((Std().default)["is"](target,(motion_actuators_IGenericActuator().default))) {
			var actuator = target;
			actuator.stop(null,complete,sendEvent);
		} else {
			var library = Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					(Reflect().default).setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1 = (js_Boot().default).__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						(Reflect().default).setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					--i;
				}
			}
		}
	}
}
Actuate.timer = function(duration,customActuator) {
	return Actuate.tween(new (motion__$Actuate_TweenTimer().default)(0),duration,new (motion__$Actuate_TweenTimer().default)(1),false,customActuator);
}
Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) {
		overwrite = true;
	}
	if(duration == null) {
		duration = 0;
	}
	return new (motion__$Actuate_TransformOptions().default)(target,duration,overwrite);
}
Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) {
		overwrite = true;
	}
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) {
				customActuator = Actuate.defaultActuator;
			}
			var actuator = (Type().default).createInstance(customActuator,[target,duration,properties]);
			var library = Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					--i;
				}
				library = Actuate.getLibrary(actuator.target);
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else {
			return Actuate.apply(target,properties,customActuator);
		}
	}
	return null;
}
Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(Actuate.targetLibraries.exists(target)) {
		(HxOverrides().default).remove(Actuate.targetLibraries.get(target),actuator);
		if(Actuate.targetLibraries.get(target).length == 0) {
			Actuate.targetLibraries.remove(target);
		}
	}
}
Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) {
		overwrite = true;
	}
	var properties = { start : start, end : end};
	return Actuate.tween(target,duration,properties,overwrite,(motion_actuators_MethodActuator().default));
}
Actuate.defaultActuator = (motion_actuators_SimpleActuator().default)
Actuate.defaultEase = (motion_easing_Expo().default).easeOut
Actuate.targetLibraries = new (haxe_ds_ObjectMap().default)()

// Export

exports.default = Actuate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: js.Boot

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function js__$Boot_HaxeError() {return __webpack_require__(18);}
function Std() {return __webpack_require__(7);}

// Constructor

var Boot = function(){}

// Meta

Boot.__name__ = ["js","Boot"];
Boot.prototype = {
	
};
Boot.prototype.__class__ = $hxClasses["js.Boot"] = Boot;

// Init



// Statics

Boot.isClass = function(o) {
	return o.__name__;
}
Boot.isEnum = function(e) {
	return e.__ename__;
}
Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = Boot.__nativeClassName(o);
		if(name != null) {
			return Boot.__resolveNativeClass(name);
		}
		return null;
	}
}
Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (Boot.isClass(o) || Boot.isEnum(o))) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + Boot.__string_rec(o[i],s);
					} else {
						str += Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
}
Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return Boot.__interfLoop(cc.__super__,cl);
}
Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case $hxClasses["Bool"]:
		return typeof(o) == "boolean";
	case $hxClasses["Dynamic"]:
		return true;
	case $hxClasses["Float"]:
		return typeof(o) == "number";
	case $hxClasses["Int"]:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(Boot.__interfLoop(Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == $hxClasses["Class"] ? o.__name__ != null : false) {
			return true;
		}
		if(cl == $hxClasses["Enum"] ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ == cl;
	}
}
Boot.__cast = function(o,t) {
	if(Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw new (js__$Boot_HaxeError().default)("Cannot cast " + (Std().default).string(o) + " to " + (Std().default).string(t));
	}
}
Boot.__nativeClassName = function(o) {
	var name = Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
}
Boot.__isNativeObj = function(o) {
	return Boot.__nativeClassName(o) != null;
}
Boot.__resolveNativeClass = function(name) {
	return $global[name];
}
Boot.__toStr = ({ }).toString

// Export

exports.default = Boot;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.IComponentPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var IComponentPath = function() {}

// Meta

IComponentPath.__name__ = ["motion","IComponentPath"];
IComponentPath.prototype = {
	
};
IComponentPath.prototype.__class__ = $hxClasses["motion.IComponentPath"] = IComponentPath;

// Init



// Statics




// Export

exports.default = IComponentPath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.IGenericActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var IGenericActuator = function() {}

// Meta

IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
IGenericActuator.prototype = {
	
};
IGenericActuator.prototype.__class__ = $hxClasses["motion.actuators.IGenericActuator"] = IGenericActuator;

// Init



// Statics




// Export

exports.default = IGenericActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.FilterActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_SimpleActuator() {return __webpack_require__(6);}
function Reflect() {return __webpack_require__(5);}
function motion_actuators_PropertyDetails() {return __webpack_require__(8);}
function Std() {return __webpack_require__(7);}
function Type() {return __webpack_require__(17);}

// Constructor

var FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	(motion_actuators_SimpleActuator().default).call(this,target,duration,properties);
	if((Std().default)["is"](properties.filter,$hxClasses["Class"])) {
		this.filterClass = properties.filter;
		if(target.filters.length == 0) {
			target.filters = [(Type().default).createInstance(this.filterClass,[])];
		}
		var _g = 0;
		var _g1 = target.filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if((Std().default)["is"](filter,this.filterClass)) {
				this.filter = filter;
			}
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = target.filters[this.filterIndex];
	}
}

// Meta

FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
FilterActuator.__super__ = (motion_actuators_SimpleActuator().default);
FilterActuator.prototype = $extend((motion_actuators_SimpleActuator().default).prototype, {
	apply: function() {
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				(Reflect().default).setProperty(this.filter,propertyName,(Reflect().default).field(this.properties,propertyName));
			}
		}
		this.setFilter();
	},
	initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new (motion_actuators_PropertyDetails().default)(this.filter,propertyName,start,(Reflect().default).field(this.properties,propertyName) - start,(Reflect().default).hasField(this.filter,"set_" + propertyName));
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	},
	setFilter: function() {
		var filters = this.target.filters;
		if(this.filterIndex > -1) {
			filters[this.filterIndex] = this.filter;
		} else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if((Std().default)["is"](filters[i],this.filterClass)) {
					filters[i] = this.filter;
				}
			}
		}
		this.setField(this.target,"filters",filters);
	},
	update: function(currentTime) {
		(motion_actuators_SimpleActuator().default).prototype.update.call(this,currentTime);
		this.setFilter();
	}
});
FilterActuator.prototype.__class__ = $hxClasses["motion.actuators.FilterActuator"] = FilterActuator;

// Init



// Statics




// Export

exports.default = FilterActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.GenericActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_actuators_IGenericActuator() {return __webpack_require__(12);}
function Reflect() {return __webpack_require__(5);}
function motion_Actuate() {return __webpack_require__(9);}

// Constructor

var GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = (motion_Actuate().default).defaultEase;
}

// Meta

GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
GenericActuator.__interfaces__ = [(motion_actuators_IGenericActuator().default)];
GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if((Reflect().default).hasField(this.target,i)) {
				(Reflect().default).setField(this.target,i,(Reflect().default).field(this.properties,i));
			} else {
				(Reflect().default).setProperty(this.target,i,(Reflect().default).field(this.properties,i));
			}
		}
	},
	autoVisible: function(value) {
		if(value == null) {
			value = true;
		}
		this._autoVisible = value;
		return this;
	},
	callMethod: function(method,params) {
		if(params == null) {
			params = [];
		}
		return (Reflect().default).callMethod(method,method,params);
	},
	change: function() {
		if(this._onUpdate != null) {
			this.callMethod(this._onUpdate,this._onUpdateParams);
		}
	},
	complete: function(sendEvent) {
		if(sendEvent == null) {
			sendEvent = true;
		}
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) {
				this.callMethod(this._onComplete,this._onCompleteParams);
			}
		}
		(motion_Actuate().default).unload(this);
	},
	delay: function(duration) {
		this._delay = duration;
		return this;
	},
	ease: function(easing) {
		this._ease = easing;
		return this;
	},
	move: function() {
	},
	onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) {
			this._onCompleteParams = [];
		} else {
			this._onCompleteParams = parameters;
		}
		if(this.duration == 0) {
			this.complete();
		}
		return this;
	},
	onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) {
			this._onRepeatParams = [];
		} else {
			this._onRepeatParams = parameters;
		}
		return this;
	},
	onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) {
			this._onUpdateParams = [];
		} else {
			this._onUpdateParams = parameters;
		}
		return this;
	},
	onPause: function(handler,parameters) {
		this._onPause = handler;
		if(parameters == null) {
			this._onPauseParams = [];
		} else {
			this._onPauseParams = parameters;
		}
		return this;
	},
	onResume: function(handler,parameters) {
		this._onResume = handler;
		if(parameters == null) {
			this._onResumeParams = [];
		} else {
			this._onResumeParams = parameters;
		}
		return this;
	},
	pause: function() {
		if(this._onPause != null) {
			this.callMethod(this._onPause,this._onPauseParams);
		}
	},
	reflect: function(value) {
		if(value == null) {
			value = true;
		}
		this._reflect = value;
		this.special = true;
		return this;
	},
	repeat: function(times) {
		if(times == null) {
			times = -1;
		}
		this._repeat = times;
		return this;
	},
	resume: function() {
		if(this._onResume != null) {
			this.callMethod(this._onResume,this._onResumeParams);
		}
	},
	reverse: function(value) {
		if(value == null) {
			value = true;
		}
		this._reverse = value;
		this.special = true;
		return this;
	},
	smartRotation: function(value) {
		if(value == null) {
			value = true;
		}
		this._smartRotation = value;
		this.special = true;
		return this;
	},
	snapping: function(value) {
		if(value == null) {
			value = true;
		}
		this._snapping = value;
		this.special = true;
		return this;
	},
	stop: function(properties,complete,sendEvent) {
	}
};
GenericActuator.prototype.__class__ = $hxClasses["motion.actuators.GenericActuator"] = GenericActuator;

// Init



// Statics




// Export

exports.default = GenericActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Expo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Expo_ExpoEaseIn() {return __webpack_require__(28);}
function motion_easing__$Expo_ExpoEaseInOut() {return __webpack_require__(29);}
function motion_easing__$Expo_ExpoEaseOut() {return __webpack_require__(30);}

// Constructor

var Expo = function(){}

// Meta

Expo.__name__ = ["motion","easing","Expo"];
Expo.prototype = {
	
};
Expo.prototype.__class__ = $hxClasses["motion.easing.Expo"] = Expo;

// Init



// Statics


Expo.easeIn = new (motion_easing__$Expo_ExpoEaseIn().default)()
Expo.easeInOut = new (motion_easing__$Expo_ExpoEaseInOut().default)()
Expo.easeOut = new (motion_easing__$Expo_ExpoEaseOut().default)()

// Export

exports.default = Expo;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: HxOverrides

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var HxOverrides = function(){}

// Meta

HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.prototype = {
	
};
HxOverrides.prototype.__class__ = $hxClasses["HxOverrides"] = HxOverrides;

// Init



// Statics

HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}


// Export

exports.default = HxOverrides;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: Type

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function js_Boot() {return __webpack_require__(10);}
function js__$Boot_HaxeError() {return __webpack_require__(18);}

// Constructor

var Type = function(){}

// Meta

Type.__name__ = ["Type"];
Type.prototype = {
	
};
Type.prototype.__class__ = $hxClasses["Type"] = Type;

// Init



// Statics

Type.getClass = function(o) {
	if(o == null) {
		return null;
	} else {
		return (js_Boot().default).getClass(o);
	}
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	case 9:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
	case 10:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9]);
	case 11:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10]);
	case 12:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11]);
	case 13:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12]);
	case 14:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12],args[13]);
	default:
		throw new (js__$Boot_HaxeError().default)("Too many arguments");
	}
}


// Export

exports.default = Type;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: js._Boot.HaxeError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;

// Constructor

var HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,HaxeError);
	}
}

// Meta

HaxeError.__name__ = ["js","_Boot","HaxeError"];
HaxeError.__super__ = Error;
HaxeError.prototype = $extend(Error.prototype, {
	
});
HaxeError.prototype.__class__ = $hxClasses["js._Boot.HaxeError"] = HaxeError;

// Init



// Statics

HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new HaxeError(val);
	}
}


// Export

exports.default = HaxeError;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.MotionPathActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_SimpleActuator() {return __webpack_require__(6);}
function Reflect() {return __webpack_require__(5);}
function js_Boot() {return __webpack_require__(10);}
function motion_IComponentPath() {return __webpack_require__(11);}
function motion_actuators_PropertyPathDetails() {return __webpack_require__(34);}

// Constructor

var MotionPathActuator = function(target,duration,properties) {
	(motion_actuators_SimpleActuator().default).call(this,target,duration,properties);
}

// Meta

MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
MotionPathActuator.__super__ = (motion_actuators_SimpleActuator().default);
MotionPathActuator.prototype = $extend((motion_actuators_SimpleActuator().default).prototype, {
	apply: function() {
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if((Reflect().default).hasField(this.target,propertyName)) {
				(Reflect().default).setField(this.target,propertyName,((js_Boot().default).__cast((Reflect().default).field(this.properties,propertyName) , (motion_IComponentPath().default))).get_end());
			} else {
				(Reflect().default).setProperty(this.target,propertyName,((js_Boot().default).__cast((Reflect().default).field(this.properties,propertyName) , (motion_IComponentPath().default))).get_end());
			}
		}
	},
	initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = (Reflect().default).fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = (js_Boot().default).__cast((Reflect().default).field(this.properties,propertyName) , (motion_IComponentPath().default));
			if(path != null) {
				var isField = true;
				if((Reflect().default).hasField(this.target,propertyName)) {
					path.set_start((Reflect().default).field(this.target,propertyName));
				} else {
					isField = false;
					path.set_start((Reflect().default).getProperty(this.target,propertyName));
				}
				details = new (motion_actuators_PropertyPathDetails().default)(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	},
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) {
				tweenPosition = 1;
			}
			if(!this.initialized) {
				this.initialize();
			}
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) {
						(Reflect().default).setField(details1.target,details1.propertyName,((js_Boot().default).__cast(details1 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing));
					} else {
						(Reflect().default).setProperty(details1.target,details1.propertyName,((js_Boot().default).__cast(details1 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing));
					}
				}
			} else {
				if(!this._reverse) {
					easing = this._ease.calculate(tweenPosition);
				} else {
					easing = this._ease.calculate(1 - tweenPosition);
				}
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) {
							(Reflect().default).setField(details2.target,details2.propertyName,((js_Boot().default).__cast(details2 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing));
						} else {
							(Reflect().default).setProperty(details2.target,details2.propertyName,((js_Boot().default).__cast(details2 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing));
						}
					} else if(details2.isField) {
						(Reflect().default).setField(details2.target,details2.propertyName,Math.round(((js_Boot().default).__cast(details2 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing)));
					} else {
						(Reflect().default).setProperty(details2.target,details2.propertyName,Math.round(((js_Boot().default).__cast(details2 , (motion_actuators_PropertyPathDetails().default))).path.calculate(easing)));
					}
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) {
						this.setField(this.target,"visible",false);
					}
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) {
						this.callMethod(this._onRepeat,this._onRepeatParams);
					}
					if(this._reflect) {
						this._reverse = !this._reverse;
					}
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) {
						this._repeat--;
					}
				}
			}
			if(this.sendChange) {
				this.change();
			}
		}
	}
});
MotionPathActuator.prototype.__class__ = $hxClasses["motion.actuators.MotionPathActuator"] = MotionPathActuator;

// Init



// Statics




// Export

exports.default = MotionPathActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.TransformActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_SimpleActuator() {return __webpack_require__(6);}
function Reflect() {return __webpack_require__(5);}
function Std() {return __webpack_require__(7);}
function openfl_display_DisplayObject() {return $import(__webpack_require__(21));}
function openfl_geom_ColorTransform() {return $import(__webpack_require__(37));}
function motion_actuators_PropertyDetails() {return __webpack_require__(8);}
function openfl_media_SoundTransform() {return $import(__webpack_require__(38));}

// Constructor

var TransformActuator = function(target,duration,properties) {
	(motion_actuators_SimpleActuator().default).call(this,target,duration,properties);
}

// Meta

TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
TransformActuator.__super__ = (motion_actuators_SimpleActuator().default);
TransformActuator.prototype = $extend((motion_actuators_SimpleActuator().default).prototype, {
	apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) {
			this.setField(this.target,"soundTransform",this.endSoundTransform);
		}
	},
	initialize: function() {
		if((Reflect().default).hasField(this.properties,"colorValue") && (Std().default)["is"](this.target,(openfl_display_DisplayObject().default))) {
			this.initializeColor();
		}
		if((Reflect().default).hasField(this.properties,"soundVolume") || (Reflect().default).hasField(this.properties,"soundPan")) {
			this.initializeSound();
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	},
	initializeColor: function() {
		this.endColorTransform = new (openfl_geom_ColorTransform().default)();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if((Reflect().default).hasField(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else {
			this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		}
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new (openfl_geom_ColorTransform().default)();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new (motion_actuators_PropertyDetails().default)(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	},
	initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) {
			this.setField(this.target,"soundTransform",new (openfl_media_SoundTransform().default)());
		}
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new (openfl_media_SoundTransform().default)();
		if((Reflect().default).hasField(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new (motion_actuators_PropertyDetails().default)(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if((Reflect().default).hasField(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new (motion_actuators_PropertyDetails().default)(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	},
	update: function(currentTime) {
		(motion_actuators_SimpleActuator().default).prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) {
			this.setField(this.target,"soundTransform",this.tweenSoundTransform);
		}
	}
});
TransformActuator.prototype.__class__ = $hxClasses["motion.actuators.TransformActuator"] = TransformActuator;

// Init



// Statics




// Export

exports.default = TransformActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.MethodActuator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_SimpleActuator() {return __webpack_require__(6);}
function Reflect() {return __webpack_require__(5);}
function motion_actuators_PropertyDetails() {return __webpack_require__(8);}

// Constructor

var MethodActuator = function(target,duration,properties) {
	this.currentParameters = [];
	this.tweenProperties = { };
	(motion_actuators_SimpleActuator().default).call(this,target,duration,properties);
	if(!(Reflect().default).hasField(properties,"start")) {
		this.properties.start = [];
	}
	if(!(Reflect().default).hasField(properties,"end")) {
		this.properties.end = this.properties.start;
	}
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(this.properties.start[i]);
	}
}

// Meta

MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
MethodActuator.__super__ = (motion_actuators_SimpleActuator().default);
MethodActuator.prototype = $extend((motion_actuators_SimpleActuator().default).prototype, {
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	},
	complete: function(sendEvent) {
		if(sendEvent == null) {
			sendEvent = true;
		}
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = (Reflect().default).field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		(motion_actuators_SimpleActuator().default).prototype.complete.call(this,sendEvent);
	},
	initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			(Reflect().default).setField(this.tweenProperties,propertyName,start);
			if(typeof(start) == "number" || typeof(start) == "number" && ((start | 0) === start)) {
				details = new (motion_actuators_PropertyDetails().default)(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	},
	update: function(currentTime) {
		(motion_actuators_SimpleActuator().default).prototype.update.call(this,currentTime);
		if(this.active && !this.paused) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = (Reflect().default).field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
});
MethodActuator.prototype.__class__ = $hxClasses["motion.actuators.MethodActuator"] = MethodActuator;

// Init



// Statics




// Export

exports.default = MethodActuator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._MotionPath.BezierPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_IComponentPath() {return __webpack_require__(11);}

// Constructor

var BezierPath = function(end,control,strength) {
	this._end = end;
	this.control = control;
	this.strength = strength;
}

// Meta

BezierPath.__name__ = ["motion","_MotionPath","BezierPath"];
BezierPath.__interfaces__ = [(motion_IComponentPath().default)];
BezierPath.prototype = {
	calculate: function(k) {
		var l = 1 - k;
		var _g = this.control.length;
		switch(_g) {
		case 0:
			return l * this._start + k * this._end;
		case 1:
			return l * l * this._start + 2 * l * k * this.control[0] + k * k * this._end;
		case 2:
			return l * l * l * this._start + 3 * l * l * k * this.control[0] + 3 * l * k * k * this.control[1] + k * k * k * this._end;
		default:
			if(l < 1e-7) {
				return this._end;
			}
			var r = k / l;
			var n = this.control.length + 1;
			var coeff = Math.pow(l,n);
			var res = coeff * this._start;
			var _g1 = 1;
			var _g2 = n;
			while(_g1 < _g2) {
				var i = _g1++;
				coeff *= r * (n + 1 - i) / i;
				res += coeff * this.control[i - 1];
			}
			coeff *= r / n;
			return res + coeff * this._end;
		}
	},
	get_start: function() {
		return this._start;
	},
	set_start: function(value) {
		return this._start = value;
	},
	get_end: function() {
		return this._end;
	}
};
BezierPath.prototype.__class__ = $hxClasses["motion._MotionPath.BezierPath"] = BezierPath;

// Init



// Statics




// Export

exports.default = BezierPath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._MotionPath.ComponentPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_IComponentPath() {return __webpack_require__(11);}

// Constructor

var ComponentPath = function() {
	this.paths = [];
	this.strength = 0;
}

// Meta

ComponentPath.__name__ = ["motion","_MotionPath","ComponentPath"];
ComponentPath.__interfaces__ = [(motion_IComponentPath().default)];
ComponentPath.prototype = {
	addPath: function(path) {
		if(this.paths.length > 0) {
			path.set_start(this.paths[this.paths.length - 1].get_end());
		}
		this.paths.push(path);
		this.strength += path.strength;
	},
	calculate: function(k) {
		if(this.paths.length == 1) {
			return this.paths[0].calculate(k);
		} else {
			var ratio = k * this.strength;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
				} else {
					return path.calculate(ratio / path.strength);
				}
			}
		}
		return 0;
	},
	get_start: function() {
		if(this.paths.length > 0) {
			return this.paths[0].get_start();
		} else {
			return 0;
		}
	},
	set_start: function(value) {
		if(this.paths.length > 0) {
			return this.paths[0].set_start(value);
		} else {
			return 0;
		}
	},
	get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.get_end();
		} else {
			return this.get_start();
		}
	}
};
ComponentPath.prototype.__class__ = $hxClasses["motion._MotionPath.ComponentPath"] = ComponentPath;

// Init



// Statics




// Export

exports.default = ComponentPath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	actuators: __webpack_require__ (26),
	easing: __webpack_require__ (46),
	Actuate: __webpack_require__ (87).default,
	MotionPath: __webpack_require__ (88).default
}
module.exports.default = module.exports.Actuate;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	FilterActuator: __webpack_require__ (27).default,
	GenericActuator: __webpack_require__ (40).default,
	IGenericActuator: __webpack_require__ (41).default,
	MethodActuator: __webpack_require__ (42).default,
	MotionPathActuator: __webpack_require__ (43).default,
	SimpleActuator: __webpack_require__ (44).default,
	TransformActuator: __webpack_require__ (45).default
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Expo.ExpoEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ExpoEaseIn = function() {
}

// Meta

ExpoEaseIn.__name__ = ["motion","easing","_Expo","ExpoEaseIn"];
ExpoEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) {
			return 0;
		} else {
			return Math.exp(6.931471805599453 * (k - 1));
		}
	},
	ease: function(t,b,c,d) {
		if(t == 0) {
			return b;
		} else {
			return c * Math.exp(6.931471805599453 * (t / d - 1)) + b;
		}
	}
};
ExpoEaseIn.prototype.__class__ = $hxClasses["motion.easing._Expo.ExpoEaseIn"] = ExpoEaseIn;

// Init



// Statics




// Export

exports.default = ExpoEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Expo.ExpoEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ExpoEaseInOut = function() {
}

// Meta

ExpoEaseInOut.__name__ = ["motion","easing","_Expo","ExpoEaseInOut"];
ExpoEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) {
			return 0;
		}
		if(k == 1) {
			return 1;
		}
		if((k /= 0.5) < 1.0) {
			return 0.5 * Math.exp(6.931471805599453 * (k - 1));
		}
		return 0.5 * (2 - Math.exp(-6.931471805599453 * --k));
	},
	ease: function(t,b,c,d) {
		if(t == 0) {
			return b;
		}
		if(t == d) {
			return b + c;
		}
		if((t /= d / 2.0) < 1.0) {
			return c / 2 * Math.exp(6.931471805599453 * (t - 1)) + b;
		}
		return c / 2 * (2 - Math.exp(-6.931471805599453 * --t)) + b;
	}
};
ExpoEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Expo.ExpoEaseInOut"] = ExpoEaseInOut;

// Init



// Statics




// Export

exports.default = ExpoEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Expo.ExpoEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ExpoEaseOut = function() {
}

// Meta

ExpoEaseOut.__name__ = ["motion","easing","_Expo","ExpoEaseOut"];
ExpoEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) {
			return 1;
		} else {
			return 1 - Math.exp(-6.931471805599453 * k);
		}
	},
	ease: function(t,b,c,d) {
		if(t == d) {
			return b + c;
		} else {
			return c * (1 - Math.exp(-6.931471805599453 * t / d)) + b;
		}
	}
};
ExpoEaseOut.prototype.__class__ = $hxClasses["motion.easing._Expo.ExpoEaseOut"] = ExpoEaseOut;

// Init



// Statics




// Export

exports.default = ExpoEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: haxe.ds.ObjectMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function haxe_IMap() {return __webpack_require__(32);}
function HxOverrides() {return __webpack_require__(16);}

// Constructor

var ObjectMap = function() {
	this.h = { __keys__ : { }};
}

// Meta

ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
ObjectMap.__interfaces__ = [(haxe_IMap().default)];
ObjectMap.prototype = {
	set: function(key,value) {
		var id = ObjectMap.getId(key) || ObjectMap.assignId(key);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	},
	get: function(key) {
		return this.h[ObjectMap.getId(key)];
	},
	exists: function(key) {
		return this.h.__keys__[ObjectMap.getId(key)] != null;
	},
	remove: function(key) {
		var id = ObjectMap.getId(key);
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	},
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return (HxOverrides().default).iter(a);
	},
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[ObjectMap.getId(i)];
		}};
	}
};
ObjectMap.prototype.__class__ = $hxClasses["haxe.ds.ObjectMap"] = ObjectMap;

// Init



// Statics

ObjectMap.assignId = function(obj) {
	return obj.__id__ = ++ObjectMap.count;
}
ObjectMap.getId = function(obj) {
	return obj.__id__;
}
ObjectMap.count = 0

// Export

exports.default = ObjectMap;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: haxe.IMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var IMap = function() {}

// Meta

IMap.__name__ = ["haxe","IMap"];
IMap.prototype = {
	
};
IMap.prototype.__class__ = $hxClasses["haxe.IMap"] = IMap;

// Init



// Statics




// Export

exports.default = IMap;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._Actuate.EffectsOptions

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_Actuate() {return __webpack_require__(9);}
function motion_actuators_FilterActuator() {return __webpack_require__(13);}

// Constructor

var EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
}

// Meta

EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return (motion_Actuate().default).tween(this.target,this.duration,properties,this.overwrite,(motion_actuators_FilterActuator().default));
	}
};
EffectsOptions.prototype.__class__ = $hxClasses["motion._Actuate.EffectsOptions"] = EffectsOptions;

// Init



// Statics




// Export

exports.default = EffectsOptions;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.actuators.PropertyPathDetails

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion_actuators_PropertyDetails() {return __webpack_require__(8);}

// Constructor

var PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) {
		isField = true;
	}
	(motion_actuators_PropertyDetails().default).call(this,target,propertyName,0,0,isField);
	this.path = path;
}

// Meta

PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
PropertyPathDetails.__super__ = (motion_actuators_PropertyDetails().default);
PropertyPathDetails.prototype = $extend((motion_actuators_PropertyDetails().default).prototype, {
	
});
PropertyPathDetails.prototype.__class__ = $hxClasses["motion.actuators.PropertyPathDetails"] = PropertyPathDetails;

// Init



// Statics




// Export

exports.default = PropertyPathDetails;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._Actuate.TweenTimer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;

// Constructor

var TweenTimer = function(progress) {
	this.progress = progress;
}

// Meta

TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
TweenTimer.prototype = {
	
};
TweenTimer.prototype.__class__ = $hxClasses["motion._Actuate.TweenTimer"] = TweenTimer;

// Init



// Statics




// Export

exports.default = TweenTimer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._Actuate.TransformOptions

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_Actuate() {return __webpack_require__(9);}
function motion_actuators_TransformActuator() {return __webpack_require__(20);}

// Constructor

var TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
}

// Meta

TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
TransformOptions.prototype = {
	color: function(value,strength,alpha) {
		if(strength == null) {
			strength = 1;
		}
		if(value == null) {
			value = 0;
		}
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) {
			properties.colorAlpha = alpha;
		}
		return (motion_Actuate().default).tween(this.target,this.duration,properties,this.overwrite,(motion_actuators_TransformActuator().default));
	},
	sound: function(volume,pan) {
		var properties = { };
		if(volume != null) {
			properties.soundVolume = volume;
		}
		if(pan != null) {
			properties.soundPan = pan;
		}
		return (motion_Actuate().default).tween(this.target,this.duration,properties,this.overwrite,(motion_actuators_TransformActuator().default));
	}
};
TransformOptions.prototype.__class__ = $hxClasses["motion._Actuate.TransformOptions"] = TransformOptions;

// Init



// Statics




// Export

exports.default = TransformOptions;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	Back: __webpack_require__ (47).default,
	Cubic: __webpack_require__ (52).default,
	Elastic: __webpack_require__ (57).default,
	Expo: __webpack_require__ (62).default,
	IEasing: __webpack_require__ (63).default,
	Linear: __webpack_require__ (64).default,
	Quad: __webpack_require__ (67).default,
	Quart: __webpack_require__ (72).default,
	Quint: __webpack_require__ (77).default,
	Sine: __webpack_require__ (82).default
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Back

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Back_BackEaseIn() {return __webpack_require__(49);}
function motion_easing__$Back_BackEaseInOut() {return __webpack_require__(50);}
function motion_easing__$Back_BackEaseOut() {return __webpack_require__(51);}

// Constructor

var Back = function(){}

// Meta

Back.__name__ = ["motion","easing","Back"];
Back.prototype = {
	
};
Back.prototype.__class__ = $hxClasses["motion.easing.Back"] = Back;

// Init



// Statics

Back.easeInWith = function(s) {
	return new (motion_easing__$Back_BackEaseIn().default)(s);
}
Back.easeInOutWith = function(s) {
	return new (motion_easing__$Back_BackEaseInOut().default)(s);
}
Back.easeOutWith = function(s) {
	return new (motion_easing__$Back_BackEaseOut().default)(s);
}
Back.easeIn = new (motion_easing__$Back_BackEaseIn().default)(1.70158)
Back.easeInOut = new (motion_easing__$Back_BackEaseInOut().default)(1.70158)
Back.easeOut = new (motion_easing__$Back_BackEaseOut().default)(1.70158)

// Export

exports.default = Back;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Back.BackEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var BackEaseIn = function(s) {
	this.s = s;
}

// Meta

BackEaseIn.__name__ = ["motion","easing","_Back","BackEaseIn"];
BackEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
BackEaseIn.prototype = {
	calculate: function(k) {
		return k * k * ((this.s + 1) * k - this.s);
	},
	ease: function(t,b,c,d) {
		return c * (t /= d) * t * ((this.s + 1) * t - this.s) + b;
	}
};
BackEaseIn.prototype.__class__ = $hxClasses["motion.easing._Back.BackEaseIn"] = BackEaseIn;

// Init



// Statics




// Export

exports.default = BackEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Back.BackEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var BackEaseInOut = function(s) {
	this.s = s;
}

// Meta

BackEaseInOut.__name__ = ["motion","easing","_Back","BackEaseInOut"];
BackEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
BackEaseInOut.prototype = {
	calculate: function(k) {
		if((k /= 0.5) < 1) {
			var tmp = this;
			return 0.5 * (k * k * (((tmp.s *= 1.525) + 1) * k - this.s));
		}
		var tmp1 = this;
		return 0.5 * ((k -= 2) * k * (((tmp1.s *= 1.525) + 1) * k + this.s) + 2);
	},
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			var tmp = this;
			return c / 2 * (t * t * (((tmp.s *= 1.525) + 1) * t - this.s)) + b;
		}
		var tmp1 = this;
		return c / 2 * ((t -= 2) * t * (((tmp1.s *= 1.525) + 1) * t + this.s) + 2) + b;
	}
};
BackEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Back.BackEaseInOut"] = BackEaseInOut;

// Init



// Statics




// Export

exports.default = BackEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Back.BackEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var BackEaseOut = function(s) {
	this.s = s;
}

// Meta

BackEaseOut.__name__ = ["motion","easing","_Back","BackEaseOut"];
BackEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
BackEaseOut.prototype = {
	calculate: function(k) {
		return --k * k * ((this.s + 1) * k + this.s) + 1;
	},
	ease: function(t,b,c,d) {
		t = t / d - 1;
		return c * (t * t * ((this.s + 1) * t + this.s) + 1) + b;
	}
};
BackEaseOut.prototype.__class__ = $hxClasses["motion.easing._Back.BackEaseOut"] = BackEaseOut;

// Init



// Statics




// Export

exports.default = BackEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Cubic

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Cubic_CubicEaseIn() {return __webpack_require__(54);}
function motion_easing__$Cubic_CubicEaseInOut() {return __webpack_require__(55);}
function motion_easing__$Cubic_CubicEaseOut() {return __webpack_require__(56);}

// Constructor

var Cubic = function(){}

// Meta

Cubic.__name__ = ["motion","easing","Cubic"];
Cubic.prototype = {
	
};
Cubic.prototype.__class__ = $hxClasses["motion.easing.Cubic"] = Cubic;

// Init



// Statics


Cubic.easeIn = new (motion_easing__$Cubic_CubicEaseIn().default)()
Cubic.easeInOut = new (motion_easing__$Cubic_CubicEaseInOut().default)()
Cubic.easeOut = new (motion_easing__$Cubic_CubicEaseOut().default)()

// Export

exports.default = Cubic;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Cubic.CubicEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var CubicEaseIn = function() {
}

// Meta

CubicEaseIn.__name__ = ["motion","easing","_Cubic","CubicEaseIn"];
CubicEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
CubicEaseIn.prototype = {
	calculate: function(k) {
		return k * k * k;
	},
	ease: function(t,b,c,d) {
		return c * (t /= d) * t * t + b;
	}
};
CubicEaseIn.prototype.__class__ = $hxClasses["motion.easing._Cubic.CubicEaseIn"] = CubicEaseIn;

// Init



// Statics




// Export

exports.default = CubicEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Cubic.CubicEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var CubicEaseInOut = function() {
}

// Meta

CubicEaseInOut.__name__ = ["motion","easing","_Cubic","CubicEaseInOut"];
CubicEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
CubicEaseInOut.prototype = {
	calculate: function(k) {
		if((k /= 0.5) < 1) {
			return 0.5 * k * k * k;
		} else {
			return 0.5 * ((k -= 2) * k * k + 2);
		}
	},
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			return c / 2 * t * t * t + b;
		} else {
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		}
	}
};
CubicEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Cubic.CubicEaseInOut"] = CubicEaseInOut;

// Init



// Statics




// Export

exports.default = CubicEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Cubic.CubicEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var CubicEaseOut = function() {
}

// Meta

CubicEaseOut.__name__ = ["motion","easing","_Cubic","CubicEaseOut"];
CubicEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
CubicEaseOut.prototype = {
	calculate: function(k) {
		return --k * k * k + 1;
	},
	ease: function(t,b,c,d) {
		t = t / d - 1;
		return c * (t * t * t + 1) + b;
	}
};
CubicEaseOut.prototype.__class__ = $hxClasses["motion.easing._Cubic.CubicEaseOut"] = CubicEaseOut;

// Init



// Statics




// Export

exports.default = CubicEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Elastic

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Elastic_ElasticEaseIn() {return __webpack_require__(59);}
function motion_easing__$Elastic_ElasticEaseInOut() {return __webpack_require__(60);}
function motion_easing__$Elastic_ElasticEaseOut() {return __webpack_require__(61);}

// Constructor

var Elastic = function(){}

// Meta

Elastic.__name__ = ["motion","easing","Elastic"];
Elastic.prototype = {
	
};
Elastic.prototype.__class__ = $hxClasses["motion.easing.Elastic"] = Elastic;

// Init



// Statics

Elastic.easeInWith = function(a,p) {
	return new (motion_easing__$Elastic_ElasticEaseIn().default)(a,p);
}
Elastic.easeInOutWith = function(a,p) {
	return new (motion_easing__$Elastic_ElasticEaseInOut().default)(a,p);
}
Elastic.easeOutWith = function(a,p) {
	return new (motion_easing__$Elastic_ElasticEaseOut().default)(a,p);
}
Elastic.easeIn = new (motion_easing__$Elastic_ElasticEaseIn().default)(0.1,0.4)
Elastic.easeInOut = new (motion_easing__$Elastic_ElasticEaseInOut().default)(0.1,0.4)
Elastic.easeOut = new (motion_easing__$Elastic_ElasticEaseOut().default)(0.1,0.4)

// Export

exports.default = Elastic;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Elastic.ElasticEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ElasticEaseIn = function(a,p) {
	this.a = a;
	this.p = p;
}

// Meta

ElasticEaseIn.__name__ = ["motion","easing","_Elastic","ElasticEaseIn"];
ElasticEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
ElasticEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) {
			return 0;
		}
		if(k == 1) {
			return 1;
		}
		var s;
		if(this.a < 1) {
			this.a = 1;
			s = this.p / 4;
		} else {
			s = this.p / (2 * Math.PI) * Math.asin(1 / this.a);
		}
		return -(this.a * Math.exp(6.931471805599453 * --k) * Math.sin((k - s) * (2 * Math.PI) / this.p));
	},
	ease: function(t,b,c,d) {
		if(t == 0) {
			return b;
		}
		if((t /= d) == 1) {
			return b + c;
		}
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else {
			s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		}
		return -(this.a * Math.exp(6.931471805599453 * --t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p)) + b;
	}
};
ElasticEaseIn.prototype.__class__ = $hxClasses["motion.easing._Elastic.ElasticEaseIn"] = ElasticEaseIn;

// Init



// Statics




// Export

exports.default = ElasticEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Elastic.ElasticEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ElasticEaseInOut = function(a,p) {
	this.a = a;
	this.p = p;
}

// Meta

ElasticEaseInOut.__name__ = ["motion","easing","_Elastic","ElasticEaseInOut"];
ElasticEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
ElasticEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) {
			return 0;
		}
		if((k /= 0.5) == 2) {
			return 1;
		}
		var p = 0.44999999999999996;
		var a = 1;
		var s = p / 4;
		if(k < 1) {
			return -0.5 * (Math.exp(6.931471805599453 * --k) * Math.sin((k - s) * (2 * Math.PI) / p));
		}
		return Math.exp(-6.931471805599453 * --k) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	ease: function(t,b,c,d) {
		if(t == 0) {
			return b;
		}
		if((t /= d / 2) == 2) {
			return b + c;
		}
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else {
			s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		}
		if(t < 1) {
			return -0.5 * (this.a * Math.exp(6.931471805599453 * --t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p)) + b;
		}
		return this.a * Math.exp(-6.931471805599453 * --t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p) * 0.5 + c + b;
	}
};
ElasticEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Elastic.ElasticEaseInOut"] = ElasticEaseInOut;

// Init



// Statics




// Export

exports.default = ElasticEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Elastic.ElasticEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var ElasticEaseOut = function(a,p) {
	this.a = a;
	this.p = p;
}

// Meta

ElasticEaseOut.__name__ = ["motion","easing","_Elastic","ElasticEaseOut"];
ElasticEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
ElasticEaseOut.prototype = {
	calculate: function(k) {
		if(k == 0) {
			return 0;
		}
		if(k == 1) {
			return 1;
		}
		var s;
		if(this.a < 1) {
			this.a = 1;
			s = this.p / 4;
		} else {
			s = this.p / (2 * Math.PI) * Math.asin(1 / this.a);
		}
		return this.a * Math.exp(-6.931471805599453 * k) * Math.sin((k - s) * (2 * Math.PI) / this.p) + 1;
	},
	ease: function(t,b,c,d) {
		if(t == 0) {
			return b;
		}
		if((t /= d) == 1) {
			return b + c;
		}
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else {
			s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		}
		return this.a * Math.exp(-6.931471805599453 * t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p) + c + b;
	}
};
ElasticEaseOut.prototype.__class__ = $hxClasses["motion.easing._Elastic.ElasticEaseOut"] = ElasticEaseOut;

// Init



// Statics




// Export

exports.default = ElasticEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Linear

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_LinearEaseNone() {return __webpack_require__(66);}

// Constructor

var Linear = function(){}

// Meta

Linear.__name__ = ["motion","easing","Linear"];
Linear.prototype = {
	
};
Linear.prototype.__class__ = $hxClasses["motion.easing.Linear"] = Linear;

// Init

Object.defineProperties(Linear,{ "easeNone" : { get : function() {
	return Linear.get_easeNone();
}}});

// Statics

Linear.get_easeNone = function() {
	return new (motion_easing_LinearEaseNone().default)();
}


// Export

exports.default = Linear;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.LinearEaseNone

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var LinearEaseNone = function() {
}

// Meta

LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
LinearEaseNone.__interfaces__ = [(motion_easing_IEasing().default)];
LinearEaseNone.prototype = {
	calculate: function(k) {
		return k;
	},
	ease: function(t,b,c,d) {
		return c * t / d + b;
	}
};
LinearEaseNone.prototype.__class__ = $hxClasses["motion.easing.LinearEaseNone"] = LinearEaseNone;

// Init



// Statics




// Export

exports.default = LinearEaseNone;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Quad

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Quad_QuadEaseIn() {return __webpack_require__(69);}
function motion_easing__$Quad_QuadEaseInOut() {return __webpack_require__(70);}
function motion_easing__$Quad_QuadEaseOut() {return __webpack_require__(71);}

// Constructor

var Quad = function(){}

// Meta

Quad.__name__ = ["motion","easing","Quad"];
Quad.prototype = {
	
};
Quad.prototype.__class__ = $hxClasses["motion.easing.Quad"] = Quad;

// Init



// Statics


Quad.easeIn = new (motion_easing__$Quad_QuadEaseIn().default)()
Quad.easeInOut = new (motion_easing__$Quad_QuadEaseInOut().default)()
Quad.easeOut = new (motion_easing__$Quad_QuadEaseOut().default)()

// Export

exports.default = Quad;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quad.QuadEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuadEaseIn = function() {
}

// Meta

QuadEaseIn.__name__ = ["motion","easing","_Quad","QuadEaseIn"];
QuadEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
QuadEaseIn.prototype = {
	calculate: function(k) {
		return k * k;
	},
	ease: function(t,b,c,d) {
		return c * (t /= d) * t + b;
	}
};
QuadEaseIn.prototype.__class__ = $hxClasses["motion.easing._Quad.QuadEaseIn"] = QuadEaseIn;

// Init



// Statics




// Export

exports.default = QuadEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quad.QuadEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuadEaseInOut = function() {
}

// Meta

QuadEaseInOut.__name__ = ["motion","easing","_Quad","QuadEaseInOut"];
QuadEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuadEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) {
			return 0.5 * k * k;
		}
		return -0.5 * ((k - 1) * (k - 3) - 1);
	},
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			return c / 2 * t * t + b;
		}
		return -c / 2 * ((t - 1) * (t - 3) - 1) + b;
	}
};
QuadEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Quad.QuadEaseInOut"] = QuadEaseInOut;

// Init



// Statics




// Export

exports.default = QuadEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quad.QuadEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuadEaseOut = function() {
}

// Meta

QuadEaseOut.__name__ = ["motion","easing","_Quad","QuadEaseOut"];
QuadEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuadEaseOut.prototype = {
	calculate: function(k) {
		return -k * (k - 2);
	},
	ease: function(t,b,c,d) {
		return -c * (t /= d) * (t - 2) + b;
	}
};
QuadEaseOut.prototype.__class__ = $hxClasses["motion.easing._Quad.QuadEaseOut"] = QuadEaseOut;

// Init



// Statics




// Export

exports.default = QuadEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Quart

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Quart_QuartEaseIn() {return __webpack_require__(74);}
function motion_easing__$Quart_QuartEaseInOut() {return __webpack_require__(75);}
function motion_easing__$Quart_QuartEaseOut() {return __webpack_require__(76);}

// Constructor

var Quart = function(){}

// Meta

Quart.__name__ = ["motion","easing","Quart"];
Quart.prototype = {
	
};
Quart.prototype.__class__ = $hxClasses["motion.easing.Quart"] = Quart;

// Init



// Statics


Quart.easeIn = new (motion_easing__$Quart_QuartEaseIn().default)()
Quart.easeInOut = new (motion_easing__$Quart_QuartEaseInOut().default)()
Quart.easeOut = new (motion_easing__$Quart_QuartEaseOut().default)()

// Export

exports.default = Quart;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quart.QuartEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuartEaseIn = function() {
}

// Meta

QuartEaseIn.__name__ = ["motion","easing","_Quart","QuartEaseIn"];
QuartEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
QuartEaseIn.prototype = {
	calculate: function(k) {
		return k * k * k * k;
	},
	ease: function(t,b,c,d) {
		return c * (t /= d) * t * t * t + b;
	}
};
QuartEaseIn.prototype.__class__ = $hxClasses["motion.easing._Quart.QuartEaseIn"] = QuartEaseIn;

// Init



// Statics




// Export

exports.default = QuartEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quart.QuartEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuartEaseInOut = function() {
}

// Meta

QuartEaseInOut.__name__ = ["motion","easing","_Quart","QuartEaseInOut"];
QuartEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuartEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) {
			return 0.5 * k * k * k * k;
		}
		return -0.5 * ((k -= 2) * k * k * k - 2);
	},
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			return c / 2 * t * t * t * t + b;
		}
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	}
};
QuartEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Quart.QuartEaseInOut"] = QuartEaseInOut;

// Init



// Statics




// Export

exports.default = QuartEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quart.QuartEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuartEaseOut = function() {
}

// Meta

QuartEaseOut.__name__ = ["motion","easing","_Quart","QuartEaseOut"];
QuartEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuartEaseOut.prototype = {
	calculate: function(k) {
		return -(--k * k * k * k - 1);
	},
	ease: function(t,b,c,d) {
		t = t / d - 1;
		return -c * (t * t * t * t - 1) + b;
	}
};
QuartEaseOut.prototype.__class__ = $hxClasses["motion.easing._Quart.QuartEaseOut"] = QuartEaseOut;

// Init



// Statics




// Export

exports.default = QuartEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Quint

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Quint_QuintEaseIn() {return __webpack_require__(79);}
function motion_easing__$Quint_QuintEaseInOut() {return __webpack_require__(80);}
function motion_easing__$Quint_QuintEaseOut() {return __webpack_require__(81);}

// Constructor

var Quint = function(){}

// Meta

Quint.__name__ = ["motion","easing","Quint"];
Quint.prototype = {
	
};
Quint.prototype.__class__ = $hxClasses["motion.easing.Quint"] = Quint;

// Init



// Statics


Quint.easeIn = new (motion_easing__$Quint_QuintEaseIn().default)()
Quint.easeInOut = new (motion_easing__$Quint_QuintEaseInOut().default)()
Quint.easeOut = new (motion_easing__$Quint_QuintEaseOut().default)()

// Export

exports.default = Quint;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quint.QuintEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuintEaseIn = function() {
}

// Meta

QuintEaseIn.__name__ = ["motion","easing","_Quint","QuintEaseIn"];
QuintEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
QuintEaseIn.prototype = {
	calculate: function(k) {
		return k * k * k * k * k;
	},
	ease: function(t,b,c,d) {
		return c * (t /= d) * t * t * t * t + b;
	}
};
QuintEaseIn.prototype.__class__ = $hxClasses["motion.easing._Quint.QuintEaseIn"] = QuintEaseIn;

// Init



// Statics




// Export

exports.default = QuintEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quint.QuintEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuintEaseInOut = function() {
}

// Meta

QuintEaseInOut.__name__ = ["motion","easing","_Quint","QuintEaseInOut"];
QuintEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuintEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) {
			return 0.5 * k * k * k * k * k;
		}
		return 0.5 * ((k -= 2) * k * k * k * k + 2);
	},
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			return c / 2 * t * t * t * t * t + b;
		}
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	}
};
QuintEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Quint.QuintEaseInOut"] = QuintEaseInOut;

// Init



// Statics




// Export

exports.default = QuintEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Quint.QuintEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var QuintEaseOut = function() {
}

// Meta

QuintEaseOut.__name__ = ["motion","easing","_Quint","QuintEaseOut"];
QuintEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
QuintEaseOut.prototype = {
	calculate: function(k) {
		return --k * k * k * k * k + 1;
	},
	ease: function(t,b,c,d) {
		t = t / d - 1;
		return c * (t * t * t * t * t + 1) + b;
	}
};
QuintEaseOut.prototype.__class__ = $hxClasses["motion.easing._Quint.QuintEaseOut"] = QuintEaseOut;

// Init



// Statics




// Export

exports.default = QuintEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing.Sine

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing__$Sine_SineEaseIn() {return __webpack_require__(84);}
function motion_easing__$Sine_SineEaseInOut() {return __webpack_require__(85);}
function motion_easing__$Sine_SineEaseOut() {return __webpack_require__(86);}

// Constructor

var Sine = function(){}

// Meta

Sine.__name__ = ["motion","easing","Sine"];
Sine.prototype = {
	
};
Sine.prototype.__class__ = $hxClasses["motion.easing.Sine"] = Sine;

// Init



// Statics


Sine.easeIn = new (motion_easing__$Sine_SineEaseIn().default)()
Sine.easeInOut = new (motion_easing__$Sine_SineEaseInOut().default)()
Sine.easeOut = new (motion_easing__$Sine_SineEaseOut().default)()

// Export

exports.default = Sine;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Sine.SineEaseIn

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var SineEaseIn = function() {
}

// Meta

SineEaseIn.__name__ = ["motion","easing","_Sine","SineEaseIn"];
SineEaseIn.__interfaces__ = [(motion_easing_IEasing().default)];
SineEaseIn.prototype = {
	calculate: function(k) {
		return 1 - Math.cos(k * (Math.PI / 2));
	},
	ease: function(t,b,c,d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	}
};
SineEaseIn.prototype.__class__ = $hxClasses["motion.easing._Sine.SineEaseIn"] = SineEaseIn;

// Init



// Statics




// Export

exports.default = SineEaseIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Sine.SineEaseInOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var SineEaseInOut = function() {
}

// Meta

SineEaseInOut.__name__ = ["motion","easing","_Sine","SineEaseInOut"];
SineEaseInOut.__interfaces__ = [(motion_easing_IEasing().default)];
SineEaseInOut.prototype = {
	calculate: function(k) {
		return -(Math.cos(Math.PI * k) - 1) / 2;
	},
	ease: function(t,b,c,d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	}
};
SineEaseInOut.prototype.__class__ = $hxClasses["motion.easing._Sine.SineEaseInOut"] = SineEaseInOut;

// Init



// Statics




// Export

exports.default = SineEaseInOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.easing._Sine.SineEaseOut

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_easing_IEasing() {return __webpack_require__(3);}

// Constructor

var SineEaseOut = function() {
}

// Meta

SineEaseOut.__name__ = ["motion","easing","_Sine","SineEaseOut"];
SineEaseOut.__interfaces__ = [(motion_easing_IEasing().default)];
SineEaseOut.prototype = {
	calculate: function(k) {
		return Math.sin(k * (Math.PI / 2));
	},
	ease: function(t,b,c,d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	}
};
SineEaseOut.prototype.__class__ = $hxClasses["motion.easing._Sine.SineEaseOut"] = SineEaseOut;

// Init



// Statics




// Export

exports.default = SineEaseOut;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion.MotionPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion__$MotionPath_BezierPath() {return __webpack_require__(23);}
function motion__$MotionPath_BezierSplinePath() {return __webpack_require__(90);}
function motion__$MotionPath_RotationPath() {return __webpack_require__(91);}
function motion__$MotionPath_ComponentPath() {return __webpack_require__(24);}

// Constructor

var MotionPath = function() {
	this._x = new (motion__$MotionPath_ComponentPath().default)();
	this._y = new (motion__$MotionPath_ComponentPath().default)();
	this._rotation = null;
}

// Meta

MotionPath.__name__ = ["motion","MotionPath"];
MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) {
			strength = 1;
		}
		return this.bezierN(x,y,[controlX],[controlY],strength);
	},
	bezierN: function(x,y,controlX,controlY,strength) {
		if(strength == null) {
			strength = 1;
		}
		this._x.addPath(new (motion__$MotionPath_BezierPath().default)(x,controlX,strength));
		this._y.addPath(new (motion__$MotionPath_BezierPath().default)(y,controlY,strength));
		return this;
	},
	bezierSpline: function(x,y,strength) {
		if(strength == null) {
			strength = 1;
		}
		this._x.addPath(new (motion__$MotionPath_BezierSplinePath().default)(x,strength));
		this._y.addPath(new (motion__$MotionPath_BezierSplinePath().default)(y,strength));
		return this;
	},
	line: function(x,y,strength) {
		if(strength == null) {
			strength = 1;
		}
		return this.bezierN(x,y,[],[],strength);
	},
	get_rotation: function() {
		if(this._rotation == null) {
			this._rotation = new (motion__$MotionPath_RotationPath().default)(this._x,this._y);
		}
		return this._rotation;
	},
	get_x: function() {
		return this._x;
	},
	get_y: function() {
		return this._y;
	}
};
MotionPath.prototype.__class__ = $hxClasses["motion.MotionPath"] = MotionPath;

// Init

Object.defineProperties(MotionPath.prototype,{ "rotation" : { get : function () { return this.get_rotation (); }}, "x" : { get : function () { return this.get_x (); }}, "y" : { get : function () { return this.get_y (); }}});

// Statics




// Export

exports.default = MotionPath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._MotionPath.BezierSplinePath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
var $extend = __webpack_require__(4).default;
function motion__$MotionPath_ComponentPath() {return __webpack_require__(24);}
function motion__$MotionPath_BezierPath() {return __webpack_require__(23);}

// Constructor

var BezierSplinePath = function(through,strength) {
	(motion__$MotionPath_ComponentPath().default).call(this);
	this.through = through;
	this.strength = strength;
}

// Meta

BezierSplinePath.__name__ = ["motion","_MotionPath","BezierSplinePath"];
BezierSplinePath.__super__ = (motion__$MotionPath_ComponentPath().default);
BezierSplinePath.prototype = $extend((motion__$MotionPath_ComponentPath().default).prototype, {
	computeControlPoints: function(start) {
		var K = [start].concat(this.through);
		var n = K.length;
		var _g = [];
		var _g2 = 0;
		var _g1 = n;
		while(_g2 < _g1) {
			var _ = _g2++;
			_g.push([0.0,0.0]);
		}
		var control = _g;
		var a = [];
		var b = [];
		var c = [];
		var r = [];
		a[0] = 0;
		b[0] = 2;
		c[0] = 1;
		r[0] = K[0] + 2 * K[1];
		var _g21 = 1;
		var _g11 = n - 1;
		while(_g21 < _g11) {
			var i = _g21++;
			a[i] = 1;
			b[i] = 4;
			c[i] = 1;
			r[i] = 4 * K[i] + 2 * K[i + 1];
		}
		a[n - 1] = 1;
		b[n - 1] = 2;
		c[n - 1] = 0;
		r[n - 1] = 3 * K[n - 1];
		var _g22 = 1;
		var _g12 = n;
		while(_g22 < _g12) {
			var i1 = _g22++;
			var m = a[i1] / b[i1 - 1];
			b[i1] -= m * c[i1 - 1];
			r[i1] -= m * r[i1 - 1];
		}
		control[n - 1][0] = r[n - 1] / b[n - 1];
		var i2 = n - 2;
		while(i2 >= 0) {
			control[i2][0] = (r[i2] - c[i2] * control[i2 + 1][0]) / b[i2];
			--i2;
		}
		var _g23 = 0;
		var _g13 = n - 1;
		while(_g23 < _g13) {
			var i3 = _g23++;
			control[i3][1] = 2 * K[i3 + 1] - control[i3 + 1][0];
		}
		control[n - 1][1] = 0.5 * (K[n] + control[n - 1][0]);
		control.pop();
		return control;
	},
	set_start: function(value) {
		if(this.paths.length == 0 || Math.abs(value - this.get_start()) > 1e-7) {
			var control = this.computeControlPoints(value);
			var pathStrength = this.strength / control.length;
			this.strength = 0;
			this.paths.splice(0,this.paths.length);
			var _g1 = 0;
			var _g = control.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.addPath(new (motion__$MotionPath_BezierPath().default)(this.through[i],control[i],pathStrength));
			}
		}
		return (motion__$MotionPath_ComponentPath().default).prototype.set_start.call(this,value);
	},
	get_end: function() {
		return this.through[this.through.length - 1];
	}
});
BezierSplinePath.prototype.__class__ = $hxClasses["motion._MotionPath.BezierSplinePath"] = BezierSplinePath;

// Init



// Statics




// Export

exports.default = BezierSplinePath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: motion._MotionPath.RotationPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(1).default;
var $import = __webpack_require__(2).default;
function motion_IComponentPath() {return __webpack_require__(11);}

// Constructor

var RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.set_start(this.calculate(0.0));
}

// Meta

RotationPath.__name__ = ["motion","_MotionPath","RotationPath"];
RotationPath.__interfaces__ = [(motion_IComponentPath().default)];
RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	},
	get_start: function() {
		return this._start;
	},
	set_start: function(value) {
		return this._start;
	},
	get_end: function() {
		return this.calculate(1.0);
	}
};
RotationPath.prototype.__class__ = $hxClasses["motion._MotionPath.RotationPath"] = RotationPath;

// Init



// Statics




// Export

exports.default = RotationPath;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=actuate.js.map