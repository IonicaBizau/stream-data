"use strict";

/**
 * streamData
 * Collect the stream data and send it into a callback function.
 *
 * @name streamData
 * @function
 * @param {Stream} str The stream object.
 * @param {Function} cb The callback function.
 * @returns {Stream} The stream object.
 */
module.exports = function streamData (str, cb) {

    if (cb) {
        let buffer = []
          , error = null
          ;

        str.on("data", chunk => buffer.push(chunk));
        str.on("error", err => error = err);
        str.on("end", () => cb(error, buffer.join(""), buffer));
    }

    return str;
};
