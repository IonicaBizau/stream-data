"use strict";

const tester = require("tester")
    , streamData = require("..")
    , EventEmitter = require("events")
    ;

tester.describe("stream-data", t => {

    t.should("collect data", cb => {
        debugger
        let str = new EventEmitter();
        let ret = streamData(str, (err, data) => {
            debugger
            t.expect(err).toBe(null);
            t.expect(data).toBe("Hello World!");
            cb();
        });

        t.expect(ret).toBe(str);

        str.emit("data", "Hello");
        setTimeout(() => str.emit("data", " "), 3);
        setTimeout(() => str.emit("data", "!"), 5);
        setTimeout(() => str.emit("data", "World"), 4);
        setTimeout(() => str.emit("end"), 6);
    });

    t.should("handle errors", cb => {
        let str = new EventEmitter();
        streamData(str, (err, data) => {
            t.expect(() => { throw err; }).toThrow(/nasty error/);
            t.expect(data).toBe("Hello World!");
            cb();
        });

        str.emit("data", "Hello");
        setTimeout(() => str.emit("data", " "), 3);
        setTimeout(() => str.emit("error", new Error("nasty error")), 2);
        setTimeout(() => str.emit("data", "!"), 5);
        setTimeout(() => str.emit("data", "World"), 4);
        setTimeout(() => str.emit("end"), 6);
    });
});
