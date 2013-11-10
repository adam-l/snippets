/**
 * Subject
 *
 * Implementation of the observer pattern.
 * Useful especially when used with self implemented MVC patterns.
 *
 * @autor frontend.zorro@gmail.com
 * @constructor
 * @return 
 */
function Subject() {

	if (!(this instanceof Subject)) {
		return new Subject();
	}

	var subscribers = [];

	this.publish = function() {
		var i = subscribers.length;

		while (i--) {
			subscribers[i](arguments);
		}
	};

	this.subscribe = function(callback) {
		subscribers.push(callback);
	};
};