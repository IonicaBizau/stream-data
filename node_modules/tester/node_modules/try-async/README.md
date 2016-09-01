
# try-async

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/try-async.svg)](https://www.npmjs.com/package/try-async) [![Downloads](https://img.shields.io/npm/dt/try-async.svg)](https://www.npmjs.com/package/try-async) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Async try-catch like interface for Node.js.

## :cloud: Installation

```sh
$ npm i --save try-async
```


## :clipboard: Example



```js
const tryAsync = require("try-async");

tryAsync(() => {
    setTimeout(() => {
        throw new Error("Nasty error thrown from async stuff.");
    }, 10);
}, (err) => {
    console.log("Something went wrong: " + err);
    // => Something went wrong: Error: Nasty error thrown from async stuff.
});
```

## :memo: Documentation


### `tryAsync(fn, _catch)`
Runs the input function into an async `try-catch` (using Node.js domains).

#### Params
- **Function** `fn`: The function to run.
- **Function** `_catch`: The catch function.

#### Return
- **Domain** The `Domain` object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`test-youtube-api`](https://github.com/IonicaBizau/test-youtube-api)—Test Youtube API NodeJS module
 - [`tester`](https://github.com/IonicaBizau/tester#readme)—Unit testing made simple and fun: flat colors and emoji in your tests.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
