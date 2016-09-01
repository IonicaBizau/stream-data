
# stream-data

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/stream-data.svg)](https://www.npmjs.com/package/stream-data) [![Downloads](https://img.shields.io/npm/dt/stream-data.svg)](https://www.npmjs.com/package/stream-data) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Collect the stream data and send it into a callback function.

## :cloud: Installation

```sh
$ npm i --save stream-data
```


## :clipboard: Example



```js
const streamData = require("stream-data")
    , fs = require("fs")
    ;

// Create a read stream
let str = fs.createReadStream(`${__dirname}/input.txt`);

// Pass the stream object and a callback function
streamData(str, (err, data) => {
    console.log(err || data);
});
```

## :memo: Documentation


### `streamData(str, cb)`
Collect the stream data and send it into a callback function.

#### Params
- **Stream** `str`: The stream object.
- **Function** `cb`: The callback function.

#### Return
- **Stream** The stream object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
