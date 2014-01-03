# Subject
Snippet for implementation of publish/subscribe pattern.

## Purpose of snippet
This snippet is especially useful when used with self implemented MVC patterns and was the main cause for creating it.

## Usage
The usage of the snippet is rather fairly easy and doesn't need a lot of explanation.
 
__Creating a new instance:__
```javascript
var someEvent = new Subject();
```

__Subscribing a reciever:__
```javascript
someEvent.subscribe(subscriber);
```

__Notifying subscribers:__
```javascript
someEvent.publish();
```

__Unscribing a reciever:__
```javascript
someEvent.unbscribe(subscriber);
```