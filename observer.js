/**
 * Observer pattern
 *
 * @autor frontend.zorro@gmail.com
 * @constructor
 */
var Subject = function() {

	var _this = this;
	
	this.subscribers = [];

	this.publish = function() {
		for (var i = 0; i < _this.subscribers.length; i += 1)
			_this.subscribers[i](arguments);
	};

	this.subscribe = function(callback) {
		this.subscribers.push(callback);
	};
};