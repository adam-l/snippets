/**
 * Subject
 *
 * Implementation of the publish/subscribe pattern.
 * Useful especially when used with self implemented MVC patterns.
 *
 * @autor frontend.zorro@gmail.com
 * @constructor
 * @return {Subject} The new Subject object
 */
function Subject() {

	if (!(this instanceof Subject)) {
		return new Subject();
	}

	var subscribers = [];

	/** Notify all the subsribers */
	function publish() {
		var i = subscribers.length;

		while (i--) {
			subscribers[i](arguments);
		}
	}

	/**
	 * Subsribe a reciever interested in the topic
	 * @param {object} subscriber - Function that will be fired
	 */
	function subscribe(subscriber) {
		subscribers.push(subscriber);
	}

	/**
	 * Unscribe a reciever no longer interested in the topic
	 * @param {object} subscriber - Function that no longer should be fired
	 */
	function unscribe(subscriber) {
		var i = subscribers.length;

		while (i--) {
			if (subscribers[i] === subscriber) {
				subscribers.splice(i, 1);
			}
		}
	}

	return {
		'publish': publish,
		'subscribe': subscribe,
		'unscribe': unscribe
	}
};