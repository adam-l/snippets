# Subject
Snippet for implementation of publish/subscribe pattern.

## Purpose of snippet
This snippet is especially useful when working with self-implemented MVC patterns and it was originaly created for that reason.

## Usage
The usage of the snippet is rather fairly easy and doesn't need a lot of explanation.
 
### Creating a new instance:
```javascript
var someEvent = new Subject();
```

### Subscribing a reciever:
```javascript
someEvent.subscribe(subscriber);
```

### Notifying subscribers:
```javascript
someEvent.publish();
```

### Unscribing a reciever:
```javascript
someEvent.unbscribe(subscriber);
```