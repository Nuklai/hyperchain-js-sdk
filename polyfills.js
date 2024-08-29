// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

(function (global) {
  const isBrowser =
    typeof window !== "undefined" && typeof window.document !== "undefined";

  // Ensure BigInt serialization for JSON
  if (typeof BigInt !== "undefined" && !BigInt.prototype.toJSON) {
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };
  }

  // Buffer polyfill for browsers
  if (isBrowser && typeof global.Buffer === "undefined") {
    global.Buffer = {
      from: function (data, encoding) {
        if (typeof data === "string") {
          if (encoding === "hex") {
            return Uint8Array.from(
              data.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
            );
          }
          return new TextEncoder().encode(data);
        }
        if (data instanceof Uint8Array) {
          return data;
        }
        throw new Error("Unsupported data type for Buffer.from");
      },
      alloc: function (size) {
        return new Uint8Array(size);
      },
      isBuffer: function (obj) {
        return obj instanceof Uint8Array;
      },
    };
  }

  // Process polyfill for browsers
  if (isBrowser && typeof global.process === "undefined") {
    global.process = {
      env: {},
      nextTick: function (callback) {
        setTimeout(callback, 0);
      },
    };
  }
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {}
);