var Config={"name":"discord-mockup","root":"."};

function updatetheme(o) {
return 'body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background-color:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background-color:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select, .input {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus, .input:active, .input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error], .input[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n[data-sticky].headerui {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg, .icon img {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.accent {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n.accent svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#webapp_status_ui .text {'
+'\n	box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	border:1px solid '+o.tertiaryl+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#webapp_status_ui .text, #taht3nsar .text {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n[data-transparency] #webapp_status_ui .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:320px) {'
+'\n	#softkeysui .row2 button .tooltip {'
+'\n		border:1px solid '+o.secondaryd+';'
+'\n		background:'+o.primaryl+';'
+'\n	}'
+'\n	#softkeysui button .key {'
+'\n		background:'+o.secondaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item:hover, .list .listitem:hover {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-focussed].list .item[data-selected], [data-focussed].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.primaryl+' -110%, '+o.secondaryd+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n.settingsitem[data-selected] {'
+'\n	border:1px solid '+o.accent+' !important;'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeys_backstack .dot {'
+'\n	border:1px solid '+o.primaryt+';'
+'\n	background:'+o.secondary+';'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button:hover {'
+'\n	box-shadow:0 0 25px 2px '+o.secondary+';'
+'\n}'
+'\n#softkeysui .row1 button:focus {'
+'\n	box-shadow:0 0 25px 2px '+o.accentd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button:hover {'
+'\n	box-shadow:-20px 0 15px 0px '+o.secondary+' inset;'
+'\n}'
+'\n#softkeysui .row2 button:focus {'
+'\n	box-shadow:-20px 0 15px 0px '+o.accentd+' inset;'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui .row1 button {'
+'\n		background:'+o.primaryt+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primary+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n.servers {'
+'\n	background:'+o.primaryl+';'
+'\n}'
+'\n.server .marker {'
+'\n	background:'+o.textl+';'
+'\n}'
+'\n.server:hover .marker {'
+'\n	background:'+o.textd+';'
+'\n}'
+'\n.server .icon {'
+'\n	background-color:'+o.tertiary+';'
+'\n}'
+'\n.server[data-selected] {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.server .badge {'
+'\n	box-shadow:0 0 0 2px '+o.primaryl+';'
+'\n	background:'+o.secondaryl+';'
+'\n}'
+'\n.server[data-selected] .badge {'
+'\n	box-shadow:0 0 0 2px '+o.secondaryd+';'
+'\n}'
+'\n.server .badge svg {'
+'\n	fill:'+o.text+';'
+'\n}'
+'\n.server .count {'
+'\n	box-shadow:0 0 0 2px '+o.secondaryl+';'
+'\n	background:'+o.red+';'
+'\n}'
+'\n.server[data-selected] .count {'
+'\n	box-shadow:0 0 0 2px '+o.secondaryl+';'
+'\n}'
+'\n.messages {'
+'\n	background:'+o.secondaryl+';'
+'\n}'
+'\n.messages .find {'
+'\n	border-bottom:1px solid '+o.primaryl+';'
+'\n}'
+'\n.messages .find input {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.messages .profile {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.conversation {'
+'\n	background:'+o.tertiary+';'
+'\n}'
+'\n.persistent_profiles [data-selected] {'
+'\n	background-color:'+o.secondary+';'
+'\n}'
+'\n.directmsg:hover .directmsg_container {'
+'\n	background:'+o.tertiaryl+';'
+'\n}'
+'\n.directmsg[data-selected] .directmsg_container {'
+'\n	background:'+o.tertiary+';'
+'\n}'
+'\n.directmsg .directmsg_shadow {'
+'\n	box-shadow:0 0 12px 5px '+o.secondaryl+' inset;'
+'\n}'
+'\n.directmsg:hover .directmsg_shadow {'
+'\n	box-shadow:0 0 12px 5px '+o.tertiaryl+' inset;'
+'\n}'
+'\n.directmsg[data-selected] .directmsg_shadow {'
+'\n	box-shadow:0 0 12px 5px '+o.tertiary+' inset;'
+'\n}'
+'\n.directmsg .status {'
+'\n	box-shadow:0 0 2px 1px '+o.secondaryd+';'
+'\n	border:2px solid '+o.textxd+';'
+'\n	background-color:'+o.secondaryd+';'
+'\n}'
+'\n.directmsg .status[data-state=\'1\'] {'
+'\n	background-color:'+o.greenl+';'
+'\n	border-color:'+o.greend+';'
+'\n}'
+'\n.directmsg .count {'
+'\n	box-shadow:0 0 0 2px '+o.secondaryl+';'
+'\n	background-color:'+o.red+';'
+'\n}'
+'\n.directmsg .icon, .msg .icon {'
+'\n	box-shadow:0 0 3px 0 '+o.primary+';'
+'\n	background-color:'+o.secondaryd+';'
+'\n}'
+'\n.text_input_bar {'
+'\n	background-color:'+o.tertiaryt+';'
+'\n}';
};

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (typeof fn === 'function') { // defer execution
			if (mod) { // if the mod is loaded or it's a core module
				fn(mod);
			} else {
				if (glatteis._paths[name]) { // if its path is defined
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; // the function will be called
		} else { // immediate execution
			return (mod || false);
		}
	}
	return false; // if name wasn't provided
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		w: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.warn('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload : request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++;
							carriedthis.process(carriedthis);
							carriedthis.active = false;
							return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++;
									carriedthis.process(carriedthis);
									carriedthis.active = false;
									return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null : options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
$.b = 2;
'use strict';
var taraajim = {"en":{"offlinesince":"Offline since","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","builton":"Built On","skhelp":"Press # for actions","softkeystouchdpad":"Touch D-Pad","theme":"Theme","black":"Black","white":"White","contrast":"Contrast","high":"High","low":"Low","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","newversionfound":"New version found","appcachefailed":"Failed to cache app, you can still use it but it will be slow to start","unsupported":"Your device can't run this app","swunsupported":"Your browser doesn't support Service Workers","appcachedoffline":"App cached offline, it will load faster next time!","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
var Hooks, hooks;
;(function (){
	'use strict';
	var getargs = function (start_at, oldargs) {
		var args = [];
		for (var i = start_at || 0; i < oldargs.length; ++i) {
			args.push( oldargs[i] );
		}
		return args;
	};
	Hooks = {
		_registry_first: {},
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn, priority) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn, priority);
				});
				return;
			}
			var registry = Hooks._registry;
			if (priority) registry = Hooks._registry_first;
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (registry[hook] === undefined) {
					registry[hook] = [];
				}
				++Hooks._uid;
				registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		set_first: function (hook, id, fn) {
			return this.set(hook, id, fn, 1);
		},
		run: function (hook, extras) {
			var args = getargs(1, arguments);
			var handlers_first = Hooks._registry_first[hook];
			var handlers = Hooks._registry[hook];
			if (handlers_first instanceof Array || handlers instanceof Array) {
				handlers = ( handlers_first || [] ).concat( handlers || [] );
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i].apply(handlers[i], args);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) {
			var args = getargs(1, arguments);
			var handlers_first = Hooks._registry_first[hook];
			var handlers = Hooks._registry[hook];
			if (handlers_first instanceof Array || handlers instanceof Array) {
				handlers = ( handlers_first || [] ).concat( handlers || [] );
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i].apply(handlers[i], args);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry_first[hook]) {
				delete Hooks._registry_first[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry_first[hook] = [];
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry_first[hook];
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
var
get_global_object = function () { // to check module prop in window.* or global.*
	return window || {}; // TODO add global safely
},
generate_alias = function (o, l) { // this replaces helpers.alias database.alias wuqu3aat.alias
	o = o || '';
	if (o.length === 0) return '';
	l = l || 255;
	o = o.substr(0, l)
		.replace(/\%/g, ' pct' )
		.replace(/\@/g, ' at ' )
		.replace(/\&/g, ' and ' )
		.replace(/[$-\-/:-?\{\}-~!"^_`\[\]@#]/g, '-' ) // symbols
		.replace(/[^.\d\wa-zA-Z0-9ا-ےÄäÜüÖößЀ-ҁҊ-ӿÇçĞğŞşIıÜüﻙ]+/g, '-' ) // most alphanums
		.replace(/\s[\s]+/g, '-' )
		.replace(/[\s]+/g, '-' )
		.replace(/^[\-]+/g, '' )
		.replace(/[\-]+$/g, '' )
		.replace(/\-\-/g, '-' )
		.replace(/\.\-/g, '.' )
		.replace(/\-\./g, '.' )
		.replace(/^\./g, '' )
		.replace(/\.$/g, '' )
		.trim()
		.toLowerCase();
	return o;
},
stringify = function (o) {
	return JSON.stringify(o);
},
parsejson = function (o) {
	return JSON.parse(o);
},
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { // only compares primitives bw 2 objs
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num : num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { // [ 1, 2 ] -> " 1 2"
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { // [ num, num, ... ]
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { // return a copy of array of objs or just one obj
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (s) {
	return (s||'').toLowerCase();
},
toupper = function (s) {
	return (s||'').toUpperCase();
};
var
select_content = function (e, start, end) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		if (isnum(start)) {
			e.selectionStart = start || 0;
			e.selectionEnd = end || start || 0;
		} else if (isfun(e.select)) {
			e.select();
		}
	} else {
		function getTextNodesIn(node) {
			var textNodes = [];
			if (node.nodeType == 3) {
				textNodes.push(node);
			} else {
				var children = node.childNodes;
				for (var i = 0, len = children.length; i < len; ++i) {
					textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
				}
			}
			return textNodes;
		}
		if (document.createRange && window.getSelection) {
			var range = document.createRange();
			range.selectNodeContents(e);
			var textNodes = getTextNodesIn(e);
			var foundStart = false;
			var charCount = 0, endCharCount;
			for (var i = 0, textNode; textNode = textNodes[i++]; ) {
				endCharCount = charCount + textNode.length;
				if (!foundStart && start >= charCount
						&& (start < endCharCount ||
						(start == endCharCount && i <= textNodes.length))) {
					range.setStart(textNode, start - charCount);
					foundStart = true;
				}
				if (foundStart && end <= endCharCount) {
					range.setEnd(textNode, end - charCount);
					break;
				}
				charCount = endCharCount;
			}
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (document.selection && document.body.createTextRange) {
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(e);
			textRange.collapse(true);
			textRange.moveEnd("character", end);
			textRange.moveStart("character", start);
			textRange.select();
		}
	}
},
get_caret_position = function (e) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		return [e.selectionStart, e.selectionEnd];
	}
var start = 0;
var end = 0;
var doc = e.ownerDocument || e.document;
var win = doc.defaultView || doc.parentWindow;
var sel;
if (typeof win.getSelection != "undefined") {
sel = win.getSelection();
if (sel.rangeCount > 0) {
var range = win.getSelection().getRangeAt(0);
var preCaretRange = range.cloneRange();
preCaretRange.selectNodeContents(e);
preCaretRange.setEnd(range.startContainer, range.startOffset);
start = preCaretRange.toString().length;
preCaretRange.setEnd(range.endContainer, range.endOffset);
end = preCaretRange.toString().length;
}
} else if ( (sel = doc.selection) && sel.type != "Control") {
var textRange = sel.createRange();
var preCaretTextRange = doc.body.createTextRange();
preCaretTextRange.moveToElementText(e);
preCaretTextRange.setEndPoint("EndToStart", textRange);
start = preCaretTextRange.text.length;
preCaretTextRange.setEndPoint("EndToEnd", textRange);
end = preCaretTextRange.text.length;
}
return [start, end];
},
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
scroll_into_view_with_padding = function (e, padding) {
	var rect = e.getBoundingClientRect();
	var padt, padb, pads, pade;
	padt = padb = padding || 0;
	if (isarr(padding)) {
		if (padding.length == 2) { // [v, h]
			padt = padb = padding[0];
			pads = pade = padding[1];
		}
		if (padding.length == 4) { // cw [t, e, b, s]
			padt = padding[0];
			pade = padding[1];
			padb = padding[2];
			pads = padding[3];
		}
	}
	var se = scrollingelement(), top;
	if (rect.y < padt) {
		top = padt;
	} else if (rect.y >= innerheight()-padb) {
		top = innerheight()+padb; // extra to compensate for element height
	}
	if (isnum(top)) scrollTo({ top: top, behavior: 'smooth' });
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
getcss = function (obj, k) {
	return obj.style[k];
},
popdata = function (obj, k, v) {
	if (obj) delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	if (obj) obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { // returns width + v
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	v.hidden = 0;
},
ixtaf = function (v) {
	v.hidden = 1;
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
raycast = function (x, y) {
	return document.elementsFromPoint(x, y);
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
tahmeel = function (filename, text, mimetype) { // download file with a name
	var e = createelement('a');
	attribute(e, 'href', (mimetype||'data:text/plain;charset=utf-8,') + encodeURIComponent(text));
	attribute(e, 'download', filename);
	setcss(e, 'display', 'none');
	document.body.appendChild(e);
	e.click();
	document.body.removeChild(e);
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var xPos = 0;
	var yPos = 0;
	var dir = document.body.dir;
	if ( dir === 'rtl' )
		xPos = xPos + el.clientWidth;
	while (el) {
		if (el.tagName == 'BODY') {
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
	}
	return [xPos, yPos];
},
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; // For safari, and IE > 10
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) // if there are no arguments
		parent.removeChild(this);
	while (i--) { // i-- decrements i and returns the value of i before the decrement
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) // if currentNode is the first argument (currentNode === arguments[0])
		parent.replaceChild(currentNode, this);
		else // if currentNode isn't the first
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var Webapp, webapp, appname = 'discord-mockup' || '',
	Offline = Offline || 0,
	pager = pager || 0,
	Pager = Pager || 0,
	checkbox = checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	rakkazawwal, focus_first_element, focusprev, focusnext, navigables, is_navigable,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body, wakelockstatus, isalbixraaj;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	is_navigable = function (e) {
		return navigables.includes(e.tagName.toLowerCase()) || e.contentEditable == 'true';
	};
	focus_first_element = rakkazawwal = function (e, scroll) {
		if (e) {
			var s = e.querySelector('input, textarea, button, a, select, [contenteditable]');
			if (s) {
				s.focus();
				if (scroll) webapp.scrollto(s);
				return s;
			}
		}
	};
	/* FOCUS how this works
	* for elements inside other formating elements, set data-focus on each parent
	* this hints to this algo to go up a parent
	* */
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			/* BUG
			* come up with a solution for this
			* */
		}
		if (markooz() === element) {
			element.onprev && element.onprev(element);
		}
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected++;*/ // to avoid a +1 jump
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		/* BUG CASE
		* changed this to orig because i wasn't able to override this inside
		* a listitem with an input element, on pressing down it kept replacing
		* element with the nextsibling (see above while loop) :(
		* more testing needed
		* */
		orig.onnext && orig.onnext(orig);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected--;*/ // to avoid a +1 jump
			return out;
		}
	};
	var viewsindex = {}, header_keys,
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
/*
					if (otherviews[i] instanceof HTMLSelectElement) {
						otherviews[i].value = 0;
					}
					else if ( ['text', 'textarea'].includes(otherviews[i].type) ) {
						otherviews[i].value = '';
					}
					else {
					}
*/
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		/*
		* this version lets you setup custom callbacks for forms
		* each call sends you three things
		* cb(formelement, pressedbutton, payload)
		* */
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = doc.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( doc.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = doc.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	/*
	* webapp features like 3inch handles linked-modules functionality example:
	* when backstack reports darajah, 3inch updates softkeys
	* */
	Webapp = webapp = {
		visible: 1,
		isdimmed: 0,
		/* an array of features that can be check like
		* 'feature' in window OR
		* in Navigator OR
		* in navigator
		* even if a singe one fails, an error is shown
		* */
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				Webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				Webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align, original_keys) {
			var header_icon, header_title = text, header_subtitle = '';
			if (isarr(text) && text.length >= 2) {
				header_title = text[0];
				header_subtitle = text[1];
				header_icon = text[2];
			}
			var keys = original_keys || header_keys;
			var title = keys.title;
			var subtitle = keys.subtitle;
			var header = keys.header;
			var icon = keys.icon;
			if (align == 1) header.dataset.align = '1';
			else if (align == 2) header.dataset.align = '2';
			else delete header.dataset.align;
				if (text) {
					if (header_title instanceof Array && header_title[0]) {
						title.dataset.i18n = header_title[0];
					} else {
						delete title.dataset.i18n,
						innertext(title, header_title || '');
					}
					if (header_subtitle instanceof Array && header_subtitle[0]) {
						subtitle.dataset.i18n = header_subtitle[0];
					} else {
						delete subtitle.dataset.i18n,
						innertext(subtitle, header_subtitle || '');
					}
					header.hidden = 0;
				} else {
					delete title.dataset.i18n;
					title.innerText = '';
					header.hidden = 1;
				}
				if (isstr(header_icon) && header_icon.length) {
					if (header_icon.startsWith('/')) {
						innerhtml(icon, '<img src="'+header_icon+'" />');
					} else {
						var e = icons.querySelector('#'+header_icon);
						if (e) {
							innerhtml(icon, '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>');
						}
					}
				} else {
					innerhtml(icon, '');
				}
				if (!original_keys) this.header(text, align, tall_header_keys);
			translate.update();
			document.title = title.innerText + ( subtitle.innerText ? (' - ' + subtitle.innerText) : '' );
		},
		sahhar: function (what) { // keep awake wakelock TODO convert to english
			if (navigator && navigator.requestWakeLock) {
				webapp.nawwam();
				wakelockstatus = navigator.requestWakeLock(what||'screen');
			}
		},
		nawwam: function () { // let sleep, put to sleep, clear wakelock
			if (wakelockstatus && wakelockstatus.unlock) {
				try { wakelockstatus.unlock(); } catch (e) { $.log( e ); }
				wakelockstatus = 0;
			}
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0 : 1;
			webapp.isdimmed = zindex ? 1 : 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			doc.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) { // TODO deprecate
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		status_bar_padding: function (yes) {
			this.statusbarpadding(yes);
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				doc.body.dataset.transparency = 1;
			} else {
				delete doc.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				doc.body.dataset.largetext = 1;
			} else {
				delete doc.body.dataset.largetext;
			}
		},
		bixraaj: function (isal) { // on exit, ask or no
			if (isal) isalbixraaj = 1;
			else isalbixraaj = 0;
		},
		exit: function () {
			if (isalbixraaj) {
				if ( confirm(xlate('sure')) ) close();
			} else close();
		},
		icons: function () {
			var elements = doc.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = icons.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			$.taxeer('webappresize', function () {
				if (innerwidth() <= 320) {
					setdata(bod, 'aqil', 1);
				} else {
					popdata(bod, 'aqil');
				}
				if (innerwidth() > 320 && innerwidth() <= 640) {
					setdata(bod, 'qaleel', 1);
				} else {
					popdata(bod, 'qaleel');
				}
				if (innerwidth() > 320) {
					setdata(bod, 'qaleelah', 1);
				} else {
					popdata(bod, 'qaleelah');
				}
				if (innerwidth() > 640 && innerwidth() <= 800) {
					setdata(bod, 'wast', 1);
				} else {
					popdata(bod, 'wast');
				}
				if (innerwidth() > 640) {
					setdata(bod, 'wastah', 1);
				} else {
					popdata(bod, 'wastah');
				}
			}, 100);
			if (innerheight() <= 480) doc.body.dataset.keyboardopen = 1;
			else delete doc.body.dataset.keyboardopen;
			$.taxeer('webapp-on-scroll', function () {
				on_scroll();
			});
		},
	};
	Webapp.get_tall_screen_height = function () {
		return tallscreenpadding.offsetHeight;
	};
	Webapp.get_header_height = function () {
		return headerui.offsetHeight;
	};
	var previous_tall_height;
	function on_scroll() {
		var height = tallscreenpadding.offsetHeight * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		if (previous_tall_height != innerheight()) {
			if (innerheight() < 600)
				percent = 1;
			else
				percent = 0;
		}
		previous_tall_height = innerheight();
		if (percent > 1 || Webapp.is_minimal()) {
			percent = 1;
			ixtaf(tallheaderui);
		} else {
			izhar(tallheaderui);
		}
		var header_pct = percent * .8;
		if (header_pct >= .8) header_pct = 1;
		headerui.style.opacity = header_pct;
		var tall_pct = (1 - percent) * .8;
		if (tall_pct >= .8) tall_pct = 1;
		tallheaderui.style.opacity = tall_pct;
		tallheaderui.style.paddingTop = (12 * (1 - percent))+'vh';
	}
	Webapp.on_scroll = on_scroll;
	Webapp.header_sticky = function (yes) {
		if (yes) setdata(headerui, 'sticky', 1);
		else popdata(headerui, 'sticky');
	};
	var home_views = ['main'];
	Webapp.get_home_views = function () {
		return home_views.concat([]);
	};
	Webapp.add_home_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_home_view(o)
			});
		} else if (!home_views.includes(name)) {
			home_views.push(name);
		}
	};
	Webapp.remove_home_view = function (name) {
		home_views.splice( home_views.indexOf(name), 1 );
	};
	Webapp.is_home_view = function (name) {
		return Webapp.get_home_views().includes(name);
	};
	Webapp.is_at_home = function () {
		return backstack.darajah === 0 && view.is_active( home_views );
	};
	Webapp.ask_on_exit = webapp.bixraaj;
	var status_dom_keys;
	Webapp.itlaa3 = function (text, time) {
		status_dom_keys = status_dom_keys || Templates.keys(webapp_status_ui);
		var element = status_dom_keys.text;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(itlaa3);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			webapp_status_ui.hidden = 0;
			if (innerwidth() > 1024) webapp_status_ui.style.right = '-20px';
			else webapp_status_ui.style.right = '';
			$.taxeer('webapp_status_animation', function () {
				webapp_status_ui.style.right = '';
			}, 100);
			$.taxeer('webapp_status', function () {
				if (innerwidth() > 1024) webapp_status_ui.style.right = '-20px';
				$.taxeer('webapp_status_final', function () {
					webapp.itlaa3();
				}, 100);
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			webapp_status_ui.hidden = 1;
		}
	};
	Webapp.status = webapp.itlaa3;
	var minimal_views = [];
	Webapp.apply_minimal_view = function () {
		if (Webapp.is_minimal()) {
			setdata(bod, 'minimal', 1);
		} else {
			popdata(bod, 'minimal', 1);
		}
	};
	Webapp.get_minimal_views = function () {
		return minimal_views.concat([]);
	};
	Webapp.add_minimal_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_minimal_view(o)
			});
		} else if (!minimal_views.includes(name)) {
			minimal_views.push(name);
		}
		Webapp.apply_minimal_view();
		on_scroll();
	};
	Webapp.remove_minimal_view = function (name) {
		minimal_views.splice( minimal_views.indexOf(name), 1 );
		Webapp.apply_minimal_view();
		on_scroll();
	};
	Webapp.is_minimal = function () {
		return view.is_active( minimal_views );
	};
	var viewport_config = {};
	function update_viewport() {
		var str = [];
		str.push( 'width='+(viewport_config.width || 'device-width') );
		str.push( 'interactive-widget='+(viewport_config.resize_rule || 'resizes-content') );
		str.push( 'user-scalable='+(viewport_config.scalable || 'no') );
		str.push( 'initial-scale='+(viewport_config.scale || '1') );
		if (viewport_config.fit)
			str.push( 'viewport-fit='+(viewport_config.fit || 'contain') );
		viewportsettings.content = str.join(',');
	}
	Webapp.viewport_width = function (v) { viewport_config.width = v; update_viewport(); };
	Webapp.viewport_height = function (v) { viewport_config.height = v; update_viewport(); };
	Webapp.viewport_resize_rule = function (v) { viewport_config.resize_rule = v; update_viewport(); };
	Webapp.viewport_scalable = function (v) { viewport_config.scalable = v; update_viewport(); };
	Webapp.viewport_scale = function (v) { viewport_config.scale = v; update_viewport(); };
	Webapp.viewport_fit = function (v) { viewport_config.fit = v; update_viewport(); };
	Hooks.set('restore', function (args) {
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		});
	});
	Hooks.set('viewready', function (args) {
		Webapp.apply_minimal_view();
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		});
	});
	listener('dragover', function (e) {
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) {
			Hooks.run('huboot', f);
		}
		Hooks.run('dropped', e.dataTransfer);
		return false;
	});
	listener('resize', function () {
		Webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', doc.scrollingElement.scrollTop);
		on_scroll();
	});
	listener('scrollend', function (e) {
		Hooks.run('scrollend', doc.scrollingElement.scrollTop);
		return;
		var offset_height = tallscreenpadding.offsetHeight;
		var height = offset_height * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		if (percent >= 0.4 && percent < 1.6) {
			doc.scrollingElement.scrollTop = 1 * offset_height;
		} else if (percent > 0.1 && percent < 0.4) {
			doc.scrollingElement.scrollTop = 0;
		}
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		header_keys = templates.keys(headerui);
		tall_header_keys = templates.keys(tallheaderui);
		Webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		doc.title = 'discord-mockup';
		if (Offline && Offline.init) {
			Offline.init(function () {
				Hooks.run('ready', 1);
				Backstack.main(2);
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			Backstack.main(2);
		}
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		}, 10);
		doc.addEventListener('visibilitychange', function () {
			if (doc.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	Webapp.taht3nsar = function (text, time, taht) { // below element
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = getposition(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	Webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	Webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	Webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	Webapp.isatop = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === 0;
	};
	Webapp.isatbottom = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
	};
	Hooks.set('closeall', function (level) {
		if (level === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			Webapp.blur();
		}
		if (level === 2) sheet.hide(), Webapp.blur();
		if (level === 1) view.get('main'), Webapp.blur();
		if (level === 0)
			Webapp.status( translate('exiting') ),
			$.taxeer('exit', function () {
				Webapp.exit();
			});
	});
	Hooks.set('restore', function (level) {
		if (level === 3) Webapp.dimmer(600);
		if (level === 2) Webapp.dimmer(400);
		if (level === 1) Webapp.dimmer();
		if (level === 0) Webapp.header(), Webapp.dimmer();
	});
	Hooks.set('backstackmain', function (name) {
		Softkeys.clear();
		Softkeys.P.empty();
		View.run('main');
	});
	Hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		}, 'iconplayarrow');
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') {
			Backstack.back();
		}
	};
	/*
	* this messes up the nishaat pins list so it needs improvement
	* */
	/*listener('mousewheel', function (e) {
		e.preventDefault();
		if (e.wheelDeltaX >= 1 || e.wheelDeltaX <= -1
		|| e.wheelDeltaY >= 1 || e.wheelDeltaY <= -1) {
			helpers.delayedexec('mousewheel', function () {
				x = 0, y = 0;
			}, 400);
			x += e.wheelDeltaX; y += e.wheelDeltaY;
			var xx = x/60, yy = y/60;
			if (xx > 1 || xx < -1) x = 0;
			if (yy > 1 || yy < -1) y = 0;
			Hooks.rununtilconsumed('mousewheel', {
				type: 'mousewheel',
				x: xx,
				y: yy,
				preventDefault: function () {
					e.preventDefault();
				},
			});
		}
	}, {passive: false});*/
})();
/* 04 Jun 2018
* events-code: 3129*
* common command line interface for linux terminals
* basic building blocks, ansi codes, colors, basic formatting
* emits using hooks
* cli-resize { rows, cols }
* cli-close sync function
* cli-command { raw, args{} }
* cli-hint { line }
* cli-answer { line }
* gets you the -* & --* & commands & everything in raw
* cli-init { raw (args), one, two, commands }
* listens using hooks
* cli-ask { question, options } returns answer
*/
var Cli = Cli || {};
;(function () {
	'use strict';
	var Hooks = hooks;
	var _ = {
		events: {
			cli: 3129,
			resize: 3129010,
			close: 3129020,
			command: 3129030,
			hint: 3129040,
			answer: 3129050,
			init: 3129060,
			ask: 3129500,
		},
		code: {
			Reset : "\x1b[0m" ,
			_bright : "\x1b[1m" ,
			_dim : "\x1b[2m" ,
			_underscore : "\x1b[4m" ,
			_blink : "\x1b[5m" ,
			_reverse : "\x1b[7m" ,
			_hidden : "\x1b[8m" ,
			Fgblack : "\x1b[30m" ,
			Fgred : "\x1b[31m" ,
			Fggreen : "\x1b[32m" ,
			Fgyellow : "\x1b[33m" ,
			Fgblue : "\x1b[34m" ,
			Fgmagenta : "\x1b[35m" ,
			Fgcyan : "\x1b[36m" ,
			Fgwhite : "\x1b[37m" ,
			Bgblack : "\x1b[40m" ,
			Bgred : "\x1b[41m" ,
			Bggreen : "\x1b[42m" ,
			Bgyellow : "\x1b[43m" ,
			Bgblue : "\x1b[44m" ,
			Bgmagenta : "\x1b[45m" ,
			Bgcyan : "\x1b[46m" ,
			Bgwhite : "\x1b[47m"
		},
		/*
		* ^cmd^ = command: blink, bright, underscore...
		* `color` = fg color
		* ~color~ = bg color
		* `` = reset
		* ~~ = reset
		*/
		ansi: function (str) {
			var rs = /\`\`/,
				r2 = /\~\~/,
				cm = /\^([\w]+)\^/,
				fg = /\`([\w]+)\`/,
				bg = /\~([\w]+)\~/;
			while (fg.test(str)) {
				str = str.replace(fg, function () {
					return _.code[ 'Fg'+arguments[1] ];
				});
			}
			while (bg.test(str)) {
				str = str.replace(bg, function () {
					return _.code[ 'Bg'+arguments[1] ];
				});
			}
			while (cm.test(str)) {
				str = str.replace(cm, function () {
					return _.code['_'+arguments[1]];
				});
			}
			while (rs.test(str)) {
				str = str.replace(rs, function () {
					return _.code.Reset;
				});
			}
			while (r2.test(str)) {
				str = str.replace(r2, function () {
					return _.code.Reset;
				});
			}
			return str;
		},
		echo: function () {
			var str = '';
			for (var i in arguments) {
				str += _.ansi( arguments[i] );
			}
			console.log(str);
		},
		write: function () {
			var str = '';
			for (var i in arguments) {
				str += _.ansi( arguments[i] );
			}
			process.stdout.write(str);
		},
		rl: false,
		rli: false,
		width: 80,
		height: 24,
		/* my format, if this is defined, commands send parsed arguments
		* install: {
		* -- - details type default
		* overwrite: ['o', 'overwrite existing files', 'true', false ],
		* public: ['p', 'create /public folder', 'true', false ],
		* public: ['p', 'create /public folder', 'true', false ],
		* },
		* */
		define: function () {
		},
		sizes: function () {
			_.width = process.stdout.columns,
			_.height = process.stdout.rows;
		},
		clear: function () {
			if (!_.rl || !_.rli) {
				_.setonresize();
				_.sizes();
				process.stdout.cursorTo(0, 0);
				var str = '';
				for (var i = 0; i < _.width; ++i) {
					for (var j = 0; j < _.height; ++j) {
						str += ' ';
					}
					str += '\n';
				}
				_.write(str);
			} else {
				_.rl.cursorTo(process.stdout, 0, 0);
				_.rl.clearScreenDown(process.stdout);
			}
		},
		commands: 'exit '.split(' '),
		completer: function (line, callback) {
			Hooks.run( _.events.hint, {
				line: line,
				callback: callback
			});
		},
		_prompt: '~magenta~ > ~~ ',
		_autoprompt: false,
		setautoprompt: function (auto) {
			_._autoprompt = !!auto;
		},
		/*
		* off by setting text to false
		* on by specifying the actual text
		*/
		prompt: function (text) {
			if (!_.rl || !_.rli) _.cli();
			if (text === false) {
				_.rli.prompt(false);
			} else if (text === true) {
				_.setprompt( _.ansi( _._prompt ) );
				_.rli.prompt(true);
			} else {
				_.setprompt( text );
				_.rli.setPrompt( _.ansi(_._prompt) );
				_.rli.prompt(true);
			}
		},
		setprompt: function (text) {
			_._prompt = text === undefined ? _._prompt : text;
		},
		/*
		* **as-is:** What you enter, is what you get
		* - 'string', 1, true
		* - **int:** Is converted to an Integer wrapped in a Number Object
		* - 'int', 'number', 'num',
		* - 'time', 'seconds', 'secs', 'minutes', 'mins'
		* - 'x', 'n'
		* - **date:** Is converted to a Date Object
		* - 'date', 'datetime', 'date_time'
		* **float:** Is converted to a Float wrapped in a Number Object
		* - 'float', 'decimal'
		* **file:** Is converted to a String Object if it is a valid path
		* - 'path', 'file', 'directory', 'dir'
		* **email:** Converted to a String Object if it is a valid email format
		* - 'email'
		* **url:** Converted to a String Object if it is a valid URL format
		* - 'url', 'uri', 'domain', 'host'
		* - **ip:** Converted to a String Object if it is a valid IP Address format
		* - 'ip'
		* - **true:** Converted to true if argument is present on command line
		* - 'bool', 'boolean', 'on'
		* **false:** Converted to false if argument is present on command line
		* - 'false', 'off', false, 0
		*/
		gettype: function (type) {
			if (typeof type !== 'string') return 's';
			if (type.startsWith('fl')) {
				return 'f';
			} else
			if (type.startsWith('int') || type.startsWith('num')) {
				return 'n';
			} else
			if (type.startsWith('bool')) {
				return 'b';
			} else {
				return 's';
			}
		},
		parsetype: function (type, value) {
			type = _.gettype(type);
			if (type == 'f') {
				var result = parseFloat(value);
				if (result !== NaN) return result;
			} else
			if (type == 'n') {
				var result = parseInt(value);
				if (result !== NaN) return result;
			} else
			if (type == 'b') {
				var no = ['no', 'false', 'n', '0', 'nope', 'off', 'f'],
					yes = ['yes', 'true', 'y', '1', 'yep', 'on', 't'];
				if (no.includes(value)) return false;
				if (yes.includes(value)) return true;
			}
			return value;
		},
		answerlogic: function (ans, def, type) {
			type = _.gettype(type);
			if (['f', 'n'].includes(type)) {
				return ans || def;
			} else
			if (type == 'b') {
				return ans === '' ? def : ans;
			} else
			if (type == 's') {
				return ans === '' ? def : ans;
			}
			return value;
		},
		/*
		* finds the biggest string in an [], returns a function that fills any
		* string provided with spaces to make it as big as the biggest string
		*/
		getfiller: function (obj) {
			var biggest = 0;
			if (obj instanceof Array) {
				for (var i in obj) {
					var len = (obj[i] || '').length;
					if ( len > biggest ) {
						biggest = len;
					}
				}
			} else
			if (obj instanceof Object) {
				for (var i in obj) {
					if ( obj.hasOwnProperty(i) ) {
						var len = (i || '').length;
						if ( len > biggest ) {
							biggest = len;
						}
					}
				}
			} else
			if (obj instanceof String) {
				biggest = obj.length;
			}
			return function (str) {
				if (str.length < biggest) {
					str = str+( ' '.repeat( biggest-str.length ) );
				}
				return str;
			};
		},
		_inquestion: false,
		/*
		* callback Function || Object, treated as args if not function
		*
		* */
		question: function (query, callback, key, def, type) {
			if (!_.rl || !_.rli) _.cli();
			_._inquestion = true;
			var defstr = def === undefined || def === null ? '' : '~black~^dim^('+def+')~~ ';
			if ([0, '', '?', 'null', undefined, null].includes(query)) {
				query = _._prompt;
			}
			_.rli.question(_.ansi( query + defstr ), function () {
				_._inquestion = false;
				var ans = _.parsetype(type, arguments[0]);
				def = _.parsetype(type, def);
				if (ans === '^C') {
					if (_.iscli) process.exit();
					return false;
				}
				if (typeof callback === 'function') {
					callback( ans );
				} else {
					callback = callback || {};
					callback.answer = _.answerlogic(ans, def, type);
					callback.question = query;
					if (key !== undefined) {
						callback.keys[key] = _.answerlogic(ans, def, type);
					}
					Hooks.run( _.events.answer, callback);
				}
			});
		},
		_onresize: false,
		setonresize: function () {
			if (!_._onresize) {
				_._onresize = true;
				process.stdout.on('resize', function () {
					_.sizes();
					Hooks.run('cli-resize', {
						rows: _.height,
						cols: _.width
					});
					Hooks.run(_.events.resize, {
						rows: _.height,
						cols: _.width
					});
				});
			}
		},
		cli: function () {
			var readline = require('readline'),
				rl = readline.createInterface(
									process.stdin,
									process.stdout,
									_.completer
							);
			/* @todo
			* If terminal is true for this instance then the output stream will
			* get the best compatibility if it defines an output.columns property,
			* and fires a "resize" event on the output if/when the columns ever
			* change (process.stdout does this automatically when it is a TTY).
			* */
			_.rl = readline;
			_.rli = rl;
			rl.on('line', function(line) {
				line = line.trim();
				switch(line) {
					case 'quit':
					case 'exit':
						process.exit(0);
						break;
				}
				Hooks.run( _.events.command, _.processargs(line.split(' ')) );
				if (_._autoprompt) {
					_.prompt(true);
				}
			}).on('SIGINT', function() {
				Hooks.set(_.events.close, _.events.cli, function () {
					if (_._inquestion) {
						_._inquestion = false;
						_.echo('^C'); // @todo better way to cancel a question
						process.exit(0);
					} else {
						_.echo('exit');
						process.exit(0);
					}
				});
				Hooks.rununtilconsumed(_.events.close);
			});
			_.setonresize();
		},
		processargs: function (raw) {
			var args = {
					raw: [],
					one: [],
					two: [],
					cmd: [],
					keys: [],
				},
				lastkey = false;
			args.raw = raw;
			for (var i in raw) {
				var arg = raw[i];
				if ( arg.startsWith('--') || arg.match(/^-\w.*/) ) {
					lastkey = arg.startsWith('--') ? arg.substr(2) : arg.substr(1);
					args.keys[lastkey] = args.keys[lastkey] || true;
				} else {
					if (lastkey) {
						if ( args.keys[lastkey] === true ) {
							args.keys[lastkey] = [];
						}
						args.keys[lastkey].push(arg);
					} else {
						args.cmd.push(arg);
					}
				}
				if (arg.startsWith('--')) {
					args.two.push(arg);
				} else
				if (arg.match(/^-\w.*/)) {
					args.one.push(arg);
				}
			}
			for (var i in args.keys) {
				if (args.keys[i].length === 1) {
					args.keys[i] = args.keys[i][0];
				}
			}
			args = _.parseargs(args);
			return args;
		},
		parseargs: function (args) {
			for (var i in args.keys) {
				args.keys[i] = _.parsetype( null, args.keys[i] );
			}
			return args;
		},
		/*
		* takes options object
		* prompt: defautl '>'
		* autoprompt: false
		* cli: boolean, default false, enters cli and waits for input
		* this will start generating hooks events
		*/
		init: function (options) {
			var options = options || {},
				raw = process.argv.slice(2),
				iscli = process.stdout.isTTY;
			var args = _.processargs(raw);
			args.iscli = iscli;
			_.iscli = iscli;
			_.setautoprompt(options.autoprompt);
			_.sizes();
			if (iscli && options.cli) {
				_.cli();
				_.prompt(options.prompt);
			}
			Hooks.run(_.events.init, args);
		}
	};
	module.exports = Cli = _;
})();
/*
* Weld is a preprocessor
* it's full version currently lives in the root folder
* it's planned to be moved here once mudeer src modules can handle nesting under folder
*
* the proposed structure for future src module:
* src/
* weld.js
* weld/
* htm.js
* js.js
* config.js
* ...
*
*
* this file is a dirty hack to allow Mudeer apps to parse config.w files -_- :D :( :/
*/
var Weld;
;(function(){
function parse_weld( text ) {
	if (typeof text !== 'string') $.log('text needs to be string');
	text = (text || '')/*.split('---')[0]*/;
	var levels = [],
		lastlevel = 0,
		lastelement = false,
		parsedlines = [];
	text = ( text || '' ).split('\n');
	for (var i in text) {
		var line = text[i];
		var tabs = line.match(/^(\t*).*/i);
		var level = tabs[1].length;
		line = line.replace(/^(\t*)(.*)/i, '$2');
		line = line.replace(/([\t ]+)/gi, ' ');
		var line = line.trim();
		if (line.length > 0
		&& !line.startsWith('//')) {
			if (level > lastlevel) levels.push(lastelement);
			if (level < lastlevel) levels = levels.slice(0, level);
			lastelement = parseInt(i);
			var parent = levels[level-1 ] === undefined ? -1 : levels[level-1 ];
			parsedlines.push({
				uid: parseInt(i) ,
				line : line ,
				level : level ,
				root : levels[0 ] || -1 ,
				parent : parent
			});
			lastlevel = level;
		}
	}
	return parsedlines;
};
var _mod = {
	/*
	* returns all kids as strings in an array
	* or returns '' if there are no kids
	* */
	childrentoarray: function (children) {
		var array = [];
		for (var i in children) {
			array.push(children[i].line);
		}
		if (array.length === 0) return '';
		return array;
	},
	/*
		* returns true if
		* all kids don't have children
		* and they also don't have values
		* */
	allchildrenterminal: function (children) {
		for (var i in children) {
			if (children[i].children.length > 0 || children[i].value.length > 0) {
				return false;
			}
		}
		return true;
	},
	parseparenttag: function (tag, parent) {
		if (tag.value.length > 0) {
			parent.obj[tag.line] = tag.value;
		} else if (tag.children.length > 0) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.obj;
			}
		} else if (tag.children.length === 1) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.obj;
			}
		} else {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.line;
			}
		}
	},
	_parsevalue: function (value) {
		if (value === 'true') return true;
		if (value === 'false') return false;
		return value;
	},
	parseroottag: function (tag, tree) {
		if (tag.children.length > 0) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				tree[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				tree[tag.line] = tag.obj;
			}
		} else {
			if (tag.value.length > 0) {
				tree[tag.line] = _mod._parsevalue(tag.value);
			} else {
				tree[tag.line] = true;
			}
		}
	},
	parse: function (parsedslang, options) {
		var dictionary = {};
		var tree = {};
		for (var i in parsedslang) {
			var command = parsedslang[i];
			var tag = {
				uid: parseInt(command.uid),
				line: command.line,
				level: command.level,
				parent: command.parent,
				children: [],
				obj: {}
			};
			var splat = tag.line.split(' ');
			tag.line = splat[0];
			tag.value = splat.slice(1).join(' ');
			dictionary[tag.uid] = tag;
			if (command.parent > -1) {
				dictionary[command.parent].children.push( tag );
			}
		}
		for (var i in parsedslang) {
			tag = dictionary[ parsedslang[i].uid ];
			if (tag.parent > -1) {
				var parent = dictionary[tag.parent];
				_mod.parseparenttag(tag, parent);
			} else {
				_mod.parseroottag(tag, tree, dictionary);
			}
		}
		return tree;
	}
};
Weld = {
	parse_config: function ( text ) {
		return _mod.parse( parse_weld( text ) );
	},
	/* converts json back to weld, each child level is represented by a \t
	* takes a json object, return string weld
	* */
	encode_config: function (obj, tabs) {
		var weld = '',
			tabs = tabs || 0,
			filler = Cli.getfiller(obj);
		for (var i in obj) {
			var sub = obj[i];
			if (typeof sub === 'object') {
				if (!(isarr(sub) && sub.length === 0)) { // ignore empty arrays
					weld += '\t'.repeat(tabs) + i + '\n';
					weld += ( Weld.encode_config( sub, tabs+1 ) );
				}
			} else {
				if (isarr(obj)) {
					weld += '\t'.repeat(tabs) + sub + '\n';
				} else if (obj instanceof Object) {
					weld += '\t'.repeat(tabs) + filler(i) + ' ' + sub + '\n';
				} else {
					weld += '\t'.repeat(tabs) + filler(i) + ' ' + sub + '\n';
				}
			}
		}
		return weld;
	},
};
Weld.decode_config = Weld.parse_config;
})();
/*
	Files - 02 Aug 2016
		- 11 Nov 2016
		- 22 May 2018 add sync retrieval support
*/
var Files;
;(function () {
	'use strict';
	Files = {
		data: {},
		cache: {},
		fs: false,
		path: false,
		basepath: false,
		s: false,
		init: function () {
			if (Files.fs === false) {
				if (typeof require === 'function') { // use node fs
					try { Files.fs = require('fs-extra'); }
					catch (e) { Files.fs = require('fs'); }
					Files.path = require('path');
					Files.s = Files.path.sep;
					var __dirname = '';
						if (typeof process === 'object') {
							__dirname = process.execPath.match(/(.*)\/.*$/)[1];
						}
					Files.basepath = __dirname;
				} else { // use h5 file api
				}
			}
		},
		exists: {
			file: function (path) {
				var yes = 1;
				try {
					Files.get.file(path);
				} catch (e) {
					if (e.code !== 'EISDIR') yes = 0;
				}
				return yes;
			},
			folder: function () {
				var yes = 1;
				try {
					Files.get.folder(path);
				} catch (e) {
					yes = 0;
				}
				return yes;
			},
		},
		stats: function (path, cb) {
			if (typeof cb === 'function') {
				Files.fs.lstat(path, cb);
				return true;
			} else {
				return Files.fs.lstatSync(path);
			}
		},
		realpath: function (path, cache, cb) {
			if (typeof cache === 'function') {
				cb = cache;
				cache = {};
			}
			if (typeof cb === 'function') {
				Files.fs.realpath(path, cache, cb);
				return true;
			} else {
				return Files.fs.realpathSync(path, cache);
			}
		},
		/*
		* if cb is not a func, uses sync methods
		*/
		get: {
			file: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data, err); // data, err
					}
					Files.fs.readFile(path, innercb);
					return true;
				} else {
					return Files.fs.readFileSync(path);
				}
				return false;
			},
			folder: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data);
						if (err) throw err;
					}
					Files.fs.readdir(path, innercb);
					return true;
				} else {
					return Files.fs.readdirSync(path);
				}
				return false;
			}
		},
		set: {
			symlink: function (srcpath, dstpath, cb) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					Files.fs.symlink(srcpath, dstpath, innercb);
					return true;
				} else {
					try {
						Files.fs.symlinkSync(srcpath, dstpath);
					} catch (e) {
					}
					return true;
				}
			},
			file: function (path, cb, data) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					if (data === undefined) {
						Files.get.file(path, function (data, err) {
							if (err) {
								Files.fs.writeFile(path, '', innercb);
							} else {
								innercb(null);
							}
						});
					} else {
						Files.fs.writeFile(path, data, innercb);
					}
					return true;
				} else {
					return Files.fs.writeFileSync(path, cb);
				}
				return false;
			},
			folder: function (path, mask, cb) {
				if (typeof mask === 'function') {
					cb = mask;
					mask = '0777';
				}
				if (typeof cb === 'function') {
					Files.fs.mkdir(path, mask, function(err) {
						if (err) {
							if (err.code == 'EEXIST') cb(null);
							else cb(err);
						} else cb(null);
					});
				} else {
					mask = mask || '0777';
					try {
						Files.fs.mkdirSync(path, mask)
					} catch (e) {
					}
					return true;
				}
			}
		},
		move: function (oldPath, newPath, callback) {
			function copyunlink () {
				var readStream = Files.fs.createReadStream(oldPath);
				var writeStream = Files.fs.createWriteStream(newPath);
				readStream.on('error', callback);
				writeStream.on('error', callback);
				readStream.on('close', function () {
					Files.fs.unlink(oldPath, callback);
				});
				readStream.pipe(writeStream);
			}
			Files.fs.rename(oldPath, newPath, function (err) {
				if (err) {
					if (err.code === 'EXDEV') {
						copyunlink();
					} else {
						callback(err);
					}
					return;
				}
				callback();
			});
		},
		copy: function (oldPath, newPath, callback) {
			if (typeof callback === 'function') {
				Files.fs.copyFile(oldPath, newPath, function (err) {
					if (err) {
						callback(err);
						return;
					}
					callback();
				});
			} else {
				Files.fs.copyFileSync(oldPath, newPath);
			}
		},
		copy_recursive: function (oldPath, newPath, callback) {
			if (typeof callback === 'function') {
				Files.fs.cp(oldPath, newPath, {recursive: true}, function (err) {
					if (err) {
						callback(err);
						return;
					}
					callback();
				});
			} else {
				Files.fs.cpSync(oldPath, newPath, {recursive: true});
			}
		},
		pop: {
			file: function (path, cb) {
				if (typeof cb === 'function') {
					Files.fs.unlink(path, cb);
				} else {
					Files.fs.unlinkSync(path);
				}
				return true;
			},
			folder: function (path, cb, rf) {
				if (typeof cb === 'function') {
					Files.fs.rmdir(path, {
						recursive: !!rf,
					}, cb);
				} else {
					Files.fs.rmdirSync(path, {
						recursive: !!rf,
					}, cb);
				}
				return true;
			}
		}
	};
	Files.init();
	module.exports = Files;
})();
/*
* TODO make Offline.list to add Offline functionality to lists
* this will include auto saving changes to the list adapter to Offline stores
* TODO add a way to salvage data from previous builds
* */
var Offline, offline;
;(function(){
	'use strict';
	var database = 'db', db = false, maxaazin = {},
		unsavedname = 'unsaved'+'default',
		exclusions = [unsavedname],
		delaydefault = 30*1000,
		gcallback,
		debug_offline = 1;
	var ajraa = function (callback) {
		Offline.getall( Offline.allstores(), {
			filter: {
				pending: 1,
			},
			format: true,
		}, function (kinds) {
			for (var i in kinds) {
				var m = maxaazin[i];
				var things = kinds[i], ixraaj = 0;
				if (m.keyvalue) { // limit to { key: value, ... }
					ixraaj = {};
					for (var j in things) {
						var uid = things[j].uid;
						delete things[j].uid;
						delete things[j].created;
						delete things[j].updated;
						ixraaj[ uid ] = things[j].value;
					}
				}
				/*else if (things.remove) {
					things = {
						uid: things.uid,
						remove: 1,
					};
				}*/
				$.log( ixraaj || things );
				Network.sync(m.name, m.need, ixraaj || things);
			}
		});
	};
	var ijtama3 = function (callback) {
		$.taxeer('offline-ajraa', function () {
			ajraa();
		}, 3000);
	};
	var createstores = function () {
		if (debug_offline) $.log.w('Offline createstores', maxaazin);
		var request = indexedDB.open(database, 388);
		request.onerror = function(event) {
			if (event.target.error.name === 'VersionError') {
				/* delete the old database even if the version number is bigger
				* recreate() calls init() which calls create() which calls
				* createstores()
				* */
				Offline.recreate();
			} else {
			}
		};
		request.onupgradeneeded = function(event) {
			db = event.target.result;
			Offline.allstores().forEach(function (name) {
				db.deleteObjectStore(name);
			});
			Object.values(maxaazin).forEach(function (store) {
				store.time = 0; // reset get time
				var name = store.name+store.need;
				if ( db.objectStoreNames.contains(name) )
					db.deleteObjectStore(name);
				Offline._createstore(name, store.mfateeh);
			});
		};
		request.onsuccess = function(event) {
			db = event.target.result;
			db.onversionchange = Offline.warning;
			Offline.ready = 1;
			if (gcallback) {
				gcallback();
				gcallback = 0;
			} else {
				Hooks.run('offline-ready', 1);
			}
		};
	};
	var fillmissingkeys = function (store, object) {
		store = maxaazin[store];
		store.mfateeh.forEach(function (m) {
			object[m] = object[m] === undefined ? 0 : object[m];
		});
	};
	/*
	* Offline storage and adapter in one
	* auto manages database versioning
	* */
	Offline = offline = {
		ruid: function () {
			var ruid = parseInt( preferences.get(3) || -1 );
			preferences.set(3, ruid - 1);
			return (ruid - 1);
		},
		mundarij: {
			add: {},
			remove: {},
			get: {},
		},
		ready: false,
		response: { // supports only one callback per name+need combo, module should fire hooks to others
			add: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.add[ name ] = Offline.mundarij.add[ name ] || {};
				Offline.mundarij.add[ name ][ need ] = cb;
			},
			remove: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.remove[ name ] = Offline.mundarij.remove[ name ] || {};
				Offline.mundarij.remove[ name ][ need ] = cb;
			},
			get: function (name, need, cb) {
				/* WHY use cases
				* when you want to get something from the server using Offline
				* Offline handles everything, eg the .get response from server
				* it adds a listener to Network.get as well for your module
				* so your module.server can respond using both get & sync
				* */
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.get[ name ] = Offline.mundarij.get[ name ] || {};
				Offline.mundarij.get[ name ][ need ] = cb;
				Network.response.get(name, need, function (response) {
					cb( shallowcopy(response) );
					var store = maxaazin[name+need];
					if (store) store.time = Time.now();
					Offline.save(name, need, response);
				});
			},
		},
		add: function (name, need, value) { // adaaf
			if (debug_offline) $.log.w('Offline.add', name, need);
			if (arguments.length === 2) value = need, need = 0;
			need = need || 'default';
			if (!(value instanceof Array)) value = [value];
			if (value instanceof Array) {
				Offline.set(name+need, value, function (needssync) {
					var m = maxaazin[ name+need ];
					if (m.keyvalue) {
						var kind = Offline.mundarij.get;
						if (kind[name] && typeof kind[name][need] == 'function')
							kind[name][need]( shallowcopy(value) );
					}
					if (needssync) ijtama3();
				});
			}
		},
		remove: function (name, need, value) { // [ { uid }, { uid } ]
			if (arguments.length === 2) value = need, need = 0;
			need = need || 'default';
			if (!(value instanceof Array)) value = [value];
			if (value instanceof Array) {
				value.forEach(function (item) {
					item.pending = 1;
					item.remove = 1;
				});
				Offline.set(name+need, value, function (needssync) {
					var m = maxaazin[ name+need ];
					if (m.keyvalue) {
						var kind = Offline.mundarij.get;
						if (kind[name] && typeof kind[name][need] == 'function')
							kind[name][need]( shallowcopy(value) );
					}
					if (needssync) ijtama3();
				});
			}
		},
		create: function (name, need, o) { // ixtalaq/create store
			if (debug_offline) $.log.w('Offline.create', name, need);
			o = o || {};
			o.delay = o.delay || undefined;
			o.nazzaf = o.nazzaf || undefined;
			o.mfateeh = o.mfateeh || [];
			need = need || 'default';
			/* BUGFIX
			* i think there's a bug in indexdb implementation that forced me
			* to redefine this or maybe i'm mistaken in my understanding
			* but it was triggering errors without this index saying it doesn't
			* exist, i thought keyPath auto gens the uid index as well
			* maybe i misunderstood this concept
			* */
			['uid', 'created', 'updated', 'pending'].forEach(function (v) {
				if (!o.mfateeh.includes(v)) o.mfateeh.push(v);
			});
			maxaazin[ name+need ] = {
				name: name,
				need: need,
				mfateeh: o.mfateeh,
				nazzaf: o.nazzaf,
				delay: o.delay,
				tashkeel: o.tashkeel,
				keyvalue: o.keyvalue,
			};
			$.taxeer('offline-init', function () {
				createstores();
			}, 250);
		},
		get: function (name, need, value, time) {
			if (debug_offline) $.log.w('Offline.get', name, need);
			need = need || 'default';
			/*
			* it gets all first from Offline store, if nothing is found
			* then it tries online
			* if time is provided, then it saves when online was fetched last
			* */
			var expired = 0;
			if (time !== undefined) {
				var store = maxaazin[name+need];
				if (store) {
					var delay = store.delay || delaydefault;
					if (delay !== -1) {
						store.time = store.time || Time.now() - (delay*2);
						if (time - store.time > delay) expired = 1;
					}
				}
			}
			if (expired) {
				Network.get(name, need, value);
			} else {
				Offline.getall(name+need, value, function (response) {
					var kind = Offline.mundarij.get;
					if (kind[name] && isfun(kind[name][need])) {
						kind[name][need](response.toNative());
					}
				});
			}
		},
		getforun: function (name, need, value, cb) {
			need = need || 'default';
			if (isfun(cb))
			Offline.getall(name+need, value, function (response) {
				cb(response.toNative());
			});
		},
		fetch: async function (name, need, value, time) { // get but with promise
			if (debug_offline) $.log.w('Offline.fetch', name, need);
			need = need || 'default';
			/*
			* it gets all first from Offline store, if nothing is found
			* then it tries online
			* if time is provided, then it saves when online was fetched last
			* */
			var on_resolve, on_error;
			var expired = 0;
			if (time !== undefined) {
				var store = maxaazin[name+need];
				if (store) {
					var delay = store.delay || delaydefault;
					if (delay !== -1) {
						store.time = store.time || Time.now() - (delay*2);
						if (time - store.time > delay) expired = 1;
					}
				}
			}
			var filter_for_network = shallowcopy( value );
			async function fetch_from_server() {
				try {
					var response = await Network.fetch(name, need, filter_for_network);
					on_resolve( response );
				} catch (e) {
					on_error( e );
				}
			}
			if (expired) {
				fetch_from_server();
			} else {
				Offline.getall(name+need, value, function (response) {
					if (response.length)
						on_resolve( response.toNative() );
					else {
						fetch_from_server();
					}
				});
			}
			return new Promise(function (resolve, error) {
				on_resolve = resolve;
				on_error = error;
			});
		},
		get_offline: async function (name, need, value) { // get from offline storage only
			var on_resolve;
			if (get_global_object().Network)
				await Network.until_first_sync(name, need);
			this.getforun(name, need, value, function (arr) {
				on_resolve(arr)
			});
			return new Promise(function (resolve) {
				on_resolve = resolve;
			});
		},
		save: function (name, need, value) { // hifz/save from Network.sync[name][need] value
			if (debug_offline) $.log.w( 'Offline save', name, need, value );
			for (var uid in value) {
				var val = value[uid], kind = Offline.mundarij.add;
				val.uid = val.uid || uid;
				val.pending = 0;
				if (val.remove === -1) { // truly purged on both ends
					kind = Offline.mundarij.remove;
					Offline.pop(name+need, val.uid);
					val = val.uid;
				} else {
					Offline.set(name+need, [val]);
				}
				if (kind[name] && typeof kind[name][need] == 'function') {
					kind[name][need]( shallowcopy(val) );
				}
			}
		},
		/*
		* propname ==
		* propname$sw startsWith
		* propname$ew endsWith
		* propname$ee ===
		* propname$gt <
		* propname$st >
		* propname$ge >=
		* propname$se <=
		* propname$ma match all comma separated tags, if has all tags
		* propname$re match(regex) @TODO
		*
		* $max number is limit of list
		* */
		filter: function (filter, rawitems) {
			if (typeof filter === 'object' && Object.keys(filter).length) {
				/*
				* by default it assumes that every single filter needs to eval
				* true, as if there's an AND between every filter
				*
				* this is done greedily by quiting the check the moment a filter
				* is found to not eval to true
				* */
				var filtered = $.array(), keys = Object.keys(filter);
				rawitems.each(function (rawitem) {
					var matchedprops = 0,
						totalprops = keys.length;
					var doadd, count = 0, i, prop;
					while (count < totalprops) {
						i = keys[count], prop = i, doadd = 0;
						if ( i.endsWith('$i') ) { // includes string in string
							prop = (rawitem[ i.slice(0,-2) ] ) || 0;
							if ( typeof prop === 'string' && prop.toLowerCase().includes( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$s') ) { // startswith
							prop = i.slice(0,-2);
							if ( (rawitem[ prop ] ).startsWith( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$e') ) { // endswith
							prop = i.slice(0,-2);
							if ( (rawitem[ prop ] ).endsWith( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$gt') ) { // greater than
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] > filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$st') ) { // smaller than
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] < filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ge') ) { // greater or equal
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] >= filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$se') ) { // smaller or equal
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] <= filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ne') ) { // not equal
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] != filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ma') ) { // match all in comma sep
							prop = i.slice(0,-3);
							var tags = (rawitem[ prop ] || '');
							if (filter[i] === '') doadd += 1;
							else if (filter[i] == ',') {
								if (tags === '') doadd += 1;
							} else {
								tags.split(',').forEach(function (tag) {
									if (tag.trim() == filter[i])
										doadd += 1;
								});
							}
						}
						if ( i.endsWith('$ee') ) { // equal equal (absolute)
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] === filter[i] )
								doadd += 1;
						}
						else if ( rawitem[i] == filter[i] ) doadd += 1;
						++count;
						if (doadd) ++matchedprops;
					}
					if (matchedprops === totalprops)
						filtered.set( rawitem.uid, rawitem );
				});
				return filtered;
			} else return rawitems;
		},
		_createstore: function (name, keys) {
			var objectstore = db.createObjectStore(name, { keyPath: 'uid' });
			for (var i in keys) {
				objectstore.createIndex(keys[i], keys[i]);
			}
		},
		_get: function (store, uid, callback) {
			if (db) {
				try {
					db.transaction(store).objectStore(store).get(uid)
						.onsuccess = function(event) {
							typeof callback === 'function' && callback(event.target.result);
						};
				} catch (error) {
					$.log('Offline.get', store, uid);
					$.log.e(error);
				}
			} else {
			}
		},
		count: function (store, callback) {
			var i = 0;
			db.transaction(store).objectStore(store).openCursor().onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					++i;
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(i);
				}
			};
		},
		filteredcount: function (store, bound, direction, callback) {
			var i = 0;
			db.transaction(store).objectStore(store).openCursor(bound, direction).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					++i;
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(i);
				}
			};
		},
		parsevalue: function (value) {
			if (value === true) value = 1;
			if (value === false) value = 0;
			if (value instanceof Array) {
				for (var i in value) {
					value[i] = Offline.parsevalue(value[i] );
				}
			}
			return value;
		},
		/*
		* this func is called on each obj before it is sent to Network uploads
		* intro a Offline.store.<name>.tashkeel func to override this
		* */
		format: function (obj, store) {
			obj = obj || {};
			var newobj = {};
				delete obj._store;
				delete obj.pending;
				newobj = shallowcopy(obj);
			var m = maxaazin[store];
			if (m && isfun(m.tashkeel)) newobj = m.tashkeel(newobj);
			newobj.ruid = obj.ruid ;
			newobj.remove = obj.remove ;
			return newobj;
		},
		/*
		* returns a $.array
		* */
		_getall: function (store, options, callback) {
			var objectStore = db.transaction(store).objectStore(store),
				unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				i = 0,
				filteredcount = 0, // total objects filtered out
				objects = $.array(),
				filters = options.filter || {},
				bound = null,
				direction = 'prev',
				extra = {
					pages: false,
					count: false,
					limit: options.limit,
				};
			if (extra.limit === undefined || extra.limit === true) {
				extra.limit = true;
			}
			if (options.reversed) direction = 'next';
			options.key = [];
			options.only = [];
			if (filters.cache)
				filters.cache = undefined;
			if ( Object.keys(filters).length > 1 ) {
				var keys = Object.keys(filters);
				var only = Object.values(filters);
				for (var i in only) {
					if (only[i] !== undefined) {
						options.key.push( keys[i] );
						options.only.push( only[i] );
					}
				}
			}
			if ( Object.keys(filters).length <= 1 || options.key.length <= 1 ) {
				options.key = Object.keys(filters)[0];
				options.only = Object.values(filters)[0];
				if (options.only === undefined)
					options.key = undefined;
			}
			if (options.key) {
				objectStore = objectStore.index( options.key );
				options.only = Offline.parsevalue( options.only );
				bound = IDBKeyRange.only( options.only );
			}
			if (extra.limit !== true) {
				extra.limit = extra.limit || 20;
				var page = options.page || 0;
				if (page) page = page - 1;
				var startat = page * extra.limit;
			}
			objectStore.openCursor(bound, direction).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					var key = cursor.value.uid;
					if (extra.limit === true || options.perm) {
						var item = cursor.value;
						if (options.format)
							item = Offline.format( cursor.value, store );
						objects.set(key, item);
					} else {
						if ( i >= startat && objects.length < extra.limit ) {
							var item = cursor.value;
							if (options.format)
								item = Offline.format( cursor.value, store );
							objects.set(key, item);
						} else {
							if (bound)
								++filteredcount;
						}
					}
					++i;
					cursor.continue();
				} else {
					Offline._getallpending(store, function (unsaved) {
						unsaved.each(function (item) {
							if (options.format)
								item = Offline.format( item, store );
							return item;
						});
						var andfinally = function (objects) {
							/*
							* pre-sorting for perm lists && pre-filtering
							* */
							if (options.perm) {
								objects.sort(options.reversed || 0, (options.orderby || 'uid'), 'uid');
								if (typeof options.multifilter === 'object' && Object.keys(options.multifilter).length)
									objects = Offline.filter(options.multifilter, objects);
							}
							if (extra.limit === true) {
								extra.count = objects.length;
								extra.pages = false;
								typeof callback === 'function' && callback(objects, extra, unsaved);
							} else {
								Offline.count(store, function (count) {
									if (bound) {
										extra.count = objects.length+filteredcount;
									} else {
										extra.count = count;
									}
									extra.pages = Math.ceil(extra.count / extra.limit);
									/*
									* pre-sorting for perm lists
									* */
									if (options.perm) {
										extra.count = objects.length;
										extra.pages = Math.ceil(extra.count / extra.limit);
										extra.filteredcount = objects.length;
										objects = objects.slice(startat, startat+options.limit-1);
									}
									typeof callback === 'function' && callback(objects, extra, unsaved);
								});
							}
						};
						/*
						* pre-fillingin (used to fill up missing props)
						* */
						if (typeof options.uponfillin === 'function') {
							options.uponfillin(objects, function (objects) {
								andfinally(objects);
							}, 1);
						} else
							andfinally(objects);
					});
				}
			};
		},
		_getallpending: function (store, callback) {
			if (debug_offline) $.log.w('Offline._getallpending', store);
			var unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				bound = IDBKeyRange.only( store ),
				objects = $.array();
			unsavedStore.index( '_store' ).openCursor(bound).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					/*
					* we store them as positive uids because idb doesn't allow
					* looping over neg ones
					* but the rest of the systemd requires them to be negative
					* to differentiate b/w unsaved and saved items
					* otherwise they end up replacing saved items with the same
					* uids
					* so we negate them here
					* */
					cursor.value.uid = cursor.value.uid * -1;
					objects.set(cursor.value.uid, cursor.value);
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(objects);
				}
			};
		},
		/*
		* accepts only negative uids
		* doesn't need a store cuz these -ve uids are unique across stores ;)
		* */
		getpendingitem: function (uid, callback) {
			var unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				bound = IDBKeyRange.only( uid * -1 ),
				objects = $.array();
			unsavedStore.index( 'uid' ).openCursor(bound).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					cursor.value.uid = cursor.value.uid * -1;
					objects.set(cursor.value.uid, cursor.value);
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(objects);
				}
			};
		},
		getallpending: function (store, callback) {
			/*
			* when store is an array, ...use the same options for each store...
			* return the result items indexed using the store name as key
			* $.array:
			* pageitem: $.array
			* classitem: $.array
			* attendanceitem: $.array
			* */
			if (store instanceof Array) {
				var types = {},
					i = 0,
					total = 0,
					q = $.queue();
				store.forEach(function () {
					q.set(function (done, queue) {
						Offline._getallpending(store[i], function (objects) {
							if (objects.length) {
								types[ store[i] ] = objects.toNative();
								++total;
							}
							++i;
							done(queue);
						});
					});
				});
				q.run(function () {
					if (total === 0) types = false;
					typeof callback === 'function' && callback(types);
				});
			} else {
				Offline._getallpending(store, callback);
			}
		},
		getall: function (store, options, callback) {
			if (debug_offline) $.log.w( 'Offline.getall', store, options );
			options = options || {};
			/*
			* when store is an array, use the same options for each store
			* return the result items indexed using the store name as key
			* $.array:
			* pageitem: $.array
			* classitem: $.array
			* attendanceitem: $.array
			* */
			if (store instanceof Array) {
				var types = {},
					i = 0,
					total = 0,
					q = $.queue();
				store.forEach(function () {
					q.set(function (done, queue) {
						Offline._getall(store[i], options, function (objects, ignore, unsaved) {
							if (objects.length || unsaved.length) {
								if (options.filter
								&& options.filter.pending
								&& store[i].endsWith('_archive')) {
									store[i] = store[i].slice(0, -'_archive'.length);
								}
								if (types[ store[i] ]) {
									types[ store[i] ].concat( objects.toNative().concat( unsaved.toNative() ) )
								} else {
									types[ store[i] ] = objects.toNative().concat( unsaved.toNative() );
								}
								++total;
							}
							++i;
							done(queue);
						});
					});
				});
				q.run(function () {
					if (total === 0) types = false;
					typeof callback === 'function' && callback(types);
				});
			} else {
				Offline._getall(store, options, callback);
			}
		},
		/*
		* objects is a $.array
		* */
		set: function (store, arr, callback) {
			if (debug_offline >= 2) $.log.w('Offline.set', store);
			if (!db) {
				if (debug_offline) $.log.e('Offline db not created yet', db);
				return;
			}
			/*
			* this is need because if there are no objects present, the transaction
			* is not even initiated, so there's no oncomplete event lol
			* best to just return alongside callback
			* */
			if (arr.length === 0) {
				typeof callback === 'function' && callback();
				return;
			}
			var needssync = 0;
			var stores = [store, unsavedname];
			try {
				var transaction = db.transaction(stores, 'readwrite');
			} catch (e) {
				$.log.e(e);
				return;
			}
			transaction.oncomplete = function(event) {
				typeof callback === 'function' && callback(needssync);
			};
			var objectStore = transaction.objectStore(store);
			var unsavedStore = transaction.objectStore(unsavedname);
			arr.forEach(function(obj) {
				/*
				* idb spec f'd up again by not allowing boolean indexes
				* so true is 1 and false is 0 *facepalm*
				* */
				if (obj.pending === true) obj.pending = 1;
				if (obj.pending === false) obj.pending = 0;
				if (obj.uid < 0 || obj.pending) needssync = 1;
				/*
				* btw idb doesn't allow changing primary key of an object
				* so you have to delete the old one and resave it lol
				* i dont need that cuz im using a sep store for unsaved items
				*
				* case: it was just saved on the server and now being saved offline
				* has a -ve .ruid
				* has a +ve uid
				* idea: del from unsaved store using -ve .ruid as +ve uid
				* save to the real store using the +uid
				*
				* case: only saving it offline, never saved on the server
				* has a -ve uid
				* idea: use the -ve uid as +ve uid
				* passing _store = real store
				* check if there's a record with the same uid present
				* override the old obj with new obj props
				* store to the unsaved store
				*
				* case: both saved server side and offline
				* has a +ve uid
				* idea: just save to the real store
				* */
				if ((obj.uid > 0 || isstr(obj.uid)) && obj.ruid < 0) {
					if (debug_offline) $.log.w( 'Offline delete pending', obj.ruid * -1 );
					unsavedStore.delete( obj.ruid * -1 ).onsuccess = function () {
						delete obj.ruid;
						delete obj._store;
						fillmissingkeys(store, obj);
						objectStore.put(obj);
					};
				}
				else if (obj.uid < 0 && obj.ruid === undefined) {
					obj.uid = obj.uid * -1;
					obj._store = store;
					unsavedStore.get(obj.uid || 0).onsuccess = function(event) {
						var oldobj = event.target.result;
						if (oldobj) {
							oldobj = Object.assign(oldobj, obj);
							obj = oldobj;
						}
						fillmissingkeys(unsavedname, obj);
						unsavedStore.put(obj);
					};
				} else {
					objectStore.get(obj.uid || 0).onsuccess = function(event) {
						var oldobj = event.target.result;
						if (oldobj) {
							oldobj = Object.assign(oldobj, obj);
							obj = oldobj;
						} else {
							if (obj.pending === false
							|| obj.pending === undefined
							|| obj.pending === null)
								obj.pending = 0;
						}
						fillmissingkeys(store, obj);
						objectStore.put(obj);
					};
				}
			});
		},
		pop: function (store, uid, callback) {
			if (uid < 0) {
				store = unsavedname;
				uid = uid * -1;
			}
			db.transaction(store, 'readwrite').objectStore(store).delete(uid)
				.onsuccess = function(event) {
					typeof callback === 'function' && callback(event.target.result);
				};
		},
		popall: function (store, arr, callback) {
			var stores = [store, unsavedname];
			var transaction = db.transaction(stores, 'readwrite');
			var objectStore = transaction.objectStore(store);
			var unsavedStore = transaction.objectStore(unsavedname);
			transaction.oncomplete = function(event) {
				typeof callback === 'function' && callback();
			};
			var objectStore = transaction.objectStore(store);
			arr.forEach(function(obj) {
				if (obj.uid < 0) unsavedStore.delete(obj.uid * -1);
				else objectStore.delete(obj.uid);
			});
		},
		allstores: function () {
			var oldstores = [];
			/*
			* i think the transaction becomes inactive if there is too much
			* delay between two requests like deleteObjectStore
			* so i had to create an array outta this
			* */
			for (var i in db.objectStoreNames) {
				if ( db.objectStoreNames.hasOwnProperty(i) ) {
					var name = db.objectStoreNames[i];
					if ( db.objectStoreNames.contains(name) ) {
						if (!exclusions.includes(name))
							oldstores.push(name);
					}
				}
			}
			return oldstores;
		},
		recreate: function (callback) {
			db && db.close && db.close();
			var request = indexedDB.deleteDatabase(database);
			request.onsuccess = function () {
				Offline.init(callback);
			};
			/*request.onblocked = function () {
				$.log.s( 'blocked' );
			};
			request.onerror = function () {
				$.log.s( 'error' );
			};*/
		},
		/*
		* this should just reinit the database and reload the current page as
		* usual, all that'd have happened is that there will be less data now
		* than before, but the user should be shown a helpful message about it
		* in the rare instance that this happens
		*
		* this should cause a sync with the server where only data is uploaded
		* once done, the user should be told that they can safely reload the page
		*
		* this won't happen often because we can notify users of any upcoming
		* updates, turn their apps 'off' until the update is done and tested
		* completely
		* */
		warning: function (event) {
			/* OMG THIS IS SO STUPID
			* if the old isn't closed, the new one can't be opened lol
			* when two tabs are open and one gets a new version loaded up
			* the effect is
			* the new tab will get stuck on loading until the other tab closes
			* the db bahahahah
			* so you'll have to reload the old tab, to avoid this why not
			* auto call db.close lmfao
			* */
			db.close();
			dom.setloading( 'appneedsreload' );
		},
		init: function (callback) {
			if (debug_offline) $.log.w('Offline.init');
			gcallback = callback;
			Offline.create('unsaved', 'default', {
				mfateeh: ['_store']
			});
		}
	};
	Hooks.set('response-sync', function (payload) {
		if (debug_offline) $.log.w( 'Offline response-sync', payload );
		for (var name in payload) {
			for (var need in payload[name]) {
				var value = payload[name][need];
				Offline.save(name, need, value);
				var m = maxaazin[ name+need ];
				if (m.keyvalue) {
					var kind = Offline.mundarij.get;
					if (kind[name] && typeof kind[name][need] == 'function')
						kind[name][need]( shallowcopy(value) );
				}
			}
		}
	});
	Hooks.set('network-connection', function (yes) {
		if (yes)
		$.taxeer('offline-sync', function () {
			ijtama3();
		}, 250);
	});
})();
/* lists have an adapter $.array, it contains the objects present in the dom list
*
* the adapter set/pop functions can be overriden to provide your own logic
*
* the dom list set/pop functions also mutate the adapter
* */
var List, list;
;(function(){
	'use strict';
	var direction = function () { return document.body.dir; };
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		/* EXPLAIN TODO
		* my hunch is that this is to change idb prop names to dom prop names
		* but im not sure, prolly also used to remap prop names
		* */
		beforeset: 0,
		before_set: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) Softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) Softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, // when reached list end, do what? return 1 to avoid default
		uponstart: 0,
		bintixaab: 0, // upon selection change [TODO deprecate this]
		uponintaxab: 0, // same as bintixaab [TODO deprecate this]
		on_selection: 0, // 2023 NEW
		uponnavi: 0, // ( type )
		_scroll_on_focus: 1,
		scroll_on_focus: function (yes) {
			this._scroll_on_focus = yes;
			return this;
		},
		moveup: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { // active = visible & view is active
			if (v && active) Softkeys.list.basic(this);
			if (isfun(this.on_focus)) this.on_focus(v, active);
		},
		rakkaz: function (v, active) { // deprecated, use set_focus
			if (this._prevent_focus) return;
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.focussed) this.element.dataset.focussed = 1, yes = 1;
			else if (!v && this.element.dataset.focussed) delete this.element.dataset.focussed, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		/* TODO
		* improve this navigation to account for mufarraqaat
		* detect if the next item is a mufarraq, skip it.
		* */
		first: function (select) {
			this.selected = select === undefined ? -1 : select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function () {
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.uponpaststart)
					yes = this.uponpaststart(this.selectedold);
				if (yes) {
					this.selected = 0;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.last();
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) // custom length algo
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.uponpastend)
					yes = this.uponpastend(this.selectedold);
				if (yes) {
					this.selected = this.length()-1;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.first(this.gridnum ? this.selected - this.length()-1 : -1);
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		right: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { // with multiple it also toggles, depr, use highlight instead
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		/* id can be a number or string id
		* */
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected : id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		select_by_uid: function (id, noscroll, silent, nofocus) {
			return this.select(this.id2num(id), noscroll, silent, nofocus);
		},
		intaxabscroll: function (selected) { // select_scroll TODO rename
			if (!this._scroll_on_focus) return;
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) scrollintoview(selected);
			} else {
				if (this.selected === 0) webapp.scrollto();
				else if (selected) webapp.scrollto(selected);
			}
		},
		intaxabsaamitan: function (id) { // select silently
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.on_selection) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.on_selection(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			if (isfun(this.on_deselection)) {
				this.on_deselection();
			}
			return this;
		},
		/* TODO
		* add a sticky mufarraq compensation function
		* this func should add a px comp
		* use case to add another sticky heading on top of this list
		* */
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { // replace with o at num
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { // deprecate the second argument
			/* IMPORTANT
			* id would actually change the html#id
			* so avoid it unless you know what you're doing
			* */
			if (id) $.log('List.set, stop using id, use o.uid instead');
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items,
				available_height = innerheight() - LV.element.offsetTop,
				actual_height = parent.offsetHeight;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; // muntahaa limit hit
			if (id === undefined)
				if (o.uid === undefined) {
					var newuid = LV.length();
					LV.adapter.each(function (c, e) {
						if (newuid <= c.uid) newuid = c.uid+1;
					});
					o.uid = id = newuid;
				}
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid); // TODO deprecate
			if (LV.before_set) o = LV.before_set(o, o.uid); // new & approved
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (LV._recycle) return; // defer rendering to scroll events
			if (!clone) {
				/*
				* this is to avoid modifying provided o object
				* it sets dataset on clone
				* */
				var o2 = Object.assign({
					id: o.id_dom, // sets the #id of an element
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				delete o.before;
				delete o.awwal;
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, LV.id2num(o.uid) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.after_set && LV.after_set( o, clone, templates.keys(clone) );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		namoovaj: function (eansarism) { // deprecated
			this._listitem = eansarism || 'listitem';
			return this;
		},
		listitem: function (elementname) { // namoovaj alternative
			return this.namoovaj(elementname);
		},
		axavmfateeh: function (uid) { // TODO deprecate
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		get_item_keys: function (uid) { // NEW
			return this.axavmfateeh(uid);
		},
		axavmuntaxab: function (uid) { // get [selected] item's adapter object
			return this.axadmuntaxab(uid);
		},
		axadmuntaxab: function (uid) {
			uid = this.num2id( uid || this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { // get baidaa item's adapter object
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get_item_element: function (uid) {
			return this.get( isundef(uid) ? this.selected : uid );
		},
		get_item_element_by_uid: function (uid) {
			return this.get( this.id2num(uid) );
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) { // deprecated, use remove_by_uid
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length())
					LV.selected = LV.length()-1;
					else
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		remove_by_uid: function (uid) { // pop
			return this.pop(uid);
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		remove_all: function () { // popall
			return this.popall();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.focussed || force) &&
					this.onpress && this.onpress( item, key, this.selected );
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { // return id of item that has this uid
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		zumrah: function (zumraat) {
			this.element.className = 'list '+zumraat;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { // maximum
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			this.keys.raees.hidden = len ? 0 : 1;
			if (!this._mowdoo3) this.keys.raees.hidden = 1;
		},
		mowdoo3: function (m, i18n) { // deprecated -> title
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		title: function (m, i18n) { // only visible when length > 0
			return this.mowdoo3(m, i18n);
		},
		set_scrolling_element: function () {
		},
		destroy: function () {
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			/* EXPLAIN
			* connects this list to bahacbox, bahacbox.onchange is listened on
			* with a $.taxeer
			* list.uponpaststart is also connected to bahacbox.focus
			* bahacbox.onpastend is prolly auto handled by softkeys
			* */
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	proto.set_focus = proto.rakkaz;
	proto.highlight = proto.baidaa;
	proto.select_silently = proto.intaxabsaamitan;
	proto.prevent_focus = function (yes) {
		this._prevent_focus = yes;
		return this;
	};
	List = list = function (element) { // TODO deprecate list
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.title();
		/* IMPORTANT EXPLAIN
		* this is for use cases with a single list that is focussed by default
		* for multiple lists in a focus group, chain .rakkaz() to unset this
		* before setting uponrakkaz
		* */
		LV.uponclick = function (i, e, uid) {
			/* call these before triggering press events in case press handler
			* calls pop or set and that changes this.selected
			* */
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); // select without trig event
			var yes = LV.selected == uid && LV.element.dataset.focussed == 1;
			LV.selected = uid;
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
/* @TODO
* add .back_twice_to_exit, which adds having to press back/esc twice to exit with delay
* also make the exit button red when in delay
* is_darajah is_level or is_stage or is_state
* */
var Backstack, backstack;
;(function(){
	var s,
	storage = {
		3 : {}, // searches, dialogs, menus
		2 : {}, // settings, ...
		1 : {}, // lists, editors, renderuis, ...
		0 : {}, // main, ...
	},
	do_level = function () {
		var level = 0;
		if (s.dialog) level = 3;
		else if (s.sheet) level = 2;
		else if (s.view) level = 1;
		else level = 0;
		backstack.darajah = level;
		return level;
	},
	savefocus = function () { // save focus on each level, restore automatically
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	/*
	* this is the mudeer standalone platform
	* there's no browser history stack or back+forward buttons to worry about
	* so we can take full control
	* no need to make it compatible with almudeer since that's for PWAs
	* here we have way more freedom so let's capitalize on it
	*
	* this basically replaces the browser backstack
	*
	* the backstack event is fired on all changes
	* */
	Backstack = backstack = {
		storage: storage,
		darajah: 0,
		states: {
			dialog : 0, // searches, dialogs, menus
			sheet : 0, // settings, ...
			view : 0, // lists, editors, renderuis, ...
			main : 0, // main, ...
		},
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args, backing) {
			savefocus();
			s.dialog = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			if (!backing) Hooks.run('backstack-dialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args, backing) {
			savefocus();
			s.sheet = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			if (!backing) Hooks.run('backstack-sheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args, backing) {
			if (args == 'main') {
				s.view = 0;
				this.main(args);
				return;
			}
			savefocus();
			s.view = args;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			if (!backing) Hooks.run('backstack-view', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) { // 1 = active, 2 = Webapp startup
			savefocus();
			s.main = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.run('backstack-main', s.main);
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		is_main_in_startup: function () {
			return s.main === 2 ? 1 : 0;
		},
		close_all: function () { // this should return the states to main
			if (s.dialog)
				s.dialog = 0, do_level(), Hooks.run('closeall', 3);
			if (s.sheet)
				s.sheet = 0, do_level(), Hooks.run('closeall', 2);
			if (s.view)
				s.view = 0, s.main = 1, do_level(), Hooks.run('closeall', 1);
		},
		back: function () {
			if (s.dialog)
				s.dialog = 0, do_level(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, do_level(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, do_level(), Hooks.run('closeall', 1);
			else
				s.main = 0, do_level(), Hooks.run('closeall', 0);
			Hooks.run('restore', Backstack.darajah);
			Hooks.run('backstack', Backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		Backstack.back();
	});
	Hooks.set('dialog', function (args) {
		Backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		Backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		Backstack.view(args);
	});
	Hooks.set('main', function (args) {
		Backstack.main(args);
	});
	s = Backstack.states;
})();
var Preferences, preferences;
;(function(){
	'use strict';
	/* LEGEND preferences local storage
	* @ last sync time
	* @0 offline since
	* 1 key
	* 2 uid (account)
	* 3 ruid
	* 4 list views cache
	* 5 is menu hidden, 1 yes
	* 6 initial sync done?
	* 7 softkeys help
	* 8 sound off
	* 9 largetext
	* 10 default perms for different account types
	* 11 permissions of current account
	* 12 temp unit C F K
	* 13 meanings
	* 15 animations off
	* 16 softkeystouch dpad
	* 17 pagerasmaa
	* 18 webapptouchdir
	* 19 theme
	* 20 username
	* 21 display name
	* 22 account type
	* 23 transparency
	* 24 24 hour
	* 25 lang
	* 26 calendar type hijri gregorian
	* 27 digit comma separation
	* 30 app uid
	* 40 app title
	* 50 app address
	* 60 app phone
	* 70 billing on Central
	* 80 default currency
	* 81 latitude
	* 82 longitude
	* 90 sign in required
	* 91 location required
	* 100 remember viewed articles
	* 110 frequency of used dashboard items
	* 120 home view
	* 130 units (SI, imperial)
	* 140 font
	* 150 global newform toggle
	* 160 features
	* 170 conf
	* 1100 umoor what tag(s) to show?
	* */
	Preferences = preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		/*
		* for json data, fetches stored data, parses as json, gives you a nice
		* object to work with in a callback, you make the changes and just
		* return the result, it saves the object back
		* */
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 388 ) {
		preferences.pop(3); // ruid
		preferences.pop('@'); // last sync time
		preferences.pop(4); // list view cache
		preferences.pop(6); // initial sync done
	}
	preferences.set('#', 388);
	Hooks.set('ready', function () {
		if ( buildnum != 388 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 388 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { // generic
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { // call/telephone (verb)
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { // send (verb) risaalah (noun) message
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { // (e)mail (verb) breed (noun)
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var View, view;
;(function(){
	var index = {};
	View = view = {
		zaahir: function (name) { // is_active, deprecated
			return view.axav() === name;
		},
		is_active: function (name) {
			if (isarr(name)) {
				for (var i = 0; i < name.length; ++i) {
					if (this.zaahir(name[i])) return true;
				}
				return false;
			} else {
				return this.zaahir(name);
			}
		},
		mfateeh: function (name) { // dom_keys
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		ishtaghal: function (name, uid) { // run, deprecated
			var level = backstack.level ,
				exists = View.get_element(name) ;
			if (isundef(exists)) {
				$.log.w('View not found: "'+name+'"');
			} else {
				var element = view.get(name) ,
					keys = templates.keys(element) ;
				Hooks.run('viewready', { // TODO rename to view-ready
					name: name,
					uid: uid,
					element: element,
					keys: keys,
					level: level,
				});
			}
		},
		get_element: function (name) { // get dom element of a view
			return this.get(name, 1);
		},
		get_uid: function () {
			if (Backstack.states.view) {
				return Backstack.states.view.uid;
			}
		},
		axav: function (name, onlyelement) { // get
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { // get, deprecated
			return view.axav(name, onlyelement);
		},
		fahras: function () { // index
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
	View.get = View.axav;
	View.run = View.ishtaghal;
	View.dom_keys = View.mfateeh;
	Hooks.set('backstackview', function (args) {
		var name, uid;
		if (isstr(args)) {
			name = args;
		} else if (args) {
			name = args.name;
			uid = args.uid;
		}
		Webapp.dimmer();
		Softkeys.clear();
		Softkeys.P.empty();
		Softkeys.set(K.sr, function () {
			Hooks.run('back');
		}, 0, 'iconarrowback');
		View.run(name, uid);
		return 1; // stop propagation
	});
})();
var Time, time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	Time = time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { //starts at zero
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { // to mins, hrs, days, etc
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); // unicode commas
			var months = ( ( time.now() - datetime ) / time.month );
			var days = ( ( time.now() - datetime ) / time.day );
			if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s : s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	/*
	* both int values
	* */
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		format = format || 'MM/DD/YYYY h:mma';
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , // the hour '0' should be '12'
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var Settings, settings, currentad;
;(function(){
	var settingsitems = [], module_name = 'settings';
	function add(a) { settingsitems.push(a); }
	/*['quality', 0, function () {
		Hooks.run('sheet', {
			name: 'quality',
			title: translate('quality'),
		});
	}],*/
	add(['Mudeer '+$.b, function () {
		return 'Web Framework';
	}, function () {
		open('https://github.com/xorasan/mudeer', '_blank');
	}, 'iconmudeer']);
	if (Config.repo) {
		add([Config.appname+' '+388, function () {
			return Config.sub;
		}, function () {
			open(Config.repo, '_blank');
		}, '/e.png']);
	}
	add(['timeformat', function () {
		var is24 = preferences.get(24, 1);
		return [is24 ? 'hours24' : 'hours12'];
	}, function () {
		var is24 = preferences.get(24, 1);
		if (is24) preferences.set(24, 0);
		else preferences.set(24, 1);
	}, 'icontimer']);
	add(['calendar', function () {
		var isgregorian = preferences.get(26, 1);
		return [isgregorian ? 'gregorian' : 'hijri'];
	}, function () {
		var isgregorian = preferences.get(26, 1);
		if (isgregorian) preferences.set(26, 0);
		else preferences.set(26, 1);
	}, 'icondaterange']);
	add(['largetext', function () {
		var largetext = preferences.get(9, 1);
		webapp.textsize();
		return [largetext ? 'on' : 'off'];
	}, function () {
		preferences.set(9, preferences.get(9, 1) ? 0 : 1);
	}, 'iconformatsize']);
	var settingslist, keys;
	Settings = settings = {
		get_dom_keys: function () {
			return keys;
		},
		adaaf: function (name, getvalue, onpress, icon) { // add
			settingsitems.push([name, getvalue, onpress, icon]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { // get
			return settingsitems[uid];
		},
		jaddad: function (uid) { // update
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.title$t = item[0];
				obj.icon = item[3];
				if (body instanceof Array) obj.body$t = body[0];
				else obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === module_name)
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) { Sidebar.set({
			uid: module_name,
			title: translate( module_name ),
			icon: 'iconsettings',
		}); }
		keys = view.mfateeh(module_name);
		settingslist = list( keys.list ).idprefix(module_name)
						.listitem('settingsitem')
						.grid(3);
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
	});
	Hooks.set('viewready', function (args) {
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Settings',
				ctrl: 1,
				alt: 1,
				k: 'p',
				i: 'iconsettings', // TODO icons module should generate variables like icon_settings
				c: function () {
					Hooks.run('view', module_name);
				}
			});
		}
		if (args.name == module_name) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
				webapp.header([[module_name], 0, 'iconsettings']);
			softkeys.list.basic(settingslist);
			softkeys.set(K.en, function () {
				settingslist.press(K.en);
			});
			softkeys.set(K.bs, function () {
				backstack.back();
			});
			/* TEST
			* this can be automated by giving a function to view.?set?
			*
			* view should autocall this function on restore
			* it can find functions by looping
			* */
			settingslist.select(undefined, 0);
			settingslist.set_focus(1, 1);
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { // force rtl
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { // force ltr
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { // apply to parent
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	/*
	* detect language direction, 0-ltr, 1-rtl, 2-mixed
	* */
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ےا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		}, 'icontranslate');
	});
	xlate = translate;
})();
/*
* props ending in $h use innerhtml
* ... $t use [i18n]
* */
var Templates, templates, namaavij;
;(function(){
	var index = {};
	Templates = templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		has_property: function (o, prop) {
			for (var i in o) {
				var name = i.split('$')[0];
				if (name == prop)
					return o[i];
			}
			return false;
		},
		set: function (clone, o, template) {
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				/* TODO document why this is so
				* this doesn't let you specify i18n in templates :(
				* cleanup previous mess from i18n
				* */
				if (isundef(o[i+'$t'])) {
					if (keys[i].dataset.i18n) {
						innertext(keys[i], '');
						delete keys[i].dataset.i18n;
					}
				}
				var is_icon = !isundef( o[i+'$icon'] );
				var is_image = !isundef( o[i+'$image'] );
				var has_time = i+'$time';
				if (!isundef( o[has_time] )) {
					if (isundef( o[has_time] )) {
						popdata(keys[i], 'time');
						innertext(keys[i], '');
					} else
						setdata(keys[i], 'time', o[has_time]);
				}
				if ( !isundef(o[i]) || !isundef(o[i+'$h']) || !isundef(o[i+'$t']) || is_icon || is_image ) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { // dataset.time...
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else // improve how this is handled
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else // improve how this is handled
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { // raw HTML mode
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (['icon', 'eqonah'].includes(i) || is_icon || is_image) { // create SVG inside or img if src = /...
						var icon_src = o[i];
						if (is_icon || is_image) {
							icon_src = o[i+'$icon'] || o[i+'$image'];
						}
						if (isstr(icon_src) && icon_src.length) {
							keys[i].hidden = 0;
							if (icon_src.startsWith('/') || is_image) {
								innerhtml(keys[i], '<img src="'+icon_src+'" />');
							} else {
								var e = icons.querySelector('#'+icon_src);
								if (e)
									keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
							}
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'], trjm = o[i+'$t'];
						if (!isundef(html)) {
							innerhtml(keys[i], html);
						} else if (!isundef(trjm)) {
							keys[i].dataset.i18n = trjm;
						} else {
							innertext(keys[i], o[i]);
						}
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		/*
		* you can pass either an element or a name that's already indexed
		*
		* if only element is specified, then its clone is returned
		*
		* if parent is also specified then it inserts the clone under parent
		* and returns a function that accepts {options} to setup the clone
		*
		* before can be a child under parent to insert before, else appends
		*
		* id can be used to reuse old elements
		* */
		get: function (element, parent, before, id) {
			if (isstr(element)) element = index[element];
			if (!(element instanceof HTMLElement)) {
				$.log.e( 'templates.get element not found', arguments );
				return false;
			}
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		/* replace element with a template
		*
		*/
		replace_with: function (element, replacement) {
			if (isstr(replacement)) replacement = index[ replacement ];
			if (!(element instanceof HTMLElement)) return false;
			if (!(replacement instanceof HTMLElement)) return false;
			var clone, template;
			clone = replacement.cloneNode(true),
			template = clone.dataset.template,
			delete clone.dataset.template,
			clone.hidden = 0;
			element.replaceWith(clone);
			return function (o) {
				return templates.set(clone, o, template);
			};
		},
		/*
		* indexes any htm elements marked with [template=<name>]
		* */
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
	namaavij = templates;
	namaavij.axav = namaavij.get;
})();
/* TODO
* .row1 should be animated
* simplify this module with better logic
*/
/* FEATURES
* <element>.on_focus_prev() triggered when K.up is pressed on an element
* <element>.on_focus_next() triggered when K.dn is pressed on an element
* all keyups are pd'd, fig out logic for keydowns in .press
* modifiers now do work! 13 sep 2023
*/
var Softkeys, softkeys, K, P;
;(function(){
	K = { // key code names
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var global_keys = ['f1', 'f2', 'f5', 'escape', K.sl, K.sr], debug_softkeys = 0;
	var hfizM = {}, M = {}, // mapped keys
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else // check parent's parent
				return removableparent(parent);
		}
	},
	updatekey = function (uid) {
		var parent, o = {}, classes = '', args = M[uid];
		if (!args) return;
		if (args.length === 1 || args.hidden || args.h) o.hidden = 1;
		var callback = args[0] || args.callback;
		var k = args.key || uid;
		if (callback) o.onclick = function (e) {
			if (index[k]) index[k].blur(); // prevent focus
			var key = e ? e.key : undefined;
			callback(key, e);
		};
		o.name = args.name || args.n || '';
		o.label = args[1] || args.label || args.l || '';
		o.icon = args[2] || args.icon || args.i;
		o.status = args[3] || args.status || args.s;
		if (o.icon === false) {
			o.name = k;
		}
		if (!isarr(args)) { // only .add API
			o.key = (args.ctrl ? 'ctrl ' : '')
						+ (args.alt ? 'alt ' : '')
						+ (args.shift ? 'shift ' : '')
						+ (args.key || uid)
						;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		var before = 0;
		if (args.first) {
			before = parent.firstElementChild;
		}
		if (args.last) {
			before = parent.lastElementChild;
		}
		index[k] = templates.get('skbutton', parent, before, o.id)(o);
		skdots.hidden = totalvisible() ? 0 : 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	/*
	* putting these inside a function keeps them unique
	* */
	P.empty = function () {
		if (debug_softkeys) $.log.w('Softkeys.P.empty');
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			Softkeys.showhints();
			return 1;
		}/*, '#', 'iconhelp'*/];
		Softkeys.update();
	},
	Softkeys = softkeys = {
		P: P,
		K: K,
		saveto: 7,
		/* clear previous map explicitly, .map doesn't clear it by default
		* */
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1 : undefined;
			softkeys.update();
		} },
		talaf: function (name) { // TODO deprecate, NEW remove
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				Softkeys.update();
				Backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function (time) {
			delete softkeysui.dataset.hidden;
			setdata(softkeysui, 'shown', 1);
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				Preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				popdata(softkeysui, 'shown');
				softkeysui.dataset.hidden = 1;
			}, time || 2500);
		},
		/* remember one or more actions which you can recall later
		* you can also forget stored actions
		* */
		hfiz: function (name) { // remember
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { // recall
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { // forget
			hfizM = {};
			return softkeys;
		},
		/*
		* update a single key definition in M
		* status 0normal 1selected 2disabled
		* */
		set: function (name, callback, label, icon, status) { // TODO deprecate for add
			if (name) {
				if (isarr(name)) {
					name.forEach(function (n, i) {
						var labeli = label;
						if (isarr(label)) labeli = label[i];
						var iconi = icon;
						if (isarr(icon)) iconi = icon[i];
						if (i)
						adaaf(n, callback, name[0], iconi, status);
						else
						adaaf(n, callback);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				Softkeys.update(name);
				Backstack.set('softkeys', M);
			}
			return this;
		},
		add: function (o) { // use this instead of .set
			/* key uid is based on mods + keyname
			properties
			uid generated, you can later use it to remove keys
			n name
			h hidden
			i icon
			l label
			s status
			k key
			c cb callback
			first: keeps this softkey at the top
			last: keeps this softkey at the bottom
			*/
			o.callback = o.callback || o.c || o.cb;
			o.key = tolower(o.key || o.k);
			if ( isfun(o.callback) && isstr(o.key) ) {
				o.uid = (o.ctrl ? 1 : 0) +'-'+
						(o.alt ? 1 : 0) +'-'+
						(o.shift ? 1 : 0) +'-'+
						o.key;
				M[ o.uid ] = o;
				updatekey(o.uid);
				Backstack.set('softkeys', M);
			}
			return this;
		},
		remove: function (uid) { // use this instead of .talaf
			this.talaf(uid);
		},
		/*
		* preset P.<name>
		* callbacks {enter: callback}
		* */
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
		},
		press: function (k, e, longpress) {
			var caught, pd = function () { preventdefault(e); };
			kraw = k;
			if (isstr(k)) k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' ||
					(e && e.ctrlKey && ['r', 'ر'].includes(k))
				) {
				history.go();
			}
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			var left_key = K.lf,
				right_key = K.rt;
			if ((a instanceof HTMLTextAreaElement) || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {
				} else {
				}
			}
			if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a.contentEditable == 'true')
			&& a.type != 'range') {
				editmode = 1;
				if (a.contentEditable == 'true') {
					dir = translate.direction(a.innerText);
				} else {
					dir = translate.direction(a.value);
				}
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
				if ( isfun(a.on_focus_prev) && (k == K.up || k == left_key) ) {
					caught = 1;
					pd();
					a.on_focus_prev();
					return;
				}
				if ( isfun(a.on_focus_next) && (k == K.dn || k == right_key) ) {
					caught = 1;
					pd();
					a.on_focus_next();
					return;
				}
			}
			var length = 0, selectionStart = 0;
			/* TODO test left/right keys on buttons and single line inputs
			* always allow using up/down keys to move between fields
			* left/right should detect language direction
			* */
			if (editmode) {
				var event_type = e ? e.type : '';
				if (a.contentEditable == 'true') {
					length = a.textContent.length;
					selectionStart = getSelection().baseOffset;
				} else {
					length = a.value.length;
					selectionStart = a.selectionStart;
				}
				var atend = (length === selectionStart),
					atstart = (0 === selectionStart);
				if ( atstart && (k == K.up || (k == left_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { // MERGE ?
					if ( isfun(a.on_focus_prev) ) { caught = 1; pd(); a.on_focus_prev(); return; }
					caught = focusprev(a), pd();
				}
				if ( atend && (k == K.dn || (k == right_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { // MERGE ?
					if ( isfun(a.on_focus_next) ) { caught = 1; pd(); a.on_focus_next(); return; }
					caught = focusnext(a), pd();
				}
				else
				if (k == K.en && e.shiftKey && a.uponshiftenter) {
					if (event_type == 'keyup') a.uponshiftenter(atstart, atend);
					pd();
				}
				else if (k == K.en && !e.shiftKey && a.uponenter) {
					if (event_type == 'keyup') a.uponenter (atstart, atend);
					pd();
				}
			}
			else if (a) {
				if ( is_navigable( a )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up || k == left_key) caught = focusprev(a), pd();
					if (k == K.dn || k == right_key) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			/* if text field isn't empty, disable arrow key handling
			* K.bs is managed by KaiOS
			* */
			if (editmode && !length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						/*Hooks.run('back'), webapp.blur(), */pd();
				}
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			/* if defined key has ctrl yes; then just in that case let it through
			*/
			var let_through, callback = mmm ? mmm[0] : 0;
			var event = e || {};
			var uid = (event.ctrlKey?1:0) +'-'+ (event.altKey?1:0) +'-'+ (event.shiftKey?1:0) +'-'+ k;
			if (M[uid]) {
				mmm = M[uid];
				callback = mmm.callback;
				let_through = 1;
			}
			if ( (!editmode || e.altKey || let_through || global_keys.includes(k)) && mmm && isfun(callback)
			) {
				caught = callback(k, e, e && e.type, longpress);
				if ( caught ) pd(); // prevent default if true is returned
			} else {
				/*if (k == K.dn) {
					webapp.scrollx(40);
					pd();
				}
				if (k == K.up) {
					webapp.scrollx(-40);
					pd();
				}
				if (k == K.rt) {
					webapp.scrolltobottom();
					pd();
				}
				if (k == K.lf) {
					webapp.scrolltotop();
					pd();
				}*/
			}
			if (isundef(caught) || caught == 1) { // true|1|undef = yes; 0|false = no
				var softkey_element = elementbyid( 'sk'+k );
				if (softkey_element) {
					setdata(softkey_element, 'hawm', 1);
					$.taxeer('sk'+k, function () {
						popdata(softkey_element, 'hawm');
					}, 400);
				}
			}
		},
	};
	Softkeys.get_main_height = function () {
		return skmain.offsetHeight;
	};
	Softkeys.showhints();
	Softkeys.M = function () {
		return M;
	};
	var shadow_visible = 1;
	Softkeys.hide_shadow = function () {
		if (shadow_visible) {
			shadow_visible = 0;
			setcss(softkeysui, 'background', '0');
		} else {
			shadow_visible = 1;
			setcss(softkeysui, 'background', '');
		}
	};
	var dots_visible = 1;
	Softkeys.hide_dots = function () {
		if (dots_visible) {
			dots_visible = 0;
			ixtaf(softkeys_backstack);
		} else {
			dots_visible = 1;
			izhar(softkeys_backstack);
		}
	};
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	Softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-590)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement;
		if (a && (a instanceof HTMLInputElement
		|| a.contentEditable == 'true'
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			Softkeys.showhints();
		} else {
			Softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skdots.onclick = function () {
			Softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var len = a.value.trim().length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) Webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) Webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else Webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		var key = (e.key||'').toLowerCase();
		Hooks.rununtilconsumed('softkey', [key, e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && Softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var c = args[0],
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.icon)
				k.icon.remove();
			if (!o.label && !o.icon)
				c.hidden = 1;
		}
	});
	Hooks.set_first('restore', function (args) {
		$.log.w( 'Softkeys restore hook' );
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	Hooks.set('backstack', function (level) {
		softkeys_backstack.querySelectorAll('span').forEach(function (o, i) {
			o.hidden = i > level;
		});
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	var softkeys_list_debug = 0;
	softkeys.list = {
		/*
		* if LV is undefined, it clears these keys
		* */
		basic: function (LV) {
			if (softkeys_list_debug) $.log.w('softkeys.list.basic', LV);
			if (LV) {
				Softkeys.add({ n: 'Select',
					k: K.en,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.press(K.en);
							e && e.preventDefault();
						}
					}
				});
				Softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.up();
						e && e.preventDefault();
					}
				});
				Softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.down();
						e && e.preventDefault();
					}
				});
				Softkeys.add({
					k: K.rt,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.right();
							e && e.preventDefault();
						}
					},
				});
				Softkeys.add({
					k: K.lf,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.left();
							e && e.preventDefault();
						}
					},
				});
			} else {
				Softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var Sheet, sheet;
;(function(){
	var index = {}, header, container, active_sheet_name, active_sheet_uid, active_args, active_keys, new_list,
		before_okay,
		ae, murakkaz;
	Sheet = sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { // currently active sheet TODO deprecate
			return active_sheet_name === name;
		},
		is_active: function (name) {
			return active_sheet_name === name;
		},
		get_active: function () {
			return active_sheet_name;
		},
		get_active_uid: function () {
			return active_sheet_uid;
		},
		get_active_title: function () {
			return header.innerText;
		},
		get_title: function () {
			return header.innerText;
		},
		set_title: function (text) {
			return this.header(text);
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (isarr(text)) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else {
				delete headerui.dataset.i18n;
				header.innerText = '';
				header.hidden = 1;
			}
		},
		hide: function () {
			$.log.w( 'Sheet hide' );
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			active_sheet_name =
			active_sheet_uid =
			active_args =
			active_keys =
			new_list =
			before_okay = undefined;
		},
		set_before_okay: function (cb) {
			before_okay = cb;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			active_args = args;
			var name = args.name || args.n,
				title = args.title || args.t || '',
				uid = args.uid || args.u,
				minqabl = args.minqabl || args.before_okay || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal || args.a,
				init = args.init || args.i,
				keys;
			name = name || 'list_sheet';
			new_list; // passed as 3rd arg to hooks
			args.n = args.name = name;
			args.u = args.uid = uid;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				active_sheet_name = name;
				active_sheet_uid = uid;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					active_keys = keys = templates.keys(container);
					if (name == 'list_sheet') {
						new_list = list( keys.list ).listitem( 'list_sheet_item' ).idprefix( 'list_sheet_item' );
						new_list.after_set = function (o, c, k) {
							if (o.count) izhar(k.count_tag); else ixtaf(k.count_tag);
						};
						init && init( keys, uid, args, new_list );
						var original_callback = callback;
						callback = function () {
							if (isfun(original_callback)) original_callback(new_list);
						};
					} else {
						init && init( keys, uid, args );
					}
					Hooks.run('sheet-ready', args, keys, new_list);
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			var original_okay = function () {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				Hooks.run('sheet-okay', args, keys, new_list);
				Hooks.run('sheet-anyway', args, keys, new_list);
				Webapp.blur();
				Hooks.run('back');
			};
			Sheet.okay = function () {
				if (isfun(before_okay)) {
					Sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						original_okay(args || keys);
					});
				} else {
					original_okay();
				}
			};
			Sheet.bardaa();
			if (isfun(minqabl)) {
				Sheet.okay = function (args) {
					Sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						original_okay(args || keys);
					});
				};
			}
			Sheet.cancel = function () {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				Hooks.run('sheet-cancel', args, keys, new_list);
				Hooks.run('sheet-anyway', args, keys, new_list);
				Webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		Sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
	Hooks.set('backstacksheet', function (args) {
		Webapp.dimmer(400);
		Softkeys.clear();
		if (args.callback || args.c) {
			Softkeys.set(K.sl, function () {
				Sheet.okay && Sheet.okay();
			}, 0, 'icondone');
		}
		Softkeys.set(K.sr, function () {
			Sheet.cancel && Sheet.cancel();
		}, 0, 'iconarrowback');
		Sheet.show(args);
	});
	Hooks.set('backstack-crumbs', function (crumbs) {
		if (!crumbs.is_sheet) {
			if (!isundef(active_sheet_uid)) { // a sheet was active previously
				Hooks.run('sheet-cancel', active_args, active_keys, new_list);
				Hooks.run('sheet-anyway', active_args, active_keys, new_list);
			}
			Sheet.hide(); // clear active sheet name and uid + okay/cancel funcs
			Webapp.blur();
		}
	});
})();
function open_list_sheet(args, init, callback) { // string, fn( list ), fn( )
	var name, uid;
	if (typeof args === 'string')
		args = {
			name: args,
		};
	var new_list;
	Backstack.sheet({
		n: 'list_sheet', // TODO make this default if no n, add searchbox
		t: name,
		u: args.u || args.uid,
		i: function (k) {
			new_list = list( k.list ).listitem( 'list_sheet_item' ).idprefix( 'list_sheet_item' );
			new_list.after_set = function (o, c, k) {
				if (o.count) izhar(k.count_tag); else ixtaf(k.count_tag);
			};
			if (isfun(init)) init(new_list);
		},
		c: function () {
			if (isfun(callback)) callback(new_list);
		}
	});
}
var Themes, themes;
;(function(){
	var K, P, settingsuid, settings_contrast_uid, current = 0, contrast = 0, debug_themes = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryxd:'#151515',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#c6c6c6',
			secondary: '#d6d6d6',
			secondaryd: '#e1e1e1',
			secondaryxd:'#e5e5e5',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#d9d9d9',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentxt: 'rgba(0, 67, 113, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
		2: {
			status: 'rgba(0,0,0,0.7)',
			statusm: 'rgba(0,0,0,0.35)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#555',
			secondary: '#444',
			secondaryd: '#333',
			secondaryt: 'rgba(60,60,60,0.8)',
			tertiaryl: '#777',
			tertiary: '#666',
			tertiaryd: '#555',
			tertiaryt: 'rgba(83,83,83,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		3: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentxt: 'rgba(0, 67, 113, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	function set_theme_with_contrast(theme) {
			if ( theme ) { // white
				themes.set(1);
			} else { // black
				themes.set(0);
			}
	}
	Themes = themes = {
		/* in preferences (using localStorage), use this key to remember theme
		* */
		saveto: 19,
		saveto_contrast: '19c',
		/* +changes the theme if only the theme name is provided
		* theme is a string, refers to an object inside store
		* this objects contains key:value pairs
		* that refer to slang css variables
		*
		* +if only theme & key are provided and not value
		* assumes that key is an object representing theme
		*
		* +if key and value are also provided
		* inside a store.theme, set a key to value
		* */
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme]) {
					dynamicstyle.innerHTML = updatetheme(store[theme]);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
				}
			}
			if (arglen === 2) {
				store[theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		/* if only one arg is provided, assume it's the key
		* */
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			if (debug_themes) $.log.w( 'Themes toggle', current );
			current = current ? 0 : 1;
			set_theme_with_contrast(current);
			Preferences.set(Themes.saveto, current);
			settings.jaddad(settingsuid);
		},
	};
	function darken_hex_color(hexColor, threshold = 180, factor = 0.7) {
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
		if (luminance > threshold) {
			const darkenedR = Math.round(r * factor);
			const darkenedG = Math.round(g * factor);
			const darkenedB = Math.round(b * factor);
			const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
			return darkenedHex;
		}
		return hexColor;
	}
	Themes.darken_hex_color = darken_hex_color;
	function brighten_hex_color(hexColor, threshold = 180, factor = 0.7) {
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
		if (luminance < threshold) {
			const darkenedR = Math.round(r / factor);
			const darkenedG = Math.round(g / factor);
			const darkenedB = Math.round(b / factor);
			const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
			return darkenedHex;
		}
		return hexColor;
	}
	Themes.brighten_hex_color = brighten_hex_color;
	function generate_predictable_color(text = '') {
		var hash = 0;
		for (var i = 0; i < text.length; i++) {
			hash = text.charCodeAt(i) + ((hash << 5) - hash);
			hash &= hash; // fix for potential negative hash values
		}
		return '#' + ('00000' + (hash & 0xFFFFFF).toString(16)).slice(-6).toUpperCase();
	}
	Themes.generate_predictable_color = generate_predictable_color;
	Hooks.set('ready', function () {
		if (preferences) {
			current = preferences.get(themes.saveto, 1) || 0;
			contrast = preferences.get(themes.saveto_contrast, 1) || 0;
		}
		set_theme_with_contrast(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			current = iswhite ? 1 : 0;
			set_theme_with_contrast(current);
			return [ iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
		}, 'icontheme');
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, // key names
		P = softkeys.P; // presets
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Theme',
				k: 'i',
				ctrl: 1,
				alt: 1,
				i: 'icontheme',
				c: function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}
			});
		}
	});
})();
var Dialog, dialog;
;(function(){
	var current_name, current_uid;
	Dialog = dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
			current_name = undefined;
			current_uid = undefined;
		},
		get_name: function () {
			return current_name;
		},
		get_uid: function () {
			return current_uid;
		},
		set_message: function (m) {
			var k = templates.keys(dialogui);
			innertext(k.message, '');
			if (isarr(m)) {
				setdata(k.message, 'i18n', message || '');
				translate.update(dialogui);
			} else {
				innertext(k.message, m);
			}
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				name = args.name || args.n ,
				uid = args.uid || args.u ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ,
				multiline = args.multiline,
				input_element;
			current_name = args.n = args.name = name;
			current_uid = args.u = args.uid = uid;
			k.input.value = '';
			k.textarea.value = '';
			if (multiline) {
				ixtaf(k.input);
				izhar(k.textarea);
				input_element = k.textarea;
			} else {
				ixtaf(k.textarea);
				izhar(k.input);
				input_element = k.input;
			}
			Dialog.onshow && Dialog.onshow(name);
			Hooks.run('dialog-ready', args, k);
			Dialog.okay = function () {
				var answer = input_element.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			Dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			input_element.value = answer || '';
			attribute(input_element, 'max', max || 0);
			if (question) {
				input_element.hidden = 0;
				input_element.focus();
			} else {
				input_element.hidden = 1;
			}
			this.set_message( message );
		},
	};
	Hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		Webapp.dimmer(600);
		Softkeys.clear();
		Softkeys.add({ k: K.sl,
			i: 'icondone',
			c: function () {
				if (date) datepicker.okay && datepicker.okay(args);
				else Dialog.okay && Dialog.okay();
			}
		});
		Softkeys.add({ k: K.sr,
			i: 'iconclose',
			c: function () {
				if (date) datepicker.cancel && datepicker.cancel();
				else Dialog.cancel && Dialog.cancel();
			}
		});
		if (date) datepicker.show(args);
		else Dialog.show(args);
	});
	Hooks.set('backstack-crumbs', function (crumbs) {
		if (!crumbs.is_dialog) {
			if (!isundef(current_uid)) { // a dialog was active previously
				Hooks.run('dialog-cancel', current_name, current_uid);
				Hooks.run('dialog-anyway', current_name, current_uid);
			}
			Dialog.hide(); // clear active dialog name and uid + okay/cancel funcs
		}
	});
})();
/*
* when a touchscreen is detected, this adds an option to settings that allows
* switching between dpad and touch navigation
*
* with dpad navigation, touch also emulates a dpad
* */
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		/*if (preferences) webapptouchdir = preferences.get(saveto, 1) || 1;
		webapp.touchdir = webapptouchdir;
		settingsuid = settings.adaaf('webapptouchdir', function () {
			webapptouchdir = preferences.get(saveto, 1);
			webapp.touchdir = webapptouchdir;
			if (!webapptouchdir) delete document.body.dataset.align;
			return [webapptouchdir ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});*/
	});
	Hooks.set('keyup', function (e) {
		var k = tolower(e.key||'');
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) // held for 250ms or more
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, // -1 left, 0 center, 1 right
		edgeend = 0, lastitem, lamsahbar,
		softkeystouchdpad = 1; // 1 hor, 2 vert
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; // free direction lock
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { // right
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { // left
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { // down
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { // up
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		if (path)
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { // started on an edge
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { // ended on a diff edge
				if (edgestart === 1) pager.yameen(); // right
				else if (edgestart === -1) pager.shimaal(); // left
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		if (isarr(args[2]))
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) Softkeys.showhints();
			Softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		Softkeys.showhints();
	});
	/* TAJREEBI lamsah bar yameen
	* when touch inside the bar, pop it in
	* whatever button is under the pointer, make its label appear next to it
	* */
	var lamsahbarimtahan = function () {
	};
	listener(skhints, ['touchstart'/*, 'mousedown'*/], function (e) {
		preventdefault(e);
		lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
	});
	listener(skhints, ['touchmove'/*, 'mousemove'*/], function (e) {
		if (lamsahbar) {
			lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
			var ch = skhints.children, el,
				path;
			if (e.type == 'touchmove') {
				path = raycast(lamsahbar[0], lamsahbar[1]);
			}
			for (var i in ch) {
				if ( ch.hasOwnProperty(i) ) {
					for (j in path) {
						if (path[j] == ch[i]) el = ch[i];
					}
				}
			}
			if (el) {
				for (var i in ch) {
					if ( ch.hasOwnProperty(i) ) {
						if (path[j] != el) popdata(ch[i], 'hawm');
					}
				}
				setdata(el, 'hawm', 1);
			}
			setdata(skhints, 'held', 1);
		}
	});
	listener(skhints, ['touchend', 'touchcancel'/*, 'mouseup', 'mouseleave'*/], function (e) {
		var ch = skhints.children, path;
		if (e.type == 'touchend' && lamsahbar) {
			path = raycast(lamsahbar[0], lamsahbar[1]);
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				for (j in path) {
					if (path[j] == ch[i]) {
						if (ch[i] && e.type == 'touchend') {
							ch[i].click();
						}
					}
				}
			}
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				popdata(ch[i], 'hawm');
			}
		}
		popdata(skhints, 'held');
		lamsahbar = 0;
	});
	/*Hooks.set('templateset', function (args) {
		var c = args[0], // clone
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			listener(c, ['touchmove', 'mouseenter'], function () {
				if (lamsahbar) {
					lamsahbar = c;
					$.log(c.id);
					setdata(c, 'hawm', 1);
				}
			});
		}
	});*/
})();
var persistent_profiles, persistent_profiles_list, persistent_profiles_data;
;(function(){
	'use strict';
	var ppuid = 1;
	persistent_profiles = {
		get: function (uid) {
			var o = persistent_profiles_data[uid];
			o.uid = uid;
			return o;
		},
		set: function (o) {
			var uid = o.uid || ++ppuid;
			delete o.uid;
			persistent_profiles_data[ uid ] = o;
			persistent_profiles_list.set({
				uid: uid,
				name: o.displayname || '@'+o.name,
				text: o.bio,
			});
			persistent_profiles.save();
		},
		pop: function () { // remove
			var element = persistent_profiles_list.get_item_element();
			if (element) {
				var uid = getdata( element, 'uid' );
				persistent_profiles_list.remove_by_uid( uid );
				delete persistent_profiles_data[ uid ];
				persistent_profiles.save();
			}
		},
		edit: function () {
			var element = persistent_profiles_list.get_item_element();
			if (element) {
				var uid = getdata( element, 'uid' );
				Hooks.run('sheet', {
					n: 'persistent_profile',
					u: uid,
				});
			}
		},
		populate: function (l) {
			for (var i in persistent_profiles_data) {
				var o = persistent_profiles_data[i];
				l.set({
					uid: i,
					title: o.displayname || '@'+o.name,
					subtitle: o.bio,
				});
			}
		},
		save: function () {
			Files.set.file('pub/profiles.w', Weld.encode_config( persistent_profiles_data ));
		},
		load: function () {
			var text = Files.get.file('pub/profiles.w').toString();
			persistent_profiles_data = Weld.decode_config( text );
			for (var i in persistent_profiles_data) {
				var o = persistent_profiles_data[i];
				ppuid = Math.max( ppuid, parseint(i) );
				persistent_profiles_list.set({
					uid: i,
					name: o.displayname || '@'+o.name,
					text: o.bio,
				});
			}
			$.log( 'pp uid is', ppuid );
		},
	};
	Hooks.set('ready', function () {
		var keys = View.dom_keys('persistent_profiles');
		persistent_profiles_list = List(keys.list).idprefix('perspro').listitem('msg');
		persistent_profiles.load();
	});
	function update_softkeys() {
		Softkeys.add({ n: 'Add',
			k: 'a',
			alt: 1,
			i: 'iconadd',
			cb: function () {
				Hooks.run('sheet', {
					n: 'persistent_profile',
				});
			},
		});
		Softkeys.add({ n: 'Remove',
			k: 'r',
			alt: 1,
			i: 'icondeleteforever',
			cb: function () {
				persistent_profiles.pop();
			},
		});
		Softkeys.add({ n: 'Edit',
			k: K.sl,
			alt: 1,
			i: 'iconedit',
			cb: function () {
				persistent_profiles.edit();
			},
		});
	}
	var pers_prof_keys;
	Hooks.set('sheet-ready', async function (args, k) { if (args.name == 'persistent_profile') {
		Sheet.set_title('Setup Persistent Profile');
		pers_prof_keys = k;
		k.name.focus();
		var o = persistent_profiles_data[ args.uid ];
		if (o) {
			k.uid.value = args.uid;
			k.name.value = o.name;
			k.displayname.value = o.displayname;
			k.bio.value = o.bio;
		}
	} });
	Hooks.set('sheet-okay', function (args, k) { if (args.name == 'persistent_profile') {
		persistent_profiles.set({
			uid: pers_prof_keys.uid.value,
			name: pers_prof_keys.name.value,
			displayname: pers_prof_keys.displayname.value,
			bio: pers_prof_keys.bio.value,
		});
		pers_prof_keys = 0;
	} });
	Hooks.set('viewready', function (arg_one) {
		if (View.is_active('persistent_profiles')) {
			Webapp.header(['Persistent Profiles', 0, 'iconperson']);
			update_softkeys();
		}
	});
})();
var servers_list, directmsgs_list, profile_list, profile_controls, convo_list, main;
;(function(){
	'use strict';
	var counter_interval = [], is_running, profile_selection_list, selected_profile;
	main = {
		start: function () {
			this.stop();
			is_running = 1;
			var old;
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(0);
				servers_list.set({ uid: 0, count: 1+(old.count || 0) });
			}, 150) );
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(2);
				servers_list.set({ uid: 2, count: 1+(old.count || 0) });
			}, 300) );
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(4);
				servers_list.set({ uid: 4, count: 1+(old.count || 0) });
			}, 600) );
		},
		stop: function () {
			is_running = 0;
			counter_interval.forEach(function (o) {
				clearInterval( o );
			});
		}
	};
	var profile_colors = {
	};
	function set_profile_picture(o, c, k) {
		if (o.image)
			setcss(k.icon, 'background-image', 'url('+o.image+')');
		if ( o.name ) {
			if (!getcss(k.icon, 'background-image')) {
				var random_color = profile_colors[o.name] = profile_colors[o.name] || generate_hex_code();
				setcss(k.icon, 'background-image', 'url(./propics/0.png)');
				setcss(k.icon, 'background-color', random_color);
			}
		}
	}
	function generate_random_text(limit) {
		var words = ['origami', 'pink', 'flower', 'pot', 'seed', 'wojak', 'girl',
			'boy', 'man', 'woman', 'walnut', 'black', 'sin', 'pure', 'joy', 'angry'], text = [];
		var limit = limit || 2;
		for (var i = 0; i < limit; ++i) {
			text.push( words[ parseint(words.length * Math.random()) ] );
		}
		return text.join(' ');
	}
	function generate_hex_code() {
		let randomHexCode = "#"
		while( randomHexCode.length < 7 ) {
			randomHexCode += (Math.floor(Math.random() * 15).toString(16) )
		}
		return randomHexCode;
	}
	Hooks.set('ready', function () {
		Webapp.header();
		Webapp.status_bar_padding();
		Softkeys.hide_shadow();
		Softkeys.hide_dots();
		var keys = View.dom_keys('main');
		keys.attachment.onclick = function (e) {
			open_list_sheet('Select Profile', function (l) {
				profile_selection_list = l;
				l.on_selection = function (o) {
					selected_profile = persistent_profiles.get(o.uid);
					innertext(keys.selected_profile_name, selected_profile.name);
					Sheet.cancel();
				};
				persistent_profiles.populate( profile_selection_list );
			});
		};
		listener(keys.text_input, 'keyup', function (e) {
			if (!e.shiftKey && e.key == 'Enter') {
				var name;
				if (selected_profile) {
					name = selected_profile.name
				}
				convo_list.set({
					name,
					text: keys.text_input.value,
				});
				keys.text_input.value = '';
			}
		});
		profile_list = List(keys.profile_list).idprefix('profile').listitem('control').prevent_focus(1);
		[
			{ icon: 'iconperson' },
		].forEach(function (o, i) {
			profile_list.set({ icon: o.icon });
		});
		profile_controls = List(keys.profile_controls).idprefix('control').listitem('control')
							.prevent_focus(1);
		[
			{ icon: 'iconm' },
			{ icon: 'iconheadset' },
			{ icon: 'iconsettings' },
		].forEach(function (o, i) {
			profile_controls.set({ icon: o.icon });
		});
		directmsgs_list = List(keys.directmsgs).idprefix('directmsg').listitem('directmsg').prevent_focus(1);
		directmsgs_list.title('DIRECT MESSAGES');
		directmsgs_list.after_set = function (o, c, k) {
			set_profile_picture(o, c, k);
			if (o.count === 0)
				k.count.hidden = !o.count;
			if (o.state)
				setdata(k.status, 'state', o.state);
			else
				popdata(k.status, 'state');
			directmsgs_list.select_silently( directmsgs_list.selected );
			$.taxeer('update-discord-button-count', function () {
				var total_count = 0;
				directmsgs_list.adapter.each(function (o) {
					if (o.count) total_count++;
				});
				servers_list.set({ uid: 0, count: total_count });
			});
		};
		[
			{ image: '1.JPG' , name: 'Path_X_finder' , count: 3 , subtitle: 'thanks…' },
			{ image: '2.JPG' , name: 'iamcool' , state: 1 , subtitle: 'well, so where are we going with our lives…' },
			{ image: '3.JPG' , name: 'serpeuf' , subtitle: 'DUDE!!! you are so late 💀😟' },
			{ },
			{ },
			{ },
		].forEach(function (o, i) {
			var image;
			if (o.image)
				image = './propics/'+o.image;
			directmsgs_list.set({
				name: o.name || generate_random_text(2),
				subtitle: o.subtitle,
				image: image,
				count: o.count,
				state: o.state,
			});
		});
		directmsgs_list.select(0);
		servers_list = List(keys.servers).idprefix('server').listitem('server').prevent_focus(1);
		servers_list.after_set = function (o, c, k) {
			if (o.image)
				setcss(k.icon, 'background-image', 'url('+o.image+')');
			var badge = Templates.has_property(o, 'badge')
			if (badge === 0)
				k.badge.hidden = !badge;
			if (o.count === 0)
				k.count.hidden = !o.count;
			servers_list.select_silently( servers_list.selected );
		};
		[
			{ image: '01.WEBP' },
			{ image: '02.JPG', badge: 'icontv' },
			{ image: '03.PNG' },
			{ image: '04.WEBP' },
			{ image: '05.WEBP' }
		].forEach(function (o, i) {
			servers_list.set({
				image: './servers/'+o.image,
				badge$icon: o.badge,
				count: o.count,
			});
		});
		servers_list.select(0);
		convo_list = List(keys.conversation).idprefix('convo').listitem('msg').prevent_focus(1);
		convo_list.after_set = function (o, c, k) {
			set_profile_picture(o, c, k);
		};
		[
			{ image: '3.JPG' , name: 'serpeuf' , subtitle: 'DUDE!!! you are so late 💀😟' },
			{ name: 'Condoriano' , subtitle: 'overslept… bloody weird dream…' },
			{ image: '3.JPG' , name: 'serpeuf' , subtitle: 'alright, alright…\nYou joining?' },
			{ name: 'Condoriano' , subtitle: 'yeah, yeah… fine…' },
		].forEach(function (o, i) {
			var image;
			if (o.image)
				image = './propics/'+o.image;
			convo_list.set({
				name: o.name || generate_random_text(2),
				text: o.subtitle,
				image: image,
				time: o.time || Time.now(),
				state: o.state,
			});
		});
		convo_list.select(0);
	});
	function update_softkeys() {
		Softkeys.add({ n: is_running ? 'Stop' : 'Start',
			k: 's',
			alt: 1,
			i: is_running ? 'iconstop' : 'iconplayarrow',
			cb: function () {
				if (is_running) main.stop(); else main.start();
				update_softkeys();
			}
		});
		Softkeys.add({ n: 'Persistent Profiles',
			k: 'y',
			alt: 1,
			ctrl: 1,
			i: 'iconperson',
			cb: function () {
				Hooks.run('view', 'persistent_profiles');
			}
		});
		Softkeys.remove(K.sr);
	}
	Hooks.set('viewready', function (arg_one) {
		if (View.is_active('main')) {
			update_softkeys();
		}
	});
})();

