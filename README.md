# compose-async

Like [compose](https://lodash.com/docs#flowRight), but functions can return [Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```javascript
var composeAsync = require('compose-async');

var deleteFriends = composeAsync(deleteUsersFriends, findUserById);

deleteFriends(3453).then((deletedFriends) => /* ... */);

```


```javascript
var composeAsync = require('compose-async');

function reverse(srt) {
  return str.split('').reverse().join('');
}

function nl2br(str) {
  return str.replace(/\n/g, '<br />');
}

function fetchLinkTitles(str) {
  // Async magic
  return new Promise(function(resolve, reject) {
    resolve(str.replace(
      /https?:\/\/\S+/g,
      'California man bitten while taking selfie with rattlesnake'
    ));
  });
}

const defaultTextFormatter = composeAsync(nl2br, fetchLinkTitles, reverse);

defaultTextFormatter('hello everyone check this site out https://www.reddit.com/').then(function(formatted) {
  console.log(formatted); // ekanselttar htiw eifles gnikat elihw nettib nam ainrofilaC tuo etis siht kcehc enoyreve olleh
});
```
