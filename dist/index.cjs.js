"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod3) => function __require() {
  return mod3 || (0, cb[__getOwnPropNames(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod3, isNodeMode, target) => (target = mod3 != null ? __create(__getProtoOf(mod3)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod3 || !mod3.__esModule ? __defProp(target, "default", { value: mod3, enumerable: true }) : target,
  mod3
));
var __toCommonJS = (mod3) => __copyProps(__defProp({}, "__esModule", { value: true }), mod3);

// polyfills.js
var import_buffer, import_process, import_events;
var init_polyfills = __esm({
  "polyfills.js"() {
    "use strict";
    import_buffer = require("buffer");
    import_process = __toESM(require("process"), 1);
    import_events = __toESM(require("events"), 1);
    if (typeof globalThis !== "undefined") {
      globalThis.Buffer = import_buffer.Buffer;
      globalThis.process = import_process.default;
      globalThis.events = import_events.default;
    } else if (typeof globalThis !== "undefined") {
      globalThis.Buffer = import_buffer.Buffer;
      globalThis.process = import_process.default;
      globalThis.events = import_events.default;
    } else if (typeof window !== "undefined") {
      window.Buffer = import_buffer.Buffer;
      window.process = import_process.default;
      window.events = import_events.default;
    }
  }
});

// node_modules/randombytes/index.js
var require_randombytes = __commonJS({
  "node_modules/randombytes/index.js"(exports2, module2) {
    init_polyfills();
    module2.exports = require("crypto").randomBytes;
  }
});

// node_modules/create-hash/index.js
var require_create_hash = __commonJS({
  "node_modules/create-hash/index.js"(exports2, module2) {
    init_polyfills();
    module2.exports = require("crypto").createHash;
  }
});

// node_modules/create-hmac/index.js
var require_create_hmac = __commonJS({
  "node_modules/create-hmac/index.js"(exports2, module2) {
    init_polyfills();
    module2.exports = require("crypto").createHmac;
  }
});

// node_modules/browserify-sign/browser/algorithms.json
var require_algorithms = __commonJS({
  "node_modules/browserify-sign/browser/algorithms.json"(exports2, module2) {
    module2.exports = {
      sha224WithRSAEncryption: {
        sign: "rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      "RSA-SHA224": {
        sign: "ecdsa/rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      sha256WithRSAEncryption: {
        sign: "rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      "RSA-SHA256": {
        sign: "ecdsa/rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      sha384WithRSAEncryption: {
        sign: "rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      "RSA-SHA384": {
        sign: "ecdsa/rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      sha512WithRSAEncryption: {
        sign: "rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA512": {
        sign: "ecdsa/rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA1": {
        sign: "rsa",
        hash: "sha1",
        id: "3021300906052b0e03021a05000414"
      },
      "ecdsa-with-SHA1": {
        sign: "ecdsa",
        hash: "sha1",
        id: ""
      },
      sha256: {
        sign: "ecdsa",
        hash: "sha256",
        id: ""
      },
      sha224: {
        sign: "ecdsa",
        hash: "sha224",
        id: ""
      },
      sha384: {
        sign: "ecdsa",
        hash: "sha384",
        id: ""
      },
      sha512: {
        sign: "ecdsa",
        hash: "sha512",
        id: ""
      },
      "DSA-SHA": {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      "DSA-SHA1": {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      DSA: {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      "DSA-WITH-SHA224": {
        sign: "dsa",
        hash: "sha224",
        id: ""
      },
      "DSA-SHA224": {
        sign: "dsa",
        hash: "sha224",
        id: ""
      },
      "DSA-WITH-SHA256": {
        sign: "dsa",
        hash: "sha256",
        id: ""
      },
      "DSA-SHA256": {
        sign: "dsa",
        hash: "sha256",
        id: ""
      },
      "DSA-WITH-SHA384": {
        sign: "dsa",
        hash: "sha384",
        id: ""
      },
      "DSA-SHA384": {
        sign: "dsa",
        hash: "sha384",
        id: ""
      },
      "DSA-WITH-SHA512": {
        sign: "dsa",
        hash: "sha512",
        id: ""
      },
      "DSA-SHA512": {
        sign: "dsa",
        hash: "sha512",
        id: ""
      },
      "DSA-RIPEMD160": {
        sign: "dsa",
        hash: "rmd160",
        id: ""
      },
      ripemd160WithRSA: {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      "RSA-RIPEMD160": {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      md5WithRSAEncryption: {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      },
      "RSA-MD5": {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      }
    };
  }
});

// node_modules/browserify-sign/algos.js
var require_algos = __commonJS({
  "node_modules/browserify-sign/algos.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    module2.exports = require_algorithms();
  }
});

// node_modules/pbkdf2/lib/precondition.js
var require_precondition = __commonJS({
  "node_modules/pbkdf2/lib/precondition.js"(exports2, module2) {
    init_polyfills();
    var MAX_ALLOC = Math.pow(2, 30) - 1;
    module2.exports = function(iterations, keylen) {
      if (typeof iterations !== "number") {
        throw new TypeError("Iterations not a number");
      }
      if (iterations < 0) {
        throw new TypeError("Bad iterations");
      }
      if (typeof keylen !== "number") {
        throw new TypeError("Key length not a number");
      }
      if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) {
        throw new TypeError("Bad key length");
      }
    };
  }
});

// node_modules/pbkdf2/lib/default-encoding.js
var require_default_encoding = __commonJS({
  "node_modules/pbkdf2/lib/default-encoding.js"(exports2, module2) {
    init_polyfills();
    var defaultEncoding;
    if (globalThis.process && globalThis.process.browser) {
      defaultEncoding = "utf-8";
    } else if (globalThis.process && globalThis.process.version) {
      pVersionMajor = parseInt(process.version.split(".")[0].slice(1), 10);
      defaultEncoding = pVersionMajor >= 6 ? "utf-8" : "binary";
    } else {
      defaultEncoding = "utf-8";
    }
    var pVersionMajor;
    module2.exports = defaultEncoding;
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports2, module2) {
    init_polyfills();
    var buffer = require("buffer");
    var Buffer7 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer7.from && Buffer7.alloc && Buffer7.allocUnsafe && Buffer7.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer7(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer7.prototype);
    copyProps(Buffer7, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer7(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer7(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer7(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/pbkdf2/lib/to-buffer.js
var require_to_buffer = __commonJS({
  "node_modules/pbkdf2/lib/to-buffer.js"(exports2, module2) {
    init_polyfills();
    var Buffer7 = require_safe_buffer().Buffer;
    module2.exports = function(thing, encoding, name) {
      if (Buffer7.isBuffer(thing)) {
        return thing;
      } else if (typeof thing === "string") {
        return Buffer7.from(thing, encoding);
      } else if (ArrayBuffer.isView(thing)) {
        return Buffer7.from(thing.buffer);
      } else {
        throw new TypeError(name + " must be a string, a Buffer, a typed array or a DataView");
      }
    };
  }
});

// node_modules/pbkdf2/lib/sync.js
var require_sync = __commonJS({
  "node_modules/pbkdf2/lib/sync.js"(exports2, module2) {
    init_polyfills();
    var sizes = {
      md5: 16,
      sha1: 20,
      sha224: 28,
      sha256: 32,
      sha384: 48,
      sha512: 64,
      rmd160: 20,
      ripemd160: 20
    };
    var createHmac = require_create_hmac();
    var Buffer7 = require_safe_buffer().Buffer;
    var checkParameters = require_precondition();
    var defaultEncoding = require_default_encoding();
    var toBuffer = require_to_buffer();
    function pbkdf2(password, salt, iterations, keylen, digest) {
      checkParameters(iterations, keylen);
      password = toBuffer(password, defaultEncoding, "Password");
      salt = toBuffer(salt, defaultEncoding, "Salt");
      digest = digest || "sha1";
      var DK = Buffer7.allocUnsafe(keylen);
      var block1 = Buffer7.allocUnsafe(salt.length + 4);
      salt.copy(block1, 0, 0, salt.length);
      var destPos = 0;
      var hLen = sizes[digest];
      var l2 = Math.ceil(keylen / hLen);
      for (var i = 1; i <= l2; i++) {
        block1.writeUInt32BE(i, salt.length);
        var T2 = createHmac(digest, password).update(block1).digest();
        var U2 = T2;
        for (var j2 = 1; j2 < iterations; j2++) {
          U2 = createHmac(digest, password).update(U2).digest();
          for (var k2 = 0; k2 < hLen; k2++) T2[k2] ^= U2[k2];
        }
        T2.copy(DK, destPos);
        destPos += hLen;
      }
      return DK;
    }
    module2.exports = pbkdf2;
  }
});

// node_modules/pbkdf2/lib/async.js
var require_async = __commonJS({
  "node_modules/pbkdf2/lib/async.js"(exports2, module2) {
    init_polyfills();
    var Buffer7 = require_safe_buffer().Buffer;
    var checkParameters = require_precondition();
    var defaultEncoding = require_default_encoding();
    var sync = require_sync();
    var toBuffer = require_to_buffer();
    var ZERO_BUF;
    var subtle = globalThis.crypto && globalThis.crypto.subtle;
    var toBrowser = {
      sha: "SHA-1",
      "sha-1": "SHA-1",
      sha1: "SHA-1",
      sha256: "SHA-256",
      "sha-256": "SHA-256",
      sha384: "SHA-384",
      "sha-384": "SHA-384",
      "sha-512": "SHA-512",
      sha512: "SHA-512"
    };
    var checks = [];
    function checkNative(algo) {
      if (globalThis.process && !globalThis.process.browser) {
        return Promise.resolve(false);
      }
      if (!subtle || !subtle.importKey || !subtle.deriveBits) {
        return Promise.resolve(false);
      }
      if (checks[algo] !== void 0) {
        return checks[algo];
      }
      ZERO_BUF = ZERO_BUF || Buffer7.alloc(8);
      var prom = browserPbkdf2(ZERO_BUF, ZERO_BUF, 10, 128, algo).then(function() {
        return true;
      }).catch(function() {
        return false;
      });
      checks[algo] = prom;
      return prom;
    }
    var nextTick;
    function getNextTick() {
      if (nextTick) {
        return nextTick;
      }
      if (globalThis.process && globalThis.process.nextTick) {
        nextTick = globalThis.process.nextTick;
      } else if (globalThis.queueMicrotask) {
        nextTick = globalThis.queueMicrotask;
      } else if (globalThis.setImmediate) {
        nextTick = globalThis.setImmediate;
      } else {
        nextTick = globalThis.setTimeout;
      }
      return nextTick;
    }
    function browserPbkdf2(password, salt, iterations, length, algo) {
      return subtle.importKey(
        "raw",
        password,
        { name: "PBKDF2" },
        false,
        ["deriveBits"]
      ).then(function(key) {
        return subtle.deriveBits({
          name: "PBKDF2",
          salt,
          iterations,
          hash: {
            name: algo
          }
        }, key, length << 3);
      }).then(function(res) {
        return Buffer7.from(res);
      });
    }
    function resolvePromise(promise, callback) {
      promise.then(function(out) {
        getNextTick()(function() {
          callback(null, out);
        });
      }, function(e) {
        getNextTick()(function() {
          callback(e);
        });
      });
    }
    module2.exports = function(password, salt, iterations, keylen, digest, callback) {
      if (typeof digest === "function") {
        callback = digest;
        digest = void 0;
      }
      digest = digest || "sha1";
      var algo = toBrowser[digest.toLowerCase()];
      if (!algo || typeof globalThis.Promise !== "function") {
        getNextTick()(function() {
          var out;
          try {
            out = sync(password, salt, iterations, keylen, digest);
          } catch (e) {
            return callback(e);
          }
          callback(null, out);
        });
        return;
      }
      checkParameters(iterations, keylen);
      password = toBuffer(password, defaultEncoding, "Password");
      salt = toBuffer(salt, defaultEncoding, "Salt");
      if (typeof callback !== "function") throw new Error("No callback provided to pbkdf2");
      resolvePromise(checkNative(algo).then(function(resp) {
        if (resp) return browserPbkdf2(password, salt, iterations, keylen, algo);
        return sync(password, salt, iterations, keylen, digest);
      }), callback);
    };
  }
});

// node_modules/pbkdf2/index.js
var require_pbkdf2 = __commonJS({
  "node_modules/pbkdf2/index.js"(exports2) {
    init_polyfills();
    var native = require("crypto");
    var checkParameters = require_precondition();
    var defaultEncoding = require_default_encoding();
    var toBuffer = require_to_buffer();
    function nativePBKDF2(password, salt, iterations, keylen, digest, callback) {
      checkParameters(iterations, keylen);
      password = toBuffer(password, defaultEncoding, "Password");
      salt = toBuffer(salt, defaultEncoding, "Salt");
      if (typeof digest === "function") {
        callback = digest;
        digest = "sha1";
      }
      if (typeof callback !== "function") throw new Error("No callback provided to pbkdf2");
      return native.pbkdf2(password, salt, iterations, keylen, digest, callback);
    }
    function nativePBKDF2Sync(password, salt, iterations, keylen, digest) {
      checkParameters(iterations, keylen);
      password = toBuffer(password, defaultEncoding, "Password");
      salt = toBuffer(salt, defaultEncoding, "Salt");
      digest = digest || "sha1";
      return native.pbkdf2Sync(password, salt, iterations, keylen, digest);
    }
    if (!native.pbkdf2Sync || native.pbkdf2Sync.toString().indexOf("keylen, digest") === -1) {
      exports2.pbkdf2Sync = require_sync();
      exports2.pbkdf2 = require_async();
    } else {
      exports2.pbkdf2Sync = nativePBKDF2Sync;
      exports2.pbkdf2 = nativePBKDF2;
    }
  }
});

// node_modules/browserify-cipher/index.js
var require_browserify_cipher = __commonJS({
  "node_modules/browserify-cipher/index.js"(exports2) {
    init_polyfills();
    var crypto3 = require("crypto");
    exports2.createCipher = exports2.Cipher = crypto3.createCipher;
    exports2.createCipheriv = exports2.Cipheriv = crypto3.createCipheriv;
    exports2.createDecipher = exports2.Decipher = crypto3.createDecipher;
    exports2.createDecipheriv = exports2.Decipheriv = crypto3.createDecipheriv;
    exports2.listCiphers = exports2.getCiphers = crypto3.getCiphers;
  }
});

// node_modules/diffie-hellman/index.js
var require_diffie_hellman = __commonJS({
  "node_modules/diffie-hellman/index.js"(exports2) {
    init_polyfills();
    var crypto3 = require("crypto");
    exports2.DiffieHellmanGroup = crypto3.DiffieHellmanGroup;
    exports2.createDiffieHellmanGroup = crypto3.createDiffieHellmanGroup;
    exports2.getDiffieHellman = crypto3.getDiffieHellman;
    exports2.createDiffieHellman = crypto3.createDiffieHellman;
    exports2.DiffieHellman = crypto3.DiffieHellman;
  }
});

// node_modules/browserify-sign/index.js
var require_browserify_sign = __commonJS({
  "node_modules/browserify-sign/index.js"(exports2) {
    "use strict";
    init_polyfills();
    var crypto3 = require("crypto");
    exports2.createSign = crypto3.createSign;
    exports2.Sign = crypto3.Sign;
    exports2.createVerify = crypto3.createVerify;
    exports2.Verify = crypto3.Verify;
  }
});

// node_modules/elliptic/package.json
var require_package = __commonJS({
  "node_modules/elliptic/package.json"(exports2, module2) {
    module2.exports = {
      name: "elliptic",
      version: "6.5.5",
      description: "EC cryptography",
      main: "lib/elliptic.js",
      files: [
        "lib"
      ],
      scripts: {
        lint: "eslint lib test",
        "lint:fix": "npm run lint -- --fix",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        test: "npm run lint && npm run unit",
        version: "grunt dist && git add dist/"
      },
      repository: {
        type: "git",
        url: "git@github.com:indutny/elliptic"
      },
      keywords: [
        "EC",
        "Elliptic",
        "curve",
        "Cryptography"
      ],
      author: "Fedor Indutny <fedor@indutny.com>",
      license: "MIT",
      bugs: {
        url: "https://github.com/indutny/elliptic/issues"
      },
      homepage: "https://github.com/indutny/elliptic",
      devDependencies: {
        brfs: "^2.0.2",
        coveralls: "^3.1.0",
        eslint: "^7.6.0",
        grunt: "^1.2.1",
        "grunt-browserify": "^5.3.0",
        "grunt-cli": "^1.3.2",
        "grunt-contrib-connect": "^3.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^5.0.0",
        "grunt-mocha-istanbul": "^5.0.2",
        "grunt-saucelabs": "^9.0.1",
        istanbul: "^0.4.5",
        mocha: "^8.0.1"
      },
      dependencies: {
        "bn.js": "^4.11.9",
        brorand: "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        inherits: "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    };
  }
});

// node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
  "node_modules/bn.js/lib/bn.js"(exports2, module2) {
    init_polyfills();
    (function(module3, exports3) {
      "use strict";
      function assert(val, msg) {
        if (!val) throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number || 0, base || 10, endian || "be");
        }
      }
      if (typeof module3 === "object") {
        module3.exports = BN;
      } else {
        exports3.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer7;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer7 = window.Buffer;
        } else {
          Buffer7 = require("buffer").Buffer;
        }
      } catch (e) {
      }
      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };
      BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };
      BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };
      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === "number") {
          return this._initNumber(number, base, endian);
        }
        if (typeof number === "object") {
          return this._initArray(number, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number.length) {
          if (base === 16) {
            this._parseHex(number, start, endian);
          } else {
            this._parseBase(number, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }
        if (number < 67108864) {
          this.words = [number & 67108863];
          this.length = 1;
        } else if (number < 4503599627370496) {
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert(number < 9007199254740992);
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le") return;
        this._initArray(this.toArray(), base, endian);
      };
      BN.prototype._initArray = function _initArray(number, base, endian) {
        assert(typeof number.length === "number");
        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var j2, w2;
        var off = 0;
        if (endian === "be") {
          for (i = number.length - 1, j2 = 0; i >= 0; i -= 3) {
            w2 = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        } else if (endian === "le") {
          for (i = 0, j2 = 0; i < number.length; i += 3) {
            w2 = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        }
        return this.strip();
      };
      function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        if (c >= 65 && c <= 70) {
          return c - 55;
        } else if (c >= 97 && c <= 102) {
          return c - 87;
        } else {
          return c - 48 & 15;
        }
      }
      function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
          r |= parseHex4Bits(string, index - 1) << 4;
        }
        return r;
      }
      BN.prototype._parseHex = function _parseHex(number, start, endian) {
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var off = 0;
        var j2 = 0;
        var w2;
        if (endian === "be") {
          for (i = number.length - 1; i >= start; i -= 2) {
            w2 = parseHexByte(number, start, i) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number.length - start;
          for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
            w2 = parseHexByte(number, start, i) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this.strip();
      };
      function parseBase(str2, start, end, mul) {
        var r = 0;
        var len = Math.min(str2.length, end);
        for (var i = start; i < len; i++) {
          var c = str2.charCodeAt(i) - 48;
          r *= mul;
          if (c >= 49) {
            r += c - 49 + 10;
          } else if (c >= 17) {
            r += c - 17 + 10;
          } else {
            r += c;
          }
        }
        return r;
      }
      BN.prototype._parseBase = function _parseBase(number, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod3 = total % limbLen;
        var end = Math.min(total, total - mod3) + start;
        var word = 0;
        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod3 !== 0) {
          var pow3 = 1;
          word = parseBase(number, i, number.length, base);
          for (i = 0; i < mod3; i++) {
            pow3 *= base;
          }
          this.imuln(pow3);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this.strip();
      };
      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      };
      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN.prototype.strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      BN.prototype.inspect = function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = function toString(base, padding2) {
        base = base || 10;
        padding2 = padding2 | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w2 = this.words[i];
            var word = ((w2 << off | carry) & 16777215).toString(16);
            carry = w2 >>> 24 - off & 16777215;
            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
            off += 2;
            if (off >= 26) {
              off -= 26;
              i--;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding2 !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c = this.clone();
          c.negative = 0;
          while (!c.isZero()) {
            var r = c.modn(groupBase).toString(base);
            c = c.idivn(groupBase);
            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding2 !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert(false, "Base should be between 2 and 36");
      };
      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
      };
      BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer7 !== "undefined");
        return this.toArrayLike(Buffer7, endian, length);
      };
      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, "byte array longer than desired length");
        assert(reqLength > 0, "Requested array length <= 0");
        this.strip();
        var littleEndian = endian === "le";
        var res = new ArrayType(reqLength);
        var b2, i;
        var q2 = this.clone();
        if (!littleEndian) {
          for (i = 0; i < reqLength - byteLength; i++) {
            res[i] = 0;
          }
          for (i = 0; !q2.isZero(); i++) {
            b2 = q2.andln(255);
            q2.iushrn(8);
            res[reqLength - i - 1] = b2;
          }
        } else {
          for (i = 0; !q2.isZero(); i++) {
            b2 = q2.andln(255);
            q2.iushrn(8);
            res[i] = b2;
          }
          for (; i < reqLength; i++) {
            res[i] = 0;
          }
        }
        return res;
      };
      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w2) {
          return 32 - Math.clz32(w2);
        };
      } else {
        BN.prototype._countBits = function _countBits(w2) {
          var t = w2;
          var r = 0;
          if (t >= 4096) {
            r += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r += 2;
            t >>>= 2;
          }
          return r + t;
        };
      }
      BN.prototype._zeroBits = function _zeroBits(w2) {
        if (w2 === 0) return 26;
        var t = w2;
        var r = 0;
        if ((t & 8191) === 0) {
          r += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r++;
        }
        return r;
      };
      BN.prototype.bitLength = function bitLength() {
        var w2 = this.words[this.length - 1];
        var hi2 = this._countBits(w2);
        return (this.length - 1) * 26 + hi2;
      };
      function toBitArray(num) {
        var w2 = new Array(num.bitLength());
        for (var bit = 0; bit < w2.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w2[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w2;
      }
      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for (var i = 0; i < this.length; i++) {
          var b2 = this._zeroBits(this.words[i]);
          r += b2;
          if (b2 !== 26) break;
        }
        return r;
      };
      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }
        return this.strip();
      };
      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN.prototype.or = function or2(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN.prototype.iuand = function iuand(num) {
        var b2;
        if (this.length > num.length) {
          b2 = num;
        } else {
          b2 = this;
        }
        for (var i = 0; i < b2.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b2.length;
        return this.strip();
      };
      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN.prototype.iuxor = function iuxor(num) {
        var a;
        var b2;
        if (this.length > num.length) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        for (var i = 0; i < b2.length; i++) {
          this.words[i] = a.words[i] ^ b2.words[i];
        }
        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = a.length;
        return this.strip();
      };
      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        }
        return this.strip();
      };
      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this.strip();
      };
      BN.prototype.iadd = function iadd(num) {
        var r;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        }
        var a, b2;
        if (this.length > num.length) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        var carry = 0;
        for (var i = 0; i < b2.length; i++) {
          r = (a.words[i] | 0) + (b2.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        return this;
      };
      BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a, b2;
        if (cmp > 0) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        var carry = 0;
        for (var i = 0; i < b2.length; i++) {
          r = (a.words[i] | 0) - (b2.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
          this.negative = 1;
        }
        return this.strip();
      };
      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a = self2.words[0] | 0;
        var b2 = num.words[0] | 0;
        var r = a * b2;
        var lo2 = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo2;
        for (var k2 = 1; k2 < len; k2++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i = k2 - j2 | 0;
            a = self2.words[i] | 0;
            b2 = num.words[j2] | 0;
            r = a * b2 + rword;
            ncarry += r / 67108864 | 0;
            rword = r & 67108863;
          }
          out.words[k2] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k2] = carry | 0;
        } else {
          out.length--;
        }
        return out.strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a = self2.words;
        var b2 = num.words;
        var o = out.words;
        var c = 0;
        var lo2;
        var mid;
        var hi2;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b2[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b2[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b2[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b3 = b2[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b2[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b2[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b2[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b2[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b2[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b2[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo2 = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi2 = Math.imul(ah0, bh0);
        var w0 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo2 = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi2 = Math.imul(ah1, bh0);
        lo2 = lo2 + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi2 = hi2 + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo2 = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi2 = Math.imul(ah2, bh0);
        lo2 = lo2 + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi2 = hi2 + Math.imul(ah1, bh1) | 0;
        lo2 = lo2 + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi2 = hi2 + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo2 = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi2 = Math.imul(ah3, bh0);
        lo2 = lo2 + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi2 = hi2 + Math.imul(ah2, bh1) | 0;
        lo2 = lo2 + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi2 = hi2 + Math.imul(ah1, bh2) | 0;
        lo2 = lo2 + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi2 = hi2 + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo2 = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi2 = Math.imul(ah4, bh0);
        lo2 = lo2 + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi2 = hi2 + Math.imul(ah3, bh1) | 0;
        lo2 = lo2 + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi2 = hi2 + Math.imul(ah2, bh2) | 0;
        lo2 = lo2 + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi2 = hi2 + Math.imul(ah1, bh3) | 0;
        lo2 = lo2 + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi2 = hi2 + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo2 = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi2 = Math.imul(ah5, bh0);
        lo2 = lo2 + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi2 = hi2 + Math.imul(ah4, bh1) | 0;
        lo2 = lo2 + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi2 = hi2 + Math.imul(ah3, bh2) | 0;
        lo2 = lo2 + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi2 = hi2 + Math.imul(ah2, bh3) | 0;
        lo2 = lo2 + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi2 = hi2 + Math.imul(ah1, bh4) | 0;
        lo2 = lo2 + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi2 = hi2 + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo2 = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi2 = Math.imul(ah6, bh0);
        lo2 = lo2 + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi2 = hi2 + Math.imul(ah5, bh1) | 0;
        lo2 = lo2 + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi2 = hi2 + Math.imul(ah4, bh2) | 0;
        lo2 = lo2 + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi2 = hi2 + Math.imul(ah3, bh3) | 0;
        lo2 = lo2 + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi2 = hi2 + Math.imul(ah2, bh4) | 0;
        lo2 = lo2 + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi2 = hi2 + Math.imul(ah1, bh5) | 0;
        lo2 = lo2 + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi2 = hi2 + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo2 = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi2 = Math.imul(ah7, bh0);
        lo2 = lo2 + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi2 = hi2 + Math.imul(ah6, bh1) | 0;
        lo2 = lo2 + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi2 = hi2 + Math.imul(ah5, bh2) | 0;
        lo2 = lo2 + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi2 = hi2 + Math.imul(ah4, bh3) | 0;
        lo2 = lo2 + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi2 = hi2 + Math.imul(ah3, bh4) | 0;
        lo2 = lo2 + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi2 = hi2 + Math.imul(ah2, bh5) | 0;
        lo2 = lo2 + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi2 = hi2 + Math.imul(ah1, bh6) | 0;
        lo2 = lo2 + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi2 = hi2 + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo2 = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi2 = Math.imul(ah8, bh0);
        lo2 = lo2 + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi2 = hi2 + Math.imul(ah7, bh1) | 0;
        lo2 = lo2 + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi2 = hi2 + Math.imul(ah6, bh2) | 0;
        lo2 = lo2 + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi2 = hi2 + Math.imul(ah5, bh3) | 0;
        lo2 = lo2 + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi2 = hi2 + Math.imul(ah4, bh4) | 0;
        lo2 = lo2 + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi2 = hi2 + Math.imul(ah3, bh5) | 0;
        lo2 = lo2 + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi2 = hi2 + Math.imul(ah2, bh6) | 0;
        lo2 = lo2 + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi2 = hi2 + Math.imul(ah1, bh7) | 0;
        lo2 = lo2 + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi2 = hi2 + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo2 = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi2 = Math.imul(ah9, bh0);
        lo2 = lo2 + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi2 = hi2 + Math.imul(ah8, bh1) | 0;
        lo2 = lo2 + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi2 = hi2 + Math.imul(ah7, bh2) | 0;
        lo2 = lo2 + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi2 = hi2 + Math.imul(ah6, bh3) | 0;
        lo2 = lo2 + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi2 = hi2 + Math.imul(ah5, bh4) | 0;
        lo2 = lo2 + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi2 = hi2 + Math.imul(ah4, bh5) | 0;
        lo2 = lo2 + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi2 = hi2 + Math.imul(ah3, bh6) | 0;
        lo2 = lo2 + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi2 = hi2 + Math.imul(ah2, bh7) | 0;
        lo2 = lo2 + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi2 = hi2 + Math.imul(ah1, bh8) | 0;
        lo2 = lo2 + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi2 = hi2 + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo2 = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi2 = Math.imul(ah9, bh1);
        lo2 = lo2 + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi2 = hi2 + Math.imul(ah8, bh2) | 0;
        lo2 = lo2 + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi2 = hi2 + Math.imul(ah7, bh3) | 0;
        lo2 = lo2 + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi2 = hi2 + Math.imul(ah6, bh4) | 0;
        lo2 = lo2 + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi2 = hi2 + Math.imul(ah5, bh5) | 0;
        lo2 = lo2 + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi2 = hi2 + Math.imul(ah4, bh6) | 0;
        lo2 = lo2 + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi2 = hi2 + Math.imul(ah3, bh7) | 0;
        lo2 = lo2 + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi2 = hi2 + Math.imul(ah2, bh8) | 0;
        lo2 = lo2 + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi2 = hi2 + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo2 = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi2 = Math.imul(ah9, bh2);
        lo2 = lo2 + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi2 = hi2 + Math.imul(ah8, bh3) | 0;
        lo2 = lo2 + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi2 = hi2 + Math.imul(ah7, bh4) | 0;
        lo2 = lo2 + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi2 = hi2 + Math.imul(ah6, bh5) | 0;
        lo2 = lo2 + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi2 = hi2 + Math.imul(ah5, bh6) | 0;
        lo2 = lo2 + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi2 = hi2 + Math.imul(ah4, bh7) | 0;
        lo2 = lo2 + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi2 = hi2 + Math.imul(ah3, bh8) | 0;
        lo2 = lo2 + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi2 = hi2 + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo2 = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi2 = Math.imul(ah9, bh3);
        lo2 = lo2 + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi2 = hi2 + Math.imul(ah8, bh4) | 0;
        lo2 = lo2 + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi2 = hi2 + Math.imul(ah7, bh5) | 0;
        lo2 = lo2 + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi2 = hi2 + Math.imul(ah6, bh6) | 0;
        lo2 = lo2 + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi2 = hi2 + Math.imul(ah5, bh7) | 0;
        lo2 = lo2 + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi2 = hi2 + Math.imul(ah4, bh8) | 0;
        lo2 = lo2 + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi2 = hi2 + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo2 = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi2 = Math.imul(ah9, bh4);
        lo2 = lo2 + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi2 = hi2 + Math.imul(ah8, bh5) | 0;
        lo2 = lo2 + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi2 = hi2 + Math.imul(ah7, bh6) | 0;
        lo2 = lo2 + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi2 = hi2 + Math.imul(ah6, bh7) | 0;
        lo2 = lo2 + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi2 = hi2 + Math.imul(ah5, bh8) | 0;
        lo2 = lo2 + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi2 = hi2 + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo2 = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi2 = Math.imul(ah9, bh5);
        lo2 = lo2 + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi2 = hi2 + Math.imul(ah8, bh6) | 0;
        lo2 = lo2 + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi2 = hi2 + Math.imul(ah7, bh7) | 0;
        lo2 = lo2 + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi2 = hi2 + Math.imul(ah6, bh8) | 0;
        lo2 = lo2 + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi2 = hi2 + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo2 = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi2 = Math.imul(ah9, bh6);
        lo2 = lo2 + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi2 = hi2 + Math.imul(ah8, bh7) | 0;
        lo2 = lo2 + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi2 = hi2 + Math.imul(ah7, bh8) | 0;
        lo2 = lo2 + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi2 = hi2 + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo2 = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi2 = Math.imul(ah9, bh7);
        lo2 = lo2 + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi2 = hi2 + Math.imul(ah8, bh8) | 0;
        lo2 = lo2 + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi2 = hi2 + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo2 = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi2 = Math.imul(ah9, bh8);
        lo2 = lo2 + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi2 = hi2 + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo2 = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi2 = Math.imul(ah9, bh9);
        var w18 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
          o[19] = c;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k2 = 0; k2 < out.length - 1; k2++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i = k2 - j2;
            var a = self2.words[i] | 0;
            var b2 = num.words[j2] | 0;
            var r = a * b2;
            var lo2 = r & 67108863;
            ncarry = ncarry + (r / 67108864 | 0) | 0;
            lo2 = lo2 + rword | 0;
            rword = lo2 & 67108863;
            ncarry = ncarry + (lo2 >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k2] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k2] = carry;
        } else {
          out.length--;
        }
        return out.strip();
      }
      function jumboMulTo(self2, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self2, num, out);
      }
      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x2, y2) {
        this.x = x2;
        this.y = y2;
      }
      FFTM.prototype.makeRBT = function makeRBT(N3) {
        var t = new Array(N3);
        var l2 = BN.prototype._countBits(N3) - 1;
        for (var i = 0; i < N3; i++) {
          t[i] = this.revBin(i, l2, N3);
        }
        return t;
      };
      FFTM.prototype.revBin = function revBin(x2, l2, N3) {
        if (x2 === 0 || x2 === N3 - 1) return x2;
        var rb = 0;
        for (var i = 0; i < l2; i++) {
          rb |= (x2 & 1) << l2 - i - 1;
          x2 >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N3) {
        for (var i = 0; i < N3; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N3, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N3);
        for (var s = 1; s < N3; s <<= 1) {
          var l2 = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l2);
          var itwdf = Math.sin(2 * Math.PI / l2);
          for (var p2 = 0; p2 < N3; p2 += l2) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j2 = 0; j2 < s; j2++) {
              var re2 = rtws[p2 + j2];
              var ie2 = itws[p2 + j2];
              var ro2 = rtws[p2 + j2 + s];
              var io2 = itws[p2 + j2 + s];
              var rx = rtwdf_ * ro2 - itwdf_ * io2;
              io2 = rtwdf_ * io2 + itwdf_ * ro2;
              ro2 = rx;
              rtws[p2 + j2] = re2 + ro2;
              itws[p2 + j2] = ie2 + io2;
              rtws[p2 + j2 + s] = re2 - ro2;
              itws[p2 + j2 + s] = ie2 - io2;
              if (j2 !== l2) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n, m2) {
        var N3 = Math.max(m2, n) | 1;
        var odd = N3 & 1;
        var i = 0;
        for (N3 = N3 / 2 | 0; N3; N3 = N3 >>> 1) {
          i++;
        }
        return 1 << i + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N3) {
        if (N3 <= 1) return;
        for (var i = 0; i < N3 / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N3 - i - 1];
          rws[N3 - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N3 - i - 1];
          iws[N3 - i - 1] = -t;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws2, N3) {
        var carry = 0;
        for (var i = 0; i < N3 / 2; i++) {
          var w2 = Math.round(ws2[2 * i + 1] / N3) * 8192 + Math.round(ws2[2 * i] / N3) + carry;
          ws2[i] = w2 & 67108863;
          if (w2 < 67108864) {
            carry = 0;
          } else {
            carry = w2 / 67108864 | 0;
          }
        }
        return ws2;
      };
      FFTM.prototype.convert13b = function convert13b(ws2, len, rws, N3) {
        var carry = 0;
        for (var i = 0; i < len; i++) {
          carry = carry + (ws2[i] | 0);
          rws[2 * i] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i = 2 * len; i < N3; ++i) {
          rws[i] = 0;
        }
        assert(carry === 0);
        assert((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N3) {
        var ph = new Array(N3);
        for (var i = 0; i < N3; i++) {
          ph[i] = 0;
        }
        return ph;
      };
      FFTM.prototype.mulp = function mulp(x2, y2, out) {
        var N3 = 2 * this.guessLen13b(x2.length, y2.length);
        var rbt = this.makeRBT(N3);
        var _2 = this.stub(N3);
        var rws = new Array(N3);
        var rwst = new Array(N3);
        var iwst = new Array(N3);
        var nrws = new Array(N3);
        var nrwst = new Array(N3);
        var niwst = new Array(N3);
        var rmws = out.words;
        rmws.length = N3;
        this.convert13b(x2.words, x2.length, rws, N3);
        this.convert13b(y2.words, y2.length, nrws, N3);
        this.transform(rws, _2, rwst, iwst, N3, rbt);
        this.transform(nrws, _2, nrwst, niwst, N3, rbt);
        for (var i = 0; i < N3; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N3);
        this.transform(rwst, iwst, rmws, _2, N3, rbt);
        this.conjugate(rmws, _2, N3);
        this.normalize13b(rmws, N3);
        out.negative = x2.negative ^ y2.negative;
        out.length = x2.length + y2.length;
        return out.strip();
      };
      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN.prototype.imuln = function imuln(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w2 = (this.words[i] | 0) * num;
          var lo2 = (w2 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w2 / 67108864 | 0;
          carry += lo2 >>> 26;
          this.words[i] = lo2 & 67108863;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN.prototype.pow = function pow3(num) {
        var w2 = toBitArray(num);
        if (w2.length === 0) return new BN(1);
        var res = this;
        for (var i = 0; i < w2.length; i++, res = res.sqr()) {
          if (w2[i] !== 0) break;
        }
        if (++i < w2.length) {
          for (var q2 = res.sqr(); i < w2.length; i++, q2 = q2.sqr()) {
            if (w2[i] === 0) continue;
            res = res.mul(q2);
          }
        }
        return res;
      };
      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
          var carry = 0;
          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }
          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }
          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }
          this.length += s;
        }
        return this.strip();
      };
      BN.prototype.ishln = function ishln(bits) {
        assert(this.negative === 0);
        return this.iushln(bits);
      };
      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === "number" && bits >= 0);
        var h2;
        if (hint) {
          h2 = (hint - hint % 26) / 26;
        } else {
          h2 = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h2 -= s;
        h2 = Math.max(0, h2);
        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h2); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this.strip();
      };
      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q2 = 1 << r;
        if (this.length <= s) return false;
        var w2 = this.words[s];
        return !!(w2 & q2);
      };
      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
          var mask = 67108863 ^ 67108863 >>> r << r;
          this.words[this.length - 1] &= mask;
        }
        return this.strip();
      };
      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0) return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
          this.words[i] -= 67108864;
          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
      };
      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
          }
        }
        return this.strip();
      };
      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w2;
        var carry = 0;
        for (i = 0; i < num.length; i++) {
          w2 = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w2 -= right & 67108863;
          carry = (w2 >> 26) - (right / 67108864 | 0);
          this.words[i + shift] = w2 & 67108863;
        }
        for (; i < this.length - shift; i++) {
          w2 = (this.words[i + shift] | 0) + carry;
          carry = w2 >> 26;
          this.words[i + shift] = w2 & 67108863;
        }
        if (carry === 0) return this.strip();
        assert(carry === -1);
        carry = 0;
        for (i = 0; i < this.length; i++) {
          w2 = -(this.words[i] | 0) + carry;
          carry = w2 >> 26;
          this.words[i] = w2 & 67108863;
        }
        this.negative = 1;
        return this.strip();
      };
      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b2 = num;
        var bhi = b2.words[b2.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b2 = b2.ushln(shift);
          a.iushln(shift);
          bhi = b2.words[b2.length - 1] | 0;
        }
        var m2 = a.length - b2.length;
        var q2;
        if (mode !== "mod") {
          q2 = new BN(null);
          q2.length = m2 + 1;
          q2.words = new Array(q2.length);
          for (var i = 0; i < q2.length; i++) {
            q2.words[i] = 0;
          }
        }
        var diff = a.clone()._ishlnsubmul(b2, 1, m2);
        if (diff.negative === 0) {
          a = diff;
          if (q2) {
            q2.words[m2] = 1;
          }
        }
        for (var j2 = m2 - 1; j2 >= 0; j2--) {
          var qj = (a.words[b2.length + j2] | 0) * 67108864 + (a.words[b2.length + j2 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a._ishlnsubmul(b2, qj, j2);
          while (a.negative !== 0) {
            qj--;
            a.negative = 0;
            a._ishlnsubmul(b2, 1, j2);
            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }
          if (q2) {
            q2.words[j2] = qj;
          }
        }
        if (q2) {
          q2.strip();
        }
        a.strip();
        if (mode !== "div" && shift !== 0) {
          a.iushrn(shift);
        }
        return {
          div: q2 || null,
          mod: a
        };
      };
      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod3, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod3 = res.mod.neg();
            if (positive && mod3.negative !== 0) {
              mod3.iadd(num);
            }
          }
          return {
            div,
            mod: mod3
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod3 = res.mod.neg();
            if (positive && mod3.negative !== 0) {
              mod3.isub(num);
            }
          }
          return {
            div: res.div,
            mod: mod3
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN.prototype.mod = function mod3(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero()) return dm.div;
        var mod3 = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod3.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN.prototype.modn = function modn(num) {
        assert(num <= 67108863);
        var p2 = (1 << 26) % num;
        var acc = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p2 * acc + (this.words[i] | 0)) % num;
        }
        return acc;
      };
      BN.prototype.idivn = function idivn(num) {
        assert(num <= 67108863);
        var carry = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var w2 = (this.words[i] | 0) + carry * 67108864;
          this.words[i] = w2 / num | 0;
          carry = w2 % num;
        }
        return this.strip();
      };
      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN.prototype.egcd = function egcd(p2) {
        assert(p2.negative === 0);
        assert(!p2.isZero());
        var x2 = this;
        var y2 = p2.clone();
        if (x2.negative !== 0) {
          x2 = x2.umod(p2);
        } else {
          x2 = x2.clone();
        }
        var A2 = new BN(1);
        var B2 = new BN(0);
        var C2 = new BN(0);
        var D2 = new BN(1);
        var g2 = 0;
        while (x2.isEven() && y2.isEven()) {
          x2.iushrn(1);
          y2.iushrn(1);
          ++g2;
        }
        var yp = y2.clone();
        var xp = x2.clone();
        while (!x2.isZero()) {
          for (var i = 0, im = 1; (x2.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
          if (i > 0) {
            x2.iushrn(i);
            while (i-- > 0) {
              if (A2.isOdd() || B2.isOdd()) {
                A2.iadd(yp);
                B2.isub(xp);
              }
              A2.iushrn(1);
              B2.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (y2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            y2.iushrn(j2);
            while (j2-- > 0) {
              if (C2.isOdd() || D2.isOdd()) {
                C2.iadd(yp);
                D2.isub(xp);
              }
              C2.iushrn(1);
              D2.iushrn(1);
            }
          }
          if (x2.cmp(y2) >= 0) {
            x2.isub(y2);
            A2.isub(C2);
            B2.isub(D2);
          } else {
            y2.isub(x2);
            C2.isub(A2);
            D2.isub(B2);
          }
        }
        return {
          a: C2,
          b: D2,
          gcd: y2.iushln(g2)
        };
      };
      BN.prototype._invmp = function _invmp(p2) {
        assert(p2.negative === 0);
        assert(!p2.isZero());
        var a = this;
        var b2 = p2.clone();
        if (a.negative !== 0) {
          a = a.umod(p2);
        } else {
          a = a.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b2.clone();
        while (a.cmpn(1) > 0 && b2.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
          if (i > 0) {
            a.iushrn(i);
            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            b2.iushrn(j2);
            while (j2-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a.cmp(b2) >= 0) {
            a.isub(b2);
            x1.isub(x2);
          } else {
            b2.isub(a);
            x2.isub(x1);
          }
        }
        var res;
        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p2);
        }
        return res;
      };
      BN.prototype.gcd = function gcd2(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b2 = num.clone();
        a.negative = 0;
        b2.negative = 0;
        for (var shift = 0; a.isEven() && b2.isEven(); shift++) {
          a.iushrn(1);
          b2.iushrn(1);
        }
        do {
          while (a.isEven()) {
            a.iushrn(1);
          }
          while (b2.isEven()) {
            b2.iushrn(1);
          }
          var r = a.cmp(b2);
          if (r < 0) {
            var t = a;
            a = b2;
            b2 = t;
          } else if (r === 0 || b2.cmpn(1) === 0) {
            break;
          }
          a.isub(b2);
        } while (true);
        return b2.iushln(shift);
      };
      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q2 = 1 << r;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q2;
          return this;
        }
        var carry = q2;
        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w2 = this.words[i] | 0;
          w2 += carry;
          carry = w2 >>> 26;
          w2 &= 67108863;
          this.words[i] = w2;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert(num <= 67108863, "Number is too big");
          var w2 = this.words[0] | 0;
          res = w2 === num ? 0 : w2 < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b2 = num.words[i] | 0;
          if (a === b2) continue;
          if (a < b2) {
            res = -1;
          } else if (a > b2) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN.prototype.gt = function gt2(num) {
        return this.cmp(num) === 1;
      };
      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN.prototype.lt = function lt2(num) {
        return this.cmp(num) === -1;
      };
      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN.red = function red(num) {
        return new Red(num);
      };
      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        assert(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN.prototype.fromRed = function fromRed() {
        assert(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN.prototype.redSub = function redSub(num) {
        assert(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN.prototype.redISub = function redISub(num) {
        assert(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN.prototype.redShl = function redShl(num) {
        assert(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN.prototype.redMul = function redMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN.prototype.redSqr = function redSqr() {
        assert(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN.prototype.redISqr = function redISqr() {
        assert(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN.prototype.redInvm = function redInvm() {
        assert(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN.prototype.redNeg = function redNeg() {
        assert(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p2) {
        this.name = name;
        this.p = new BN(p2, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r = num;
        var rlen;
        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          if (r.strip !== void 0) {
            r.strip();
          } else {
            r._strip();
          }
        }
        return r;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output3) {
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i = 0; i < outLen; i++) {
          output3.words[i] = input.words[i];
        }
        output3.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output3.words[output3.length++] = prev & mask;
        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo2 = 0;
        for (var i = 0; i < num.length; i++) {
          var w2 = num.words[i] | 0;
          lo2 += w2 * 977;
          num.words[i] = lo2 & 67108863;
          lo2 = w2 * 64 + (lo2 / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i = 0; i < num.length; i++) {
          var hi2 = (num.words[i] | 0) * 19 + carry;
          var lo2 = hi2 & 67108863;
          hi2 >>>= 26;
          num.words[i] = lo2;
          carry = hi2;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN._prime = function prime(name) {
        if (primes[name]) return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m2) {
        if (typeof m2 === "string") {
          var prime = BN._prime(m2);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m2.gtn(1), "modulus must be greater than 1");
          this.m = m2;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, "red works only with positives");
        assert(a.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a, b2) {
        assert((a.negative | b2.negative) === 0, "red works only with positives");
        assert(
          a.red && a.red === b2.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
      };
      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
      };
      Red.prototype.add = function add(a, b2) {
        this._verify2(a, b2);
        var res = a.add(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a, b2) {
        this._verify2(a, b2);
        var res = a.iadd(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a, b2) {
        this._verify2(a, b2);
        var res = a.sub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a, b2) {
        this._verify2(a, b2);
        var res = a.isub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
      };
      Red.prototype.imul = function imul(a, b2) {
        this._verify2(a, b2);
        return this.imod(a.imul(b2));
      };
      Red.prototype.mul = function mul(a, b2) {
        this._verify2(a, b2);
        return this.imod(a.mul(b2));
      };
      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };
      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };
      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow3 = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow3);
        }
        var q2 = this.m.subn(1);
        var s = 0;
        while (!q2.isZero() && q2.andln(1) === 0) {
          s++;
          q2.iushrn(1);
        }
        assert(!q2.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z2 = this.m.bitLength();
        z2 = new BN(2 * z2 * z2).toRed(this);
        while (this.pow(z2, lpow).cmp(nOne) !== 0) {
          z2.redIAdd(nOne);
        }
        var c = this.pow(z2, q2);
        var r = this.pow(a, q2.addn(1).iushrn(1));
        var t = this.pow(a, q2);
        var m2 = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }
          assert(i < m2);
          var b2 = this.pow(c, new BN(1).iushln(m2 - i - 1));
          r = r.redMul(b2);
          c = b2.redSqr();
          t = t.redMul(c);
          m2 = i;
        }
        return r;
      };
      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow3(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];
          for (var j2 = start - 1; j2 >= 0; j2--) {
            var bit = word >> j2 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j2 !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m2) {
        Red.call(this, m2);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };
      Mont.prototype.imul = function imul(a, b2) {
        if (a.isZero() || b2.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }
        var t = a.imul(b2);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t.isub(c).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a, b2) {
        if (a.isZero() || b2.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b2);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t.isub(c).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a) {
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module2 === "undefined" || module2, exports2);
  }
});

// node_modules/minimalistic-assert/index.js
var require_minimalistic_assert = __commonJS({
  "node_modules/minimalistic-assert/index.js"(exports2, module2) {
    init_polyfills();
    module2.exports = assert;
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    assert.equal = function assertEqual(l2, r, msg) {
      if (l2 != r)
        throw new Error(msg || "Assertion failed: " + l2 + " != " + r);
    };
  }
});

// node_modules/minimalistic-crypto-utils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/minimalistic-crypto-utils/lib/utils.js"(exports2) {
    "use strict";
    init_polyfills();
    var utils = exports2;
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg !== "string") {
        for (var i = 0; i < msg.length; i++)
          res[i] = msg[i] | 0;
        return res;
      }
      if (enc === "hex") {
        msg = msg.replace(/[^a-z0-9]+/ig, "");
        if (msg.length % 2 !== 0)
          msg = "0" + msg;
        for (var i = 0; i < msg.length; i += 2)
          res.push(parseInt(msg[i] + msg[i + 1], 16));
      } else {
        for (var i = 0; i < msg.length; i++) {
          var c = msg.charCodeAt(i);
          var hi2 = c >> 8;
          var lo2 = c & 255;
          if (hi2)
            res.push(hi2, lo2);
          else
            res.push(lo2);
        }
      }
      return res;
    }
    utils.toArray = toArray;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    utils.zero2 = zero2;
    function toHex2(msg) {
      var res = "";
      for (var i = 0; i < msg.length; i++)
        res += zero2(msg[i].toString(16));
      return res;
    }
    utils.toHex = toHex2;
    utils.encode = function encode(arr, enc) {
      if (enc === "hex")
        return toHex2(arr);
      else
        return arr;
    };
  }
});

// node_modules/elliptic/lib/elliptic/utils.js
var require_utils2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/utils.js"(exports2) {
    "use strict";
    init_polyfills();
    var utils = exports2;
    var BN = require_bn();
    var minAssert = require_minimalistic_assert();
    var minUtils = require_utils();
    utils.assert = minAssert;
    utils.toArray = minUtils.toArray;
    utils.zero2 = minUtils.zero2;
    utils.toHex = minUtils.toHex;
    utils.encode = minUtils.encode;
    function getNAF(num, w2, bits) {
      var naf = new Array(Math.max(num.bitLength(), bits) + 1);
      var i;
      for (i = 0; i < naf.length; i += 1) {
        naf[i] = 0;
      }
      var ws2 = 1 << w2 + 1;
      var k2 = num.clone();
      for (i = 0; i < naf.length; i++) {
        var z2;
        var mod3 = k2.andln(ws2 - 1);
        if (k2.isOdd()) {
          if (mod3 > (ws2 >> 1) - 1)
            z2 = (ws2 >> 1) - mod3;
          else
            z2 = mod3;
          k2.isubn(z2);
        } else {
          z2 = 0;
        }
        naf[i] = z2;
        k2.iushrn(1);
      }
      return naf;
    }
    utils.getNAF = getNAF;
    function getJSF(k1, k2) {
      var jsf = [
        [],
        []
      ];
      k1 = k1.clone();
      k2 = k2.clone();
      var d1 = 0;
      var d2 = 0;
      var m8;
      while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
        var m14 = k1.andln(3) + d1 & 3;
        var m24 = k2.andln(3) + d2 & 3;
        if (m14 === 3)
          m14 = -1;
        if (m24 === 3)
          m24 = -1;
        var u1;
        if ((m14 & 1) === 0) {
          u1 = 0;
        } else {
          m8 = k1.andln(7) + d1 & 7;
          if ((m8 === 3 || m8 === 5) && m24 === 2)
            u1 = -m14;
          else
            u1 = m14;
        }
        jsf[0].push(u1);
        var u2;
        if ((m24 & 1) === 0) {
          u2 = 0;
        } else {
          m8 = k2.andln(7) + d2 & 7;
          if ((m8 === 3 || m8 === 5) && m14 === 2)
            u2 = -m24;
          else
            u2 = m24;
        }
        jsf[1].push(u2);
        if (2 * d1 === u1 + 1)
          d1 = 1 - d1;
        if (2 * d2 === u2 + 1)
          d2 = 1 - d2;
        k1.iushrn(1);
        k2.iushrn(1);
      }
      return jsf;
    }
    utils.getJSF = getJSF;
    function cachedProperty(obj, name, computer) {
      var key = "_" + name;
      obj.prototype[name] = function cachedProperty2() {
        return this[key] !== void 0 ? this[key] : this[key] = computer.call(this);
      };
    }
    utils.cachedProperty = cachedProperty;
    function parseBytes(bytes3) {
      return typeof bytes3 === "string" ? utils.toArray(bytes3, "hex") : bytes3;
    }
    utils.parseBytes = parseBytes;
    function intFromLE(bytes3) {
      return new BN(bytes3, "hex", "le");
    }
    utils.intFromLE = intFromLE;
  }
});

// node_modules/brorand/index.js
var require_brorand = __commonJS({
  "node_modules/brorand/index.js"(exports2, module2) {
    init_polyfills();
    var r;
    module2.exports = function rand(len) {
      if (!r)
        r = new Rand(null);
      return r.generate(len);
    };
    function Rand(rand) {
      this.rand = rand;
    }
    module2.exports.Rand = Rand;
    Rand.prototype.generate = function generate(len) {
      return this._rand(len);
    };
    Rand.prototype._rand = function _rand(n) {
      if (this.rand.getBytes)
        return this.rand.getBytes(n);
      var res = new Uint8Array(n);
      for (var i = 0; i < res.length; i++)
        res[i] = this.rand.getByte();
      return res;
    };
    if (typeof self === "object") {
      if (self.crypto && self.crypto.getRandomValues) {
        Rand.prototype._rand = function _rand(n) {
          var arr = new Uint8Array(n);
          self.crypto.getRandomValues(arr);
          return arr;
        };
      } else if (self.msCrypto && self.msCrypto.getRandomValues) {
        Rand.prototype._rand = function _rand(n) {
          var arr = new Uint8Array(n);
          self.msCrypto.getRandomValues(arr);
          return arr;
        };
      } else if (typeof window === "object") {
        Rand.prototype._rand = function() {
          throw new Error("Not implemented yet");
        };
      }
    } else {
      try {
        crypto3 = require("crypto");
        if (typeof crypto3.randomBytes !== "function")
          throw new Error("Not supported");
        Rand.prototype._rand = function _rand(n) {
          return crypto3.randomBytes(n);
        };
      } catch (e) {
      }
    }
    var crypto3;
  }
});

// node_modules/elliptic/lib/elliptic/curve/base.js
var require_base = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/base.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var utils = require_utils2();
    var getNAF = utils.getNAF;
    var getJSF = utils.getJSF;
    var assert = utils.assert;
    function BaseCurve(type, conf) {
      this.type = type;
      this.p = new BN(conf.p, 16);
      this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
      this.zero = new BN(0).toRed(this.red);
      this.one = new BN(1).toRed(this.red);
      this.two = new BN(2).toRed(this.red);
      this.n = conf.n && new BN(conf.n, 16);
      this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
      this._wnafT1 = new Array(4);
      this._wnafT2 = new Array(4);
      this._wnafT3 = new Array(4);
      this._wnafT4 = new Array(4);
      this._bitLength = this.n ? this.n.bitLength() : 0;
      var adjustCount = this.n && this.p.div(this.n);
      if (!adjustCount || adjustCount.cmpn(100) > 0) {
        this.redN = null;
      } else {
        this._maxwellTrick = true;
        this.redN = this.n.toRed(this.red);
      }
    }
    module2.exports = BaseCurve;
    BaseCurve.prototype.point = function point() {
      throw new Error("Not implemented");
    };
    BaseCurve.prototype.validate = function validate() {
      throw new Error("Not implemented");
    };
    BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p2, k2) {
      assert(p2.precomputed);
      var doubles = p2._getDoubles();
      var naf = getNAF(k2, 1, this._bitLength);
      var I3 = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
      I3 /= 3;
      var repr = [];
      var j2;
      var nafW;
      for (j2 = 0; j2 < naf.length; j2 += doubles.step) {
        nafW = 0;
        for (var l2 = j2 + doubles.step - 1; l2 >= j2; l2--)
          nafW = (nafW << 1) + naf[l2];
        repr.push(nafW);
      }
      var a = this.jpoint(null, null, null);
      var b2 = this.jpoint(null, null, null);
      for (var i = I3; i > 0; i--) {
        for (j2 = 0; j2 < repr.length; j2++) {
          nafW = repr[j2];
          if (nafW === i)
            b2 = b2.mixedAdd(doubles.points[j2]);
          else if (nafW === -i)
            b2 = b2.mixedAdd(doubles.points[j2].neg());
        }
        a = a.add(b2);
      }
      return a.toP();
    };
    BaseCurve.prototype._wnafMul = function _wnafMul(p2, k2) {
      var w2 = 4;
      var nafPoints = p2._getNAFPoints(w2);
      w2 = nafPoints.wnd;
      var wnd = nafPoints.points;
      var naf = getNAF(k2, w2, this._bitLength);
      var acc = this.jpoint(null, null, null);
      for (var i = naf.length - 1; i >= 0; i--) {
        for (var l2 = 0; i >= 0 && naf[i] === 0; i--)
          l2++;
        if (i >= 0)
          l2++;
        acc = acc.dblp(l2);
        if (i < 0)
          break;
        var z2 = naf[i];
        assert(z2 !== 0);
        if (p2.type === "affine") {
          if (z2 > 0)
            acc = acc.mixedAdd(wnd[z2 - 1 >> 1]);
          else
            acc = acc.mixedAdd(wnd[-z2 - 1 >> 1].neg());
        } else {
          if (z2 > 0)
            acc = acc.add(wnd[z2 - 1 >> 1]);
          else
            acc = acc.add(wnd[-z2 - 1 >> 1].neg());
        }
      }
      return p2.type === "affine" ? acc.toP() : acc;
    };
    BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
      var wndWidth = this._wnafT1;
      var wnd = this._wnafT2;
      var naf = this._wnafT3;
      var max = 0;
      var i;
      var j2;
      var p2;
      for (i = 0; i < len; i++) {
        p2 = points[i];
        var nafPoints = p2._getNAFPoints(defW);
        wndWidth[i] = nafPoints.wnd;
        wnd[i] = nafPoints.points;
      }
      for (i = len - 1; i >= 1; i -= 2) {
        var a = i - 1;
        var b2 = i;
        if (wndWidth[a] !== 1 || wndWidth[b2] !== 1) {
          naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
          naf[b2] = getNAF(coeffs[b2], wndWidth[b2], this._bitLength);
          max = Math.max(naf[a].length, max);
          max = Math.max(naf[b2].length, max);
          continue;
        }
        var comb = [
          points[a],
          /* 1 */
          null,
          /* 3 */
          null,
          /* 5 */
          points[b2]
          /* 7 */
        ];
        if (points[a].y.cmp(points[b2].y) === 0) {
          comb[1] = points[a].add(points[b2]);
          comb[2] = points[a].toJ().mixedAdd(points[b2].neg());
        } else if (points[a].y.cmp(points[b2].y.redNeg()) === 0) {
          comb[1] = points[a].toJ().mixedAdd(points[b2]);
          comb[2] = points[a].add(points[b2].neg());
        } else {
          comb[1] = points[a].toJ().mixedAdd(points[b2]);
          comb[2] = points[a].toJ().mixedAdd(points[b2].neg());
        }
        var index = [
          -3,
          /* -1 -1 */
          -1,
          /* -1 0 */
          -5,
          /* -1 1 */
          -7,
          /* 0 -1 */
          0,
          /* 0 0 */
          7,
          /* 0 1 */
          5,
          /* 1 -1 */
          1,
          /* 1 0 */
          3
          /* 1 1 */
        ];
        var jsf = getJSF(coeffs[a], coeffs[b2]);
        max = Math.max(jsf[0].length, max);
        naf[a] = new Array(max);
        naf[b2] = new Array(max);
        for (j2 = 0; j2 < max; j2++) {
          var ja2 = jsf[0][j2] | 0;
          var jb = jsf[1][j2] | 0;
          naf[a][j2] = index[(ja2 + 1) * 3 + (jb + 1)];
          naf[b2][j2] = 0;
          wnd[a] = comb;
        }
      }
      var acc = this.jpoint(null, null, null);
      var tmp = this._wnafT4;
      for (i = max; i >= 0; i--) {
        var k2 = 0;
        while (i >= 0) {
          var zero = true;
          for (j2 = 0; j2 < len; j2++) {
            tmp[j2] = naf[j2][i] | 0;
            if (tmp[j2] !== 0)
              zero = false;
          }
          if (!zero)
            break;
          k2++;
          i--;
        }
        if (i >= 0)
          k2++;
        acc = acc.dblp(k2);
        if (i < 0)
          break;
        for (j2 = 0; j2 < len; j2++) {
          var z2 = tmp[j2];
          p2;
          if (z2 === 0)
            continue;
          else if (z2 > 0)
            p2 = wnd[j2][z2 - 1 >> 1];
          else if (z2 < 0)
            p2 = wnd[j2][-z2 - 1 >> 1].neg();
          if (p2.type === "affine")
            acc = acc.mixedAdd(p2);
          else
            acc = acc.add(p2);
        }
      }
      for (i = 0; i < len; i++)
        wnd[i] = null;
      if (jacobianResult)
        return acc;
      else
        return acc.toP();
    };
    function BasePoint(curve, type) {
      this.curve = curve;
      this.type = type;
      this.precomputed = null;
    }
    BaseCurve.BasePoint = BasePoint;
    BasePoint.prototype.eq = function eq() {
      throw new Error("Not implemented");
    };
    BasePoint.prototype.validate = function validate() {
      return this.curve.validate(this);
    };
    BaseCurve.prototype.decodePoint = function decodePoint(bytes3, enc) {
      bytes3 = utils.toArray(bytes3, enc);
      var len = this.p.byteLength();
      if ((bytes3[0] === 4 || bytes3[0] === 6 || bytes3[0] === 7) && bytes3.length - 1 === 2 * len) {
        if (bytes3[0] === 6)
          assert(bytes3[bytes3.length - 1] % 2 === 0);
        else if (bytes3[0] === 7)
          assert(bytes3[bytes3.length - 1] % 2 === 1);
        var res = this.point(
          bytes3.slice(1, 1 + len),
          bytes3.slice(1 + len, 1 + 2 * len)
        );
        return res;
      } else if ((bytes3[0] === 2 || bytes3[0] === 3) && bytes3.length - 1 === len) {
        return this.pointFromX(bytes3.slice(1, 1 + len), bytes3[0] === 3);
      }
      throw new Error("Unknown point format");
    };
    BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
      return this.encode(enc, true);
    };
    BasePoint.prototype._encode = function _encode(compact) {
      var len = this.curve.p.byteLength();
      var x2 = this.getX().toArray("be", len);
      if (compact)
        return [this.getY().isEven() ? 2 : 3].concat(x2);
      return [4].concat(x2, this.getY().toArray("be", len));
    };
    BasePoint.prototype.encode = function encode(enc, compact) {
      return utils.encode(this._encode(compact), enc);
    };
    BasePoint.prototype.precompute = function precompute2(power) {
      if (this.precomputed)
        return this;
      var precomputed = {
        doubles: null,
        naf: null,
        beta: null
      };
      precomputed.naf = this._getNAFPoints(8);
      precomputed.doubles = this._getDoubles(4, power);
      precomputed.beta = this._getBeta();
      this.precomputed = precomputed;
      return this;
    };
    BasePoint.prototype._hasDoubles = function _hasDoubles(k2) {
      if (!this.precomputed)
        return false;
      var doubles = this.precomputed.doubles;
      if (!doubles)
        return false;
      return doubles.points.length >= Math.ceil((k2.bitLength() + 1) / doubles.step);
    };
    BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
      if (this.precomputed && this.precomputed.doubles)
        return this.precomputed.doubles;
      var doubles = [this];
      var acc = this;
      for (var i = 0; i < power; i += step) {
        for (var j2 = 0; j2 < step; j2++)
          acc = acc.dbl();
        doubles.push(acc);
      }
      return {
        step,
        points: doubles
      };
    };
    BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
      if (this.precomputed && this.precomputed.naf)
        return this.precomputed.naf;
      var res = [this];
      var max = (1 << wnd) - 1;
      var dbl = max === 1 ? null : this.dbl();
      for (var i = 1; i < max; i++)
        res[i] = res[i - 1].add(dbl);
      return {
        wnd,
        points: res
      };
    };
    BasePoint.prototype._getBeta = function _getBeta() {
      return null;
    };
    BasePoint.prototype.dblp = function dblp(k2) {
      var r = this;
      for (var i = 0; i < k2; i++)
        r = r.dbl();
      return r;
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
    init_polyfills();
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports2, module2) {
    init_polyfills();
    try {
      util = require("util");
      if (typeof util.inherits !== "function") throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/elliptic/lib/elliptic/curve/short.js
var require_short = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/short.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits();
    var Base = require_base();
    var assert = utils.assert;
    function ShortCurve(conf) {
      Base.call(this, "short", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.tinv = this.two.redInvm();
      this.zeroA = this.a.fromRed().cmpn(0) === 0;
      this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
      this.endo = this._getEndomorphism(conf);
      this._endoWnafT1 = new Array(4);
      this._endoWnafT2 = new Array(4);
    }
    inherits(ShortCurve, Base);
    module2.exports = ShortCurve;
    ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
      if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
        return;
      var beta;
      var lambda;
      if (conf.beta) {
        beta = new BN(conf.beta, 16).toRed(this.red);
      } else {
        var betas = this._getEndoRoots(this.p);
        beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
        beta = beta.toRed(this.red);
      }
      if (conf.lambda) {
        lambda = new BN(conf.lambda, 16);
      } else {
        var lambdas = this._getEndoRoots(this.n);
        if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
          lambda = lambdas[0];
        } else {
          lambda = lambdas[1];
          assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
        }
      }
      var basis;
      if (conf.basis) {
        basis = conf.basis.map(function(vec) {
          return {
            a: new BN(vec.a, 16),
            b: new BN(vec.b, 16)
          };
        });
      } else {
        basis = this._getEndoBasis(lambda);
      }
      return {
        beta,
        lambda,
        basis
      };
    };
    ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
      var red = num === this.p ? this.red : BN.mont(num);
      var tinv = new BN(2).toRed(red).redInvm();
      var ntinv = tinv.redNeg();
      var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
      var l1 = ntinv.redAdd(s).fromRed();
      var l2 = ntinv.redSub(s).fromRed();
      return [l1, l2];
    };
    ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
      var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
      var u2 = lambda;
      var v2 = this.n.clone();
      var x1 = new BN(1);
      var y1 = new BN(0);
      var x2 = new BN(0);
      var y2 = new BN(1);
      var a0;
      var b0;
      var a1;
      var b1;
      var a2;
      var b2;
      var prevR;
      var i = 0;
      var r;
      var x3;
      while (u2.cmpn(0) !== 0) {
        var q2 = v2.div(u2);
        r = v2.sub(q2.mul(u2));
        x3 = x2.sub(q2.mul(x1));
        var y3 = y2.sub(q2.mul(y1));
        if (!a1 && r.cmp(aprxSqrt) < 0) {
          a0 = prevR.neg();
          b0 = x1;
          a1 = r.neg();
          b1 = x3;
        } else if (a1 && ++i === 2) {
          break;
        }
        prevR = r;
        v2 = u2;
        u2 = r;
        x2 = x1;
        x1 = x3;
        y2 = y1;
        y1 = y3;
      }
      a2 = r.neg();
      b2 = x3;
      var len1 = a1.sqr().add(b1.sqr());
      var len2 = a2.sqr().add(b2.sqr());
      if (len2.cmp(len1) >= 0) {
        a2 = a0;
        b2 = b0;
      }
      if (a1.negative) {
        a1 = a1.neg();
        b1 = b1.neg();
      }
      if (a2.negative) {
        a2 = a2.neg();
        b2 = b2.neg();
      }
      return [
        { a: a1, b: b1 },
        { a: a2, b: b2 }
      ];
    };
    ShortCurve.prototype._endoSplit = function _endoSplit(k2) {
      var basis = this.endo.basis;
      var v1 = basis[0];
      var v2 = basis[1];
      var c1 = v2.b.mul(k2).divRound(this.n);
      var c2 = v1.b.neg().mul(k2).divRound(this.n);
      var p1 = c1.mul(v1.a);
      var p2 = c2.mul(v2.a);
      var q1 = c1.mul(v1.b);
      var q2 = c2.mul(v2.b);
      var k1 = k2.sub(p1).sub(p2);
      var k22 = q1.add(q2).neg();
      return { k1, k2: k22 };
    };
    ShortCurve.prototype.pointFromX = function pointFromX(x2, odd) {
      x2 = new BN(x2, 16);
      if (!x2.red)
        x2 = x2.toRed(this.red);
      var y2 = x2.redSqr().redMul(x2).redIAdd(x2.redMul(this.a)).redIAdd(this.b);
      var y3 = y2.redSqrt();
      if (y3.redSqr().redSub(y2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y3.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y3 = y3.redNeg();
      return this.point(x2, y3);
    };
    ShortCurve.prototype.validate = function validate(point) {
      if (point.inf)
        return true;
      var x2 = point.x;
      var y2 = point.y;
      var ax = this.a.redMul(x2);
      var rhs = x2.redSqr().redMul(x2).redIAdd(ax).redIAdd(this.b);
      return y2.redSqr().redISub(rhs).cmpn(0) === 0;
    };
    ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
      var npoints = this._endoWnafT1;
      var ncoeffs = this._endoWnafT2;
      for (var i = 0; i < points.length; i++) {
        var split = this._endoSplit(coeffs[i]);
        var p2 = points[i];
        var beta = p2._getBeta();
        if (split.k1.negative) {
          split.k1.ineg();
          p2 = p2.neg(true);
        }
        if (split.k2.negative) {
          split.k2.ineg();
          beta = beta.neg(true);
        }
        npoints[i * 2] = p2;
        npoints[i * 2 + 1] = beta;
        ncoeffs[i * 2] = split.k1;
        ncoeffs[i * 2 + 1] = split.k2;
      }
      var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
      for (var j2 = 0; j2 < i * 2; j2++) {
        npoints[j2] = null;
        ncoeffs[j2] = null;
      }
      return res;
    };
    function Point2(curve, x2, y2, isRed) {
      Base.BasePoint.call(this, curve, "affine");
      if (x2 === null && y2 === null) {
        this.x = null;
        this.y = null;
        this.inf = true;
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y2, 16);
        if (isRed) {
          this.x.forceRed(this.curve.red);
          this.y.forceRed(this.curve.red);
        }
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        this.inf = false;
      }
    }
    inherits(Point2, Base.BasePoint);
    ShortCurve.prototype.point = function point(x2, y2, isRed) {
      return new Point2(this, x2, y2, isRed);
    };
    ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
      return Point2.fromJSON(this, obj, red);
    };
    Point2.prototype._getBeta = function _getBeta() {
      if (!this.curve.endo)
        return;
      var pre = this.precomputed;
      if (pre && pre.beta)
        return pre.beta;
      var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (pre) {
        var curve = this.curve;
        var endoMul = function(p2) {
          return curve.point(p2.x.redMul(curve.endo.beta), p2.y);
        };
        pre.beta = beta;
        beta.precomputed = {
          beta: null,
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(endoMul)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(endoMul)
          }
        };
      }
      return beta;
    };
    Point2.prototype.toJSON = function toJSON() {
      if (!this.precomputed)
        return [this.x, this.y];
      return [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
          step: this.precomputed.doubles.step,
          points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
          wnd: this.precomputed.naf.wnd,
          points: this.precomputed.naf.points.slice(1)
        }
      }];
    };
    Point2.fromJSON = function fromJSON(curve, obj, red) {
      if (typeof obj === "string")
        obj = JSON.parse(obj);
      var res = curve.point(obj[0], obj[1], red);
      if (!obj[2])
        return res;
      function obj2point(obj2) {
        return curve.point(obj2[0], obj2[1], red);
      }
      var pre = obj[2];
      res.precomputed = {
        beta: null,
        doubles: pre.doubles && {
          step: pre.doubles.step,
          points: [res].concat(pre.doubles.points.map(obj2point))
        },
        naf: pre.naf && {
          wnd: pre.naf.wnd,
          points: [res].concat(pre.naf.points.map(obj2point))
        }
      };
      return res;
    };
    Point2.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    };
    Point2.prototype.isInfinity = function isInfinity() {
      return this.inf;
    };
    Point2.prototype.add = function add(p2) {
      if (this.inf)
        return p2;
      if (p2.inf)
        return this;
      if (this.eq(p2))
        return this.dbl();
      if (this.neg().eq(p2))
        return this.curve.point(null, null);
      if (this.x.cmp(p2.x) === 0)
        return this.curve.point(null, null);
      var c = this.y.redSub(p2.y);
      if (c.cmpn(0) !== 0)
        c = c.redMul(this.x.redSub(p2.x).redInvm());
      var nx = c.redSqr().redISub(this.x).redISub(p2.x);
      var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    };
    Point2.prototype.dbl = function dbl() {
      if (this.inf)
        return this;
      var ys1 = this.y.redAdd(this.y);
      if (ys1.cmpn(0) === 0)
        return this.curve.point(null, null);
      var a = this.curve.a;
      var x2 = this.x.redSqr();
      var dyinv = ys1.redInvm();
      var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
      var nx = c.redSqr().redISub(this.x.redAdd(this.x));
      var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    };
    Point2.prototype.getX = function getX() {
      return this.x.fromRed();
    };
    Point2.prototype.getY = function getY() {
      return this.y.fromRed();
    };
    Point2.prototype.mul = function mul(k2) {
      k2 = new BN(k2, 16);
      if (this.isInfinity())
        return this;
      else if (this._hasDoubles(k2))
        return this.curve._fixedNafMul(this, k2);
      else if (this.curve.endo)
        return this.curve._endoWnafMulAdd([this], [k2]);
      else
        return this.curve._wnafMul(this, k2);
    };
    Point2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
      var points = [this, p2];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2);
    };
    Point2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
      var points = [this, p2];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs, true);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
    };
    Point2.prototype.eq = function eq(p2) {
      return this === p2 || this.inf === p2.inf && (this.inf || this.x.cmp(p2.x) === 0 && this.y.cmp(p2.y) === 0);
    };
    Point2.prototype.neg = function neg(_precompute) {
      if (this.inf)
        return this;
      var res = this.curve.point(this.x, this.y.redNeg());
      if (_precompute && this.precomputed) {
        var pre = this.precomputed;
        var negate = function(p2) {
          return p2.neg();
        };
        res.precomputed = {
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(negate)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(negate)
          }
        };
      }
      return res;
    };
    Point2.prototype.toJ = function toJ() {
      if (this.inf)
        return this.curve.jpoint(null, null, null);
      var res = this.curve.jpoint(this.x, this.y, this.curve.one);
      return res;
    };
    function JPoint(curve, x2, y2, z2) {
      Base.BasePoint.call(this, curve, "jacobian");
      if (x2 === null && y2 === null && z2 === null) {
        this.x = this.curve.one;
        this.y = this.curve.one;
        this.z = new BN(0);
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y2, 16);
        this.z = new BN(z2, 16);
      }
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.y.red)
        this.y = this.y.toRed(this.curve.red);
      if (!this.z.red)
        this.z = this.z.toRed(this.curve.red);
      this.zOne = this.z === this.curve.one;
    }
    inherits(JPoint, Base.BasePoint);
    ShortCurve.prototype.jpoint = function jpoint(x2, y2, z2) {
      return new JPoint(this, x2, y2, z2);
    };
    JPoint.prototype.toP = function toP() {
      if (this.isInfinity())
        return this.curve.point(null, null);
      var zinv = this.z.redInvm();
      var zinv2 = zinv.redSqr();
      var ax = this.x.redMul(zinv2);
      var ay = this.y.redMul(zinv2).redMul(zinv);
      return this.curve.point(ax, ay);
    };
    JPoint.prototype.neg = function neg() {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    };
    JPoint.prototype.add = function add(p2) {
      if (this.isInfinity())
        return p2;
      if (p2.isInfinity())
        return this;
      var pz2 = p2.z.redSqr();
      var z2 = this.z.redSqr();
      var u1 = this.x.redMul(pz2);
      var u2 = p2.x.redMul(z2);
      var s1 = this.y.redMul(pz2.redMul(p2.z));
      var s2 = p2.y.redMul(z2.redMul(this.z));
      var h2 = u1.redSub(u2);
      var r = s1.redSub(s2);
      if (h2.cmpn(0) === 0) {
        if (r.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h22 = h2.redSqr();
      var h3 = h22.redMul(h2);
      var v2 = u1.redMul(h22);
      var nx = r.redSqr().redIAdd(h3).redISub(v2).redISub(v2);
      var ny = r.redMul(v2.redISub(nx)).redISub(s1.redMul(h3));
      var nz = this.z.redMul(p2.z).redMul(h2);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.mixedAdd = function mixedAdd(p2) {
      if (this.isInfinity())
        return p2.toJ();
      if (p2.isInfinity())
        return this;
      var z2 = this.z.redSqr();
      var u1 = this.x;
      var u2 = p2.x.redMul(z2);
      var s1 = this.y;
      var s2 = p2.y.redMul(z2).redMul(this.z);
      var h2 = u1.redSub(u2);
      var r = s1.redSub(s2);
      if (h2.cmpn(0) === 0) {
        if (r.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h22 = h2.redSqr();
      var h3 = h22.redMul(h2);
      var v2 = u1.redMul(h22);
      var nx = r.redSqr().redIAdd(h3).redISub(v2).redISub(v2);
      var ny = r.redMul(v2.redISub(nx)).redISub(s1.redMul(h3));
      var nz = this.z.redMul(h2);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.dblp = function dblp(pow3) {
      if (pow3 === 0)
        return this;
      if (this.isInfinity())
        return this;
      if (!pow3)
        return this.dbl();
      var i;
      if (this.curve.zeroA || this.curve.threeA) {
        var r = this;
        for (i = 0; i < pow3; i++)
          r = r.dbl();
        return r;
      }
      var a = this.curve.a;
      var tinv = this.curve.tinv;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jyd = jy.redAdd(jy);
      for (i = 0; i < pow3; i++) {
        var jx2 = jx.redSqr();
        var jyd2 = jyd.redSqr();
        var jyd4 = jyd2.redSqr();
        var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
        var t1 = jx.redMul(jyd2);
        var nx = c.redSqr().redISub(t1.redAdd(t1));
        var t2 = t1.redISub(nx);
        var dny = c.redMul(t2);
        dny = dny.redIAdd(dny).redISub(jyd4);
        var nz = jyd.redMul(jz);
        if (i + 1 < pow3)
          jz4 = jz4.redMul(jyd4);
        jx = nx;
        jz = nz;
        jyd = dny;
      }
      return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
    };
    JPoint.prototype.dbl = function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.zeroA)
        return this._zeroDbl();
      else if (this.curve.threeA)
        return this._threeDbl();
      else
        return this._dbl();
    };
    JPoint.prototype._zeroDbl = function _zeroDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m2 = xx.redAdd(xx).redIAdd(xx);
        var t = m2.redSqr().redISub(s).redISub(s);
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        nx = t;
        ny = m2.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var a = this.x.redSqr();
        var b2 = this.y.redSqr();
        var c = b2.redSqr();
        var d2 = this.x.redAdd(b2).redSqr().redISub(a).redISub(c);
        d2 = d2.redIAdd(d2);
        var e = a.redAdd(a).redIAdd(a);
        var f3 = e.redSqr();
        var c8 = c.redIAdd(c);
        c8 = c8.redIAdd(c8);
        c8 = c8.redIAdd(c8);
        nx = f3.redISub(d2).redISub(d2);
        ny = e.redMul(d2.redISub(nx)).redISub(c8);
        nz = this.y.redMul(this.z);
        nz = nz.redIAdd(nz);
      }
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype._threeDbl = function _threeDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m2 = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
        var t = m2.redSqr().redISub(s).redISub(s);
        nx = t;
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        ny = m2.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var delta = this.z.redSqr();
        var gamma = this.y.redSqr();
        var beta = this.x.redMul(gamma);
        var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
        alpha = alpha.redAdd(alpha).redIAdd(alpha);
        var beta4 = beta.redIAdd(beta);
        beta4 = beta4.redIAdd(beta4);
        var beta8 = beta4.redAdd(beta4);
        nx = alpha.redSqr().redISub(beta8);
        nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
        var ggamma8 = gamma.redSqr();
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
      }
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype._dbl = function _dbl() {
      var a = this.curve.a;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jx2 = jx.redSqr();
      var jy2 = jy.redSqr();
      var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
      var jxd4 = jx.redAdd(jx);
      jxd4 = jxd4.redIAdd(jxd4);
      var t1 = jxd4.redMul(jy2);
      var nx = c.redSqr().redISub(t1.redAdd(t1));
      var t2 = t1.redISub(nx);
      var jyd8 = jy2.redSqr();
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      var ny = c.redMul(t2).redISub(jyd8);
      var nz = jy.redAdd(jy).redMul(jz);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.trpl = function trpl() {
      if (!this.curve.zeroA)
        return this.dbl().add(this);
      var xx = this.x.redSqr();
      var yy = this.y.redSqr();
      var zz = this.z.redSqr();
      var yyyy = yy.redSqr();
      var m2 = xx.redAdd(xx).redIAdd(xx);
      var mm = m2.redSqr();
      var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
      e = e.redIAdd(e);
      e = e.redAdd(e).redIAdd(e);
      e = e.redISub(mm);
      var ee2 = e.redSqr();
      var t = yyyy.redIAdd(yyyy);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      var u2 = m2.redIAdd(e).redSqr().redISub(mm).redISub(ee2).redISub(t);
      var yyu4 = yy.redMul(u2);
      yyu4 = yyu4.redIAdd(yyu4);
      yyu4 = yyu4.redIAdd(yyu4);
      var nx = this.x.redMul(ee2).redISub(yyu4);
      nx = nx.redIAdd(nx);
      nx = nx.redIAdd(nx);
      var ny = this.y.redMul(u2.redMul(t.redISub(u2)).redISub(e.redMul(ee2)));
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee2);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.mul = function mul(k2, kbase) {
      k2 = new BN(k2, kbase);
      return this.curve._wnafMul(this, k2);
    };
    JPoint.prototype.eq = function eq(p2) {
      if (p2.type === "affine")
        return this.eq(p2.toJ());
      if (this === p2)
        return true;
      var z2 = this.z.redSqr();
      var pz2 = p2.z.redSqr();
      if (this.x.redMul(pz2).redISub(p2.x.redMul(z2)).cmpn(0) !== 0)
        return false;
      var z3 = z2.redMul(this.z);
      var pz3 = pz2.redMul(p2.z);
      return this.y.redMul(pz3).redISub(p2.y.redMul(z3)).cmpn(0) === 0;
    };
    JPoint.prototype.eqXToP = function eqXToP(x2) {
      var zs2 = this.z.redSqr();
      var rx = x2.toRed(this.curve.red).redMul(zs2);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc2 = x2.clone();
      var t = this.curve.redN.redMul(zs2);
      for (; ; ) {
        xc2.iadd(this.curve.n);
        if (xc2.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    };
    JPoint.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC JPoint Infinity>";
      return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    };
    JPoint.prototype.isInfinity = function isInfinity() {
      return this.z.cmpn(0) === 0;
    };
  }
});

// node_modules/elliptic/lib/elliptic/curve/mont.js
var require_mont = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/mont.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var inherits = require_inherits();
    var Base = require_base();
    var utils = require_utils2();
    function MontCurve(conf) {
      Base.call(this, "mont", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.i4 = new BN(4).toRed(this.red).redInvm();
      this.two = new BN(2).toRed(this.red);
      this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    inherits(MontCurve, Base);
    module2.exports = MontCurve;
    MontCurve.prototype.validate = function validate(point) {
      var x2 = point.normalize().x;
      var x22 = x2.redSqr();
      var rhs = x22.redMul(x2).redAdd(x22.redMul(this.a)).redAdd(x2);
      var y2 = rhs.redSqrt();
      return y2.redSqr().cmp(rhs) === 0;
    };
    function Point2(curve, x2, z2) {
      Base.BasePoint.call(this, curve, "projective");
      if (x2 === null && z2 === null) {
        this.x = this.curve.one;
        this.z = this.curve.zero;
      } else {
        this.x = new BN(x2, 16);
        this.z = new BN(z2, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
      }
    }
    inherits(Point2, Base.BasePoint);
    MontCurve.prototype.decodePoint = function decodePoint(bytes3, enc) {
      return this.point(utils.toArray(bytes3, enc), 1);
    };
    MontCurve.prototype.point = function point(x2, z2) {
      return new Point2(this, x2, z2);
    };
    MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
      return Point2.fromJSON(this, obj);
    };
    Point2.prototype.precompute = function precompute2() {
    };
    Point2.prototype._encode = function _encode() {
      return this.getX().toArray("be", this.curve.p.byteLength());
    };
    Point2.fromJSON = function fromJSON(curve, obj) {
      return new Point2(curve, obj[0], obj[1] || curve.one);
    };
    Point2.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    Point2.prototype.isInfinity = function isInfinity() {
      return this.z.cmpn(0) === 0;
    };
    Point2.prototype.dbl = function dbl() {
      var a = this.x.redAdd(this.z);
      var aa2 = a.redSqr();
      var b2 = this.x.redSub(this.z);
      var bb = b2.redSqr();
      var c = aa2.redSub(bb);
      var nx = aa2.redMul(bb);
      var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
      return this.curve.point(nx, nz);
    };
    Point2.prototype.add = function add() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point2.prototype.diffAdd = function diffAdd(p2, diff) {
      var a = this.x.redAdd(this.z);
      var b2 = this.x.redSub(this.z);
      var c = p2.x.redAdd(p2.z);
      var d2 = p2.x.redSub(p2.z);
      var da2 = d2.redMul(a);
      var cb = c.redMul(b2);
      var nx = diff.z.redMul(da2.redAdd(cb).redSqr());
      var nz = diff.x.redMul(da2.redISub(cb).redSqr());
      return this.curve.point(nx, nz);
    };
    Point2.prototype.mul = function mul(k2) {
      var t = k2.clone();
      var a = this;
      var b2 = this.curve.point(null, null);
      var c = this;
      for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
        bits.push(t.andln(1));
      for (var i = bits.length - 1; i >= 0; i--) {
        if (bits[i] === 0) {
          a = a.diffAdd(b2, c);
          b2 = b2.dbl();
        } else {
          b2 = a.diffAdd(b2, c);
          a = a.dbl();
        }
      }
      return b2;
    };
    Point2.prototype.mulAdd = function mulAdd() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point2.prototype.jumlAdd = function jumlAdd() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point2.prototype.eq = function eq(other) {
      return this.getX().cmp(other.getX()) === 0;
    };
    Point2.prototype.normalize = function normalize2() {
      this.x = this.x.redMul(this.z.redInvm());
      this.z = this.curve.one;
      return this;
    };
    Point2.prototype.getX = function getX() {
      this.normalize();
      return this.x.fromRed();
    };
  }
});

// node_modules/elliptic/lib/elliptic/curve/edwards.js
var require_edwards = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/edwards.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits();
    var Base = require_base();
    var assert = utils.assert;
    function EdwardsCurve(conf) {
      this.twisted = (conf.a | 0) !== 1;
      this.mOneA = this.twisted && (conf.a | 0) === -1;
      this.extended = this.mOneA;
      Base.call(this, "edwards", conf);
      this.a = new BN(conf.a, 16).umod(this.red.m);
      this.a = this.a.toRed(this.red);
      this.c = new BN(conf.c, 16).toRed(this.red);
      this.c2 = this.c.redSqr();
      this.d = new BN(conf.d, 16).toRed(this.red);
      this.dd = this.d.redAdd(this.d);
      assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
      this.oneC = (conf.c | 0) === 1;
    }
    inherits(EdwardsCurve, Base);
    module2.exports = EdwardsCurve;
    EdwardsCurve.prototype._mulA = function _mulA(num) {
      if (this.mOneA)
        return num.redNeg();
      else
        return this.a.redMul(num);
    };
    EdwardsCurve.prototype._mulC = function _mulC(num) {
      if (this.oneC)
        return num;
      else
        return this.c.redMul(num);
    };
    EdwardsCurve.prototype.jpoint = function jpoint(x2, y2, z2, t) {
      return this.point(x2, y2, z2, t);
    };
    EdwardsCurve.prototype.pointFromX = function pointFromX(x2, odd) {
      x2 = new BN(x2, 16);
      if (!x2.red)
        x2 = x2.toRed(this.red);
      var x22 = x2.redSqr();
      var rhs = this.c2.redSub(this.a.redMul(x22));
      var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x22));
      var y2 = rhs.redMul(lhs.redInvm());
      var y3 = y2.redSqrt();
      if (y3.redSqr().redSub(y2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y3.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y3 = y3.redNeg();
      return this.point(x2, y3);
    };
    EdwardsCurve.prototype.pointFromY = function pointFromY(y2, odd) {
      y2 = new BN(y2, 16);
      if (!y2.red)
        y2 = y2.toRed(this.red);
      var y22 = y2.redSqr();
      var lhs = y22.redSub(this.c2);
      var rhs = y22.redMul(this.d).redMul(this.c2).redSub(this.a);
      var x2 = lhs.redMul(rhs.redInvm());
      if (x2.cmp(this.zero) === 0) {
        if (odd)
          throw new Error("invalid point");
        else
          return this.point(this.zero, y2);
      }
      var x3 = x2.redSqrt();
      if (x3.redSqr().redSub(x2).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      if (x3.fromRed().isOdd() !== odd)
        x3 = x3.redNeg();
      return this.point(x3, y2);
    };
    EdwardsCurve.prototype.validate = function validate(point) {
      if (point.isInfinity())
        return true;
      point.normalize();
      var x2 = point.x.redSqr();
      var y2 = point.y.redSqr();
      var lhs = x2.redMul(this.a).redAdd(y2);
      var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
      return lhs.cmp(rhs) === 0;
    };
    function Point2(curve, x2, y2, z2, t) {
      Base.BasePoint.call(this, curve, "projective");
      if (x2 === null && y2 === null && z2 === null) {
        this.x = this.curve.zero;
        this.y = this.curve.one;
        this.z = this.curve.one;
        this.t = this.curve.zero;
        this.zOne = true;
      } else {
        this.x = new BN(x2, 16);
        this.y = new BN(y2, 16);
        this.z = z2 ? new BN(z2, 16) : this.curve.one;
        this.t = t && new BN(t, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
        if (this.t && !this.t.red)
          this.t = this.t.toRed(this.curve.red);
        this.zOne = this.z === this.curve.one;
        if (this.curve.extended && !this.t) {
          this.t = this.x.redMul(this.y);
          if (!this.zOne)
            this.t = this.t.redMul(this.z.redInvm());
        }
      }
    }
    inherits(Point2, Base.BasePoint);
    EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
      return Point2.fromJSON(this, obj);
    };
    EdwardsCurve.prototype.point = function point(x2, y2, z2, t) {
      return new Point2(this, x2, y2, z2, t);
    };
    Point2.fromJSON = function fromJSON(curve, obj) {
      return new Point2(curve, obj[0], obj[1], obj[2]);
    };
    Point2.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    Point2.prototype.isInfinity = function isInfinity() {
      return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
    };
    Point2.prototype._extDbl = function _extDbl() {
      var a = this.x.redSqr();
      var b2 = this.y.redSqr();
      var c = this.z.redSqr();
      c = c.redIAdd(c);
      var d2 = this.curve._mulA(a);
      var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b2);
      var g2 = d2.redAdd(b2);
      var f3 = g2.redSub(c);
      var h2 = d2.redSub(b2);
      var nx = e.redMul(f3);
      var ny = g2.redMul(h2);
      var nt2 = e.redMul(h2);
      var nz = f3.redMul(g2);
      return this.curve.point(nx, ny, nz, nt2);
    };
    Point2.prototype._projDbl = function _projDbl() {
      var b2 = this.x.redAdd(this.y).redSqr();
      var c = this.x.redSqr();
      var d2 = this.y.redSqr();
      var nx;
      var ny;
      var nz;
      var e;
      var h2;
      var j2;
      if (this.curve.twisted) {
        e = this.curve._mulA(c);
        var f3 = e.redAdd(d2);
        if (this.zOne) {
          nx = b2.redSub(c).redSub(d2).redMul(f3.redSub(this.curve.two));
          ny = f3.redMul(e.redSub(d2));
          nz = f3.redSqr().redSub(f3).redSub(f3);
        } else {
          h2 = this.z.redSqr();
          j2 = f3.redSub(h2).redISub(h2);
          nx = b2.redSub(c).redISub(d2).redMul(j2);
          ny = f3.redMul(e.redSub(d2));
          nz = f3.redMul(j2);
        }
      } else {
        e = c.redAdd(d2);
        h2 = this.curve._mulC(this.z).redSqr();
        j2 = e.redSub(h2).redSub(h2);
        nx = this.curve._mulC(b2.redISub(e)).redMul(j2);
        ny = this.curve._mulC(e).redMul(c.redISub(d2));
        nz = e.redMul(j2);
      }
      return this.curve.point(nx, ny, nz);
    };
    Point2.prototype.dbl = function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extDbl();
      else
        return this._projDbl();
    };
    Point2.prototype._extAdd = function _extAdd(p2) {
      var a = this.y.redSub(this.x).redMul(p2.y.redSub(p2.x));
      var b2 = this.y.redAdd(this.x).redMul(p2.y.redAdd(p2.x));
      var c = this.t.redMul(this.curve.dd).redMul(p2.t);
      var d2 = this.z.redMul(p2.z.redAdd(p2.z));
      var e = b2.redSub(a);
      var f3 = d2.redSub(c);
      var g2 = d2.redAdd(c);
      var h2 = b2.redAdd(a);
      var nx = e.redMul(f3);
      var ny = g2.redMul(h2);
      var nt2 = e.redMul(h2);
      var nz = f3.redMul(g2);
      return this.curve.point(nx, ny, nz, nt2);
    };
    Point2.prototype._projAdd = function _projAdd(p2) {
      var a = this.z.redMul(p2.z);
      var b2 = a.redSqr();
      var c = this.x.redMul(p2.x);
      var d2 = this.y.redMul(p2.y);
      var e = this.curve.d.redMul(c).redMul(d2);
      var f3 = b2.redSub(e);
      var g2 = b2.redAdd(e);
      var tmp = this.x.redAdd(this.y).redMul(p2.x.redAdd(p2.y)).redISub(c).redISub(d2);
      var nx = a.redMul(f3).redMul(tmp);
      var ny;
      var nz;
      if (this.curve.twisted) {
        ny = a.redMul(g2).redMul(d2.redSub(this.curve._mulA(c)));
        nz = f3.redMul(g2);
      } else {
        ny = a.redMul(g2).redMul(d2.redSub(c));
        nz = this.curve._mulC(f3).redMul(g2);
      }
      return this.curve.point(nx, ny, nz);
    };
    Point2.prototype.add = function add(p2) {
      if (this.isInfinity())
        return p2;
      if (p2.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extAdd(p2);
      else
        return this._projAdd(p2);
    };
    Point2.prototype.mul = function mul(k2) {
      if (this._hasDoubles(k2))
        return this.curve._fixedNafMul(this, k2);
      else
        return this.curve._wnafMul(this, k2);
    };
    Point2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
      return this.curve._wnafMulAdd(1, [this, p2], [k1, k2], 2, false);
    };
    Point2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
      return this.curve._wnafMulAdd(1, [this, p2], [k1, k2], 2, true);
    };
    Point2.prototype.normalize = function normalize2() {
      if (this.zOne)
        return this;
      var zi2 = this.z.redInvm();
      this.x = this.x.redMul(zi2);
      this.y = this.y.redMul(zi2);
      if (this.t)
        this.t = this.t.redMul(zi2);
      this.z = this.curve.one;
      this.zOne = true;
      return this;
    };
    Point2.prototype.neg = function neg() {
      return this.curve.point(
        this.x.redNeg(),
        this.y,
        this.z,
        this.t && this.t.redNeg()
      );
    };
    Point2.prototype.getX = function getX() {
      this.normalize();
      return this.x.fromRed();
    };
    Point2.prototype.getY = function getY() {
      this.normalize();
      return this.y.fromRed();
    };
    Point2.prototype.eq = function eq(other) {
      return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
    };
    Point2.prototype.eqXToP = function eqXToP(x2) {
      var rx = x2.toRed(this.curve.red).redMul(this.z);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc2 = x2.clone();
      var t = this.curve.redN.redMul(this.z);
      for (; ; ) {
        xc2.iadd(this.curve.n);
        if (xc2.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    };
    Point2.prototype.toP = Point2.prototype.normalize;
    Point2.prototype.mixedAdd = Point2.prototype.add;
  }
});

// node_modules/elliptic/lib/elliptic/curve/index.js
var require_curve = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/index.js"(exports2) {
    "use strict";
    init_polyfills();
    var curve = exports2;
    curve.base = require_base();
    curve.short = require_short();
    curve.mont = require_mont();
    curve.edwards = require_edwards();
  }
});

// node_modules/hash.js/lib/hash/utils.js
var require_utils3 = __commonJS({
  "node_modules/hash.js/lib/hash/utils.js"(exports2) {
    "use strict";
    init_polyfills();
    var assert = require_minimalistic_assert();
    var inherits = require_inherits();
    exports2.inherits = inherits;
    function isSurrogatePair(msg, i) {
      if ((msg.charCodeAt(i) & 64512) !== 55296) {
        return false;
      }
      if (i < 0 || i + 1 >= msg.length) {
        return false;
      }
      return (msg.charCodeAt(i + 1) & 64512) === 56320;
    }
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg === "string") {
        if (!enc) {
          var p2 = 0;
          for (var i = 0; i < msg.length; i++) {
            var c = msg.charCodeAt(i);
            if (c < 128) {
              res[p2++] = c;
            } else if (c < 2048) {
              res[p2++] = c >> 6 | 192;
              res[p2++] = c & 63 | 128;
            } else if (isSurrogatePair(msg, i)) {
              c = 65536 + ((c & 1023) << 10) + (msg.charCodeAt(++i) & 1023);
              res[p2++] = c >> 18 | 240;
              res[p2++] = c >> 12 & 63 | 128;
              res[p2++] = c >> 6 & 63 | 128;
              res[p2++] = c & 63 | 128;
            } else {
              res[p2++] = c >> 12 | 224;
              res[p2++] = c >> 6 & 63 | 128;
              res[p2++] = c & 63 | 128;
            }
          }
        } else if (enc === "hex") {
          msg = msg.replace(/[^a-z0-9]+/ig, "");
          if (msg.length % 2 !== 0)
            msg = "0" + msg;
          for (i = 0; i < msg.length; i += 2)
            res.push(parseInt(msg[i] + msg[i + 1], 16));
        }
      } else {
        for (i = 0; i < msg.length; i++)
          res[i] = msg[i] | 0;
      }
      return res;
    }
    exports2.toArray = toArray;
    function toHex2(msg) {
      var res = "";
      for (var i = 0; i < msg.length; i++)
        res += zero2(msg[i].toString(16));
      return res;
    }
    exports2.toHex = toHex2;
    function htonl(w2) {
      var res = w2 >>> 24 | w2 >>> 8 & 65280 | w2 << 8 & 16711680 | (w2 & 255) << 24;
      return res >>> 0;
    }
    exports2.htonl = htonl;
    function toHex32(msg, endian) {
      var res = "";
      for (var i = 0; i < msg.length; i++) {
        var w2 = msg[i];
        if (endian === "little")
          w2 = htonl(w2);
        res += zero8(w2.toString(16));
      }
      return res;
    }
    exports2.toHex32 = toHex32;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    exports2.zero2 = zero2;
    function zero8(word) {
      if (word.length === 7)
        return "0" + word;
      else if (word.length === 6)
        return "00" + word;
      else if (word.length === 5)
        return "000" + word;
      else if (word.length === 4)
        return "0000" + word;
      else if (word.length === 3)
        return "00000" + word;
      else if (word.length === 2)
        return "000000" + word;
      else if (word.length === 1)
        return "0000000" + word;
      else
        return word;
    }
    exports2.zero8 = zero8;
    function join32(msg, start, end, endian) {
      var len = end - start;
      assert(len % 4 === 0);
      var res = new Array(len / 4);
      for (var i = 0, k2 = start; i < res.length; i++, k2 += 4) {
        var w2;
        if (endian === "big")
          w2 = msg[k2] << 24 | msg[k2 + 1] << 16 | msg[k2 + 2] << 8 | msg[k2 + 3];
        else
          w2 = msg[k2 + 3] << 24 | msg[k2 + 2] << 16 | msg[k2 + 1] << 8 | msg[k2];
        res[i] = w2 >>> 0;
      }
      return res;
    }
    exports2.join32 = join32;
    function split32(msg, endian) {
      var res = new Array(msg.length * 4);
      for (var i = 0, k2 = 0; i < msg.length; i++, k2 += 4) {
        var m2 = msg[i];
        if (endian === "big") {
          res[k2] = m2 >>> 24;
          res[k2 + 1] = m2 >>> 16 & 255;
          res[k2 + 2] = m2 >>> 8 & 255;
          res[k2 + 3] = m2 & 255;
        } else {
          res[k2 + 3] = m2 >>> 24;
          res[k2 + 2] = m2 >>> 16 & 255;
          res[k2 + 1] = m2 >>> 8 & 255;
          res[k2] = m2 & 255;
        }
      }
      return res;
    }
    exports2.split32 = split32;
    function rotr32(w2, b2) {
      return w2 >>> b2 | w2 << 32 - b2;
    }
    exports2.rotr32 = rotr32;
    function rotl32(w2, b2) {
      return w2 << b2 | w2 >>> 32 - b2;
    }
    exports2.rotl32 = rotl32;
    function sum32(a, b2) {
      return a + b2 >>> 0;
    }
    exports2.sum32 = sum32;
    function sum32_3(a, b2, c) {
      return a + b2 + c >>> 0;
    }
    exports2.sum32_3 = sum32_3;
    function sum32_4(a, b2, c, d2) {
      return a + b2 + c + d2 >>> 0;
    }
    exports2.sum32_4 = sum32_4;
    function sum32_5(a, b2, c, d2, e) {
      return a + b2 + c + d2 + e >>> 0;
    }
    exports2.sum32_5 = sum32_5;
    function sum64(buf, pos, ah, al) {
      var bh = buf[pos];
      var bl = buf[pos + 1];
      var lo2 = al + bl >>> 0;
      var hi2 = (lo2 < al ? 1 : 0) + ah + bh;
      buf[pos] = hi2 >>> 0;
      buf[pos + 1] = lo2;
    }
    exports2.sum64 = sum64;
    function sum64_hi(ah, al, bh, bl) {
      var lo2 = al + bl >>> 0;
      var hi2 = (lo2 < al ? 1 : 0) + ah + bh;
      return hi2 >>> 0;
    }
    exports2.sum64_hi = sum64_hi;
    function sum64_lo(ah, al, bh, bl) {
      var lo2 = al + bl;
      return lo2 >>> 0;
    }
    exports2.sum64_lo = sum64_lo;
    function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
      var carry = 0;
      var lo2 = al;
      lo2 = lo2 + bl >>> 0;
      carry += lo2 < al ? 1 : 0;
      lo2 = lo2 + cl >>> 0;
      carry += lo2 < cl ? 1 : 0;
      lo2 = lo2 + dl >>> 0;
      carry += lo2 < dl ? 1 : 0;
      var hi2 = ah + bh + ch + dh + carry;
      return hi2 >>> 0;
    }
    exports2.sum64_4_hi = sum64_4_hi;
    function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
      var lo2 = al + bl + cl + dl;
      return lo2 >>> 0;
    }
    exports2.sum64_4_lo = sum64_4_lo;
    function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var carry = 0;
      var lo2 = al;
      lo2 = lo2 + bl >>> 0;
      carry += lo2 < al ? 1 : 0;
      lo2 = lo2 + cl >>> 0;
      carry += lo2 < cl ? 1 : 0;
      lo2 = lo2 + dl >>> 0;
      carry += lo2 < dl ? 1 : 0;
      lo2 = lo2 + el >>> 0;
      carry += lo2 < el ? 1 : 0;
      var hi2 = ah + bh + ch + dh + eh + carry;
      return hi2 >>> 0;
    }
    exports2.sum64_5_hi = sum64_5_hi;
    function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var lo2 = al + bl + cl + dl + el;
      return lo2 >>> 0;
    }
    exports2.sum64_5_lo = sum64_5_lo;
    function rotr64_hi(ah, al, num) {
      var r = al << 32 - num | ah >>> num;
      return r >>> 0;
    }
    exports2.rotr64_hi = rotr64_hi;
    function rotr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    exports2.rotr64_lo = rotr64_lo;
    function shr64_hi(ah, al, num) {
      return ah >>> num;
    }
    exports2.shr64_hi = shr64_hi;
    function shr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    exports2.shr64_lo = shr64_lo;
  }
});

// node_modules/hash.js/lib/hash/common.js
var require_common = __commonJS({
  "node_modules/hash.js/lib/hash/common.js"(exports2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function BlockHash() {
      this.pending = null;
      this.pendingTotal = 0;
      this.blockSize = this.constructor.blockSize;
      this.outSize = this.constructor.outSize;
      this.hmacStrength = this.constructor.hmacStrength;
      this.padLength = this.constructor.padLength / 8;
      this.endian = "big";
      this._delta8 = this.blockSize / 8;
      this._delta32 = this.blockSize / 32;
    }
    exports2.BlockHash = BlockHash;
    BlockHash.prototype.update = function update(msg, enc) {
      msg = utils.toArray(msg, enc);
      if (!this.pending)
        this.pending = msg;
      else
        this.pending = this.pending.concat(msg);
      this.pendingTotal += msg.length;
      if (this.pending.length >= this._delta8) {
        msg = this.pending;
        var r = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r, msg.length);
        if (this.pending.length === 0)
          this.pending = null;
        msg = utils.join32(msg, 0, msg.length - r, this.endian);
        for (var i = 0; i < msg.length; i += this._delta32)
          this._update(msg, i, i + this._delta32);
      }
      return this;
    };
    BlockHash.prototype.digest = function digest(enc) {
      this.update(this._pad());
      assert(this.pending === null);
      return this._digest(enc);
    };
    BlockHash.prototype._pad = function pad() {
      var len = this.pendingTotal;
      var bytes3 = this._delta8;
      var k2 = bytes3 - (len + this.padLength) % bytes3;
      var res = new Array(k2 + this.padLength);
      res[0] = 128;
      for (var i = 1; i < k2; i++)
        res[i] = 0;
      len <<= 3;
      if (this.endian === "big") {
        for (var t = 8; t < this.padLength; t++)
          res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = len >>> 24 & 255;
        res[i++] = len >>> 16 & 255;
        res[i++] = len >>> 8 & 255;
        res[i++] = len & 255;
      } else {
        res[i++] = len & 255;
        res[i++] = len >>> 8 & 255;
        res[i++] = len >>> 16 & 255;
        res[i++] = len >>> 24 & 255;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        for (t = 8; t < this.padLength; t++)
          res[i++] = 0;
      }
      return res;
    };
  }
});

// node_modules/hash.js/lib/hash/sha/common.js
var require_common2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/common.js"(exports2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var rotr32 = utils.rotr32;
    function ft_1(s, x2, y2, z2) {
      if (s === 0)
        return ch32(x2, y2, z2);
      if (s === 1 || s === 3)
        return p32(x2, y2, z2);
      if (s === 2)
        return maj32(x2, y2, z2);
    }
    exports2.ft_1 = ft_1;
    function ch32(x2, y2, z2) {
      return x2 & y2 ^ ~x2 & z2;
    }
    exports2.ch32 = ch32;
    function maj32(x2, y2, z2) {
      return x2 & y2 ^ x2 & z2 ^ y2 & z2;
    }
    exports2.maj32 = maj32;
    function p32(x2, y2, z2) {
      return x2 ^ y2 ^ z2;
    }
    exports2.p32 = p32;
    function s0_256(x2) {
      return rotr32(x2, 2) ^ rotr32(x2, 13) ^ rotr32(x2, 22);
    }
    exports2.s0_256 = s0_256;
    function s1_256(x2) {
      return rotr32(x2, 6) ^ rotr32(x2, 11) ^ rotr32(x2, 25);
    }
    exports2.s1_256 = s1_256;
    function g0_256(x2) {
      return rotr32(x2, 7) ^ rotr32(x2, 18) ^ x2 >>> 3;
    }
    exports2.g0_256 = g0_256;
    function g1_256(x2) {
      return rotr32(x2, 17) ^ rotr32(x2, 19) ^ x2 >>> 10;
    }
    exports2.g1_256 = g1_256;
  }
});

// node_modules/hash.js/lib/hash/sha/1.js
var require__ = __commonJS({
  "node_modules/hash.js/lib/hash/sha/1.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_5 = utils.sum32_5;
    var ft_1 = shaCommon.ft_1;
    var BlockHash = common.BlockHash;
    var sha1_K = [
      1518500249,
      1859775393,
      2400959708,
      3395469782
    ];
    function SHA1() {
      if (!(this instanceof SHA1))
        return new SHA1();
      BlockHash.call(this);
      this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
      ];
      this.W = new Array(80);
    }
    utils.inherits(SHA1, BlockHash);
    module2.exports = SHA1;
    SHA1.blockSize = 512;
    SHA1.outSize = 160;
    SHA1.hmacStrength = 80;
    SHA1.padLength = 64;
    SHA1.prototype._update = function _update(msg, start) {
      var W3 = this.W;
      for (var i = 0; i < 16; i++)
        W3[i] = msg[start + i];
      for (; i < W3.length; i++)
        W3[i] = rotl32(W3[i - 3] ^ W3[i - 8] ^ W3[i - 14] ^ W3[i - 16], 1);
      var a = this.h[0];
      var b2 = this.h[1];
      var c = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      for (i = 0; i < W3.length; i++) {
        var s = ~~(i / 20);
        var t = sum32_5(rotl32(a, 5), ft_1(s, b2, c, d2), e, W3[i], sha1_K[s]);
        e = d2;
        d2 = c;
        c = rotl32(b2, 30);
        b2 = a;
        a = t;
      }
      this.h[0] = sum32(this.h[0], a);
      this.h[1] = sum32(this.h[1], b2);
      this.h[2] = sum32(this.h[2], c);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
    };
    SHA1.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/256.js
var require__2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/256.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var assert = require_minimalistic_assert();
    var sum32 = utils.sum32;
    var sum32_4 = utils.sum32_4;
    var sum32_5 = utils.sum32_5;
    var ch32 = shaCommon.ch32;
    var maj32 = shaCommon.maj32;
    var s0_256 = shaCommon.s0_256;
    var s1_256 = shaCommon.s1_256;
    var g0_256 = shaCommon.g0_256;
    var g1_256 = shaCommon.g1_256;
    var BlockHash = common.BlockHash;
    var sha256_K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    function SHA2563() {
      if (!(this instanceof SHA2563))
        return new SHA2563();
      BlockHash.call(this);
      this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ];
      this.k = sha256_K;
      this.W = new Array(64);
    }
    utils.inherits(SHA2563, BlockHash);
    module2.exports = SHA2563;
    SHA2563.blockSize = 512;
    SHA2563.outSize = 256;
    SHA2563.hmacStrength = 192;
    SHA2563.padLength = 64;
    SHA2563.prototype._update = function _update(msg, start) {
      var W3 = this.W;
      for (var i = 0; i < 16; i++)
        W3[i] = msg[start + i];
      for (; i < W3.length; i++)
        W3[i] = sum32_4(g1_256(W3[i - 2]), W3[i - 7], g0_256(W3[i - 15]), W3[i - 16]);
      var a = this.h[0];
      var b2 = this.h[1];
      var c = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      var f3 = this.h[5];
      var g2 = this.h[6];
      var h2 = this.h[7];
      assert(this.k.length === W3.length);
      for (i = 0; i < W3.length; i++) {
        var T1 = sum32_5(h2, s1_256(e), ch32(e, f3, g2), this.k[i], W3[i]);
        var T2 = sum32(s0_256(a), maj32(a, b2, c));
        h2 = g2;
        g2 = f3;
        f3 = e;
        e = sum32(d2, T1);
        d2 = c;
        c = b2;
        b2 = a;
        a = sum32(T1, T2);
      }
      this.h[0] = sum32(this.h[0], a);
      this.h[1] = sum32(this.h[1], b2);
      this.h[2] = sum32(this.h[2], c);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
      this.h[5] = sum32(this.h[5], f3);
      this.h[6] = sum32(this.h[6], g2);
      this.h[7] = sum32(this.h[7], h2);
    };
    SHA2563.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/224.js
var require__3 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/224.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var SHA2563 = require__2();
    function SHA224() {
      if (!(this instanceof SHA224))
        return new SHA224();
      SHA2563.call(this);
      this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
      ];
    }
    utils.inherits(SHA224, SHA2563);
    module2.exports = SHA224;
    SHA224.blockSize = 512;
    SHA224.outSize = 224;
    SHA224.hmacStrength = 192;
    SHA224.padLength = 64;
    SHA224.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 7), "big");
      else
        return utils.split32(this.h.slice(0, 7), "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/512.js
var require__4 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/512.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var common = require_common();
    var assert = require_minimalistic_assert();
    var rotr64_hi = utils.rotr64_hi;
    var rotr64_lo = utils.rotr64_lo;
    var shr64_hi = utils.shr64_hi;
    var shr64_lo = utils.shr64_lo;
    var sum64 = utils.sum64;
    var sum64_hi = utils.sum64_hi;
    var sum64_lo = utils.sum64_lo;
    var sum64_4_hi = utils.sum64_4_hi;
    var sum64_4_lo = utils.sum64_4_lo;
    var sum64_5_hi = utils.sum64_5_hi;
    var sum64_5_lo = utils.sum64_5_lo;
    var BlockHash = common.BlockHash;
    var sha512_K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    function SHA512() {
      if (!(this instanceof SHA512))
        return new SHA512();
      BlockHash.call(this);
      this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
      ];
      this.k = sha512_K;
      this.W = new Array(160);
    }
    utils.inherits(SHA512, BlockHash);
    module2.exports = SHA512;
    SHA512.blockSize = 1024;
    SHA512.outSize = 512;
    SHA512.hmacStrength = 192;
    SHA512.padLength = 128;
    SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
      var W3 = this.W;
      for (var i = 0; i < 32; i++)
        W3[i] = msg[start + i];
      for (; i < W3.length; i += 2) {
        var c0_hi = g1_512_hi(W3[i - 4], W3[i - 3]);
        var c0_lo = g1_512_lo(W3[i - 4], W3[i - 3]);
        var c1_hi = W3[i - 14];
        var c1_lo = W3[i - 13];
        var c2_hi = g0_512_hi(W3[i - 30], W3[i - 29]);
        var c2_lo = g0_512_lo(W3[i - 30], W3[i - 29]);
        var c3_hi = W3[i - 32];
        var c3_lo = W3[i - 31];
        W3[i] = sum64_4_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
        W3[i + 1] = sum64_4_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
      }
    };
    SHA512.prototype._update = function _update(msg, start) {
      this._prepareBlock(msg, start);
      var W3 = this.W;
      var ah = this.h[0];
      var al = this.h[1];
      var bh = this.h[2];
      var bl = this.h[3];
      var ch = this.h[4];
      var cl = this.h[5];
      var dh = this.h[6];
      var dl = this.h[7];
      var eh = this.h[8];
      var el = this.h[9];
      var fh = this.h[10];
      var fl = this.h[11];
      var gh = this.h[12];
      var gl = this.h[13];
      var hh = this.h[14];
      var hl = this.h[15];
      assert(this.k.length === W3.length);
      for (var i = 0; i < W3.length; i += 2) {
        var c0_hi = hh;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
        var c3_hi = this.k[i];
        var c3_lo = this.k[i + 1];
        var c4_hi = W3[i];
        var c4_lo = W3[i + 1];
        var T1_hi = sum64_5_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        var T1_lo = sum64_5_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
        c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        eh = sum64_hi(dh, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
      }
      sum64(this.h, 0, ah, al);
      sum64(this.h, 2, bh, bl);
      sum64(this.h, 4, ch, cl);
      sum64(this.h, 6, dh, dl);
      sum64(this.h, 8, eh, el);
      sum64(this.h, 10, fh, fl);
      sum64(this.h, 12, gh, gl);
      sum64(this.h, 14, hh, hl);
    };
    SHA512.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
    function ch64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ ~xh & zh;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function ch64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ ~xl & zl;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function maj64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ xh & zh ^ yh & zh;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function maj64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ xl & zl ^ yl & zl;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function s0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 28);
      var c1_hi = rotr64_hi(xl, xh, 2);
      var c2_hi = rotr64_hi(xl, xh, 7);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function s0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 28);
      var c1_lo = rotr64_lo(xl, xh, 2);
      var c2_lo = rotr64_lo(xl, xh, 7);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function s1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 14);
      var c1_hi = rotr64_hi(xh, xl, 18);
      var c2_hi = rotr64_hi(xl, xh, 9);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function s1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 14);
      var c1_lo = rotr64_lo(xh, xl, 18);
      var c2_lo = rotr64_lo(xl, xh, 9);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function g0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 1);
      var c1_hi = rotr64_hi(xh, xl, 8);
      var c2_hi = shr64_hi(xh, xl, 7);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function g0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 1);
      var c1_lo = rotr64_lo(xh, xl, 8);
      var c2_lo = shr64_lo(xh, xl, 7);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function g1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 19);
      var c1_hi = rotr64_hi(xl, xh, 29);
      var c2_hi = shr64_hi(xh, xl, 6);
      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0)
        r += 4294967296;
      return r;
    }
    function g1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 19);
      var c1_lo = rotr64_lo(xl, xh, 29);
      var c2_lo = shr64_lo(xh, xl, 6);
      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0)
        r += 4294967296;
      return r;
    }
  }
});

// node_modules/hash.js/lib/hash/sha/384.js
var require__5 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/384.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var SHA512 = require__4();
    function SHA384() {
      if (!(this instanceof SHA384))
        return new SHA384();
      SHA512.call(this);
      this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
      ];
    }
    utils.inherits(SHA384, SHA512);
    module2.exports = SHA384;
    SHA384.blockSize = 1024;
    SHA384.outSize = 384;
    SHA384.hmacStrength = 192;
    SHA384.padLength = 128;
    SHA384.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 12), "big");
      else
        return utils.split32(this.h.slice(0, 12), "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha.js
var require_sha = __commonJS({
  "node_modules/hash.js/lib/hash/sha.js"(exports2) {
    "use strict";
    init_polyfills();
    exports2.sha1 = require__();
    exports2.sha224 = require__3();
    exports2.sha256 = require__2();
    exports2.sha384 = require__5();
    exports2.sha512 = require__4();
  }
});

// node_modules/hash.js/lib/hash/ripemd.js
var require_ripemd = __commonJS({
  "node_modules/hash.js/lib/hash/ripemd.js"(exports2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var common = require_common();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_3 = utils.sum32_3;
    var sum32_4 = utils.sum32_4;
    var BlockHash = common.BlockHash;
    function RIPEMD1602() {
      if (!(this instanceof RIPEMD1602))
        return new RIPEMD1602();
      BlockHash.call(this);
      this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      this.endian = "little";
    }
    utils.inherits(RIPEMD1602, BlockHash);
    exports2.ripemd160 = RIPEMD1602;
    RIPEMD1602.blockSize = 512;
    RIPEMD1602.outSize = 160;
    RIPEMD1602.hmacStrength = 192;
    RIPEMD1602.padLength = 64;
    RIPEMD1602.prototype._update = function update(msg, start) {
      var A2 = this.h[0];
      var B2 = this.h[1];
      var C2 = this.h[2];
      var D2 = this.h[3];
      var E2 = this.h[4];
      var Ah = A2;
      var Bh = B2;
      var Ch = C2;
      var Dh = D2;
      var Eh = E2;
      for (var j2 = 0; j2 < 80; j2++) {
        var T2 = sum32(
          rotl32(
            sum32_4(A2, f3(j2, B2, C2, D2), msg[r[j2] + start], K2(j2)),
            s[j2]
          ),
          E2
        );
        A2 = E2;
        E2 = D2;
        D2 = rotl32(C2, 10);
        C2 = B2;
        B2 = T2;
        T2 = sum32(
          rotl32(
            sum32_4(Ah, f3(79 - j2, Bh, Ch, Dh), msg[rh[j2] + start], Kh(j2)),
            sh[j2]
          ),
          Eh
        );
        Ah = Eh;
        Eh = Dh;
        Dh = rotl32(Ch, 10);
        Ch = Bh;
        Bh = T2;
      }
      T2 = sum32_3(this.h[1], C2, Dh);
      this.h[1] = sum32_3(this.h[2], D2, Eh);
      this.h[2] = sum32_3(this.h[3], E2, Ah);
      this.h[3] = sum32_3(this.h[4], A2, Bh);
      this.h[4] = sum32_3(this.h[0], B2, Ch);
      this.h[0] = T2;
    };
    RIPEMD1602.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "little");
      else
        return utils.split32(this.h, "little");
    };
    function f3(j2, x2, y2, z2) {
      if (j2 <= 15)
        return x2 ^ y2 ^ z2;
      else if (j2 <= 31)
        return x2 & y2 | ~x2 & z2;
      else if (j2 <= 47)
        return (x2 | ~y2) ^ z2;
      else if (j2 <= 63)
        return x2 & z2 | y2 & ~z2;
      else
        return x2 ^ (y2 | ~z2);
    }
    function K2(j2) {
      if (j2 <= 15)
        return 0;
      else if (j2 <= 31)
        return 1518500249;
      else if (j2 <= 47)
        return 1859775393;
      else if (j2 <= 63)
        return 2400959708;
      else
        return 2840853838;
    }
    function Kh(j2) {
      if (j2 <= 15)
        return 1352829926;
      else if (j2 <= 31)
        return 1548603684;
      else if (j2 <= 47)
        return 1836072691;
      else if (j2 <= 63)
        return 2053994217;
      else
        return 0;
    }
    var r = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8,
      3,
      10,
      14,
      4,
      9,
      15,
      8,
      1,
      2,
      7,
      0,
      6,
      13,
      11,
      5,
      12,
      1,
      9,
      11,
      10,
      0,
      8,
      12,
      4,
      13,
      3,
      7,
      15,
      14,
      5,
      6,
      2,
      4,
      0,
      5,
      9,
      7,
      12,
      2,
      10,
      14,
      1,
      3,
      8,
      11,
      6,
      15,
      13
    ];
    var rh = [
      5,
      14,
      7,
      0,
      9,
      2,
      11,
      4,
      13,
      6,
      15,
      8,
      1,
      10,
      3,
      12,
      6,
      11,
      3,
      7,
      0,
      13,
      5,
      10,
      14,
      15,
      8,
      12,
      4,
      9,
      1,
      2,
      15,
      5,
      1,
      3,
      7,
      14,
      6,
      9,
      11,
      8,
      12,
      2,
      10,
      0,
      4,
      13,
      8,
      6,
      4,
      1,
      3,
      11,
      15,
      0,
      5,
      12,
      2,
      13,
      9,
      7,
      10,
      14,
      12,
      15,
      10,
      4,
      1,
      5,
      8,
      7,
      6,
      2,
      13,
      14,
      0,
      3,
      9,
      11
    ];
    var s = [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8,
      7,
      6,
      8,
      13,
      11,
      9,
      7,
      15,
      7,
      12,
      15,
      9,
      11,
      7,
      13,
      12,
      11,
      13,
      6,
      7,
      14,
      9,
      13,
      15,
      14,
      8,
      13,
      6,
      5,
      12,
      7,
      5,
      11,
      12,
      14,
      15,
      14,
      15,
      9,
      8,
      9,
      14,
      5,
      6,
      8,
      6,
      5,
      12,
      9,
      15,
      5,
      11,
      6,
      8,
      13,
      12,
      5,
      12,
      13,
      14,
      11,
      8,
      5,
      6
    ];
    var sh = [
      8,
      9,
      9,
      11,
      13,
      15,
      15,
      5,
      7,
      7,
      8,
      11,
      14,
      14,
      12,
      6,
      9,
      13,
      15,
      7,
      12,
      8,
      9,
      11,
      7,
      7,
      12,
      7,
      6,
      15,
      13,
      11,
      9,
      7,
      15,
      11,
      8,
      6,
      6,
      14,
      12,
      13,
      5,
      14,
      13,
      13,
      7,
      5,
      15,
      5,
      8,
      11,
      14,
      14,
      6,
      14,
      6,
      9,
      12,
      9,
      12,
      5,
      15,
      8,
      8,
      5,
      12,
      9,
      12,
      5,
      14,
      6,
      8,
      13,
      6,
      5,
      15,
      13,
      11,
      11
    ];
  }
});

// node_modules/hash.js/lib/hash/hmac.js
var require_hmac = __commonJS({
  "node_modules/hash.js/lib/hash/hmac.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function Hmac(hash, key, enc) {
      if (!(this instanceof Hmac))
        return new Hmac(hash, key, enc);
      this.Hash = hash;
      this.blockSize = hash.blockSize / 8;
      this.outSize = hash.outSize / 8;
      this.inner = null;
      this.outer = null;
      this._init(utils.toArray(key, enc));
    }
    module2.exports = Hmac;
    Hmac.prototype._init = function init(key) {
      if (key.length > this.blockSize)
        key = new this.Hash().update(key).digest();
      assert(key.length <= this.blockSize);
      for (var i = key.length; i < this.blockSize; i++)
        key.push(0);
      for (i = 0; i < key.length; i++)
        key[i] ^= 54;
      this.inner = new this.Hash().update(key);
      for (i = 0; i < key.length; i++)
        key[i] ^= 106;
      this.outer = new this.Hash().update(key);
    };
    Hmac.prototype.update = function update(msg, enc) {
      this.inner.update(msg, enc);
      return this;
    };
    Hmac.prototype.digest = function digest(enc) {
      this.outer.update(this.inner.digest());
      return this.outer.digest(enc);
    };
  }
});

// node_modules/hash.js/lib/hash.js
var require_hash = __commonJS({
  "node_modules/hash.js/lib/hash.js"(exports2) {
    init_polyfills();
    var hash = exports2;
    hash.utils = require_utils3();
    hash.common = require_common();
    hash.sha = require_sha();
    hash.ripemd = require_ripemd();
    hash.hmac = require_hmac();
    hash.sha1 = hash.sha.sha1;
    hash.sha256 = hash.sha.sha256;
    hash.sha224 = hash.sha.sha224;
    hash.sha384 = hash.sha.sha384;
    hash.sha512 = hash.sha.sha512;
    hash.ripemd160 = hash.ripemd.ripemd160;
  }
});

// node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js
var require_secp256k1 = __commonJS({
  "node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"(exports2, module2) {
    init_polyfills();
    module2.exports = {
      doubles: {
        step: 4,
        points: [
          [
            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
          ],
          [
            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
          ],
          [
            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
          ],
          [
            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
          ],
          [
            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
          ],
          [
            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
          ],
          [
            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
          ],
          [
            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
          ],
          [
            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
          ],
          [
            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
          ],
          [
            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
          ],
          [
            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
          ],
          [
            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
          ],
          [
            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
          ],
          [
            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
          ],
          [
            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
          ],
          [
            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
          ],
          [
            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
          ],
          [
            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
          ],
          [
            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
          ],
          [
            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
          ],
          [
            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
          ],
          [
            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
          ],
          [
            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
          ],
          [
            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
          ],
          [
            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
          ],
          [
            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
          ],
          [
            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
          ],
          [
            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
          ],
          [
            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
          ],
          [
            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
          ],
          [
            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
          ],
          [
            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
          ],
          [
            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
          ],
          [
            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
          ],
          [
            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
          ],
          [
            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
          ],
          [
            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
          ],
          [
            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
          ],
          [
            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
          ],
          [
            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
          ],
          [
            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
          ],
          [
            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
          ],
          [
            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
          ],
          [
            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
          ],
          [
            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
          ],
          [
            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
          ],
          [
            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
          ],
          [
            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
          ],
          [
            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
          ],
          [
            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
          ],
          [
            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
          ],
          [
            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
          ],
          [
            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
          ],
          [
            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
          ],
          [
            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
          ],
          [
            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
          ],
          [
            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
          ],
          [
            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
          ],
          [
            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
          ],
          [
            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
          ],
          [
            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
          ],
          [
            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
          ],
          [
            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
          ],
          [
            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
          ]
        ]
      },
      naf: {
        wnd: 7,
        points: [
          [
            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
          ],
          [
            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
          ],
          [
            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
          ],
          [
            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
          ],
          [
            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
          ],
          [
            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
          ],
          [
            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
          ],
          [
            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
          ],
          [
            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
          ],
          [
            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
          ],
          [
            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
          ],
          [
            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
          ],
          [
            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
          ],
          [
            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
          ],
          [
            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
          ],
          [
            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
          ],
          [
            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
          ],
          [
            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
          ],
          [
            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
          ],
          [
            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
          ],
          [
            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
          ],
          [
            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
          ],
          [
            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
          ],
          [
            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
          ],
          [
            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
          ],
          [
            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
          ],
          [
            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
          ],
          [
            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
          ],
          [
            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
          ],
          [
            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
          ],
          [
            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
          ],
          [
            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
          ],
          [
            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
          ],
          [
            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
          ],
          [
            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
          ],
          [
            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
          ],
          [
            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
          ],
          [
            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
          ],
          [
            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
          ],
          [
            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
          ],
          [
            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
          ],
          [
            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
          ],
          [
            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
          ],
          [
            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
          ],
          [
            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
          ],
          [
            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
          ],
          [
            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
          ],
          [
            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
          ],
          [
            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
          ],
          [
            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
          ],
          [
            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
          ],
          [
            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
          ],
          [
            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
          ],
          [
            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
          ],
          [
            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
          ],
          [
            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
          ],
          [
            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
          ],
          [
            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
          ],
          [
            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
          ],
          [
            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
          ],
          [
            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
          ],
          [
            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
          ],
          [
            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
          ],
          [
            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
          ],
          [
            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
          ],
          [
            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
          ],
          [
            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
          ],
          [
            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
          ],
          [
            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
          ],
          [
            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
          ],
          [
            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
          ],
          [
            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
          ],
          [
            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
          ],
          [
            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
          ],
          [
            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
          ],
          [
            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
          ],
          [
            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
          ],
          [
            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
          ],
          [
            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
          ],
          [
            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
          ],
          [
            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
          ],
          [
            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
          ],
          [
            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
          ],
          [
            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
          ],
          [
            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
          ],
          [
            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
          ],
          [
            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
          ],
          [
            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
          ],
          [
            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
          ],
          [
            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
          ],
          [
            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
          ],
          [
            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
          ],
          [
            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
          ],
          [
            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
          ],
          [
            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
          ],
          [
            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
          ],
          [
            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
          ],
          [
            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
          ],
          [
            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
          ],
          [
            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
          ],
          [
            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
          ],
          [
            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
          ],
          [
            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
          ],
          [
            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
          ],
          [
            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
          ],
          [
            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
          ],
          [
            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
          ],
          [
            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
          ],
          [
            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
          ],
          [
            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
          ],
          [
            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
          ],
          [
            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
          ],
          [
            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
          ],
          [
            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
          ],
          [
            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
          ],
          [
            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
          ],
          [
            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
          ],
          [
            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
          ],
          [
            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
          ],
          [
            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
          ],
          [
            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
          ],
          [
            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
          ],
          [
            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
          ],
          [
            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
          ],
          [
            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
          ],
          [
            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
          ],
          [
            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
          ]
        ]
      }
    };
  }
});

// node_modules/elliptic/lib/elliptic/curves.js
var require_curves = __commonJS({
  "node_modules/elliptic/lib/elliptic/curves.js"(exports2) {
    "use strict";
    init_polyfills();
    var curves = exports2;
    var hash = require_hash();
    var curve = require_curve();
    var utils = require_utils2();
    var assert = utils.assert;
    function PresetCurve(options) {
      if (options.type === "short")
        this.curve = new curve.short(options);
      else if (options.type === "edwards")
        this.curve = new curve.edwards(options);
      else
        this.curve = new curve.mont(options);
      this.g = this.curve.g;
      this.n = this.curve.n;
      this.hash = options.hash;
      assert(this.g.validate(), "Invalid curve");
      assert(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    curves.PresetCurve = PresetCurve;
    function defineCurve(name, options) {
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        get: function() {
          var curve2 = new PresetCurve(options);
          Object.defineProperty(curves, name, {
            configurable: true,
            enumerable: true,
            value: curve2
          });
          return curve2;
        }
      });
    }
    defineCurve("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: hash.sha256,
      gRed: false,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
      ]
    });
    defineCurve("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: hash.sha256,
      gRed: false,
      g: [
        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
      ]
    });
    defineCurve("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: hash.sha256,
      gRed: false,
      g: [
        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
      ]
    });
    defineCurve("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: hash.sha384,
      gRed: false,
      g: [
        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
      ]
    });
    defineCurve("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: hash.sha512,
      gRed: false,
      g: [
        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
      ]
    });
    defineCurve("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "9"
      ]
    });
    defineCurve("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      // -121665 * (121666^(-1)) (mod P)
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
        // 4/5
        "6666666666666666666666666666666666666666666666666666666666666658"
      ]
    });
    var pre;
    try {
      pre = require_secp256k1();
    } catch (e) {
      pre = void 0;
    }
    defineCurve("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: hash.sha256,
      // Precomputed endomorphism
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3"
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15"
        }
      ],
      gRed: false,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        pre
      ]
    });
  }
});

// node_modules/hmac-drbg/lib/hmac-drbg.js
var require_hmac_drbg = __commonJS({
  "node_modules/hmac-drbg/lib/hmac-drbg.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var hash = require_hash();
    var utils = require_utils();
    var assert = require_minimalistic_assert();
    function HmacDRBG(options) {
      if (!(this instanceof HmacDRBG))
        return new HmacDRBG(options);
      this.hash = options.hash;
      this.predResist = !!options.predResist;
      this.outLen = this.hash.outSize;
      this.minEntropy = options.minEntropy || this.hash.hmacStrength;
      this._reseed = null;
      this.reseedInterval = null;
      this.K = null;
      this.V = null;
      var entropy = utils.toArray(options.entropy, options.entropyEnc || "hex");
      var nonce = utils.toArray(options.nonce, options.nonceEnc || "hex");
      var pers = utils.toArray(options.pers, options.persEnc || "hex");
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._init(entropy, nonce, pers);
    }
    module2.exports = HmacDRBG;
    HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
      var seed = entropy.concat(nonce).concat(pers);
      this.K = new Array(this.outLen / 8);
      this.V = new Array(this.outLen / 8);
      for (var i = 0; i < this.V.length; i++) {
        this.K[i] = 0;
        this.V[i] = 1;
      }
      this._update(seed);
      this._reseed = 1;
      this.reseedInterval = 281474976710656;
    };
    HmacDRBG.prototype._hmac = function hmac() {
      return new hash.hmac(this.hash, this.K);
    };
    HmacDRBG.prototype._update = function update(seed) {
      var kmac = this._hmac().update(this.V).update([0]);
      if (seed)
        kmac = kmac.update(seed);
      this.K = kmac.digest();
      this.V = this._hmac().update(this.V).digest();
      if (!seed)
        return;
      this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
      this.V = this._hmac().update(this.V).digest();
    };
    HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
      if (typeof entropyEnc !== "string") {
        addEnc = add;
        add = entropyEnc;
        entropyEnc = null;
      }
      entropy = utils.toArray(entropy, entropyEnc);
      add = utils.toArray(add, addEnc);
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._update(entropy.concat(add || []));
      this._reseed = 1;
    };
    HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
      if (this._reseed > this.reseedInterval)
        throw new Error("Reseed is required");
      if (typeof enc !== "string") {
        addEnc = add;
        add = enc;
        enc = null;
      }
      if (add) {
        add = utils.toArray(add, addEnc || "hex");
        this._update(add);
      }
      var temp = [];
      while (temp.length < len) {
        this.V = this._hmac().update(this.V).digest();
        temp = temp.concat(this.V);
      }
      var res = temp.slice(0, len);
      this._update(add);
      this._reseed++;
      return utils.encode(res, enc);
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/key.js
var require_key = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/key.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function KeyPair(ec2, options) {
      this.ec = ec2;
      this.priv = null;
      this.pub = null;
      if (options.priv)
        this._importPrivate(options.priv, options.privEnc);
      if (options.pub)
        this._importPublic(options.pub, options.pubEnc);
    }
    module2.exports = KeyPair;
    KeyPair.fromPublic = function fromPublic(ec2, pub, enc) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(ec2, {
        pub,
        pubEnc: enc
      });
    };
    KeyPair.fromPrivate = function fromPrivate(ec2, priv, enc) {
      if (priv instanceof KeyPair)
        return priv;
      return new KeyPair(ec2, {
        priv,
        privEnc: enc
      });
    };
    KeyPair.prototype.validate = function validate() {
      var pub = this.getPublic();
      if (pub.isInfinity())
        return { result: false, reason: "Invalid public key" };
      if (!pub.validate())
        return { result: false, reason: "Public key is not a point" };
      if (!pub.mul(this.ec.curve.n).isInfinity())
        return { result: false, reason: "Public key * N != O" };
      return { result: true, reason: null };
    };
    KeyPair.prototype.getPublic = function getPublic(compact, enc) {
      if (typeof compact === "string") {
        enc = compact;
        compact = null;
      }
      if (!this.pub)
        this.pub = this.ec.g.mul(this.priv);
      if (!enc)
        return this.pub;
      return this.pub.encode(enc, compact);
    };
    KeyPair.prototype.getPrivate = function getPrivate(enc) {
      if (enc === "hex")
        return this.priv.toString(16, 2);
      else
        return this.priv;
    };
    KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
      this.priv = new BN(key, enc || 16);
      this.priv = this.priv.umod(this.ec.curve.n);
    };
    KeyPair.prototype._importPublic = function _importPublic(key, enc) {
      if (key.x || key.y) {
        if (this.ec.curve.type === "mont") {
          assert(key.x, "Need x coordinate");
        } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
          assert(key.x && key.y, "Need both x and y coordinate");
        }
        this.pub = this.ec.curve.point(key.x, key.y);
        return;
      }
      this.pub = this.ec.curve.decodePoint(key, enc);
    };
    KeyPair.prototype.derive = function derive(pub) {
      if (!pub.validate()) {
        assert(pub.validate(), "public point not validated");
      }
      return pub.mul(this.priv).getX();
    };
    KeyPair.prototype.sign = function sign3(msg, enc, options) {
      return this.ec.sign(msg, this, enc, options);
    };
    KeyPair.prototype.verify = function verify3(msg, signature) {
      return this.ec.verify(msg, signature, this);
    };
    KeyPair.prototype.inspect = function inspect() {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/signature.js
var require_signature = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/signature.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function Signature2(options, enc) {
      if (options instanceof Signature2)
        return options;
      if (this._importDER(options, enc))
        return;
      assert(options.r && options.s, "Signature without r or s");
      this.r = new BN(options.r, 16);
      this.s = new BN(options.s, 16);
      if (options.recoveryParam === void 0)
        this.recoveryParam = null;
      else
        this.recoveryParam = options.recoveryParam;
    }
    module2.exports = Signature2;
    function Position() {
      this.place = 0;
    }
    function getLength(buf, p2) {
      var initial = buf[p2.place++];
      if (!(initial & 128)) {
        return initial;
      }
      var octetLen = initial & 15;
      if (octetLen === 0 || octetLen > 4) {
        return false;
      }
      var val = 0;
      for (var i = 0, off = p2.place; i < octetLen; i++, off++) {
        val <<= 8;
        val |= buf[off];
        val >>>= 0;
      }
      if (val <= 127) {
        return false;
      }
      p2.place = off;
      return val;
    }
    function rmPadding(buf) {
      var i = 0;
      var len = buf.length - 1;
      while (!buf[i] && !(buf[i + 1] & 128) && i < len) {
        i++;
      }
      if (i === 0) {
        return buf;
      }
      return buf.slice(i);
    }
    Signature2.prototype._importDER = function _importDER(data, enc) {
      data = utils.toArray(data, enc);
      var p2 = new Position();
      if (data[p2.place++] !== 48) {
        return false;
      }
      var len = getLength(data, p2);
      if (len === false) {
        return false;
      }
      if (len + p2.place !== data.length) {
        return false;
      }
      if (data[p2.place++] !== 2) {
        return false;
      }
      var rlen = getLength(data, p2);
      if (rlen === false) {
        return false;
      }
      var r = data.slice(p2.place, rlen + p2.place);
      p2.place += rlen;
      if (data[p2.place++] !== 2) {
        return false;
      }
      var slen = getLength(data, p2);
      if (slen === false) {
        return false;
      }
      if (data.length !== slen + p2.place) {
        return false;
      }
      var s = data.slice(p2.place, slen + p2.place);
      if (r[0] === 0) {
        if (r[1] & 128) {
          r = r.slice(1);
        } else {
          return false;
        }
      }
      if (s[0] === 0) {
        if (s[1] & 128) {
          s = s.slice(1);
        } else {
          return false;
        }
      }
      this.r = new BN(r);
      this.s = new BN(s);
      this.recoveryParam = null;
      return true;
    };
    function constructLength(arr, len) {
      if (len < 128) {
        arr.push(len);
        return;
      }
      var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
      arr.push(octets | 128);
      while (--octets) {
        arr.push(len >>> (octets << 3) & 255);
      }
      arr.push(len);
    }
    Signature2.prototype.toDER = function toDER(enc) {
      var r = this.r.toArray();
      var s = this.s.toArray();
      if (r[0] & 128)
        r = [0].concat(r);
      if (s[0] & 128)
        s = [0].concat(s);
      r = rmPadding(r);
      s = rmPadding(s);
      while (!s[0] && !(s[1] & 128)) {
        s = s.slice(1);
      }
      var arr = [2];
      constructLength(arr, r.length);
      arr = arr.concat(r);
      arr.push(2);
      constructLength(arr, s.length);
      var backHalf = arr.concat(s);
      var res = [48];
      constructLength(res, backHalf.length);
      res = res.concat(backHalf);
      return utils.encode(res, enc);
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/index.js
var require_ec = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/index.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var HmacDRBG = require_hmac_drbg();
    var utils = require_utils2();
    var curves = require_curves();
    var rand = require_brorand();
    var assert = utils.assert;
    var KeyPair = require_key();
    var Signature2 = require_signature();
    function EC(options) {
      if (!(this instanceof EC))
        return new EC(options);
      if (typeof options === "string") {
        assert(
          Object.prototype.hasOwnProperty.call(curves, options),
          "Unknown curve " + options
        );
        options = curves[options];
      }
      if (options instanceof curves.PresetCurve)
        options = { curve: options };
      this.curve = options.curve.curve;
      this.n = this.curve.n;
      this.nh = this.n.ushrn(1);
      this.g = this.curve.g;
      this.g = options.curve.g;
      this.g.precompute(options.curve.n.bitLength() + 1);
      this.hash = options.hash || options.curve.hash;
    }
    module2.exports = EC;
    EC.prototype.keyPair = function keyPair(options) {
      return new KeyPair(this, options);
    };
    EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
      return KeyPair.fromPrivate(this, priv, enc);
    };
    EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
      return KeyPair.fromPublic(this, pub, enc);
    };
    EC.prototype.genKeyPair = function genKeyPair(options) {
      if (!options)
        options = {};
      var drbg = new HmacDRBG({
        hash: this.hash,
        pers: options.pers,
        persEnc: options.persEnc || "utf8",
        entropy: options.entropy || rand(this.hash.hmacStrength),
        entropyEnc: options.entropy && options.entropyEnc || "utf8",
        nonce: this.n.toArray()
      });
      var bytes3 = this.n.byteLength();
      var ns2 = this.n.sub(new BN(2));
      for (; ; ) {
        var priv = new BN(drbg.generate(bytes3));
        if (priv.cmp(ns2) > 0)
          continue;
        priv.iaddn(1);
        return this.keyFromPrivate(priv);
      }
    };
    EC.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
      var delta = msg.byteLength() * 8 - this.n.bitLength();
      if (delta > 0)
        msg = msg.ushrn(delta);
      if (!truncOnly && msg.cmp(this.n) >= 0)
        return msg.sub(this.n);
      else
        return msg;
    };
    EC.prototype.sign = function sign3(msg, key, enc, options) {
      if (typeof enc === "object") {
        options = enc;
        enc = null;
      }
      if (!options)
        options = {};
      key = this.keyFromPrivate(key, enc);
      msg = this._truncateToN(new BN(msg, 16));
      var bytes3 = this.n.byteLength();
      var bkey = key.getPrivate().toArray("be", bytes3);
      var nonce = msg.toArray("be", bytes3);
      var drbg = new HmacDRBG({
        hash: this.hash,
        entropy: bkey,
        nonce,
        pers: options.pers,
        persEnc: options.persEnc || "utf8"
      });
      var ns1 = this.n.sub(new BN(1));
      for (var iter = 0; ; iter++) {
        var k2 = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
        k2 = this._truncateToN(k2, true);
        if (k2.cmpn(1) <= 0 || k2.cmp(ns1) >= 0)
          continue;
        var kp = this.g.mul(k2);
        if (kp.isInfinity())
          continue;
        var kpX = kp.getX();
        var r = kpX.umod(this.n);
        if (r.cmpn(0) === 0)
          continue;
        var s = k2.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
        s = s.umod(this.n);
        if (s.cmpn(0) === 0)
          continue;
        var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);
        if (options.canonical && s.cmp(this.nh) > 0) {
          s = this.n.sub(s);
          recoveryParam ^= 1;
        }
        return new Signature2({ r, s, recoveryParam });
      }
    };
    EC.prototype.verify = function verify3(msg, signature, key, enc) {
      msg = this._truncateToN(new BN(msg, 16));
      key = this.keyFromPublic(key, enc);
      signature = new Signature2(signature, "hex");
      var r = signature.r;
      var s = signature.s;
      if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
        return false;
      if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
        return false;
      var sinv = s.invm(this.n);
      var u1 = sinv.mul(msg).umod(this.n);
      var u2 = sinv.mul(r).umod(this.n);
      var p2;
      if (!this.curve._maxwellTrick) {
        p2 = this.g.mulAdd(u1, key.getPublic(), u2);
        if (p2.isInfinity())
          return false;
        return p2.getX().umod(this.n).cmp(r) === 0;
      }
      p2 = this.g.jmulAdd(u1, key.getPublic(), u2);
      if (p2.isInfinity())
        return false;
      return p2.eqXToP(r);
    };
    EC.prototype.recoverPubKey = function(msg, signature, j2, enc) {
      assert((3 & j2) === j2, "The recovery param is more than two bits");
      signature = new Signature2(signature, enc);
      var n = this.n;
      var e = new BN(msg);
      var r = signature.r;
      var s = signature.s;
      var isYOdd = j2 & 1;
      var isSecondKey = j2 >> 1;
      if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
        throw new Error("Unable to find sencond key candinate");
      if (isSecondKey)
        r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
      else
        r = this.curve.pointFromX(r, isYOdd);
      var rInv = signature.r.invm(n);
      var s1 = n.sub(e).mul(rInv).umod(n);
      var s2 = s.mul(rInv).umod(n);
      return this.g.mulAdd(s1, r, s2);
    };
    EC.prototype.getKeyRecoveryParam = function(e, signature, Q2, enc) {
      signature = new Signature2(signature, enc);
      if (signature.recoveryParam !== null)
        return signature.recoveryParam;
      for (var i = 0; i < 4; i++) {
        var Qprime;
        try {
          Qprime = this.recoverPubKey(e, signature, i);
        } catch (e2) {
          continue;
        }
        if (Qprime.eq(Q2))
          return i;
      }
      throw new Error("Unable to find valid recovery factor");
    };
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/key.js
var require_key2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/key.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var cachedProperty = utils.cachedProperty;
    function KeyPair(eddsa, params) {
      this.eddsa = eddsa;
      this._secret = parseBytes(params.secret);
      if (eddsa.isPoint(params.pub))
        this._pub = params.pub;
      else
        this._pubBytes = parseBytes(params.pub);
    }
    KeyPair.fromPublic = function fromPublic(eddsa, pub) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(eddsa, { pub });
    };
    KeyPair.fromSecret = function fromSecret(eddsa, secret) {
      if (secret instanceof KeyPair)
        return secret;
      return new KeyPair(eddsa, { secret });
    };
    KeyPair.prototype.secret = function secret() {
      return this._secret;
    };
    cachedProperty(KeyPair, "pubBytes", function pubBytes() {
      return this.eddsa.encodePoint(this.pub());
    });
    cachedProperty(KeyPair, "pub", function pub() {
      if (this._pubBytes)
        return this.eddsa.decodePoint(this._pubBytes);
      return this.eddsa.g.mul(this.priv());
    });
    cachedProperty(KeyPair, "privBytes", function privBytes() {
      var eddsa = this.eddsa;
      var hash = this.hash();
      var lastIx = eddsa.encodingLength - 1;
      var a = hash.slice(0, eddsa.encodingLength);
      a[0] &= 248;
      a[lastIx] &= 127;
      a[lastIx] |= 64;
      return a;
    });
    cachedProperty(KeyPair, "priv", function priv() {
      return this.eddsa.decodeInt(this.privBytes());
    });
    cachedProperty(KeyPair, "hash", function hash() {
      return this.eddsa.hash().update(this.secret()).digest();
    });
    cachedProperty(KeyPair, "messagePrefix", function messagePrefix() {
      return this.hash().slice(this.eddsa.encodingLength);
    });
    KeyPair.prototype.sign = function sign3(message) {
      assert(this._secret, "KeyPair can only verify");
      return this.eddsa.sign(message, this);
    };
    KeyPair.prototype.verify = function verify3(message, sig) {
      return this.eddsa.verify(message, sig, this);
    };
    KeyPair.prototype.getSecret = function getSecret(enc) {
      assert(this._secret, "KeyPair is public only");
      return utils.encode(this.secret(), enc);
    };
    KeyPair.prototype.getPublic = function getPublic(enc) {
      return utils.encode(this.pubBytes(), enc);
    };
    module2.exports = KeyPair;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/signature.js
var require_signature2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/signature.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    var cachedProperty = utils.cachedProperty;
    var parseBytes = utils.parseBytes;
    function Signature2(eddsa, sig) {
      this.eddsa = eddsa;
      if (typeof sig !== "object")
        sig = parseBytes(sig);
      if (Array.isArray(sig)) {
        sig = {
          R: sig.slice(0, eddsa.encodingLength),
          S: sig.slice(eddsa.encodingLength)
        };
      }
      assert(sig.R && sig.S, "Signature without R or S");
      if (eddsa.isPoint(sig.R))
        this._R = sig.R;
      if (sig.S instanceof BN)
        this._S = sig.S;
      this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
      this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
    }
    cachedProperty(Signature2, "S", function S2() {
      return this.eddsa.decodeInt(this.Sencoded());
    });
    cachedProperty(Signature2, "R", function R2() {
      return this.eddsa.decodePoint(this.Rencoded());
    });
    cachedProperty(Signature2, "Rencoded", function Rencoded() {
      return this.eddsa.encodePoint(this.R());
    });
    cachedProperty(Signature2, "Sencoded", function Sencoded() {
      return this.eddsa.encodeInt(this.S());
    });
    Signature2.prototype.toBytes = function toBytes3() {
      return this.Rencoded().concat(this.Sencoded());
    };
    Signature2.prototype.toHex = function toHex2() {
      return utils.encode(this.toBytes(), "hex").toUpperCase();
    };
    module2.exports = Signature2;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/index.js
var require_eddsa = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/index.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var hash = require_hash();
    var curves = require_curves();
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var KeyPair = require_key2();
    var Signature2 = require_signature2();
    function EDDSA(curve) {
      assert(curve === "ed25519", "only tested with ed25519 so far");
      if (!(this instanceof EDDSA))
        return new EDDSA(curve);
      curve = curves[curve].curve;
      this.curve = curve;
      this.g = curve.g;
      this.g.precompute(curve.n.bitLength() + 1);
      this.pointClass = curve.point().constructor;
      this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
      this.hash = hash.sha512;
    }
    module2.exports = EDDSA;
    EDDSA.prototype.sign = function sign3(message, secret) {
      message = parseBytes(message);
      var key = this.keyFromSecret(secret);
      var r = this.hashInt(key.messagePrefix(), message);
      var R2 = this.g.mul(r);
      var Rencoded = this.encodePoint(R2);
      var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
      var S2 = r.add(s_).umod(this.curve.n);
      return this.makeSignature({ R: R2, S: S2, Rencoded });
    };
    EDDSA.prototype.verify = function verify3(message, sig, pub) {
      message = parseBytes(message);
      sig = this.makeSignature(sig);
      var key = this.keyFromPublic(pub);
      var h2 = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
      var SG = this.g.mul(sig.S());
      var RplusAh = sig.R().add(key.pub().mul(h2));
      return RplusAh.eq(SG);
    };
    EDDSA.prototype.hashInt = function hashInt() {
      var hash2 = this.hash();
      for (var i = 0; i < arguments.length; i++)
        hash2.update(arguments[i]);
      return utils.intFromLE(hash2.digest()).umod(this.curve.n);
    };
    EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
      return KeyPair.fromPublic(this, pub);
    };
    EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
      return KeyPair.fromSecret(this, secret);
    };
    EDDSA.prototype.makeSignature = function makeSignature(sig) {
      if (sig instanceof Signature2)
        return sig;
      return new Signature2(this, sig);
    };
    EDDSA.prototype.encodePoint = function encodePoint(point) {
      var enc = point.getY().toArray("le", this.encodingLength);
      enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0;
      return enc;
    };
    EDDSA.prototype.decodePoint = function decodePoint(bytes3) {
      bytes3 = utils.parseBytes(bytes3);
      var lastIx = bytes3.length - 1;
      var normed = bytes3.slice(0, lastIx).concat(bytes3[lastIx] & ~128);
      var xIsOdd = (bytes3[lastIx] & 128) !== 0;
      var y2 = utils.intFromLE(normed);
      return this.curve.pointFromY(y2, xIsOdd);
    };
    EDDSA.prototype.encodeInt = function encodeInt(num) {
      return num.toArray("le", this.encodingLength);
    };
    EDDSA.prototype.decodeInt = function decodeInt(bytes3) {
      return utils.intFromLE(bytes3);
    };
    EDDSA.prototype.isPoint = function isPoint2(val) {
      return val instanceof this.pointClass;
    };
  }
});

// node_modules/elliptic/lib/elliptic.js
var require_elliptic = __commonJS({
  "node_modules/elliptic/lib/elliptic.js"(exports2) {
    "use strict";
    init_polyfills();
    var elliptic = exports2;
    elliptic.version = require_package().version;
    elliptic.utils = require_utils2();
    elliptic.rand = require_brorand();
    elliptic.curve = require_curve();
    elliptic.curves = require_curves();
    elliptic.ec = require_ec();
    elliptic.eddsa = require_eddsa();
  }
});

// node_modules/create-ecdh/browser.js
var require_browser = __commonJS({
  "node_modules/create-ecdh/browser.js"(exports2, module2) {
    init_polyfills();
    var elliptic = require_elliptic();
    var BN = require_bn();
    module2.exports = function createECDH(curve) {
      return new ECDH(curve);
    };
    var aliases = {
      secp256k1: {
        name: "secp256k1",
        byteLength: 32
      },
      secp224r1: {
        name: "p224",
        byteLength: 28
      },
      prime256v1: {
        name: "p256",
        byteLength: 32
      },
      prime192v1: {
        name: "p192",
        byteLength: 24
      },
      ed25519: {
        name: "ed25519",
        byteLength: 32
      },
      secp384r1: {
        name: "p384",
        byteLength: 48
      },
      secp521r1: {
        name: "p521",
        byteLength: 66
      }
    };
    aliases.p224 = aliases.secp224r1;
    aliases.p256 = aliases.secp256r1 = aliases.prime256v1;
    aliases.p192 = aliases.secp192r1 = aliases.prime192v1;
    aliases.p384 = aliases.secp384r1;
    aliases.p521 = aliases.secp521r1;
    function ECDH(curve) {
      this.curveType = aliases[curve];
      if (!this.curveType) {
        this.curveType = {
          name: curve
        };
      }
      this.curve = new elliptic.ec(this.curveType.name);
      this.keys = void 0;
    }
    ECDH.prototype.generateKeys = function(enc, format) {
      this.keys = this.curve.genKeyPair();
      return this.getPublicKey(enc, format);
    };
    ECDH.prototype.computeSecret = function(other, inenc, enc) {
      inenc = inenc || "utf8";
      if (!Buffer.isBuffer(other)) {
        other = new Buffer(other, inenc);
      }
      var otherPub = this.curve.keyFromPublic(other).getPublic();
      var out = otherPub.mul(this.keys.getPrivate()).getX();
      return formatReturnValue(out, enc, this.curveType.byteLength);
    };
    ECDH.prototype.getPublicKey = function(enc, format) {
      var key = this.keys.getPublic(format === "compressed", true);
      if (format === "hybrid") {
        if (key[key.length - 1] % 2) {
          key[0] = 7;
        } else {
          key[0] = 6;
        }
      }
      return formatReturnValue(key, enc);
    };
    ECDH.prototype.getPrivateKey = function(enc) {
      return formatReturnValue(this.keys.getPrivate(), enc);
    };
    ECDH.prototype.setPublicKey = function(pub, enc) {
      enc = enc || "utf8";
      if (!Buffer.isBuffer(pub)) {
        pub = new Buffer(pub, enc);
      }
      this.keys._importPublic(pub);
      return this;
    };
    ECDH.prototype.setPrivateKey = function(priv, enc) {
      enc = enc || "utf8";
      if (!Buffer.isBuffer(priv)) {
        priv = new Buffer(priv, enc);
      }
      var _priv = new BN(priv);
      _priv = _priv.toString(16);
      this.keys = this.curve.genKeyPair();
      this.keys._importPrivate(_priv);
      return this;
    };
    function formatReturnValue(bn2, enc, len) {
      if (!Array.isArray(bn2)) {
        bn2 = bn2.toArray();
      }
      var buf = new Buffer(bn2);
      if (len && buf.length < len) {
        var zeros = new Buffer(len - buf.length);
        zeros.fill(0);
        buf = Buffer.concat([zeros, buf]);
      }
      if (!enc) {
        return buf;
      } else {
        return buf.toString(enc);
      }
    }
  }
});

// node_modules/create-ecdh/index.js
var require_create_ecdh = __commonJS({
  "node_modules/create-ecdh/index.js"(exports2, module2) {
    init_polyfills();
    var createECDH = require("crypto").createECDH;
    module2.exports = createECDH || require_browser();
  }
});

// node_modules/asn1.js/lib/asn1/api.js
var require_api = __commonJS({
  "node_modules/asn1.js/lib/asn1/api.js"(exports2) {
    init_polyfills();
    var asn1 = require_asn1();
    var inherits = require_inherits();
    var api = exports2;
    api.define = function define2(name, body) {
      return new Entity(name, body);
    };
    function Entity(name, body) {
      this.name = name;
      this.body = body;
      this.decoders = {};
      this.encoders = {};
    }
    Entity.prototype._createNamed = function createNamed(base) {
      var named;
      try {
        named = require("vm").runInThisContext(
          "(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})"
        );
      } catch (e) {
        named = function(entity) {
          this._initNamed(entity);
        };
      }
      inherits(named, base);
      named.prototype._initNamed = function initnamed(entity) {
        base.call(this, entity);
      };
      return new named(this);
    };
    Entity.prototype._getDecoder = function _getDecoder(enc) {
      enc = enc || "der";
      if (!this.decoders.hasOwnProperty(enc))
        this.decoders[enc] = this._createNamed(asn1.decoders[enc]);
      return this.decoders[enc];
    };
    Entity.prototype.decode = function decode(data, enc, options) {
      return this._getDecoder(enc).decode(data, options);
    };
    Entity.prototype._getEncoder = function _getEncoder(enc) {
      enc = enc || "der";
      if (!this.encoders.hasOwnProperty(enc))
        this.encoders[enc] = this._createNamed(asn1.encoders[enc]);
      return this.encoders[enc];
    };
    Entity.prototype.encode = function encode(data, enc, reporter) {
      return this._getEncoder(enc).encode(data, reporter);
    };
  }
});

// node_modules/asn1.js/lib/asn1/base/reporter.js
var require_reporter = __commonJS({
  "node_modules/asn1.js/lib/asn1/base/reporter.js"(exports2) {
    init_polyfills();
    var inherits = require_inherits();
    function Reporter(options) {
      this._reporterState = {
        obj: null,
        path: [],
        options: options || {},
        errors: []
      };
    }
    exports2.Reporter = Reporter;
    Reporter.prototype.isError = function isError(obj) {
      return obj instanceof ReporterError;
    };
    Reporter.prototype.save = function save() {
      var state = this._reporterState;
      return { obj: state.obj, pathLen: state.path.length };
    };
    Reporter.prototype.restore = function restore(data) {
      var state = this._reporterState;
      state.obj = data.obj;
      state.path = state.path.slice(0, data.pathLen);
    };
    Reporter.prototype.enterKey = function enterKey(key) {
      return this._reporterState.path.push(key);
    };
    Reporter.prototype.exitKey = function exitKey(index) {
      var state = this._reporterState;
      state.path = state.path.slice(0, index - 1);
    };
    Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
      var state = this._reporterState;
      this.exitKey(index);
      if (state.obj !== null)
        state.obj[key] = value;
    };
    Reporter.prototype.path = function path() {
      return this._reporterState.path.join("/");
    };
    Reporter.prototype.enterObject = function enterObject() {
      var state = this._reporterState;
      var prev = state.obj;
      state.obj = {};
      return prev;
    };
    Reporter.prototype.leaveObject = function leaveObject(prev) {
      var state = this._reporterState;
      var now = state.obj;
      state.obj = prev;
      return now;
    };
    Reporter.prototype.error = function error(msg) {
      var err2;
      var state = this._reporterState;
      var inherited = msg instanceof ReporterError;
      if (inherited) {
        err2 = msg;
      } else {
        err2 = new ReporterError(state.path.map(function(elem) {
          return "[" + JSON.stringify(elem) + "]";
        }).join(""), msg.message || msg, msg.stack);
      }
      if (!state.options.partial)
        throw err2;
      if (!inherited)
        state.errors.push(err2);
      return err2;
    };
    Reporter.prototype.wrapResult = function wrapResult(result) {
      var state = this._reporterState;
      if (!state.options.partial)
        return result;
      return {
        result: this.isError(result) ? null : result,
        errors: state.errors
      };
    };
    function ReporterError(path, msg) {
      this.path = path;
      this.rethrow(msg);
    }
    inherits(ReporterError, Error);
    ReporterError.prototype.rethrow = function rethrow(msg) {
      this.message = msg + " at: " + (this.path || "(shallow)");
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ReporterError);
      if (!this.stack) {
        try {
          throw new Error(this.message);
        } catch (e) {
          this.stack = e.stack;
        }
      }
      return this;
    };
  }
});

// node_modules/asn1.js/lib/asn1/base/buffer.js
var require_buffer = __commonJS({
  "node_modules/asn1.js/lib/asn1/base/buffer.js"(exports2) {
    init_polyfills();
    var inherits = require_inherits();
    var Reporter = require_base2().Reporter;
    var Buffer7 = require("buffer").Buffer;
    function DecoderBuffer(base, options) {
      Reporter.call(this, options);
      if (!Buffer7.isBuffer(base)) {
        this.error("Input not Buffer");
        return;
      }
      this.base = base;
      this.offset = 0;
      this.length = base.length;
    }
    inherits(DecoderBuffer, Reporter);
    exports2.DecoderBuffer = DecoderBuffer;
    DecoderBuffer.prototype.save = function save() {
      return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
    };
    DecoderBuffer.prototype.restore = function restore(save) {
      var res = new DecoderBuffer(this.base);
      res.offset = save.offset;
      res.length = this.offset;
      this.offset = save.offset;
      Reporter.prototype.restore.call(this, save.reporter);
      return res;
    };
    DecoderBuffer.prototype.isEmpty = function isEmpty() {
      return this.offset === this.length;
    };
    DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
      if (this.offset + 1 <= this.length)
        return this.base.readUInt8(this.offset++, true);
      else
        return this.error(fail || "DecoderBuffer overrun");
    };
    DecoderBuffer.prototype.skip = function skip(bytes3, fail) {
      if (!(this.offset + bytes3 <= this.length))
        return this.error(fail || "DecoderBuffer overrun");
      var res = new DecoderBuffer(this.base);
      res._reporterState = this._reporterState;
      res.offset = this.offset;
      res.length = this.offset + bytes3;
      this.offset += bytes3;
      return res;
    };
    DecoderBuffer.prototype.raw = function raw(save) {
      return this.base.slice(save ? save.offset : this.offset, this.length);
    };
    function EncoderBuffer(value, reporter) {
      if (Array.isArray(value)) {
        this.length = 0;
        this.value = value.map(function(item) {
          if (!(item instanceof EncoderBuffer))
            item = new EncoderBuffer(item, reporter);
          this.length += item.length;
          return item;
        }, this);
      } else if (typeof value === "number") {
        if (!(0 <= value && value <= 255))
          return reporter.error("non-byte EncoderBuffer value");
        this.value = value;
        this.length = 1;
      } else if (typeof value === "string") {
        this.value = value;
        this.length = Buffer7.byteLength(value);
      } else if (Buffer7.isBuffer(value)) {
        this.value = value;
        this.length = value.length;
      } else {
        return reporter.error("Unsupported type: " + typeof value);
      }
    }
    exports2.EncoderBuffer = EncoderBuffer;
    EncoderBuffer.prototype.join = function join2(out, offset) {
      if (!out)
        out = new Buffer7(this.length);
      if (!offset)
        offset = 0;
      if (this.length === 0)
        return out;
      if (Array.isArray(this.value)) {
        this.value.forEach(function(item) {
          item.join(out, offset);
          offset += item.length;
        });
      } else {
        if (typeof this.value === "number")
          out[offset] = this.value;
        else if (typeof this.value === "string")
          out.write(this.value, offset);
        else if (Buffer7.isBuffer(this.value))
          this.value.copy(out, offset);
        offset += this.length;
      }
      return out;
    };
  }
});

// node_modules/asn1.js/lib/asn1/base/node.js
var require_node = __commonJS({
  "node_modules/asn1.js/lib/asn1/base/node.js"(exports2, module2) {
    init_polyfills();
    var Reporter = require_base2().Reporter;
    var EncoderBuffer = require_base2().EncoderBuffer;
    var DecoderBuffer = require_base2().DecoderBuffer;
    var assert = require_minimalistic_assert();
    var tags = [
      "seq",
      "seqof",
      "set",
      "setof",
      "objid",
      "bool",
      "gentime",
      "utctime",
      "null_",
      "enum",
      "int",
      "objDesc",
      "bitstr",
      "bmpstr",
      "charstr",
      "genstr",
      "graphstr",
      "ia5str",
      "iso646str",
      "numstr",
      "octstr",
      "printstr",
      "t61str",
      "unistr",
      "utf8str",
      "videostr"
    ];
    var methods = [
      "key",
      "obj",
      "use",
      "optional",
      "explicit",
      "implicit",
      "def",
      "choice",
      "any",
      "contains"
    ].concat(tags);
    var overrided = [
      "_peekTag",
      "_decodeTag",
      "_use",
      "_decodeStr",
      "_decodeObjid",
      "_decodeTime",
      "_decodeNull",
      "_decodeInt",
      "_decodeBool",
      "_decodeList",
      "_encodeComposite",
      "_encodeStr",
      "_encodeObjid",
      "_encodeTime",
      "_encodeNull",
      "_encodeInt",
      "_encodeBool"
    ];
    function Node(enc, parent) {
      var state = {};
      this._baseState = state;
      state.enc = enc;
      state.parent = parent || null;
      state.children = null;
      state.tag = null;
      state.args = null;
      state.reverseArgs = null;
      state.choice = null;
      state.optional = false;
      state.any = false;
      state.obj = false;
      state.use = null;
      state.useDecoder = null;
      state.key = null;
      state["default"] = null;
      state.explicit = null;
      state.implicit = null;
      state.contains = null;
      if (!state.parent) {
        state.children = [];
        this._wrap();
      }
    }
    module2.exports = Node;
    var stateProps = [
      "enc",
      "parent",
      "children",
      "tag",
      "args",
      "reverseArgs",
      "choice",
      "optional",
      "any",
      "obj",
      "use",
      "alteredUse",
      "key",
      "default",
      "explicit",
      "implicit",
      "contains"
    ];
    Node.prototype.clone = function clone() {
      var state = this._baseState;
      var cstate = {};
      stateProps.forEach(function(prop) {
        cstate[prop] = state[prop];
      });
      var res = new this.constructor(cstate.parent);
      res._baseState = cstate;
      return res;
    };
    Node.prototype._wrap = function wrap() {
      var state = this._baseState;
      methods.forEach(function(method) {
        this[method] = function _wrappedMethod() {
          var clone = new this.constructor(this);
          state.children.push(clone);
          return clone[method].apply(clone, arguments);
        };
      }, this);
    };
    Node.prototype._init = function init(body) {
      var state = this._baseState;
      assert(state.parent === null);
      body.call(this);
      state.children = state.children.filter(function(child) {
        return child._baseState.parent === this;
      }, this);
      assert.equal(state.children.length, 1, "Root node can have only one child");
    };
    Node.prototype._useArgs = function useArgs(args) {
      var state = this._baseState;
      var children = args.filter(function(arg) {
        return arg instanceof this.constructor;
      }, this);
      args = args.filter(function(arg) {
        return !(arg instanceof this.constructor);
      }, this);
      if (children.length !== 0) {
        assert(state.children === null);
        state.children = children;
        children.forEach(function(child) {
          child._baseState.parent = this;
        }, this);
      }
      if (args.length !== 0) {
        assert(state.args === null);
        state.args = args;
        state.reverseArgs = args.map(function(arg) {
          if (typeof arg !== "object" || arg.constructor !== Object)
            return arg;
          var res = {};
          Object.keys(arg).forEach(function(key) {
            if (key == (key | 0))
              key |= 0;
            var value = arg[key];
            res[value] = key;
          });
          return res;
        });
      }
    };
    overrided.forEach(function(method) {
      Node.prototype[method] = function _overrided() {
        var state = this._baseState;
        throw new Error(method + " not implemented for encoding: " + state.enc);
      };
    });
    tags.forEach(function(tag) {
      Node.prototype[tag] = function _tagMethod() {
        var state = this._baseState;
        var args = Array.prototype.slice.call(arguments);
        assert(state.tag === null);
        state.tag = tag;
        this._useArgs(args);
        return this;
      };
    });
    Node.prototype.use = function use(item) {
      assert(item);
      var state = this._baseState;
      assert(state.use === null);
      state.use = item;
      return this;
    };
    Node.prototype.optional = function optional() {
      var state = this._baseState;
      state.optional = true;
      return this;
    };
    Node.prototype.def = function def(val) {
      var state = this._baseState;
      assert(state["default"] === null);
      state["default"] = val;
      state.optional = true;
      return this;
    };
    Node.prototype.explicit = function explicit(num) {
      var state = this._baseState;
      assert(state.explicit === null && state.implicit === null);
      state.explicit = num;
      return this;
    };
    Node.prototype.implicit = function implicit(num) {
      var state = this._baseState;
      assert(state.explicit === null && state.implicit === null);
      state.implicit = num;
      return this;
    };
    Node.prototype.obj = function obj() {
      var state = this._baseState;
      var args = Array.prototype.slice.call(arguments);
      state.obj = true;
      if (args.length !== 0)
        this._useArgs(args);
      return this;
    };
    Node.prototype.key = function key(newKey) {
      var state = this._baseState;
      assert(state.key === null);
      state.key = newKey;
      return this;
    };
    Node.prototype.any = function any() {
      var state = this._baseState;
      state.any = true;
      return this;
    };
    Node.prototype.choice = function choice(obj) {
      var state = this._baseState;
      assert(state.choice === null);
      state.choice = obj;
      this._useArgs(Object.keys(obj).map(function(key) {
        return obj[key];
      }));
      return this;
    };
    Node.prototype.contains = function contains(item) {
      var state = this._baseState;
      assert(state.use === null);
      state.contains = item;
      return this;
    };
    Node.prototype._decode = function decode(input, options) {
      var state = this._baseState;
      if (state.parent === null)
        return input.wrapResult(state.children[0]._decode(input, options));
      var result = state["default"];
      var present = true;
      var prevKey = null;
      if (state.key !== null)
        prevKey = input.enterKey(state.key);
      if (state.optional) {
        var tag = null;
        if (state.explicit !== null)
          tag = state.explicit;
        else if (state.implicit !== null)
          tag = state.implicit;
        else if (state.tag !== null)
          tag = state.tag;
        if (tag === null && !state.any) {
          var save = input.save();
          try {
            if (state.choice === null)
              this._decodeGeneric(state.tag, input, options);
            else
              this._decodeChoice(input, options);
            present = true;
          } catch (e) {
            present = false;
          }
          input.restore(save);
        } else {
          present = this._peekTag(input, tag, state.any);
          if (input.isError(present))
            return present;
        }
      }
      var prevObj;
      if (state.obj && present)
        prevObj = input.enterObject();
      if (present) {
        if (state.explicit !== null) {
          var explicit = this._decodeTag(input, state.explicit);
          if (input.isError(explicit))
            return explicit;
          input = explicit;
        }
        var start = input.offset;
        if (state.use === null && state.choice === null) {
          if (state.any)
            var save = input.save();
          var body = this._decodeTag(
            input,
            state.implicit !== null ? state.implicit : state.tag,
            state.any
          );
          if (input.isError(body))
            return body;
          if (state.any)
            result = input.raw(save);
          else
            input = body;
        }
        if (options && options.track && state.tag !== null)
          options.track(input.path(), start, input.length, "tagged");
        if (options && options.track && state.tag !== null)
          options.track(input.path(), input.offset, input.length, "content");
        if (state.any)
          result = result;
        else if (state.choice === null)
          result = this._decodeGeneric(state.tag, input, options);
        else
          result = this._decodeChoice(input, options);
        if (input.isError(result))
          return result;
        if (!state.any && state.choice === null && state.children !== null) {
          state.children.forEach(function decodeChildren(child) {
            child._decode(input, options);
          });
        }
        if (state.contains && (state.tag === "octstr" || state.tag === "bitstr")) {
          var data = new DecoderBuffer(result);
          result = this._getUse(state.contains, input._reporterState.obj)._decode(data, options);
        }
      }
      if (state.obj && present)
        result = input.leaveObject(prevObj);
      if (state.key !== null && (result !== null || present === true))
        input.leaveKey(prevKey, state.key, result);
      else if (prevKey !== null)
        input.exitKey(prevKey);
      return result;
    };
    Node.prototype._decodeGeneric = function decodeGeneric(tag, input, options) {
      var state = this._baseState;
      if (tag === "seq" || tag === "set")
        return null;
      if (tag === "seqof" || tag === "setof")
        return this._decodeList(input, tag, state.args[0], options);
      else if (/str$/.test(tag))
        return this._decodeStr(input, tag, options);
      else if (tag === "objid" && state.args)
        return this._decodeObjid(input, state.args[0], state.args[1], options);
      else if (tag === "objid")
        return this._decodeObjid(input, null, null, options);
      else if (tag === "gentime" || tag === "utctime")
        return this._decodeTime(input, tag, options);
      else if (tag === "null_")
        return this._decodeNull(input, options);
      else if (tag === "bool")
        return this._decodeBool(input, options);
      else if (tag === "objDesc")
        return this._decodeStr(input, tag, options);
      else if (tag === "int" || tag === "enum")
        return this._decodeInt(input, state.args && state.args[0], options);
      if (state.use !== null) {
        return this._getUse(state.use, input._reporterState.obj)._decode(input, options);
      } else {
        return input.error("unknown tag: " + tag);
      }
    };
    Node.prototype._getUse = function _getUse(entity, obj) {
      var state = this._baseState;
      state.useDecoder = this._use(entity, obj);
      assert(state.useDecoder._baseState.parent === null);
      state.useDecoder = state.useDecoder._baseState.children[0];
      if (state.implicit !== state.useDecoder._baseState.implicit) {
        state.useDecoder = state.useDecoder.clone();
        state.useDecoder._baseState.implicit = state.implicit;
      }
      return state.useDecoder;
    };
    Node.prototype._decodeChoice = function decodeChoice(input, options) {
      var state = this._baseState;
      var result = null;
      var match = false;
      Object.keys(state.choice).some(function(key) {
        var save = input.save();
        var node = state.choice[key];
        try {
          var value = node._decode(input, options);
          if (input.isError(value))
            return false;
          result = { type: key, value };
          match = true;
        } catch (e) {
          input.restore(save);
          return false;
        }
        return true;
      }, this);
      if (!match)
        return input.error("Choice not matched");
      return result;
    };
    Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
      return new EncoderBuffer(data, this.reporter);
    };
    Node.prototype._encode = function encode(data, reporter, parent) {
      var state = this._baseState;
      if (state["default"] !== null && state["default"] === data)
        return;
      var result = this._encodeValue(data, reporter, parent);
      if (result === void 0)
        return;
      if (this._skipDefault(result, reporter, parent))
        return;
      return result;
    };
    Node.prototype._encodeValue = function encode(data, reporter, parent) {
      var state = this._baseState;
      if (state.parent === null)
        return state.children[0]._encode(data, reporter || new Reporter());
      var result = null;
      this.reporter = reporter;
      if (state.optional && data === void 0) {
        if (state["default"] !== null)
          data = state["default"];
        else
          return;
      }
      var content = null;
      var primitive = false;
      if (state.any) {
        result = this._createEncoderBuffer(data);
      } else if (state.choice) {
        result = this._encodeChoice(data, reporter);
      } else if (state.contains) {
        content = this._getUse(state.contains, parent)._encode(data, reporter);
        primitive = true;
      } else if (state.children) {
        content = state.children.map(function(child2) {
          if (child2._baseState.tag === "null_")
            return child2._encode(null, reporter, data);
          if (child2._baseState.key === null)
            return reporter.error("Child should have a key");
          var prevKey = reporter.enterKey(child2._baseState.key);
          if (typeof data !== "object")
            return reporter.error("Child expected, but input is not object");
          var res = child2._encode(data[child2._baseState.key], reporter, data);
          reporter.leaveKey(prevKey);
          return res;
        }, this).filter(function(child2) {
          return child2;
        });
        content = this._createEncoderBuffer(content);
      } else {
        if (state.tag === "seqof" || state.tag === "setof") {
          if (!(state.args && state.args.length === 1))
            return reporter.error("Too many args for : " + state.tag);
          if (!Array.isArray(data))
            return reporter.error("seqof/setof, but data is not Array");
          var child = this.clone();
          child._baseState.implicit = null;
          content = this._createEncoderBuffer(data.map(function(item) {
            var state2 = this._baseState;
            return this._getUse(state2.args[0], data)._encode(item, reporter);
          }, child));
        } else if (state.use !== null) {
          result = this._getUse(state.use, parent)._encode(data, reporter);
        } else {
          content = this._encodePrimitive(state.tag, data);
          primitive = true;
        }
      }
      var result;
      if (!state.any && state.choice === null) {
        var tag = state.implicit !== null ? state.implicit : state.tag;
        var cls = state.implicit === null ? "universal" : "context";
        if (tag === null) {
          if (state.use === null)
            reporter.error("Tag could be omitted only for .use()");
        } else {
          if (state.use === null)
            result = this._encodeComposite(tag, primitive, cls, content);
        }
      }
      if (state.explicit !== null)
        result = this._encodeComposite(state.explicit, false, "context", result);
      return result;
    };
    Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
      var state = this._baseState;
      var node = state.choice[data.type];
      if (!node) {
        assert(
          false,
          data.type + " not found in " + JSON.stringify(Object.keys(state.choice))
        );
      }
      return node._encode(data.value, reporter);
    };
    Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
      var state = this._baseState;
      if (/str$/.test(tag))
        return this._encodeStr(data, tag);
      else if (tag === "objid" && state.args)
        return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
      else if (tag === "objid")
        return this._encodeObjid(data, null, null);
      else if (tag === "gentime" || tag === "utctime")
        return this._encodeTime(data, tag);
      else if (tag === "null_")
        return this._encodeNull();
      else if (tag === "int" || tag === "enum")
        return this._encodeInt(data, state.args && state.reverseArgs[0]);
      else if (tag === "bool")
        return this._encodeBool(data);
      else if (tag === "objDesc")
        return this._encodeStr(data, tag);
      else
        throw new Error("Unsupported tag: " + tag);
    };
    Node.prototype._isNumstr = function isNumstr(str2) {
      return /^[0-9 ]*$/.test(str2);
    };
    Node.prototype._isPrintstr = function isPrintstr(str2) {
      return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(str2);
    };
  }
});

// node_modules/asn1.js/lib/asn1/base/index.js
var require_base2 = __commonJS({
  "node_modules/asn1.js/lib/asn1/base/index.js"(exports2) {
    init_polyfills();
    var base = exports2;
    base.Reporter = require_reporter().Reporter;
    base.DecoderBuffer = require_buffer().DecoderBuffer;
    base.EncoderBuffer = require_buffer().EncoderBuffer;
    base.Node = require_node();
  }
});

// node_modules/asn1.js/lib/asn1/constants/der.js
var require_der = __commonJS({
  "node_modules/asn1.js/lib/asn1/constants/der.js"(exports2) {
    init_polyfills();
    var constants = require_constants();
    exports2.tagClass = {
      0: "universal",
      1: "application",
      2: "context",
      3: "private"
    };
    exports2.tagClassByName = constants._reverse(exports2.tagClass);
    exports2.tag = {
      0: "end",
      1: "bool",
      2: "int",
      3: "bitstr",
      4: "octstr",
      5: "null_",
      6: "objid",
      7: "objDesc",
      8: "external",
      9: "real",
      10: "enum",
      11: "embed",
      12: "utf8str",
      13: "relativeOid",
      16: "seq",
      17: "set",
      18: "numstr",
      19: "printstr",
      20: "t61str",
      21: "videostr",
      22: "ia5str",
      23: "utctime",
      24: "gentime",
      25: "graphstr",
      26: "iso646str",
      27: "genstr",
      28: "unistr",
      29: "charstr",
      30: "bmpstr"
    };
    exports2.tagByName = constants._reverse(exports2.tag);
  }
});

// node_modules/asn1.js/lib/asn1/constants/index.js
var require_constants = __commonJS({
  "node_modules/asn1.js/lib/asn1/constants/index.js"(exports2) {
    init_polyfills();
    var constants = exports2;
    constants._reverse = function reverse(map) {
      var res = {};
      Object.keys(map).forEach(function(key) {
        if ((key | 0) == key)
          key = key | 0;
        var value = map[key];
        res[value] = key;
      });
      return res;
    };
    constants.der = require_der();
  }
});

// node_modules/asn1.js/lib/asn1/decoders/der.js
var require_der2 = __commonJS({
  "node_modules/asn1.js/lib/asn1/decoders/der.js"(exports2, module2) {
    init_polyfills();
    var inherits = require_inherits();
    var asn1 = require_asn1();
    var base = asn1.base;
    var bignum = asn1.bignum;
    var der = asn1.constants.der;
    function DERDecoder(entity) {
      this.enc = "der";
      this.name = entity.name;
      this.entity = entity;
      this.tree = new DERNode();
      this.tree._init(entity.body);
    }
    module2.exports = DERDecoder;
    DERDecoder.prototype.decode = function decode(data, options) {
      if (!(data instanceof base.DecoderBuffer))
        data = new base.DecoderBuffer(data, options);
      return this.tree._decode(data, options);
    };
    function DERNode(parent) {
      base.Node.call(this, "der", parent);
    }
    inherits(DERNode, base.Node);
    DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
      if (buffer.isEmpty())
        return false;
      var state = buffer.save();
      var decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
      if (buffer.isError(decodedTag))
        return decodedTag;
      buffer.restore(state);
      return decodedTag.tag === tag || decodedTag.tagStr === tag || decodedTag.tagStr + "of" === tag || any;
    };
    DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
      var decodedTag = derDecodeTag(
        buffer,
        'Failed to decode tag of "' + tag + '"'
      );
      if (buffer.isError(decodedTag))
        return decodedTag;
      var len = derDecodeLen(
        buffer,
        decodedTag.primitive,
        'Failed to get length of "' + tag + '"'
      );
      if (buffer.isError(len))
        return len;
      if (!any && decodedTag.tag !== tag && decodedTag.tagStr !== tag && decodedTag.tagStr + "of" !== tag) {
        return buffer.error('Failed to match tag: "' + tag + '"');
      }
      if (decodedTag.primitive || len !== null)
        return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
      var state = buffer.save();
      var res = this._skipUntilEnd(
        buffer,
        'Failed to skip indefinite length body: "' + this.tag + '"'
      );
      if (buffer.isError(res))
        return res;
      len = buffer.offset - state.offset;
      buffer.restore(state);
      return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
    };
    DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
      while (true) {
        var tag = derDecodeTag(buffer, fail);
        if (buffer.isError(tag))
          return tag;
        var len = derDecodeLen(buffer, tag.primitive, fail);
        if (buffer.isError(len))
          return len;
        var res;
        if (tag.primitive || len !== null)
          res = buffer.skip(len);
        else
          res = this._skipUntilEnd(buffer, fail);
        if (buffer.isError(res))
          return res;
        if (tag.tagStr === "end")
          break;
      }
    };
    DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder, options) {
      var result = [];
      while (!buffer.isEmpty()) {
        var possibleEnd = this._peekTag(buffer, "end");
        if (buffer.isError(possibleEnd))
          return possibleEnd;
        var res = decoder.decode(buffer, "der", options);
        if (buffer.isError(res) && possibleEnd)
          break;
        result.push(res);
      }
      return result;
    };
    DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
      if (tag === "bitstr") {
        var unused = buffer.readUInt8();
        if (buffer.isError(unused))
          return unused;
        return { unused, data: buffer.raw() };
      } else if (tag === "bmpstr") {
        var raw = buffer.raw();
        if (raw.length % 2 === 1)
          return buffer.error("Decoding of string type: bmpstr length mismatch");
        var str2 = "";
        for (var i = 0; i < raw.length / 2; i++) {
          str2 += String.fromCharCode(raw.readUInt16BE(i * 2));
        }
        return str2;
      } else if (tag === "numstr") {
        var numstr = buffer.raw().toString("ascii");
        if (!this._isNumstr(numstr)) {
          return buffer.error("Decoding of string type: numstr unsupported characters");
        }
        return numstr;
      } else if (tag === "octstr") {
        return buffer.raw();
      } else if (tag === "objDesc") {
        return buffer.raw();
      } else if (tag === "printstr") {
        var printstr = buffer.raw().toString("ascii");
        if (!this._isPrintstr(printstr)) {
          return buffer.error("Decoding of string type: printstr unsupported characters");
        }
        return printstr;
      } else if (/str$/.test(tag)) {
        return buffer.raw().toString();
      } else {
        return buffer.error("Decoding of string type: " + tag + " unsupported");
      }
    };
    DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
      var result;
      var identifiers = [];
      var ident = 0;
      while (!buffer.isEmpty()) {
        var subident = buffer.readUInt8();
        ident <<= 7;
        ident |= subident & 127;
        if ((subident & 128) === 0) {
          identifiers.push(ident);
          ident = 0;
        }
      }
      if (subident & 128)
        identifiers.push(ident);
      var first = identifiers[0] / 40 | 0;
      var second = identifiers[0] % 40;
      if (relative)
        result = identifiers;
      else
        result = [first, second].concat(identifiers.slice(1));
      if (values) {
        var tmp = values[result.join(" ")];
        if (tmp === void 0)
          tmp = values[result.join(".")];
        if (tmp !== void 0)
          result = tmp;
      }
      return result;
    };
    DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
      var str2 = buffer.raw().toString();
      if (tag === "gentime") {
        var year = str2.slice(0, 4) | 0;
        var mon = str2.slice(4, 6) | 0;
        var day = str2.slice(6, 8) | 0;
        var hour = str2.slice(8, 10) | 0;
        var min = str2.slice(10, 12) | 0;
        var sec = str2.slice(12, 14) | 0;
      } else if (tag === "utctime") {
        var year = str2.slice(0, 2) | 0;
        var mon = str2.slice(2, 4) | 0;
        var day = str2.slice(4, 6) | 0;
        var hour = str2.slice(6, 8) | 0;
        var min = str2.slice(8, 10) | 0;
        var sec = str2.slice(10, 12) | 0;
        if (year < 70)
          year = 2e3 + year;
        else
          year = 1900 + year;
      } else {
        return buffer.error("Decoding " + tag + " time is not supported yet");
      }
      return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
    };
    DERNode.prototype._decodeNull = function decodeNull(buffer) {
      return null;
    };
    DERNode.prototype._decodeBool = function decodeBool(buffer) {
      var res = buffer.readUInt8();
      if (buffer.isError(res))
        return res;
      else
        return res !== 0;
    };
    DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
      var raw = buffer.raw();
      var res = new bignum(raw);
      if (values)
        res = values[res.toString(10)] || res;
      return res;
    };
    DERNode.prototype._use = function use(entity, obj) {
      if (typeof entity === "function")
        entity = entity(obj);
      return entity._getDecoder("der").tree;
    };
    function derDecodeTag(buf, fail) {
      var tag = buf.readUInt8(fail);
      if (buf.isError(tag))
        return tag;
      var cls = der.tagClass[tag >> 6];
      var primitive = (tag & 32) === 0;
      if ((tag & 31) === 31) {
        var oct = tag;
        tag = 0;
        while ((oct & 128) === 128) {
          oct = buf.readUInt8(fail);
          if (buf.isError(oct))
            return oct;
          tag <<= 7;
          tag |= oct & 127;
        }
      } else {
        tag &= 31;
      }
      var tagStr = der.tag[tag];
      return {
        cls,
        primitive,
        tag,
        tagStr
      };
    }
    function derDecodeLen(buf, primitive, fail) {
      var len = buf.readUInt8(fail);
      if (buf.isError(len))
        return len;
      if (!primitive && len === 128)
        return null;
      if ((len & 128) === 0) {
        return len;
      }
      var num = len & 127;
      if (num > 4)
        return buf.error("length octect is too long");
      len = 0;
      for (var i = 0; i < num; i++) {
        len <<= 8;
        var j2 = buf.readUInt8(fail);
        if (buf.isError(j2))
          return j2;
        len |= j2;
      }
      return len;
    }
  }
});

// node_modules/asn1.js/lib/asn1/decoders/pem.js
var require_pem = __commonJS({
  "node_modules/asn1.js/lib/asn1/decoders/pem.js"(exports2, module2) {
    init_polyfills();
    var inherits = require_inherits();
    var Buffer7 = require("buffer").Buffer;
    var DERDecoder = require_der2();
    function PEMDecoder(entity) {
      DERDecoder.call(this, entity);
      this.enc = "pem";
    }
    inherits(PEMDecoder, DERDecoder);
    module2.exports = PEMDecoder;
    PEMDecoder.prototype.decode = function decode(data, options) {
      var lines = data.toString().split(/[\r\n]+/g);
      var label = options.label.toUpperCase();
      var re2 = /^-----(BEGIN|END) ([^-]+)-----$/;
      var start = -1;
      var end = -1;
      for (var i = 0; i < lines.length; i++) {
        var match = lines[i].match(re2);
        if (match === null)
          continue;
        if (match[2] !== label)
          continue;
        if (start === -1) {
          if (match[1] !== "BEGIN")
            break;
          start = i;
        } else {
          if (match[1] !== "END")
            break;
          end = i;
          break;
        }
      }
      if (start === -1 || end === -1)
        throw new Error("PEM section not found for: " + label);
      var base642 = lines.slice(start + 1, end).join("");
      base642.replace(/[^a-z0-9\+\/=]+/gi, "");
      var input = new Buffer7(base642, "base64");
      return DERDecoder.prototype.decode.call(this, input, options);
    };
  }
});

// node_modules/asn1.js/lib/asn1/decoders/index.js
var require_decoders = __commonJS({
  "node_modules/asn1.js/lib/asn1/decoders/index.js"(exports2) {
    init_polyfills();
    var decoders = exports2;
    decoders.der = require_der2();
    decoders.pem = require_pem();
  }
});

// node_modules/asn1.js/lib/asn1/encoders/der.js
var require_der3 = __commonJS({
  "node_modules/asn1.js/lib/asn1/encoders/der.js"(exports2, module2) {
    init_polyfills();
    var inherits = require_inherits();
    var Buffer7 = require("buffer").Buffer;
    var asn1 = require_asn1();
    var base = asn1.base;
    var der = asn1.constants.der;
    function DEREncoder(entity) {
      this.enc = "der";
      this.name = entity.name;
      this.entity = entity;
      this.tree = new DERNode();
      this.tree._init(entity.body);
    }
    module2.exports = DEREncoder;
    DEREncoder.prototype.encode = function encode(data, reporter) {
      return this.tree._encode(data, reporter).join();
    };
    function DERNode(parent) {
      base.Node.call(this, "der", parent);
    }
    inherits(DERNode, base.Node);
    DERNode.prototype._encodeComposite = function encodeComposite(tag, primitive, cls, content) {
      var encodedTag = encodeTag(tag, primitive, cls, this.reporter);
      if (content.length < 128) {
        var header = new Buffer7(2);
        header[0] = encodedTag;
        header[1] = content.length;
        return this._createEncoderBuffer([header, content]);
      }
      var lenOctets = 1;
      for (var i = content.length; i >= 256; i >>= 8)
        lenOctets++;
      var header = new Buffer7(1 + 1 + lenOctets);
      header[0] = encodedTag;
      header[1] = 128 | lenOctets;
      for (var i = 1 + lenOctets, j2 = content.length; j2 > 0; i--, j2 >>= 8)
        header[i] = j2 & 255;
      return this._createEncoderBuffer([header, content]);
    };
    DERNode.prototype._encodeStr = function encodeStr(str2, tag) {
      if (tag === "bitstr") {
        return this._createEncoderBuffer([str2.unused | 0, str2.data]);
      } else if (tag === "bmpstr") {
        var buf = new Buffer7(str2.length * 2);
        for (var i = 0; i < str2.length; i++) {
          buf.writeUInt16BE(str2.charCodeAt(i), i * 2);
        }
        return this._createEncoderBuffer(buf);
      } else if (tag === "numstr") {
        if (!this._isNumstr(str2)) {
          return this.reporter.error("Encoding of string type: numstr supports only digits and space");
        }
        return this._createEncoderBuffer(str2);
      } else if (tag === "printstr") {
        if (!this._isPrintstr(str2)) {
          return this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
        }
        return this._createEncoderBuffer(str2);
      } else if (/str$/.test(tag)) {
        return this._createEncoderBuffer(str2);
      } else if (tag === "objDesc") {
        return this._createEncoderBuffer(str2);
      } else {
        return this.reporter.error("Encoding of string type: " + tag + " unsupported");
      }
    };
    DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
      if (typeof id === "string") {
        if (!values)
          return this.reporter.error("string objid given, but no values map found");
        if (!values.hasOwnProperty(id))
          return this.reporter.error("objid not found in values map");
        id = values[id].split(/[\s\.]+/g);
        for (var i = 0; i < id.length; i++)
          id[i] |= 0;
      } else if (Array.isArray(id)) {
        id = id.slice();
        for (var i = 0; i < id.length; i++)
          id[i] |= 0;
      }
      if (!Array.isArray(id)) {
        return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(id));
      }
      if (!relative) {
        if (id[1] >= 40)
          return this.reporter.error("Second objid identifier OOB");
        id.splice(0, 2, id[0] * 40 + id[1]);
      }
      var size = 0;
      for (var i = 0; i < id.length; i++) {
        var ident = id[i];
        for (size++; ident >= 128; ident >>= 7)
          size++;
      }
      var objid = new Buffer7(size);
      var offset = objid.length - 1;
      for (var i = id.length - 1; i >= 0; i--) {
        var ident = id[i];
        objid[offset--] = ident & 127;
        while ((ident >>= 7) > 0)
          objid[offset--] = 128 | ident & 127;
      }
      return this._createEncoderBuffer(objid);
    };
    function two(num) {
      if (num < 10)
        return "0" + num;
      else
        return num;
    }
    DERNode.prototype._encodeTime = function encodeTime(time, tag) {
      var str2;
      var date = new Date(time);
      if (tag === "gentime") {
        str2 = [
          two(date.getFullYear()),
          two(date.getUTCMonth() + 1),
          two(date.getUTCDate()),
          two(date.getUTCHours()),
          two(date.getUTCMinutes()),
          two(date.getUTCSeconds()),
          "Z"
        ].join("");
      } else if (tag === "utctime") {
        str2 = [
          two(date.getFullYear() % 100),
          two(date.getUTCMonth() + 1),
          two(date.getUTCDate()),
          two(date.getUTCHours()),
          two(date.getUTCMinutes()),
          two(date.getUTCSeconds()),
          "Z"
        ].join("");
      } else {
        this.reporter.error("Encoding " + tag + " time is not supported yet");
      }
      return this._encodeStr(str2, "octstr");
    };
    DERNode.prototype._encodeNull = function encodeNull() {
      return this._createEncoderBuffer("");
    };
    DERNode.prototype._encodeInt = function encodeInt(num, values) {
      if (typeof num === "string") {
        if (!values)
          return this.reporter.error("String int or enum given, but no values map");
        if (!values.hasOwnProperty(num)) {
          return this.reporter.error("Values map doesn't contain: " + JSON.stringify(num));
        }
        num = values[num];
      }
      if (typeof num !== "number" && !Buffer7.isBuffer(num)) {
        var numArray = num.toArray();
        if (!num.sign && numArray[0] & 128) {
          numArray.unshift(0);
        }
        num = new Buffer7(numArray);
      }
      if (Buffer7.isBuffer(num)) {
        var size = num.length;
        if (num.length === 0)
          size++;
        var out = new Buffer7(size);
        num.copy(out);
        if (num.length === 0)
          out[0] = 0;
        return this._createEncoderBuffer(out);
      }
      if (num < 128)
        return this._createEncoderBuffer(num);
      if (num < 256)
        return this._createEncoderBuffer([0, num]);
      var size = 1;
      for (var i = num; i >= 256; i >>= 8)
        size++;
      var out = new Array(size);
      for (var i = out.length - 1; i >= 0; i--) {
        out[i] = num & 255;
        num >>= 8;
      }
      if (out[0] & 128) {
        out.unshift(0);
      }
      return this._createEncoderBuffer(new Buffer7(out));
    };
    DERNode.prototype._encodeBool = function encodeBool(value) {
      return this._createEncoderBuffer(value ? 255 : 0);
    };
    DERNode.prototype._use = function use(entity, obj) {
      if (typeof entity === "function")
        entity = entity(obj);
      return entity._getEncoder("der").tree;
    };
    DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
      var state = this._baseState;
      var i;
      if (state["default"] === null)
        return false;
      var data = dataBuffer.join();
      if (state.defaultBuffer === void 0)
        state.defaultBuffer = this._encodeValue(state["default"], reporter, parent).join();
      if (data.length !== state.defaultBuffer.length)
        return false;
      for (i = 0; i < data.length; i++)
        if (data[i] !== state.defaultBuffer[i])
          return false;
      return true;
    };
    function encodeTag(tag, primitive, cls, reporter) {
      var res;
      if (tag === "seqof")
        tag = "seq";
      else if (tag === "setof")
        tag = "set";
      if (der.tagByName.hasOwnProperty(tag))
        res = der.tagByName[tag];
      else if (typeof tag === "number" && (tag | 0) === tag)
        res = tag;
      else
        return reporter.error("Unknown tag: " + tag);
      if (res >= 31)
        return reporter.error("Multi-octet tag encoding unsupported");
      if (!primitive)
        res |= 32;
      res |= der.tagClassByName[cls || "universal"] << 6;
      return res;
    }
  }
});

// node_modules/asn1.js/lib/asn1/encoders/pem.js
var require_pem2 = __commonJS({
  "node_modules/asn1.js/lib/asn1/encoders/pem.js"(exports2, module2) {
    init_polyfills();
    var inherits = require_inherits();
    var DEREncoder = require_der3();
    function PEMEncoder(entity) {
      DEREncoder.call(this, entity);
      this.enc = "pem";
    }
    inherits(PEMEncoder, DEREncoder);
    module2.exports = PEMEncoder;
    PEMEncoder.prototype.encode = function encode(data, options) {
      var buf = DEREncoder.prototype.encode.call(this, data);
      var p2 = buf.toString("base64");
      var out = ["-----BEGIN " + options.label + "-----"];
      for (var i = 0; i < p2.length; i += 64)
        out.push(p2.slice(i, i + 64));
      out.push("-----END " + options.label + "-----");
      return out.join("\n");
    };
  }
});

// node_modules/asn1.js/lib/asn1/encoders/index.js
var require_encoders = __commonJS({
  "node_modules/asn1.js/lib/asn1/encoders/index.js"(exports2) {
    init_polyfills();
    var encoders = exports2;
    encoders.der = require_der3();
    encoders.pem = require_pem2();
  }
});

// node_modules/asn1.js/lib/asn1.js
var require_asn1 = __commonJS({
  "node_modules/asn1.js/lib/asn1.js"(exports2) {
    init_polyfills();
    var asn1 = exports2;
    asn1.bignum = require_bn();
    asn1.define = require_api().define;
    asn1.base = require_base2();
    asn1.constants = require_constants();
    asn1.decoders = require_decoders();
    asn1.encoders = require_encoders();
  }
});

// node_modules/parse-asn1/certificate.js
var require_certificate = __commonJS({
  "node_modules/parse-asn1/certificate.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var asn = require_asn1();
    var Time = asn.define("Time", function() {
      this.choice({
        utcTime: this.utctime(),
        generalTime: this.gentime()
      });
    });
    var AttributeTypeValue = asn.define("AttributeTypeValue", function() {
      this.seq().obj(
        this.key("type").objid(),
        this.key("value").any()
      );
    });
    var AlgorithmIdentifier = asn.define("AlgorithmIdentifier", function() {
      this.seq().obj(
        this.key("algorithm").objid(),
        this.key("parameters").optional(),
        this.key("curve").objid().optional()
      );
    });
    var SubjectPublicKeyInfo = asn.define("SubjectPublicKeyInfo", function() {
      this.seq().obj(
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("subjectPublicKey").bitstr()
      );
    });
    var RelativeDistinguishedName = asn.define("RelativeDistinguishedName", function() {
      this.setof(AttributeTypeValue);
    });
    var RDNSequence = asn.define("RDNSequence", function() {
      this.seqof(RelativeDistinguishedName);
    });
    var Name = asn.define("Name", function() {
      this.choice({
        rdnSequence: this.use(RDNSequence)
      });
    });
    var Validity = asn.define("Validity", function() {
      this.seq().obj(
        this.key("notBefore").use(Time),
        this.key("notAfter").use(Time)
      );
    });
    var Extension = asn.define("Extension", function() {
      this.seq().obj(
        this.key("extnID").objid(),
        this.key("critical").bool().def(false),
        this.key("extnValue").octstr()
      );
    });
    var TBSCertificate = asn.define("TBSCertificate", function() {
      this.seq().obj(
        this.key("version").explicit(0)["int"]().optional(),
        this.key("serialNumber")["int"](),
        this.key("signature").use(AlgorithmIdentifier),
        this.key("issuer").use(Name),
        this.key("validity").use(Validity),
        this.key("subject").use(Name),
        this.key("subjectPublicKeyInfo").use(SubjectPublicKeyInfo),
        this.key("issuerUniqueID").implicit(1).bitstr().optional(),
        this.key("subjectUniqueID").implicit(2).bitstr().optional(),
        this.key("extensions").explicit(3).seqof(Extension).optional()
      );
    });
    var X509Certificate = asn.define("X509Certificate", function() {
      this.seq().obj(
        this.key("tbsCertificate").use(TBSCertificate),
        this.key("signatureAlgorithm").use(AlgorithmIdentifier),
        this.key("signatureValue").bitstr()
      );
    });
    module2.exports = X509Certificate;
  }
});

// node_modules/parse-asn1/asn1.js
var require_asn12 = __commonJS({
  "node_modules/parse-asn1/asn1.js"(exports2) {
    "use strict";
    init_polyfills();
    var asn1 = require_asn1();
    exports2.certificate = require_certificate();
    var RSAPrivateKey = asn1.define("RSAPrivateKey", function() {
      this.seq().obj(
        this.key("version")["int"](),
        this.key("modulus")["int"](),
        this.key("publicExponent")["int"](),
        this.key("privateExponent")["int"](),
        this.key("prime1")["int"](),
        this.key("prime2")["int"](),
        this.key("exponent1")["int"](),
        this.key("exponent2")["int"](),
        this.key("coefficient")["int"]()
      );
    });
    exports2.RSAPrivateKey = RSAPrivateKey;
    var RSAPublicKey = asn1.define("RSAPublicKey", function() {
      this.seq().obj(
        this.key("modulus")["int"](),
        this.key("publicExponent")["int"]()
      );
    });
    exports2.RSAPublicKey = RSAPublicKey;
    var AlgorithmIdentifier = asn1.define("AlgorithmIdentifier", function() {
      this.seq().obj(
        this.key("algorithm").objid(),
        this.key("none").null_().optional(),
        this.key("curve").objid().optional(),
        this.key("params").seq().obj(
          this.key("p")["int"](),
          this.key("q")["int"](),
          this.key("g")["int"]()
        ).optional()
      );
    });
    var PublicKey2 = asn1.define("SubjectPublicKeyInfo", function() {
      this.seq().obj(
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("subjectPublicKey").bitstr()
      );
    });
    exports2.PublicKey = PublicKey2;
    var PrivateKeyInfo = asn1.define("PrivateKeyInfo", function() {
      this.seq().obj(
        this.key("version")["int"](),
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("subjectPrivateKey").octstr()
      );
    });
    exports2.PrivateKey = PrivateKeyInfo;
    var EncryptedPrivateKeyInfo = asn1.define("EncryptedPrivateKeyInfo", function() {
      this.seq().obj(
        this.key("algorithm").seq().obj(
          this.key("id").objid(),
          this.key("decrypt").seq().obj(
            this.key("kde").seq().obj(
              this.key("id").objid(),
              this.key("kdeparams").seq().obj(
                this.key("salt").octstr(),
                this.key("iters")["int"]()
              )
            ),
            this.key("cipher").seq().obj(
              this.key("algo").objid(),
              this.key("iv").octstr()
            )
          )
        ),
        this.key("subjectPrivateKey").octstr()
      );
    });
    exports2.EncryptedPrivateKey = EncryptedPrivateKeyInfo;
    var DSAPrivateKey = asn1.define("DSAPrivateKey", function() {
      this.seq().obj(
        this.key("version")["int"](),
        this.key("p")["int"](),
        this.key("q")["int"](),
        this.key("g")["int"](),
        this.key("pub_key")["int"](),
        this.key("priv_key")["int"]()
      );
    });
    exports2.DSAPrivateKey = DSAPrivateKey;
    exports2.DSAparam = asn1.define("DSAparam", function() {
      this["int"]();
    });
    var ECParameters = asn1.define("ECParameters", function() {
      this.choice({
        namedCurve: this.objid()
      });
    });
    var ECPrivateKey = asn1.define("ECPrivateKey", function() {
      this.seq().obj(
        this.key("version")["int"](),
        this.key("privateKey").octstr(),
        this.key("parameters").optional().explicit(0).use(ECParameters),
        this.key("publicKey").optional().explicit(1).bitstr()
      );
    });
    exports2.ECPrivateKey = ECPrivateKey;
    exports2.signature = asn1.define("signature", function() {
      this.seq().obj(
        this.key("r")["int"](),
        this.key("s")["int"]()
      );
    });
  }
});

// node_modules/parse-asn1/aesid.json
var require_aesid = __commonJS({
  "node_modules/parse-asn1/aesid.json"(exports2, module2) {
    module2.exports = {
      "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
      "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
      "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
      "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
      "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
      "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
      "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
      "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
      "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
      "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
      "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
      "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports2, module2) {
    init_polyfills();
    module2.exports = require("stream");
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require("buffer");
    var Buffer7 = _require.Buffer;
    var _require2 = require("util");
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer7.prototype.copy.call(src, target, offset);
    }
    module2.exports = /* @__PURE__ */ function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v2) {
          var entry = {
            data: v2,
            next: null
          };
          if (this.length > 0) this.tail.next = entry;
          else this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v2) {
          var entry = {
            data: v2,
            next: this.head
          };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null;
          else this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join2(s) {
          if (this.length === 0) return "";
          var p2 = this.head;
          var ret = "" + p2.data;
          while (p2 = p2.next) ret += s + p2.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n) {
          if (this.length === 0) return Buffer7.alloc(0);
          var ret = Buffer7.allocUnsafe(n >>> 0);
          var p2 = this.head;
          var i = 0;
          while (p2) {
            copyBuffer(p2.data, ret, i);
            i += p2.data.length;
            p2 = p2.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n, hasStrings) {
          var ret;
          if (n < this.head.data.length) {
            ret = this.head.data.slice(0, n);
            this.head.data = this.head.data.slice(n);
          } else if (n === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n) : this._getBuffer(n);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: function _getString(n) {
          var p2 = this.head;
          var c = 1;
          var ret = p2.data;
          n -= ret.length;
          while (p2 = p2.next) {
            var str2 = p2.data;
            var nb = n > str2.length ? str2.length : n;
            if (nb === str2.length) ret += str2;
            else ret += str2.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str2.length) {
                ++c;
                if (p2.next) this.head = p2.next;
                else this.head = this.tail = null;
              } else {
                this.head = p2;
                p2.data = str2.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n) {
          var ret = Buffer7.allocUnsafe(n);
          var p2 = this.head;
          var c = 1;
          p2.data.copy(ret);
          n -= p2.data.length;
          while (p2 = p2.next) {
            var buf = p2.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p2.next) this.head = p2.next;
                else this.head = this.tail = null;
              } else {
                this.head = p2;
                p2.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom,
        value: function value(_2, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    function destroy(err2, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err2);
        } else if (err2) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err2);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err2);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err2 || null, function(err3) {
        if (!cb && err3) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err3);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err3);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err3);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err2) {
      emitErrorNT(self2, err2);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose) return;
      if (self2._readableState && !self2._readableState.emitClose) return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err2) {
      self2.emit("error", err2);
    }
    function errorOrDestroy(stream, err2) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err2);
      else stream.emit("error", err2);
    }
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors.js
var require_errors = __commonJS({
  "node_modules/readable-stream/errors.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      class NodeError extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3));
        }
      }
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i) => String(i));
        if (len > 2) {
          return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
          return `of ${thing} ${expected[0]}`;
        }
      } else {
        return `of ${thing} ${String(expected)}`;
      }
    }
    function startsWith(str2, search, pos) {
      return str2.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str2, search, this_len) {
      if (this_len === void 0 || this_len > str2.length) {
        this_len = str2.length;
      }
      return str2.substring(this_len - search.length, this_len) === search;
    }
    function includes(str2, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str2.length) {
        return false;
      } else {
        return str2.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      let msg;
      if (endsWith(name, " argument")) {
        msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
      } else {
        const type = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
      }
      msg += `. Received type ${typeof actual}`;
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module2.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module2.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node2 = __commonJS({
  "node_modules/util-deprecate/node.js"(exports2, module2) {
    init_polyfills();
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_node2()
    };
    var Stream = require_stream();
    var Buffer7 = require("buffer").Buffer;
    var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer7.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer7.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er2) {
        onwrite(stream, er2);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_2) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er2 = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er2);
      process.nextTick(cb, er2);
    }
    function validChunk(stream, state, chunk, cb) {
      var er2;
      if (chunk === null) {
        er2 = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er2 = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er2) {
        errorOrDestroy(stream, er2);
        process.nextTick(cb, er2);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer7.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = "buffer";
      else if (!encoding) encoding = state.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state.ending) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string") encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer7.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret) state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev) stream._writev(chunk, state.onwrite);
      else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er2, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er2);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er2);
      } else {
        cb(er2);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er2);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er2) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er2) onwriteError(stream, state, sync, er2, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l2 = state.bufferedRequestCount;
        var buffer = new Array(l2);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null) state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending) endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err2) {
        state.pendingcb--;
        if (err2) {
          errorOrDestroy(stream, err2);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err2) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err2);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err2, cb) {
      cb(err2);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) keys2.push(key);
      return keys2;
    };
    module2.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v2 = 0; v2 < keys.length; v2++) {
        method = keys[v2];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v2;
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended) return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    init_polyfills();
    var Buffer7 = require_safe_buffer().Buffer;
    var isEncoding = Buffer7.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer7.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports2.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer7.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j2 = buf.length - 1;
      if (j2 < i) return 0;
      var nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j2 < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j2 < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p2) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p2 = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p2);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p2, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p2, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function") return eos(stream, null, opts);
      if (!opts) opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      };
      var onerror = function onerror2(err2) {
        callback.call(stream, err2);
      };
      var onclose = function onclose2() {
        var err2;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err2 = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err2);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err2 = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err2);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false) stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module2.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err2) {
          if (err2) {
            reject(err2);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err2) {
        if (err2 && err2.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err2);
          }
          iterator[kError] = err2;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module2.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn2) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn2.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err2) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err2);
          }
          _next(void 0);
        });
      };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
    function from(Readable, iterable, opts) {
      var iterator;
      if (iterable && typeof iterable.next === "function") {
        iterator = iterable;
      } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
      else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
      else throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
      var readable = new Readable(_objectSpread({
        objectMode: true
      }, opts));
      var reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      function next() {
        return _next2.apply(this, arguments);
      }
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
            if (done) {
              readable.push(null);
            } else if (readable.push(yield value)) {
              next();
            } else {
              reading = false;
            }
          } catch (err2) {
            readable.destroy(err2);
          }
        });
        return _next2.apply(this, arguments);
      }
      return readable;
    }
    module2.exports = from;
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    module2.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer7 = require("buffer").Buffer;
    var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer7.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer7.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require("util");
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn2) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn2);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn2);
      else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn2);
      else emitter._events[event] = [fn2, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err2, cb) {
      cb(err2);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer7.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er2;
        if (!skipChunkCheck) er2 = chunkInvalid(state, chunk);
        if (er2) {
          errorOrDestroy(stream, er2);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer7.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
              else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er2;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er2 = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er2;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p2 = this._readableState.buffer.head;
      var content = "";
      while (p2 !== null) {
        content += decoder.write(p2.data);
        p2 = p2.next;
      }
      this._readableState.buffer.clear();
      if (content !== "") this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
      }
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0) state.emittedReadable = false;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0) state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0) ret = fromList(n, state);
      else ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true;
        if (nOrig !== n && state.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) process.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er2) {
        debug("onerror", er2);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er2);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0) return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn2) {
      var res = Stream.prototype.on.call(this, ev, fn2);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false) this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn2) {
      var res = Stream.prototype.removeListener.call(this, ev, fn2);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = /* @__PURE__ */ function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n, state) {
      if (state.length === 0) return null;
      var ret;
      if (state.objectMode) ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs2, x2) {
      for (var i = 0, l2 = xs2.length; i < l2; i++) {
        if (xs2[i] === x2) return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    module2.exports = Transform;
    var _require$codes = require_errors().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits()(Transform, Duplex);
    function afterTransform(er2, data) {
      var ts2 = this._transformState;
      ts2.transforming = false;
      var cb = ts2.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts2.writechunk = null;
      ts2.writecb = null;
      if (data != null)
        this.push(data);
      cb(er2);
      var rs2 = this._readableState;
      rs2.reading = false;
      if (rs2.needReadable || rs2.length < rs2.highWaterMark) {
        this._read(rs2.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er2, data) {
          done(_this, er2, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts2 = this._transformState;
      ts2.writecb = cb;
      ts2.writechunk = chunk;
      ts2.writeencoding = encoding;
      if (!ts2.transforming) {
        var rs2 = this._readableState;
        if (ts2.needTransform || rs2.needReadable || rs2.length < rs2.highWaterMark) this._read(rs2.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts2 = this._transformState;
      if (ts2.writechunk !== null && !ts2.transforming) {
        ts2.transforming = true;
        this._transform(ts2.writechunk, ts2.writeencoding, ts2.afterTransform);
      } else {
        ts2.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err2, cb) {
      Duplex.prototype._destroy.call(this, err2, function(err22) {
        cb(err22);
      });
    };
    function done(stream, er2, data) {
      if (er2) return stream.emit("error", er2);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err2) {
      if (err2) throw err2;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0) eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err2) {
        if (err2) return callback(err2);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err2) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err2 || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn2) {
      fn2();
    }
    function pipe(from, to2) {
      return from.pipe(to2);
    }
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== "function") return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err2) {
          if (!error) error = err2;
          if (err2) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module2.exports = pipeline;
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports2, module2) {
    init_polyfills();
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream.Readable;
      Object.assign(module2.exports, Stream);
      module2.exports.Stream = Stream;
    } else {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = Stream || exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = require_stream_transform();
      exports2.PassThrough = require_stream_passthrough();
      exports2.finished = require_end_of_stream();
      exports2.pipeline = require_pipeline();
    }
  }
});

// node_modules/md5.js/node_modules/hash-base/index.js
var require_hash_base = __commonJS({
  "node_modules/md5.js/node_modules/hash-base/index.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var Buffer7 = require_safe_buffer().Buffer;
    var Transform = require_readable().Transform;
    var inherits = require_inherits();
    function throwIfNotStringOrBuffer(val, prefix) {
      if (!Buffer7.isBuffer(val) && typeof val !== "string") {
        throw new TypeError(prefix + " must be a string or a buffer");
      }
    }
    function HashBase(blockSize) {
      Transform.call(this);
      this._block = Buffer7.allocUnsafe(blockSize);
      this._blockSize = blockSize;
      this._blockOffset = 0;
      this._length = [0, 0, 0, 0];
      this._finalized = false;
    }
    inherits(HashBase, Transform);
    HashBase.prototype._transform = function(chunk, encoding, callback) {
      var error = null;
      try {
        this.update(chunk, encoding);
      } catch (err2) {
        error = err2;
      }
      callback(error);
    };
    HashBase.prototype._flush = function(callback) {
      var error = null;
      try {
        this.push(this.digest());
      } catch (err2) {
        error = err2;
      }
      callback(error);
    };
    HashBase.prototype.update = function(data, encoding) {
      throwIfNotStringOrBuffer(data, "Data");
      if (this._finalized) throw new Error("Digest already called");
      if (!Buffer7.isBuffer(data)) data = Buffer7.from(data, encoding);
      var block = this._block;
      var offset = 0;
      while (this._blockOffset + data.length - offset >= this._blockSize) {
        for (var i = this._blockOffset; i < this._blockSize; ) block[i++] = data[offset++];
        this._update();
        this._blockOffset = 0;
      }
      while (offset < data.length) block[this._blockOffset++] = data[offset++];
      for (var j2 = 0, carry = data.length * 8; carry > 0; ++j2) {
        this._length[j2] += carry;
        carry = this._length[j2] / 4294967296 | 0;
        if (carry > 0) this._length[j2] -= 4294967296 * carry;
      }
      return this;
    };
    HashBase.prototype._update = function() {
      throw new Error("_update is not implemented");
    };
    HashBase.prototype.digest = function(encoding) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = true;
      var digest = this._digest();
      if (encoding !== void 0) digest = digest.toString(encoding);
      this._block.fill(0);
      this._blockOffset = 0;
      for (var i = 0; i < 4; ++i) this._length[i] = 0;
      return digest;
    };
    HashBase.prototype._digest = function() {
      throw new Error("_digest is not implemented");
    };
    module2.exports = HashBase;
  }
});

// node_modules/md5.js/index.js
var require_md5 = __commonJS({
  "node_modules/md5.js/index.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var inherits = require_inherits();
    var HashBase = require_hash_base();
    var Buffer7 = require_safe_buffer().Buffer;
    var ARRAY16 = new Array(16);
    function MD5() {
      HashBase.call(this, 64);
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
    }
    inherits(MD5, HashBase);
    MD5.prototype._update = function() {
      var M2 = ARRAY16;
      for (var i = 0; i < 16; ++i) M2[i] = this._block.readInt32LE(i * 4);
      var a = this._a;
      var b2 = this._b;
      var c = this._c;
      var d2 = this._d;
      a = fnF(a, b2, c, d2, M2[0], 3614090360, 7);
      d2 = fnF(d2, a, b2, c, M2[1], 3905402710, 12);
      c = fnF(c, d2, a, b2, M2[2], 606105819, 17);
      b2 = fnF(b2, c, d2, a, M2[3], 3250441966, 22);
      a = fnF(a, b2, c, d2, M2[4], 4118548399, 7);
      d2 = fnF(d2, a, b2, c, M2[5], 1200080426, 12);
      c = fnF(c, d2, a, b2, M2[6], 2821735955, 17);
      b2 = fnF(b2, c, d2, a, M2[7], 4249261313, 22);
      a = fnF(a, b2, c, d2, M2[8], 1770035416, 7);
      d2 = fnF(d2, a, b2, c, M2[9], 2336552879, 12);
      c = fnF(c, d2, a, b2, M2[10], 4294925233, 17);
      b2 = fnF(b2, c, d2, a, M2[11], 2304563134, 22);
      a = fnF(a, b2, c, d2, M2[12], 1804603682, 7);
      d2 = fnF(d2, a, b2, c, M2[13], 4254626195, 12);
      c = fnF(c, d2, a, b2, M2[14], 2792965006, 17);
      b2 = fnF(b2, c, d2, a, M2[15], 1236535329, 22);
      a = fnG(a, b2, c, d2, M2[1], 4129170786, 5);
      d2 = fnG(d2, a, b2, c, M2[6], 3225465664, 9);
      c = fnG(c, d2, a, b2, M2[11], 643717713, 14);
      b2 = fnG(b2, c, d2, a, M2[0], 3921069994, 20);
      a = fnG(a, b2, c, d2, M2[5], 3593408605, 5);
      d2 = fnG(d2, a, b2, c, M2[10], 38016083, 9);
      c = fnG(c, d2, a, b2, M2[15], 3634488961, 14);
      b2 = fnG(b2, c, d2, a, M2[4], 3889429448, 20);
      a = fnG(a, b2, c, d2, M2[9], 568446438, 5);
      d2 = fnG(d2, a, b2, c, M2[14], 3275163606, 9);
      c = fnG(c, d2, a, b2, M2[3], 4107603335, 14);
      b2 = fnG(b2, c, d2, a, M2[8], 1163531501, 20);
      a = fnG(a, b2, c, d2, M2[13], 2850285829, 5);
      d2 = fnG(d2, a, b2, c, M2[2], 4243563512, 9);
      c = fnG(c, d2, a, b2, M2[7], 1735328473, 14);
      b2 = fnG(b2, c, d2, a, M2[12], 2368359562, 20);
      a = fnH(a, b2, c, d2, M2[5], 4294588738, 4);
      d2 = fnH(d2, a, b2, c, M2[8], 2272392833, 11);
      c = fnH(c, d2, a, b2, M2[11], 1839030562, 16);
      b2 = fnH(b2, c, d2, a, M2[14], 4259657740, 23);
      a = fnH(a, b2, c, d2, M2[1], 2763975236, 4);
      d2 = fnH(d2, a, b2, c, M2[4], 1272893353, 11);
      c = fnH(c, d2, a, b2, M2[7], 4139469664, 16);
      b2 = fnH(b2, c, d2, a, M2[10], 3200236656, 23);
      a = fnH(a, b2, c, d2, M2[13], 681279174, 4);
      d2 = fnH(d2, a, b2, c, M2[0], 3936430074, 11);
      c = fnH(c, d2, a, b2, M2[3], 3572445317, 16);
      b2 = fnH(b2, c, d2, a, M2[6], 76029189, 23);
      a = fnH(a, b2, c, d2, M2[9], 3654602809, 4);
      d2 = fnH(d2, a, b2, c, M2[12], 3873151461, 11);
      c = fnH(c, d2, a, b2, M2[15], 530742520, 16);
      b2 = fnH(b2, c, d2, a, M2[2], 3299628645, 23);
      a = fnI(a, b2, c, d2, M2[0], 4096336452, 6);
      d2 = fnI(d2, a, b2, c, M2[7], 1126891415, 10);
      c = fnI(c, d2, a, b2, M2[14], 2878612391, 15);
      b2 = fnI(b2, c, d2, a, M2[5], 4237533241, 21);
      a = fnI(a, b2, c, d2, M2[12], 1700485571, 6);
      d2 = fnI(d2, a, b2, c, M2[3], 2399980690, 10);
      c = fnI(c, d2, a, b2, M2[10], 4293915773, 15);
      b2 = fnI(b2, c, d2, a, M2[1], 2240044497, 21);
      a = fnI(a, b2, c, d2, M2[8], 1873313359, 6);
      d2 = fnI(d2, a, b2, c, M2[15], 4264355552, 10);
      c = fnI(c, d2, a, b2, M2[6], 2734768916, 15);
      b2 = fnI(b2, c, d2, a, M2[13], 1309151649, 21);
      a = fnI(a, b2, c, d2, M2[4], 4149444226, 6);
      d2 = fnI(d2, a, b2, c, M2[11], 3174756917, 10);
      c = fnI(c, d2, a, b2, M2[2], 718787259, 15);
      b2 = fnI(b2, c, d2, a, M2[9], 3951481745, 21);
      this._a = this._a + a | 0;
      this._b = this._b + b2 | 0;
      this._c = this._c + c | 0;
      this._d = this._d + d2 | 0;
    };
    MD5.prototype._digest = function() {
      this._block[this._blockOffset++] = 128;
      if (this._blockOffset > 56) {
        this._block.fill(0, this._blockOffset, 64);
        this._update();
        this._blockOffset = 0;
      }
      this._block.fill(0, this._blockOffset, 56);
      this._block.writeUInt32LE(this._length[0], 56);
      this._block.writeUInt32LE(this._length[1], 60);
      this._update();
      var buffer = Buffer7.allocUnsafe(16);
      buffer.writeInt32LE(this._a, 0);
      buffer.writeInt32LE(this._b, 4);
      buffer.writeInt32LE(this._c, 8);
      buffer.writeInt32LE(this._d, 12);
      return buffer;
    };
    function rotl2(x2, n) {
      return x2 << n | x2 >>> 32 - n;
    }
    function fnF(a, b2, c, d2, m2, k2, s) {
      return rotl2(a + (b2 & c | ~b2 & d2) + m2 + k2 | 0, s) + b2 | 0;
    }
    function fnG(a, b2, c, d2, m2, k2, s) {
      return rotl2(a + (b2 & d2 | c & ~d2) + m2 + k2 | 0, s) + b2 | 0;
    }
    function fnH(a, b2, c, d2, m2, k2, s) {
      return rotl2(a + (b2 ^ c ^ d2) + m2 + k2 | 0, s) + b2 | 0;
    }
    function fnI(a, b2, c, d2, m2, k2, s) {
      return rotl2(a + (c ^ (b2 | ~d2)) + m2 + k2 | 0, s) + b2 | 0;
    }
    module2.exports = MD5;
  }
});

// node_modules/evp_bytestokey/index.js
var require_evp_bytestokey = __commonJS({
  "node_modules/evp_bytestokey/index.js"(exports2, module2) {
    init_polyfills();
    var Buffer7 = require_safe_buffer().Buffer;
    var MD5 = require_md5();
    function EVP_BytesToKey(password, salt, keyBits, ivLen) {
      if (!Buffer7.isBuffer(password)) password = Buffer7.from(password, "binary");
      if (salt) {
        if (!Buffer7.isBuffer(salt)) salt = Buffer7.from(salt, "binary");
        if (salt.length !== 8) throw new RangeError("salt should be Buffer with 8 byte length");
      }
      var keyLen = keyBits / 8;
      var key = Buffer7.alloc(keyLen);
      var iv = Buffer7.alloc(ivLen || 0);
      var tmp = Buffer7.alloc(0);
      while (keyLen > 0 || ivLen > 0) {
        var hash = new MD5();
        hash.update(tmp);
        hash.update(password);
        if (salt) hash.update(salt);
        tmp = hash.digest();
        var used = 0;
        if (keyLen > 0) {
          var keyStart = key.length - keyLen;
          used = Math.min(keyLen, tmp.length);
          tmp.copy(key, keyStart, 0, used);
          keyLen -= used;
        }
        if (used < tmp.length && ivLen > 0) {
          var ivStart = iv.length - ivLen;
          var length = Math.min(ivLen, tmp.length - used);
          tmp.copy(iv, ivStart, used, used + length);
          ivLen -= length;
        }
      }
      tmp.fill(0);
      return { key, iv };
    }
    module2.exports = EVP_BytesToKey;
  }
});

// node_modules/browserify-aes/index.js
var require_browserify_aes = __commonJS({
  "node_modules/browserify-aes/index.js"(exports2) {
    init_polyfills();
    var crypto3 = require("crypto");
    exports2.createCipher = exports2.Cipher = crypto3.createCipher;
    exports2.createCipheriv = exports2.Cipheriv = crypto3.createCipheriv;
    exports2.createDecipher = exports2.Decipher = crypto3.createDecipher;
    exports2.createDecipheriv = exports2.Decipheriv = crypto3.createDecipheriv;
    exports2.listCiphers = exports2.getCiphers = crypto3.getCiphers;
  }
});

// node_modules/parse-asn1/fixProc.js
var require_fixProc = __commonJS({
  "node_modules/parse-asn1/fixProc.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var findProc = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m;
    var startRegex = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m;
    var fullRegex = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m;
    var evp = require_evp_bytestokey();
    var ciphers = require_browserify_aes();
    var Buffer7 = require_safe_buffer().Buffer;
    module2.exports = function(okey, password) {
      var key = okey.toString();
      var match = key.match(findProc);
      var decrypted;
      if (!match) {
        var match2 = key.match(fullRegex);
        decrypted = Buffer7.from(match2[2].replace(/[\r\n]/g, ""), "base64");
      } else {
        var suite = "aes" + match[1];
        var iv = Buffer7.from(match[2], "hex");
        var cipherText = Buffer7.from(match[3].replace(/[\r\n]/g, ""), "base64");
        var cipherKey = evp(password, iv.slice(0, 8), parseInt(match[1], 10)).key;
        var out = [];
        var cipher = ciphers.createDecipheriv(suite, cipherKey, iv);
        out.push(cipher.update(cipherText));
        out.push(cipher["final"]());
        decrypted = Buffer7.concat(out);
      }
      var tag = key.match(startRegex)[1];
      return {
        tag,
        data: decrypted
      };
    };
  }
});

// node_modules/parse-asn1/index.js
var require_parse_asn1 = __commonJS({
  "node_modules/parse-asn1/index.js"(exports2, module2) {
    "use strict";
    init_polyfills();
    var asn1 = require_asn12();
    var aesid = require_aesid();
    var fixProc = require_fixProc();
    var ciphers = require_browserify_aes();
    var compat = require_pbkdf2();
    var Buffer7 = require_safe_buffer().Buffer;
    function decrypt(data, password) {
      var salt = data.algorithm.decrypt.kde.kdeparams.salt;
      var iters = parseInt(data.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
      var algo = aesid[data.algorithm.decrypt.cipher.algo.join(".")];
      var iv = data.algorithm.decrypt.cipher.iv;
      var cipherText = data.subjectPrivateKey;
      var keylen = parseInt(algo.split("-")[1], 10) / 8;
      var key = compat.pbkdf2Sync(password, salt, iters, keylen, "sha1");
      var cipher = ciphers.createDecipheriv(algo, key, iv);
      var out = [];
      out.push(cipher.update(cipherText));
      out.push(cipher["final"]());
      return Buffer7.concat(out);
    }
    function parseKeys(buffer) {
      var password;
      if (typeof buffer === "object" && !Buffer7.isBuffer(buffer)) {
        password = buffer.passphrase;
        buffer = buffer.key;
      }
      if (typeof buffer === "string") {
        buffer = Buffer7.from(buffer);
      }
      var stripped = fixProc(buffer, password);
      var type = stripped.tag;
      var data = stripped.data;
      var subtype, ndata;
      switch (type) {
        case "CERTIFICATE":
          ndata = asn1.certificate.decode(data, "der").tbsCertificate.subjectPublicKeyInfo;
        case "PUBLIC KEY":
          if (!ndata) {
            ndata = asn1.PublicKey.decode(data, "der");
          }
          subtype = ndata.algorithm.algorithm.join(".");
          switch (subtype) {
            case "1.2.840.113549.1.1.1":
              return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
              ndata.subjectPrivateKey = ndata.subjectPublicKey;
              return {
                type: "ec",
                data: ndata
              };
            case "1.2.840.10040.4.1":
              ndata.algorithm.params.pub_key = asn1.DSAparam.decode(ndata.subjectPublicKey.data, "der");
              return {
                type: "dsa",
                data: ndata.algorithm.params
              };
            default:
              throw new Error("unknown key id " + subtype);
          }
        case "ENCRYPTED PRIVATE KEY":
          data = asn1.EncryptedPrivateKey.decode(data, "der");
          data = decrypt(data, password);
        case "PRIVATE KEY":
          ndata = asn1.PrivateKey.decode(data, "der");
          subtype = ndata.algorithm.algorithm.join(".");
          switch (subtype) {
            case "1.2.840.113549.1.1.1":
              return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
              return {
                curve: ndata.algorithm.curve,
                privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, "der").privateKey
              };
            case "1.2.840.10040.4.1":
              ndata.algorithm.params.priv_key = asn1.DSAparam.decode(ndata.subjectPrivateKey, "der");
              return {
                type: "dsa",
                params: ndata.algorithm.params
              };
            default:
              throw new Error("unknown key id " + subtype);
          }
        case "RSA PUBLIC KEY":
          return asn1.RSAPublicKey.decode(data, "der");
        case "RSA PRIVATE KEY":
          return asn1.RSAPrivateKey.decode(data, "der");
        case "DSA PRIVATE KEY":
          return {
            type: "dsa",
            params: asn1.DSAPrivateKey.decode(data, "der")
          };
        case "EC PRIVATE KEY":
          data = asn1.ECPrivateKey.decode(data, "der");
          return {
            curve: data.parameters.value,
            privateKey: data.privateKey
          };
        default:
          throw new Error("unknown key type " + type);
      }
    }
    parseKeys.signature = asn1.signature;
    module2.exports = parseKeys;
  }
});

// node_modules/public-encrypt/mgf.js
var require_mgf = __commonJS({
  "node_modules/public-encrypt/mgf.js"(exports2, module2) {
    init_polyfills();
    var createHash3 = require_create_hash();
    var Buffer7 = require_safe_buffer().Buffer;
    module2.exports = function(seed, len) {
      var t = Buffer7.alloc(0);
      var i = 0;
      var c;
      while (t.length < len) {
        c = i2ops(i++);
        t = Buffer7.concat([t, createHash3("sha1").update(seed).update(c).digest()]);
      }
      return t.slice(0, len);
    };
    function i2ops(c) {
      var out = Buffer7.allocUnsafe(4);
      out.writeUInt32BE(c, 0);
      return out;
    }
  }
});

// node_modules/public-encrypt/xor.js
var require_xor = __commonJS({
  "node_modules/public-encrypt/xor.js"(exports2, module2) {
    init_polyfills();
    module2.exports = function xor(a, b2) {
      var len = a.length;
      var i = -1;
      while (++i < len) {
        a[i] ^= b2[i];
      }
      return a;
    };
  }
});

// node_modules/public-encrypt/withPublic.js
var require_withPublic = __commonJS({
  "node_modules/public-encrypt/withPublic.js"(exports2, module2) {
    init_polyfills();
    var BN = require_bn();
    var Buffer7 = require_safe_buffer().Buffer;
    function withPublic(paddedMsg, key) {
      return Buffer7.from(paddedMsg.toRed(BN.mont(key.modulus)).redPow(new BN(key.publicExponent)).fromRed().toArray());
    }
    module2.exports = withPublic;
  }
});

// node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js
var require_bn2 = __commonJS({
  "node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js"(exports2, module2) {
    init_polyfills();
    (function(module3, exports3) {
      "use strict";
      function assert(val, msg) {
        if (!val) throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number || 0, base || 10, endian || "be");
        }
      }
      if (typeof module3 === "object") {
        module3.exports = BN;
      } else {
        exports3.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer7;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer7 = window.Buffer;
        } else {
          Buffer7 = require("buffer").Buffer;
        }
      } catch (e) {
      }
      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };
      BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };
      BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };
      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === "number") {
          return this._initNumber(number, base, endian);
        }
        if (typeof number === "object") {
          return this._initArray(number, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number.length) {
          if (base === 16) {
            this._parseHex(number, start, endian);
          } else {
            this._parseBase(number, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }
        if (number < 67108864) {
          this.words = [number & 67108863];
          this.length = 1;
        } else if (number < 4503599627370496) {
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert(number < 9007199254740992);
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le") return;
        this._initArray(this.toArray(), base, endian);
      };
      BN.prototype._initArray = function _initArray(number, base, endian) {
        assert(typeof number.length === "number");
        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var j2, w2;
        var off = 0;
        if (endian === "be") {
          for (i = number.length - 1, j2 = 0; i >= 0; i -= 3) {
            w2 = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        } else if (endian === "le") {
          for (i = 0, j2 = 0; i < number.length; i += 3) {
            w2 = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        if (c >= 48 && c <= 57) {
          return c - 48;
        } else if (c >= 65 && c <= 70) {
          return c - 55;
        } else if (c >= 97 && c <= 102) {
          return c - 87;
        } else {
          assert(false, "Invalid character in " + string);
        }
      }
      function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
          r |= parseHex4Bits(string, index - 1) << 4;
        }
        return r;
      }
      BN.prototype._parseHex = function _parseHex(number, start, endian) {
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var off = 0;
        var j2 = 0;
        var w2;
        if (endian === "be") {
          for (i = number.length - 1; i >= start; i -= 2) {
            w2 = parseHexByte(number, start, i) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number.length - start;
          for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
            w2 = parseHexByte(number, start, i) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str2, start, end, mul) {
        var r = 0;
        var b2 = 0;
        var len = Math.min(str2.length, end);
        for (var i = start; i < len; i++) {
          var c = str2.charCodeAt(i) - 48;
          r *= mul;
          if (c >= 49) {
            b2 = c - 49 + 10;
          } else if (c >= 17) {
            b2 = c - 17 + 10;
          } else {
            b2 = c;
          }
          assert(c >= 0 && b2 < mul, "Invalid character");
          r += b2;
        }
        return r;
      }
      BN.prototype._parseBase = function _parseBase(number, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod3 = total % limbLen;
        var end = Math.min(total, total - mod3) + start;
        var word = 0;
        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod3 !== 0) {
          var pow3 = 1;
          word = parseBase(number, i, number.length, base);
          for (i = 0; i < mod3; i++) {
            pow3 *= base;
          }
          this.imuln(pow3);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
      }
      BN.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      };
      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e) {
          BN.prototype.inspect = inspect;
        }
      } else {
        BN.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = function toString(base, padding2) {
        base = base || 10;
        padding2 = padding2 | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w2 = this.words[i];
            var word = ((w2 << off | carry) & 16777215).toString(16);
            carry = w2 >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i--;
            }
            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding2 !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c = this.clone();
          c.negative = 0;
          while (!c.isZero()) {
            var r = c.modrn(groupBase).toString(base);
            c = c.idivn(groupBase);
            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding2 !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert(false, "Base should be between 2 and 36");
      };
      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer7) {
        BN.prototype.toBuffer = function toBuffer(endian, length) {
          return this.toArrayLike(Buffer7, endian, length);
        };
      }
      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size);
        }
        return new ArrayType(size);
      };
      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, "byte array longer than desired length");
        assert(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength);
        return res;
      };
      BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w2) {
          return 32 - Math.clz32(w2);
        };
      } else {
        BN.prototype._countBits = function _countBits(w2) {
          var t = w2;
          var r = 0;
          if (t >= 4096) {
            r += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r += 2;
            t >>>= 2;
          }
          return r + t;
        };
      }
      BN.prototype._zeroBits = function _zeroBits(w2) {
        if (w2 === 0) return 26;
        var t = w2;
        var r = 0;
        if ((t & 8191) === 0) {
          r += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r++;
        }
        return r;
      };
      BN.prototype.bitLength = function bitLength() {
        var w2 = this.words[this.length - 1];
        var hi2 = this._countBits(w2);
        return (this.length - 1) * 26 + hi2;
      };
      function toBitArray(num) {
        var w2 = new Array(num.bitLength());
        for (var bit = 0; bit < w2.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w2[bit] = num.words[off] >>> wbit & 1;
        }
        return w2;
      }
      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for (var i = 0; i < this.length; i++) {
          var b2 = this._zeroBits(this.words[i]);
          r += b2;
          if (b2 !== 26) break;
        }
        return r;
      };
      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }
        return this._strip();
      };
      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN.prototype.or = function or2(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN.prototype.iuand = function iuand(num) {
        var b2;
        if (this.length > num.length) {
          b2 = num;
        } else {
          b2 = this;
        }
        for (var i = 0; i < b2.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b2.length;
        return this._strip();
      };
      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN.prototype.iuxor = function iuxor(num) {
        var a;
        var b2;
        if (this.length > num.length) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        for (var i = 0; i < b2.length; i++) {
          this.words[i] = a.words[i] ^ b2.words[i];
        }
        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = a.length;
        return this._strip();
      };
      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN.prototype.iadd = function iadd(num) {
        var r;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        }
        var a, b2;
        if (this.length > num.length) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        var carry = 0;
        for (var i = 0; i < b2.length; i++) {
          r = (a.words[i] | 0) + (b2.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        return this;
      };
      BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a, b2;
        if (cmp > 0) {
          a = this;
          b2 = num;
        } else {
          a = num;
          b2 = this;
        }
        var carry = 0;
        for (var i = 0; i < b2.length; i++) {
          r = (a.words[i] | 0) - (b2.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a = self2.words[0] | 0;
        var b2 = num.words[0] | 0;
        var r = a * b2;
        var lo2 = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo2;
        for (var k2 = 1; k2 < len; k2++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i = k2 - j2 | 0;
            a = self2.words[i] | 0;
            b2 = num.words[j2] | 0;
            r = a * b2 + rword;
            ncarry += r / 67108864 | 0;
            rword = r & 67108863;
          }
          out.words[k2] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k2] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a = self2.words;
        var b2 = num.words;
        var o = out.words;
        var c = 0;
        var lo2;
        var mid;
        var hi2;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b2[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b2[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b2[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b3 = b2[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b2[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b2[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b2[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b2[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b2[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b2[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo2 = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi2 = Math.imul(ah0, bh0);
        var w0 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo2 = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi2 = Math.imul(ah1, bh0);
        lo2 = lo2 + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi2 = hi2 + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo2 = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi2 = Math.imul(ah2, bh0);
        lo2 = lo2 + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi2 = hi2 + Math.imul(ah1, bh1) | 0;
        lo2 = lo2 + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi2 = hi2 + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo2 = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi2 = Math.imul(ah3, bh0);
        lo2 = lo2 + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi2 = hi2 + Math.imul(ah2, bh1) | 0;
        lo2 = lo2 + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi2 = hi2 + Math.imul(ah1, bh2) | 0;
        lo2 = lo2 + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi2 = hi2 + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo2 = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi2 = Math.imul(ah4, bh0);
        lo2 = lo2 + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi2 = hi2 + Math.imul(ah3, bh1) | 0;
        lo2 = lo2 + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi2 = hi2 + Math.imul(ah2, bh2) | 0;
        lo2 = lo2 + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi2 = hi2 + Math.imul(ah1, bh3) | 0;
        lo2 = lo2 + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi2 = hi2 + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo2 = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi2 = Math.imul(ah5, bh0);
        lo2 = lo2 + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi2 = hi2 + Math.imul(ah4, bh1) | 0;
        lo2 = lo2 + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi2 = hi2 + Math.imul(ah3, bh2) | 0;
        lo2 = lo2 + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi2 = hi2 + Math.imul(ah2, bh3) | 0;
        lo2 = lo2 + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi2 = hi2 + Math.imul(ah1, bh4) | 0;
        lo2 = lo2 + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi2 = hi2 + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo2 = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi2 = Math.imul(ah6, bh0);
        lo2 = lo2 + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi2 = hi2 + Math.imul(ah5, bh1) | 0;
        lo2 = lo2 + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi2 = hi2 + Math.imul(ah4, bh2) | 0;
        lo2 = lo2 + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi2 = hi2 + Math.imul(ah3, bh3) | 0;
        lo2 = lo2 + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi2 = hi2 + Math.imul(ah2, bh4) | 0;
        lo2 = lo2 + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi2 = hi2 + Math.imul(ah1, bh5) | 0;
        lo2 = lo2 + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi2 = hi2 + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo2 = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi2 = Math.imul(ah7, bh0);
        lo2 = lo2 + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi2 = hi2 + Math.imul(ah6, bh1) | 0;
        lo2 = lo2 + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi2 = hi2 + Math.imul(ah5, bh2) | 0;
        lo2 = lo2 + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi2 = hi2 + Math.imul(ah4, bh3) | 0;
        lo2 = lo2 + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi2 = hi2 + Math.imul(ah3, bh4) | 0;
        lo2 = lo2 + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi2 = hi2 + Math.imul(ah2, bh5) | 0;
        lo2 = lo2 + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi2 = hi2 + Math.imul(ah1, bh6) | 0;
        lo2 = lo2 + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi2 = hi2 + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo2 = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi2 = Math.imul(ah8, bh0);
        lo2 = lo2 + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi2 = hi2 + Math.imul(ah7, bh1) | 0;
        lo2 = lo2 + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi2 = hi2 + Math.imul(ah6, bh2) | 0;
        lo2 = lo2 + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi2 = hi2 + Math.imul(ah5, bh3) | 0;
        lo2 = lo2 + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi2 = hi2 + Math.imul(ah4, bh4) | 0;
        lo2 = lo2 + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi2 = hi2 + Math.imul(ah3, bh5) | 0;
        lo2 = lo2 + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi2 = hi2 + Math.imul(ah2, bh6) | 0;
        lo2 = lo2 + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi2 = hi2 + Math.imul(ah1, bh7) | 0;
        lo2 = lo2 + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi2 = hi2 + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo2 = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi2 = Math.imul(ah9, bh0);
        lo2 = lo2 + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi2 = hi2 + Math.imul(ah8, bh1) | 0;
        lo2 = lo2 + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi2 = hi2 + Math.imul(ah7, bh2) | 0;
        lo2 = lo2 + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi2 = hi2 + Math.imul(ah6, bh3) | 0;
        lo2 = lo2 + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi2 = hi2 + Math.imul(ah5, bh4) | 0;
        lo2 = lo2 + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi2 = hi2 + Math.imul(ah4, bh5) | 0;
        lo2 = lo2 + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi2 = hi2 + Math.imul(ah3, bh6) | 0;
        lo2 = lo2 + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi2 = hi2 + Math.imul(ah2, bh7) | 0;
        lo2 = lo2 + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi2 = hi2 + Math.imul(ah1, bh8) | 0;
        lo2 = lo2 + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi2 = hi2 + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo2 = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi2 = Math.imul(ah9, bh1);
        lo2 = lo2 + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi2 = hi2 + Math.imul(ah8, bh2) | 0;
        lo2 = lo2 + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi2 = hi2 + Math.imul(ah7, bh3) | 0;
        lo2 = lo2 + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi2 = hi2 + Math.imul(ah6, bh4) | 0;
        lo2 = lo2 + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi2 = hi2 + Math.imul(ah5, bh5) | 0;
        lo2 = lo2 + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi2 = hi2 + Math.imul(ah4, bh6) | 0;
        lo2 = lo2 + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi2 = hi2 + Math.imul(ah3, bh7) | 0;
        lo2 = lo2 + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi2 = hi2 + Math.imul(ah2, bh8) | 0;
        lo2 = lo2 + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi2 = hi2 + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo2 = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi2 = Math.imul(ah9, bh2);
        lo2 = lo2 + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi2 = hi2 + Math.imul(ah8, bh3) | 0;
        lo2 = lo2 + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi2 = hi2 + Math.imul(ah7, bh4) | 0;
        lo2 = lo2 + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi2 = hi2 + Math.imul(ah6, bh5) | 0;
        lo2 = lo2 + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi2 = hi2 + Math.imul(ah5, bh6) | 0;
        lo2 = lo2 + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi2 = hi2 + Math.imul(ah4, bh7) | 0;
        lo2 = lo2 + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi2 = hi2 + Math.imul(ah3, bh8) | 0;
        lo2 = lo2 + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi2 = hi2 + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo2 = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi2 = Math.imul(ah9, bh3);
        lo2 = lo2 + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi2 = hi2 + Math.imul(ah8, bh4) | 0;
        lo2 = lo2 + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi2 = hi2 + Math.imul(ah7, bh5) | 0;
        lo2 = lo2 + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi2 = hi2 + Math.imul(ah6, bh6) | 0;
        lo2 = lo2 + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi2 = hi2 + Math.imul(ah5, bh7) | 0;
        lo2 = lo2 + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi2 = hi2 + Math.imul(ah4, bh8) | 0;
        lo2 = lo2 + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi2 = hi2 + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo2 = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi2 = Math.imul(ah9, bh4);
        lo2 = lo2 + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi2 = hi2 + Math.imul(ah8, bh5) | 0;
        lo2 = lo2 + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi2 = hi2 + Math.imul(ah7, bh6) | 0;
        lo2 = lo2 + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi2 = hi2 + Math.imul(ah6, bh7) | 0;
        lo2 = lo2 + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi2 = hi2 + Math.imul(ah5, bh8) | 0;
        lo2 = lo2 + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi2 = hi2 + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo2 = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi2 = Math.imul(ah9, bh5);
        lo2 = lo2 + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi2 = hi2 + Math.imul(ah8, bh6) | 0;
        lo2 = lo2 + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi2 = hi2 + Math.imul(ah7, bh7) | 0;
        lo2 = lo2 + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi2 = hi2 + Math.imul(ah6, bh8) | 0;
        lo2 = lo2 + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi2 = hi2 + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo2 = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi2 = Math.imul(ah9, bh6);
        lo2 = lo2 + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi2 = hi2 + Math.imul(ah8, bh7) | 0;
        lo2 = lo2 + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi2 = hi2 + Math.imul(ah7, bh8) | 0;
        lo2 = lo2 + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi2 = hi2 + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo2 = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi2 = Math.imul(ah9, bh7);
        lo2 = lo2 + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi2 = hi2 + Math.imul(ah8, bh8) | 0;
        lo2 = lo2 + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi2 = hi2 + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo2 = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi2 = Math.imul(ah9, bh8);
        lo2 = lo2 + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi2 = hi2 + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo2 = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi2 = Math.imul(ah9, bh9);
        var w18 = (c + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c = (hi2 + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
          o[19] = c;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k2 = 0; k2 < out.length - 1; k2++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i = k2 - j2;
            var a = self2.words[i] | 0;
            var b2 = num.words[j2] | 0;
            var r = a * b2;
            var lo2 = r & 67108863;
            ncarry = ncarry + (r / 67108864 | 0) | 0;
            lo2 = lo2 + rword | 0;
            rword = lo2 & 67108863;
            ncarry = ncarry + (lo2 >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k2] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k2] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self2, num, out) {
        return bigMulTo(self2, num, out);
      }
      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x2, y2) {
        this.x = x2;
        this.y = y2;
      }
      FFTM.prototype.makeRBT = function makeRBT(N3) {
        var t = new Array(N3);
        var l2 = BN.prototype._countBits(N3) - 1;
        for (var i = 0; i < N3; i++) {
          t[i] = this.revBin(i, l2, N3);
        }
        return t;
      };
      FFTM.prototype.revBin = function revBin(x2, l2, N3) {
        if (x2 === 0 || x2 === N3 - 1) return x2;
        var rb = 0;
        for (var i = 0; i < l2; i++) {
          rb |= (x2 & 1) << l2 - i - 1;
          x2 >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N3) {
        for (var i = 0; i < N3; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N3, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N3);
        for (var s = 1; s < N3; s <<= 1) {
          var l2 = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l2);
          var itwdf = Math.sin(2 * Math.PI / l2);
          for (var p2 = 0; p2 < N3; p2 += l2) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j2 = 0; j2 < s; j2++) {
              var re2 = rtws[p2 + j2];
              var ie2 = itws[p2 + j2];
              var ro2 = rtws[p2 + j2 + s];
              var io2 = itws[p2 + j2 + s];
              var rx = rtwdf_ * ro2 - itwdf_ * io2;
              io2 = rtwdf_ * io2 + itwdf_ * ro2;
              ro2 = rx;
              rtws[p2 + j2] = re2 + ro2;
              itws[p2 + j2] = ie2 + io2;
              rtws[p2 + j2 + s] = re2 - ro2;
              itws[p2 + j2 + s] = ie2 - io2;
              if (j2 !== l2) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n, m2) {
        var N3 = Math.max(m2, n) | 1;
        var odd = N3 & 1;
        var i = 0;
        for (N3 = N3 / 2 | 0; N3; N3 = N3 >>> 1) {
          i++;
        }
        return 1 << i + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N3) {
        if (N3 <= 1) return;
        for (var i = 0; i < N3 / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N3 - i - 1];
          rws[N3 - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N3 - i - 1];
          iws[N3 - i - 1] = -t;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws2, N3) {
        var carry = 0;
        for (var i = 0; i < N3 / 2; i++) {
          var w2 = Math.round(ws2[2 * i + 1] / N3) * 8192 + Math.round(ws2[2 * i] / N3) + carry;
          ws2[i] = w2 & 67108863;
          if (w2 < 67108864) {
            carry = 0;
          } else {
            carry = w2 / 67108864 | 0;
          }
        }
        return ws2;
      };
      FFTM.prototype.convert13b = function convert13b(ws2, len, rws, N3) {
        var carry = 0;
        for (var i = 0; i < len; i++) {
          carry = carry + (ws2[i] | 0);
          rws[2 * i] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i = 2 * len; i < N3; ++i) {
          rws[i] = 0;
        }
        assert(carry === 0);
        assert((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N3) {
        var ph = new Array(N3);
        for (var i = 0; i < N3; i++) {
          ph[i] = 0;
        }
        return ph;
      };
      FFTM.prototype.mulp = function mulp(x2, y2, out) {
        var N3 = 2 * this.guessLen13b(x2.length, y2.length);
        var rbt = this.makeRBT(N3);
        var _2 = this.stub(N3);
        var rws = new Array(N3);
        var rwst = new Array(N3);
        var iwst = new Array(N3);
        var nrws = new Array(N3);
        var nrwst = new Array(N3);
        var niwst = new Array(N3);
        var rmws = out.words;
        rmws.length = N3;
        this.convert13b(x2.words, x2.length, rws, N3);
        this.convert13b(y2.words, y2.length, nrws, N3);
        this.transform(rws, _2, rwst, iwst, N3, rbt);
        this.transform(nrws, _2, nrwst, niwst, N3, rbt);
        for (var i = 0; i < N3; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N3);
        this.transform(rwst, iwst, rmws, _2, N3, rbt);
        this.conjugate(rmws, _2, N3);
        this.normalize13b(rmws, N3);
        out.negative = x2.negative ^ y2.negative;
        out.length = x2.length + y2.length;
        return out._strip();
      };
      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(typeof num === "number");
        assert(num < 67108864);
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w2 = (this.words[i] | 0) * num;
          var lo2 = (w2 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w2 / 67108864 | 0;
          carry += lo2 >>> 26;
          this.words[i] = lo2 & 67108863;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN.prototype.pow = function pow3(num) {
        var w2 = toBitArray(num);
        if (w2.length === 0) return new BN(1);
        var res = this;
        for (var i = 0; i < w2.length; i++, res = res.sqr()) {
          if (w2[i] !== 0) break;
        }
        if (++i < w2.length) {
          for (var q2 = res.sqr(); i < w2.length; i++, q2 = q2.sqr()) {
            if (w2[i] === 0) continue;
            res = res.mul(q2);
          }
        }
        return res;
      };
      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
          var carry = 0;
          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }
          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }
          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }
          this.length += s;
        }
        return this._strip();
      };
      BN.prototype.ishln = function ishln(bits) {
        assert(this.negative === 0);
        return this.iushln(bits);
      };
      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === "number" && bits >= 0);
        var h2;
        if (hint) {
          h2 = (hint - hint % 26) / 26;
        } else {
          h2 = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h2 -= s;
        h2 = Math.max(0, h2);
        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h2); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q2 = 1 << r;
        if (this.length <= s) return false;
        var w2 = this.words[s];
        return !!(w2 & q2);
      };
      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
          var mask = 67108863 ^ 67108863 >>> r << r;
          this.words[this.length - 1] &= mask;
        }
        return this._strip();
      };
      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0) return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
          this.words[i] -= 67108864;
          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
      };
      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w2;
        var carry = 0;
        for (i = 0; i < num.length; i++) {
          w2 = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w2 -= right & 67108863;
          carry = (w2 >> 26) - (right / 67108864 | 0);
          this.words[i + shift] = w2 & 67108863;
        }
        for (; i < this.length - shift; i++) {
          w2 = (this.words[i + shift] | 0) + carry;
          carry = w2 >> 26;
          this.words[i + shift] = w2 & 67108863;
        }
        if (carry === 0) return this._strip();
        assert(carry === -1);
        carry = 0;
        for (i = 0; i < this.length; i++) {
          w2 = -(this.words[i] | 0) + carry;
          carry = w2 >> 26;
          this.words[i] = w2 & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b2 = num;
        var bhi = b2.words[b2.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b2 = b2.ushln(shift);
          a.iushln(shift);
          bhi = b2.words[b2.length - 1] | 0;
        }
        var m2 = a.length - b2.length;
        var q2;
        if (mode !== "mod") {
          q2 = new BN(null);
          q2.length = m2 + 1;
          q2.words = new Array(q2.length);
          for (var i = 0; i < q2.length; i++) {
            q2.words[i] = 0;
          }
        }
        var diff = a.clone()._ishlnsubmul(b2, 1, m2);
        if (diff.negative === 0) {
          a = diff;
          if (q2) {
            q2.words[m2] = 1;
          }
        }
        for (var j2 = m2 - 1; j2 >= 0; j2--) {
          var qj = (a.words[b2.length + j2] | 0) * 67108864 + (a.words[b2.length + j2 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a._ishlnsubmul(b2, qj, j2);
          while (a.negative !== 0) {
            qj--;
            a.negative = 0;
            a._ishlnsubmul(b2, 1, j2);
            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }
          if (q2) {
            q2.words[j2] = qj;
          }
        }
        if (q2) {
          q2._strip();
        }
        a._strip();
        if (mode !== "div" && shift !== 0) {
          a.iushrn(shift);
        }
        return {
          div: q2 || null,
          mod: a
        };
      };
      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod3, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod3 = res.mod.neg();
            if (positive && mod3.negative !== 0) {
              mod3.iadd(num);
            }
          }
          return {
            div,
            mod: mod3
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod3 = res.mod.neg();
            if (positive && mod3.negative !== 0) {
              mod3.isub(num);
            }
          }
          return {
            div: res.div,
            mod: mod3
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN.prototype.mod = function mod3(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero()) return dm.div;
        var mod3 = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod3.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var p2 = (1 << 26) % num;
        var acc = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p2 * acc + (this.words[i] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var carry = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var w2 = (this.words[i] | 0) + carry * 67108864;
          this.words[i] = w2 / num | 0;
          carry = w2 % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN.prototype.egcd = function egcd(p2) {
        assert(p2.negative === 0);
        assert(!p2.isZero());
        var x2 = this;
        var y2 = p2.clone();
        if (x2.negative !== 0) {
          x2 = x2.umod(p2);
        } else {
          x2 = x2.clone();
        }
        var A2 = new BN(1);
        var B2 = new BN(0);
        var C2 = new BN(0);
        var D2 = new BN(1);
        var g2 = 0;
        while (x2.isEven() && y2.isEven()) {
          x2.iushrn(1);
          y2.iushrn(1);
          ++g2;
        }
        var yp = y2.clone();
        var xp = x2.clone();
        while (!x2.isZero()) {
          for (var i = 0, im = 1; (x2.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
          if (i > 0) {
            x2.iushrn(i);
            while (i-- > 0) {
              if (A2.isOdd() || B2.isOdd()) {
                A2.iadd(yp);
                B2.isub(xp);
              }
              A2.iushrn(1);
              B2.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (y2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            y2.iushrn(j2);
            while (j2-- > 0) {
              if (C2.isOdd() || D2.isOdd()) {
                C2.iadd(yp);
                D2.isub(xp);
              }
              C2.iushrn(1);
              D2.iushrn(1);
            }
          }
          if (x2.cmp(y2) >= 0) {
            x2.isub(y2);
            A2.isub(C2);
            B2.isub(D2);
          } else {
            y2.isub(x2);
            C2.isub(A2);
            D2.isub(B2);
          }
        }
        return {
          a: C2,
          b: D2,
          gcd: y2.iushln(g2)
        };
      };
      BN.prototype._invmp = function _invmp(p2) {
        assert(p2.negative === 0);
        assert(!p2.isZero());
        var a = this;
        var b2 = p2.clone();
        if (a.negative !== 0) {
          a = a.umod(p2);
        } else {
          a = a.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b2.clone();
        while (a.cmpn(1) > 0 && b2.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
          if (i > 0) {
            a.iushrn(i);
            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            b2.iushrn(j2);
            while (j2-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a.cmp(b2) >= 0) {
            a.isub(b2);
            x1.isub(x2);
          } else {
            b2.isub(a);
            x2.isub(x1);
          }
        }
        var res;
        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p2);
        }
        return res;
      };
      BN.prototype.gcd = function gcd2(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b2 = num.clone();
        a.negative = 0;
        b2.negative = 0;
        for (var shift = 0; a.isEven() && b2.isEven(); shift++) {
          a.iushrn(1);
          b2.iushrn(1);
        }
        do {
          while (a.isEven()) {
            a.iushrn(1);
          }
          while (b2.isEven()) {
            b2.iushrn(1);
          }
          var r = a.cmp(b2);
          if (r < 0) {
            var t = a;
            a = b2;
            b2 = t;
          } else if (r === 0 || b2.cmpn(1) === 0) {
            break;
          }
          a.isub(b2);
        } while (true);
        return b2.iushln(shift);
      };
      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q2 = 1 << r;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q2;
          return this;
        }
        var carry = q2;
        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w2 = this.words[i] | 0;
          w2 += carry;
          carry = w2 >>> 26;
          w2 &= 67108863;
          this.words[i] = w2;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert(num <= 67108863, "Number is too big");
          var w2 = this.words[0] | 0;
          res = w2 === num ? 0 : w2 < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b2 = num.words[i] | 0;
          if (a === b2) continue;
          if (a < b2) {
            res = -1;
          } else if (a > b2) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN.prototype.gt = function gt2(num) {
        return this.cmp(num) === 1;
      };
      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN.prototype.lt = function lt2(num) {
        return this.cmp(num) === -1;
      };
      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN.red = function red(num) {
        return new Red(num);
      };
      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        assert(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN.prototype.fromRed = function fromRed() {
        assert(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN.prototype.redSub = function redSub(num) {
        assert(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN.prototype.redISub = function redISub(num) {
        assert(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN.prototype.redShl = function redShl(num) {
        assert(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN.prototype.redMul = function redMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN.prototype.redSqr = function redSqr() {
        assert(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN.prototype.redISqr = function redISqr() {
        assert(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN.prototype.redInvm = function redInvm() {
        assert(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN.prototype.redNeg = function redNeg() {
        assert(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p2) {
        this.name = name;
        this.p = new BN(p2, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r = num;
        var rlen;
        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          if (r.strip !== void 0) {
            r.strip();
          } else {
            r._strip();
          }
        }
        return r;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output3) {
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i = 0; i < outLen; i++) {
          output3.words[i] = input.words[i];
        }
        output3.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output3.words[output3.length++] = prev & mask;
        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo2 = 0;
        for (var i = 0; i < num.length; i++) {
          var w2 = num.words[i] | 0;
          lo2 += w2 * 977;
          num.words[i] = lo2 & 67108863;
          lo2 = w2 * 64 + (lo2 / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i = 0; i < num.length; i++) {
          var hi2 = (num.words[i] | 0) * 19 + carry;
          var lo2 = hi2 & 67108863;
          hi2 >>>= 26;
          num.words[i] = lo2;
          carry = hi2;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN._prime = function prime(name) {
        if (primes[name]) return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m2) {
        if (typeof m2 === "string") {
          var prime = BN._prime(m2);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m2.gtn(1), "modulus must be greater than 1");
          this.m = m2;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, "red works only with positives");
        assert(a.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a, b2) {
        assert((a.negative | b2.negative) === 0, "red works only with positives");
        assert(
          a.red && a.red === b2.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
      };
      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
      };
      Red.prototype.add = function add(a, b2) {
        this._verify2(a, b2);
        var res = a.add(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a, b2) {
        this._verify2(a, b2);
        var res = a.iadd(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a, b2) {
        this._verify2(a, b2);
        var res = a.sub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a, b2) {
        this._verify2(a, b2);
        var res = a.isub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
      };
      Red.prototype.imul = function imul(a, b2) {
        this._verify2(a, b2);
        return this.imod(a.imul(b2));
      };
      Red.prototype.mul = function mul(a, b2) {
        this._verify2(a, b2);
        return this.imod(a.mul(b2));
      };
      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };
      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };
      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow3 = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow3);
        }
        var q2 = this.m.subn(1);
        var s = 0;
        while (!q2.isZero() && q2.andln(1) === 0) {
          s++;
          q2.iushrn(1);
        }
        assert(!q2.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z2 = this.m.bitLength();
        z2 = new BN(2 * z2 * z2).toRed(this);
        while (this.pow(z2, lpow).cmp(nOne) !== 0) {
          z2.redIAdd(nOne);
        }
        var c = this.pow(z2, q2);
        var r = this.pow(a, q2.addn(1).iushrn(1));
        var t = this.pow(a, q2);
        var m2 = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }
          assert(i < m2);
          var b2 = this.pow(c, new BN(1).iushln(m2 - i - 1));
          r = r.redMul(b2);
          c = b2.redSqr();
          t = t.redMul(c);
          m2 = i;
        }
        return r;
      };
      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow3(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];
          for (var j2 = start - 1; j2 >= 0; j2--) {
            var bit = word >> j2 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j2 !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m2) {
        Red.call(this, m2);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };
      Mont.prototype.imul = function imul(a, b2) {
        if (a.isZero() || b2.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }
        var t = a.imul(b2);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t.isub(c).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a, b2) {
        if (a.isZero() || b2.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b2);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t.isub(c).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a) {
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module2 === "undefined" || module2, exports2);
  }
});

// node_modules/browserify-rsa/index.js
var require_browserify_rsa = __commonJS({
  "node_modules/browserify-rsa/index.js"(exports2, module2) {
    init_polyfills();
    var BN = require_bn2();
    var randomBytes3 = require_randombytes();
    function blind(priv) {
      var r = getr(priv);
      var blinder = r.toRed(BN.mont(priv.modulus)).redPow(new BN(priv.publicExponent)).fromRed();
      return { blinder, unblinder: r.invm(priv.modulus) };
    }
    function getr(priv) {
      var len = priv.modulus.byteLength();
      var r;
      do {
        r = new BN(randomBytes3(len));
      } while (r.cmp(priv.modulus) >= 0 || !r.umod(priv.prime1) || !r.umod(priv.prime2));
      return r;
    }
    function crt(msg, priv) {
      var blinds = blind(priv);
      var len = priv.modulus.byteLength();
      var blinded = new BN(msg).mul(blinds.blinder).umod(priv.modulus);
      var c1 = blinded.toRed(BN.mont(priv.prime1));
      var c2 = blinded.toRed(BN.mont(priv.prime2));
      var qinv = priv.coefficient;
      var p2 = priv.prime1;
      var q2 = priv.prime2;
      var m1 = c1.redPow(priv.exponent1).fromRed();
      var m2 = c2.redPow(priv.exponent2).fromRed();
      var h2 = m1.isub(m2).imul(qinv).umod(p2).imul(q2);
      return m2.iadd(h2).imul(blinds.unblinder).umod(priv.modulus).toArrayLike(Buffer, "be", len);
    }
    crt.getr = getr;
    module2.exports = crt;
  }
});

// node_modules/public-encrypt/publicEncrypt.js
var require_publicEncrypt = __commonJS({
  "node_modules/public-encrypt/publicEncrypt.js"(exports2, module2) {
    init_polyfills();
    var parseKeys = require_parse_asn1();
    var randomBytes3 = require_randombytes();
    var createHash3 = require_create_hash();
    var mgf = require_mgf();
    var xor = require_xor();
    var BN = require_bn();
    var withPublic = require_withPublic();
    var crt = require_browserify_rsa();
    var Buffer7 = require_safe_buffer().Buffer;
    module2.exports = function publicEncrypt(publicKey, msg, reverse) {
      var padding2;
      if (publicKey.padding) {
        padding2 = publicKey.padding;
      } else if (reverse) {
        padding2 = 1;
      } else {
        padding2 = 4;
      }
      var key = parseKeys(publicKey);
      var paddedMsg;
      if (padding2 === 4) {
        paddedMsg = oaep(key, msg);
      } else if (padding2 === 1) {
        paddedMsg = pkcs1(key, msg, reverse);
      } else if (padding2 === 3) {
        paddedMsg = new BN(msg);
        if (paddedMsg.cmp(key.modulus) >= 0) {
          throw new Error("data too long for modulus");
        }
      } else {
        throw new Error("unknown padding");
      }
      if (reverse) {
        return crt(paddedMsg, key);
      } else {
        return withPublic(paddedMsg, key);
      }
    };
    function oaep(key, msg) {
      var k2 = key.modulus.byteLength();
      var mLen = msg.length;
      var iHash = createHash3("sha1").update(Buffer7.alloc(0)).digest();
      var hLen = iHash.length;
      var hLen2 = 2 * hLen;
      if (mLen > k2 - hLen2 - 2) {
        throw new Error("message too long");
      }
      var ps2 = Buffer7.alloc(k2 - mLen - hLen2 - 2);
      var dblen = k2 - hLen - 1;
      var seed = randomBytes3(hLen);
      var maskedDb = xor(Buffer7.concat([iHash, ps2, Buffer7.alloc(1, 1), msg], dblen), mgf(seed, dblen));
      var maskedSeed = xor(seed, mgf(maskedDb, hLen));
      return new BN(Buffer7.concat([Buffer7.alloc(1), maskedSeed, maskedDb], k2));
    }
    function pkcs1(key, msg, reverse) {
      var mLen = msg.length;
      var k2 = key.modulus.byteLength();
      if (mLen > k2 - 11) {
        throw new Error("message too long");
      }
      var ps2;
      if (reverse) {
        ps2 = Buffer7.alloc(k2 - mLen - 3, 255);
      } else {
        ps2 = nonZero(k2 - mLen - 3);
      }
      return new BN(Buffer7.concat([Buffer7.from([0, reverse ? 1 : 2]), ps2, Buffer7.alloc(1), msg], k2));
    }
    function nonZero(len) {
      var out = Buffer7.allocUnsafe(len);
      var i = 0;
      var cache = randomBytes3(len * 2);
      var cur = 0;
      var num;
      while (i < len) {
        if (cur === cache.length) {
          cache = randomBytes3(len * 2);
          cur = 0;
        }
        num = cache[cur++];
        if (num) {
          out[i++] = num;
        }
      }
      return out;
    }
  }
});

// node_modules/public-encrypt/privateDecrypt.js
var require_privateDecrypt = __commonJS({
  "node_modules/public-encrypt/privateDecrypt.js"(exports2, module2) {
    init_polyfills();
    var parseKeys = require_parse_asn1();
    var mgf = require_mgf();
    var xor = require_xor();
    var BN = require_bn();
    var crt = require_browserify_rsa();
    var createHash3 = require_create_hash();
    var withPublic = require_withPublic();
    var Buffer7 = require_safe_buffer().Buffer;
    module2.exports = function privateDecrypt(privateKey, enc, reverse) {
      var padding2;
      if (privateKey.padding) {
        padding2 = privateKey.padding;
      } else if (reverse) {
        padding2 = 1;
      } else {
        padding2 = 4;
      }
      var key = parseKeys(privateKey);
      var k2 = key.modulus.byteLength();
      if (enc.length > k2 || new BN(enc).cmp(key.modulus) >= 0) {
        throw new Error("decryption error");
      }
      var msg;
      if (reverse) {
        msg = withPublic(new BN(enc), key);
      } else {
        msg = crt(enc, key);
      }
      var zBuffer = Buffer7.alloc(k2 - msg.length);
      msg = Buffer7.concat([zBuffer, msg], k2);
      if (padding2 === 4) {
        return oaep(key, msg);
      } else if (padding2 === 1) {
        return pkcs1(key, msg, reverse);
      } else if (padding2 === 3) {
        return msg;
      } else {
        throw new Error("unknown padding");
      }
    };
    function oaep(key, msg) {
      var k2 = key.modulus.byteLength();
      var iHash = createHash3("sha1").update(Buffer7.alloc(0)).digest();
      var hLen = iHash.length;
      if (msg[0] !== 0) {
        throw new Error("decryption error");
      }
      var maskedSeed = msg.slice(1, hLen + 1);
      var maskedDb = msg.slice(hLen + 1);
      var seed = xor(maskedSeed, mgf(maskedDb, hLen));
      var db = xor(maskedDb, mgf(seed, k2 - hLen - 1));
      if (compare(iHash, db.slice(0, hLen))) {
        throw new Error("decryption error");
      }
      var i = hLen;
      while (db[i] === 0) {
        i++;
      }
      if (db[i++] !== 1) {
        throw new Error("decryption error");
      }
      return db.slice(i);
    }
    function pkcs1(key, msg, reverse) {
      var p1 = msg.slice(0, 2);
      var i = 2;
      var status = 0;
      while (msg[i++] !== 0) {
        if (i >= msg.length) {
          status++;
          break;
        }
      }
      var ps2 = msg.slice(2, i - 1);
      if (p1.toString("hex") !== "0002" && !reverse || p1.toString("hex") !== "0001" && reverse) {
        status++;
      }
      if (ps2.length < 8) {
        status++;
      }
      if (status) {
        throw new Error("decryption error");
      }
      return msg.slice(i);
    }
    function compare(a, b2) {
      a = Buffer7.from(a);
      b2 = Buffer7.from(b2);
      var dif = 0;
      var len = a.length;
      if (a.length !== b2.length) {
        dif++;
        len = Math.min(a.length, b2.length);
      }
      var i = -1;
      while (++i < len) {
        dif += a[i] ^ b2[i];
      }
      return dif;
    }
  }
});

// node_modules/public-encrypt/browser.js
var require_browser2 = __commonJS({
  "node_modules/public-encrypt/browser.js"(exports2) {
    init_polyfills();
    exports2.publicEncrypt = require_publicEncrypt();
    exports2.privateDecrypt = require_privateDecrypt();
    exports2.privateEncrypt = function privateEncrypt(key, buf) {
      return exports2.publicEncrypt(key, buf, true);
    };
    exports2.publicDecrypt = function publicDecrypt(key, buf) {
      return exports2.privateDecrypt(key, buf, true);
    };
  }
});

// node_modules/public-encrypt/index.js
var require_public_encrypt = __commonJS({
  "node_modules/public-encrypt/index.js"(exports2) {
    init_polyfills();
    var crypto3 = require("crypto");
    if (typeof crypto3.publicEncrypt !== "function") {
      crypto3 = require_browser2();
    }
    exports2.publicEncrypt = crypto3.publicEncrypt;
    exports2.privateDecrypt = crypto3.privateDecrypt;
    if (typeof crypto3.privateEncrypt !== "function") {
      exports2.privateEncrypt = require_browser2().privateEncrypt;
    } else {
      exports2.privateEncrypt = crypto3.privateEncrypt;
    }
    if (typeof crypto3.publicDecrypt !== "function") {
      exports2.publicDecrypt = require_browser2().publicDecrypt;
    } else {
      exports2.publicDecrypt = crypto3.publicDecrypt;
    }
  }
});

// node_modules/randomfill/browser.js
var require_browser3 = __commonJS({
  "node_modules/randomfill/browser.js"(exports2) {
    "use strict";
    init_polyfills();
    function oldBrowser() {
      throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
    }
    var safeBuffer = require_safe_buffer();
    var randombytes = require_randombytes();
    var Buffer7 = safeBuffer.Buffer;
    var kBufferMaxLength = safeBuffer.kMaxLength;
    var crypto3 = globalThis.crypto || globalThis.msCrypto;
    var kMaxUint32 = Math.pow(2, 32) - 1;
    function assertOffset(offset, length) {
      if (typeof offset !== "number" || offset !== offset) {
        throw new TypeError("offset must be a number");
      }
      if (offset > kMaxUint32 || offset < 0) {
        throw new TypeError("offset must be a uint32");
      }
      if (offset > kBufferMaxLength || offset > length) {
        throw new RangeError("offset out of range");
      }
    }
    function assertSize(size, offset, length) {
      if (typeof size !== "number" || size !== size) {
        throw new TypeError("size must be a number");
      }
      if (size > kMaxUint32 || size < 0) {
        throw new TypeError("size must be a uint32");
      }
      if (size + offset > length || size > kBufferMaxLength) {
        throw new RangeError("buffer too small");
      }
    }
    if (crypto3 && crypto3.getRandomValues || !process.browser) {
      exports2.randomFill = randomFill;
      exports2.randomFillSync = randomFillSync;
    } else {
      exports2.randomFill = oldBrowser;
      exports2.randomFillSync = oldBrowser;
    }
    function randomFill(buf, offset, size, cb) {
      if (!Buffer7.isBuffer(buf) && !(buf instanceof globalThis.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
      }
      if (typeof offset === "function") {
        cb = offset;
        offset = 0;
        size = buf.length;
      } else if (typeof size === "function") {
        cb = size;
        size = buf.length - offset;
      } else if (typeof cb !== "function") {
        throw new TypeError('"cb" argument must be a function');
      }
      assertOffset(offset, buf.length);
      assertSize(size, offset, buf.length);
      return actualFill(buf, offset, size, cb);
    }
    function actualFill(buf, offset, size, cb) {
      if (process.browser) {
        var ourBuf = buf.buffer;
        var uint = new Uint8Array(ourBuf, offset, size);
        crypto3.getRandomValues(uint);
        if (cb) {
          process.nextTick(function() {
            cb(null, buf);
          });
          return;
        }
        return buf;
      }
      if (cb) {
        randombytes(size, function(err2, bytes4) {
          if (err2) {
            return cb(err2);
          }
          bytes4.copy(buf, offset);
          cb(null, buf);
        });
        return;
      }
      var bytes3 = randombytes(size);
      bytes3.copy(buf, offset);
      return buf;
    }
    function randomFillSync(buf, offset, size) {
      if (typeof offset === "undefined") {
        offset = 0;
      }
      if (!Buffer7.isBuffer(buf) && !(buf instanceof globalThis.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
      }
      assertOffset(offset, buf.length);
      if (size === void 0) size = buf.length - offset;
      assertSize(size, offset, buf.length);
      return actualFill(buf, offset, size);
    }
  }
});

// node_modules/randomfill/index.js
var require_randomfill = __commonJS({
  "node_modules/randomfill/index.js"(exports2, module2) {
    init_polyfills();
    var crypto3 = require("crypto");
    if (typeof crypto3.randomFill === "function" && typeof crypto3.randomFillSync === "function") {
      exports2.randomFill = crypto3.randomFill;
      exports2.randomFillSync = crypto3.randomFillSync;
    } else {
      module2.exports = require_browser3();
    }
  }
});

// node_modules/crypto-browserify/index.js
var require_crypto_browserify = __commonJS({
  "node_modules/crypto-browserify/index.js"(exports2) {
    "use strict";
    init_polyfills();
    exports2.randomBytes = exports2.rng = exports2.pseudoRandomBytes = exports2.prng = require_randombytes();
    exports2.createHash = exports2.Hash = require_create_hash();
    exports2.createHmac = exports2.Hmac = require_create_hmac();
    var algos = require_algos();
    var algoKeys = Object.keys(algos);
    var hashes = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(algoKeys);
    exports2.getHashes = function() {
      return hashes;
    };
    var p2 = require_pbkdf2();
    exports2.pbkdf2 = p2.pbkdf2;
    exports2.pbkdf2Sync = p2.pbkdf2Sync;
    var aes = require_browserify_cipher();
    exports2.Cipher = aes.Cipher;
    exports2.createCipher = aes.createCipher;
    exports2.Cipheriv = aes.Cipheriv;
    exports2.createCipheriv = aes.createCipheriv;
    exports2.Decipher = aes.Decipher;
    exports2.createDecipher = aes.createDecipher;
    exports2.Decipheriv = aes.Decipheriv;
    exports2.createDecipheriv = aes.createDecipheriv;
    exports2.getCiphers = aes.getCiphers;
    exports2.listCiphers = aes.listCiphers;
    var dh = require_diffie_hellman();
    exports2.DiffieHellmanGroup = dh.DiffieHellmanGroup;
    exports2.createDiffieHellmanGroup = dh.createDiffieHellmanGroup;
    exports2.getDiffieHellman = dh.getDiffieHellman;
    exports2.createDiffieHellman = dh.createDiffieHellman;
    exports2.DiffieHellman = dh.DiffieHellman;
    var sign3 = require_browserify_sign();
    exports2.createSign = sign3.createSign;
    exports2.Sign = sign3.Sign;
    exports2.createVerify = sign3.createVerify;
    exports2.Verify = sign3.Verify;
    exports2.createECDH = require_create_ecdh();
    var publicEncrypt = require_public_encrypt();
    exports2.publicEncrypt = publicEncrypt.publicEncrypt;
    exports2.privateEncrypt = publicEncrypt.privateEncrypt;
    exports2.publicDecrypt = publicEncrypt.publicDecrypt;
    exports2.privateDecrypt = publicEncrypt.privateDecrypt;
    var rf = require_randomfill();
    exports2.randomFill = rf.randomFill;
    exports2.randomFillSync = rf.randomFillSync;
    exports2.createCredentials = function() {
      throw new Error([
        "sorry, createCredentials is not implemented yet",
        "we accept pull requests",
        "https://github.com/crypto-browserify/crypto-browserify"
      ].join("\n"));
    };
    exports2.constants = {
      "DH_CHECK_P_NOT_SAFE_PRIME": 2,
      "DH_CHECK_P_NOT_PRIME": 1,
      "DH_UNABLE_TO_CHECK_GENERATOR": 4,
      "DH_NOT_SUITABLE_GENERATOR": 8,
      "NPN_ENABLED": 1,
      "ALPN_ENABLED": 1,
      "RSA_PKCS1_PADDING": 1,
      "RSA_SSLV23_PADDING": 2,
      "RSA_NO_PADDING": 3,
      "RSA_PKCS1_OAEP_PADDING": 4,
      "RSA_X931_PADDING": 5,
      "RSA_PKCS1_PSS_PADDING": 6,
      "POINT_CONVERSION_COMPRESSED": 2,
      "POINT_CONVERSION_UNCOMPRESSED": 4,
      "POINT_CONVERSION_HYBRID": 6
    };
  }
});

// node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "node_modules/big-integer/BigInteger.js"(exports2, module2) {
    init_polyfills();
    var bigInt2 = function(undefined2) {
      "use strict";
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v2, radix3, alphabet2, caseSensitive) {
        if (typeof v2 === "undefined") return Integer[0];
        if (typeof radix3 !== "undefined") return +radix3 === 10 && !alphabet2 ? parseValue(v2) : parseBase(v2, radix3, alphabet2, caseSensitive);
        return parseValue(v2);
      }
      function BigInteger(value, sign3) {
        this.value = value;
        this.sign = sign3;
        this.isSmall = false;
      }
      BigInteger.prototype = Object.create(Integer.prototype);
      function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);
      function NativeBigInt(value) {
        this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);
      function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
      }
      function smallToArray(n) {
        if (n < 1e7)
          return [n];
        if (n < 1e14)
          return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
      }
      function arrayToSmall(arr) {
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
          switch (length) {
            case 0:
              return 0;
            case 1:
              return arr[0];
            case 2:
              return arr[0] + arr[1] * BASE;
            default:
              return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
          }
        }
        return arr;
      }
      function trim(v2) {
        var i2 = v2.length;
        while (v2[--i2] === 0) ;
        v2.length = i2 + 1;
      }
      function createArray(length) {
        var x2 = new Array(length);
        var i2 = -1;
        while (++i2 < length) {
          x2[i2] = 0;
        }
        return x2;
      }
      function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
      }
      function add(a, b2) {
        var l_a = a.length, l_b = b2.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
        for (i2 = 0; i2 < l_b; i2++) {
          sum = a[i2] + b2[i2] + carry;
          carry = sum >= base ? 1 : 0;
          r[i2] = sum - carry * base;
        }
        while (i2 < l_a) {
          sum = a[i2] + carry;
          carry = sum === base ? 1 : 0;
          r[i2++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
      }
      function addAny(a, b2) {
        if (a.length >= b2.length) return add(a, b2);
        return add(b2, a);
      }
      function addSmall(a, carry) {
        var l2 = a.length, r = new Array(l2), base = BASE, sum, i2;
        for (i2 = 0; i2 < l2; i2++) {
          sum = a[i2] - base + carry;
          carry = Math.floor(sum / base);
          r[i2] = sum - carry * base;
          carry += 1;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      BigInteger.prototype.add = function(v2) {
        var n = parseValue(v2);
        if (this.sign !== n.sign) {
          return this.subtract(n.negate());
        }
        var a = this.value, b2 = n.value;
        if (n.isSmall) {
          return new BigInteger(addSmall(a, Math.abs(b2)), this.sign);
        }
        return new BigInteger(addAny(a, b2), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;
      SmallInteger.prototype.add = function(v2) {
        var n = parseValue(v2);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.subtract(n.negate());
        }
        var b2 = n.value;
        if (n.isSmall) {
          if (isPrecise(a + b2)) return new SmallInteger(a + b2);
          b2 = smallToArray(Math.abs(b2));
        }
        return new BigInteger(addSmall(b2, Math.abs(a)), a < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v2) {
        return new NativeBigInt(this.value + parseValue(v2).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a, b2) {
        var a_l = a.length, b_l = b2.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
        for (i2 = 0; i2 < b_l; i2++) {
          difference = a[i2] - borrow - b2[i2];
          if (difference < 0) {
            difference += base;
            borrow = 1;
          } else borrow = 0;
          r[i2] = difference;
        }
        for (i2 = b_l; i2 < a_l; i2++) {
          difference = a[i2] - borrow;
          if (difference < 0) difference += base;
          else {
            r[i2++] = difference;
            break;
          }
          r[i2] = difference;
        }
        for (; i2 < a_l; i2++) {
          r[i2] = a[i2];
        }
        trim(r);
        return r;
      }
      function subtractAny(a, b2, sign3) {
        var value;
        if (compareAbs(a, b2) >= 0) {
          value = subtract(a, b2);
        } else {
          value = subtract(b2, a);
          sign3 = !sign3;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
          if (sign3) value = -value;
          return new SmallInteger(value);
        }
        return new BigInteger(value, sign3);
      }
      function subtractSmall(a, b2, sign3) {
        var l2 = a.length, r = new Array(l2), carry = -b2, base = BASE, i2, difference;
        for (i2 = 0; i2 < l2; i2++) {
          difference = a[i2] + carry;
          carry = Math.floor(difference / base);
          difference %= base;
          r[i2] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
          if (sign3) r = -r;
          return new SmallInteger(r);
        }
        return new BigInteger(r, sign3);
      }
      BigInteger.prototype.subtract = function(v2) {
        var n = parseValue(v2);
        if (this.sign !== n.sign) {
          return this.add(n.negate());
        }
        var a = this.value, b2 = n.value;
        if (n.isSmall)
          return subtractSmall(a, Math.abs(b2), this.sign);
        return subtractAny(a, b2, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;
      SmallInteger.prototype.subtract = function(v2) {
        var n = parseValue(v2);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.add(n.negate());
        }
        var b2 = n.value;
        if (n.isSmall) {
          return new SmallInteger(a - b2);
        }
        return subtractSmall(b2, Math.abs(a), a >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v2) {
        return new NativeBigInt(this.value - parseValue(v2).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
      BigInteger.prototype.negate = function() {
        return new BigInteger(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function() {
        var sign3 = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign3;
        return small;
      };
      NativeBigInt.prototype.negate = function() {
        return new NativeBigInt(-this.value);
      };
      BigInteger.prototype.abs = function() {
        return new BigInteger(this.value, false);
      };
      SmallInteger.prototype.abs = function() {
        return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function() {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };
      function multiplyLong(a, b2) {
        var a_l = a.length, b_l = b2.length, l2 = a_l + b_l, r = createArray(l2), base = BASE, product, carry, i2, a_i, b_j;
        for (i2 = 0; i2 < a_l; ++i2) {
          a_i = a[i2];
          for (var j2 = 0; j2 < b_l; ++j2) {
            b_j = b2[j2];
            product = a_i * b_j + r[i2 + j2];
            carry = Math.floor(product / base);
            r[i2 + j2] = product - carry * base;
            r[i2 + j2 + 1] += carry;
          }
        }
        trim(r);
        return r;
      }
      function multiplySmall(a, b2) {
        var l2 = a.length, r = new Array(l2), base = BASE, carry = 0, product, i2;
        for (i2 = 0; i2 < l2; i2++) {
          product = a[i2] * b2 + carry;
          carry = Math.floor(product / base);
          r[i2] = product - carry * base;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      function shiftLeft(x2, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x2);
      }
      function multiplyKaratsuba(x2, y2) {
        var n = Math.max(x2.length, y2.length);
        if (n <= 30) return multiplyLong(x2, y2);
        n = Math.ceil(n / 2);
        var b2 = x2.slice(n), a = x2.slice(0, n), d2 = y2.slice(n), c = y2.slice(0, n);
        var ac2 = multiplyKaratsuba(a, c), bd = multiplyKaratsuba(b2, d2), abcd = multiplyKaratsuba(addAny(a, b2), addAny(c, d2));
        var product = addAny(addAny(ac2, shiftLeft(subtract(subtract(abcd, ac2), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
      }
      BigInteger.prototype.multiply = function(v2) {
        var n = parseValue(v2), a = this.value, b2 = n.value, sign3 = this.sign !== n.sign, abs;
        if (n.isSmall) {
          if (b2 === 0) return Integer[0];
          if (b2 === 1) return this;
          if (b2 === -1) return this.negate();
          abs = Math.abs(b2);
          if (abs < BASE) {
            return new BigInteger(multiplySmall(a, abs), sign3);
          }
          b2 = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b2.length))
          return new BigInteger(multiplyKaratsuba(a, b2), sign3);
        return new BigInteger(multiplyLong(a, b2), sign3);
      };
      BigInteger.prototype.times = BigInteger.prototype.multiply;
      function multiplySmallAndArray(a, b2, sign3) {
        if (a < BASE) {
          return new BigInteger(multiplySmall(b2, a), sign3);
        }
        return new BigInteger(multiplyLong(b2, smallToArray(a)), sign3);
      }
      SmallInteger.prototype._multiplyBySmall = function(a) {
        if (isPrecise(a.value * this.value)) {
          return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
      };
      BigInteger.prototype._multiplyBySmall = function(a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
      };
      SmallInteger.prototype.multiply = function(v2) {
        return parseValue(v2)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v2) {
        return new NativeBigInt(this.value * parseValue(v2).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a) {
        var l2 = a.length, r = createArray(l2 + l2), base = BASE, product, carry, i2, a_i, a_j;
        for (i2 = 0; i2 < l2; i2++) {
          a_i = a[i2];
          carry = 0 - a_i * a_i;
          for (var j2 = i2; j2 < l2; j2++) {
            a_j = a[j2];
            product = 2 * (a_i * a_j) + r[i2 + j2] + carry;
            carry = Math.floor(product / base);
            r[i2 + j2] = product - carry * base;
          }
          r[i2 + l2] = carry;
        }
        trim(r);
        return r;
      }
      BigInteger.prototype.square = function() {
        return new BigInteger(square(this.value), false);
      };
      SmallInteger.prototype.square = function() {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      };
      NativeBigInt.prototype.square = function(v2) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a, b2) {
        var a_l = a.length, b_l = b2.length, base = BASE, result = createArray(b2.length), divisorMostSignificantDigit = b2[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b2, lambda), quotientDigit, shift, carry, borrow, i2, l2, q2;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
          quotientDigit = base - 1;
          if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
            quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
          }
          carry = 0;
          borrow = 0;
          l2 = divisor.length;
          for (i2 = 0; i2 < l2; i2++) {
            carry += quotientDigit * divisor[i2];
            q2 = Math.floor(carry / base);
            borrow += remainder[shift + i2] - (carry - q2 * base);
            carry = q2;
            if (borrow < 0) {
              remainder[shift + i2] = borrow + base;
              borrow = -1;
            } else {
              remainder[shift + i2] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i2 = 0; i2 < l2; i2++) {
              carry += remainder[shift + i2] - base + divisor[i2];
              if (carry < 0) {
                remainder[shift + i2] = carry + base;
                carry = 0;
              } else {
                remainder[shift + i2] = carry;
                carry = 1;
              }
            }
            borrow += carry;
          }
          result[shift] = quotientDigit;
        }
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
      }
      function divMod2(a, b2) {
        var a_l = a.length, b_l = b2.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a[--a_l]);
          trim(part);
          if (compareAbs(part, b2) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base + part[xlen - 2];
          highy = b2[b_l - 1] * base + b2[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b2, guess);
            if (compareAbs(check, part) <= 0) break;
            guess--;
          } while (guess);
          result.push(guess);
          part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
      }
      function divModSmall(value, lambda) {
        var length = value.length, quotient = createArray(length), base = BASE, i2, q2, remainder, divisor;
        remainder = 0;
        for (i2 = length - 1; i2 >= 0; --i2) {
          divisor = remainder * base + value[i2];
          q2 = truncate(divisor / lambda);
          remainder = divisor - q2 * lambda;
          quotient[i2] = q2 | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self2, v2) {
        var value, n = parseValue(v2);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self2.value / n.value), new NativeBigInt(self2.value % n.value)];
        }
        var a = self2.value, b2 = n.value;
        var quotient;
        if (b2 === 0) throw new Error("Cannot divide by zero");
        if (self2.isSmall) {
          if (n.isSmall) {
            return [new SmallInteger(truncate(a / b2)), new SmallInteger(a % b2)];
          }
          return [Integer[0], self2];
        }
        if (n.isSmall) {
          if (b2 === 1) return [self2, Integer[0]];
          if (b2 == -1) return [self2.negate(), Integer[0]];
          var abs = Math.abs(b2);
          if (abs < BASE) {
            value = divModSmall(a, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self2.sign) remainder = -remainder;
            if (typeof quotient === "number") {
              if (self2.sign !== n.sign) quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self2.sign !== n.sign), new SmallInteger(remainder)];
          }
          b2 = smallToArray(abs);
        }
        var comparison = compareAbs(a, b2);
        if (comparison === -1) return [Integer[0], self2];
        if (comparison === 0) return [Integer[self2.sign === n.sign ? 1 : -1], Integer[0]];
        if (a.length + b2.length <= 200)
          value = divMod1(a, b2);
        else value = divMod2(a, b2);
        quotient = value[0];
        var qSign = self2.sign !== n.sign, mod3 = value[1], mSign = self2.sign;
        if (typeof quotient === "number") {
          if (qSign) quotient = -quotient;
          quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod3 === "number") {
          if (mSign) mod3 = -mod3;
          mod3 = new SmallInteger(mod3);
        } else mod3 = new BigInteger(mod3, mSign);
        return [quotient, mod3];
      }
      BigInteger.prototype.divmod = function(v2) {
        var result = divModAny(this, v2);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
      BigInteger.prototype.divide = function(v2) {
        return divModAny(this, v2)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v2) {
        return new NativeBigInt(this.value / parseValue(v2).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
      BigInteger.prototype.mod = function(v2) {
        return divModAny(this, v2)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v2) {
        return new NativeBigInt(this.value % parseValue(v2).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
      BigInteger.prototype.pow = function(v2) {
        var n = parseValue(v2), a = this.value, b2 = n.value, value, x2, y2;
        if (b2 === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
          return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a, b2)))
            return new SmallInteger(truncate(value));
        }
        x2 = this;
        y2 = Integer[1];
        while (true) {
          if (b2 & true) {
            y2 = y2.times(x2);
            --b2;
          }
          if (b2 === 0) break;
          b2 /= 2;
          x2 = x2.square();
        }
        return y2;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;
      NativeBigInt.prototype.pow = function(v2) {
        var n = parseValue(v2);
        var a = this.value, b2 = n.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b2 === _0) return Integer[1];
        if (a === _0) return Integer[0];
        if (a === _1) return Integer[1];
        if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.isNegative()) return new NativeBigInt(_0);
        var x2 = this;
        var y2 = Integer[1];
        while (true) {
          if ((b2 & _1) === _1) {
            y2 = y2.times(x2);
            --b2;
          }
          if (b2 === _0) break;
          b2 /= _2;
          x2 = x2.square();
        }
        return y2;
      };
      BigInteger.prototype.modPow = function(exp, mod3) {
        exp = parseValue(exp);
        mod3 = parseValue(mod3);
        if (mod3.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1], base = this.mod(mod3);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base = base.modInv(mod3);
        }
        while (exp.isPositive()) {
          if (base.isZero()) return Integer[0];
          if (exp.isOdd()) r = r.multiply(base).mod(mod3);
          exp = exp.divide(2);
          base = base.square().mod(mod3);
        }
        return r;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
      function compareAbs(a, b2) {
        if (a.length !== b2.length) {
          return a.length > b2.length ? 1 : -1;
        }
        for (var i2 = a.length - 1; i2 >= 0; i2--) {
          if (a[i2] !== b2[i2]) return a[i2] > b2[i2] ? 1 : -1;
        }
        return 0;
      }
      BigInteger.prototype.compareAbs = function(v2) {
        var n = parseValue(v2), a = this.value, b2 = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b2);
      };
      SmallInteger.prototype.compareAbs = function(v2) {
        var n = parseValue(v2), a = Math.abs(this.value), b2 = n.value;
        if (n.isSmall) {
          b2 = Math.abs(b2);
          return a === b2 ? 0 : a > b2 ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v2) {
        var a = this.value;
        var b2 = parseValue(v2).value;
        a = a >= 0 ? a : -a;
        b2 = b2 >= 0 ? b2 : -b2;
        return a === b2 ? 0 : a > b2 ? 1 : -1;
      };
      BigInteger.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var n = parseValue(v2), a = this.value, b2 = n.value;
        if (this.sign !== n.sign) {
          return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a, b2) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;
      SmallInteger.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var n = parseValue(v2), a = this.value, b2 = n.value;
        if (n.isSmall) {
          return a == b2 ? 0 : a > b2 ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
          return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var a = this.value;
        var b2 = parseValue(v2).value;
        return a === b2 ? 0 : a > b2 ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger.prototype.equals = function(v2) {
        return this.compare(v2) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
      BigInteger.prototype.notEquals = function(v2) {
        return this.compare(v2) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
      BigInteger.prototype.greater = function(v2) {
        return this.compare(v2) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
      BigInteger.prototype.lesser = function(v2) {
        return this.compare(v2) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
      BigInteger.prototype.greaterOrEquals = function(v2) {
        return this.compare(v2) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
      BigInteger.prototype.lesserOrEquals = function(v2) {
        return this.compare(v2) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
      BigInteger.prototype.isEven = function() {
        return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function() {
        return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function() {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      BigInteger.prototype.isOdd = function() {
        return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function() {
        return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function() {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      BigInteger.prototype.isPositive = function() {
        return !this.sign;
      };
      SmallInteger.prototype.isPositive = function() {
        return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
      BigInteger.prototype.isNegative = function() {
        return this.sign;
      };
      SmallInteger.prototype.isNegative = function() {
        return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
      BigInteger.prototype.isUnit = function() {
        return false;
      };
      SmallInteger.prototype.isUnit = function() {
        return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function() {
        return this.abs().value === BigInt(1);
      };
      BigInteger.prototype.isZero = function() {
        return false;
      };
      SmallInteger.prototype.isZero = function() {
        return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function() {
        return this.value === BigInt(0);
      };
      BigInteger.prototype.isDivisibleBy = function(v2) {
        var n = parseValue(v2);
        if (n.isZero()) return false;
        if (n.isUnit()) return true;
        if (n.compareAbs(2) === 0) return this.isEven();
        return this.mod(n).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
      function isBasicPrime(v2) {
        var n = v2.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(49)) return true;
      }
      function millerRabinTest(n, a) {
        var nPrev = n.prev(), b2 = nPrev, r = 0, d2, t, i2, x2;
        while (b2.isEven()) b2 = b2.divide(2), r++;
        next: for (i2 = 0; i2 < a.length; i2++) {
          if (n.lesser(a[i2])) continue;
          x2 = bigInt2(a[i2]).modPow(b2, n);
          if (x2.isUnit() || x2.equals(nPrev)) continue;
          for (d2 = r - 1; d2 != 0; d2--) {
            x2 = x2.square().mod(n);
            if (x2.isUnit()) return false;
            if (x2.equals(nPrev)) continue next;
          }
          return false;
        }
        return true;
      }
      BigInteger.prototype.isPrime = function(strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2) return isPrime;
        var n = this.abs();
        var bits = n.bitLength();
        if (bits <= 64)
          return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt2(i2 + 2));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
      BigInteger.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2) return isPrime;
        var n = this.abs();
        var t = iterations === undefined2 ? 5 : iterations;
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt2.randBetween(2, n.minus(2), rng));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
      BigInteger.prototype.modInv = function(n) {
        var t = bigInt2.zero, newT = bigInt2.one, r = parseValue(n), newR = this.abs(), q2, lastT, lastR;
        while (!newR.isZero()) {
          q2 = r.divide(newR);
          lastT = t;
          lastR = r;
          t = newT;
          r = newR;
          newT = lastT.subtract(q2.multiply(newT));
          newR = lastR.subtract(q2.multiply(newR));
        }
        if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
          t = t.add(n);
        }
        if (this.isNegative()) {
          return t.negate();
        }
        return t;
      };
      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
      BigInteger.prototype.next = function() {
        var value = this.value;
        if (this.sign) {
          return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function() {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function() {
        return new NativeBigInt(this.value + BigInt(1));
      };
      BigInteger.prototype.prev = function() {
        var value = this.value;
        if (this.sign) {
          return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function() {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function() {
        return new NativeBigInt(this.value - BigInt(1));
      };
      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
      function shift_isSmall(n) {
        return Math.abs(n) <= BASE;
      }
      BigInteger.prototype.shiftLeft = function(v2) {
        var n = parseValue(v2).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        if (result.isZero()) return result;
        while (n >= powers2Length) {
          result = result.multiply(highestPower2);
          n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
      BigInteger.prototype.shiftRight = function(v2) {
        var remQuo;
        var n = parseValue(v2).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit()) return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
      function bitwise(x2, y2, fn2) {
        y2 = parseValue(y2);
        var xSign = x2.isNegative(), ySign = y2.isNegative();
        var xRem = xSign ? x2.not() : x2, yRem = ySign ? y2.not() : y2;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
          xDivMod = divModAny(xRem, highestPower2);
          xDigit = xDivMod[1].toJSNumber();
          if (xSign) {
            xDigit = highestPower2 - 1 - xDigit;
          }
          yDivMod = divModAny(yRem, highestPower2);
          yDigit = yDivMod[1].toJSNumber();
          if (ySign) {
            yDigit = highestPower2 - 1 - yDigit;
          }
          xRem = xDivMod[0];
          yRem = yDivMod[0];
          result.push(fn2(xDigit, yDigit));
        }
        var sum = fn2(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt2(-1) : bigInt2(0);
        for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt2(result[i2]));
        }
        return sum;
      }
      BigInteger.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
      BigInteger.prototype.and = function(n) {
        return bitwise(this, n, function(a, b2) {
          return a & b2;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
      BigInteger.prototype.or = function(n) {
        return bitwise(this, n, function(a, b2) {
          return a | b2;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
      BigInteger.prototype.xor = function(n) {
        return bitwise(this, n, function(a, b2) {
          return a ^ b2;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n) {
        var v2 = n.value, x2 = typeof v2 === "number" ? v2 | LOBMASK_I : typeof v2 === "bigint" ? v2 | BigInt(LOBMASK_I) : v2[0] + v2[1] * BASE | LOBMASK_BI;
        return x2 & -x2;
      }
      function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base.square(base));
          var p2 = tmp.p;
          var e = tmp.e;
          var t = p2.multiply(base);
          return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p2, e: e * 2 };
        }
        return { p: bigInt2(1), e: 0 };
      }
      BigInteger.prototype.bitLength = function() {
        var n = this;
        if (n.compareTo(bigInt2(0)) < 0) {
          n = n.negate().subtract(bigInt2(1));
        }
        if (n.compareTo(bigInt2(0)) === 0) {
          return bigInt2(0);
        }
        return bigInt2(integerLogarithm(n, bigInt2(2)).e).add(bigInt2(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
      function max(a, b2) {
        a = parseValue(a);
        b2 = parseValue(b2);
        return a.greater(b2) ? a : b2;
      }
      function min(a, b2) {
        a = parseValue(a);
        b2 = parseValue(b2);
        return a.lesser(b2) ? a : b2;
      }
      function gcd2(a, b2) {
        a = parseValue(a).abs();
        b2 = parseValue(b2).abs();
        if (a.equals(b2)) return a;
        if (a.isZero()) return b2;
        if (b2.isZero()) return a;
        var c = Integer[1], d2, t;
        while (a.isEven() && b2.isEven()) {
          d2 = min(roughLOB(a), roughLOB(b2));
          a = a.divide(d2);
          b2 = b2.divide(d2);
          c = c.multiply(d2);
        }
        while (a.isEven()) {
          a = a.divide(roughLOB(a));
        }
        do {
          while (b2.isEven()) {
            b2 = b2.divide(roughLOB(b2));
          }
          if (a.greater(b2)) {
            t = b2;
            b2 = a;
            a = t;
          }
          b2 = b2.subtract(a);
        } while (!b2.isZero());
        return c.isUnit() ? a : a.multiply(c);
      }
      function lcm(a, b2) {
        a = parseValue(a).abs();
        b2 = parseValue(b2).abs();
        return a.divide(gcd2(a, b2)).multiply(b2);
      }
      function randBetween(a, b2, rng) {
        a = parseValue(a);
        b2 = parseValue(b2);
        var usedRNG = rng || Math.random;
        var low = min(a, b2), high = max(a, b2);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i2 = 0; i2 < digits.length; i2++) {
          var top = restricted ? digits[i2] + (i2 + 1 < digits.length ? digits[i2 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i2]) restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
      }
      var parseBase = function(text, base, alphabet2, caseSensitive) {
        alphabet2 = alphabet2 || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
          text = text.toLowerCase();
          alphabet2 = alphabet2.toLowerCase();
        }
        var length = text.length;
        var i2;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i2 = 0; i2 < alphabet2.length; i2++) {
          alphabetValues[alphabet2[i2]] = i2;
        }
        for (i2 = 0; i2 < length; i2++) {
          var c = text[i2];
          if (c === "-") continue;
          if (c in alphabetValues) {
            if (alphabetValues[c] >= absBase) {
              if (c === "1" && absBase === 1) continue;
              throw new Error(c + " is not a valid digit in base " + base + ".");
            }
          }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
          var c = text[i2];
          if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
          else if (c === "<") {
            var start = i2;
            do {
              i2++;
            } while (text[i2] !== ">" && i2 < text.length);
            digits.push(parseValue(text.slice(start + 1, i2)));
          } else throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
      };
      function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow3 = Integer[1], i2;
        for (i2 = digits.length - 1; i2 >= 0; i2--) {
          val = val.add(digits[i2].times(pow3));
          pow3 = pow3.times(base);
        }
        return isNegative ? val.negate() : val;
      }
      function stringify(digit, alphabet2) {
        alphabet2 = alphabet2 || DEFAULT_ALPHABET;
        if (digit < alphabet2.length) {
          return alphabet2[digit];
        }
        return "<" + digit + ">";
      }
      function toBase(n, base) {
        base = bigInt2(base);
        if (base.isZero()) {
          if (n.isZero()) return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
          if (n.isZero()) return { value: [0], isNegative: false };
          if (n.isNegative())
            return {
              value: [].concat.apply(
                [],
                Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
              ),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n.isNegative() && base.isPositive()) {
          neg = true;
          n = n.abs();
        }
        if (base.isUnit()) {
          if (n.isZero()) return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
          divmod = left.divmod(base);
          left = divmod.quotient;
          var digit = divmod.remainder;
          if (digit.isNegative()) {
            digit = base.minus(digit).abs();
            left = left.next();
          }
          out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
      }
      function toBaseString(n, base, alphabet2) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x2) {
          return stringify(x2, alphabet2);
        }).join("");
      }
      BigInteger.prototype.toArray = function(radix3) {
        return toBase(this, radix3);
      };
      SmallInteger.prototype.toArray = function(radix3) {
        return toBase(this, radix3);
      };
      NativeBigInt.prototype.toArray = function(radix3) {
        return toBase(this, radix3);
      };
      BigInteger.prototype.toString = function(radix3, alphabet2) {
        if (radix3 === undefined2) radix3 = 10;
        if (radix3 !== 10 || alphabet2) return toBaseString(this, radix3, alphabet2);
        var v2 = this.value, l2 = v2.length, str2 = String(v2[--l2]), zeros = "0000000", digit;
        while (--l2 >= 0) {
          digit = String(v2[l2]);
          str2 += zeros.slice(digit.length) + digit;
        }
        var sign3 = this.sign ? "-" : "";
        return sign3 + str2;
      };
      SmallInteger.prototype.toString = function(radix3, alphabet2) {
        if (radix3 === undefined2) radix3 = 10;
        if (radix3 != 10 || alphabet2) return toBaseString(this, radix3, alphabet2);
        return String(this.value);
      };
      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
      NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
        return this.toString();
      };
      BigInteger.prototype.valueOf = function() {
        return parseInt(this.toString(), 10);
      };
      BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
      SmallInteger.prototype.valueOf = function() {
        return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
        return parseInt(this.toString(), 10);
      };
      function parseStringValue(v2) {
        if (isPrecise(+v2)) {
          var x2 = +v2;
          if (x2 === truncate(x2))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x2)) : new SmallInteger(x2);
          throw new Error("Invalid integer: " + v2);
        }
        var sign3 = v2[0] === "-";
        if (sign3) v2 = v2.slice(1);
        var split = v2.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
          var exp = split[1];
          if (exp[0] === "+") exp = exp.slice(1);
          exp = +exp;
          if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
          var text = split[0];
          var decimalPlace = text.indexOf(".");
          if (decimalPlace >= 0) {
            exp -= text.length - decimalPlace - 1;
            text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
          }
          if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
          text += new Array(exp + 1).join("0");
          v2 = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v2);
        if (!isValid) throw new Error("Invalid integer: " + v2);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign3 ? "-" + v2 : v2));
        }
        var r = [], max2 = v2.length, l2 = LOG_BASE, min2 = max2 - l2;
        while (max2 > 0) {
          r.push(+v2.slice(min2, max2));
          min2 -= l2;
          if (min2 < 0) min2 = 0;
          max2 -= l2;
        }
        trim(r);
        return new BigInteger(r, sign3);
      }
      function parseNumberValue(v2) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v2));
        }
        if (isPrecise(v2)) {
          if (v2 !== truncate(v2)) throw new Error(v2 + " is not an integer.");
          return new SmallInteger(v2);
        }
        return parseStringValue(v2.toString());
      }
      function parseValue(v2) {
        if (typeof v2 === "number") {
          return parseNumberValue(v2);
        }
        if (typeof v2 === "string") {
          return parseStringValue(v2);
        }
        if (typeof v2 === "bigint") {
          return new NativeBigInt(v2);
        }
        return v2;
      }
      for (var i = 0; i < 1e3; i++) {
        Integer[i] = parseValue(i);
        if (i > 0) Integer[-i] = parseValue(-i);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd2;
      Integer.lcm = lcm;
      Integer.isInstance = function(x2) {
        return x2 instanceof BigInteger || x2 instanceof SmallInteger || x2 instanceof NativeBigInt;
      };
      Integer.randBetween = randBetween;
      Integer.fromArray = function(digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
      };
      return Integer;
    }();
    if (typeof module2 !== "undefined" && module2.hasOwnProperty("exports")) {
      module2.exports = bigInt2;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return bigInt2;
      });
    }
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HyperchainSDK: () => HyperchainSDK,
  actions: () => actions_exports,
  auth: () => auth_exports,
  chain: () => chain_exports,
  codec: () => codec_exports,
  common: () => common_exports,
  config: () => config_exports,
  consts: () => constants_exports,
  crypto: () => crypto_exports,
  services: () => services_exports,
  utils: () => utils_exports2
});
module.exports = __toCommonJS(src_exports);
init_polyfills();

// src/actions/transfer.ts
init_polyfills();

// src/codec/codec.ts
init_polyfills();

// node_modules/@avalabs/avalanchejs/dist/es/index.js
init_polyfills();

// node_modules/@avalabs/avalanchejs/node_modules/@scure/base/lib/esm/index.js
init_polyfills();
// @__NO_SIDE_EFFECTS__
function assertNumber(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`Wrong integer: ${n}`);
}
function isBytes(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
// @__NO_SIDE_EFFECTS__
function chain(...args) {
  const id = (a) => a;
  const wrap = (a, b2) => (c) => a(b2(c));
  const encode = args.map((x2) => x2.encode).reduceRight(wrap, id);
  const decode = args.map((x2) => x2.decode).reduce(wrap, id);
  return { encode, decode };
}
// @__NO_SIDE_EFFECTS__
function alphabet(alphabet2) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i) => {
        /* @__PURE__ */ assertNumber(i);
        if (i < 0 || i >= alphabet2.length)
          throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet2.length})`);
        return alphabet2[i];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index = alphabet2.indexOf(letter);
        if (index === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
        return index;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function join(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from) => {
      if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i of from)
        if (typeof i !== "string")
          throw new Error(`join.encode: non-string input=${i}`);
      return from.join(separator);
    },
    decode: (to2) => {
      if (typeof to2 !== "string")
        throw new Error("join.decode input should be string");
      return to2.split(separator);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function padding(bits, chr = "=") {
  /* @__PURE__ */ assertNumber(bits);
  if (typeof chr !== "string")
    throw new Error("padding chr should be string");
  return {
    encode(data) {
      if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i of data)
        if (typeof i !== "string")
          throw new Error(`padding.encode: non-string input=${i}`);
      while (data.length * bits % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i of input)
        if (typeof i !== "string")
          throw new Error(`padding.decode: non-string input=${i}`);
      let end = input.length;
      if (end * bits % 8)
        throw new Error("Invalid padding: string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        if (!((end - 1) * bits % 8))
          throw new Error("Invalid padding: string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function normalize(fn2) {
  if (typeof fn2 !== "function")
    throw new Error("normalize fn should be function");
  return { encode: (from) => from, decode: (to2) => fn2(to2) };
}
// @__NO_SIDE_EFFECTS__
function convertRadix(data, from, to2) {
  if (from < 2)
    throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
  if (to2 < 2)
    throw new Error(`convertRadix: wrong to=${to2}, base cannot be less than 2`);
  if (!Array.isArray(data))
    throw new Error("convertRadix: data should be array");
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data);
  digits.forEach((d2) => {
    /* @__PURE__ */ assertNumber(d2);
    if (d2 < 0 || d2 >= from)
      throw new Error(`Wrong integer: ${d2}`);
  });
  while (true) {
    let carry = 0;
    let done = true;
    for (let i = pos; i < digits.length; i++) {
      const digit = digits[i];
      const digitBase = from * carry + digit;
      if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
        throw new Error("convertRadix: carry overflow");
      }
      carry = digitBase % to2;
      const rounded = Math.floor(digitBase / to2);
      digits[i] = rounded;
      if (!Number.isSafeInteger(rounded) || rounded * to2 + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!rounded)
        pos = i;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
    res.push(0);
  return res.reverse();
}
var gcd = /* @__NO_SIDE_EFFECTS__ */ (a, b2) => !b2 ? a : /* @__PURE__ */ gcd(b2, a % b2);
var radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from, to2) => from + (to2 - /* @__PURE__ */ gcd(from, to2));
// @__NO_SIDE_EFFECTS__
function convertRadix2(data, from, to2, padding2) {
  if (!Array.isArray(data))
    throw new Error("convertRadix2: data should be array");
  if (from <= 0 || from > 32)
    throw new Error(`convertRadix2: wrong from=${from}`);
  if (to2 <= 0 || to2 > 32)
    throw new Error(`convertRadix2: wrong to=${to2}`);
  if (/* @__PURE__ */ radix2carry(from, to2) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from} to=${to2} carryBits=${/* @__PURE__ */ radix2carry(from, to2)}`);
  }
  let carry = 0;
  let pos = 0;
  const mask = 2 ** to2 - 1;
  const res = [];
  for (const n of data) {
    /* @__PURE__ */ assertNumber(n);
    if (n >= 2 ** from)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
    carry = carry << from | n;
    if (pos + from > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
    pos += from;
    for (; pos >= to2; pos -= to2)
      res.push((carry >> pos - to2 & mask) >>> 0);
    carry &= 2 ** pos - 1;
  }
  carry = carry << to2 - pos & mask;
  if (!padding2 && pos >= from)
    throw new Error("Excess padding");
  if (!padding2 && carry)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
// @__NO_SIDE_EFFECTS__
function radix(num) {
  /* @__PURE__ */ assertNumber(num);
  return {
    encode: (bytes3) => {
      if (!isBytes(bytes3))
        throw new Error("radix.encode input should be Uint8Array");
      return /* @__PURE__ */ convertRadix(Array.from(bytes3), 2 ** 8, num);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix.decode input should be array of numbers");
      return Uint8Array.from(/* @__PURE__ */ convertRadix(digits, num, 2 ** 8));
    }
  };
}
// @__NO_SIDE_EFFECTS__
function radix2(bits, revPadding = false) {
  /* @__PURE__ */ assertNumber(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes3) => {
      if (!isBytes(bytes3))
        throw new Error("radix2.encode input should be Uint8Array");
      return /* @__PURE__ */ convertRadix2(Array.from(bytes3), 8, bits, !revPadding);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix2.decode input should be array of numbers");
      return Uint8Array.from(/* @__PURE__ */ convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
// @__NO_SIDE_EFFECTS__
function unsafeWrapper(fn2) {
  if (typeof fn2 !== "function")
    throw new Error("unsafeWrapper fn should be function");
  return function(...args) {
    try {
      return fn2.apply(null, args);
    } catch (e) {
    }
  };
}
var base16 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet("0123456789ABCDEF"), /* @__PURE__ */ join(""));
var base32 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));
var base64 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
var base64url = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
var genBase58 = (abc) => /* @__PURE__ */ chain(/* @__PURE__ */ radix(58), /* @__PURE__ */ alphabet(abc), /* @__PURE__ */ join(""));
var base58 = /* @__PURE__ */ genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
var base58xmr = {
  encode(data) {
    let res = "";
    for (let i = 0; i < data.length; i += 8) {
      const block = data.subarray(i, i + 8);
      res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
    }
    return res;
  },
  decode(str2) {
    let res = [];
    for (let i = 0; i < str2.length; i += 11) {
      const slice = str2.slice(i, i + 11);
      const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
      const block = base58.decode(slice);
      for (let j2 = 0; j2 < block.length - blockLen; j2++) {
        if (block[j2] !== 0)
          throw new Error("base58xmr: wrong padding");
      }
      res = res.concat(Array.from(block.slice(block.length - blockLen)));
    }
    return Uint8Array.from(res);
  }
};
var BECH_ALPHABET = /* @__PURE__ */ chain(/* @__PURE__ */ alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ join(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
// @__NO_SIDE_EFFECTS__
function bech32Polymod(pre) {
  const b2 = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b2 >> i & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
// @__NO_SIDE_EFFECTS__
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i = 0; i < len; i++) {
    const c = prefix.charCodeAt(i);
    if (c < 33 || c > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ c >> 5;
  }
  chk = /* @__PURE__ */ bech32Polymod(chk);
  for (let i = 0; i < len; i++)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
  for (let v2 of words)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ v2;
  for (let i = 0; i < 6; i++)
    chk = /* @__PURE__ */ bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(/* @__PURE__ */ convertRadix2([chk % 2 ** 30], 30, 5, false));
}
// @__NO_SIDE_EFFECTS__
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = /* @__PURE__ */ radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = /* @__PURE__ */ unsafeWrapper(fromWords);
  function encode(prefix, words, limit = 90) {
    if (typeof prefix !== "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
    if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
    const actualLength = prefix.length + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    const lowered = prefix.toLowerCase();
    const sum = /* @__PURE__ */ bechChecksum(lowered, words, ENCODING_CONST);
    return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
  }
  function decode(str2, limit = 90) {
    if (typeof str2 !== "string")
      throw new Error(`bech32.decode input should be string, not ${typeof str2}`);
    if (str2.length < 8 || limit !== false && str2.length > limit)
      throw new TypeError(`Wrong string length: ${str2.length} (${str2}). Expected (8..${limit})`);
    const lowered = str2.toLowerCase();
    if (str2 !== lowered && str2 !== str2.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    str2 = lowered;
    const sepIndex = str2.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix = str2.slice(0, sepIndex);
    const _words2 = str2.slice(sepIndex + 1);
    if (_words2.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
    const sum = /* @__PURE__ */ bechChecksum(prefix, words, ENCODING_CONST);
    if (!_words2.endsWith(sum))
      throw new Error(`Invalid checksum in ${str2}: expected "${sum}"`);
    return { prefix, words };
  }
  const decodeUnsafe = /* @__PURE__ */ unsafeWrapper(decode);
  function decodeToBytes(str2) {
    const { prefix, words } = decode(str2, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
var bech32 = /* @__PURE__ */ genBech32("bech32");
var utf8 = {
  encode: (data) => new TextDecoder().decode(data),
  decode: (str2) => new TextEncoder().encode(str2)
};
var hex = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet("0123456789abcdef"), /* @__PURE__ */ join(""), /* @__PURE__ */ normalize((s) => {
  if (typeof s !== "string" || s.length % 2)
    throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
  return s.toLowerCase();
}));
var CODERS = {
  utf8,
  hex,
  base16,
  base32,
  base64,
  base64url,
  base58,
  base58xmr
};
var coderTypeError = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
var bytesToString = (type, bytes3) => {
  if (typeof type !== "string" || !CODERS.hasOwnProperty(type))
    throw new TypeError(coderTypeError);
  if (!isBytes(bytes3))
    throw new TypeError("bytesToString() expects Uint8Array");
  return CODERS[type].encode(bytes3);
};

// node_modules/@noble/hashes/esm/utils.js
init_polyfills();

// node_modules/@noble/hashes/esm/cryptoNode.js
init_polyfills();
var nc = __toESM(require("node:crypto"), 1);
var crypto = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : void 0;

// node_modules/@noble/hashes/esm/utils.js
function isBytes2(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes3) {
  if (!isBytes2(bytes3))
    throw new Error("Uint8Array expected");
  let hex2 = "";
  for (let i = 0; i < bytes3.length; i++) {
    hex2 += hexes[bytes3[i]];
  }
  return hex2;
}
var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
  if (char >= asciis._0 && char <= asciis._9)
    return char - asciis._0;
  if (char >= asciis._A && char <= asciis._F)
    return char - (asciis._A - 10);
  if (char >= asciis._a && char <= asciis._f)
    return char - (asciis._a - 10);
  return;
}
function hexToBytes(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  const hl = hex2.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai2 = 0, hi2 = 0; ai2 < al; ai2++, hi2 += 2) {
    const n1 = asciiToBase16(hex2.charCodeAt(hi2));
    const n2 = asciiToBase16(hex2.charCodeAt(hi2 + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex2[hi2] + hex2[hi2 + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi2);
    }
    array[ai2] = n1 * 16 + n2;
  }
  return array;
}
function utf8ToBytes(str2) {
  if (typeof str2 !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
  return new Uint8Array(new TextEncoder().encode(str2));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!isBytes2(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    if (!isBytes2(a))
      throw new Error("Uint8Array expected");
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var toStr = {}.toString;
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto && typeof crypto.getRandomValues === "function") {
    return crypto.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/@noble/hashes/esm/sha256.js
init_polyfills();

// node_modules/@noble/hashes/esm/_sha2.js
init_polyfills();

// node_modules/@noble/hashes/esm/_assert.js
init_polyfills();
function isBytes3(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function bytes(b2, ...lengths) {
  if (!isBytes3(b2))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}

// node_modules/@noble/hashes/esm/_sha2.js
function setBigUint64(view, byteOffset, value, isLE3) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE3);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE3 ? 4 : 0;
  const l2 = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE3);
  view.setUint32(byteOffset + l2, wl, isLE3);
}
var SHA2 = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE3) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE3;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists(this);
    output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE3 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE3);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE3);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to2) {
    to2 || (to2 = new this.constructor());
    to2.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to2.length = length;
    to2.pos = pos;
    to2.finished = finished;
    to2.destroyed = destroyed;
    if (length % blockLen)
      to2.buffer.set(buffer);
    return to2;
  }
};

// node_modules/@noble/hashes/esm/sha256.js
var Chi = (a, b2, c) => a & b2 ^ ~a & c;
var Maj = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
var SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends SHA2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G3, H: H2 } = this;
    return [A2, B2, C2, D2, E2, F2, G3, H2];
  }
  // prettier-ignore
  set(A2, B2, C2, D2, E2, F2, G3, H2) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E2 | 0;
    this.F = F2 | 0;
    this.G = G3 | 0;
    this.H = H2 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W22 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W22, 17) ^ rotr(W22, 19) ^ W22 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G3, H: H2 } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
      const T1 = H2 + sigma1 + Chi(E2, F2, G3) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
      const T2 = sigma0 + Maj(A2, B2, C2) | 0;
      H2 = G3;
      G3 = F2;
      F2 = E2;
      E2 = D2 + T1 | 0;
      D2 = C2;
      C2 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E2 = E2 + this.E | 0;
    F2 = F2 + this.F | 0;
    G3 = G3 + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A2, B2, C2, D2, E2, F2, G3, H2);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

// node_modules/@noble/hashes/esm/ripemd160.js
init_polyfills();
var Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_2, i) => i);
var Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j2 of [idxL, idxR])
    j2.push(j2[i].map((k2) => Rho[k2]));
var shifts = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j2) => shifts[i][j2]));
var shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j2) => shifts[i][j2]));
var Kl = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
var rotl = (word, shift) => word << shift | word >>> 32 - shift;
function f(group, x2, y2, z2) {
  if (group === 0)
    return x2 ^ y2 ^ z2;
  else if (group === 1)
    return x2 & y2 | ~x2 & z2;
  else if (group === 2)
    return (x2 | ~y2) ^ z2;
  else if (group === 3)
    return x2 & z2 | y2 & ~z2;
  else
    return x2 ^ (y2 | ~z2);
}
var BUF = /* @__PURE__ */ new Uint32Array(16);
var RIPEMD160 = class extends SHA2 {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar2 = al, bl = this.h1 | 0, br2 = bl, cl = this.h2 | 0, cr3 = cl, dl = this.h3 | 0, dr2 = dl, el = this.h4 | 0, er2 = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr2 = idxR[group];
      const sl = shiftsL[group], sr2 = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr2 = rotl(ar2 + f(rGroup, br2, cr3, dr2) + BUF[rr2[i]] + hbr, sr2[i]) + er2 | 0;
        ar2 = er2, er2 = dr2, dr2 = rotl(cr3, 10) | 0, cr3 = br2, br2 = tr2;
      }
    }
    this.set(this.h1 + cl + dr2 | 0, this.h2 + dl + er2 | 0, this.h3 + el + ar2 | 0, this.h4 + al + br2 | 0, this.h0 + bl + cr3 | 0);
  }
  roundClean() {
    BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = /* @__PURE__ */ wrapConstructor(() => new RIPEMD160());

// node_modules/@avalabs/avalanchejs/dist/es/index.js
var import_util = __toESM(require("util"), 1);
function f2(t, e, r, n) {
  var s, a = arguments.length, i = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n);
  else for (var o = t.length - 1; o >= 0; o--) (s = t[o]) && (i = (a < 3 ? s(i) : a > 3 ? s(e, r, i) : s(e, r)) || i);
  return a > 3 && i && Object.defineProperty(e, r, i), i;
}
function d(t, e) {
  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}
var l = Symbol.for("nodejs.util.inspect.custom");
var p = "-";
function h(t) {
  const e = t.split(p);
  if (e.length < 2) throw new Error(`Invalid address: ${t}`);
  const r = e[0], n = e[1], [s, a] = b(n);
  return [r, s, a];
}
function m(t) {
  return h(t)[2];
}
function b(e) {
  const { prefix: r, words: n } = bech32.decode(e);
  return [r, bech32.fromWords(n)];
}
function g(e, r) {
  const n = bech32.toWords(r);
  return bech32.encode(e, n);
}
function y(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
function w(t, ...e) {
  if (!((r = t) instanceof Uint8Array || null != r && "object" == typeof r && "Uint8Array" === r.constructor.name)) throw new Error("Expected Uint8Array");
  var r;
  if (e.length > 0 && !e.includes(t.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function x(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
var B = BigInt(2 ** 32 - 1);
var I = BigInt(32);
function v(t, e = false) {
  return e ? { h: Number(t & B), l: Number(t >> I & B) } : { h: 0 | Number(t >> I & B), l: 0 | Number(t & B) };
}
function T(t, e = false) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: a, l: i } = v(t[s], e);
    [r[s], n[s]] = [a, i];
  }
  return [r, n];
}
if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])) throw new Error("Non little-endian hardware is not supported");
function S(t) {
  if ("string" == typeof t && (t = function(t2) {
    if ("string" != typeof t2) throw new Error("utf8ToBytes expected string, got " + typeof t2);
    return new Uint8Array(new TextEncoder().encode(t2));
  }(t)), !((e = t) instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw new Error("expected Uint8Array, got " + typeof t);
  var e;
  return t;
}
var O = class {
  clone() {
    return this._cloneInto();
  }
};
var [E, A, k] = [[], [], []];
var P = BigInt(0);
var R = BigInt(1);
var D = BigInt(2);
var N = BigInt(7);
var _ = BigInt(256);
var F = BigInt(113);
for (let t = 0, e = R, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], E.push(2 * (5 * n + r)), A.push((t + 1) * (t + 2) / 2 % 64);
  let s = P;
  for (let t2 = 0; t2 < 7; t2++) e = (e << R ^ (e >> N) * F) % _, e & D && (s ^= R << (R << BigInt(t2)) - R);
  k.push(s);
}
var [V, U] = T(k, true);
var C = (t, e, r) => r > 32 ? ((t2, e2, r2) => e2 << r2 - 32 | t2 >>> 64 - r2)(t, e, r) : ((t2, e2, r2) => t2 << r2 | e2 >>> 32 - r2)(t, e, r);
var M = (t, e, r) => r > 32 ? ((t2, e2, r2) => t2 << r2 - 32 | e2 >>> 64 - r2)(t, e, r) : ((t2, e2, r2) => e2 << r2 | t2 >>> 32 - r2)(t, e, r);
var q = class _q extends O {
  constructor(t, e, r, n = false, s = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = n, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, y(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    var a;
    this.state = new Uint8Array(200), this.state32 = (a = this.state, new Uint32Array(a.buffer, a.byteOffset, Math.floor(a.byteLength / 4)));
  }
  keccak() {
    !function(t, e = 24) {
      const r = new Uint32Array(10);
      for (let n = 24 - e; n < 24; n++) {
        for (let e3 = 0; e3 < 10; e3++) r[e3] = t[e3] ^ t[e3 + 10] ^ t[e3 + 20] ^ t[e3 + 30] ^ t[e3 + 40];
        for (let e3 = 0; e3 < 10; e3 += 2) {
          const n2 = (e3 + 8) % 10, s2 = (e3 + 2) % 10, a = r[s2], i = r[s2 + 1], o = C(a, i, 1) ^ r[n2], c = M(a, i, 1) ^ r[n2 + 1];
          for (let r2 = 0; r2 < 50; r2 += 10) t[e3 + r2] ^= o, t[e3 + r2 + 1] ^= c;
        }
        let e2 = t[2], s = t[3];
        for (let r2 = 0; r2 < 24; r2++) {
          const n2 = A[r2], a = C(e2, s, n2), i = M(e2, s, n2), o = E[r2];
          e2 = t[o], s = t[o + 1], t[o] = a, t[o + 1] = i;
        }
        for (let e3 = 0; e3 < 50; e3 += 10) {
          for (let n2 = 0; n2 < 10; n2++) r[n2] = t[e3 + n2];
          for (let n2 = 0; n2 < 10; n2++) t[e3 + n2] ^= ~r[(n2 + 2) % 10] & r[(n2 + 4) % 10];
        }
        t[0] ^= V[n], t[1] ^= U[n];
      }
      r.fill(0);
    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    x(this);
    const { blockLen: e, state: r } = this, n = (t = S(t)).length;
    for (let s = 0; s < n; ) {
      const a = Math.min(e - this.pos, n - s);
      for (let e2 = 0; e2 < a; e2++) r[this.pos++] ^= t[s++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: t, suffix: e, pos: r, blockLen: n } = this;
    t[r] ^= e, 0 != (128 & e) && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    x(this, false), w(t), this.finish();
    const e = this.state, { blockLen: r } = this;
    for (let n = 0, s = t.length; n < s; ) {
      this.posOut >= r && this.keccak();
      const a = Math.min(r - this.posOut, s - n);
      t.set(e.subarray(this.posOut, this.posOut + a), n), this.posOut += a, n += a;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return y(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (function(t2, e) {
      w(t2);
      const r = e.outputLen;
      if (t2.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
    }(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: r, outputLen: n, rounds: s, enableXOF: a } = this;
    return t || (t = new _q(e, r, n, a, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = r, t.outputLen = n, t.enableXOF = a, t.destroyed = this.destroyed, t;
  }
};
var j = ((t, e, r) => function(t2) {
  const e2 = (e3) => t2().update(S(e3)).digest(), r2 = t2();
  return e2.outputLen = r2.outputLen, e2.blockLen = r2.blockLen, e2.create = () => t2(), e2;
}(() => new q(e, t, r)))(1, 136, 32);
var L = BigInt(0);
var H = BigInt(1);
var Z = BigInt(2);
function K(t) {
  return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name;
}
var G = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function X(t) {
  if (!K(t)) throw new Error("Uint8Array expected");
  let e = "";
  for (let r = 0; r < t.length; r++) e += G[t[r]];
  return e;
}
function z(t) {
  const e = t.toString(16);
  return 1 & e.length ? `0${e}` : e;
}
function $(t) {
  if ("string" != typeof t) throw new Error("hex string expected, got " + typeof t);
  return BigInt("" === t ? "0" : `0x${t}`);
}
var Y = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function J(t) {
  return t >= Y._0 && t <= Y._9 ? t - Y._0 : t >= Y._A && t <= Y._F ? t - (Y._A - 10) : t >= Y._a && t <= Y._f ? t - (Y._a - 10) : void 0;
}
function W(t) {
  if ("string" != typeof t) throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(r);
  for (let e2 = 0, s = 0; e2 < r; e2++, s += 2) {
    const r2 = J(t.charCodeAt(s)), a = J(t.charCodeAt(s + 1));
    if (void 0 === r2 || void 0 === a) {
      const e3 = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + e3 + '" at index ' + s);
    }
    n[e2] = 16 * r2 + a;
  }
  return n;
}
function Q(t) {
  return $(X(t));
}
function tt(t) {
  if (!K(t)) throw new Error("Uint8Array expected");
  return $(X(Uint8Array.from(t).reverse()));
}
function et(t, e) {
  return W(t.toString(16).padStart(2 * e, "0"));
}
function rt(t, e) {
  return et(t, e).reverse();
}
function nt(t, e, r) {
  let n;
  if ("string" == typeof e) try {
    n = W(e);
  } catch (r2) {
    throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${r2}`);
  }
  else {
    if (!K(e)) throw new Error(`${t} must be hex string or Uint8Array`);
    n = Uint8Array.from(e);
  }
  const s = n.length;
  if ("number" == typeof r && s !== r) throw new Error(`${t} expected ${r} bytes, got ${s}`);
  return n;
}
function st(...t) {
  let e = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const n2 = t[r2];
    if (!K(n2)) throw new Error("Uint8Array expected");
    e += n2.length;
  }
  let r = new Uint8Array(e), n = 0;
  for (let e2 = 0; e2 < t.length; e2++) {
    const s = t[e2];
    r.set(s, n), n += s.length;
  }
  return r;
}
function at(t) {
  if ("string" != typeof t) throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function it(t) {
  let e;
  for (e = 0; t > L; t >>= H, e += 1) ;
  return e;
}
function ot(t, e) {
  return t >> BigInt(e) & H;
}
var ct = (t) => (Z << BigInt(t - 1)) - H;
var ut = (t) => new Uint8Array(t);
var ft = (t) => Uint8Array.from(t);
function dt(t, e, r) {
  if ("number" != typeof t || t < 2) throw new Error("hashLen must be a number");
  if ("number" != typeof e || e < 2) throw new Error("qByteLen must be a number");
  if ("function" != typeof r) throw new Error("hmacFn must be a function");
  let n = ut(t), s = ut(t), a = 0;
  const i = () => {
    n.fill(1), s.fill(0), a = 0;
  }, o = (...t2) => r(s, n, ...t2), c = (t2 = ut()) => {
    s = o(ft([0]), t2), n = o(), 0 !== t2.length && (s = o(ft([1]), t2), n = o());
  }, u2 = () => {
    if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let t2 = 0;
    const r2 = [];
    for (; t2 < e; ) {
      n = o();
      const e2 = n.slice();
      r2.push(e2), t2 += n.length;
    }
    return st(...r2);
  };
  return (t2, e2) => {
    let r2;
    for (i(), c(t2); !(r2 = e2(u2())); ) c();
    return i(), r2;
  };
}
var lt = { bigint: (t) => "bigint" == typeof t, function: (t) => "function" == typeof t, boolean: (t) => "boolean" == typeof t, string: (t) => "string" == typeof t, stringOrUint8Array: (t) => "string" == typeof t || K(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => "function" == typeof t && Number.isSafeInteger(t.outputLen) };
function pt(t, e, r = {}) {
  const n = (e2, r2, n2) => {
    const s = lt[r2];
    if ("function" != typeof s) throw new Error(`Invalid validator "${r2}", expected function`);
    const a = t[e2];
    if (!(n2 && void 0 === a || s(a, t))) throw new Error(`Invalid param ${String(e2)}=${a} (${typeof a}), expected ${r2}`);
  };
  for (const [t2, r2] of Object.entries(e)) n(t2, r2, false);
  for (const [t2, e2] of Object.entries(r)) n(t2, e2, true);
  return t;
}
var ht = Object.freeze({ __proto__: null, bitGet: ot, bitLen: it, bitMask: ct, bitSet: (t, e, r) => t | (r ? H : L) << BigInt(e), bytesToHex: X, bytesToNumberBE: Q, bytesToNumberLE: tt, concatBytes: st, createHmacDrbg: dt, ensureBytes: nt, equalBytes: function(t, e) {
  if (t.length !== e.length) return false;
  let r = 0;
  for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
  return 0 === r;
}, hexToBytes: W, hexToNumber: $, isBytes: K, numberToBytesBE: et, numberToBytesLE: rt, numberToHexUnpadded: z, numberToVarBytesBE: function(t) {
  return W(z(t));
}, utf8ToBytes: at, validateObject: pt });
var mt = BigInt(0);
var bt = BigInt(1);
var gt = BigInt(2);
var yt = BigInt(3);
var wt = BigInt(4);
var xt = BigInt(5);
var Bt = BigInt(8);
function It(t, e) {
  const r = t % e;
  return r >= mt ? r : e + r;
}
function vt(t, e, r) {
  if (r <= mt || e < mt) throw new Error("Expected power/modulo > 0");
  if (r === bt) return mt;
  let n = bt;
  for (; e > mt; ) e & bt && (n = n * t % r), t = t * t % r, e >>= bt;
  return n;
}
function Tt(t, e, r) {
  let n = t;
  for (; e-- > mt; ) n *= n, n %= r;
  return n;
}
function St(t, e) {
  if (t === mt || e <= mt) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = It(t, e), n = e, s = mt, a = bt;
  for (; r !== mt; ) {
    const t2 = n % r, e2 = s - a * (n / r);
    n = r, r = t2, s = a, a = e2;
  }
  if (n !== bt) throw new Error("invert: does not exist");
  return It(s, e);
}
function Ot(t) {
  if (t % wt === yt) {
    const e = (t + bt) / wt;
    return function(t2, r) {
      const n = t2.pow(r, e);
      if (!t2.eql(t2.sqr(n), r)) throw new Error("Cannot find square root");
      return n;
    };
  }
  if (t % Bt === xt) {
    const e = (t - xt) / Bt;
    return function(t2, r) {
      const n = t2.mul(r, gt), s = t2.pow(n, e), a = t2.mul(r, s), i = t2.mul(t2.mul(a, gt), s), o = t2.mul(a, t2.sub(i, t2.ONE));
      if (!t2.eql(t2.sqr(o), r)) throw new Error("Cannot find square root");
      return o;
    };
  }
  return function(t2) {
    const e = (t2 - bt) / gt;
    let r, n, s;
    for (r = t2 - bt, n = 0; r % gt === mt; r /= gt, n++) ;
    for (s = gt; s < t2 && vt(s, e, t2) !== t2 - bt; s++) ;
    if (1 === n) {
      const e2 = (t2 + bt) / wt;
      return function(t3, r2) {
        const n2 = t3.pow(r2, e2);
        if (!t3.eql(t3.sqr(n2), r2)) throw new Error("Cannot find square root");
        return n2;
      };
    }
    const a = (r + bt) / gt;
    return function(t3, i) {
      if (t3.pow(i, e) === t3.neg(t3.ONE)) throw new Error("Cannot find square root");
      let o = n, c = t3.pow(t3.mul(t3.ONE, s), r), u2 = t3.pow(i, a), f3 = t3.pow(i, r);
      for (; !t3.eql(f3, t3.ONE); ) {
        if (t3.eql(f3, t3.ZERO)) return t3.ZERO;
        let e2 = 1;
        for (let r3 = t3.sqr(f3); e2 < o && !t3.eql(r3, t3.ONE); e2++) r3 = t3.sqr(r3);
        const r2 = t3.pow(c, bt << BigInt(o - e2 - 1));
        c = t3.sqr(r2), u2 = t3.mul(u2, r2), f3 = t3.mul(f3, c), o = e2;
      }
      return u2;
    };
  }(t);
}
BigInt(9), BigInt(16);
var Et = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function At(t) {
  return pt(t, Et.reduce((t2, e) => (t2[e] = "function", t2), { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }));
}
function kt(t, e, r) {
  if (r < mt) throw new Error("Expected power > 0");
  if (r === mt) return t.ONE;
  if (r === bt) return e;
  let n = t.ONE, s = e;
  for (; r > mt; ) r & bt && (n = t.mul(n, s)), s = t.sqr(s), r >>= bt;
  return n;
}
function Pt(t, e) {
  const r = new Array(e.length), n = e.reduce((e2, n2, s2) => t.is0(n2) ? e2 : (r[s2] = e2, t.mul(e2, n2)), t.ONE), s = t.inv(n);
  return e.reduceRight((e2, n2, s2) => t.is0(n2) ? e2 : (r[s2] = t.mul(e2, r[s2]), t.mul(e2, n2)), s), r;
}
function Rt(t, e) {
  const r = void 0 !== e ? e : t.toString(2).length;
  return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
}
function Dt(t, e, r = false, n = {}) {
  if (t <= mt) throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: s, nByteLength: a } = Rt(t, e);
  if (a > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
  const i = Ot(t), o = Object.freeze({ ORDER: t, BITS: s, BYTES: a, MASK: ct(s), ZERO: mt, ONE: bt, create: (e2) => It(e2, t), isValid: (e2) => {
    if ("bigint" != typeof e2) throw new Error("Invalid field element: expected bigint, got " + typeof e2);
    return mt <= e2 && e2 < t;
  }, is0: (t2) => t2 === mt, isOdd: (t2) => (t2 & bt) === bt, neg: (e2) => It(-e2, t), eql: (t2, e2) => t2 === e2, sqr: (e2) => It(e2 * e2, t), add: (e2, r2) => It(e2 + r2, t), sub: (e2, r2) => It(e2 - r2, t), mul: (e2, r2) => It(e2 * r2, t), pow: (t2, e2) => kt(o, t2, e2), div: (e2, r2) => It(e2 * St(r2, t), t), sqrN: (t2) => t2 * t2, addN: (t2, e2) => t2 + e2, subN: (t2, e2) => t2 - e2, mulN: (t2, e2) => t2 * e2, inv: (e2) => St(e2, t), sqrt: n.sqrt || ((t2) => i(o, t2)), invertBatch: (t2) => Pt(o, t2), cmov: (t2, e2, r2) => r2 ? e2 : t2, toBytes: (t2) => r ? rt(t2, a) : et(t2, a), fromBytes: (t2) => {
    if (t2.length !== a) throw new Error(`Fp.fromBytes: expected ${a}, got ${t2.length}`);
    return r ? tt(t2) : Q(t2);
  } });
  return Object.freeze(o);
}
function Nt(t) {
  if ("bigint" != typeof t) throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function _t(t) {
  const e = Nt(t);
  return e + Math.ceil(e / 2);
}
function Ft(t, e, r = false) {
  const n = t.length, s = Nt(e), a = _t(e);
  if (n < 16 || n < a || n > 1024) throw new Error(`expected ${a}-1024 bytes of input, got ${n}`);
  const i = It(r ? Q(t) : tt(t), e - bt) + bt;
  return r ? rt(i, s) : et(i, s);
}
var Vt = BigInt(0);
var Ut = BigInt(1);
function Ct(t) {
  return At(t.Fp), pt(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...Rt(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var { bytesToNumberBE: Mt, hexToBytes: qt } = ht;
var jt = { Err: class extends Error {
  constructor(t = "") {
    super(t);
  }
}, _parseInt(t) {
  const { Err: e } = jt;
  if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
  const r = t[1], n = t.subarray(2, r + 2);
  if (!r || n.length !== r) throw new e("Invalid signature integer: wrong length");
  if (128 & n[0]) throw new e("Invalid signature integer: negative");
  if (0 === n[0] && !(128 & n[1])) throw new e("Invalid signature integer: unnecessary leading zero");
  return { d: Mt(n), l: t.subarray(r + 2) };
}, toSig(t) {
  const { Err: e } = jt, r = "string" == typeof t ? qt(t) : t;
  if (!K(r)) throw new Error("ui8a expected");
  let n = r.length;
  if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
  if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
  const { d: s, l: a } = jt._parseInt(r.subarray(2)), { d: i, l: o } = jt._parseInt(a);
  if (o.length) throw new e("Invalid signature: left bytes after parsing");
  return { r: s, s: i };
}, hexFromSig(t) {
  const e = (t2) => 8 & Number.parseInt(t2[0], 16) ? "00" + t2 : t2, r = (t2) => {
    const e2 = t2.toString(16);
    return 1 & e2.length ? `0${e2}` : e2;
  }, n = e(r(t.s)), s = e(r(t.r)), a = n.length / 2, i = s.length / 2, o = r(a), c = r(i);
  return `30${r(i + a + 4)}02${c}${s}02${o}${n}`;
} };
var Lt = BigInt(0);
var Ht = BigInt(1);
var Zt = BigInt(2);
var Kt = BigInt(3);
var Gt = BigInt(4);
function Xt(t) {
  const e = function(t2) {
    const e2 = Ct(t2);
    pt(e2, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
    const { endo: r2, Fp: n2, a: s2 } = e2;
    if (r2) {
      if (!n2.eql(s2, n2.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      if ("object" != typeof r2 || "bigint" != typeof r2.beta || "function" != typeof r2.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
    return Object.freeze({ ...e2 });
  }(t), { Fp: r } = e, n = e.toBytes || ((t2, e2, n2) => {
    const s2 = e2.toAffine();
    return st(Uint8Array.from([4]), r.toBytes(s2.x), r.toBytes(s2.y));
  }), s = e.fromBytes || ((t2) => {
    const e2 = t2.subarray(1);
    return { x: r.fromBytes(e2.subarray(0, r.BYTES)), y: r.fromBytes(e2.subarray(r.BYTES, 2 * r.BYTES)) };
  });
  function a(t2) {
    const { a: n2, b: s2 } = e, a2 = r.sqr(t2), i2 = r.mul(a2, t2);
    return r.add(r.add(i2, r.mul(t2, n2)), s2);
  }
  if (!r.eql(r.sqr(e.Gy), a(e.Gx))) throw new Error("bad generator point: equation left != right");
  function i(t2) {
    return "bigint" == typeof t2 && Lt < t2 && t2 < e.n;
  }
  function o(t2) {
    if (!i(t2)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(t2) {
    const { allowedPrivateKeyLengths: r2, nByteLength: n2, wrapPrivateKey: s2, n: a2 } = e;
    if (r2 && "bigint" != typeof t2) {
      if (K(t2) && (t2 = X(t2)), "string" != typeof t2 || !r2.includes(t2.length)) throw new Error("Invalid key");
      t2 = t2.padStart(2 * n2, "0");
    }
    let i2;
    try {
      i2 = "bigint" == typeof t2 ? t2 : Q(nt("private key", t2, n2));
    } catch (e2) {
      throw new Error(`private key must be ${n2} bytes, hex or bigint, not ${typeof t2}`);
    }
    return s2 && (i2 = It(i2, a2)), o(i2), i2;
  }
  const u2 = /* @__PURE__ */ new Map();
  function f3(t2) {
    if (!(t2 instanceof d2)) throw new Error("ProjectivePoint expected");
  }
  class d2 {
    constructor(t2, e2, n2) {
      if (this.px = t2, this.py = e2, this.pz = n2, null == t2 || !r.isValid(t2)) throw new Error("x required");
      if (null == e2 || !r.isValid(e2)) throw new Error("y required");
      if (null == n2 || !r.isValid(n2)) throw new Error("z required");
    }
    static fromAffine(t2) {
      const { x: e2, y: n2 } = t2 || {};
      if (!t2 || !r.isValid(e2) || !r.isValid(n2)) throw new Error("invalid affine point");
      if (t2 instanceof d2) throw new Error("projective point not allowed");
      const s2 = (t3) => r.eql(t3, r.ZERO);
      return s2(e2) && s2(n2) ? d2.ZERO : new d2(e2, n2, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(t2) {
      const e2 = r.invertBatch(t2.map((t3) => t3.pz));
      return t2.map((t3, r2) => t3.toAffine(e2[r2])).map(d2.fromAffine);
    }
    static fromHex(t2) {
      const e2 = d2.fromAffine(s(nt("pointHex", t2)));
      return e2.assertValidity(), e2;
    }
    static fromPrivateKey(t2) {
      return d2.BASE.multiply(c(t2));
    }
    _setWindowSize(t2) {
      this._WINDOW_SIZE = t2, u2.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !r.is0(this.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: t2, y: n2 } = this.toAffine();
      if (!r.isValid(t2) || !r.isValid(n2)) throw new Error("bad point: x or y not FE");
      const s2 = r.sqr(n2), i2 = a(t2);
      if (!r.eql(s2, i2)) throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: t2 } = this.toAffine();
      if (r.isOdd) return !r.isOdd(t2);
      throw new Error("Field doesn't support isOdd");
    }
    equals(t2) {
      f3(t2);
      const { px: e2, py: n2, pz: s2 } = this, { px: a2, py: i2, pz: o2 } = t2, c2 = r.eql(r.mul(e2, o2), r.mul(a2, s2)), u3 = r.eql(r.mul(n2, o2), r.mul(i2, s2));
      return c2 && u3;
    }
    negate() {
      return new d2(this.px, r.neg(this.py), this.pz);
    }
    double() {
      const { a: t2, b: n2 } = e, s2 = r.mul(n2, Kt), { px: a2, py: i2, pz: o2 } = this;
      let c2 = r.ZERO, u3 = r.ZERO, f4 = r.ZERO, l3 = r.mul(a2, a2), p3 = r.mul(i2, i2), h2 = r.mul(o2, o2), m2 = r.mul(a2, i2);
      return m2 = r.add(m2, m2), f4 = r.mul(a2, o2), f4 = r.add(f4, f4), c2 = r.mul(t2, f4), u3 = r.mul(s2, h2), u3 = r.add(c2, u3), c2 = r.sub(p3, u3), u3 = r.add(p3, u3), u3 = r.mul(c2, u3), c2 = r.mul(m2, c2), f4 = r.mul(s2, f4), h2 = r.mul(t2, h2), m2 = r.sub(l3, h2), m2 = r.mul(t2, m2), m2 = r.add(m2, f4), f4 = r.add(l3, l3), l3 = r.add(f4, l3), l3 = r.add(l3, h2), l3 = r.mul(l3, m2), u3 = r.add(u3, l3), h2 = r.mul(i2, o2), h2 = r.add(h2, h2), l3 = r.mul(h2, m2), c2 = r.sub(c2, l3), f4 = r.mul(h2, p3), f4 = r.add(f4, f4), f4 = r.add(f4, f4), new d2(c2, u3, f4);
    }
    add(t2) {
      f3(t2);
      const { px: n2, py: s2, pz: a2 } = this, { px: i2, py: o2, pz: c2 } = t2;
      let u3 = r.ZERO, l3 = r.ZERO, p3 = r.ZERO;
      const h2 = e.a, m2 = r.mul(e.b, Kt);
      let b2 = r.mul(n2, i2), g2 = r.mul(s2, o2), y2 = r.mul(a2, c2), w2 = r.add(n2, s2), x2 = r.add(i2, o2);
      w2 = r.mul(w2, x2), x2 = r.add(b2, g2), w2 = r.sub(w2, x2), x2 = r.add(n2, a2);
      let B2 = r.add(i2, c2);
      return x2 = r.mul(x2, B2), B2 = r.add(b2, y2), x2 = r.sub(x2, B2), B2 = r.add(s2, a2), u3 = r.add(o2, c2), B2 = r.mul(B2, u3), u3 = r.add(g2, y2), B2 = r.sub(B2, u3), p3 = r.mul(h2, x2), u3 = r.mul(m2, y2), p3 = r.add(u3, p3), u3 = r.sub(g2, p3), p3 = r.add(g2, p3), l3 = r.mul(u3, p3), g2 = r.add(b2, b2), g2 = r.add(g2, b2), y2 = r.mul(h2, y2), x2 = r.mul(m2, x2), g2 = r.add(g2, y2), y2 = r.sub(b2, y2), y2 = r.mul(h2, y2), x2 = r.add(x2, y2), b2 = r.mul(g2, x2), l3 = r.add(l3, b2), b2 = r.mul(B2, x2), u3 = r.mul(w2, u3), u3 = r.sub(u3, b2), b2 = r.mul(w2, g2), p3 = r.mul(B2, p3), p3 = r.add(p3, b2), new d2(u3, l3, p3);
    }
    subtract(t2) {
      return this.add(t2.negate());
    }
    is0() {
      return this.equals(d2.ZERO);
    }
    wNAF(t2) {
      return p2.wNAFCached(this, u2, t2, (t3) => {
        const e2 = r.invertBatch(t3.map((t4) => t4.pz));
        return t3.map((t4, r2) => t4.toAffine(e2[r2])).map(d2.fromAffine);
      });
    }
    multiplyUnsafe(t2) {
      const n2 = d2.ZERO;
      if (t2 === Lt) return n2;
      if (o(t2), t2 === Ht) return this;
      const { endo: s2 } = e;
      if (!s2) return p2.unsafeLadder(this, t2);
      let { k1neg: a2, k1: i2, k2neg: c2, k2: u3 } = s2.splitScalar(t2), f4 = n2, l3 = n2, h2 = this;
      for (; i2 > Lt || u3 > Lt; ) i2 & Ht && (f4 = f4.add(h2)), u3 & Ht && (l3 = l3.add(h2)), h2 = h2.double(), i2 >>= Ht, u3 >>= Ht;
      return a2 && (f4 = f4.negate()), c2 && (l3 = l3.negate()), l3 = new d2(r.mul(l3.px, s2.beta), l3.py, l3.pz), f4.add(l3);
    }
    multiply(t2) {
      o(t2);
      let n2, s2, a2 = t2;
      const { endo: i2 } = e;
      if (i2) {
        const { k1neg: t3, k1: e2, k2neg: o2, k2: c2 } = i2.splitScalar(a2);
        let { p: u3, f: f4 } = this.wNAF(e2), { p: l3, f: h2 } = this.wNAF(c2);
        u3 = p2.constTimeNegate(t3, u3), l3 = p2.constTimeNegate(o2, l3), l3 = new d2(r.mul(l3.px, i2.beta), l3.py, l3.pz), n2 = u3.add(l3), s2 = f4.add(h2);
      } else {
        const { p: t3, f: e2 } = this.wNAF(a2);
        n2 = t3, s2 = e2;
      }
      return d2.normalizeZ([n2, s2])[0];
    }
    multiplyAndAddUnsafe(t2, e2, r2) {
      const n2 = d2.BASE, s2 = (t3, e3) => e3 !== Lt && e3 !== Ht && t3.equals(n2) ? t3.multiply(e3) : t3.multiplyUnsafe(e3), a2 = s2(this, e2).add(s2(t2, r2));
      return a2.is0() ? void 0 : a2;
    }
    toAffine(t2) {
      const { px: e2, py: n2, pz: s2 } = this, a2 = this.is0();
      null == t2 && (t2 = a2 ? r.ONE : r.inv(s2));
      const i2 = r.mul(e2, t2), o2 = r.mul(n2, t2), c2 = r.mul(s2, t2);
      if (a2) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(c2, r.ONE)) throw new Error("invZ was invalid");
      return { x: i2, y: o2 };
    }
    isTorsionFree() {
      const { h: t2, isTorsionFree: r2 } = e;
      if (t2 === Ht) return true;
      if (r2) return r2(d2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: t2, clearCofactor: r2 } = e;
      return t2 === Ht ? this : r2 ? r2(d2, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(t2 = true) {
      return this.assertValidity(), n(d2, this, t2);
    }
    toHex(t2 = true) {
      return X(this.toRawBytes(t2));
    }
  }
  d2.BASE = new d2(e.Gx, e.Gy, r.ONE), d2.ZERO = new d2(r.ZERO, r.ONE, r.ZERO);
  const l2 = e.nBitLength, p2 = /* @__PURE__ */ function(t2, e2) {
    const r2 = (t3, e3) => {
      const r3 = e3.negate();
      return t3 ? r3 : e3;
    }, n2 = (t3) => ({ windows: Math.ceil(e2 / t3) + 1, windowSize: 2 ** (t3 - 1) });
    return { constTimeNegate: r2, unsafeLadder(e3, r3) {
      let n3 = t2.ZERO, s2 = e3;
      for (; r3 > Vt; ) r3 & Ut && (n3 = n3.add(s2)), s2 = s2.double(), r3 >>= Ut;
      return n3;
    }, precomputeWindow(t3, e3) {
      const { windows: r3, windowSize: s2 } = n2(e3), a2 = [];
      let i2 = t3, o2 = i2;
      for (let t4 = 0; t4 < r3; t4++) {
        o2 = i2, a2.push(o2);
        for (let t5 = 1; t5 < s2; t5++) o2 = o2.add(i2), a2.push(o2);
        i2 = o2.double();
      }
      return a2;
    }, wNAF(e3, s2, a2) {
      const { windows: i2, windowSize: o2 } = n2(e3);
      let c2 = t2.ZERO, u3 = t2.BASE;
      const f4 = BigInt(2 ** e3 - 1), d3 = 2 ** e3, l3 = BigInt(e3);
      for (let t3 = 0; t3 < i2; t3++) {
        const e4 = t3 * o2;
        let n3 = Number(a2 & f4);
        a2 >>= l3, n3 > o2 && (n3 -= d3, a2 += Ut);
        const i3 = e4, p3 = e4 + Math.abs(n3) - 1, h2 = t3 % 2 != 0, m2 = n3 < 0;
        0 === n3 ? u3 = u3.add(r2(h2, s2[i3])) : c2 = c2.add(r2(m2, s2[p3]));
      }
      return { p: c2, f: u3 };
    }, wNAFCached(t3, e3, r3, n3) {
      const s2 = t3._WINDOW_SIZE || 1;
      let a2 = e3.get(t3);
      return a2 || (a2 = this.precomputeWindow(t3, s2), 1 !== s2 && e3.set(t3, n3(a2))), this.wNAF(s2, a2, r3);
    } };
  }(d2, e.endo ? Math.ceil(l2 / 2) : l2);
  return { CURVE: e, ProjectivePoint: d2, normPrivateKeyToScalar: c, weierstrassEquation: a, isWithinCurveOrder: i };
}
function zt(t) {
  const e = function(t2) {
    const e2 = Ct(t2);
    return pt(e2, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...e2 });
  }(t), { Fp: r, n } = e, s = r.BYTES + 1, a = 2 * r.BYTES + 1;
  function i(t2) {
    return It(t2, n);
  }
  function o(t2) {
    return St(t2, n);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u2, weierstrassEquation: f3, isWithinCurveOrder: d2 } = Xt({ ...e, toBytes(t2, e2, n2) {
    const s2 = e2.toAffine(), a2 = r.toBytes(s2.x), i2 = st;
    return n2 ? i2(Uint8Array.from([e2.hasEvenY() ? 2 : 3]), a2) : i2(Uint8Array.from([4]), a2, r.toBytes(s2.y));
  }, fromBytes(t2) {
    const e2 = t2.length, n2 = t2[0], i2 = t2.subarray(1);
    if (e2 !== s || 2 !== n2 && 3 !== n2) {
      if (e2 === a && 4 === n2) {
        return { x: r.fromBytes(i2.subarray(0, r.BYTES)), y: r.fromBytes(i2.subarray(r.BYTES, 2 * r.BYTES)) };
      }
      throw new Error(`Point of length ${e2} was invalid. Expected ${s} compressed bytes or ${a} uncompressed bytes`);
    }
    {
      const t3 = Q(i2);
      if (!(Lt < (o2 = t3) && o2 < r.ORDER)) throw new Error("Point is not on curve");
      const e3 = f3(t3);
      let s2 = r.sqrt(e3);
      return 1 == (1 & n2) !== ((s2 & Ht) === Ht) && (s2 = r.neg(s2)), { x: t3, y: s2 };
    }
    var o2;
  } }), l2 = (t2) => X(et(t2, e.nByteLength));
  function p2(t2) {
    return t2 > n >> Ht;
  }
  const h2 = (t2, e2, r2) => Q(t2.slice(e2, r2));
  class m2 {
    constructor(t2, e2, r2) {
      this.r = t2, this.s = e2, this.recovery = r2, this.assertValidity();
    }
    static fromCompact(t2) {
      const r2 = e.nByteLength;
      return t2 = nt("compactSignature", t2, 2 * r2), new m2(h2(t2, 0, r2), h2(t2, r2, 2 * r2));
    }
    static fromDER(t2) {
      const { r: e2, s: r2 } = jt.toSig(nt("DER", t2));
      return new m2(e2, r2);
    }
    assertValidity() {
      if (!d2(this.r)) throw new Error("r must be 0 < r < CURVE.n");
      if (!d2(this.s)) throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(t2) {
      return new m2(this.r, this.s, t2);
    }
    recoverPublicKey(t2) {
      const { r: n2, s: s2, recovery: a2 } = this, u3 = w2(nt("msgHash", t2));
      if (null == a2 || ![0, 1, 2, 3].includes(a2)) throw new Error("recovery id invalid");
      const f4 = 2 === a2 || 3 === a2 ? n2 + e.n : n2;
      if (f4 >= r.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const d3 = 0 == (1 & a2) ? "02" : "03", p3 = c.fromHex(d3 + l2(f4)), h3 = o(f4), m3 = i(-u3 * h3), b3 = i(s2 * h3), g3 = c.BASE.multiplyAndAddUnsafe(p3, m3, b3);
      if (!g3) throw new Error("point at infinify");
      return g3.assertValidity(), g3;
    }
    hasHighS() {
      return p2(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new m2(this.r, i(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return W(this.toDERHex());
    }
    toDERHex() {
      return jt.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return W(this.toCompactHex());
    }
    toCompactHex() {
      return l2(this.r) + l2(this.s);
    }
  }
  const b2 = { isValidPrivateKey(t2) {
    try {
      return u2(t2), true;
    } catch (t3) {
      return false;
    }
  }, normPrivateKeyToScalar: u2, randomPrivateKey: () => {
    const t2 = _t(e.n);
    return Ft(e.randomBytes(t2), e.n);
  }, precompute: (t2 = 8, e2 = c.BASE) => (e2._setWindowSize(t2), e2.multiply(BigInt(3)), e2) };
  function g2(t2) {
    const e2 = K(t2), r2 = "string" == typeof t2, n2 = (e2 || r2) && t2.length;
    return e2 ? n2 === s || n2 === a : r2 ? n2 === 2 * s || n2 === 2 * a : t2 instanceof c;
  }
  const y2 = e.bits2int || function(t2) {
    const r2 = Q(t2), n2 = 8 * t2.length - e.nBitLength;
    return n2 > 0 ? r2 >> BigInt(n2) : r2;
  }, w2 = e.bits2int_modN || function(t2) {
    return i(y2(t2));
  }, x2 = ct(e.nBitLength);
  function B2(t2) {
    if ("bigint" != typeof t2) throw new Error("bigint expected");
    if (!(Lt <= t2 && t2 < x2)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return et(t2, e.nByteLength);
  }
  function I3(t2, n2, s2 = v2) {
    if (["recovered", "canonical"].some((t3) => t3 in s2)) throw new Error("sign() legacy options not supported");
    const { hash: a2, randomBytes: f4 } = e;
    let { lowS: l3, prehash: h3, extraEntropy: b3 } = s2;
    null == l3 && (l3 = true), t2 = nt("msgHash", t2), h3 && (t2 = nt("prehashed msgHash", a2(t2)));
    const g3 = w2(t2), x3 = u2(n2), I4 = [B2(x3), B2(g3)];
    if (null != b3) {
      const t3 = true === b3 ? f4(r.BYTES) : b3;
      I4.push(nt("extraEntropy", t3));
    }
    const T3 = st(...I4), S2 = g3;
    return { seed: T3, k2sig: function(t3) {
      const e2 = y2(t3);
      if (!d2(e2)) return;
      const r2 = o(e2), n3 = c.BASE.multiply(e2).toAffine(), s3 = i(n3.x);
      if (s3 === Lt) return;
      const a3 = i(r2 * i(S2 + s3 * x3));
      if (a3 === Lt) return;
      let u3 = (n3.x === s3 ? 0 : 2) | Number(n3.y & Ht), f5 = a3;
      return l3 && p2(a3) && (f5 = function(t4) {
        return p2(t4) ? i(-t4) : t4;
      }(a3), u3 ^= 1), new m2(s3, f5, u3);
    } };
  }
  const v2 = { lowS: e.lowS, prehash: false }, T2 = { lowS: e.lowS, prehash: false };
  return c.BASE._setWindowSize(8), { CURVE: e, getPublicKey: function(t2, e2 = true) {
    return c.fromPrivateKey(t2).toRawBytes(e2);
  }, getSharedSecret: function(t2, e2, r2 = true) {
    if (g2(t2)) throw new Error("first arg must be private key");
    if (!g2(e2)) throw new Error("second arg must be public key");
    return c.fromHex(e2).multiply(u2(t2)).toRawBytes(r2);
  }, sign: function(t2, r2, n2 = v2) {
    const { seed: s2, k2sig: a2 } = I3(t2, r2, n2), i2 = e;
    return dt(i2.hash.outputLen, i2.nByteLength, i2.hmac)(s2, a2);
  }, verify: function(t2, r2, n2, s2 = T2) {
    const a2 = t2;
    if (r2 = nt("msgHash", r2), n2 = nt("publicKey", n2), "strict" in s2) throw new Error("options.strict was renamed to lowS");
    const { lowS: u3, prehash: f4 } = s2;
    let d3, l3;
    try {
      if ("string" == typeof a2 || K(a2)) try {
        d3 = m2.fromDER(a2);
      } catch (t3) {
        if (!(t3 instanceof jt.Err)) throw t3;
        d3 = m2.fromCompact(a2);
      }
      else {
        if ("object" != typeof a2 || "bigint" != typeof a2.r || "bigint" != typeof a2.s) throw new Error("PARSE");
        {
          const { r: t3, s: e2 } = a2;
          d3 = new m2(t3, e2);
        }
      }
      l3 = c.fromHex(n2);
    } catch (t3) {
      if ("PARSE" === t3.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return false;
    }
    if (u3 && d3.hasHighS()) return false;
    f4 && (r2 = e.hash(r2));
    const { r: p3, s: h3 } = d3, b3 = w2(r2), g3 = o(h3), y3 = i(b3 * g3), x3 = i(p3 * g3), B3 = c.BASE.multiplyAndAddUnsafe(l3, y3, x3)?.toAffine();
    return !!B3 && i(B3.x) === p3;
  }, ProjectivePoint: c, Signature: m2, utils: b2 };
}
function $t(t, e) {
  if (At(t), !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
  const r = function(t2, e2) {
    const r2 = t2.ORDER;
    let n = Lt;
    for (let t3 = r2 - Ht; t3 % Zt === Lt; t3 /= Zt) n += Ht;
    const s = n, a = Zt << s - Ht - Ht, i = a * Zt, o = (r2 - Ht) / i, c = (o - Ht) / Zt, u2 = i - Ht, f3 = a, d2 = t2.pow(e2, o), l2 = t2.pow(e2, (o + Ht) / Zt);
    let p2 = (e3, r3) => {
      let n2 = d2, a2 = t2.pow(r3, u2), i2 = t2.sqr(a2);
      i2 = t2.mul(i2, r3);
      let o2 = t2.mul(e3, i2);
      o2 = t2.pow(o2, c), o2 = t2.mul(o2, a2), a2 = t2.mul(o2, r3), i2 = t2.mul(o2, e3);
      let p3 = t2.mul(i2, a2);
      o2 = t2.pow(p3, f3);
      let h2 = t2.eql(o2, t2.ONE);
      a2 = t2.mul(i2, l2), o2 = t2.mul(p3, n2), i2 = t2.cmov(a2, i2, h2), p3 = t2.cmov(o2, p3, h2);
      for (let e4 = s; e4 > Ht; e4--) {
        let r4 = e4 - Zt;
        r4 = Zt << r4 - Ht;
        let s2 = t2.pow(p3, r4);
        const o3 = t2.eql(s2, t2.ONE);
        a2 = t2.mul(i2, n2), n2 = t2.mul(n2, n2), s2 = t2.mul(p3, n2), i2 = t2.cmov(a2, i2, o3), p3 = t2.cmov(s2, p3, o3);
      }
      return { isValid: h2, value: i2 };
    };
    if (t2.ORDER % Gt === Kt) {
      const r3 = (t2.ORDER - Kt) / Gt, n2 = t2.sqrt(t2.neg(e2));
      p2 = (e3, s2) => {
        let a2 = t2.sqr(s2);
        const i2 = t2.mul(e3, s2);
        a2 = t2.mul(a2, i2);
        let o2 = t2.pow(a2, r3);
        o2 = t2.mul(o2, i2);
        const c2 = t2.mul(o2, n2), u3 = t2.mul(t2.sqr(o2), s2), f4 = t2.eql(u3, e3);
        return { isValid: f4, value: t2.cmov(c2, o2, f4) };
      };
    }
    return p2;
  }(t, e.Z);
  if (!t.isOdd) throw new Error("Fp.isOdd is not implemented!");
  return (n) => {
    let s, a, i, o, c, u2, f3, d2;
    s = t.sqr(n), s = t.mul(s, e.Z), a = t.sqr(s), a = t.add(a, s), i = t.add(a, t.ONE), i = t.mul(i, e.B), o = t.cmov(e.Z, t.neg(a), !t.eql(a, t.ZERO)), o = t.mul(o, e.A), a = t.sqr(i), u2 = t.sqr(o), c = t.mul(u2, e.A), a = t.add(a, c), a = t.mul(a, i), u2 = t.mul(u2, o), c = t.mul(u2, e.B), a = t.add(a, c), f3 = t.mul(s, i);
    const { isValid: l2, value: p2 } = r(a, u2);
    d2 = t.mul(s, n), d2 = t.mul(d2, p2), f3 = t.cmov(f3, i, l2), d2 = t.cmov(d2, p2, l2);
    const h2 = t.isOdd(n) === t.isOdd(d2);
    return d2 = t.cmov(t.neg(d2), d2, h2), f3 = t.div(f3, o), { x: f3, y: d2 };
  };
}
var Yt = Q;
function Jt(t, e) {
  if (t < 0 || t >= 1 << 8 * e) throw new Error(`bad I2OSP call: value=${t} length=${e}`);
  const r = Array.from({ length: e }).fill(0);
  for (let n = e - 1; n >= 0; n--) r[n] = 255 & t, t >>>= 8;
  return new Uint8Array(r);
}
function Wt(t, e) {
  const r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n];
  return r;
}
function Qt(t) {
  if (!K(t)) throw new Error("Uint8Array expected");
}
function te(t) {
  if (!Number.isSafeInteger(t)) throw new Error("number expected");
}
function ee(t, e, r) {
  pt(r, { DST: "stringOrUint8Array", p: "bigint", m: "isSafeInteger", k: "isSafeInteger", hash: "hash" });
  const { p: n, k: s, m: a, hash: i, expand: o, DST: c } = r;
  Qt(t), te(e);
  const u2 = function(t2) {
    if (K(t2)) return t2;
    if ("string" == typeof t2) return at(t2);
    throw new Error("DST must be Uint8Array or string");
  }(c), f3 = n.toString(2).length, d2 = Math.ceil((f3 + s) / 8), l2 = e * a * d2;
  let p2;
  if ("xmd" === o) p2 = function(t2, e2, r2, n2) {
    Qt(t2), Qt(e2), te(r2), e2.length > 255 && (e2 = n2(st(at("H2C-OVERSIZE-DST-"), e2)));
    const { outputLen: s2, blockLen: a2 } = n2, i2 = Math.ceil(r2 / s2);
    if (i2 > 255) throw new Error("Invalid xmd length");
    const o2 = st(e2, Jt(e2.length, 1)), c2 = Jt(0, a2), u3 = Jt(r2, 2), f4 = new Array(i2), d3 = n2(st(c2, t2, u3, Jt(0, 1), o2));
    f4[0] = n2(st(d3, Jt(1, 1), o2));
    for (let t3 = 1; t3 <= i2; t3++) {
      const e3 = [Wt(d3, f4[t3 - 1]), Jt(t3 + 1, 1), o2];
      f4[t3] = n2(st(...e3));
    }
    return st(...f4).slice(0, r2);
  }(t, u2, l2, i);
  else if ("xof" === o) p2 = function(t2, e2, r2, n2, s2) {
    if (Qt(t2), Qt(e2), te(r2), e2.length > 255) {
      const t3 = Math.ceil(2 * n2 / 8);
      e2 = s2.create({ dkLen: t3 }).update(at("H2C-OVERSIZE-DST-")).update(e2).digest();
    }
    if (r2 > 65535 || e2.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
    return s2.create({ dkLen: r2 }).update(t2).update(Jt(r2, 2)).update(e2).update(Jt(e2.length, 1)).digest();
  }(t, u2, l2, s, i);
  else {
    if ("_internal_pass" !== o) throw new Error('expand must be "xmd" or "xof"');
    p2 = t;
  }
  const h2 = new Array(e);
  for (let t2 = 0; t2 < e; t2++) {
    const e2 = new Array(a);
    for (let r2 = 0; r2 < a; r2++) {
      const s2 = d2 * (r2 + t2 * a), i2 = p2.subarray(s2, s2 + d2);
      e2[r2] = It(Yt(i2), n);
    }
    h2[t2] = e2;
  }
  return h2;
}
function re(t, e) {
  const r = e.map((t2) => Array.from(t2).reverse());
  return (e2, n) => {
    const [s, a, i, o] = r.map((r2) => r2.reduce((r3, n2) => t.add(t.mul(r3, e2), n2)));
    return e2 = t.div(s, a), n = t.mul(n, t.div(i, o)), { x: e2, y: n };
  };
}
function ne(t, e, r) {
  if ("function" != typeof e) throw new Error("mapToCurve() must be defined");
  return { hashToCurve(n, s) {
    const a = ee(n, 2, { ...r, DST: r.DST, ...s }), i = t.fromAffine(e(a[0])), o = t.fromAffine(e(a[1])), c = i.add(o).clearCofactor();
    return c.assertValidity(), c;
  }, encodeToCurve(n, s) {
    const a = ee(n, 1, { ...r, DST: r.encodeDST, ...s }), i = t.fromAffine(e(a[0])).clearCofactor();
    return i.assertValidity(), i;
  } };
}
var se = class extends O {
  constructor(t, e) {
    super(), this.finished = false, this.destroyed = false, function(t2) {
      if ("function" != typeof t2 || "function" != typeof t2.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
      y(t2.outputLen), y(t2.blockLen);
    }(t);
    const r = S(e);
    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const n = this.blockLen, s = new Uint8Array(n);
    s.set(r.length > n ? t.create().update(r).digest() : r);
    for (let t2 = 0; t2 < s.length; t2++) s[t2] ^= 54;
    this.iHash.update(s), this.oHash = t.create();
    for (let t2 = 0; t2 < s.length; t2++) s[t2] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(t) {
    return x(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    x(this), w(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: r, finished: n, destroyed: s, blockLen: a, outputLen: i } = this;
    return t.finished = n, t.destroyed = s, t.blockLen = a, t.outputLen = i, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var ae = (t, e, r) => new se(t, e).update(r).digest();
function ie(t) {
  return { hash: t, hmac: (e, ...r) => ae(t, e, concatBytes(...r)), randomBytes };
}
ae.create = (t, e) => new se(t, e);
var oe = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var ce = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var ue = BigInt(1);
var fe = BigInt(2);
var de = (t, e) => (t + e / fe) / e;
var le = Dt(oe, void 0, void 0, { sqrt: function(t) {
  const e = oe, r = BigInt(3), n = BigInt(6), s = BigInt(11), a = BigInt(22), i = BigInt(23), o = BigInt(44), c = BigInt(88), u2 = t * t * t % e, f3 = u2 * u2 * t % e, d2 = Tt(f3, r, e) * f3 % e, l2 = Tt(d2, r, e) * f3 % e, p2 = Tt(l2, fe, e) * u2 % e, h2 = Tt(p2, s, e) * p2 % e, m2 = Tt(h2, a, e) * h2 % e, b2 = Tt(m2, o, e) * m2 % e, g2 = Tt(b2, c, e) * b2 % e, y2 = Tt(g2, o, e) * m2 % e, w2 = Tt(y2, r, e) * f3 % e, x2 = Tt(w2, i, e) * h2 % e, B2 = Tt(x2, n, e) * u2 % e, I3 = Tt(B2, fe, e);
  if (!le.eql(le.sqr(I3), t)) throw new Error("Cannot find square root");
  return I3;
} });
var pe = function(t, e) {
  const r = (e2) => zt({ ...t, ...ie(e2) });
  return Object.freeze({ ...r(e), create: r });
}({ a: BigInt(0), b: BigInt(7), Fp: le, n: ce, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (t) => {
  const e = ce, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -ue * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), a = r, i = BigInt("0x100000000000000000000000000000000"), o = de(a * t, e), c = de(-n * t, e);
  let u2 = It(t - o * r - c * s, e), f3 = It(-o * n - c * a, e);
  const d2 = u2 > i, l2 = f3 > i;
  if (d2 && (u2 = e - u2), l2 && (f3 = e - f3), u2 > i || f3 > i) throw new Error("splitScalar: Endomorphism failed, k=" + t);
  return { k1neg: d2, k1: u2, k2neg: l2, k2: f3 };
} } }, sha256);
BigInt(0), pe.ProjectivePoint, Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
var he = (t) => pe.getPublicKey(t, false);
var me = (t) => pe.ProjectivePoint.fromHex(t).toRawBytes(false);
function be(t) {
  return /^0x/i.test(t) ? t : `0x${t}`;
}
function ge(t) {
  return t.replace(/^0x/i, "");
}
function ye(t) {
  return hexToBytes(ge(t));
}
var we = { fromPrivateKey: (t) => ("string" == typeof t && (t = ye(t)), we.fromPublicKey(he(t))), fromPublicKey(t) {
  const e = me(t), r = bytesToHex(j(e.subarray(1, 65))).slice(24);
  return we.checksum(r);
}, checksum(t) {
  const e = ge(t.toLowerCase());
  if (40 !== e.length) throw new Error("Invalid address, must have 40 chars");
  const r = ge(bytesToHex(j(e)));
  let n = "";
  for (let t2 = 0; t2 < e.length; t2++) {
    const s = Number.parseInt(r[t2], 16);
    let a = e[t2];
    s > 7 && (a = a.toUpperCase()), n += a;
  }
  return be(n);
}, verifyChecksum(t) {
  const e = ge(t);
  if (40 !== e.length) throw new Error("Invalid address, must have 40 chars");
  if (e === e.toLowerCase() || e === e.toUpperCase()) return true;
  const r = bytesToHex(j(e.toLowerCase()));
  for (let t2 = 0; t2 < 40; t2++) {
    const n = e[t2], s = Number.parseInt(r[t2], 16);
    if (s > 7 && n.toUpperCase() !== n) return false;
    if (s <= 7 && n.toLowerCase() !== n) return false;
  }
  return true;
} };
function xe(t) {
  return BigInt(Ie(t));
}
function Be(t) {
  return Number.parseInt(bytesToHex(t), 16);
}
function Ie(t) {
  return be(bytesToHex(t));
}
function ve(t) {
  return 1 & (t = ge(t)).length && (t = "0" + t), hexToBytes(t);
}
function Te(t, e) {
  const r = e - t.length;
  if (r <= 0) return t;
  const n = new Uint8Array(e);
  return n.set(t, r), n;
}
var Se = class {
};
var Oe = "AVM";
var Ee = "EVM";
var Ae = "PVM";
var ke = [Oe, Ee, Ae];
var Pe;
var Re;
!function(t) {
  t.Codec = "codec", t.BaseTx = "avax.BaseTx", t.TransferableOutput = "avax.TransferableOutput", t.TransferableInput = "avax.TransferableInput", t.TransferableOp = "avax.TransferableOp", t.UTXOID = "avax.UTXOID", t.UTXO = "avax.Utxo", t.Id = "common.Id", t.Address = "common.Address", t.NodeId = "common.NodeId", t.Int = "primitives.Int", t.BigIntPr = "primitives.BigInt", t.StringPr = "primitives.String", t.Byte = "primitives.Byte", t.Bytes = "primitives.Bytes", t.Short = "primitives.Short", t.Input = "secp256k1fx.Input", t.TransferInput = "secp256k1fx.TransferInput", t.TransferOutput = "secp256k1fx.TransferOutput", t.OutputOwners = "secp256k1fx.OutputOwners", t.OutputOwnersList = "secp256k1fx.OutputOwnersList", t.Credential = "secp256k1fx.Credential", t.Signature = "secp256k1fx.Signature", t.SecpMintOperation = "secp256k1fx.MintOperation", t.SecpMintOutput = "secp256k1fx.MintOutput", t.NftFxMintOperation = "nftfx.MintOperation", t.NftFxMintOutput = "nftfx.MintOutput", t.NftFxTransferOperation = "nftfx.TransferOperation", t.NftFxTransferOutput = "nftfx.TransferOutput", t.NftFxCredential = "nftfx.Credential", t.AvmBaseTx = "avm.BaseTx", t.AvmExportTx = "avm.ExportTx", t.AvmImportTx = "avm.ImportTx", t.CreateAssetTx = "avm.CreateAssetTx", t.OperationTx = "avm.OperationTx", t.InitialState = "avm.InitialState", t.AvmSignedTx = "avm.SignedTx", t.PvmBaseTx = "pvm.BaseTx", t.StakeableLockIn = "pvm.StakeableLockIn", t.StakeableLockOut = "pvm.StakeableLockOut", t.AddDelegatorTx = "pvm.AddDelegatorTx", t.AddValidatorTx = "pvm.AddValidatorTx", t.AddPermissionlessDelegatorTx = "pvm.AddPermissionlessDelegator", t.AddPermissionlessValidatorTx = "pvm.AddPermissionlessValidator", t.Validator = "pvm.Validator", t.SubnetValidator = "pvm.SubnetValidator", t.Signer = "pvm.signer", t.SignerEmpty = "pvm.signerEmpty", t.ProofOfPossession = "pvm.proofOfPossession", t.AddSubnetValidatorTx = "pvm.AddSubnetValidator", t.AdvanceTimeTx = "pvm.AdvanceTimeTx", t.CreateChainTx = "pvm.CreateChainTx", t.CreateSubnetTx = "pvm.CreateSubnetTx", t.PvmExportTx = "pvm.ExportTx", t.PvmImportTx = "pvm.ImportTx", t.RewardValidatorTx = "pvm.RewardValidatorTx", t.RemoveSubnetValidatorTx = "pvm.RemoveSubnetValidator", t.TransformSubnetTx = "pvm.TransformSubnetTx", t.TransferSubnetOwnershipTx = "pvm.TransferSubnetOwnershipTx", t.EvmExportTx = "evm.ExportTx", t.EvmInput = "evm.Input", t.EvmOutput = "evm.Output", t.EvmImportTx = "evm.ImportTx";
}(Pe || (Pe = {}));
var De = Re = class extends Se {
  address;
  _type = Pe.Address;
  constructor(t) {
    super(), this.address = t;
  }
  static fromBytes(t) {
    return [new Re(t.slice(0, 20)), t.slice(20)];
  }
  [l](t, e) {
    return e.stylize(this.toJSON(), "string");
  }
  toJSON(t = "avax") {
    return this.toString(t);
  }
  static fromString(t) {
    return new Re(m(t));
  }
  static fromHex(t) {
    return new Re(ve(t));
  }
  toHex() {
    return Ie(this.address);
  }
  toBytes() {
    return Te(this.address, 20);
  }
  toString(t = "avax") {
    return g(t, this.address);
  }
  value() {
    return this.toString();
  }
};
De = Re = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], De);
var Ne = { encode: (t) => base58.encode(concatBytes(t, sha256(t).subarray(-4))), decode: (t) => base58.decode(t).subarray(0, -4) };
var _e = (t, e) => {
  let r;
  for (r = 0; r < t.length && r < e.length; r++) {
    const n = t[r], s = e[r];
    if (n !== s) return n - s;
  }
  return r === t.length && r === e.length ? 0 : r === t.length ? -1 : 1;
};
var Fe;
var Ve = Fe = class extends Se {
  idVal;
  _type = Pe.Id;
  constructor(t) {
    super(), this.idVal = t;
  }
  static fromBytes(t) {
    return [new Fe(t.slice(0, 32)), t.slice(32)];
  }
  static compare(t, e) {
    return _e(t.toBytes(), e.toBytes());
  }
  [l](t, e) {
    return e.stylize(this.toString(), "string");
  }
  toBytes() {
    return Te(this.idVal, 32);
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return Ne.encode(this.toBytes());
  }
  static fromString(t) {
    return Fe.fromBytes(Ne.decode(t))[0];
  }
  static fromHex(t) {
    return new Fe(ve(t));
  }
  value() {
    return this.toString();
  }
};
var Ue;
Ve = Fe = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], Ve);
var Ce = "NodeID-";
var Me = Ue = class extends Se {
  idVal;
  _type = Pe.NodeId;
  constructor(t) {
    super(), this.idVal = t;
  }
  static fromBytes(t) {
    return [new Ue(t.slice(0, 20)), t.slice(20)];
  }
  [l](t, e) {
    return e.stylize(this.toString(), "string");
  }
  toBytes() {
    return Te(this.idVal, 20);
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return Ce + Ne.encode(this.toBytes());
  }
  static fromString(t) {
    if (!t.includes(Ce)) throw new Error("ID is missing prefix");
    return this.fromBytes(Ne.decode(t.replace(Ce, "")))[0];
  }
  static fromHex(t) {
    return new Ue(ve(t));
  }
  value() {
    return this.toString();
  }
};
Me = Ue = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], Me);
var qe = new Ve(new Uint8Array(32));
var je = new Ve(new Uint8Array(32));
var Le = "avax";
var He = "cascade";
var Ze = "denali";
var Ke = "everest";
var Ge = "fuji";
var Xe = "testing";
var ze = "local";
var $e = "custom";
var Ye = { 1: Le, 2: He, 3: Ze, 4: Ke, 5: Ge, 10: Xe, 12345: ze };
var Je = (t) => Ye[t] ?? $e;
var We;
var Qe = Object.freeze({ __proto__: null, CascadeHRP: He, CascadeID: 2, CascadeName: "cascade", DenaliHRP: Ze, DenaliID: 3, DenaliName: "denali", EverestHRP: Ke, EverestID: 4, EverestName: "everest", FallbackHRP: $e, FujiHRP: Ge, FujiID: 5, FujiName: "fuji", LocalHRP: ze, LocalID: 12345, LocalName: "local", MainnetHRP: Le, MainnetID: 1, MainnetName: "mainnet", NetworkIDToHRP: Ye, PlatformChainID: je, PrimaryNetworkID: qe, TestnetID: 5, TestnetName: "testnet", UnitTestHRP: Xe, UnitTestID: 10, UnitTestName: "testing", getHRP: Je });
var tr = class {
  getVM() {
    return this.vm;
  }
};
var er = class extends tr {
  getInputs() {
    return this.baseTx?.inputs ?? [];
  }
  getBlockchainId() {
    return this.baseTx?.BlockchainId.toString() ?? "";
  }
  getSigIndices() {
    return this.getInputs().map((t) => t.sigIndicies()).filter((t) => void 0 !== t);
  }
};
var rr = We = class extends Se {
  int;
  _type = Pe.Int;
  constructor(t) {
    super(), this.int = t;
  }
  static fromBytes(t) {
    return [new We(Be(t.slice(0, 4))), t.slice(4)];
  }
  [l]() {
    return this.value();
  }
  toJSON() {
    return this.int;
  }
  toBytes() {
    return Te(ve(this.int.toString(16)), 4);
  }
  value() {
    return this.int;
  }
};
rr = We = f2([(t) => {
}, d("design:paramtypes", [Number])], rr);
var nr = (t) => new rr(t).toBytes();
var sr = (t, e, r) => ar(t, e.fromBytes, r);
var ar = (t, e, r) => {
  let n;
  [n, t] = rr.fromBytes(t);
  const s = [];
  for (let a = 0; a < n.value(); a++) {
    if (0 === t.length) throw new Error("not enough bytes");
    let n2;
    [n2, t] = e(t, r), s.push(n2);
  }
  return [s, t];
};
var ir = (t) => ({ fromBytes: (e, r) => sr(e, t, r) });
var or = { fromBytes: (t, e) => {
  if (!e) throw new Error("codec required when using unpackCodecList");
  return ar(t, e.UnpackPrefix, e);
} };
var cr = (t, e) => concatBytes(nr(t.length), ...t.map((t2) => t2.toBytes(e)));
function ur(t, e, r) {
  return [...e.map((e2) => {
    let n;
    if (!t.length) throw new Error("not enough bytes");
    return [n, t] = e2.fromBytes(t, r), n;
  }), t];
}
function fr(t, e) {
  return concatBytes(...t.map((t2) => Array.isArray(t2) ? cr(t2, e) : t2.toBytes(e)));
}
function dr(t, ...e) {
  return fr(e, t);
}
var lr;
var pr = lr = class extends Se {
  bigint;
  _type = Pe.BigIntPr;
  constructor(t) {
    super(), this.bigint = t;
  }
  [l]() {
    return this.bigint;
  }
  static fromBytes(t) {
    return [new lr(xe(t.slice(0, 8))), t.slice(8)];
  }
  toJSON() {
    return this.bigint.toString();
  }
  toBytes() {
    return Te(ve(this.bigint.toString(16)), 8);
  }
  value() {
    return this.bigint;
  }
};
var hr;
pr = lr = f2([(t) => {
}, d("design:paramtypes", [BigInt])], pr);
var mr = hr = class extends Se {
  byte;
  _type = Pe.Byte;
  constructor(t) {
    super(), this.byte = t;
  }
  static fromBytes(t) {
    return [new hr(t.slice(0, 1)), t.slice(1)];
  }
  toJSON() {
    return Ie(this.byte);
  }
  toBytes() {
    return this.byte;
  }
};
var br;
mr = hr = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], mr);
var gr = br = class extends Se {
  bytes;
  _type = Pe.Bytes;
  constructor(t) {
    super(), this.bytes = t;
  }
  toString(t = "utf8") {
    return bytesToString(t, this.bytes);
  }
  toJSON() {
    return Ie(this.bytes);
  }
  static fromBytes(t) {
    const [e, r] = rr.fromBytes(t);
    return [new br(r.slice(0, e.value())), r.slice(e.value())];
  }
  toBytes() {
    return concatBytes(nr(this.bytes.length), this.bytes);
  }
};
var yr;
gr = br = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], gr);
var wr = yr = class extends Se {
  short;
  _type = Pe.Short;
  constructor(t) {
    super(), this.short = t;
  }
  static fromBytes(t) {
    return [new yr(Be(t.slice(0, 2))), t.slice(2)];
  }
  toJSON() {
    return this.short.toString();
  }
  toBytes() {
    return Te(ve(this.short.toString(16)), 2);
  }
  value() {
    return this.short;
  }
};
var xr;
wr = yr = f2([(t) => {
}, d("design:paramtypes", [Number])], wr);
var Br = xr = class extends Se {
  string;
  _type = Pe.StringPr;
  constructor(t) {
    super(), this.string = t;
  }
  static fromBytes(t) {
    const [e, r] = wr.fromBytes(t);
    return [new xr(new TextDecoder().decode(r.slice(0, e.value()))), r.slice(e.value())];
  }
  toJSON() {
    return this.string;
  }
  toBytes() {
    return concatBytes(Te(ve(this.string.length.toString(16)), 2), new TextEncoder().encode(this.string));
  }
  value() {
    return this.string;
  }
};
function Ir(t) {
  return t._type === Pe.TransferOutput;
}
function vr(t) {
  return t._type === Pe.StakeableLockOut;
}
function Tr(t) {
  return t._type === Pe.OutputOwners;
}
function Sr(t) {
  return t._type === Pe.StakeableLockIn;
}
function Or(t) {
  return t._type === Pe.TransferInput;
}
var Er;
Br = xr = f2([(t) => {
}, d("design:paramtypes", [String])], Br);
var Ar = Er = class {
  sig;
  _type = Pe.Signature;
  constructor(t) {
    if (this.sig = t, 65 !== t.length) throw new Error("incorrect number of bytes for signature");
  }
  toJSON() {
    return bytesToHex(this.sig);
  }
  static fromJSON(t) {
    return new Er(ye(t));
  }
  static fromBytes(t) {
    return [new Er(t.slice(0, 65)), t.slice(65)];
  }
  [l](t, e) {
    return e.stylize(this.toString(), "string");
  }
  toString() {
    return Ie(this.sig);
  }
  toBytes() {
    return Te(this.sig, 65);
  }
};
var kr;
Ar = Er = f2([(t) => {
}, d("design:paramtypes", [Uint8Array])], Ar);
var Pr = kr = class {
  signatures;
  _type = Pe.Credential;
  constructor(t) {
    this.signatures = t;
  }
  static fromBytes(t, e) {
    const [r, n] = sr(t, Ar, e);
    return [new kr(r), n];
  }
  toJSON() {
    return this.signatures;
  }
  static fromJSON(t) {
    return new kr(t.map((t2) => Ar.fromJSON(t2)));
  }
  setSignature(t, e) {
    if (t >= this.signatures.length) throw new Error(`index ${t} is out of bounds for credential`);
    this.signatures[t] = new Ar(e);
  }
  getSignatures() {
    return this.signatures.map((t) => t.toString());
  }
  toBytes(t) {
    return cr(this.signatures, t);
  }
};
var Rr;
Pr = kr = f2([(t) => {
}, d("design:paramtypes", [Array])], Pr);
var Dr = Rr = class {
  sigIndices;
  _type = Pe.Input;
  constructor(t) {
    this.sigIndices = t;
  }
  static fromNative(t) {
    return new Rr(t.map((t2) => new rr(t2)));
  }
  static fromBytes(t) {
    const [e, r] = ur(t, [ir(rr)]);
    return [new Rr(e), r];
  }
  values() {
    return this.sigIndices.map((t) => t.value());
  }
  toBytes(t) {
    return cr(this.sigIndices, t);
  }
};
function Nr(t) {
  return t.map((t2) => new De(t2));
}
var _r;
Dr = Rr = f2([(t) => {
}, d("design:paramtypes", [Array])], Dr);
var Fr = _r = class {
  locktime;
  threshold;
  addrs;
  _type = Pe.OutputOwners;
  constructor(t, e, r) {
    this.locktime = t, this.threshold = e, this.addrs = r;
  }
  static fromNative(t, e = 0n, r = 1) {
    return new _r(new pr(e), new rr(r), Nr(t));
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [pr, rr, ir(De)], e);
    return [new _r(r, n, s), a];
  }
  toBytes(t) {
    return concatBytes(fr([this.locktime, this.threshold], t), cr(this.addrs, t));
  }
  equals(t) {
    return this.locktime.value() === t.locktime.value() && this.threshold.value() === t.threshold.value() && this.addrs.length === t.addrs.length && this.addrs.every((e, r) => e.value() === t.addrs[r].value());
  }
};
var Vr;
Fr = _r = f2([(t) => {
}, d("design:paramtypes", [pr, rr, Array])], Fr);
var Ur = Vr = class {
  outputOwners;
  _type = Pe.SecpMintOutput;
  constructor(t) {
    this.outputOwners = t;
  }
  static fromBytes(t, e) {
    let r;
    return [r, t] = Fr.fromBytes(t, e), [new Vr(r), t];
  }
  toBytes(t) {
    return this.outputOwners.toBytes(t);
  }
};
var Cr;
Ur = Vr = f2([(t) => {
}, d("design:paramtypes", [Fr])], Ur);
var Mr = Cr = class {
  amt;
  outputOwners;
  _type = Pe.TransferOutput;
  constructor(t, e) {
    this.amt = t, this.outputOwners = e;
  }
  amount() {
    return this.amt.value();
  }
  getLocktime() {
    return this.outputOwners.locktime.value();
  }
  getOwners() {
    return this.outputOwners.addrs.map((t) => t.toBytes());
  }
  getThreshold() {
    return this.outputOwners.threshold.value();
  }
  static fromBytes(t) {
    const [e, r, n] = ur(t, [pr, Fr]);
    return [new Cr(e, r), n];
  }
  toBytes(t) {
    return fr([this.amt, this.outputOwners], t);
  }
};
var qr;
Mr = Cr = f2([(t) => {
}, d("design:paramtypes", [pr, Fr])], Mr);
var jr = qr = class {
  input;
  mintOutput;
  transferOutput;
  _type = Pe.SecpMintOperation;
  constructor(t, e, r) {
    this.input = t, this.mintOutput = e, this.transferOutput = r;
  }
  static fromBytes(t) {
    const [e, r, n, s] = ur(t, [Dr, Ur, Mr]);
    return [new qr(e, r, n), s];
  }
  toBytes(t) {
    return concatBytes(this.input.toBytes(t), this.mintOutput.toBytes(t), this.transferOutput.toBytes(t));
  }
};
var Lr;
jr = qr = f2([(t) => {
}, d("design:paramtypes", [Dr, Ur, Mr])], jr);
var Hr = Lr = class {
  outputOwners;
  _type = Pe.OutputOwnersList;
  constructor(t) {
    this.outputOwners = t;
  }
  static fromBytes(t, e) {
    const [r, n] = sr(t, Fr, e);
    return [new Lr(r), n];
  }
  toBytes(t) {
    return cr(this.outputOwners, t);
  }
};
var Zr;
Hr = Lr = f2([(t) => {
}, d("design:paramtypes", [Array])], Hr);
var Kr2 = Zr = class {
  amt;
  input;
  _type = Pe.TransferInput;
  constructor(t, e) {
    this.amt = t, this.input = e;
  }
  static fromBytes(t) {
    const [e, r, n] = ur(t, [pr, Dr]);
    return [new Zr(e, r), n];
  }
  static fromNative(t, e) {
    return new Zr(new pr(t), Dr.fromNative(e));
  }
  sigIndicies() {
    return this.input.values();
  }
  amount() {
    return this.amt.value();
  }
  toBytes(t) {
    return fr([this.amt, this.input], t);
  }
};
Kr2 = Zr = f2([(t) => {
}, d("design:paramtypes", [pr, Dr])], Kr2);
var Gr = Object.freeze([Kr2, Ur, Mr, jr, Pr]);
var Xr;
var zr = Xr = class {
  txID;
  outputIdx;
  _type = Pe.UTXOID;
  constructor(t, e) {
    this.txID = t, this.outputIdx = e;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [Ve, rr], e);
    return [new Xr(r, n), s];
  }
  static fromNative(t, e) {
    return new Xr(Ve.fromString(t), new rr(e));
  }
  static compare(t, e) {
    const r = Ve.compare(t.txID, e.txID);
    return 0 !== r ? r : t.outputIdx.value() - e.outputIdx.value();
  }
  toBytes(t) {
    return fr([this.txID, this.outputIdx], t);
  }
  ID() {
    return Ne.encode(sha256(concatBytes(new pr(BigInt(this.outputIdx.value())).toBytes(), this.txID.toBytes())));
  }
};
var $r;
zr = Xr = f2([(t) => {
}, d("design:paramtypes", [Ve, rr])], zr);
var Yr = $r = class {
  utxoID;
  assetId;
  input;
  _type = Pe.TransferableInput;
  constructor(t, e, r) {
    this.utxoID = t, this.assetId = e, this.input = r;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [zr, Ve]), [a, i] = e.UnpackPrefix(s);
    return [new $r(r, n, a), i];
  }
  static fromNative(t, e, r, n, s) {
    return new $r(zr.fromNative(t, e), Ve.fromString(r), new Kr2(new pr(n), new Dr(s.map((t2) => new rr(t2)))));
  }
  static fromUtxoAndSigindicies(t, e) {
    const r = t.output;
    if (!Ir(r)) throw new Error("utxo.output must be Transferout");
    return new $r(t.utxoId, t.assetId, Kr2.fromNative(r.amount(), e));
  }
  sigIndicies() {
    const t = this.input;
    if (Or(t)) return t.sigIndicies();
    if (Sr(t)) {
      const e = t.transferableInput;
      if (Or(e)) return e.sigIndicies();
    }
    throw new Error("Input must be TransferInput or StakeableLockIn");
  }
  static compare(t, e) {
    return zr.compare(t.utxoID, e.utxoID);
  }
  amount() {
    return this.input.amount();
  }
  getAssetId() {
    return this.assetId.toString();
  }
  toBytes(t) {
    return concatBytes(fr([this.utxoID, this.assetId], t), t.PackPrefix(this.input));
  }
};
var Jr;
Yr = $r = f2([(t) => {
}, d("design:paramtypes", [zr, Ve, Object])], Yr);
var Wr = Jr = class {
  assetId;
  output;
  _type = Pe.TransferableOutput;
  constructor(t, e) {
    this.assetId = t, this.output = e;
  }
  static fromNative(t, e, r, n, s) {
    return new Jr(Ve.fromString(t), new Mr(new pr(e), Fr.fromNative(r, n, s)));
  }
  static fromBytes(t, e) {
    const [r, n] = ur(t, [Ve], e), [s, a] = e.UnpackPrefix(n);
    return [new Jr(r, s), a];
  }
  getAssetId() {
    return this.assetId.toString();
  }
  amount() {
    return this.output.amount();
  }
  toBytes(t) {
    return concatBytes(fr([this.assetId], t), t.PackPrefix(this.output));
  }
};
var Qr;
Wr = Jr = f2([(t) => {
}, d("design:paramtypes", [Ve, Object])], Wr);
var tn = Qr = class {
  NetworkId;
  BlockchainId;
  outputs;
  inputs;
  memo;
  _type = Pe.BaseTx;
  constructor(t, e, r, n, s) {
    this.NetworkId = t, this.BlockchainId = e, this.outputs = r, this.inputs = n, this.memo = s;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o] = ur(t, [rr, Ve, ir(Wr), ir(Yr), gr], e);
    return [new Qr(r, n, s, a, i), o];
  }
  static fromNative(t, e, r, n, s) {
    return new Qr(new rr(t), Ve.fromString(e), r, n, new gr(s));
  }
  toBytes(t) {
    return concatBytes(fr([this.NetworkId, this.BlockchainId], t), cr(this.outputs, t), cr(this.inputs, t), this.memo.toBytes());
  }
};
tn = Qr = f2([(t) => {
}, d("design:paramtypes", [rr, Ve, Array, Array, gr])], tn);
var en = class extends er {
  vm = Oe;
};
var rn;
var nn = rn = class extends en {
  baseTx;
  _type = Pe.AvmBaseTx;
  constructor(t) {
    super(), this.baseTx = t;
  }
  static fromBytes(t, e) {
    const [r, n] = ur(t, [tn], e);
    return [new rn(r), n];
  }
  toBytes(t) {
    return this.baseTx.toBytes(t);
  }
};
nn = rn = f2([(t) => {
}, d("design:paramtypes", [tn])], nn);
var sn = class {
  typeIdToType;
  _type = Pe.Codec;
  typeToTypeID;
  constructor(t) {
    this.typeIdToType = t, this.typeToTypeID = t.reduce((t2, e, r) => e ? t2.set(new e()._type, r) : t2, /* @__PURE__ */ new Map());
  }
  PackPrefix = (t) => {
    const e = this.typeToTypeID.get(t._type);
    if (void 0 === e) throw new Error(`can't marshal unregistered type: ${t._type.toString()}`);
    return concatBytes(nr(e), t.toBytes(this));
  };
  UnpackPrefix = (t) => {
    let e;
    [e, t] = ur(t, [rr]);
    const r = this.typeIdToType[e.value()];
    if (void 0 === r) throw new Error(`couldn't unmarshal interface: unknown type ID ${e.value()}`);
    const [n, s] = r.fromBytes(t, this);
    return [n, s];
  };
  static fromBytes(t, e) {
    if (!e) throw new Error("codec required");
    return e.UnpackPrefix(t);
  }
  toBytes() {
    throw new Error("not implemented");
  }
  PackPrefixList(t) {
    return concatBytes(nr(t.length), ...t.map((t2) => this.PackPrefix(t2)));
  }
};
sn = f2([(t) => {
}, d("design:paramtypes", [Array])], sn);
var an = class {
  codecs = {};
  RegisterCodec(t, e) {
    if (t in this.codecs) throw new Error("duplicated codec version");
    this.codecs[t] = e;
  }
  unpack = (t, e) => {
    const [r, n] = this.getCodecFromBuffer(t);
    return e.fromBytes(n, r)[0];
  };
  unpackTransaction = (t) => {
    const [e, r] = this.getCodecFromBuffer(t);
    return e.UnpackPrefix(r)[0];
  };
  getCodecFromBuffer(t) {
    const [e, r] = ur(t, [wr]);
    return [this.getCodecForVersion(e), r];
  }
  getCodecForVersion(t) {
    if (!this.codecs[t.value()]) throw new Error(`codec id(${t.value()}) not found`);
    return this.codecs[t.value()];
  }
  getDefaultCodec() {
    return this.getCodecForVersion(new wr(0));
  }
  getDefaultCodecId() {
    return new wr(0);
  }
  packCodec(t, e = 0) {
    const r = new wr(e), s = this.getCodecForVersion(r);
    return concatBytes(r.toBytes(), s.PackPrefix(t));
  }
};
var on;
var cn = on = class {
  input;
  groupId;
  payload;
  outputOwnerList;
  _type = Pe.NftFxMintOperation;
  constructor(t, e, r, n) {
    this.input = t, this.groupId = e, this.payload = r, this.outputOwnerList = n;
  }
  static fromBytes(t) {
    const [e, r, n, s, a] = ur(t, [Dr, rr, gr, Hr]);
    return [new on(e, r, n, s), a];
  }
  toBytes(t) {
    return fr([this.input, this.groupId, this.payload, this.outputOwnerList], t);
  }
};
var un;
cn = on = f2([(t) => {
}, d("design:paramtypes", [Dr, rr, gr, Hr])], cn);
var fn = un = class {
  groupId;
  outputOwners;
  _type = Pe.NftFxMintOutput;
  constructor(t, e) {
    this.groupId = t, this.outputOwners = e;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [rr, Fr], e);
    return [new un(r, n), s];
  }
  toBytes(t) {
    return fr([this.groupId, this.outputOwners], t);
  }
};
var dn;
fn = un = f2([(t) => {
}, d("design:paramtypes", [rr, Fr])], fn);
var ln = dn = class {
  groupId;
  payload;
  outputOwners;
  _type = Pe.NftFxTransferOutput;
  constructor(t, e, r) {
    this.groupId = t, this.payload = e, this.outputOwners = r;
  }
  static fromBytes(t) {
    const [e, r, n, s] = ur(t, [rr, gr, Fr]);
    return [new dn(e, r, n), s];
  }
  toBytes(t) {
    return fr([this.groupId, this.payload, this.outputOwners], t);
  }
};
var pn;
ln = dn = f2([(t) => {
}, d("design:paramtypes", [rr, gr, Fr])], ln);
var hn = pn = class {
  input;
  output;
  _type = Pe.NftFxTransferOperation;
  constructor(t, e) {
    this.input = t, this.output = e;
  }
  static fromBytes(t) {
    const [e, r, n] = ur(t, [Dr, ln]);
    return [new pn(e, r), n];
  }
  toBytes(t) {
    return fr([this.input, this.output], t);
  }
};
hn = pn = f2([(t) => {
}, d("design:paramtypes", [Dr, ln])], hn);
var mn = Object.freeze([fn, ln, cn, hn, class extends Pr {
  _type = Pe.NftFxCredential;
}]);
var bn;
var gn = bn = class {
  fxId;
  outputs;
  _type = Pe.InitialState;
  constructor(t, e) {
    this.fxId = t, this.outputs = e;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [rr, or], e);
    return [new bn(r, n), s];
  }
  toBytes(t) {
    return concatBytes(this.fxId.toBytes(), t.PackPrefixList(this.outputs));
  }
};
var yn;
gn = bn = f2([(t) => {
}, d("design:paramtypes", [rr, Array])], gn);
var wn = yn = class {
  baseTx;
  name;
  symbol;
  denomination;
  initialStates;
  _type = Pe.CreateAssetTx;
  constructor(t, e, r, n, s) {
    this.baseTx = t, this.name = e, this.symbol = r, this.denomination = n, this.initialStates = s;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o] = ur(t, [tn, Br, Br, mr, ir(gn)], e);
    return [new yn(r, n, s, a, i), o];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.name, this.symbol, this.denomination], t), cr(this.initialStates, t));
  }
};
var xn;
wn = yn = f2([(t) => {
}, d("design:paramtypes", [tn, Br, Br, mr, Array])], wn);
var Bn = xn = class extends en {
  baseTx;
  destination;
  outs;
  _type = Pe.AvmExportTx;
  constructor(t, e, r) {
    super(), this.baseTx = t, this.destination = e, this.outs = r;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [tn, Ve, ir(Wr)], e);
    return [new xn(r, n, s), a];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.destination], t), cr(this.outs, t));
  }
};
var In;
Bn = xn = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Array])], Bn);
var vn = In = class extends en {
  baseTx;
  sourceChain;
  ins;
  _type = Pe.AvmImportTx;
  constructor(t, e, r) {
    super(), this.baseTx = t, this.sourceChain = e, this.ins = r;
  }
  getSigIndices() {
    return this.ins.map((t) => t.sigIndicies()).concat(super.getSigIndices());
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [tn, Ve, ir(Yr)], e);
    return [new In(r, n, s), a];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.sourceChain], t), cr(this.ins, t));
  }
};
var Tn;
vn = In = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Array])], vn);
var Sn = Tn = class {
  assetId;
  UTXOId;
  transferOp;
  _type = Pe.TransferableOp;
  constructor(t, e, r) {
    this.assetId = t, this.UTXOId = e, this.transferOp = r;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [Ve, ir(zr), sn], e);
    return [new Tn(r, n, s), a];
  }
  toBytes(t) {
    return concatBytes(fr([this.assetId], t), cr(this.UTXOId, t), t.PackPrefix(this.transferOp));
  }
};
var On;
Sn = Tn = f2([(t) => {
}, d("design:paramtypes", [Ve, Array, Object])], Sn);
var En;
var An = On = class {
  baseTx;
  ops;
  _type = Pe.OperationTx;
  constructor(t, e) {
    this.baseTx = t, this.ops = e;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [tn, ir(Sn)], e);
    return [new On(r, n), s];
  }
  toBytes(t) {
    return concatBytes(this.baseTx.toBytes(t), cr(this.ops, t));
  }
};
An = On = f2([(t) => {
}, d("design:paramtypes", [tn, Array])], An);
var kn = () => En || (En = new an(), En.RegisterCodec(0, new sn([nn, wn, An, vn, Bn, ...Gr, ...mn])), En);
var Pn = class extends tr {
  vm = Ee;
  getBlockchainId = () => this.blockchainId.toString();
};
var Rn;
var Dn = class {
  static {
    Rn = this;
  }
  address;
  amount;
  assetId;
  nonce;
  _type = Pe.EvmInput;
  constructor(t, e, r, n) {
    this.address = t, this.amount = e, this.assetId = r, this.nonce = n;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [De, pr, Ve, pr], e);
    return [new Rn(r, n, s, a), i];
  }
  static compare = (t, e) => t.address.value() !== e.address.value() ? t.address.value().localeCompare(e.address.value()) : t.assetId.value().localeCompare(e.assetId.value());
  toBytes(t) {
    return dr(t, this.address, this.amount, this.assetId, this.nonce);
  }
};
var Nn;
Dn = Rn = f2([(t) => {
}, d("design:paramtypes", [De, pr, Ve, pr])], Dn);
var _n = Nn = class extends Pn {
  networkId;
  blockchainId;
  destinationChain;
  ins;
  exportedOutputs;
  _type = Pe.EvmExportTx;
  constructor(t, e, r, n, s) {
    super(), this.networkId = t, this.blockchainId = e, this.destinationChain = r, this.ins = n, this.exportedOutputs = s;
  }
  getSigIndices() {
    return [[0]];
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o] = ur(t, [rr, Ve, Ve, ir(Dn), ir(Wr)], e);
    return [new Nn(r, n, s, a, i), o];
  }
  toBytes(t) {
    return dr(t, this.networkId, this.blockchainId, this.destinationChain, this.ins, this.exportedOutputs);
  }
};
var Fn;
_n = Nn = f2([(t) => {
}, d("design:paramtypes", [rr, Ve, Ve, Array, Array])], _n);
var Vn = Fn = class {
  address;
  amount;
  assetId;
  _type = Pe.EvmOutput;
  constructor(t, e, r) {
    this.address = t, this.amount = e, this.assetId = r;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [De, pr, Ve], e);
    return [new Fn(r, n, s), a];
  }
  toBytes(t) {
    return dr(t, this.address, this.amount, this.assetId);
  }
};
var Un;
Vn = Fn = f2([(t) => {
}, d("design:paramtypes", [De, pr, Ve])], Vn);
var Cn;
var Mn = Un = class extends Pn {
  networkId;
  blockchainId;
  sourceChain;
  importedInputs;
  Outs;
  _type = Pe.EvmImportTx;
  constructor(t, e, r, n, s) {
    super(), this.networkId = t, this.blockchainId = e, this.sourceChain = r, this.importedInputs = n, this.Outs = s;
  }
  getSigIndices() {
    return this.importedInputs.map((t) => t.sigIndicies());
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o] = ur(t, [rr, Ve, Ve, ir(Yr), ir(Vn)], e);
    return [new Un(r, n, s, a, i), o];
  }
  toBytes(t) {
    return dr(t, this.networkId, this.blockchainId, this.sourceChain, this.importedInputs, this.Outs);
  }
};
Mn = Un = f2([(t) => {
}, d("design:paramtypes", [rr, Ve, Ve, Array, Array])], Mn);
var qn = new sn([Mn, _n, ...Array(3).fill(void 0), ...Gr, Dr, Fr]);
var jn = () => Cn || (Cn = new an(), Cn.RegisterCodec(0, qn), Cn);
var Ln = class extends er {
  vm = Ae;
};
var Hn;
var Zn = Hn = class {
  nodeId;
  startTime;
  endTime;
  weight;
  _type = Pe.Validator;
  constructor(t, e, r, n) {
    this.nodeId = t, this.startTime = e, this.endTime = r, this.weight = n;
  }
  static fromNative(t, e, r, n) {
    return new Hn(Me.fromString(t), new pr(e), new pr(r), new pr(n));
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [Me, pr, pr, pr], e);
    return [new Hn(r, n, s, a), i];
  }
  toBytes(t) {
    return fr([this.nodeId, this.startTime, this.endTime, this.weight], t);
  }
};
var Kn;
Zn = Hn = f2([(t) => {
}, d("design:paramtypes", [Me, pr, pr, pr])], Zn);
var Gn = Kn = class extends Ln {
  baseTx;
  validator;
  stake;
  rewardsOwner;
  _type = Pe.AddDelegatorTx;
  constructor(t, e, r, n) {
    super(), this.baseTx = t, this.validator = e, this.stake = r, this.rewardsOwner = n;
  }
  getRewardsOwner() {
    return this.rewardsOwner;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [tn, Zn, ir(Wr), sn], e);
    return [new Kn(r, n, s, a), i];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.validator, this.stake], t), t.PackPrefix(this.rewardsOwner));
  }
};
Gn = Kn = f2([(t) => {
}, d("design:paramtypes", [tn, Zn, Array, Object])], Gn);
var Xn = class extends Ln {
  getSubnetAuth() {
    return this.subnetAuth;
  }
  getSigIndices() {
    return [...this.getInputs().map((t) => t.sigIndicies()), this.getSubnetAuth().values()].filter((t) => void 0 !== t);
  }
};
var zn;
var $n = zn = class {
  validator;
  subnetId;
  _type = Pe.SubnetValidator;
  constructor(t, e) {
    this.validator = t, this.subnetId = e;
  }
  static fromNative(t, e, r, n, s) {
    return new zn(Zn.fromNative(t, e, r, n), s);
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [Zn, Ve], e);
    return [new zn(r, n), s];
  }
  toBytes(t) {
    return fr([this.validator, this.subnetId], t);
  }
};
var Yn;
$n = zn = f2([(t) => {
}, d("design:paramtypes", [Zn, Ve])], $n);
var Jn = Yn = class extends Xn {
  baseTx;
  subnetValidator;
  subnetAuth;
  _type = Pe.AddSubnetValidatorTx;
  constructor(t, e, r) {
    super(), this.baseTx = t, this.subnetValidator = e, this.subnetAuth = r;
  }
  getSubnetID() {
    return this.subnetValidator.subnetId;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [tn, $n, sn], e);
    return [new Yn(r, n, s), a];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetValidator], t), t.PackPrefix(this.subnetAuth));
  }
};
var Wn;
Jn = Yn = f2([(t) => {
}, d("design:paramtypes", [tn, $n, Object])], Jn);
var Qn = Wn = class extends Ln {
  baseTx;
  validator;
  stake;
  rewardsOwner;
  shares;
  _type = Pe.AddValidatorTx;
  constructor(t, e, r, n, s) {
    super(), this.baseTx = t, this.validator = e, this.stake = r, this.rewardsOwner = n, this.shares = s;
  }
  getRewardsOwner() {
    return this.rewardsOwner;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o] = ur(t, [tn, Zn, ir(Wr), sn, rr], e);
    return [new Wn(r, n, s, a, i), o];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.validator], t), cr(this.stake, t), t.PackPrefix(this.rewardsOwner), this.shares.toBytes());
  }
};
var ts;
Qn = Wn = f2([(t) => {
}, d("design:paramtypes", [tn, Zn, Array, Object, rr])], Qn);
var es = ts = class extends Ln {
  time;
  _type = Pe.AdvanceTimeTx;
  constructor(t) {
    super(), this.time = t;
  }
  baseTx = void 0;
  static fromBytes(t, e) {
    const [r, n] = ur(t, [pr], e);
    return [new ts(r), n];
  }
  toBytes(t) {
    return dr(t, this.time);
  }
};
var rs;
es = ts = f2([(t) => {
}, d("design:paramtypes", [pr])], es);
var ns = rs = class extends Xn {
  baseTx;
  subnetID;
  chainName;
  vmID;
  fxIds;
  genesisData;
  subnetAuth;
  _type = Pe.CreateChainTx;
  constructor(t, e, r, n, s, a, i) {
    super(), this.baseTx = t, this.subnetID = e, this.chainName = r, this.vmID = n, this.fxIds = s, this.genesisData = a, this.subnetAuth = i;
  }
  getSubnetID() {
    return this.subnetID;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o, c, u2] = ur(t, [tn, Ve, Br, Ve, ir(Ve), gr, sn], e);
    return [new rs(r, n, s, a, i, o, c), u2];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetID, this.chainName, this.vmID], t), cr(this.fxIds, t), this.genesisData.toBytes(), t.PackPrefix(this.subnetAuth));
  }
};
var ss;
ns = rs = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Br, Ve, Array, gr, Object])], ns);
var as = ss = class extends Ln {
  baseTx;
  subnetOwners;
  _type = Pe.CreateSubnetTx;
  constructor(t, e) {
    super(), this.baseTx = t, this.subnetOwners = e;
  }
  getSubnetOwners() {
    return this.subnetOwners;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [tn, sn], e);
    return [new ss(r, n), s];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx], t), t.PackPrefix(this.subnetOwners));
  }
};
var is;
as = ss = f2([(t) => {
}, d("design:paramtypes", [tn, Object])], as);
var os = is = class extends Ln {
  baseTx;
  destination;
  outs;
  _type = Pe.PvmExportTx;
  constructor(t, e, r) {
    super(), this.baseTx = t, this.destination = e, this.outs = r;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [tn, Ve, ir(Wr)], e);
    return [new is(r, n, s), a];
  }
  toBytes(t) {
    return dr(t, this.baseTx, this.destination, this.outs);
  }
};
var cs;
os = is = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Array])], os);
var us = cs = class extends Ln {
  baseTx;
  sourceChain;
  ins;
  _type = Pe.PvmImportTx;
  constructor(t, e, r) {
    super(), this.baseTx = t, this.sourceChain = e, this.ins = r;
  }
  getSigIndices() {
    return this.ins.map((t) => t.sigIndicies());
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [tn, Ve, ir(Yr)], e);
    return [new cs(r, n, s), a];
  }
  toBytes(t) {
    return fr([this.baseTx, this.sourceChain, this.ins], t);
  }
};
var fs;
us = cs = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Array])], us);
var ds = fs = class extends Ln {
  txId;
  _type = Pe.RewardValidatorTx;
  constructor(t) {
    super(), this.txId = t;
  }
  baseTx = void 0;
  static fromBytes(t, e) {
    const [r, n] = ur(t, [Ve], e);
    return [new fs(r), n];
  }
  toBytes(t) {
    return dr(t, this.txId);
  }
};
var ls;
ds = fs = f2([(t) => {
}, d("design:paramtypes", [Ve])], ds);
var ps = ls = class {
  lockTime;
  transferableInput;
  _type = Pe.StakeableLockIn;
  constructor(t, e) {
    this.lockTime = t, this.transferableInput = e;
  }
  static fromBytes(t, e) {
    const [r, n] = ur(t, [pr], e), [s, a] = e.UnpackPrefix(n);
    return [new ls(r, s), a];
  }
  amount() {
    return this.transferableInput.amount();
  }
  toBytes(t) {
    return concatBytes(dr(t, this.lockTime), t.PackPrefix(this.transferableInput));
  }
};
var hs;
ps = ls = f2([(t) => {
}, d("design:paramtypes", [pr, Object])], ps);
var ms = hs = class {
  lockTime;
  transferOut;
  _type = Pe.StakeableLockOut;
  constructor(t, e) {
    this.lockTime = t, this.transferOut = e;
  }
  amount() {
    return this.transferOut.amount();
  }
  getStakeableLocktime() {
    return this.lockTime.value();
  }
  getLocktime() {
    return this.lockTime.value();
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [pr, sn], e);
    return [new hs(r, n), s];
  }
  getOwners() {
    if (Ir(this.transferOut)) return this.transferOut.getOwners();
    throw new Error("Unable to get owners.");
  }
  getOutputOwners() {
    if (Ir(this.transferOut)) return this.transferOut.outputOwners;
    throw new Error("Unable to get output owners.");
  }
  toBytes(t) {
    return concatBytes(dr(t, this.lockTime), t.PackPrefix(this.transferOut));
  }
};
var bs;
ms = hs = f2([(t) => {
}, d("design:paramtypes", [pr, Object])], ms);
var gs = bs = class extends Ln {
  baseTx;
  subnetValidator;
  signer;
  stake;
  validatorRewardsOwner;
  delegatorRewardsOwner;
  shares;
  _type = Pe.AddPermissionlessValidatorTx;
  constructor(t, e, r, n, s, a, i) {
    super(), this.baseTx = t, this.subnetValidator = e, this.signer = r, this.stake = n, this.validatorRewardsOwner = s, this.delegatorRewardsOwner = a, this.shares = i;
  }
  getValidatorRewardsOwner() {
    return this.validatorRewardsOwner;
  }
  getDelegatorRewardsOwner() {
    return this.delegatorRewardsOwner;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o, c, u2] = ur(t, [tn, $n, sn, ir(Wr), sn, sn, rr], e);
    return [new bs(r, n, s, a, i, o, c), u2];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetValidator], t), t.PackPrefix(this.signer), cr(this.stake, t), t.PackPrefix(this.validatorRewardsOwner), t.PackPrefix(this.delegatorRewardsOwner), this.shares.toBytes());
  }
};
var ys;
gs = bs = f2([(t) => {
}, d("design:paramtypes", [tn, $n, Function, Array, Object, Object, rr])], gs);
var ws = ys = class extends Ln {
  baseTx;
  subnetValidator;
  stake;
  delegatorRewardsOwner;
  _type = Pe.AddPermissionlessDelegatorTx;
  constructor(t, e, r, n) {
    super(), this.baseTx = t, this.subnetValidator = e, this.stake = r, this.delegatorRewardsOwner = n;
  }
  getDelegatorRewardsOwner() {
    return this.delegatorRewardsOwner;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [tn, $n, ir(Wr), sn], e);
    return [new ys(r, n, s, a), i];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetValidator], t), cr(this.stake, t), t.PackPrefix(this.delegatorRewardsOwner));
  }
};
ws = ys = f2([(t) => {
}, d("design:paramtypes", [tn, $n, Array, Object])], ws);
var xs = 2n ** 256n;
var Bs = xs - 0x1000003d1n;
var Is = xs - 0x14551231950b75fc4402da1732fc9bebfn;
var vs = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n;
var Ts = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n;
var Ss = { p: Bs, n: Is, a: 0n, b: 7n, Gx: vs, Gy: Ts };
var Os = 32;
var Es = (t) => Vs(Vs(t * t) * t + Ss.b);
var As = (t = "") => {
  throw new Error(t);
};
var ks = (t) => "bigint" == typeof t;
var Ps = (t) => "string" == typeof t;
var Rs = (t) => ks(t) && 0n < t && t < Bs;
var Ds = (t) => ks(t) && 0n < t && t < Is;
var Ns = (t, e) => !(t instanceof Uint8Array) || "number" == typeof e && e > 0 && t.length !== e ? As("Uint8Array expected") : t;
var _s = (t) => new Uint8Array(t);
var Fs = (t, e) => Ns(Ps(t) ? Zs(t) : _s(t), e);
var Vs = (t, e = Bs) => {
  let r = t % e;
  return r >= 0n ? r : e + r;
};
var Us = (t) => t instanceof Ms ? t : As("Point expected");
var Cs;
var Ms = class _Ms {
  constructor(t, e, r) {
    this.px = t, this.py = e, this.pz = r;
  }
  static fromAffine(t) {
    return new _Ms(t.x, t.y, 1n);
  }
  static fromHex(t) {
    let e;
    const r = (t = Fs(t))[0], n = t.subarray(1), s = Gs(n, 0, Os), a = t.length;
    if (33 === a && [2, 3].includes(r)) {
      Rs(s) || As("Point hex invalid: x not FE");
      let t2 = Js(Es(s));
      1 == (1 & r) !== (1n === (1n & t2)) && (t2 = Vs(-t2)), e = new _Ms(s, t2, 1n);
    }
    return 65 === a && 4 === r && (e = new _Ms(s, Gs(n, Os, 2 * Os), 1n)), e ? e.ok() : As("Point is not on curve");
  }
  static fromPrivateKey(t) {
    return qs.mul(Ws(t));
  }
  get x() {
    return this.aff().x;
  }
  get y() {
    return this.aff().y;
  }
  equals(t) {
    const { px: e, py: r, pz: n } = this, { px: s, py: a, pz: i } = Us(t), o = Vs(e * i), c = Vs(s * n), u2 = Vs(r * i), f3 = Vs(a * n);
    return o === c && u2 === f3;
  }
  negate() {
    return new _Ms(this.px, Vs(-this.py), this.pz);
  }
  double() {
    return this.add(this);
  }
  add(t) {
    const { px: e, py: r, pz: n } = this, { px: s, py: a, pz: i } = Us(t), { a: o, b: c } = Ss;
    let u2 = 0n, f3 = 0n, d2 = 0n;
    const l2 = Vs(3n * c);
    let p2 = Vs(e * s), h2 = Vs(r * a), m2 = Vs(n * i), b2 = Vs(e + r), g2 = Vs(s + a);
    b2 = Vs(b2 * g2), g2 = Vs(p2 + h2), b2 = Vs(b2 - g2), g2 = Vs(e + n);
    let y2 = Vs(s + i);
    return g2 = Vs(g2 * y2), y2 = Vs(p2 + m2), g2 = Vs(g2 - y2), y2 = Vs(r + n), u2 = Vs(a + i), y2 = Vs(y2 * u2), u2 = Vs(h2 + m2), y2 = Vs(y2 - u2), d2 = Vs(o * g2), u2 = Vs(l2 * m2), d2 = Vs(u2 + d2), u2 = Vs(h2 - d2), d2 = Vs(h2 + d2), f3 = Vs(u2 * d2), h2 = Vs(p2 + p2), h2 = Vs(h2 + p2), m2 = Vs(o * m2), g2 = Vs(l2 * g2), h2 = Vs(h2 + m2), m2 = Vs(p2 - m2), m2 = Vs(o * m2), g2 = Vs(g2 + m2), p2 = Vs(h2 * g2), f3 = Vs(f3 + p2), p2 = Vs(y2 * g2), u2 = Vs(b2 * u2), u2 = Vs(u2 - p2), p2 = Vs(b2 * h2), d2 = Vs(y2 * d2), d2 = Vs(d2 + p2), new _Ms(u2, f3, d2);
  }
  mul(t, e = true) {
    if (!e && 0n === t) return js;
    if (Ds(t) || As("invalid scalar"), this.equals(qs)) return la(t).p;
    let r = js, n = qs;
    for (let s = this; t > 0n; s = s.double(), t >>= 1n) 1n & t ? r = r.add(s) : e && (n = n.add(s));
    return r;
  }
  mulAddQUns(t, e, r) {
    return this.mul(e, false).add(t.mul(r, false)).ok();
  }
  toAffine() {
    const { px: t, py: e, pz: r } = this;
    if (this.equals(js)) return { x: 0n, y: 0n };
    if (1n === r) return { x: t, y: e };
    const n = Ys(r);
    return 1n !== Vs(r * n) && As("invalid inverse"), { x: Vs(t * n), y: Vs(e * n) };
  }
  assertValidity() {
    const { x: t, y: e } = this.aff();
    return Rs(t) && Rs(e) || As("Point invalid: x or y"), Vs(e * e) === Es(t) ? this : As("Point invalid: not on curve");
  }
  multiply(t) {
    return this.mul(t);
  }
  aff() {
    return this.toAffine();
  }
  ok() {
    return this.assertValidity();
  }
  toHex(t = true) {
    const { x: e, y: r } = this.aff();
    return (t ? 0n === (1n & r) ? "02" : "03" : "04") + zs(e) + (t ? "" : zs(r));
  }
  toRawBytes(t = true) {
    return Zs(this.toHex(t));
  }
};
Ms.BASE = new Ms(vs, Ts, 1n), Ms.ZERO = new Ms(0n, 1n, 0n);
var { BASE: qs, ZERO: js } = Ms;
var Ls = (t, e) => t.toString(16).padStart(e, "0");
var Hs = (t) => Array.from(t).map((t2) => Ls(t2, 2)).join("");
var Zs = (t) => {
  const e = t.length;
  (!Ps(t) || e % 2) && As("hex invalid 1");
  const r = _s(e / 2);
  for (let e2 = 0; e2 < r.length; e2++) {
    const n = 2 * e2, s = t.slice(n, n + 2), a = Number.parseInt(s, 16);
    (Number.isNaN(a) || a < 0) && As("hex invalid 2"), r[e2] = a;
  }
  return r;
};
var Ks = (t) => BigInt("0x" + (Hs(t) || "0"));
var Gs = (t, e, r) => Ks(t.slice(e, r));
var Xs = (t) => ks(t) && t >= 0n && t < xs ? Zs(Ls(t, 2 * Os)) : As("bigint expected");
var zs = (t) => Hs(Xs(t));
var $s = (...t) => {
  const e = _s(t.reduce((t2, e2) => t2 + Ns(e2).length, 0));
  let r = 0;
  return t.forEach((t2) => {
    e.set(t2, r), r += t2.length;
  }), e;
};
var Ys = (t, e = Bs) => {
  (0n === t || e <= 0n) && As("no inverse n=" + t + " mod=" + e);
  let r = Vs(t, e), n = e, s = 0n, a = 1n;
  for (; 0n !== r; ) {
    const t2 = n % r, e2 = s - a * (n / r);
    n = r, r = t2, s = a, a = e2;
  }
  return 1n === n ? Vs(s, e) : As("no inverse");
};
var Js = (t) => {
  let e = 1n;
  for (let r = t, n = (Bs + 1n) / 4n; n > 0n; n >>= 1n) 1n & n && (e = e * r % Bs), r = r * r % Bs;
  return Vs(e * e) === t ? e : As("sqrt invalid");
};
var Ws = (t) => (ks(t) || (t = Ks(Fs(t, Os))), Ds(t) ? t : As("private key out of range"));
var Qs = (t) => t > Is >> 1n;
var ta = class _ta {
  constructor(t, e, r) {
    this.r = t, this.s = e, this.recovery = r, this.assertValidity();
  }
  static fromCompact(t) {
    return t = Fs(t, 64), new _ta(Gs(t, 0, Os), Gs(t, Os, 2 * Os));
  }
  assertValidity() {
    return Ds(this.r) && Ds(this.s) ? this : As();
  }
  addRecoveryBit(t) {
    return new _ta(this.r, this.s, t);
  }
  hasHighS() {
    return Qs(this.s);
  }
  recoverPublicKey(t) {
    const { r: e, s: r, recovery: n } = this;
    [0, 1, 2, 3].includes(n) || As("recovery id invalid");
    const s = ra(Fs(t, 32)), a = 2 === n || 3 === n ? e + Is : e;
    a >= Bs && As("q.x invalid");
    const i = 0 == (1 & n) ? "02" : "03", o = Ms.fromHex(i + zs(a)), c = Ys(a, Is), u2 = Vs(-s * c, Is), f3 = Vs(r * c, Is);
    return qs.mulAddQUns(o, u2, f3);
  }
  toCompactRawBytes() {
    return Zs(this.toCompactHex());
  }
  toCompactHex() {
    return zs(this.r) + zs(this.s);
  }
};
var ea = (t) => {
  const e = 8 * t.length - 256, r = Ks(t);
  return e > 0 ? r >> BigInt(e) : r;
};
var ra = (t) => Vs(ea(t), Is);
var na = (t) => Xs(t);
var sa = () => "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
var aa;
var ia = { lowS: true };
var oa = { lowS: true };
async function ca(t, e, r = ia) {
  const { seed: n, k2sig: s } = function(t2, e2, r2 = ia) {
    ["der", "recovered", "canonical"].some((t3) => t3 in r2) && As("sign() legacy options not supported");
    let { lowS: n2 } = r2;
    null == n2 && (n2 = true);
    const s2 = ra(Fs(t2)), a = na(s2), i = Ws(e2), o = [na(i), a];
    let c = r2.extraEntropy;
    if (c) {
      true === c && (c = fa.randomBytes(Os));
      const t3 = Fs(c);
      t3.length !== Os && As(), o.push(t3);
    }
    const u2 = s2;
    return { seed: $s(...o), k2sig: (t3) => {
      const e3 = ea(t3);
      if (!Ds(e3)) return;
      const r3 = Ys(e3, Is), s3 = qs.mul(e3).aff(), a2 = Vs(s3.x, Is);
      if (0n === a2) return;
      const o2 = Vs(r3 * Vs(u2 + Vs(i * a2, Is), Is), Is);
      if (0n === o2) return;
      let c2 = o2, f3 = (s3.x === a2 ? 0 : 2) | Number(1n & s3.y);
      return n2 && Qs(o2) && (c2 = Vs(-o2, Is), f3 ^= 1), new ta(a2, c2, f3);
    } };
  }(t, e, r);
  return function(t2) {
    let e2 = _s(Os), r2 = _s(Os), n2 = 0;
    const s2 = () => {
      e2.fill(1), r2.fill(0), n2 = 0;
    }, a = "drbg: tried 1000 values";
    if (t2) {
      const t3 = (...t4) => fa.hmacSha256Async(r2, e2, ...t4), i = async (n3 = _s()) => {
        r2 = await t3(_s([0]), n3), e2 = await t3(), 0 !== n3.length && (r2 = await t3(_s([1]), n3), e2 = await t3());
      }, o = async () => (n2++ >= 1e3 && As(a), e2 = await t3(), e2);
      return async (t4, e3) => {
        let r3;
        for (s2(), await i(t4); !(r3 = e3(await o())); ) await i();
        return s2(), r3;
      };
    }
    {
      const t3 = (...t4) => {
        const n3 = aa;
        return n3 || As("etc.hmacSha256Sync not set"), n3(r2, e2, ...t4);
      }, i = (n3 = _s()) => {
        r2 = t3(_s([0]), n3), e2 = t3(), 0 !== n3.length && (r2 = t3(_s([1]), n3), e2 = t3());
      }, o = () => (n2++ >= 1e3 && As(a), e2 = t3(), e2);
      return (t4, e3) => {
        let r3;
        for (s2(), i(t4); !(r3 = e3(o())); ) i();
        return s2(), r3;
      };
    }
  }(true)(n, s);
}
function ua(t) {
  t = Fs(t);
  const e = Os + 8;
  (t.length < e || t.length > 1024) && As("expected proper params");
  const r = Vs(Ks(t), Is - 1n) + 1n;
  return Xs(r);
}
var fa = { hexToBytes: Zs, bytesToHex: Hs, concatBytes: $s, bytesToNumberBE: Ks, numberToBytesBE: Xs, mod: Vs, invert: Ys, hmacSha256Async: async (t, ...e) => {
  const r = sa();
  if (!r) return As("etc.hmacSha256Async not set");
  const n = r.subtle, s = await n.importKey("raw", t, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
  return _s(await n.sign("HMAC", s, $s(...e)));
}, hmacSha256Sync: aa, hashToPrivateKey: ua, randomBytes: (t) => {
  const e = sa();
  return e || As("crypto.getRandomValues must be defined"), e.getRandomValues(_s(t));
} };
var da = { normPrivateKeyToScalar: Ws, isValidPrivateKey: (t) => {
  try {
    return !!Ws(t);
  } catch (t2) {
    return false;
  }
}, randomPrivateKey: () => ua(fa.randomBytes(Os + 8)), precompute: (t = 8, e = qs) => (e.multiply(3n), e) };
Object.defineProperties(fa, { hmacSha256Sync: { configurable: false, get: () => aa, set(t) {
  aa || (aa = t);
} } });
var la = (t) => {
  const e = Cs || (Cs = (() => {
    const t2 = [];
    let e2 = qs, r2 = e2;
    for (let n2 = 0; n2 < 33; n2++) {
      r2 = e2, t2.push(r2);
      for (let n3 = 1; n3 < 128; n3++) r2 = r2.add(e2), t2.push(r2);
      e2 = r2.double();
    }
    return t2;
  })()), r = (t2, e2) => {
    let r2 = e2.negate();
    return t2 ? r2 : e2;
  };
  let n = js, s = qs;
  const a = BigInt(255), i = BigInt(8);
  for (let o = 0; o < 33; o++) {
    const c = 128 * o;
    let u2 = Number(t & a);
    t >>= i, u2 > 128 && (u2 -= 256, t += 1n);
    const f3 = c, d2 = c + Math.abs(u2) - 1, l2 = o % 2 != 0, p2 = u2 < 0;
    0 === u2 ? s = s.add(r(l2, e[f3])) : n = n.add(r(p2, e[d2]));
  }
  return { p: n, f: s };
};
function pa(t, e) {
  return ha(sha256(t), e);
}
async function ha(t, e) {
  const r = await ca(t, e);
  if (void 0 !== r.recovery) return concatBytes(r.toCompactRawBytes(), new Uint8Array([r.recovery]));
  throw new Error("Recovery bit is missing.");
}
function ma(t, e) {
  const r = e.slice(-1);
  return ta.fromCompact(e.slice(0, -1)).addRecoveryBit(r[0]).recoverPublicKey(t).toRawBytes(true);
}
function ba(t) {
  return function(t2, e = true) {
    return Ms.fromPrivateKey(t2).toRawBytes(e);
  }(t, true);
}
function ga(t) {
  return ripemd160(sha256(t));
}
function ya(t) {
  return ve(we.fromPublicKey(t));
}
var wa = Object.freeze({ __proto__: null, getPublicKey: ba, publicKeyBytesToAddress: ga, publicKeyToEthAddress: ya, randomPrivateKey: function() {
  return da.randomPrivateKey();
}, recoverPublicKey: ma, sign: pa, signHash: ha, verify: function(t, e, r) {
  return function(t2, e2, r2, n = oa) {
    let s, a, i, { lowS: o } = n;
    null == o && (o = true), "strict" in n && As("verify() legacy options not supported");
    const c = t2 && "object" == typeof t2 && "r" in t2;
    c || Fs(t2).length === 2 * Os || As("signature must be 64 bytes");
    try {
      s = c ? new ta(t2.r, t2.s).assertValidity() : ta.fromCompact(t2), a = ra(Fs(e2, Os)), i = r2 instanceof Ms ? r2.ok() : Ms.fromHex(r2);
    } catch (t3) {
      return false;
    }
    if (!s) return false;
    const { r: u2, s: f3 } = s;
    if (o && Qs(f3)) return false;
    let d2;
    try {
      const t3 = Ys(f3, Is), e3 = Vs(a * t3, Is), r3 = Vs(u2 * t3, Is);
      d2 = qs.mulAddQUns(i, e3, r3).aff();
    } catch (t3) {
      return false;
    }
    return !!d2 && Vs(d2.x, Is) === u2;
  }(t.slice(0, -1), e, r);
} });
var xa = BigInt(2);
var Ba = BigInt(3);
var Ia = BigInt(0);
var va = BigInt(1);
var Ta = BigInt(2);
var Sa = BigInt(3);
var Oa = BigInt(4);
var Ea = BigInt(8);
var Aa = BigInt(16);
var ka = BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab");
var Pa = Dt(ka);
var Ra = Dt(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"));
var Da = ({ c0: t, c1: e }, { c0: r, c1: n }) => ({ c0: Pa.add(t, r), c1: Pa.add(e, n) });
var Na = ({ c0: t, c1: e }, { c0: r, c1: n }) => ({ c0: Pa.sub(t, r), c1: Pa.sub(e, n) });
var _a = ({ c0: t, c1: e }, r) => {
  if ("bigint" == typeof r) return { c0: Pa.mul(t, r), c1: Pa.mul(e, r) };
  const { c0: n, c1: s } = r;
  let a = Pa.mul(t, n), i = Pa.mul(e, s);
  return { c0: Pa.sub(a, i), c1: Pa.sub(Pa.mul(Pa.add(t, e), Pa.add(n, s)), Pa.add(a, i)) };
};
var Fa = ({ c0: t, c1: e }) => {
  const r = Pa.add(t, e), n = Pa.sub(t, e), s = Pa.add(t, t);
  return { c0: Pa.mul(r, n), c1: Pa.mul(s, e) };
};
var Va = ka * ka;
var Ua = { ORDER: Va, BITS: it(Va), BYTES: Math.ceil(it(Va) / 8), MASK: ct(it(Va)), ZERO: { c0: Pa.ZERO, c1: Pa.ZERO }, ONE: { c0: Pa.ONE, c1: Pa.ZERO }, create: (t) => t, isValid: ({ c0: t, c1: e }) => "bigint" == typeof t && "bigint" == typeof e, is0: ({ c0: t, c1: e }) => Pa.is0(t) && Pa.is0(e), eql: ({ c0: t, c1: e }, { c0: r, c1: n }) => Pa.eql(t, r) && Pa.eql(e, n), neg: ({ c0: t, c1: e }) => ({ c0: Pa.neg(t), c1: Pa.neg(e) }), pow: (t, e) => kt(Ua, t, e), invertBatch: (t) => Pt(Ua, t), add: Da, sub: Na, mul: _a, sqr: Fa, addN: Da, subN: Na, mulN: _a, sqrN: Fa, div: (t, e) => Ua.mul(t, "bigint" == typeof e ? Pa.inv(Pa.create(e)) : Ua.inv(e)), inv: ({ c0: t, c1: e }) => {
  const r = Pa.inv(Pa.create(t * t + e * e));
  return { c0: Pa.mul(r, Pa.create(t)), c1: Pa.mul(r, Pa.create(-e)) };
}, sqrt: (t) => {
  if (Ua.eql(t, Ua.ZERO)) return Ua.ZERO;
  const e = Ua.pow(t, (Ua.ORDER + Ea) / Aa), r = Ua.div(Ua.sqr(e), t), n = qa, s = [n[0], n[2], n[4], n[6]].find((t2) => Ua.eql(t2, r));
  if (!s) throw new Error("No root");
  const a = n.indexOf(s), i = n[a / 2];
  if (!i) throw new Error("Invalid root");
  const o = Ua.div(e, i), c = Ua.neg(o), { re: u2, im: f3 } = Ua.reim(o), { re: d2, im: l2 } = Ua.reim(c);
  return f3 > l2 || f3 === l2 && u2 > d2 ? o : c;
}, isOdd: (t) => {
  const { re: e, im: r } = Ua.reim(t);
  return BigInt(e % Ta || e === Ia && r % Ta) == va;
}, fromBytes(t) {
  if (t.length !== Ua.BYTES) throw new Error(`fromBytes wrong length=${t.length}`);
  return { c0: Pa.fromBytes(t.subarray(0, Pa.BYTES)), c1: Pa.fromBytes(t.subarray(Pa.BYTES)) };
}, toBytes: ({ c0: t, c1: e }) => st(Pa.toBytes(t), Pa.toBytes(e)), cmov: ({ c0: t, c1: e }, { c0: r, c1: n }, s) => ({ c0: Pa.cmov(t, r, s), c1: Pa.cmov(e, n, s) }), reim: ({ c0: t, c1: e }) => ({ re: t, im: e }), mulByNonresidue: ({ c0: t, c1: e }) => ({ c0: Pa.sub(t, e), c1: Pa.add(t, e) }), multiplyByB: ({ c0: t, c1: e }) => {
  let r = Pa.mul(t, Oa), n = Pa.mul(e, Oa);
  return { c0: Pa.sub(r, n), c1: Pa.add(r, n) };
}, fromBigTuple: (t) => {
  if (2 !== t.length) throw new Error("Invalid tuple");
  const e = t.map((t2) => Pa.create(t2));
  return { c0: e[0], c1: e[1] };
}, frobeniusMap: ({ c0: t, c1: e }, r) => ({ c0: t, c1: Pa.mul(e, Ca[r % 2]) }) };
var Ca = [BigInt("0x1"), BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa")].map((t) => Pa.create(t));
var Ma = BigInt("0x6af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09");
var qa = [[va, Ia], [Ma, -Ma], [Ia, va], [Ma, Ma], [-va, Ia], [-Ma, Ma], [Ia, -va], [-Ma, -Ma]].map((t) => Ua.fromBigTuple(t));
var ja = ({ c0: t, c1: e, c2: r }, { c0: n, c1: s, c2: a }) => ({ c0: Ua.add(t, n), c1: Ua.add(e, s), c2: Ua.add(r, a) });
var La = ({ c0: t, c1: e, c2: r }, { c0: n, c1: s, c2: a }) => ({ c0: Ua.sub(t, n), c1: Ua.sub(e, s), c2: Ua.sub(r, a) });
var Ha = ({ c0: t, c1: e, c2: r }, n) => {
  if ("bigint" == typeof n) return { c0: Ua.mul(t, n), c1: Ua.mul(e, n), c2: Ua.mul(r, n) };
  const { c0: s, c1: a, c2: i } = n, o = Ua.mul(t, s), c = Ua.mul(e, a), u2 = Ua.mul(r, i);
  return { c0: Ua.add(o, Ua.mulByNonresidue(Ua.sub(Ua.mul(Ua.add(e, r), Ua.add(a, i)), Ua.add(c, u2)))), c1: Ua.add(Ua.sub(Ua.mul(Ua.add(t, e), Ua.add(s, a)), Ua.add(o, c)), Ua.mulByNonresidue(u2)), c2: Ua.sub(Ua.add(c, Ua.mul(Ua.add(t, r), Ua.add(s, i))), Ua.add(o, u2)) };
};
var Za = ({ c0: t, c1: e, c2: r }) => {
  let n = Ua.sqr(t), s = Ua.mul(Ua.mul(t, e), Ta), a = Ua.mul(Ua.mul(e, r), Ta), i = Ua.sqr(r);
  return { c0: Ua.add(Ua.mulByNonresidue(a), n), c1: Ua.add(Ua.mulByNonresidue(i), s), c2: Ua.sub(Ua.sub(Ua.add(Ua.add(s, Ua.sqr(Ua.add(Ua.sub(t, e), r))), a), n), i) };
};
var Ka = { ORDER: Ua.ORDER, BITS: 3 * Ua.BITS, BYTES: 3 * Ua.BYTES, MASK: ct(3 * Ua.BITS), ZERO: { c0: Ua.ZERO, c1: Ua.ZERO, c2: Ua.ZERO }, ONE: { c0: Ua.ONE, c1: Ua.ZERO, c2: Ua.ZERO }, create: (t) => t, isValid: ({ c0: t, c1: e, c2: r }) => Ua.isValid(t) && Ua.isValid(e) && Ua.isValid(r), is0: ({ c0: t, c1: e, c2: r }) => Ua.is0(t) && Ua.is0(e) && Ua.is0(r), neg: ({ c0: t, c1: e, c2: r }) => ({ c0: Ua.neg(t), c1: Ua.neg(e), c2: Ua.neg(r) }), eql: ({ c0: t, c1: e, c2: r }, { c0: n, c1: s, c2: a }) => Ua.eql(t, n) && Ua.eql(e, s) && Ua.eql(r, a), sqrt: () => {
  throw new Error("Not implemented");
}, div: (t, e) => Ka.mul(t, "bigint" == typeof e ? Pa.inv(Pa.create(e)) : Ka.inv(e)), pow: (t, e) => kt(Ka, t, e), invertBatch: (t) => Pt(Ka, t), add: ja, sub: La, mul: Ha, sqr: Za, addN: ja, subN: La, mulN: Ha, sqrN: Za, inv: ({ c0: t, c1: e, c2: r }) => {
  let n = Ua.sub(Ua.sqr(t), Ua.mulByNonresidue(Ua.mul(r, e))), s = Ua.sub(Ua.mulByNonresidue(Ua.sqr(r)), Ua.mul(t, e)), a = Ua.sub(Ua.sqr(e), Ua.mul(t, r)), i = Ua.inv(Ua.add(Ua.mulByNonresidue(Ua.add(Ua.mul(r, s), Ua.mul(e, a))), Ua.mul(t, n)));
  return { c0: Ua.mul(i, n), c1: Ua.mul(i, s), c2: Ua.mul(i, a) };
}, fromBytes: (t) => {
  if (t.length !== Ka.BYTES) throw new Error(`fromBytes wrong length=${t.length}`);
  return { c0: Ua.fromBytes(t.subarray(0, Ua.BYTES)), c1: Ua.fromBytes(t.subarray(Ua.BYTES, 2 * Ua.BYTES)), c2: Ua.fromBytes(t.subarray(2 * Ua.BYTES)) };
}, toBytes: ({ c0: t, c1: e, c2: r }) => st(Ua.toBytes(t), Ua.toBytes(e), Ua.toBytes(r)), cmov: ({ c0: t, c1: e, c2: r }, { c0: n, c1: s, c2: a }, i) => ({ c0: Ua.cmov(t, n, i), c1: Ua.cmov(e, s, i), c2: Ua.cmov(r, a, i) }), fromBigSix: (t) => {
  if (!Array.isArray(t) || 6 !== t.length) throw new Error("Invalid Fp6 usage");
  return { c0: Ua.fromBigTuple(t.slice(0, 2)), c1: Ua.fromBigTuple(t.slice(2, 4)), c2: Ua.fromBigTuple(t.slice(4, 6)) };
}, frobeniusMap: ({ c0: t, c1: e, c2: r }, n) => ({ c0: Ua.frobeniusMap(t, n), c1: Ua.mul(Ua.frobeniusMap(e, n), Ga[n % 6]), c2: Ua.mul(Ua.frobeniusMap(r, n), Xa[n % 6]) }), mulByNonresidue: ({ c0: t, c1: e, c2: r }) => ({ c0: Ua.mulByNonresidue(r), c1: t, c2: e }), multiplyBy1: ({ c0: t, c1: e, c2: r }, n) => ({ c0: Ua.mulByNonresidue(Ua.mul(r, n)), c1: Ua.mul(t, n), c2: Ua.mul(e, n) }), multiplyBy01({ c0: t, c1: e, c2: r }, n, s) {
  let a = Ua.mul(t, n), i = Ua.mul(e, s);
  return { c0: Ua.add(Ua.mulByNonresidue(Ua.sub(Ua.mul(Ua.add(e, r), s), i)), a), c1: Ua.sub(Ua.sub(Ua.mul(Ua.add(n, s), Ua.add(t, e)), a), i), c2: Ua.add(Ua.sub(Ua.mul(Ua.add(t, r), n), a), i) };
}, multiplyByFp2: ({ c0: t, c1: e, c2: r }, n) => ({ c0: Ua.mul(t, n), c1: Ua.mul(e, n), c2: Ua.mul(r, n) }) };
var Ga = [[BigInt("0x1"), BigInt("0x0")], [BigInt("0x0"), BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac")], [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")], [BigInt("0x0"), BigInt("0x1")], [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")], [BigInt("0x0"), BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe")]].map((t) => Ua.fromBigTuple(t));
var Xa = [[BigInt("0x1"), BigInt("0x0")], [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"), BigInt("0x0")], [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")], [BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"), BigInt("0x0")], [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")], [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"), BigInt("0x0")]].map((t) => Ua.fromBigTuple(t));
var za = BigInt("0xd201000000010000");
var $a = it(za);
var Ya = ({ c0: t, c1: e }, { c0: r, c1: n }) => ({ c0: Ka.add(t, r), c1: Ka.add(e, n) });
var Ja = ({ c0: t, c1: e }, { c0: r, c1: n }) => ({ c0: Ka.sub(t, r), c1: Ka.sub(e, n) });
var Wa = ({ c0: t, c1: e }, r) => {
  if ("bigint" == typeof r) return { c0: Ka.mul(t, r), c1: Ka.mul(e, r) };
  let { c0: n, c1: s } = r, a = Ka.mul(t, n), i = Ka.mul(e, s);
  return { c0: Ka.add(a, Ka.mulByNonresidue(i)), c1: Ka.sub(Ka.mul(Ka.add(t, e), Ka.add(n, s)), Ka.add(a, i)) };
};
var Qa = ({ c0: t, c1: e }) => {
  let r = Ka.mul(t, e);
  return { c0: Ka.sub(Ka.sub(Ka.mul(Ka.add(Ka.mulByNonresidue(e), t), Ka.add(t, e)), r), Ka.mulByNonresidue(r)), c1: Ka.add(r, r) };
};
function ti(t, e) {
  const r = Ua.sqr(t), n = Ua.sqr(e);
  return { first: Ua.add(Ua.mulByNonresidue(n), r), second: Ua.sub(Ua.sub(Ua.sqr(Ua.add(t, e)), r), n) };
}
var ei = { ORDER: Ua.ORDER, BITS: 2 * Ua.BITS, BYTES: 2 * Ua.BYTES, MASK: ct(2 * Ua.BITS), ZERO: { c0: Ka.ZERO, c1: Ka.ZERO }, ONE: { c0: Ka.ONE, c1: Ka.ZERO }, create: (t) => t, isValid: ({ c0: t, c1: e }) => Ka.isValid(t) && Ka.isValid(e), is0: ({ c0: t, c1: e }) => Ka.is0(t) && Ka.is0(e), neg: ({ c0: t, c1: e }) => ({ c0: Ka.neg(t), c1: Ka.neg(e) }), eql: ({ c0: t, c1: e }, { c0: r, c1: n }) => Ka.eql(t, r) && Ka.eql(e, n), sqrt: () => {
  throw new Error("Not implemented");
}, inv: ({ c0: t, c1: e }) => {
  let r = Ka.inv(Ka.sub(Ka.sqr(t), Ka.mulByNonresidue(Ka.sqr(e))));
  return { c0: Ka.mul(t, r), c1: Ka.neg(Ka.mul(e, r)) };
}, div: (t, e) => ei.mul(t, "bigint" == typeof e ? Pa.inv(Pa.create(e)) : ei.inv(e)), pow: (t, e) => kt(ei, t, e), invertBatch: (t) => Pt(ei, t), add: Ya, sub: Ja, mul: Wa, sqr: Qa, addN: Ya, subN: Ja, mulN: Wa, sqrN: Qa, fromBytes: (t) => {
  if (t.length !== ei.BYTES) throw new Error(`fromBytes wrong length=${t.length}`);
  return { c0: Ka.fromBytes(t.subarray(0, Ka.BYTES)), c1: Ka.fromBytes(t.subarray(Ka.BYTES)) };
}, toBytes: ({ c0: t, c1: e }) => st(Ka.toBytes(t), Ka.toBytes(e)), cmov: ({ c0: t, c1: e }, { c0: r, c1: n }, s) => ({ c0: Ka.cmov(t, r, s), c1: Ka.cmov(e, n, s) }), fromBigTwelve: (t) => ({ c0: Ka.fromBigSix(t.slice(0, 6)), c1: Ka.fromBigSix(t.slice(6, 12)) }), frobeniusMap(t, e) {
  const r = Ka.frobeniusMap(t.c0, e), { c0: n, c1: s, c2: a } = Ka.frobeniusMap(t.c1, e), i = ri[e % 12];
  return { c0: r, c1: Ka.create({ c0: Ua.mul(n, i), c1: Ua.mul(s, i), c2: Ua.mul(a, i) }) };
}, multiplyBy014: ({ c0: t, c1: e }, r, n, s) => {
  let a = Ka.multiplyBy01(t, r, n), i = Ka.multiplyBy1(e, s);
  return { c0: Ka.add(Ka.mulByNonresidue(i), a), c1: Ka.sub(Ka.sub(Ka.multiplyBy01(Ka.add(e, t), r, Ua.add(n, s)), a), i) };
}, multiplyByFp2: ({ c0: t, c1: e }, r) => ({ c0: Ka.multiplyByFp2(t, r), c1: Ka.multiplyByFp2(e, r) }), conjugate: ({ c0: t, c1: e }) => ({ c0: t, c1: Ka.neg(e) }), _cyclotomicSquare: ({ c0: t, c1: e }) => {
  const { c0: r, c1: n, c2: s } = t, { c0: a, c1: i, c2: o } = e, { first: c, second: u2 } = ti(r, i), { first: f3, second: d2 } = ti(a, s), { first: l2, second: p2 } = ti(n, o);
  let h2 = Ua.mulByNonresidue(p2);
  return { c0: Ka.create({ c0: Ua.add(Ua.mul(Ua.sub(c, r), Ta), c), c1: Ua.add(Ua.mul(Ua.sub(f3, n), Ta), f3), c2: Ua.add(Ua.mul(Ua.sub(l2, s), Ta), l2) }), c1: Ka.create({ c0: Ua.add(Ua.mul(Ua.add(h2, a), Ta), h2), c1: Ua.add(Ua.mul(Ua.add(u2, i), Ta), u2), c2: Ua.add(Ua.mul(Ua.add(d2, o), Ta), d2) }) };
}, _cyclotomicExp(t, e) {
  let r = ei.ONE;
  for (let n = $a - 1; n >= 0; n--) r = ei._cyclotomicSquare(r), ot(e, n) && (r = ei.mul(r, t));
  return r;
}, finalExponentiate: (t) => {
  const e = za, r = ei.div(ei.frobeniusMap(t, 6), t), n = ei.mul(ei.frobeniusMap(r, 2), r), s = ei.conjugate(ei._cyclotomicExp(n, e)), a = ei.mul(ei.conjugate(ei._cyclotomicSquare(n)), s), i = ei.conjugate(ei._cyclotomicExp(a, e)), o = ei.conjugate(ei._cyclotomicExp(i, e)), c = ei.mul(ei.conjugate(ei._cyclotomicExp(o, e)), ei._cyclotomicSquare(s)), u2 = ei.conjugate(ei._cyclotomicExp(c, e)), f3 = ei.frobeniusMap(ei.mul(s, o), 2), d2 = ei.frobeniusMap(ei.mul(i, n), 3), l2 = ei.frobeniusMap(ei.mul(c, ei.conjugate(n)), 1), p2 = ei.mul(ei.mul(u2, ei.conjugate(a)), n);
  return ei.mul(ei.mul(ei.mul(f3, d2), l2), p2);
} };
var ri = [[BigInt("0x1"), BigInt("0x0")], [BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8"), BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3")], [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"), BigInt("0x0")], [BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2"), BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09")], [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")], [BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995"), BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116")], [BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"), BigInt("0x0")], [BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3"), BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8")], [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")], [BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09"), BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2")], [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"), BigInt("0x0")], [BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116"), BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995")]].map((t) => Ua.fromBigTuple(t));
var ni = re(Ua, [[["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"], ["0x0", "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"], ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"], ["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1", "0x0"]], [["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"], ["0xc", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"], ["0x1", "0x0"]], [["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706", "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"], ["0x0", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"], ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"], ["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10", "0x0"]], [["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"], ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"], ["0x12", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"], ["0x1", "0x0"]]].map((t) => t.map((t2) => Ua.fromBigTuple(t2.map(BigInt)))));
var si = re(Pa, [["0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7", "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb", "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0", "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861", "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9", "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983", "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84", "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e", "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317", "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e", "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b", "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"], ["0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c", "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff", "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19", "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8", "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e", "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5", "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a", "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e", "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641", "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"], ["0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33", "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696", "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6", "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb", "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb", "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0", "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2", "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29", "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587", "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30", "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132", "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e", "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8", "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133", "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b", "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"], ["0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1", "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d", "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2", "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416", "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d", "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac", "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c", "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9", "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a", "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55", "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8", "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092", "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc", "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7", "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"]].map((t) => t.map((t2) => BigInt(t2))));
var ai = $t(Ua, { A: Ua.create({ c0: Pa.create(Ia), c1: Pa.create(BigInt(240)) }), B: Ua.create({ c0: Pa.create(BigInt(1012)), c1: Pa.create(BigInt(1012)) }), Z: Ua.create({ c0: Pa.create(BigInt(-2)), c1: Pa.create(BigInt(-1)) }) });
var ii = $t(Pa, { A: Pa.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")), B: Pa.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")), Z: Pa.create(BigInt(11)) });
var oi = Ka.create({ c0: Ua.ZERO, c1: Ua.ONE, c2: Ua.ZERO });
var ci = ei.create({ c0: oi, c1: Ka.ZERO });
var ui = ei.create({ c0: Ka.ZERO, c1: oi });
var [fi, di] = ei.invertBatch([ci, ui]);
function li(t, e) {
  const r = e.toAffine(), n = (s = r.x, a = r.y, [ei.mul(ei.frobeniusMap(ei.multiplyByFp2(fi, s), 1), ci).c0.c0, ei.mul(ei.frobeniusMap(ei.multiplyByFp2(di, a), 1), ui).c0.c0]);
  var s, a;
  return new t(n[0], n[1], Ua.ONE);
}
var pi = BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac");
function hi(t, e) {
  const r = e.toAffine(), n = (s = r.x, a = r.y, [Ua.mul(s, pi), Ua.neg(a)]);
  var s, a;
  return new t(n[0], n[1], Ua.ONE);
}
var mi = Object.freeze({ DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_", encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_", p: Pa.ORDER, m: 2, k: 128, expand: "xmd", hash: sha256 });
var bi = yi(Pa.toBytes(Ia), { infinity: true, compressed: true });
function gi(t) {
  const e = 224 & (t = t.slice())[0], r = !!(e >> 7 & 1), n = !!(e >> 6 & 1), s = !!(e >> 5 & 1);
  return t[0] &= 31, { compressed: r, infinity: n, sort: s, value: t };
}
function yi(t, e) {
  if (224 & t[0]) throw new Error("setMask: non-empty mask");
  return e.compressed && (t[0] |= 128), e.infinity && (t[0] |= 64), e.sort && (t[0] |= 32), t;
}
function wi(t) {
  t.assertValidity();
  const e = t.equals(Bi.G1.ProjectivePoint.ZERO), { x: r, y: n } = t.toAffine();
  if (e) return bi.slice();
  const s = Pa.ORDER, a = Boolean(n * Ta / s);
  return yi(et(r, Pa.BYTES), { compressed: true, sort: a });
}
function xi(t) {
  t.assertValidity();
  const e = Pa.BYTES;
  if (t.equals(Bi.G2.ProjectivePoint.ZERO)) return st(bi, et(Ia, e));
  const { x: r, y: n } = t.toAffine(), { re: s, im: a } = Ua.reim(r), { re: i, im: o } = Ua.reim(n), c = Boolean((o > Ia ? o * Ta : i * Ta) / Pa.ORDER & va), u2 = s;
  return st(yi(et(a, e), { sort: c, compressed: true }), et(u2, e));
}
var Bi = function(t) {
  const { Fp: e, Fr: r, Fp2: n, Fp6: s, Fp12: a } = t.fields, i = it(t.params.x);
  function o(e2) {
    const { x: r2, y: s2 } = e2, a2 = r2, o2 = s2;
    let c2 = a2, u3 = o2, f4 = n.ONE, d3 = [];
    for (let e3 = i - 2; e3 >= 0; e3--) {
      let r3 = n.sqr(u3), s3 = n.sqr(f4), i2 = n.multiplyByB(n.mul(s3, Ba)), l3 = n.mul(i2, Ba), p3 = n.sub(n.sub(n.sqr(n.add(u3, f4)), s3), r3);
      if (d3.push([n.sub(i2, r3), n.mul(n.sqr(c2), Ba), n.neg(p3)]), c2 = n.div(n.mul(n.mul(n.sub(r3, l3), c2), u3), xa), u3 = n.sub(n.sqr(n.div(n.add(r3, l3), xa)), n.mul(n.sqr(i2), Ba)), f4 = n.mul(r3, p3), ot(t.params.x, e3)) {
        let t2 = n.sub(u3, n.mul(o2, f4)), e4 = n.sub(c2, n.mul(a2, f4));
        d3.push([n.sub(n.mul(t2, a2), n.mul(e4, o2)), n.neg(t2), e4]);
        let r4 = n.sqr(e4), s4 = n.mul(r4, e4), i3 = n.mul(r4, c2), l4 = n.add(n.sub(s4, n.mul(i3, xa)), n.mul(n.sqr(t2), f4));
        c2 = n.mul(e4, l4), u3 = n.sub(n.mul(n.sub(i3, l4), t2), n.mul(s4, u3)), f4 = n.mul(f4, s4);
      }
    }
    return d3;
  }
  function c(e2, r2) {
    const { x: s2 } = t.params, o2 = r2[0], c2 = r2[1];
    let u3 = a.ONE;
    for (let t2 = 0, r3 = i - 2; r3 >= 0; r3--, t2++) {
      const i2 = e2[t2];
      if (u3 = a.multiplyBy014(u3, i2[0], n.mul(i2[1], o2), n.mul(i2[2], c2)), ot(s2, r3)) {
        t2 += 1;
        const r4 = e2[t2];
        u3 = a.multiplyBy014(u3, r4[0], n.mul(r4[1], o2), n.mul(r4[2], c2));
      }
      0 !== r3 && (u3 = a.sqr(u3));
    }
    return a.conjugate(u3);
  }
  const u2 = { randomPrivateKey: () => {
    const e2 = _t(r.ORDER);
    return Ft(t.randomBytes(e2), r.ORDER);
  }, calcPairingPrecomputes: o }, f3 = Xt({ n: r.ORDER, ...t.G1 }), d2 = Object.assign(f3, ne(f3.ProjectivePoint, t.G1.mapToCurve, { ...t.htfDefaults, ...t.G1.htfDefaults })), l2 = Xt({ n: r.ORDER, ...t.G2 }), p2 = Object.assign(l2, ne(l2.ProjectivePoint, t.G2.mapToCurve, { ...t.htfDefaults, ...t.G2.htfDefaults })), { ShortSignature: h2 } = t.G1, { Signature: m2 } = t.G2;
  function b2(t2, e2, r2 = true) {
    if (t2.equals(d2.ProjectivePoint.ZERO) || e2.equals(p2.ProjectivePoint.ZERO)) throw new Error("pairing is not available for ZERO point");
    t2.assertValidity(), e2.assertValidity();
    const n2 = t2.toAffine(), s2 = c(function(t3) {
      const e3 = t3;
      return e3._PPRECOMPUTES || (e3._PPRECOMPUTES = o(t3.toAffine())), e3._PPRECOMPUTES;
    }(e2), [n2.x, n2.y]);
    return r2 ? a.finalExponentiate(s2) : s2;
  }
  function g2(t2) {
    return t2 instanceof d2.ProjectivePoint ? t2 : d2.ProjectivePoint.fromHex(t2);
  }
  function y2(t2, e2) {
    return t2 instanceof d2.ProjectivePoint ? t2 : d2.hashToCurve(nt("point", t2), e2);
  }
  function w2(t2) {
    return t2 instanceof p2.ProjectivePoint ? t2 : m2.fromHex(t2);
  }
  function x2(t2, e2) {
    return t2 instanceof p2.ProjectivePoint ? t2 : p2.hashToCurve(nt("point", t2), e2);
  }
  return d2.ProjectivePoint.BASE._setWindowSize(4), { getPublicKey: function(t2) {
    return d2.ProjectivePoint.fromPrivateKey(t2).toRawBytes(true);
  }, getPublicKeyForShortSignatures: function(t2) {
    return p2.ProjectivePoint.fromPrivateKey(t2).toRawBytes(true);
  }, sign: function(t2, e2, r2) {
    const n2 = x2(t2, r2);
    n2.assertValidity();
    const s2 = n2.multiply(d2.normPrivateKeyToScalar(e2));
    return t2 instanceof p2.ProjectivePoint ? s2 : m2.toRawBytes(s2);
  }, signShortSignature: function(t2, e2, r2) {
    const n2 = y2(t2, r2);
    n2.assertValidity();
    const s2 = n2.multiply(d2.normPrivateKeyToScalar(e2));
    return t2 instanceof d2.ProjectivePoint ? s2 : h2.toRawBytes(s2);
  }, verify: function(t2, e2, r2, n2) {
    const s2 = g2(r2), i2 = x2(e2, n2), o2 = d2.ProjectivePoint.BASE, c2 = w2(t2), u3 = b2(s2.negate(), i2, false), f4 = b2(o2, c2, false), l3 = a.finalExponentiate(a.mul(f4, u3));
    return a.eql(l3, a.ONE);
  }, verifyBatch: function(t2, e2, r2, n2) {
    if (!e2.length) throw new Error("Expected non-empty messages array");
    if (r2.length !== e2.length) throw new Error("Pubkey count should equal msg count");
    const s2 = w2(t2), i2 = e2.map((t3) => x2(t3, n2)), o2 = r2.map(g2);
    try {
      const t3 = [];
      for (const e4 of new Set(i2)) {
        const r4 = i2.reduce((t4, r5, n3) => r5 === e4 ? t4.add(o2[n3]) : t4, d2.ProjectivePoint.ZERO);
        t3.push(b2(r4, e4, false));
      }
      t3.push(b2(d2.ProjectivePoint.BASE.negate(), s2, false));
      const e3 = t3.reduce((t4, e4) => a.mul(t4, e4), a.ONE), r3 = a.finalExponentiate(e3);
      return a.eql(r3, a.ONE);
    } catch {
      return false;
    }
  }, verifyShortSignature: function(t2, e2, r2, n2) {
    const s2 = w2(r2), i2 = y2(e2, n2), o2 = p2.ProjectivePoint.BASE, c2 = g2(t2), u3 = b2(i2, s2, false), f4 = b2(c2, o2.negate(), false), d3 = a.finalExponentiate(a.mul(f4, u3));
    return a.eql(d3, a.ONE);
  }, aggregatePublicKeys: function(t2) {
    if (!t2.length) throw new Error("Expected non-empty array");
    const e2 = t2.map(g2).reduce((t3, e3) => t3.add(e3), d2.ProjectivePoint.ZERO);
    return t2[0] instanceof d2.ProjectivePoint ? (e2.assertValidity(), e2) : e2.toRawBytes(true);
  }, aggregateSignatures: function(t2) {
    if (!t2.length) throw new Error("Expected non-empty array");
    const e2 = t2.map(w2).reduce((t3, e3) => t3.add(e3), p2.ProjectivePoint.ZERO);
    return t2[0] instanceof p2.ProjectivePoint ? (e2.assertValidity(), e2) : m2.toRawBytes(e2);
  }, aggregateShortSignatures: function(t2) {
    if (!t2.length) throw new Error("Expected non-empty array");
    const e2 = t2.map(g2).reduce((t3, e3) => t3.add(e3), d2.ProjectivePoint.ZERO);
    return t2[0] instanceof d2.ProjectivePoint ? (e2.assertValidity(), e2) : h2.toRawBytes(e2);
  }, millerLoop: c, pairing: b2, G1: d2, G2: p2, Signature: m2, ShortSignature: h2, fields: { Fr: r, Fp: e, Fp2: n, Fp6: s, Fp12: a }, params: { x: t.params.x, r: t.params.r, G1b: t.G1.b, G2b: t.G2.b }, utils: u2 };
}({ fields: { Fp: Pa, Fp2: Ua, Fp6: Ka, Fp12: ei, Fr: Ra }, G1: { Fp: Pa, h: BigInt("0x396c8c005555e1568c00aaab0000aaab"), Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"), Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"), a: Pa.ZERO, b: Oa, htfDefaults: { ...mi, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" }, wrapPrivateKey: true, allowInfinityPoint: true, isTorsionFree: (t, e) => {
  const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new t(Pa.mul(e.px, r), e.py, e.pz);
  return e.multiplyUnsafe(Bi.params.x).negate().multiplyUnsafe(Bi.params.x).equals(n);
}, clearCofactor: (t, e) => e.multiplyUnsafe(Bi.params.x).add(e), mapToCurve: (t) => {
  const { x: e, y: r } = ii(Pa.create(t[0]));
  return si(e, r);
}, fromBytes: (t) => {
  const { compressed: e, infinity: r, sort: n, value: s } = gi(t);
  if (48 === s.length && e) {
    const t2 = Pa.ORDER, e2 = Q(s), a = Pa.create(e2 & Pa.MASK);
    if (r) {
      if (a !== Ia) throw new Error("G1: non-empty compressed point at infinity");
      return { x: Ia, y: Ia };
    }
    const i = Pa.add(Pa.pow(a, Sa), Pa.create(Bi.params.G1b));
    let o = Pa.sqrt(i);
    if (!o) throw new Error("Invalid compressed G1 point");
    return o * Ta / t2 !== BigInt(n) && (o = Pa.neg(o)), { x: Pa.create(a), y: Pa.create(o) };
  }
  if (96 !== s.length || e) throw new Error("Invalid point G1, expected 48/96 bytes");
  {
    const t2 = Q(s.subarray(0, Pa.BYTES)), e2 = Q(s.subarray(Pa.BYTES));
    if (r) {
      if (t2 !== Ia || e2 !== Ia) throw new Error("G1: non-empty point at infinity");
      return Bi.G1.ProjectivePoint.ZERO.toAffine();
    }
    return { x: Pa.create(t2), y: Pa.create(e2) };
  }
}, toBytes: (t, e, r) => {
  const n = e.equals(t.ZERO), { x: s, y: a } = e.toAffine();
  if (r) {
    if (n) return bi.slice();
    const t2 = Pa.ORDER, e2 = Boolean(a * Ta / t2);
    return yi(et(s, Pa.BYTES), { compressed: true, sort: e2 });
  }
  if (n) {
    return st(new Uint8Array([64]), new Uint8Array(2 * Pa.BYTES - 1));
  }
  return st(et(s, Pa.BYTES), et(a, Pa.BYTES));
}, ShortSignature: { fromHex(t) {
  const { infinity: e, sort: r, value: n } = gi(nt("signatureHex", t, 48)), s = Pa.ORDER, a = Q(n);
  if (e) return Bi.G1.ProjectivePoint.ZERO;
  const i = Pa.create(a & Pa.MASK), o = Pa.add(Pa.pow(i, Sa), Pa.create(Bi.params.G1b));
  let c = Pa.sqrt(o);
  if (!c) throw new Error("Invalid compressed G1 point");
  const u2 = BigInt(r);
  c * Ta / s !== u2 && (c = Pa.neg(c));
  const f3 = Bi.G1.ProjectivePoint.fromAffine({ x: i, y: c });
  return f3.assertValidity(), f3;
}, toRawBytes: (t) => wi(t), toHex: (t) => X(wi(t)) } }, G2: { Fp: Ua, h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"), Gx: Ua.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"), BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]), Gy: Ua.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"), BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")]), a: Ua.ZERO, b: Ua.fromBigTuple([Oa, Oa]), hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"), htfDefaults: { ...mi }, wrapPrivateKey: true, allowInfinityPoint: true, mapToCurve: (t) => {
  const { x: e, y: r } = ai(Ua.fromBigTuple(t));
  return ni(e, r);
}, isTorsionFree: (t, e) => e.multiplyUnsafe(Bi.params.x).negate().equals(li(t, e)), clearCofactor: (t, e) => {
  const r = Bi.params.x;
  let n = e.multiplyUnsafe(r).negate(), s = li(t, e), a = e.double();
  a = hi(t, a), a = a.subtract(s), s = n.add(s), s = s.multiplyUnsafe(r).negate(), a = a.add(s), a = a.subtract(n);
  return a.subtract(e);
}, fromBytes: (t) => {
  const { compressed: e, infinity: r, sort: n, value: s } = gi(t);
  if (!e && !r && n || !e && r && n || n && r && e) throw new Error("Invalid encoding flag: " + (224 & t[0]));
  const a = Pa.BYTES, i = (t2, e2, r2) => Q(t2.slice(e2, r2));
  if (96 === s.length && e) {
    const t2 = Bi.params.G2b, e2 = Pa.ORDER;
    if (r) {
      if (s.reduce((t3, e3) => 0 !== t3 ? e3 + 1 : e3, 0) > 0) throw new Error("Invalid compressed G2 point");
      return { x: Ua.ZERO, y: Ua.ZERO };
    }
    const o = i(s, 0, a), c = i(s, a, 2 * a), u2 = Ua.create({ c0: Pa.create(c), c1: Pa.create(o) }), f3 = Ua.add(Ua.pow(u2, Sa), t2);
    let d2 = Ua.sqrt(f3);
    const l2 = d2.c1 === Ia ? d2.c0 * Ta / e2 : d2.c1 * Ta / e2 ? va : Ia;
    return d2 = n && l2 > 0 ? d2 : Ua.neg(d2), { x: u2, y: d2 };
  }
  if (192 !== s.length || e) throw new Error("Invalid point G2, expected 96/192 bytes");
  {
    if (r) {
      if (s.reduce((t3, e3) => 0 !== t3 ? e3 + 1 : e3, 0) > 0) throw new Error("Invalid uncompressed G2 point");
      return { x: Ua.ZERO, y: Ua.ZERO };
    }
    const t2 = i(s, 0, a), e2 = i(s, a, 2 * a), n2 = i(s, 2 * a, 3 * a), o = i(s, 3 * a, 4 * a);
    return { x: Ua.fromBigTuple([e2, t2]), y: Ua.fromBigTuple([o, n2]) };
  }
}, toBytes: (t, e, r) => {
  const { BYTES: n, ORDER: s } = Pa, a = e.equals(t.ZERO), { x: i, y: o } = e.toAffine();
  if (r) {
    if (a) return st(bi, et(Ia, n));
    const t2 = Boolean(o.c1 === Ia ? o.c0 * Ta / s : o.c1 * Ta / s);
    return st(yi(et(i.c1, n), { compressed: true, sort: t2 }), et(i.c0, n));
  }
  {
    if (a) return st(new Uint8Array([64]), new Uint8Array(4 * n - 1));
    const { re: t2, im: e2 } = Ua.reim(i), { re: r2, im: s2 } = Ua.reim(o);
    return st(et(e2, n), et(t2, n), et(s2, n), et(r2, n));
  }
}, Signature: { fromHex(t) {
  const { infinity: e, sort: r, value: n } = gi(nt("signatureHex", t)), s = Pa.ORDER, a = t.length / 2;
  if (48 !== a && 96 !== a) throw new Error("Invalid compressed signature length, must be 96 or 192");
  const i = Q(n.slice(0, a)), o = Q(n.slice(a));
  if (e) return Bi.G2.ProjectivePoint.ZERO;
  const c = Pa.create(i & Pa.MASK), u2 = Pa.create(o), f3 = Ua.create({ c0: u2, c1: c }), d2 = Ua.add(Ua.pow(f3, Sa), Bi.params.G2b);
  let l2 = Ua.sqrt(d2);
  if (!l2) throw new Error("Failed to find a square root");
  const { re: p2, im: h2 } = Ua.reim(l2), m2 = BigInt(r);
  (h2 > Ia && h2 * Ta / s !== m2 || h2 === Ia && p2 * Ta / s !== m2) && (l2 = Ua.neg(l2));
  const b2 = Bi.G2.ProjectivePoint.fromAffine({ x: f3, y: l2 });
  return b2.assertValidity(), b2;
}, toRawBytes: (t) => xi(t), toHex: (t) => X(xi(t)) } }, params: { x: za, r: Ra.ORDER }, htfDefaults: mi, hash: sha256, randomBytes });
var Ii = "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_POP_";
var vi = "BLS_POP_BLS12381G2_XMD:SHA-256_SSWU_RO_POP_";
function Ti(t) {
  return Bi.G1.ProjectivePoint.fromHex(t);
}
function Si(t) {
  return t.toRawBytes();
}
function Oi(t) {
  return Bi.Signature.fromHex(t);
}
function Ei(t, e, r) {
  return Bi.verify(e, r, t, { DST: vi });
}
var Ai;
var ki = Object.freeze({ __proto__: null, PUBLIC_KEY_LENGTH: 48, SIGNATURE_LENGTH: 96, publicKeyFromBytes: Ti, publicKeyToBytes: Si, secretKeyFromBytes: function(t) {
  return Bi.G1.normPrivateKeyToScalar(t);
}, secretKeyToBytes: function(t) {
  return ve(t.toString(16));
}, sign: function(t, e) {
  return Bi.sign(t, e, { DST: Ii });
}, signProofOfPossession: function(t, e) {
  return Bi.sign(t, e, { DST: vi });
}, signatureFromBytes: Oi, signatureToBytes: function(t) {
  return t.toRawBytes();
}, verify: function(t, e, r) {
  return Bi.verify(e, r, t, { DST: Ii });
}, verifyProofOfPossession: Ei });
var Pi2 = Ai = class {
  publicKey;
  signature;
  _type = Pe.ProofOfPossession;
  constructor(t, e) {
    this.publicKey = t, this.signature = e;
    const r = Ti(t), n = Oi(e);
    if (r.assertValidity(), n.assertValidity(), !Ei(r, n, Si(r))) throw new Error("Invalid proof of possession");
  }
  static fromBytes(t) {
    const e = t.slice(0, 48), r = t.slice(48, 144), n = t.slice(144);
    return [new Ai(e, r), n];
  }
  toString() {
    return Ie(this.toBytes());
  }
  toBytes() {
    return concatBytes(this.publicKey, this.signature);
  }
};
var Ri;
var Di;
Pi2 = Ai = f2([(t) => {
}, d("design:paramtypes", [Uint8Array, Uint8Array])], Pi2);
var Ni = Ri = class {
  proof;
  _type = Pe.Signer;
  constructor(t) {
    this.proof = t;
  }
  static fromBytes(t, e) {
    const [r, n] = ur(t, [Pi2], e);
    return [new Ri(r), n];
  }
  toBytes(t) {
    return fr([this.proof], t);
  }
};
Ni = Ri = f2([(t) => {
}, d("design:paramtypes", [Pi2])], Ni);
var _i = Di = class {
  _type = Pe.SignerEmpty;
  static fromBytes(t, e) {
    const [r] = ur(t, [], e);
    return [new Di(), r];
  }
  toBytes(t) {
    return fr([], t);
  }
};
var Fi;
_i = Di = f2([(t) => {
}], _i);
var Vi = Fi = class extends Xn {
  baseTx;
  nodeId;
  subnetId;
  subnetAuth;
  _type = Pe.RemoveSubnetValidatorTx;
  constructor(t, e, r, n) {
    super(), this.baseTx = t, this.nodeId = e, this.subnetId = r, this.subnetAuth = n;
  }
  getSubnetID() {
    return this.subnetId;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [tn, Me, Ve, sn], e);
    return [new Fi(r, n, s, a), i];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.nodeId, this.subnetId], t), t.PackPrefix(this.subnetAuth));
  }
};
var Ui;
Vi = Fi = f2([(t) => {
}, d("design:paramtypes", [tn, Me, Ve, Object])], Vi);
var Ci = Ui = class extends Xn {
  baseTx;
  subnetID;
  subnetAuth;
  subnetOwners;
  _type = Pe.TransferSubnetOwnershipTx;
  constructor(t, e, r, n) {
    super(), this.baseTx = t, this.subnetID = e, this.subnetAuth = r, this.subnetOwners = n;
  }
  getSubnetID() {
    return this.subnetID;
  }
  getSubnetOwners() {
    return this.subnetOwners;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i] = ur(t, [tn, Ve, sn, sn], e);
    return [new Ui(r, n, s, a), i];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetID], t), t.PackPrefix(this.subnetAuth), t.PackPrefix(this.subnetOwners));
  }
};
var Mi;
Ci = Ui = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Object, Object])], Ci);
var qi = Mi = class extends Xn {
  baseTx;
  subnetID;
  assetId;
  initialSupply;
  maximumSupply;
  minConsumptionRate;
  maxConsumptionRate;
  minValidatorStake;
  maxValidatorStake;
  minStakeDuration;
  maxStakeDuration;
  minDelegationFee;
  minDelegatorStake;
  maxValidatorWeightFactor;
  uptimeRequirement;
  subnetAuth;
  _type = Pe.TransformSubnetTx;
  constructor(t, e, r, n, s, a, i, o, c, u2, f3, d2, l2, p2, h2, m2) {
    super(), this.baseTx = t, this.subnetID = e, this.assetId = r, this.initialSupply = n, this.maximumSupply = s, this.minConsumptionRate = a, this.maxConsumptionRate = i, this.minValidatorStake = o, this.maxValidatorStake = c, this.minStakeDuration = u2, this.maxStakeDuration = f3, this.minDelegationFee = d2, this.minDelegatorStake = l2, this.maxValidatorWeightFactor = p2, this.uptimeRequirement = h2, this.subnetAuth = m2;
  }
  getSubnetID() {
    return this.subnetID;
  }
  static fromBytes(t, e) {
    const [r, n, s, a, i, o, c, u2, f3, d2, l2, p2, h2, m2, b2, g2, y2] = ur(t, [tn, Ve, Ve, pr, pr, pr, pr, pr, pr, rr, rr, rr, rr, mr, rr, sn], e);
    return [new Mi(r, n, s, a, i, o, c, u2, f3, d2, l2, p2, h2, m2, b2, g2), y2];
  }
  toBytes(t) {
    return concatBytes(fr([this.baseTx, this.subnetID, this.assetId, this.initialSupply, this.maximumSupply, this.minConsumptionRate, this.maxConsumptionRate, this.minValidatorStake, this.maxValidatorStake, this.minStakeDuration, this.maxStakeDuration, this.minDelegationFee, this.minDelegatorStake, this.maxValidatorWeightFactor, this.uptimeRequirement], t), t.PackPrefix(this.subnetAuth));
  }
};
var ji;
qi = Mi = f2([(t) => {
}, d("design:paramtypes", [tn, Ve, Ve, pr, pr, pr, pr, pr, pr, rr, rr, rr, rr, mr, rr, Object])], qi);
var Li = ji = class extends Ln {
  baseTx;
  _type = Pe.PvmBaseTx;
  constructor(t) {
    super(), this.baseTx = t;
  }
  static fromBytes(t, e) {
    const [r, n] = ur(t, [tn], e);
    return [new ji(r), n];
  }
  toBytes(t) {
    return this.baseTx.toBytes(t);
  }
};
Li = ji = f2([(t) => {
}, d("design:paramtypes", [tn])], Li);
var Hi = new sn([...new Array(5), ...Gr, Dr, Fr, Qn, Jn, Gn, ns, as, us, os, es, ds, ps, ms, Vi, qi, gs, ws, _i, Ni, ...new Array(4), Ci, Li]);
var Zi;
var Ki = () => Zi || (Zi = new an(), Zi.RegisterCodec(0, Hi), Zi);
function Gi(t) {
  switch (t) {
    case "AVM":
      return kn();
    case "EVM":
      return jn();
    case "PVM":
      return Ki();
    default:
      throw new Error("unknown VM");
  }
}
function Xi(t) {
  return Gi(t.vm).packCodec(t);
}
var zi;
var $i = zi = class {
  unsignedTx;
  credentials;
  _type = Pe.AvmSignedTx;
  constructor(t, e) {
    this.unsignedTx = t, this.credentials = e;
  }
  static fromBytes(t, e) {
    const [r, n, s] = ur(t, [sn, ir(sn)], e);
    return [new zi(r, n), s];
  }
  getCredentials() {
    return this.credentials;
  }
  getAllSignatures() {
    return this.getCredentials().flatMap((t) => t.getSignatures());
  }
  toBytes() {
    const t = Gi(this.unsignedTx.vm).getCodecForVersion(new wr(0));
    return concatBytes(new wr(0).toBytes(), t.PackPrefix(this.unsignedTx), t.PackPrefixList(this.credentials));
  }
};
function Yi(t) {
  return t._type === Pe.TransferableOutput;
}
function Ji(t) {
  return t._type === Pe.TransferableInput;
}
$i = zi = f2([(t) => {
}, d("design:paramtypes", [Function, Array])], $i);
var Wi = Object.freeze({ __proto__: null, AvaxTx: er, get BaseTx() {
  return tn;
}, get SignedTx() {
  return $i;
}, get TransferableInput() {
  return Yr;
}, get TransferableOutput() {
  return Wr;
}, get UTXOID() {
  return zr;
}, isBaseTx: function(t) {
  return t._type === Pe.BaseTx;
}, isTransferableInput: Ji, isTransferableOutput: Yi });
function Qi(t) {
  return t._type === Pe.AvmBaseTx;
}
function to(t) {
  return t._type === Pe.AvmExportTx;
}
function eo(t) {
  return t._type === Pe.AvmImportTx;
}
var ro = Object.freeze({ __proto__: null, get BaseTx() {
  return nn;
}, get CreateAssetTx() {
  return wn;
}, get ExportTx() {
  return Bn;
}, get ImportTx() {
  return vn;
}, get InitialState() {
  return gn;
}, get OperationTx() {
  return An;
}, getAVMManager: kn, isAvmBaseTx: Qi, isCreateAssetTx: function(t) {
  return t._type === Pe.CreateAssetTx;
}, isExportTx: to, isImportTx: eo, isOperationTx: function(t) {
  return t._type === Pe.OperationTx;
} });
function no(t) {
  return t._type == Pe.EvmExportTx;
}
function so(t) {
  return t._type == Pe.EvmImportTx;
}
function ao(t) {
  return so(t) || no(t);
}
function io(t) {
  return !(!no(t) && !so(t));
}
var oo = Object.freeze({ __proto__: null, EVMTx: Pn, get ExportTx() {
  return _n;
}, get ImportTx() {
  return Mn;
}, get Input() {
  return Dn;
}, get Output() {
  return Vn;
}, isEvmTx: ao, isExportTx: no, isImportExportTx: io, isImportTx: so });
function co(t) {
  return t._type === Pe.PvmBaseTx;
}
function uo(t) {
  return t._type === Pe.AddDelegatorTx;
}
function fo(t) {
  return t._type === Pe.AddPermissionlessDelegatorTx;
}
function lo(t) {
  return t._type === Pe.AddPermissionlessValidatorTx;
}
function po(t) {
  return t._type === Pe.AddSubnetValidatorTx;
}
function ho(t) {
  return t._type === Pe.AddValidatorTx;
}
function mo(t) {
  return t._type === Pe.CreateChainTx;
}
function bo(t) {
  return t._type === Pe.CreateSubnetTx;
}
function go(t) {
  return t._type === Pe.RemoveSubnetValidatorTx;
}
function yo(t) {
  return t._type === Pe.TransferSubnetOwnershipTx;
}
function wo(t) {
  return t._type === Pe.TransformSubnetTx;
}
function xo(t) {
  return t._type === Pe.PvmExportTx;
}
function Bo(t) {
  return t._type === Pe.PvmImportTx;
}
var Io = Object.freeze({ __proto__: null, AbstractSubnetTx: Xn, get AddDelegatorTx() {
  return Gn;
}, get AddPermissionlessDelegatorTx() {
  return ws;
}, get AddPermissionlessValidatorTx() {
  return gs;
}, get AddSubnetValidatorTx() {
  return Jn;
}, get AddValidatorTx() {
  return Qn;
}, get AdvanceTimeTx() {
  return es;
}, get BaseTx() {
  return Li;
}, get CreateChainTx() {
  return ns;
}, get CreateSubnetTx() {
  return as;
}, get ExportTx() {
  return os;
}, get ImportTx() {
  return us;
}, get ProofOfPossession() {
  return Pi2;
}, get RemoveSubnetValidatorTx() {
  return Vi;
}, get Signer() {
  return Ni;
}, get SignerEmpty() {
  return _i;
}, get StakeableLockIn() {
  return ps;
}, get StakeableLockOut() {
  return ms;
}, get SubnetValidator() {
  return $n;
}, get TransferSubnetOwnershipTx() {
  return Ci;
}, get TransformSubnetTx() {
  return qi;
}, get Validator() {
  return Zn;
}, isAddDelegatorTx: uo, isAddPermissionlessDelegatorTx: fo, isAddPermissionlessValidatorTx: lo, isAddSubnetValidatorTx: po, isAddValidatorTx: ho, isAdvanceTimeTx: function(t) {
  return t._type === Pe.AdvanceTimeTx;
}, isCreateChainTx: mo, isCreateSubnetTx: bo, isEmptySigner: function(t) {
  return t._type === Pe.SignerEmpty;
}, isExportTx: xo, isImportTx: Bo, isPvmBaseTx: co, isRemoveSubnetValidatorTx: go, isRewardValidatorTx: function(t) {
  return t._type === Pe.RewardValidatorTx;
}, isSigner: function(t) {
  return t._type === Pe.Signer;
}, isTransferSubnetOwnershipTx: yo, isTransformSubnetTx: wo });
var vo = 1n;
var To = 1000n;
function So(t) {
  return Oo(t.toBytes().length) + BigInt(t.getSigIndices().flatMap((t2) => t2).length) * To + 10000n;
}
function Oo(t) {
  return BigInt(t) * vo;
}
var Eo = class _Eo {
  utxos;
  constructor(t) {
    this.utxos = t, this.utxos = function(t2) {
      const e = t2.map((t3) => t3.ID());
      return t2.filter((t3, r) => e.indexOf(t3.ID()) == r);
    }(t);
  }
  getUTXOs() {
    return [...this.utxos];
  }
  getAssetDict() {
    const t = {};
    this.utxos.forEach((e2) => {
      const r = e2.assetId.toString(), n = t[r] || [];
      t[r] = [...n, e2];
    });
    const e = {};
    for (const r in t) e[r] = new _Eo(t[r]);
    return e;
  }
  getAssetIDs() {
    const t = this.utxos.map((t2) => t2.assetId.toString());
    return t.filter((e, r) => t.indexOf(e) === r);
  }
  push(t) {
    return new _Eo([...this.getUTXOs(), t]);
  }
  getUTXOIDs() {
    return this.utxos.map((t) => t.ID());
  }
  merge(t) {
    const e = [...this.getUTXOs(), ...t.getUTXOs()];
    return new _Eo(e);
  }
  getTransferOuts() {
    const t = this.utxos.filter((t2) => Ir(t2.output));
    return new _Eo(t);
  }
};
function Ao(t) {
  return concatBytes(t, sha256(t).subarray(-4));
}
var ko = (t, e, r, n) => {
  if (t.locktime.value() > r) return;
  const s = new Set(e.map((t2) => t2.toString())), a = t.addrs.reduce((e2, r2, a2) => e2.size() < t.threshold.value() && s.has(r2.value()) ? n?.length && !n.includes(a2) ? e2 : e2.set(r2, a2) : e2, new Po());
  return a.size() < t.threshold.value() ? void 0 : { sigIndicies: Array.from(a.values()), addressMap: a };
};
var Po = class _Po {
  constructor(t = []) {
    t.forEach(([t2, e]) => {
      this.set(t2, e);
    });
  }
  storage = /* @__PURE__ */ new Map();
  set(t, e) {
    return this.storage.set(t.toHex(), e), this;
  }
  toJSON() {
    return Array.from(this.storage.entries());
  }
  static fromJSON(t) {
    return new _Po(t.map(([t2, e]) => [De.fromHex(t2), e]));
  }
  get(t) {
    return this.storage.get(t.toHex());
  }
  has(t) {
    return this.storage.has(t.toHex());
  }
  size() {
    return this.storage.size;
  }
  forEach(t) {
    return this.storage.forEach((e, r) => t(e, De.fromHex(r)));
  }
  forEachHex(t, e = false) {
    return e ? _Po.fromJSON([...this.storage.entries()].sort((t2, e2) => t2[1] - e2[1]).map(([t2], e2) => [t2, e2])).storage.forEach(t) : this.storage.forEach(t);
  }
  values() {
    return this.storage.values();
  }
};
var Ro = class _Ro {
  constructor(t = []) {
    t.length && this.push(...t);
  }
  storage = [];
  index = {};
  orderedIndex = {};
  push(...t) {
    t.forEach((t2) => {
      t2.forEachHex((t3, e) => {
        this.index[e] = this.index[e] ?? [], this.index[e].push([this.storage.length, t3]);
      }), t2.forEachHex((t3, e) => {
        this.orderedIndex[e] = this.orderedIndex[e] ?? [], this.orderedIndex[e].push([this.storage.length, t3]);
      }, true), this.storage.push(t2);
    });
  }
  static fromTransferableInputs(t, e, r, n) {
    const s = e.reduce((t2, e2) => t2.set(e2.utxoId.ID(), e2), /* @__PURE__ */ new Map()), a = t.map((t2, e2) => {
      const a2 = s.get(t2.utxoID.ID());
      if (!a2) throw new Error("input utxo not found");
      if (n) {
        const s2 = Nr(n), i2 = ko(a2.getOutputOwners(), s2, r, t2.sigIndicies());
        if (!i2) throw new Error(`input ${e2} has no valid owners`);
        return i2.addressMap;
      }
      const i = t2.sigIndicies().map((t3) => [a2.getOutputOwners().addrs[t3], t3]);
      return new Po(i);
    });
    return new _Ro(a);
  }
  toJSON() {
    return this.storage;
  }
  static fromJSON(t) {
    return new _Ro(t.map((t2) => Po.fromJSON(t2)));
  }
  getAddresses() {
    return Object.keys(this.index).map((t) => ve(t));
  }
  forEach(t, e = false) {
    Object.entries(e ? this.orderedIndex : this.index).forEach(([e2, r]) => {
      t(r, e2);
    });
  }
  has(t) {
    return t.toHex() in this.index;
  }
  toArray() {
    return this.storage;
  }
  merge(t) {
    t.toArray().forEach((t2) => this.push(t2));
  }
  getSigIndicesForAddress(t, e = false) {
    return e ? this.orderedIndex[t.toHex()] : this.index[t.toHex()];
  }
};
var Do = (t) => io(t) ? no(t) ? [] : t.importedInputs : [];
var No = (t) => ao(t) ? Do(t) : eo(t) || Bo(t) ? [...t.baseTx.inputs ?? [], ...t.ins ?? []] : t.getInputs();
var _o = (t) => io(t) && no(t) ? t.exportedOutputs : [];
var Fo = (t) => {
  if (ao(t)) return _o(t);
  if (to(t) || xo(t)) return [...t.baseTx?.outputs ?? [], ...t.outs ?? []];
  if (ho(t) || uo(t) || lo(t) || fo(t)) {
    const e = [...t.baseTx?.outputs ?? [], ...t.stake ?? []];
    return ho(t) ? e.push(t.getRewardsOwner(), t.getRewardsOwner()) : uo(t) ? e.push(t.getRewardsOwner()) : lo(t) ? e.push(t.getValidatorRewardsOwner(), t.getDelegatorRewardsOwner()) : e.push(t.getDelegatorRewardsOwner()), e;
  }
  return bo(t) ? [...t.baseTx.outputs, t.getSubnetOwners()] : t?.baseTx?.outputs ?? [];
};
var Vo = (t, e) => {
  const r = t.get(e.assetId.toString()) ?? 0n, n = Ji(e) || Yi(e) ? e.amount() : e.amount.value();
  return t.set(e.assetId.toString(), r + n), t;
};
var Uo = (t) => {
  if (no(t)) return t.ins.reduce(Vo, /* @__PURE__ */ new Map());
  return No(t).reduce(Vo, /* @__PURE__ */ new Map());
};
var Co = (t) => {
  if (so(t)) return t.Outs.reduce(Vo, /* @__PURE__ */ new Map());
  return Fo(t).reduce((t2, e) => Yi(e) ? Vo(t2, e) : t2, /* @__PURE__ */ new Map());
};
var Mo = (t) => {
  const e = Uo(t), r = Co(t), n = /* @__PURE__ */ new Map();
  for (const [t2, s] of e.entries()) {
    const e2 = r.get(t2) ?? 0n;
    n.set(t2, s - e2);
  }
  return n;
};
var qo;
var jo = Object.freeze({ __proto__: null, AddressMap: Po, AddressMaps: Ro, CCostPerSignature: To, CFixedFee: 1e4, CTxBytesGas: vo, UtxoSet: Eo, add0x: be, addChecksum: Ao, addressesFromBytes: Nr, base58, base58check: Ne, bech32ToBytes: m, bufferToBigInt: xe, bufferToHex: Ie, bufferToNumber: Be, bytesCompare: _e, bytesEqual: (t, e) => t.length === e.length && 0 === _e(t, e), calcBytesCost: Oo, concatBytes, costCorethTx: So, format: function(t, e, r) {
  const n = g(e, r);
  return `${t}${p}${n}`;
}, formatBech32: g, getBurnedAmountByTx: Mo, getInputAmounts: Uo, getManagerForVM: Gi, getOutputAmounts: Co, getTransferableInputsByEvmTx: Do, getTransferableInputsByTx: No, getTransferableOutputsByEvmTx: _o, getTransferableOutputsByTx: Fo, hexToBuffer: ve, isRewardsOwner: Tr, isStakeableLockIn: Sr, isStakeableLockOut: vr, isTransferInput: Or, isTransferOut: Ir, packTx: Xi, padLeft: Te, parse: h, parseBech32: b, printDeep: (t) => {
  console.log(import_util.default.inspect(t, { depth: null, colors: true }));
}, printHex: (t, e = "") => {
  console.log(`name = ${e}`, Ie(t));
}, printJSON: (t) => {
  console.log(JSON.stringify(t, null, 2));
}, strip0x: ge, unpackWithManager: function(t, e) {
  return Gi(t).unpackTransaction(e);
}, validateBurnedAmount: ({ unsignedTx: t, context: e, burnedAmount: r, evmBaseFee: n, evmFeeTolerance: s }) => {
  const a = t.getTx(), i = r ?? ((t2, e2) => Mo(t2).get(e2.avaxAssetID) ?? 0n)(a, e), o = (t2) => ({ isValid: i === t2, txFee: t2 });
  if (io(a)) {
    if (!n || !s) throw new Error("missing evm fee data");
    const e2 = Math.floor(s);
    if (e2 < 1 || e2 > 100) throw new Error("evmFeeTolerance must be [1,100]");
    const r2 = n * So(t), a2 = r2 * (100n - BigInt(e2)) / 100n, o2 = r2 * (100n + BigInt(e2)) / 100n;
    return { isValid: i >= a2 && i <= o2, txFee: i };
  }
  if (ho(a)) return o(e.addPrimaryNetworkValidatorFee);
  if (uo(a)) return o(e.addPrimaryNetworkDelegatorFee);
  if (bo(a)) return o(e.createSubnetTxFee);
  if (mo(a)) return o(e.createBlockchainTxFee);
  if (po(a)) return o(e.addSubnetValidatorFee);
  if (wo(a)) return o(e.transformSubnetTxFee);
  if (lo(a)) {
    return o(a.subnetValidator.subnetId.toString() === qe.toString() ? e.addPrimaryNetworkValidatorFee : e.addSubnetValidatorFee);
  }
  if (fo(a)) {
    return o(a.subnetValidator.subnetId.toString() === qe.toString() ? e.addPrimaryNetworkDelegatorFee : e.addSubnetDelegatorFee);
  }
  if (Qi(a) || co(a) || to(a) || eo(a) || xo(a) || Bo(a) || go(a) || yo(a)) return o(e.baseTxFee);
  throw new Error("tx type is not supported");
} });
var Lo = qo = class {
  utxoId;
  assetId;
  output;
  _type = Pe.UTXO;
  constructor(t, e, r) {
    this.utxoId = t, this.assetId = e, this.output = r;
  }
  static fromBytes(t, e) {
    const [r, n, s, a] = ur(t, [zr, Ve, sn], e);
    return [new qo(r, n, s), a];
  }
  getOutputOwners() {
    if (Ir(this.output)) return this.output.outputOwners;
    if (vr(this.output)) return this.output.getOutputOwners();
    if (Tr(this.output)) return this.output;
    throw new Error("unable to get output owner");
  }
  toBytes(t) {
    return concatBytes(fr([this.utxoId, this.assetId], t), t.PackPrefix(this.output));
  }
  getAssetId() {
    return this.assetId.toString();
  }
  ID() {
    return this.utxoId.ID();
  }
};
Lo = qo = f2([(t) => {
}, d("design:paramtypes", [zr, Ve, Object])], Lo);
var Zo = "https://api.avax.network";
var Ko = class {
  url;
  reqId = 0;
  constructor(t) {
    this.url = t;
  }
  async callMethod(t, e, r) {
    const n = { jsonrpc: "2.0", id: this.reqId++, method: t, params: e }, s = await fetch(this.url, { ...r, method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json", ...r?.headers } }).then(async (t2) => t2.json()).then((t2) => t2);
    if (s.error) throw new Error(s.error.message);
    return s.result;
  }
};
var Go = class {
  path;
  base;
  fetchOptions;
  rpcProvider;
  constructor(t = Zo, e, r, n) {
    this.path = e, this.base = r, this.fetchOptions = n, this.rpcProvider = new Ko(t + e);
  }
  setFetchOptions(t) {
    this.fetchOptions = t;
  }
  getMethodName = (t) => this.base ? `${this.base}.${t}` : t;
  callRpc = (t, e) => this.rpcProvider.callMethod(this.getMethodName(t), e, this.fetchOptions);
};
var Xo = class extends Go {
  path;
  base;
  manager;
  constructor(t = Zo, e, r, n) {
    super(t, e, r), this.path = e, this.base = r, this.manager = n;
  }
  async getUTXOs(t) {
    const e = await this.callRpc("getUTXOs", { ...t, encoding: "hex" }), r = e.utxos.map((t2) => this.manager.unpack(ve(t2), Lo));
    return { ...e, utxos: r };
  }
  issueTx(t) {
    return this.callRpc("issueTx", t);
  }
  issueSignedTx(t) {
    return this.issueTx({ tx: Ie(Ao(t.toBytes())) });
  }
};
var zo = class extends Xo {
  getAssetDescription(t) {
    return this.callRpc("getAssetDescription", { assetID: t });
  }
  getTx = async (t) => {
    const e = await this.callRpc("getTx", { ...t, encoding: "hex" });
    return this.manager.unpack(ve(e.tx), $i);
  };
  getTxJson = (t) => this.callRpc("getTx", { ...t, encoding: "json" });
  getTxStatus(t) {
    return this.callRpc("getTxStatus", { includeReason: true, ...t });
  }
  getBalance(t) {
    return this.callRpc("getBalance", t);
  }
  getAddressTxs(t) {
    return this.callRpc("GetAddressTxs", t);
  }
};
var $o = class extends zo {
  constructor(t) {
    super(t, "/ext/bc/X", "avm", kn());
  }
  buildGenesis = async (t) => await this.callRpc("buildGenesis", t);
  getAllBalances(t) {
    return this.callRpc("getAllBalances", t);
  }
};
var Yo = (t, e, r) => {
  const n = Nr(e);
  return t.reduce((t2, e2) => {
    const { importedInputs: s, inputUTXOs: a, importedAmounts: i } = t2, o = e2.output;
    if (!Ir(o)) return t2;
    const c = ko(o.outputOwners, n, r);
    return c ? (s.push(Yr.fromUtxoAndSigindicies(e2, c.sigIndicies)), a.push(e2), i[e2.getAssetId()] = (i[e2.getAssetId()] ?? 0n) + o.amount(), t2) : t2;
  }, { importedInputs: [], inputUTXOs: [], importedAmounts: {} });
};
var Jo = (t, e) => {
  const r = Ve.compare(t.assetId, e.assetId);
  if (0 !== r) return r;
  const n = [vr], s = kn().getDefaultCodec(), a = Ki().getDefaultCodec(), i = n.some((e2) => e2(t.output)) ? a : s, o = n.some((t2) => t2(e.output)) ? a : s;
  return _e(t.toBytes(i), e.toBytes(o));
};
var Wo = (t, e) => t.address.value() === e.address.value() ? _e(t.assetId.toBytes(), e.assetId.toBytes()) : t.address.value().localeCompare(e.address.value());
var Qo = (t) => t.reduce((t2, e) => (t2[e.getAssetId()] = t2[e.getAssetId()] ?? 0n, t2[e.getAssetId()] += e.amount(), t2), {});
var tc = (t, e) => ({ minIssuanceTime: BigInt(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), changeAddresses: t, threshold: 1, memo: new Uint8Array(), locktime: 0n, ...e });
new Fr(new pr(0n), new rr(0), []), new Ve(new Uint8Array(32));
var ec = new Ar(new Uint8Array(Array(65).fill(0)));
var rc = class _rc {
  tx;
  utxos;
  addressMaps;
  credentials;
  constructor(t, e, r, n) {
    this.tx = t, this.utxos = e, this.addressMaps = r, this.credentials = n || this.tx.getSigIndices().map((t2) => new Pr(t2.map(() => ec)));
  }
  toJSON() {
    const t = Gi(this.tx.vm).getDefaultCodec();
    return { codecId: Gi(this.tx.vm).getDefaultCodecId(), vm: this.tx.vm, txBytes: Ie(this.toBytes()), utxos: this.utxos.map((e) => Ie(e.toBytes(t))), addressMaps: this.addressMaps, credentials: this.credentials };
  }
  static fromJSON(t) {
    const e = JSON.parse(t), r = ["txBytes", "utxos", "addressMaps", "vm", "codecId", "credentials"];
    r.forEach((t2) => {
      if (!e[t2]) throw new Error(`invalid structure. must have ${r.join(", ")}, missing ${t2}`);
    });
    const n = e.vm;
    if (!ke.includes(n)) throw new Error("invalid VM");
    const s = Gi(n), [a, i] = s.getCodecFromBuffer(ve(e.txBytes)), o = a.UnpackPrefix(i)[0], c = e.utxos.map((t2) => Lo.fromBytes(ve(t2), a)[0]), u2 = Ro.fromJSON(e.addressMaps), f3 = e.credentials.map((t2) => Pr.fromJSON(t2));
    return new _rc(o, c, u2, f3);
  }
  getSigIndices() {
    return this.tx.getSigIndices();
  }
  hasAddress(t) {
    return this.addressMaps.has(t);
  }
  hasPubkey(t) {
    return this.hasAddress(new De(this.publicKeyBytesToAddress(t)));
  }
  getAddresses() {
    return this.addressMaps.getAddresses();
  }
  getSigIndicesForAddress(t) {
    const e = this.getSigIndices().some((t2, e2) => {
      const r = this.credentials[e2].toJSON().length;
      return Math.max(...t2) > r - 1;
    });
    return this.addressMaps.getSigIndicesForAddress(t, e);
  }
  getSigIndicesForPubKey(t) {
    const e = this.publicKeyBytesToAddress(t), r = ya(t), n = this.getSigIndicesForAddress(new De(e)), s = this.getSigIndicesForAddress(new De(r));
    return n || s;
  }
  getInputUtxos() {
    return this.utxos;
  }
  toBytes() {
    return Xi(this.tx);
  }
  getBlockchainId() {
    return this.tx.getBlockchainId();
  }
  getTx() {
    return this.tx;
  }
  getSignedTx() {
    return new $i(this.tx, this.credentials);
  }
  getCredentials() {
    return this.credentials;
  }
  addSignatureAt(t, e, r) {
    if (e >= this.getCredentials().length) throw new Error("index out of bounds");
    this.getCredentials()[e].setSignature(r, t);
  }
  addSignature(t) {
    const e = ma(sha256(this.toBytes()), t);
    this.addSignatureForPubKey(t, e);
  }
  addSignatureForPubKey(t, e) {
    const r = this.getSigIndicesForPubKey(e);
    r && r.forEach(([e2, r2]) => {
      this.addSignatureAt(t, e2, r2);
    });
  }
  publicKeyBytesToAddress(t) {
    return ga(t);
  }
  hasAllSignatures() {
    const t = this.credentials.map((t2) => t2.getSignatures()), e = ec.toString(), r = sha256(this.toBytes());
    if (!t.every((t2) => t2.every((t3) => t3 !== e))) return false;
    let n = true;
    return this.addressMaps.forEach((e2) => {
      e2.forEach(([e3, s]) => {
        const a = t[e3]?.[s];
        if (!a) throw new Error("error: incorrect structure for credentials");
        const i = ve(a), o = ma(r, i);
        this.hasPubkey(o) || (n = false);
      });
    }, true), n;
  }
  getVM() {
    return this.tx.getVM();
  }
};
var nc2 = () => ({ inputs: [], inputUTXOs: [], stakeOutputs: [], changeOutputs: [], addressMaps: new Ro() });
function sc(t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), r, n, s, a) {
  const i = { amountsToBurn: t, utxos: r, amountsToStake: e, fromAddresses: n, options: s, ...nc2() }, o = [...a, function({ amountsToBurn: t2, ...e2 }) {
    return t2.forEach((t3, e3) => {
      if (0n !== t3) throw new Error(`insufficient funds (Burn Amount): need ${t3} more units of ${e3} to burn`);
    }), { amountsToBurn: t2, ...e2 };
  }, function({ amountsToStake: t2, ...e2 }) {
    return t2.forEach((t3, e3) => {
      if (0n !== t3) throw new Error(`insufficient funds (Stake Amount): need ${t3} more units of ${e3} to stake`);
    }), { amountsToStake: t2, ...e2 };
  }, function({ inputs: t2, ...e2 }) {
    return t2.sort(Yr.compare), { inputs: t2, ...e2 };
  }, function({ changeOutputs: t2, ...e2 }) {
    return t2.sort(Jo), { changeOutputs: t2, ...e2 };
  }, function({ stakeOutputs: t2, ...e2 }) {
    return t2.sort(Jo), { stakeOutputs: t2, ...e2 };
  }, function({ inputs: t2, inputUTXOs: e2, ...r2 }) {
    return { inputs: t2, inputUTXOs: e2, ...r2, addressMaps: Ro.fromTransferableInputs(t2, e2, s.minIssuanceTime, n.map((t3) => t3.toBytes())) };
  }].reduce((t2, e2) => e2(function(t3) {
    return { ...t3, amountsToBurn: new Map([...t3.amountsToBurn]), amountsToStake: new Map([...t3.amountsToStake]), inputs: [...t3.inputs], inputUTXOs: [...t3.inputUTXOs], stakeOutputs: [...t3.stakeOutputs], changeOutputs: [...t3.changeOutputs] };
  }(t2)), i), { amountsToBurn: c, amountsToStake: u2, fromAddresses: f3, options: d2, utxos: l2, ...p2 } = o;
  return p2;
}
var ac = (...t) => t.reduce((t2, e) => e < t2 ? e : t2);
var ic = new Error("No addresses match UTXO owners");
function oc(t, e, r, n) {
  const s = t.reduce((t2, s2) => {
    const a = e(s2), i = ko(a.outputOwners, r, n.minIssuanceTime);
    return i ? [...t2, { sigData: i, data: s2 }] : t2;
  }, []);
  if (t.length && !s.length) throw ic;
  return s;
}
var cc = ({ amountsToBurn: t, utxos: e, options: r, changeOutputs: n, inputUTXOs: s, fromAddresses: a, inputs: i, ...o }) => {
  const c = new Fr(new pr(0n), new rr(r.threshold), Nr(r.changeAddresses));
  return oc(e.filter((e2) => !!t.get(e2.assetId.toString())).filter((t2) => !!Ir(t2.output)), (t2) => t2.output, a, r).forEach(({ sigData: e2, data: r2 }) => {
    const a2 = r2.output, o2 = t.get(r2.assetId.toString()) ?? 0n, u2 = ac(o2, a2.amt.value());
    if (!u2) return;
    t.set(r2.assetId.toString(), o2 - u2), i.push(Yr.fromUtxoAndSigindicies(r2, e2.sigIndicies)), s.push(r2);
    const f3 = a2.amt.value() - u2;
    f3 > 0 && n.push(new Wr(r2.assetId, new Mr(new pr(f3), c)));
  }), { utxos: e, fromAddresses: a, options: r, ...o, amountsToBurn: t, inputs: i, changeOutputs: n, inputUTXOs: s };
};
var uc = (t, e, r, n) => tn.fromNative(t.networkID, t.xBlockchainID, e, r, n);
var fc = (t, e, r, n) => tn.fromNative(t.networkID, t.pBlockchainID, e, r, n);
var dc = Object.freeze({ __proto__: null, AvaxApi: zo, Transaction: tr, UnsignedTx: rc, baseTxUnsafeAvm: uc, baseTxUnsafePvm: fc });
var lc = (t, e, r, n, s, a, i, o) => {
  e.sort(Jo);
  const c = Qo([...e, ...r]), u2 = Qo(n);
  if (!Object.entries(c).every(([t2, e2]) => u2[t2] && u2[t2] >= e2)) throw new Error("Not enough inputs to cover the outputs");
  return new rc(new Bn(uc(t, r, n, a), Ve.fromString(s), e), i, o);
};
var pc = Object.freeze({ __proto__: null, AVMApi: $o, newBaseTx: function(t, e, r, n, s) {
  const a = Nr(e), i = tc(e, s), o = /* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee]]);
  n.forEach((t2) => {
    const e2 = t2.assetId.value();
    o.set(e2, (o.get(e2) || 0n) + t2.output.amount());
  });
  const { inputs: c, inputUTXOs: u2, changeOutputs: f3, addressMaps: d2 } = sc(o, void 0, r, a, i, [cc]), l2 = [...n, ...f3];
  return l2.sort(Jo), new rc(new nn(uc(t, l2, c, i.memo)), u2, d2);
}, newExportTx: function(t, e, r, n, s, a) {
  const i = Nr(r), o = tc(r, a), c = /* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee]]);
  s.forEach((t2) => {
    const e2 = t2.assetId.value();
    c.set(e2, (c.get(e2) || 0n) + t2.output.amount());
  });
  const { inputs: u2, changeOutputs: f3, inputUTXOs: d2, addressMaps: l2 } = sc(c, void 0, n, i, o, [cc]);
  return s.sort(Jo), lc(t, s, f3, u2, e, o.memo, d2, l2);
}, newImportTx: function(t, e, r, n, s, a, i = 1, o = 0n) {
  const c = Nr(s), u2 = tc(s, a), { importedAmounts: f3, importedInputs: d2, inputUTXOs: l2 } = Yo(r, s, u2.minIssuanceTime);
  if (!d2.length) throw new Error("no UTXOs available to import");
  d2.sort(Yr.compare);
  const p2 = Ro.fromTransferableInputs(d2, r, u2.minIssuanceTime, s), h2 = f3[t.avaxAssetID] ?? 0n;
  let m2 = { inputs: [], inputUTXOs: [], stakeOutputs: [], changeOutputs: [], addressMaps: new Ro() };
  const b2 = t.baseTxFee, g2 = t.avaxAssetID;
  if (h2 > b2) f3[g2] -= b2;
  else {
    if (h2 < b2) {
      const t2 = /* @__PURE__ */ new Map([[g2, b2 - h2]]);
      m2 = sc(t2, void 0, r, c, u2, [cc]);
    }
    delete f3[g2];
  }
  return l2.push(...m2.inputUTXOs || []), p2.merge(m2.addressMaps || new Ro()), Object.entries(f3).forEach(([t2, e2]) => {
    m2.changeOutputs.push(Wr.fromNative(t2, e2, n, o, i));
  }), new rc(new vn(tn.fromNative(t.networkID, t.xBlockchainID, m2.changeOutputs || [], m2.inputs || [], u2.memo), Ve.fromString(e), d2), l2, p2);
} });
var hc = class _hc extends rc {
  hasPubkey(t) {
    const e = new De(this.publicKeyBytesToAddress(t)), r = new De(ya(t));
    return this.hasAddress(e) || this.hasAddress(r);
  }
  static fromJSON(t) {
    const e = rc.fromJSON(t);
    return new _hc(e.tx, e.utxos, e.addressMaps, e.credentials);
  }
};
var mc = class extends Go {
  baseURL;
  constructor(t = Zo) {
    super(t, "/ext/info", "info"), this.baseURL = t;
  }
  getNodeVersion() {
    return this.callRpc("getNodeVersion");
  }
  async getNodeId() {
    return this.callRpc("getNodeID");
  }
  getNodeIp() {
    return this.callRpc("getNodeIP");
  }
  getNetworkId() {
    return this.callRpc("getNetworkID");
  }
  getNetworkName() {
    return this.callRpc("getNetworkName");
  }
  getBlockchainId(t) {
    return this.callRpc("getBlockchainID", { alias: t });
  }
  peers(t) {
    return this.callRpc("peers", { nodeIDs: t });
  }
  isBootstrapped(t) {
    return this.callRpc("peers", { chain: t });
  }
  async getTxFee() {
    const t = await this.callRpc("getTxFee");
    return { txFee: BigInt(t.txFee), createAssetTxFee: BigInt(t.createAssetTxFee), createSubnetTxFee: BigInt(t.createSubnetTxFee), transformSubnetTxFee: BigInt(t.transformSubnetTxFee), createBlockchainTxFee: BigInt(t.createBlockchainTxFee), addPrimaryNetworkValidatorFee: BigInt(t.addPrimaryNetworkValidatorFee), addPrimaryNetworkDelegatorFee: BigInt(t.addPrimaryNetworkDelegatorFee), addSubnetValidatorFee: BigInt(t.addSubnetValidatorFee), addSubnetDelegatorFee: BigInt(t.addSubnetDelegatorFee) };
  }
  uptime() {
    return this.callRpc("uptime");
  }
  getVMs() {
    return this.callRpc("getVMs");
  }
};
var bc = Object.freeze({ __proto__: null, getContextFromURI: async (t, e = "AVAX") => {
  const r = new $o(t), { assetID: n } = await r.getAssetDescription(e), s = new mc(t), { txFee: a, createAssetTxFee: i, createSubnetTxFee: o, transformSubnetTxFee: c, createBlockchainTxFee: u2, addPrimaryNetworkValidatorFee: f3, addPrimaryNetworkDelegatorFee: d2, addSubnetValidatorFee: l2, addSubnetDelegatorFee: p2 } = await s.getTxFee(), { blockchainID: h2 } = await s.getBlockchainId("X"), { blockchainID: m2 } = await s.getBlockchainId("P"), { blockchainID: b2 } = await s.getBlockchainId("C"), { networkID: g2 } = await s.getNetworkId();
  return Object.freeze({ xBlockchainID: h2, pBlockchainID: m2, cBlockchainID: b2, avaxAssetID: n, baseTxFee: a, createAssetTxFee: i, createSubnetTxFee: o, transformSubnetTxFee: c, createBlockchainTxFee: u2, addPrimaryNetworkValidatorFee: f3, addPrimaryNetworkDelegatorFee: d2, addSubnetValidatorFee: l2, addSubnetDelegatorFee: p2, networkID: g2, hrp: Je(g2) });
} });
var gc = class extends Go {
  constructor(t) {
    super(t, "/ext/bc/C/rpc");
  }
  async getBaseFee() {
    return BigInt(await this.callRpc("eth_baseFee"));
  }
};
var yc = (t) => ({ locktime: 0n, threshold: 1, ...t });
function wc(t, e, r, n, s, a, i, o, c) {
  return e * So(xc(t, r, n, s, a, e, i, o, c));
}
function xc(t, e, r, n, s, a, i, o, c) {
  o = o ?? t.avaxAssetID;
  const { threshold: u2, locktime: f3 } = yc(c), d2 = [];
  t.avaxAssetID === o ? d2.push({ assetId: t.avaxAssetID, amount: e + a }) : (d2.push({ amount: a, assetId: t.avaxAssetID }), d2.push({ amount: e, assetId: o }));
  const l2 = d2.map(({ assetId: t2, amount: e2 }) => new Dn(new De(n), new pr(e2), Ve.fromString(t2), new pr(i))), p2 = [new Wr(Ve.fromString(o), new Mr(new pr(e), new Fr(new pr(f3), new rr(u2), Nr(s))))];
  return l2.sort(Dn.compare), new hc(new _n(new rr(t.networkID), Ve.fromString(t.cBlockchainID), Ve.fromString(r), l2, p2), [], new Ro([new Po([[new De(n), 0]])]));
}
function Bc(t, e, r, n, s, a = 0n, i = t.avaxAssetID) {
  const o = Nr(r), c = /* @__PURE__ */ new Map();
  let u2 = [], f3 = [], d2 = 0n;
  const l2 = [];
  n.forEach((t2) => {
    const e2 = t2.getAssetId(), r2 = t2.output, n2 = r2.amount();
    let s2 = n2;
    i && a && d2 < a && i === e2 && (d2 += s2, d2 > a ? (s2 = d2 - a, d2 = a) : s2 = 0n);
    const f4 = ko(r2.outputOwners, o, 0n);
    if (!f4) return;
    const p3 = new Yr(t2.utxoId, t2.assetId, Kr2.fromNative(n2, f4.sigIndicies));
    u2.push(p3), l2.push(t2);
    const h3 = c.get(e2);
    h3 && (s2 += h3), c.set(e2, s2);
  });
  for (const [t2, r2] of c.entries()) f3.push(new Vn(new De(e), new pr(r2), Ve.fromString(t2)));
  u2 = u2.sort(Yr.compare);
  const p2 = Ro.fromTransferableInputs(u2, n, 0n, r);
  f3 = f3.sort(Wo);
  const h2 = new Mn(new rr(t.networkID), Ve.fromString(t.cBlockchainID), Ve.fromString(s), u2, f3);
  return new hc(h2, l2, p2);
}
var Ic = Object.freeze({ __proto__: null, EVMApi: class extends Xo {
  ethAPI;
  constructor(t) {
    super(t, "/ext/bc/C/avax", "avax", jn()), this.ethAPI = new gc(t);
  }
  getAtomicTx = async (t) => {
    const e = await this.callRpc("getAtomicTx", { ...t, encoding: "hex" });
    return this.manager.unpack(ve(e.tx), $i);
  };
  getBaseFee() {
    return this.ethAPI.getBaseFee();
  }
  getAtomicTxStatus(t) {
    return this.callRpc("getAtomicTxStatus", { txID: t });
  }
}, estimateExportCost: wc, newExportTx: xc, newExportTxFromBaseFee: function(t, e, r, n, s, a, i, o, c) {
  return xc(t, r, n, s, a, wc(t, e, r, n, s, a, i, o, c), i, o, c);
}, newImportTx: Bc, newImportTxFromBaseFee: function(t, e, r, n, s, a = 0n, i) {
  const o = function(t2, e2, r2, n2, s2, a2 = 0n, i2) {
    const o2 = Bc(t2, e2, r2, n2, s2, a2, i2), c = So(o2);
    return a2 * c;
  }(t, e, r, n, s, a, i);
  return Bc(t, e, r, n, s, o, i);
} });
function vc(t, e, r, n) {
  return new Wr(t.assetId, new ms(e.lockTime, new Mr(new pr(n), r.outputOwners)));
}
function Tc({ amountsToBurn: t, utxos: e, fromAddresses: r, amountsToStake: n, options: s, changeOutputs: a, inputUTXOs: i, inputs: o, stakeOutputs: c, ...u2 }) {
  return oc(e.filter((t2) => {
    const e2 = t2.output;
    return !!vr(e2) && s.minIssuanceTime < e2.getLocktime();
  }).map((t2) => {
    const e2 = t2.assetId.value();
    return { utxo: t2, assetId: e2, remainingAmountToStake: n.get(e2) ?? 0n, lockedOutput: t2.output };
  }).filter(({ remainingAmountToStake: t2 }) => !!t2).filter(({ lockedOutput: t2 }) => {
    if (!(t2.transferOut instanceof Mr)) throw new Error("unknown output type");
    return s.minIssuanceTime < t2.lockTime.value();
  }), ({ lockedOutput: t2 }) => t2.transferOut, r, s).forEach(({ sigData: t2, data: { utxo: e2, assetId: r2, lockedOutput: s2 } }) => {
    const u3 = s2.transferOut, f3 = n.get(r2) ?? 0n;
    if (!f3) return;
    o.push(function(t3, e3, r3, n2) {
      return new Yr(t3.utxoId, t3.assetId, new ps(e3.lockTime, Kr2.fromNative(r3.amount(), n2.sigIndicies)));
    }(e2, s2, u3, t2)), i.push(e2);
    const d2 = ac(f3, u3.amt.value());
    c.push(vc(e2, s2, u3, d2)), n.set(r2, f3 - d2);
    const l2 = u3.amount() - d2;
    l2 > 0n && a.push(vc(e2, s2, u3, l2));
  }), { ...u2, amountsToBurn: t, utxos: e, fromAddresses: r, amountsToStake: n, options: s, changeOutputs: a, inputUTXOs: i, inputs: o, stakeOutputs: c };
}
function Sc({ amountsToBurn: t, utxos: e, fromAddresses: r, amountsToStake: n, options: s, changeOutputs: a, inputUTXOs: i, inputs: o, stakeOutputs: c, ...u2 }) {
  const f3 = new Fr(new pr(0n), new rr(1), Nr(s.changeAddresses));
  return oc(e.filter((t2) => {
    if (Ir(t2.output)) return true;
    const e2 = t2.output;
    return !(!vr(e2) || !Ir(e2.transferOut)) && e2.getLocktime() < s.minIssuanceTime;
  }), (t2) => Ir(t2.output) ? t2.output : t2.output.transferOut, r, s).forEach(({ sigData: e2, data: r2 }) => {
    const s2 = t.get(r2.assetId.value()) ?? 0n, u3 = n.get(r2.assetId.value()) ?? 0n;
    if (!s2 && !u3) return;
    const d2 = Ir(r2.output) ? r2.output : r2.output.transferOut;
    o.push(new Yr(r2.utxoId, r2.assetId, Kr2.fromNative(d2.amount(), e2.sigIndicies))), i.push(r2);
    const l2 = ac(s2, d2.amt.value());
    t.set(r2.assetId.value(), s2 - l2);
    const p2 = d2.amount() - l2, h2 = ac(u3, p2);
    n.set(r2.assetId.value(), (n.get(r2.assetId.value()) ?? 0n) - h2), h2 > 0n && c.push(new Wr(r2.assetId, new Mr(new pr(h2), f3)));
    const m2 = p2 - h2;
    m2 > 0 && a.push(new Wr(r2.assetId, new Mr(new pr(m2), f3)));
  }), { ...u2, amountsToBurn: t, utxos: e, fromAddresses: r, amountsToStake: n, options: s, changeOutputs: a, inputUTXOs: i, inputs: o, stakeOutputs: c };
}
var Oc = (t, e) => t.getAssetId() === e.getAssetId() && (vr(t.output) && vr(e.output) && t.output.getStakeableLocktime() === e.output.getStakeableLocktime() && t.output.getOutputOwners().equals(e.output.getOutputOwners()) || Ir(t.output) && Ir(e.output) && t.output.outputOwners.equals(e.output.outputOwners));
var Ec = (t, e) => {
  if (vr(t.output) && vr(e.output)) return new Wr(t.assetId, new ms(t.output.lockTime, new Mr(new pr(t.amount() + e.amount()), t.output.getOutputOwners())));
  if (Ir(t.output) && Ir(e.output)) return new Wr(t.assetId, new Mr(new pr(t.amount() + e.amount()), t.output.outputOwners));
  throw new Error("Calling combine on incompatible TransferableOutputs");
};
var Ac = (t) => ((t2, e, r) => {
  const n = [];
  for (const s of t2) {
    let t3 = false;
    for (let a = 0; a < n.length; a++) {
      const i = n[a];
      if (e(i, s)) {
        n[a] = r(i, s), t3 = true;
        break;
      }
    }
    t3 || n.push(s);
  }
  return n;
})(t, Oc, Ec);
function kc({ changeOutputs: t, stakeOutputs: e, ...r }) {
  return { ...r, changeOutputs: Ac(t), stakeOutputs: Ac(e) };
}
var Pc = Object.freeze({ __proto__: null, PVMApi: class extends zo {
  constructor(t) {
    super(t, "/ext/bc/P", "platform", Ki());
  }
  getAssetDescription(t) {
    return this.callRpc("getAssetDescription", { assetID: t });
  }
  getCurrentValidators(t) {
    return this.callRpc("getCurrentValidators", t);
  }
  getPendingValidators(t) {
    return this.callRpc("getPendingValidators", t);
  }
  async getRewardUTXOs(t) {
    const e = await this.callRpc("getRewardUTXOs", t);
    return { ...e, utxos: e.utxos.map((t2) => Ki().unpack(ve(t2), Lo)) };
  }
  async getStake(t) {
    const e = await this.callRpc("getStake", t);
    return { ...e, stakedOutputs: e.stakedOutputs.map((t2) => Ki().unpack(ve(t2), Wr)) };
  }
  getValidatorsAt(t) {
    return this.callRpc("getValidatorsAt", t);
  }
  getCurrentSupply() {
    return this.callRpc("getCurrentSupply");
  }
  getMaxStakeAmount(t) {
    return this.callRpc("getMaxStakeAmount", t);
  }
  async getBalance(t) {
    const e = await this.callRpc("getBalance", t);
    return { balance: BigInt(e.balance), unlocked: BigInt(e.unlocked), lockedStakeable: BigInt(e.lockedStakeable), lockedNotStakeable: BigInt(e.lockedNotStakeable), utxoIDs: e.utxoIDs };
  }
  getBlockchains() {
    return this.callRpc("getBlockchains");
  }
  getBlockchainStatus(t) {
    return this.callRpc("getBlockchainStatus", { blockchainID: t });
  }
  getHeight() {
    return this.callRpc("getHeight");
  }
  getMinStake() {
    return this.callRpc("getMinStake");
  }
  getStakingAssetID(t) {
    return this.callRpc("getStakingAssetID", t);
  }
  getSubnets(t) {
    return this.callRpc("getSubnets", t);
  }
  getTimestamp() {
    return this.callRpc("getTimestamp");
  }
  getTotalStake(t) {
    return this.callRpc("getTotalStake", { subnetID: t });
  }
  getTxStatus(t) {
    return this.callRpc("getTxStatus", t);
  }
  sampleValidators(t) {
    return this.callRpc("sampleValidators", t);
  }
  validatedBy(t) {
    return this.callRpc("validatedBy", t);
  }
  validates(t) {
    return this.callRpc("validates", t);
  }
}, newAddDelegatorTx: function(t, e, r, n, s, a, i, o, c, u2 = 1, f3 = 0n) {
  const d2 = /* @__PURE__ */ new Map([[t.avaxAssetID, t.addPrimaryNetworkDelegatorFee]]), l2 = /* @__PURE__ */ new Map([[t.avaxAssetID, i]]), p2 = tc(r, c), { inputs: h2, addressMaps: m2, changeOutputs: b2, inputUTXOs: g2, stakeOutputs: y2 } = sc(d2, l2, e, Nr(r), p2, [Tc, Sc, kc]), w2 = new Gn(tn.fromNative(t.networkID, t.pBlockchainID, b2, h2, p2.memo), Zn.fromNative(n, s, a, i), y2, Fr.fromNative(o, f3, u2));
  return new rc(w2, g2, m2);
}, newAddPermissionlessDelegatorTx: function(t, e, r, n, s, a, i, o, c, u2, f3 = 1, d2 = 0n, l2) {
  const p2 = s === qe.toString(), h2 = p2 ? t.addPrimaryNetworkDelegatorFee : t.addSubnetDelegatorFee, m2 = l2 ?? t.avaxAssetID;
  if (p2 && m2 !== t.avaxAssetID) throw new Error("Staking asset ID must be AVAX for the primary network.");
  const b2 = /* @__PURE__ */ new Map([[t.avaxAssetID, h2]]), g2 = /* @__PURE__ */ new Map([[m2, o]]), y2 = tc(r, u2), { addressMaps: w2, changeOutputs: x2, inputUTXOs: B2, inputs: I3, stakeOutputs: v2 } = sc(b2, g2, e, Nr(r), y2, [Tc, Sc, kc]), T2 = new ws(tn.fromNative(t.networkID, t.pBlockchainID, x2, I3, y2.memo), $n.fromNative(n, a, i, o, Ve.fromString(s)), v2, Fr.fromNative(c, d2, f3));
  return new rc(T2, B2, w2);
}, newAddPermissionlessValidatorTx: function(t, e, r, n, s, a, i, o, c, u2, f3, d2, l2 = 1, p2 = 0n, h2, m2, b2) {
  const g2 = s === qe.toString(), y2 = g2 ? t.addPrimaryNetworkValidatorFee : t.addSubnetValidatorFee, w2 = /* @__PURE__ */ new Map([[t.avaxAssetID, y2]]), x2 = b2 ?? t.avaxAssetID;
  if (g2 && x2 !== t.avaxAssetID) throw new Error("Staking asset ID must be AVAX for the primary network.");
  const B2 = /* @__PURE__ */ new Map([[x2, o]]), I3 = tc(r, d2), { addressMaps: v2, changeOutputs: T2, inputUTXOs: S2, inputs: O2, stakeOutputs: E2 } = sc(w2, B2, e, Nr(r), I3, [Tc, Sc, kc]), A2 = new gs(tn.fromNative(t.networkID, t.pBlockchainID, T2, O2, I3.memo), $n.fromNative(n, a, i, o, Ve.fromString(s)), function(t2, e2) {
    return t2 && e2 ? new Ni(new Pi2(new Uint8Array(t2), new Uint8Array(e2))) : new _i();
  }(h2, m2), E2, Fr.fromNative(c, p2, l2), Fr.fromNative(u2, 0n), new rr(f3));
  return new rc(A2, S2, v2);
}, newAddSubnetValidatorTx: function(t, e, r, n, s, a, i, o, c, u2) {
  const f3 = tc(r, u2), { inputs: d2, addressMaps: l2, changeOutputs: p2, inputUTXOs: h2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.addSubnetValidatorFee]]), void 0, e, Nr(r), f3, [Sc]), m2 = new Jn(tn.fromNative(t.networkID, t.pBlockchainID, p2, d2, f3.memo), $n.fromNative(n, s, a, i, Ve.fromString(o)), Dr.fromNative(c));
  return new rc(m2, h2, l2);
}, newAddValidatorTx: function(t, e, r, n, s, a, i, o, c, u2, f3 = 1, d2 = 0n) {
  const l2 = /* @__PURE__ */ new Map([[t.avaxAssetID, t.addPrimaryNetworkValidatorFee]]), p2 = /* @__PURE__ */ new Map([[t.avaxAssetID, i]]), h2 = tc(r, u2), { addressMaps: m2, changeOutputs: b2, inputUTXOs: g2, inputs: y2, stakeOutputs: w2 } = sc(l2, p2, e, Nr(r), h2, [Tc, Sc, kc]), x2 = new Qn(tn.fromNative(t.networkID, t.pBlockchainID, b2, y2, h2.memo), Zn.fromNative(n, s, a, i), w2, Fr.fromNative(o, d2, f3), new rr(c));
  return new rc(x2, g2, m2);
}, newBaseTx: function(t, e, r, n, s) {
  const a = Nr(e), i = tc(e, s), o = /* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee]]);
  n.forEach((t2) => {
    const e2 = t2.assetId.value();
    o.set(e2, (o.get(e2) || 0n) + t2.output.amount());
  });
  const { inputs: c, inputUTXOs: u2, changeOutputs: f3, addressMaps: d2 } = sc(o, void 0, r, a, i, [Sc, kc]), l2 = [...n, ...f3];
  return l2.sort(Jo), new rc(new Li(fc(t, l2, c, i.memo)), u2, d2);
}, newCreateBlockchainTx: function(t, e, r, n, s, a, i, o, c, u2) {
  const f3 = tc(r, u2), { inputs: d2, addressMaps: l2, changeOutputs: p2, inputUTXOs: h2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.createBlockchainTxFee]]), void 0, e, Nr(r), f3, [Sc]), m2 = new ns(tn.fromNative(t.networkID, t.pBlockchainID, p2, d2, f3.memo), Ve.fromString(n), new Br(s), Ve.fromString(a), i.map(Ve.fromString.bind(Ve)), new gr(new TextEncoder().encode(JSON.stringify(o))), Dr.fromNative(c));
  return new rc(m2, h2, l2);
}, newCreateSubnetTx: function(t, e, r, n, s, a = 1, i = 0n) {
  const o = tc(r, s), { inputs: c, addressMaps: u2, changeOutputs: f3, inputUTXOs: d2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.createSubnetTxFee]]), void 0, e, Nr(r), o, [Sc]), l2 = new as(tn.fromNative(t.networkID, t.pBlockchainID, f3, c, o.memo), Fr.fromNative(n, i, a));
  return new rc(l2, d2, u2);
}, newExportTx: function(t, e, r, n, s, a) {
  const i = Nr(r), o = tc(r, a), c = ((t2, e2, r2) => {
    const n2 = /* @__PURE__ */ new Map([[t2.avaxAssetID, r2]]);
    return e2.forEach((t3) => {
      const e3 = t3.assetId.value();
      n2.set(e3, (n2.get(e3) || 0n) + t3.output.amount());
    }), n2;
  })(t, s, t.baseTxFee), { inputs: u2, changeOutputs: f3, addressMaps: d2, inputUTXOs: l2 } = sc(c, void 0, n, i, o, [Sc]);
  return s.sort(Jo), new rc(new os(new tn(new rr(t.networkID), je, f3, u2, new gr(o.memo)), Ve.fromString(e), s), l2, d2);
}, newImportTx: function(t, e, r, n, s, a, i = 1, o = 0n) {
  const c = Nr(s), u2 = tc(s, a);
  r = r.filter((e2) => e2.assetId.toString() === t.avaxAssetID);
  const { importedAmounts: f3, importedInputs: d2, inputUTXOs: l2 } = Yo(r, s, u2.minIssuanceTime), p2 = f3[t.avaxAssetID] ?? 0n;
  d2.sort(Yr.compare);
  const h2 = Ro.fromTransferableInputs(d2, r, u2.minIssuanceTime, s);
  if (!d2.length) throw new Error("no UTXOs available to import");
  let m2 = [], b2 = [];
  if (p2 < t.baseTxFee) {
    const e2 = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee - p2]]), void 0, r, c, u2, [Sc]);
    m2 = e2.inputs, b2 = e2.changeOutputs;
  } else p2 > t.baseTxFee && b2.push(Wr.fromNative(t.avaxAssetID, p2 - t.baseTxFee, n, o, i));
  return new rc(new us(new tn(new rr(t.networkID), je, b2, m2, new gr(u2.memo)), Ve.fromString(e), d2), l2, h2);
}, newRemoveSubnetValidatorTx: function(t, e, r, n, s, a, i) {
  const o = tc(r, i), { inputs: c, addressMaps: u2, changeOutputs: f3, inputUTXOs: d2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee]]), void 0, e, Nr(r), o, [Sc]), l2 = new Vi(tn.fromNative(t.networkID, t.pBlockchainID, f3, c, o.memo), Me.fromString(n), Ve.fromString(s), Dr.fromNative(a));
  return new rc(l2, d2, u2);
}, newTransferSubnetOwnershipTx: function(t, e, r, n, s, a, i, o = 1, c = 0n) {
  const u2 = tc(r, i), { inputs: f3, addressMaps: d2, changeOutputs: l2, inputUTXOs: p2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.baseTxFee]]), void 0, e, Nr(r), u2, [Sc]);
  return new rc(new Ci(tn.fromNative(t.networkID, t.pBlockchainID, l2, f3, u2.memo), Ve.fromString(n), Dr.fromNative(s), Fr.fromNative(a, c, o)), p2, d2);
}, newTransformSubnetTx: function(t, e, r, n, s, a, i, o, c, u2, f3, d2, l2, p2, h2, m2, b2, g2, y2) {
  const w2 = tc(r, y2), { inputs: x2, addressMaps: B2, changeOutputs: I3, inputUTXOs: v2 } = sc(/* @__PURE__ */ new Map([[t.avaxAssetID, t.transformSubnetTxFee]]), void 0, e, Nr(r), w2, [Sc]);
  return new rc(new qi(tn.fromNative(t.networkID, t.pBlockchainID, I3, x2, w2.memo), Ve.fromString(n), Ve.fromString(s), new pr(a), new pr(i), new pr(o), new pr(c), new pr(u2), new pr(f3), new rr(d2), new rr(l2), new rr(p2), new rr(h2), new mr(ve(m2.toString(16))), new rr(b2), Dr.fromNative(g2)), v2, B2);
} });

// src/constants/consts.ts
init_polyfills();

// src/utils/address.ts
init_polyfills();

// src/constants/hypervm.ts
init_polyfills();
var HRP = "nuklai";
var SYMBOL = "NAI";
var DECIMALS = 9;
var ED25519_ID = 0;
var SECP256R1_ID = 1;
var BLS_ID = 2;
var ED25519_COMPUTE_UNITS = 5;
var SECP256R1_COMPUTE_UNITS = 10;
var BLS_COMPUTE_UNITS = 10;
var TRANSFER_ID = 0;
var CREATEASSET_ID = 1;
var MINTASSET_ID = 2;
var TRANSFER_COMPUTE_UNITS = 1;
var CREATEASSET_COMPUTE_UNITS = 5;
var MINTASSET_COMPUTE_UNITS = 5;
var STORAGE_BALANCE_CHUNKS = 1;
var STORAGE_ASSET_CHUNKS = 5;
var REGISTER_VALIDATOR_STAKE_CHUNKS = 5;
var DELEGATE_USER_STAKE_CHUNKS = 3;
var MAX_SYMBOL_SIZE = 8;
var MAX_MEMO_SIZE = 256;
var MAX_METADATA_SIZE = 256;
var MAX_DECIMALS = 9;

// src/utils/hashing.ts
init_polyfills();
var import_crypto2 = require("crypto");
var import_crypto_browserify = __toESM(require_crypto_browserify(), 1);
var isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
var createHash = isNode ? import_crypto2.createHash : import_crypto_browserify.createHash;
function ComputeHash256Array(buf) {
  const hash = createHash("sha256");
  hash.update(buf);
  return new Uint8Array(hash.digest());
}
function ComputeHash256(buf) {
  return ComputeHash256Array(buf);
}
function ToID(bytes3) {
  return ComputeHash256(bytes3);
}
function createActionID(txID, i) {
  if (txID.toBytes().length !== ID_LEN) {
    throw new Error(`txID must be ${ID_LEN} bytes long`);
  }
  if (i < 0 || i > 255) {
    throw new Error(`i must be a between 0 and 255`);
  }
  const actionBytes = new Uint8Array(ID_LEN + UINT8_LEN);
  actionBytes.set(txID.toBytes(), 0);
  actionBytes[ID_LEN] = i;
  return Ve.fromBytes(ToID(actionBytes))[0];
}

// src/utils/address.ts
var Address = class _Address {
  constructor(address) {
    this.address = address;
    this.address = address;
  }
  _type = Pe.Address;
  static fromBytes(buf) {
    return [new _Address(buf.slice(0, ADDRESS_LEN)), buf.slice(ADDRESS_LEN)];
  }
  toJSON(hrp = HRP) {
    return this.toString(hrp);
  }
  //decodes from bech32 Addresses
  static fromString(addr) {
    return new _Address(jo.parseBech32(addr)[1]);
  }
  static fromHex(hex2) {
    return new _Address(jo.hexToBuffer(hex2));
  }
  toHex() {
    return jo.bufferToHex(this.address);
  }
  toBytes() {
    return jo.padLeft(this.address, ADDRESS_LEN);
  }
  toString(hrp = HRP) {
    return jo.formatBech32(hrp, this.address);
  }
  value() {
    return this.toString();
  }
  static newAddress(authTypeID, publicKeyBytes) {
    if (![ED25519_ID, SECP256R1_ID, BLS_ID].includes(authTypeID)) {
      throw new Error("invalid auth type");
    }
    const address = new Uint8Array(ADDRESS_LEN);
    address[0] = authTypeID;
    address.set(ToID(publicKeyBytes), 1);
    return _Address.fromBytes(address)[0];
  }
  static formatAddress(address) {
    return jo.formatBech32(HRP, address);
  }
  static parseAddress(address) {
    return jo.parseBech32(address)[1];
  }
};

// src/constants/consts.ts
var BOOL_LEN = 1;
var BYTE_LEN = 1;
var SHORT_LEN = 1;
var UINT8_LEN = 1;
var UINT16_LEN = 2;
var INT_LEN = 4;
var UINT32_LEN = 4;
var UINT64_LEN = 8;
var INT64_LEN = 8;
var LONG_LEN = 8;
var ID_LEN = 32;
var ADDRESS_LEN = 33;
var EMPTY_ID = new Ve(new Uint8Array(ID_LEN));
var EMPTY_ADDRESS = new Address(new Uint8Array(ADDRESS_LEN));
var NETWORK_SIZE_LIMIT = 2044723;
var MaxUint8 = 255;
var MaxUint16 = 65535;
var MaxUint8Offset = 7;
var MaxUint = Number.MAX_SAFE_INTEGER;
var MaxInt = Math.floor(MaxUint / 2);
var MaxUint64Offset = 63;
var MaxUint64 = BigInt("0xFFFFFFFFFFFFFFFF");
var MillisecondsPerSecond = BigInt(1e3);
var MaxStringLen = 65535;

// src/utils/utils.ts
init_polyfills();
function parseBalance(amount, decimals) {
  const parsedAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return BigInt(Math.floor(parsedAmount * Math.pow(10, decimals)));
}
function formatBalance(parsedAmount, decimals) {
  const factor = Math.pow(10, decimals);
  const parsedBigInt = typeof parsedAmount === "bigint" ? parsedAmount : BigInt(parsedAmount);
  const wholePart = Number(parsedBigInt / BigInt(factor));
  const fractionalPart = Number(parsedBigInt % BigInt(factor)) / factor;
  return wholePart + fractionalPart;
}
function getUnixRMilli(now, add) {
  let currentTime = now;
  if (currentTime < 0) {
    currentTime = Date.now();
  }
  const t = BigInt(currentTime) + BigInt(add);
  return t - t % MillisecondsPerSecond;
}
function bufferEquals(buf1, buf2) {
  if (buf1.length !== buf2.length) return false;
  for (let i = 0; i < buf1.length; i++) {
    if (buf1[i] !== buf2[i]) return false;
  }
  return true;
}
function toAssetID(asset) {
  return asset.toUpperCase() === SYMBOL ? EMPTY_ID : Ve.fromString(asset);
}

// src/codec/codec.ts
var ErrInsufficientLength = new Error(
  "packer has insufficient length for input"
);
var errNegativeOffset = new Error("negative offset");
var errInvalidInput = new Error("input does not match expected format");
var errBadBool = new Error("unexpected value when unpacking bool");
var errOversized = new Error("size is larger than limit");
var Codec = class _Codec {
  buffer;
  offset;
  maxSize;
  error;
  constructor(bytes3, maxSize = Infinity) {
    this.buffer = bytes3 || new Uint8Array();
    this.offset = 0;
    this.maxSize = maxSize;
  }
  static newWriter(initialBufferSize, maxSize) {
    return new _Codec(new Uint8Array(initialBufferSize), maxSize);
  }
  static newReader(bytes3, maxSize) {
    return new _Codec(bytes3, maxSize);
  }
  checkSpace(bytes3) {
    if (this.offset < 0) {
      this.error = errNegativeOffset;
    } else if (bytes3 < 0) {
      this.error = errInvalidInput;
    } else if (this.buffer.length - this.offset < bytes3) {
      this.error = ErrInsufficientLength;
    }
  }
  expand(bytes3) {
    const neededSize = bytes3 + this.offset;
    if (neededSize <= this.buffer.length) {
      return;
    }
    if (neededSize > this.maxSize) {
      this.error = ErrInsufficientLength;
      return;
    }
    if (neededSize <= this.buffer.byteLength) {
      const newBuffer2 = new Uint8Array(this.buffer.byteLength);
      newBuffer2.set(this.buffer);
      this.buffer = newBuffer2.subarray(0, neededSize);
      return;
    }
    const newBuffer = new Uint8Array(neededSize);
    newBuffer.set(this.buffer);
    this.buffer = newBuffer;
  }
  packByte(value) {
    this.expand(BYTE_LEN);
    if (this.error) return;
    this.buffer[this.offset] = value;
    this.offset += BYTE_LEN;
  }
  unpackByte() {
    this.checkSpace(BYTE_LEN);
    if (this.error) return 0;
    const value = this.buffer[this.offset];
    this.offset += BYTE_LEN;
    return value;
  }
  packShort(value) {
    this.expand(SHORT_LEN);
    if (this.error) return;
    new DataView(this.buffer.buffer).setUint16(this.offset, value, false);
    this.offset += SHORT_LEN;
  }
  unpackShort() {
    this.checkSpace(SHORT_LEN);
    if (this.error) return 0;
    const value = new DataView(this.buffer.buffer).getUint16(this.offset, false);
    this.offset += SHORT_LEN;
    return value;
  }
  packInt(value) {
    this.expand(INT_LEN);
    if (this.error) return;
    new DataView(this.buffer.buffer).setUint32(this.offset, value, false);
    this.offset += INT_LEN;
  }
  unpackInt() {
    this.checkSpace(INT_LEN);
    if (this.error) return 0;
    const value = new DataView(this.buffer.buffer).getUint32(this.offset, false);
    this.offset += INT_LEN;
    return value;
  }
  packLong(value) {
    this.expand(LONG_LEN);
    if (this.error) return;
    new DataView(this.buffer.buffer).setBigUint64(this.offset, value, false);
    this.offset += LONG_LEN;
  }
  unpackLong() {
    this.checkSpace(LONG_LEN);
    if (this.error) return 0n;
    const value = new DataView(this.buffer.buffer).getBigUint64(
      this.offset,
      false
    );
    this.offset += LONG_LEN;
    return value;
  }
  packBool(value) {
    this.packByte(value ? 1 : 0);
  }
  unpackBool() {
    const b2 = this.unpackByte();
    if (b2 === 0) return false;
    if (b2 === 1) return true;
    this.error = errBadBool;
    return false;
  }
  packFixedBytes(bytes3) {
    this.expand(bytes3.length);
    if (this.error) return;
    this.buffer.set(bytes3, this.offset);
    this.offset += bytes3.length;
  }
  unpackFixedBytes(size) {
    this.checkSpace(size);
    if (this.error) return new Uint8Array();
    const bytes3 = this.buffer.slice(this.offset, this.offset + size);
    this.offset += size;
    return bytes3;
  }
  packBytes(bytes3) {
    this.packInt(bytes3.length);
    this.packFixedBytes(bytes3);
  }
  unpackBytes() {
    const size = this.unpackInt();
    return this.unpackFixedBytes(size);
  }
  unpackLimitedBytes(limit) {
    const size = this.unpackInt();
    if (size > limit) {
      this.error = errOversized;
      return new Uint8Array();
    }
    return this.unpackFixedBytes(size);
  }
  packStr(value) {
    const strBytes = new TextEncoder().encode(value);
    if (strBytes.length > MaxStringLen) {
      this.error = errInvalidInput;
      return;
    }
    this.packShort(strBytes.length);
    this.packFixedBytes(strBytes);
  }
  unpackStr() {
    const length = this.unpackShort();
    return new TextDecoder().decode(this.unpackFixedBytes(length));
  }
  unpackLimitedStr(limit) {
    const length = this.unpackShort();
    if (length > limit) {
      this.error = errOversized;
      return "";
    }
    return new TextDecoder().decode(this.unpackFixedBytes(length));
  }
  packID(id) {
    this.packFixedBytes(id.toBytes());
  }
  unpackID(required) {
    const id = this.unpackFixedBytes(ID_LEN);
    if (required && bufferEquals(id, EMPTY_ID.toBytes())) {
      this.addError(new Error("Id field is not populated"));
    }
    return Ve.fromBytes(id)[0];
  }
  packUint64(value) {
    this.packLong(value);
  }
  unpackUint64(required) {
    const value = this.unpackLong();
    if (required && value === 0n) {
      this.addError(new Error("Uint64 field is not populated"));
    }
    return value;
  }
  packInt64(value) {
    this.packLong(value);
  }
  unpackInt64(required) {
    const value = this.unpackLong();
    if (required && value === 0n) {
      this.addError(new Error("Int64 field is not populated"));
    }
    return value;
  }
  packString(value) {
    this.packStr(value);
  }
  unpackString(required) {
    const value = this.unpackStr();
    if (required && value === "") {
      this.addError(new Error("String field is not populated"));
    }
    return value;
  }
  packAddress(address) {
    this.packFixedBytes(address.toBytes());
  }
  unpackAddress() {
    const address = this.unpackFixedBytes(ADDRESS_LEN);
    if (bufferEquals(address, EMPTY_ADDRESS.toBytes())) {
      this.addError(new Error("Address field is not populated"));
    }
    return Address.fromBytes(address)[0];
  }
  toBytes() {
    return this.buffer.slice(0, this.offset);
  }
  getOffset() {
    return this.offset;
  }
  hasError() {
    return this.error !== null;
  }
  getError() {
    return this.error;
  }
  addError(err2) {
    if (!this.error) {
      this.error = err2;
    }
  }
  empty() {
    return this.offset === this.buffer.length;
  }
};

// src/actions/transfer.ts
var TransferTxSize = ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + MAX_MEMO_SIZE;
var Transfer = class _Transfer {
  to;
  asset;
  value;
  memo;
  constructor(to2, asset, value, memo) {
    this.to = Address.fromString(to2);
    this.asset = toAssetID(asset);
    this.value = value;
    this.memo = new TextEncoder().encode(memo);
  }
  getTypeId() {
    return TRANSFER_ID;
  }
  size() {
    return ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + this.memo.length;
  }
  computeUnits() {
    return TRANSFER_COMPUTE_UNITS;
  }
  stateKeysMaxChunks() {
    return [STORAGE_BALANCE_CHUNKS, STORAGE_BALANCE_CHUNKS];
  }
  toBytes() {
    const codec = Codec.newWriter(this.size(), this.size());
    codec.packAddress(this.to);
    codec.packID(this.asset);
    codec.packUint64(this.value);
    codec.packBytes(this.memo);
    const bytes3 = codec.toBytes();
    return bytes3;
  }
  static fromBytes(bytes3) {
    const codec = Codec.newReader(bytes3, bytes3.length);
    const to2 = codec.unpackAddress();
    const asset = codec.unpackID(false);
    const value = codec.unpackUint64(true);
    const memoBytes = codec.unpackLimitedBytes(MAX_MEMO_SIZE);
    const memo = new TextDecoder().decode(memoBytes);
    const action = new _Transfer(to2.toString(), asset.toString(), value, memo);
    return [action, codec.getError()];
  }
  static fromBytesCodec(codec) {
    const codecResult = codec;
    const to2 = codecResult.unpackAddress();
    const asset = codecResult.unpackID(false);
    const value = codecResult.unpackUint64(true);
    const memoBytes = codecResult.unpackLimitedBytes(MAX_MEMO_SIZE);
    const memo = new TextDecoder().decode(memoBytes);
    const action = new _Transfer(to2.toString(), asset.toString(), value, memo);
    return [action, codecResult];
  }
};

// src/auth/bls.ts
init_polyfills();

// node_modules/@noble/curves/esm/bls12-381.js
init_polyfills();

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/sha256.js
init_polyfills();

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_md.js
init_polyfills();

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_assert.js
init_polyfills();
function isBytes4(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function bytes2(b2, ...lengths) {
  if (!isBytes4(b2))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b2.length}`);
}
function exists2(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output2(out, instance) {
  bytes2(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/utils.js
init_polyfills();

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/cryptoNode.js
init_polyfills();
var nc3 = __toESM(require("node:crypto"), 1);
var crypto2 = nc3 && typeof nc3 === "object" && "webcrypto" in nc3 ? nc3.webcrypto : void 0;

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/utils.js
var createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr2 = (word, shift) => word << 32 - shift | word >>> shift;
var isLE2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function utf8ToBytes2(str2) {
  if (typeof str2 !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
  return new Uint8Array(new TextEncoder().encode(str2));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes2(data);
  bytes2(data);
  return data;
}
var Hash2 = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var toStr2 = {}.toString;
function wrapConstructor2(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes2(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_md.js
function setBigUint642(view, byteOffset, value, isLE3) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE3);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE3 ? 4 : 0;
  const l2 = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE3);
  view.setUint32(byteOffset + l2, wl, isLE3);
}
var Chi2 = (a, b2, c) => a & b2 ^ ~a & c;
var Maj2 = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
var HashMD = class extends Hash2 {
  constructor(blockLen, outputLen, padOffset, isLE3) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE3;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView2(this.buffer);
  }
  update(data) {
    exists2(this);
    const { view, buffer, blockLen } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView2(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists2(this);
    output2(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE3 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint642(view, blockLen - 8, BigInt(this.length * 8), isLE3);
    this.process(view, 0);
    const oview = createView2(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE3);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to2) {
    to2 || (to2 = new this.constructor());
    to2.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to2.length = length;
    to2.pos = pos;
    to2.finished = finished;
    to2.destroyed = destroyed;
    if (length % blockLen)
      to2.buffer.set(buffer);
    return to2;
  }
};

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K2 = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W2 = /* @__PURE__ */ new Uint32Array(64);
var SHA2562 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G3, H: H2 } = this;
    return [A2, B2, C2, D2, E2, F2, G3, H2];
  }
  // prettier-ignore
  set(A2, B2, C2, D2, E2, F2, G3, H2) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E2 | 0;
    this.F = F2 | 0;
    this.G = G3 | 0;
    this.H = H2 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W2[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W2[i - 15];
      const W22 = SHA256_W2[i - 2];
      const s0 = rotr2(W15, 7) ^ rotr2(W15, 18) ^ W15 >>> 3;
      const s1 = rotr2(W22, 17) ^ rotr2(W22, 19) ^ W22 >>> 10;
      SHA256_W2[i] = s1 + SHA256_W2[i - 7] + s0 + SHA256_W2[i - 16] | 0;
    }
    let { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G3, H: H2 } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr2(E2, 6) ^ rotr2(E2, 11) ^ rotr2(E2, 25);
      const T1 = H2 + sigma1 + Chi2(E2, F2, G3) + SHA256_K2[i] + SHA256_W2[i] | 0;
      const sigma0 = rotr2(A2, 2) ^ rotr2(A2, 13) ^ rotr2(A2, 22);
      const T2 = sigma0 + Maj2(A2, B2, C2) | 0;
      H2 = G3;
      G3 = F2;
      F2 = E2;
      E2 = D2 + T1 | 0;
      D2 = C2;
      C2 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E2 = E2 + this.E | 0;
    F2 = F2 + this.F | 0;
    G3 = G3 + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A2, B2, C2, D2, E2, F2, G3, H2);
  }
  roundClean() {
    SHA256_W2.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha2562 = /* @__PURE__ */ wrapConstructor2(() => new SHA2562());

// node_modules/@noble/curves/esm/abstract/bls.js
init_polyfills();

// node_modules/@noble/curves/esm/abstract/modular.js
init_polyfills();

// node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports = {};
__export(utils_exports, {
  abytes: () => abytes,
  bitGet: () => bitGet,
  bitLen: () => bitLen,
  bitMask: () => bitMask,
  bitSet: () => bitSet,
  bytesToHex: () => bytesToHex2,
  bytesToNumberBE: () => bytesToNumberBE,
  bytesToNumberLE: () => bytesToNumberLE,
  concatBytes: () => concatBytes2,
  createHmacDrbg: () => createHmacDrbg,
  ensureBytes: () => ensureBytes,
  equalBytes: () => equalBytes,
  hexToBytes: () => hexToBytes2,
  hexToNumber: () => hexToNumber,
  isBytes: () => isBytes5,
  numberToBytesBE: () => numberToBytesBE,
  numberToBytesLE: () => numberToBytesLE,
  numberToHexUnpadded: () => numberToHexUnpadded,
  numberToVarBytesBE: () => numberToVarBytesBE,
  utf8ToBytes: () => utf8ToBytes3,
  validateObject: () => validateObject
});
init_polyfills();
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
function isBytes5(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function abytes(item) {
  if (!isBytes5(item))
    throw new Error("Uint8Array expected");
}
var hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i) => i.toString(16).padStart(2, "0"));
function bytesToHex2(bytes3) {
  abytes(bytes3);
  let hex2 = "";
  for (let i = 0; i < bytes3.length; i++) {
    hex2 += hexes2[bytes3[i]];
  }
  return hex2;
}
function numberToHexUnpadded(num) {
  const hex2 = num.toString(16);
  return hex2.length & 1 ? `0${hex2}` : hex2;
}
function hexToNumber(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  return BigInt(hex2 === "" ? "0" : `0x${hex2}`);
}
var asciis2 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase162(char) {
  if (char >= asciis2._0 && char <= asciis2._9)
    return char - asciis2._0;
  if (char >= asciis2._A && char <= asciis2._F)
    return char - (asciis2._A - 10);
  if (char >= asciis2._a && char <= asciis2._f)
    return char - (asciis2._a - 10);
  return;
}
function hexToBytes2(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  const hl = hex2.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai2 = 0, hi2 = 0; ai2 < al; ai2++, hi2 += 2) {
    const n1 = asciiToBase162(hex2.charCodeAt(hi2));
    const n2 = asciiToBase162(hex2.charCodeAt(hi2 + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex2[hi2] + hex2[hi2 + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi2);
    }
    array[ai2] = n1 * 16 + n2;
  }
  return array;
}
function bytesToNumberBE(bytes3) {
  return hexToNumber(bytesToHex2(bytes3));
}
function bytesToNumberLE(bytes3) {
  abytes(bytes3);
  return hexToNumber(bytesToHex2(Uint8Array.from(bytes3).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes2(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
  return hexToBytes2(numberToHexUnpadded(n));
}
function ensureBytes(title, hex2, expectedLength) {
  let res;
  if (typeof hex2 === "string") {
    try {
      res = hexToBytes2(hex2);
    } catch (e) {
      throw new Error(`${title} must be valid hex string, got "${hex2}". Cause: ${e}`);
    }
  } else if (isBytes5(hex2)) {
    res = Uint8Array.from(hex2);
  } else {
    throw new Error(`${title} must be hex string or Uint8Array`);
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
  return res;
}
function concatBytes2(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
function equalBytes(a, b2) {
  if (a.length !== b2.length)
    return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++)
    diff |= a[i] ^ b2[i];
  return diff === 0;
}
function utf8ToBytes3(str2) {
  if (typeof str2 !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
  return new Uint8Array(new TextEncoder().encode(str2));
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
function bitGet(n, pos) {
  return n >> BigInt(pos) & _1n;
}
function bitSet(n, pos, value) {
  return n | (value ? _1n : _0n) << BigInt(pos);
}
var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
var u8n = (data) => new Uint8Array(data);
var u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v2 = u8n(hashLen);
  let k2 = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v2.fill(1);
    k2.fill(0);
    i = 0;
  };
  const h2 = (...b2) => hmacFn(k2, v2, ...b2);
  const reseed = (seed = u8n()) => {
    k2 = h2(u8fr([0]), seed);
    v2 = h2();
    if (seed.length === 0)
      return;
    k2 = h2(u8fr([1]), seed);
    v2 = h2();
  };
  const gen = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v2 = h2();
      const sl = v2.slice();
      out.push(sl);
      len += v2.length;
    }
    return concatBytes2(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
var validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || isBytes5(val),
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error(`Invalid validator "${type}", expected function`);
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}

// node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a, b2) {
  const result = a % b2;
  return result >= _0n2 ? result : b2 + result;
}
function pow(num, power, modulo) {
  if (modulo <= _0n2 || power < _0n2)
    throw new Error("Expected power/modulo > 0");
  if (modulo === _1n2)
    return _0n2;
  let res = _1n2;
  while (power > _0n2) {
    if (power & _1n2)
      res = res * num % modulo;
    num = num * num % modulo;
    power >>= _1n2;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n2 || modulo <= _0n2) {
    throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
  }
  let a = mod(number, modulo);
  let b2 = modulo;
  let x2 = _0n2, y2 = _1n2, u2 = _1n2, v2 = _0n2;
  while (a !== _0n2) {
    const q2 = b2 / a;
    const r = b2 % a;
    const m2 = x2 - u2 * q2;
    const n = y2 - v2 * q2;
    b2 = a, a = r, x2 = u2, y2 = v2, u2 = m2, v2 = n;
  }
  const gcd2 = b2;
  if (gcd2 !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function tonelliShanks(P3) {
  const legendreC = (P3 - _1n2) / _2n2;
  let Q2, S2, Z2;
  for (Q2 = P3 - _1n2, S2 = 0; Q2 % _2n2 === _0n2; Q2 /= _2n2, S2++)
    ;
  for (Z2 = _2n2; Z2 < P3 && pow(Z2, legendreC, P3) !== P3 - _1n2; Z2++)
    ;
  if (S2 === 1) {
    const p1div4 = (P3 + _1n2) / _4n;
    return function tonelliFast(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q2 + _1n2) / _2n2;
  return function tonelliSlow(Fp3, n) {
    if (Fp3.pow(n, legendreC) === Fp3.neg(Fp3.ONE))
      throw new Error("Cannot find square root");
    let r = S2;
    let g2 = Fp3.pow(Fp3.mul(Fp3.ONE, Z2), Q2);
    let x2 = Fp3.pow(n, Q1div2);
    let b2 = Fp3.pow(n, Q2);
    while (!Fp3.eql(b2, Fp3.ONE)) {
      if (Fp3.eql(b2, Fp3.ZERO))
        return Fp3.ZERO;
      let m2 = 1;
      for (let t2 = Fp3.sqr(b2); m2 < r; m2++) {
        if (Fp3.eql(t2, Fp3.ONE))
          break;
        t2 = Fp3.sqr(t2);
      }
      const ge2 = Fp3.pow(g2, _1n2 << BigInt(r - m2 - 1));
      g2 = Fp3.sqr(ge2);
      x2 = Fp3.mul(x2, ge2);
      b2 = Fp3.mul(b2, g2);
      r = m2;
    }
    return x2;
  };
}
function FpSqrt(P3) {
  if (P3 % _4n === _3n) {
    const p1div4 = (P3 + _1n2) / _4n;
    return function sqrt3mod4(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P3 % _8n === _5n) {
    const c1 = (P3 - _5n) / _8n;
    return function sqrt5mod8(Fp3, n) {
      const n2 = Fp3.mul(n, _2n2);
      const v2 = Fp3.pow(n2, c1);
      const nv = Fp3.mul(n, v2);
      const i = Fp3.mul(Fp3.mul(nv, _2n2), v2);
      const root = Fp3.mul(nv, Fp3.sub(i, Fp3.ONE));
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P3 % _16n === _9n) {
  }
  return tonelliShanks(P3);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f3, num, power) {
  if (power < _0n2)
    throw new Error("Expected power > 0");
  if (power === _0n2)
    return f3.ONE;
  if (power === _1n2)
    return num;
  let p2 = f3.ONE;
  let d2 = num;
  while (power > _0n2) {
    if (power & _1n2)
      p2 = f3.mul(p2, d2);
    d2 = f3.sqr(d2);
    power >>= _1n2;
  }
  return p2;
}
function FpInvertBatch(f3, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (f3.is0(num))
      return acc;
    tmp[i] = acc;
    return f3.mul(acc, num);
  }, f3.ONE);
  const inverted = f3.inv(lastMultiplied);
  nums.reduceRight((acc, num, i) => {
    if (f3.is0(num))
      return acc;
    tmp[i] = f3.mul(acc, tmp[i]);
    return f3.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE3 = false, redef = {}) {
  if (ORDER <= _0n2)
    throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const sqrtP = FpSqrt(ORDER);
  const f3 = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
      return _0n2 <= num && num < ORDER;
    },
    is0: (num) => num === _0n2,
    isOdd: (num) => (num & _1n2) === _1n2,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f3, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n) => sqrtP(f3, n)),
    invertBatch: (lst) => FpInvertBatch(f3, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b2, c) => c ? b2 : a,
    toBytes: (num) => isLE3 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes3) => {
      if (bytes3.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes3.length}`);
      return isLE3 ? bytesToNumberLE(bytes3) : bytesToNumberBE(bytes3);
    }
  });
  return Object.freeze(f3);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE3 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
  const num = isLE3 ? bytesToNumberBE(key) : bytesToNumberLE(key);
  const reduced = mod(num, fieldOrder - _1n2) + _1n2;
  return isLE3 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/@noble/curves/esm/abstract/hash-to-curve.js
init_polyfills();
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  if (value < 0 || value >= 1 << 8 * length) {
    throw new Error(`bad I2OSP call: value=${value} length=${length}`);
  }
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b2) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b2[i];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H2) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H2(concatBytes2(utf8ToBytes3("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H2;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (ell > 255)
    throw new Error("Invalid xmd length");
  const DST_prime = concatBytes2(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b2 = new Array(ell);
  const b_0 = H2(concatBytes2(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b2[0] = H2(concatBytes2(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b2[i - 1]), i2osp(i + 1, 1), DST_prime];
    b2[i] = H2(concatBytes2(...args));
  }
  const pseudo_random_bytes = concatBytes2(...b2);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k2, H2) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k2 / 8);
    DST = H2.create({ dkLen }).update(utf8ToBytes3("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H2.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: p2, k: k2, m: m2, hash, expand, DST: _DST } = options;
  abytes(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes3(_DST) : _DST;
  const log2p = p2.toString(2).length;
  const L2 = Math.ceil((log2p + k2) / 8);
  const len_in_bytes = count * m2 * L2;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k2, hash);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u2 = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m2);
    for (let j2 = 0; j2 < m2; j2++) {
      const elm_offset = L2 * (j2 + i * m2);
      const tv = prb.subarray(elm_offset, elm_offset + L2);
      e[j2] = mod(os2ip(tv), p2);
    }
    u2[i] = e;
  }
  return u2;
}
function isogenyMap(field, map) {
  const COEFF = map.map((i) => Array.from(i).reverse());
  return (x2, y2) => {
    const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x2), i)));
    x2 = field.div(xNum, xDen);
    y2 = field.mul(y2, field.div(yNum, yDen));
    return { x: x2, y: y2 };
  };
}
function createHasher(Point2, mapToCurve, def) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u2 = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
      const u0 = Point2.fromAffine(mapToCurve(u2[0]));
      const u1 = Point2.fromAffine(mapToCurve(u2[1]));
      const P3 = u0.add(u1).clearCofactor();
      P3.assertValidity();
      return P3;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u2 = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
      const P3 = Point2.fromAffine(mapToCurve(u2[0])).clearCofactor();
      P3.assertValidity();
      return P3;
    }
  };
}

// node_modules/@noble/curves/esm/abstract/weierstrass.js
init_polyfills();

// node_modules/@noble/curves/esm/abstract/curve.js
init_polyfills();
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function wNAF(c, bits) {
  const constTimeNegate = (condition, item) => {
    const neg = item.negate();
    return condition ? neg : item;
  };
  const opts = (W3) => {
    const windows = Math.ceil(bits / W3) + 1;
    const windowSize = 2 ** (W3 - 1);
    return { windows, windowSize };
  };
  return {
    constTimeNegate,
    // non-const time multiplication ladder
    unsafeLadder(elm, n) {
      let p2 = c.ZERO;
      let d2 = elm;
      while (n > _0n3) {
        if (n & _1n3)
          p2 = p2.add(d2);
        d2 = d2.double();
        n >>= _1n3;
      }
      return p2;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W3) {
      const { windows, windowSize } = opts(W3);
      const points = [];
      let p2 = elm;
      let base = p2;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p2;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p2);
          points.push(base);
        }
        p2 = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W3, precomputes, n) {
      const { windows, windowSize } = opts(W3);
      let p2 = c.ZERO;
      let f3 = c.BASE;
      const mask = BigInt(2 ** W3 - 1);
      const maxNumber = 2 ** W3;
      const shiftBy = BigInt(W3);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f3 = f3.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p2 = p2.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p: p2, f: f3 };
    },
    wNAFCached(P3, precomputesMap, n, transform) {
      const W3 = P3._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P3);
      if (!comp) {
        comp = this.precomputeWindow(P3, W3);
        if (W3 !== 1) {
          precomputesMap.set(P3, transform(comp));
        }
      }
      return this.wNAF(W3, comp, n);
    }
  };
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}

// node_modules/@noble/curves/esm/abstract/weierstrass.js
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo, Fp: Fp3, a } = opts;
  if (endo) {
    if (!Fp3.eql(a, Fp3.ZERO)) {
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze({ ...opts });
}
var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n3 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE2 = validatePointOpts(opts);
  const { Fp: Fp3 } = CURVE2;
  const toBytes3 = CURVE2.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp3.toBytes(a.x), Fp3.toBytes(a.y));
  });
  const fromBytes = CURVE2.fromBytes || ((bytes3) => {
    const tail = bytes3.subarray(1);
    const x2 = Fp3.fromBytes(tail.subarray(0, Fp3.BYTES));
    const y2 = Fp3.fromBytes(tail.subarray(Fp3.BYTES, 2 * Fp3.BYTES));
    return { x: x2, y: y2 };
  });
  function weierstrassEquation(x2) {
    const { a, b: b2 } = CURVE2;
    const x22 = Fp3.sqr(x2);
    const x3 = Fp3.mul(x22, x2);
    return Fp3.add(Fp3.add(x3, Fp3.mul(x2, a)), b2);
  }
  if (!Fp3.eql(Fp3.sqr(CURVE2.Gy), weierstrassEquation(CURVE2.Gx)))
    throw new Error("bad generator point: equation left != right");
  function isWithinCurveOrder(num) {
    return typeof num === "bigint" && _0n4 < num && num < CURVE2.n;
  }
  function assertGE(num) {
    if (!isWithinCurveOrder(num))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE2;
    if (lengths && typeof key !== "bigint") {
      if (isBytes5(key))
        key = bytesToHex2(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("Invalid key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num;
    try {
      num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
    }
    if (wrapPrivateKey)
      num = mod(num, n);
    assertGE(num);
    return num;
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function assertPrjPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  class Point2 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp3.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp3.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp3.isValid(pz))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p2) {
      const { x: x2, y: y2 } = p2 || {};
      if (!p2 || !Fp3.isValid(x2) || !Fp3.isValid(y2))
        throw new Error("invalid affine point");
      if (p2 instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp3.eql(i, Fp3.ZERO);
      if (is0(x2) && is0(y2))
        return Point2.ZERO;
      return new Point2(x2, y2, Fp3.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp3.invertBatch(points.map((p2) => p2.pz));
      return points.map((p2, i) => p2.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex2) {
      const P3 = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex2)));
      P3.assertValidity();
      return P3;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (CURVE2.allowInfinityPoint && !Fp3.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: x2, y: y2 } = this.toAffine();
      if (!Fp3.isValid(x2) || !Fp3.isValid(y2))
        throw new Error("bad point: x or y not FE");
      const left = Fp3.sqr(y2);
      const right = weierstrassEquation(x2);
      if (!Fp3.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: y2 } = this.toAffine();
      if (Fp3.isOdd)
        return !Fp3.isOdd(y2);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp3.eql(Fp3.mul(X1, Z2), Fp3.mul(X2, Z1));
      const U2 = Fp3.eql(Fp3.mul(Y1, Z2), Fp3.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp3.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b: b2 } = CURVE2;
      const b3 = Fp3.mul(b2, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      let t0 = Fp3.mul(X1, X1);
      let t1 = Fp3.mul(Y1, Y1);
      let t2 = Fp3.mul(Z1, Z1);
      let t3 = Fp3.mul(X1, Y1);
      t3 = Fp3.add(t3, t3);
      Z3 = Fp3.mul(X1, Z1);
      Z3 = Fp3.add(Z3, Z3);
      X3 = Fp3.mul(a, Z3);
      Y3 = Fp3.mul(b3, t2);
      Y3 = Fp3.add(X3, Y3);
      X3 = Fp3.sub(t1, Y3);
      Y3 = Fp3.add(t1, Y3);
      Y3 = Fp3.mul(X3, Y3);
      X3 = Fp3.mul(t3, X3);
      Z3 = Fp3.mul(b3, Z3);
      t2 = Fp3.mul(a, t2);
      t3 = Fp3.sub(t0, t2);
      t3 = Fp3.mul(a, t3);
      t3 = Fp3.add(t3, Z3);
      Z3 = Fp3.add(t0, t0);
      t0 = Fp3.add(Z3, t0);
      t0 = Fp3.add(t0, t2);
      t0 = Fp3.mul(t0, t3);
      Y3 = Fp3.add(Y3, t0);
      t2 = Fp3.mul(Y1, Z1);
      t2 = Fp3.add(t2, t2);
      t0 = Fp3.mul(t2, t3);
      X3 = Fp3.sub(X3, t0);
      Z3 = Fp3.mul(t2, t1);
      Z3 = Fp3.add(Z3, Z3);
      Z3 = Fp3.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      const a = CURVE2.a;
      const b3 = Fp3.mul(CURVE2.b, _3n2);
      let t0 = Fp3.mul(X1, X2);
      let t1 = Fp3.mul(Y1, Y2);
      let t2 = Fp3.mul(Z1, Z2);
      let t3 = Fp3.add(X1, Y1);
      let t4 = Fp3.add(X2, Y2);
      t3 = Fp3.mul(t3, t4);
      t4 = Fp3.add(t0, t1);
      t3 = Fp3.sub(t3, t4);
      t4 = Fp3.add(X1, Z1);
      let t5 = Fp3.add(X2, Z2);
      t4 = Fp3.mul(t4, t5);
      t5 = Fp3.add(t0, t2);
      t4 = Fp3.sub(t4, t5);
      t5 = Fp3.add(Y1, Z1);
      X3 = Fp3.add(Y2, Z2);
      t5 = Fp3.mul(t5, X3);
      X3 = Fp3.add(t1, t2);
      t5 = Fp3.sub(t5, X3);
      Z3 = Fp3.mul(a, t4);
      X3 = Fp3.mul(b3, t2);
      Z3 = Fp3.add(X3, Z3);
      X3 = Fp3.sub(t1, Z3);
      Z3 = Fp3.add(t1, Z3);
      Y3 = Fp3.mul(X3, Z3);
      t1 = Fp3.add(t0, t0);
      t1 = Fp3.add(t1, t0);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.mul(b3, t4);
      t1 = Fp3.add(t1, t2);
      t2 = Fp3.sub(t0, t2);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.add(t4, t2);
      t0 = Fp3.mul(t1, t4);
      Y3 = Fp3.add(Y3, t0);
      t0 = Fp3.mul(t5, t4);
      X3 = Fp3.mul(t3, X3);
      X3 = Fp3.sub(X3, t0);
      t0 = Fp3.mul(t3, t1);
      Z3 = Fp3.mul(t5, Z3);
      Z3 = Fp3.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
        const toInv = Fp3.invertBatch(comp.map((p2) => p2.pz));
        return comp.map((p2, i) => p2.toAffine(toInv[i])).map(Point2.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(n) {
      const I3 = Point2.ZERO;
      if (n === _0n4)
        return I3;
      assertGE(n);
      if (n === _1n4)
        return this;
      const { endo } = CURVE2;
      if (!endo)
        return wnaf.unsafeLadder(this, n);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
      let k1p = I3;
      let k2p = I3;
      let d2 = this;
      while (k1 > _0n4 || k2 > _0n4) {
        if (k1 & _1n4)
          k1p = k1p.add(d2);
        if (k2 & _1n4)
          k2p = k2p.add(d2);
        d2 = d2.double();
        k1 >>= _1n4;
        k2 >>= _1n4;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      assertGE(scalar);
      let n = scalar;
      let point, fake;
      const { endo } = CURVE2;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p: p2, f: f3 } = this.wNAF(n);
        point = p2;
        fake = f3;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q2, a, b2) {
      const G3 = Point2.BASE;
      const mul = (P3, a2) => a2 === _0n4 || a2 === _1n4 || !P3.equals(G3) ? P3.multiplyUnsafe(a2) : P3.multiply(a2);
      const sum = mul(this, a).add(mul(Q2, b2));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      const { px: x2, py: y2, pz: z2 } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? Fp3.ONE : Fp3.inv(z2);
      const ax = Fp3.mul(x2, iz);
      const ay = Fp3.mul(y2, iz);
      const zz = Fp3.mul(z2, iz);
      if (is0)
        return { x: Fp3.ZERO, y: Fp3.ZERO };
      if (!Fp3.eql(zz, Fp3.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE2;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE2;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE2.h);
    }
    toRawBytes(isCompressed = true) {
      this.assertValidity();
      return toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE2.Gx, CURVE2.Gy, Fp3.ONE);
  Point2.ZERO = new Point2(Fp3.ZERO, Fp3.ONE, Fp3.ZERO);
  const _bits = CURVE2.nBitLength;
  const wnaf = wNAF(Point2, CURVE2.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    CURVE: CURVE2,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function SWUFpSqrtRatio(Fp3, Z2) {
  const q2 = Fp3.ORDER;
  let l2 = _0n4;
  for (let o = q2 - _1n4; o % _2n3 === _0n4; o /= _2n3)
    l2 += _1n4;
  const c1 = l2;
  const _2n_pow_c1_1 = _2n3 << c1 - _1n4 - _1n4;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n3;
  const c2 = (q2 - _1n4) / _2n_pow_c1;
  const c3 = (c2 - _1n4) / _2n3;
  const c4 = _2n_pow_c1 - _1n4;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp3.pow(Z2, c2);
  const c7 = Fp3.pow(Z2, (c2 + _1n4) / _2n3);
  let sqrtRatio = (u2, v2) => {
    let tv1 = c6;
    let tv2 = Fp3.pow(v2, c4);
    let tv3 = Fp3.sqr(tv2);
    tv3 = Fp3.mul(tv3, v2);
    let tv5 = Fp3.mul(u2, tv3);
    tv5 = Fp3.pow(tv5, c3);
    tv5 = Fp3.mul(tv5, tv2);
    tv2 = Fp3.mul(tv5, v2);
    tv3 = Fp3.mul(tv5, u2);
    let tv4 = Fp3.mul(tv3, tv2);
    tv5 = Fp3.pow(tv4, c5);
    let isQR = Fp3.eql(tv5, Fp3.ONE);
    tv2 = Fp3.mul(tv3, c7);
    tv5 = Fp3.mul(tv4, tv1);
    tv3 = Fp3.cmov(tv2, tv3, isQR);
    tv4 = Fp3.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n4; i--) {
      let tv52 = i - _2n3;
      tv52 = _2n3 << tv52 - _1n4;
      let tvv5 = Fp3.pow(tv4, tv52);
      const e1 = Fp3.eql(tvv5, Fp3.ONE);
      tv2 = Fp3.mul(tv3, tv1);
      tv1 = Fp3.mul(tv1, tv1);
      tvv5 = Fp3.mul(tv4, tv1);
      tv3 = Fp3.cmov(tv2, tv3, e1);
      tv4 = Fp3.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp3.ORDER % _4n2 === _3n2) {
    const c12 = (Fp3.ORDER - _3n2) / _4n2;
    const c22 = Fp3.sqrt(Fp3.neg(Z2));
    sqrtRatio = (u2, v2) => {
      let tv1 = Fp3.sqr(v2);
      const tv2 = Fp3.mul(u2, v2);
      tv1 = Fp3.mul(tv1, tv2);
      let y1 = Fp3.pow(tv1, c12);
      y1 = Fp3.mul(y1, tv2);
      const y2 = Fp3.mul(y1, c22);
      const tv3 = Fp3.mul(Fp3.sqr(y1), v2);
      const isQR = Fp3.eql(tv3, u2);
      let y3 = Fp3.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y3 };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp3, opts) {
  validateField(Fp3);
  if (!Fp3.isValid(opts.A) || !Fp3.isValid(opts.B) || !Fp3.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp3, opts.Z);
  if (!Fp3.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u2) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x2, y2;
    tv1 = Fp3.sqr(u2);
    tv1 = Fp3.mul(tv1, opts.Z);
    tv2 = Fp3.sqr(tv1);
    tv2 = Fp3.add(tv2, tv1);
    tv3 = Fp3.add(tv2, Fp3.ONE);
    tv3 = Fp3.mul(tv3, opts.B);
    tv4 = Fp3.cmov(opts.Z, Fp3.neg(tv2), !Fp3.eql(tv2, Fp3.ZERO));
    tv4 = Fp3.mul(tv4, opts.A);
    tv2 = Fp3.sqr(tv3);
    tv6 = Fp3.sqr(tv4);
    tv5 = Fp3.mul(tv6, opts.A);
    tv2 = Fp3.add(tv2, tv5);
    tv2 = Fp3.mul(tv2, tv3);
    tv6 = Fp3.mul(tv6, tv4);
    tv5 = Fp3.mul(tv6, opts.B);
    tv2 = Fp3.add(tv2, tv5);
    x2 = Fp3.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y2 = Fp3.mul(tv1, u2);
    y2 = Fp3.mul(y2, value);
    x2 = Fp3.cmov(x2, tv3, isValid);
    y2 = Fp3.cmov(y2, value, isValid);
    const e1 = Fp3.isOdd(u2) === Fp3.isOdd(y2);
    y2 = Fp3.cmov(Fp3.neg(y2), y2, e1);
    x2 = Fp3.div(x2, tv4);
    return { x: x2, y: y2 };
  };
}

// node_modules/@noble/curves/esm/abstract/bls.js
var _2n4 = BigInt(2);
var _3n3 = BigInt(3);
function bls(CURVE2) {
  const { Fp: Fp3, Fr: Fr3, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 } = CURVE2.fields;
  const BLS_X_LEN2 = bitLen(CURVE2.params.x);
  function calcPairingPrecomputes(p2) {
    const { x: x2, y: y2 } = p2;
    const Qx = x2, Qy = y2, Qz = Fp22.ONE;
    let Rx = Qx, Ry = Qy, Rz = Qz;
    let ell_coeff = [];
    for (let i = BLS_X_LEN2 - 2; i >= 0; i--) {
      let t0 = Fp22.sqr(Ry);
      let t1 = Fp22.sqr(Rz);
      let t2 = Fp22.multiplyByB(Fp22.mul(t1, _3n3));
      let t3 = Fp22.mul(t2, _3n3);
      let t4 = Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(Ry, Rz)), t1), t0);
      ell_coeff.push([
        Fp22.sub(t2, t0),
        // T2 - T0
        Fp22.mul(Fp22.sqr(Rx), _3n3),
        // 3 * Rx²
        Fp22.neg(t4)
        // -T4
      ]);
      Rx = Fp22.div(Fp22.mul(Fp22.mul(Fp22.sub(t0, t3), Rx), Ry), _2n4);
      Ry = Fp22.sub(Fp22.sqr(Fp22.div(Fp22.add(t0, t3), _2n4)), Fp22.mul(Fp22.sqr(t2), _3n3));
      Rz = Fp22.mul(t0, t4);
      if (bitGet(CURVE2.params.x, i)) {
        let t02 = Fp22.sub(Ry, Fp22.mul(Qy, Rz));
        let t12 = Fp22.sub(Rx, Fp22.mul(Qx, Rz));
        ell_coeff.push([
          Fp22.sub(Fp22.mul(t02, Qx), Fp22.mul(t12, Qy)),
          // T0 * Qx - T1 * Qy
          Fp22.neg(t02),
          // -T0
          t12
          // T1
        ]);
        let t22 = Fp22.sqr(t12);
        let t32 = Fp22.mul(t22, t12);
        let t42 = Fp22.mul(t22, Rx);
        let t5 = Fp22.add(Fp22.sub(t32, Fp22.mul(t42, _2n4)), Fp22.mul(Fp22.sqr(t02), Rz));
        Rx = Fp22.mul(t12, t5);
        Ry = Fp22.sub(Fp22.mul(Fp22.sub(t42, t5), t02), Fp22.mul(t32, Ry));
        Rz = Fp22.mul(Rz, t32);
      }
    }
    return ell_coeff;
  }
  function millerLoop(ell, g1) {
    const { x: x2 } = CURVE2.params;
    const Px = g1[0];
    const Py = g1[1];
    let f12 = Fp122.ONE;
    for (let j2 = 0, i = BLS_X_LEN2 - 2; i >= 0; i--, j2++) {
      const E2 = ell[j2];
      f12 = Fp122.multiplyBy014(f12, E2[0], Fp22.mul(E2[1], Px), Fp22.mul(E2[2], Py));
      if (bitGet(x2, i)) {
        j2 += 1;
        const F2 = ell[j2];
        f12 = Fp122.multiplyBy014(f12, F2[0], Fp22.mul(F2[1], Px), Fp22.mul(F2[2], Py));
      }
      if (i !== 0)
        f12 = Fp122.sqr(f12);
    }
    return Fp122.conjugate(f12);
  }
  const utils = {
    randomPrivateKey: () => {
      const length = getMinHashLength(Fr3.ORDER);
      return mapHashToField(CURVE2.randomBytes(length), Fr3.ORDER);
    },
    calcPairingPrecomputes
  };
  const G1_ = weierstrassPoints({ n: Fr3.ORDER, ...CURVE2.G1 });
  const G1 = Object.assign(G1_, createHasher(G1_.ProjectivePoint, CURVE2.G1.mapToCurve, {
    ...CURVE2.htfDefaults,
    ...CURVE2.G1.htfDefaults
  }));
  function pairingPrecomputes(point) {
    const p2 = point;
    if (p2._PPRECOMPUTES)
      return p2._PPRECOMPUTES;
    p2._PPRECOMPUTES = calcPairingPrecomputes(point.toAffine());
    return p2._PPRECOMPUTES;
  }
  const G2_ = weierstrassPoints({ n: Fr3.ORDER, ...CURVE2.G2 });
  const G22 = Object.assign(G2_, createHasher(G2_.ProjectivePoint, CURVE2.G2.mapToCurve, {
    ...CURVE2.htfDefaults,
    ...CURVE2.G2.htfDefaults
  }));
  const { ShortSignature } = CURVE2.G1;
  const { Signature: Signature2 } = CURVE2.G2;
  function pairing(Q2, P3, withFinalExponent = true) {
    if (Q2.equals(G1.ProjectivePoint.ZERO) || P3.equals(G22.ProjectivePoint.ZERO))
      throw new Error("pairing is not available for ZERO point");
    Q2.assertValidity();
    P3.assertValidity();
    const Qa2 = Q2.toAffine();
    const looped = millerLoop(pairingPrecomputes(P3), [Qa2.x, Qa2.y]);
    return withFinalExponent ? Fp122.finalExponentiate(looped) : looped;
  }
  function normP1(point) {
    return point instanceof G1.ProjectivePoint ? point : G1.ProjectivePoint.fromHex(point);
  }
  function normP1Hash(point, htfOpts) {
    return point instanceof G1.ProjectivePoint ? point : G1.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function normP2(point) {
    return point instanceof G22.ProjectivePoint ? point : Signature2.fromHex(point);
  }
  function normP2Hash(point, htfOpts) {
    return point instanceof G22.ProjectivePoint ? point : G22.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function getPublicKey2(privateKey) {
    return G1.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function getPublicKeyForShortSignatures(privateKey) {
    return G22.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function sign3(message, privateKey, htfOpts) {
    const msgPoint = normP2Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G22.ProjectivePoint)
      return sigPoint;
    return Signature2.toRawBytes(sigPoint);
  }
  function signShortSignature(message, privateKey, htfOpts) {
    const msgPoint = normP1Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G1.ProjectivePoint)
      return sigPoint;
    return ShortSignature.toRawBytes(sigPoint);
  }
  function verify3(signature, message, publicKey, htfOpts) {
    const P3 = normP1(publicKey);
    const Hm = normP2Hash(message, htfOpts);
    const G3 = G1.ProjectivePoint.BASE;
    const S2 = normP2(signature);
    const ePHm = pairing(P3.negate(), Hm, false);
    const eGS = pairing(G3, S2, false);
    const exp = Fp122.finalExponentiate(Fp122.mul(eGS, ePHm));
    return Fp122.eql(exp, Fp122.ONE);
  }
  function verifyShortSignature(signature, message, publicKey, htfOpts) {
    const P3 = normP2(publicKey);
    const Hm = normP1Hash(message, htfOpts);
    const G3 = G22.ProjectivePoint.BASE;
    const S2 = normP1(signature);
    const eHmP = pairing(Hm, P3, false);
    const eSG = pairing(S2, G3.negate(), false);
    const exp = Fp122.finalExponentiate(Fp122.mul(eSG, eHmP));
    return Fp122.eql(exp, Fp122.ONE);
  }
  function aggregatePublicKeys(publicKeys) {
    if (!publicKeys.length)
      throw new Error("Expected non-empty array");
    const agg = publicKeys.map(normP1).reduce((sum, p2) => sum.add(p2), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (publicKeys[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return aggAffine.toRawBytes(true);
  }
  function aggregateSignatures(signatures) {
    if (!signatures.length)
      throw new Error("Expected non-empty array");
    const agg = signatures.map(normP2).reduce((sum, s) => sum.add(s), G22.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G22.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return Signature2.toRawBytes(aggAffine);
  }
  function aggregateShortSignatures(signatures) {
    if (!signatures.length)
      throw new Error("Expected non-empty array");
    const agg = signatures.map(normP1).reduce((sum, s) => sum.add(s), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return ShortSignature.toRawBytes(aggAffine);
  }
  function verifyBatch(signature, messages, publicKeys, htfOpts) {
    if (!messages.length)
      throw new Error("Expected non-empty messages array");
    if (publicKeys.length !== messages.length)
      throw new Error("Pubkey count should equal msg count");
    const sig = normP2(signature);
    const nMessages = messages.map((i) => normP2Hash(i, htfOpts));
    const nPublicKeys = publicKeys.map(normP1);
    try {
      const paired = [];
      for (const message of new Set(nMessages)) {
        const groupPublicKey = nMessages.reduce((groupPublicKey2, subMessage, i) => subMessage === message ? groupPublicKey2.add(nPublicKeys[i]) : groupPublicKey2, G1.ProjectivePoint.ZERO);
        paired.push(pairing(groupPublicKey, message, false));
      }
      paired.push(pairing(G1.ProjectivePoint.BASE.negate(), sig, false));
      const product = paired.reduce((a, b2) => Fp122.mul(a, b2), Fp122.ONE);
      const exp = Fp122.finalExponentiate(product);
      return Fp122.eql(exp, Fp122.ONE);
    } catch {
      return false;
    }
  }
  G1.ProjectivePoint.BASE._setWindowSize(4);
  return {
    getPublicKey: getPublicKey2,
    getPublicKeyForShortSignatures,
    sign: sign3,
    signShortSignature,
    verify: verify3,
    verifyBatch,
    verifyShortSignature,
    aggregatePublicKeys,
    aggregateSignatures,
    aggregateShortSignatures,
    millerLoop,
    pairing,
    G1,
    G2: G22,
    Signature: Signature2,
    ShortSignature,
    fields: {
      Fr: Fr3,
      Fp: Fp3,
      Fp2: Fp22,
      Fp6: Fp62,
      Fp12: Fp122
    },
    params: {
      x: CURVE2.params.x,
      r: CURVE2.params.r,
      G1b: CURVE2.G1.b,
      G2b: CURVE2.G2.b
    },
    utils
  };
}

// node_modules/@noble/curves/esm/bls12-381.js
var _0n5 = BigInt(0);
var _1n5 = BigInt(1);
var _2n5 = BigInt(2);
var _3n4 = BigInt(3);
var _4n3 = BigInt(4);
var _8n2 = BigInt(8);
var _16n2 = BigInt(16);
var Fp_raw = BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab");
var Fp = Field(Fp_raw);
var Fr2 = Field(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"));
var Fp2Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
  c0: Fp.add(c0, r0),
  c1: Fp.add(c1, r1)
});
var Fp2Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
  c0: Fp.sub(c0, r0),
  c1: Fp.sub(c1, r1)
});
var Fp2Multiply = ({ c0, c1 }, rhs) => {
  if (typeof rhs === "bigint")
    return { c0: Fp.mul(c0, rhs), c1: Fp.mul(c1, rhs) };
  const { c0: r0, c1: r1 } = rhs;
  let t1 = Fp.mul(c0, r0);
  let t2 = Fp.mul(c1, r1);
  const o0 = Fp.sub(t1, t2);
  const o1 = Fp.sub(Fp.mul(Fp.add(c0, c1), Fp.add(r0, r1)), Fp.add(t1, t2));
  return { c0: o0, c1: o1 };
};
var Fp2Square = ({ c0, c1 }) => {
  const a = Fp.add(c0, c1);
  const b2 = Fp.sub(c0, c1);
  const c = Fp.add(c0, c0);
  return { c0: Fp.mul(a, b2), c1: Fp.mul(c, c1) };
};
var FP2_ORDER = Fp_raw * Fp_raw;
var Fp2 = {
  ORDER: FP2_ORDER,
  BITS: bitLen(FP2_ORDER),
  BYTES: Math.ceil(bitLen(FP2_ORDER) / 8),
  MASK: bitMask(bitLen(FP2_ORDER)),
  ZERO: { c0: Fp.ZERO, c1: Fp.ZERO },
  ONE: { c0: Fp.ONE, c1: Fp.ZERO },
  create: (num) => num,
  isValid: ({ c0, c1 }) => typeof c0 === "bigint" && typeof c1 === "bigint",
  is0: ({ c0, c1 }) => Fp.is0(c0) && Fp.is0(c1),
  eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp.eql(c0, r0) && Fp.eql(c1, r1),
  neg: ({ c0, c1 }) => ({ c0: Fp.neg(c0), c1: Fp.neg(c1) }),
  pow: (num, power) => FpPow(Fp2, num, power),
  invertBatch: (nums) => FpInvertBatch(Fp2, nums),
  // Normalized
  add: Fp2Add,
  sub: Fp2Subtract,
  mul: Fp2Multiply,
  sqr: Fp2Square,
  // NonNormalized stuff
  addN: Fp2Add,
  subN: Fp2Subtract,
  mulN: Fp2Multiply,
  sqrN: Fp2Square,
  // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
  div: (lhs, rhs) => Fp2.mul(lhs, typeof rhs === "bigint" ? Fp.inv(Fp.create(rhs)) : Fp2.inv(rhs)),
  inv: ({ c0: a, c1: b2 }) => {
    const factor = Fp.inv(Fp.create(a * a + b2 * b2));
    return { c0: Fp.mul(factor, Fp.create(a)), c1: Fp.mul(factor, Fp.create(-b2)) };
  },
  sqrt: (num) => {
    if (Fp2.eql(num, Fp2.ZERO))
      return Fp2.ZERO;
    const candidateSqrt = Fp2.pow(num, (Fp2.ORDER + _8n2) / _16n2);
    const check = Fp2.div(Fp2.sqr(candidateSqrt), num);
    const R2 = FP2_ROOTS_OF_UNITY;
    const divisor = [R2[0], R2[2], R2[4], R2[6]].find((r) => Fp2.eql(r, check));
    if (!divisor)
      throw new Error("No root");
    const index = R2.indexOf(divisor);
    const root = R2[index / 2];
    if (!root)
      throw new Error("Invalid root");
    const x1 = Fp2.div(candidateSqrt, root);
    const x2 = Fp2.neg(x1);
    const { re: re1, im: im1 } = Fp2.reim(x1);
    const { re: re2, im: im2 } = Fp2.reim(x2);
    if (im1 > im2 || im1 === im2 && re1 > re2)
      return x1;
    return x2;
  },
  // Same as sgn0_m_eq_2 in RFC 9380
  isOdd: (x2) => {
    const { re: x0, im: x1 } = Fp2.reim(x2);
    const sign_0 = x0 % _2n5;
    const zero_0 = x0 === _0n5;
    const sign_1 = x1 % _2n5;
    return BigInt(sign_0 || zero_0 && sign_1) == _1n5;
  },
  // Bytes util
  fromBytes(b2) {
    if (b2.length !== Fp2.BYTES)
      throw new Error(`fromBytes wrong length=${b2.length}`);
    return { c0: Fp.fromBytes(b2.subarray(0, Fp.BYTES)), c1: Fp.fromBytes(b2.subarray(Fp.BYTES)) };
  },
  toBytes: ({ c0, c1 }) => concatBytes2(Fp.toBytes(c0), Fp.toBytes(c1)),
  cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
    c0: Fp.cmov(c0, r0, c),
    c1: Fp.cmov(c1, r1, c)
  }),
  // Specific utils
  // toString() {
  //   return `Fp2(${this.c0} + ${this.c1}×i)`;
  // }
  reim: ({ c0, c1 }) => ({ re: c0, im: c1 }),
  // multiply by u + 1
  mulByNonresidue: ({ c0, c1 }) => ({ c0: Fp.sub(c0, c1), c1: Fp.add(c0, c1) }),
  multiplyByB: ({ c0, c1 }) => {
    let t0 = Fp.mul(c0, _4n3);
    let t1 = Fp.mul(c1, _4n3);
    return { c0: Fp.sub(t0, t1), c1: Fp.add(t0, t1) };
  },
  fromBigTuple: (tuple) => {
    if (tuple.length !== 2)
      throw new Error("Invalid tuple");
    const fps = tuple.map((n) => Fp.create(n));
    return { c0: fps[0], c1: fps[1] };
  },
  frobeniusMap: ({ c0, c1 }, power) => ({
    c0,
    c1: Fp.mul(c1, FP2_FROBENIUS_COEFFICIENTS[power % 2])
  })
};
var FP2_FROBENIUS_COEFFICIENTS = [
  BigInt("0x1"),
  BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa")
].map((item) => Fp.create(item));
var rv1 = BigInt("0x6af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09");
var FP2_ROOTS_OF_UNITY = [
  [_1n5, _0n5],
  [rv1, -rv1],
  [_0n5, _1n5],
  [rv1, rv1],
  [-_1n5, _0n5],
  [-rv1, rv1],
  [_0n5, -_1n5],
  [-rv1, -rv1]
].map((pair) => Fp2.fromBigTuple(pair));
var Fp6Add = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
  c0: Fp2.add(c0, r0),
  c1: Fp2.add(c1, r1),
  c2: Fp2.add(c2, r2)
});
var Fp6Subtract = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
  c0: Fp2.sub(c0, r0),
  c1: Fp2.sub(c1, r1),
  c2: Fp2.sub(c2, r2)
});
var Fp6Multiply = ({ c0, c1, c2 }, rhs) => {
  if (typeof rhs === "bigint") {
    return {
      c0: Fp2.mul(c0, rhs),
      c1: Fp2.mul(c1, rhs),
      c2: Fp2.mul(c2, rhs)
    };
  }
  const { c0: r0, c1: r1, c2: r2 } = rhs;
  const t0 = Fp2.mul(c0, r0);
  const t1 = Fp2.mul(c1, r1);
  const t2 = Fp2.mul(c2, r2);
  return {
    // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
    c0: Fp2.add(t0, Fp2.mulByNonresidue(Fp2.sub(Fp2.mul(Fp2.add(c1, c2), Fp2.add(r1, r2)), Fp2.add(t1, t2)))),
    // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
    c1: Fp2.add(Fp2.sub(Fp2.mul(Fp2.add(c0, c1), Fp2.add(r0, r1)), Fp2.add(t0, t1)), Fp2.mulByNonresidue(t2)),
    // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
    c2: Fp2.sub(Fp2.add(t1, Fp2.mul(Fp2.add(c0, c2), Fp2.add(r0, r2))), Fp2.add(t0, t2))
  };
};
var Fp6Square = ({ c0, c1, c2 }) => {
  let t0 = Fp2.sqr(c0);
  let t1 = Fp2.mul(Fp2.mul(c0, c1), _2n5);
  let t3 = Fp2.mul(Fp2.mul(c1, c2), _2n5);
  let t4 = Fp2.sqr(c2);
  return {
    c0: Fp2.add(Fp2.mulByNonresidue(t3), t0),
    // T3 * (u + 1) + T0
    c1: Fp2.add(Fp2.mulByNonresidue(t4), t1),
    // T4 * (u + 1) + T1
    // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
    c2: Fp2.sub(Fp2.sub(Fp2.add(Fp2.add(t1, Fp2.sqr(Fp2.add(Fp2.sub(c0, c1), c2))), t3), t0), t4)
  };
};
var Fp6 = {
  ORDER: Fp2.ORDER,
  // TODO: unused, but need to verify
  BITS: 3 * Fp2.BITS,
  BYTES: 3 * Fp2.BYTES,
  MASK: bitMask(3 * Fp2.BITS),
  ZERO: { c0: Fp2.ZERO, c1: Fp2.ZERO, c2: Fp2.ZERO },
  ONE: { c0: Fp2.ONE, c1: Fp2.ZERO, c2: Fp2.ZERO },
  create: (num) => num,
  isValid: ({ c0, c1, c2 }) => Fp2.isValid(c0) && Fp2.isValid(c1) && Fp2.isValid(c2),
  is0: ({ c0, c1, c2 }) => Fp2.is0(c0) && Fp2.is0(c1) && Fp2.is0(c2),
  neg: ({ c0, c1, c2 }) => ({ c0: Fp2.neg(c0), c1: Fp2.neg(c1), c2: Fp2.neg(c2) }),
  eql: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => Fp2.eql(c0, r0) && Fp2.eql(c1, r1) && Fp2.eql(c2, r2),
  sqrt: () => {
    throw new Error("Not implemented");
  },
  // Do we need division by bigint at all? Should be done via order:
  div: (lhs, rhs) => Fp6.mul(lhs, typeof rhs === "bigint" ? Fp.inv(Fp.create(rhs)) : Fp6.inv(rhs)),
  pow: (num, power) => FpPow(Fp6, num, power),
  invertBatch: (nums) => FpInvertBatch(Fp6, nums),
  // Normalized
  add: Fp6Add,
  sub: Fp6Subtract,
  mul: Fp6Multiply,
  sqr: Fp6Square,
  // NonNormalized stuff
  addN: Fp6Add,
  subN: Fp6Subtract,
  mulN: Fp6Multiply,
  sqrN: Fp6Square,
  inv: ({ c0, c1, c2 }) => {
    let t0 = Fp2.sub(Fp2.sqr(c0), Fp2.mulByNonresidue(Fp2.mul(c2, c1)));
    let t1 = Fp2.sub(Fp2.mulByNonresidue(Fp2.sqr(c2)), Fp2.mul(c0, c1));
    let t2 = Fp2.sub(Fp2.sqr(c1), Fp2.mul(c0, c2));
    let t4 = Fp2.inv(Fp2.add(Fp2.mulByNonresidue(Fp2.add(Fp2.mul(c2, t1), Fp2.mul(c1, t2))), Fp2.mul(c0, t0)));
    return { c0: Fp2.mul(t4, t0), c1: Fp2.mul(t4, t1), c2: Fp2.mul(t4, t2) };
  },
  // Bytes utils
  fromBytes: (b2) => {
    if (b2.length !== Fp6.BYTES)
      throw new Error(`fromBytes wrong length=${b2.length}`);
    return {
      c0: Fp2.fromBytes(b2.subarray(0, Fp2.BYTES)),
      c1: Fp2.fromBytes(b2.subarray(Fp2.BYTES, 2 * Fp2.BYTES)),
      c2: Fp2.fromBytes(b2.subarray(2 * Fp2.BYTES))
    };
  },
  toBytes: ({ c0, c1, c2 }) => concatBytes2(Fp2.toBytes(c0), Fp2.toBytes(c1), Fp2.toBytes(c2)),
  cmov: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }, c) => ({
    c0: Fp2.cmov(c0, r0, c),
    c1: Fp2.cmov(c1, r1, c),
    c2: Fp2.cmov(c2, r2, c)
  }),
  // Utils
  //   fromTriple(triple: [Fp2, Fp2, Fp2]) {
  //     return new Fp6(...triple);
  //   }
  //   toString() {
  //     return `Fp6(${this.c0} + ${this.c1} * v, ${this.c2} * v^2)`;
  //   }
  fromBigSix: (t) => {
    if (!Array.isArray(t) || t.length !== 6)
      throw new Error("Invalid Fp6 usage");
    return {
      c0: Fp2.fromBigTuple(t.slice(0, 2)),
      c1: Fp2.fromBigTuple(t.slice(2, 4)),
      c2: Fp2.fromBigTuple(t.slice(4, 6))
    };
  },
  frobeniusMap: ({ c0, c1, c2 }, power) => ({
    c0: Fp2.frobeniusMap(c0, power),
    c1: Fp2.mul(Fp2.frobeniusMap(c1, power), FP6_FROBENIUS_COEFFICIENTS_1[power % 6]),
    c2: Fp2.mul(Fp2.frobeniusMap(c2, power), FP6_FROBENIUS_COEFFICIENTS_2[power % 6])
  }),
  mulByNonresidue: ({ c0, c1, c2 }) => ({ c0: Fp2.mulByNonresidue(c2), c1: c0, c2: c1 }),
  // Sparse multiplication
  multiplyBy1: ({ c0, c1, c2 }, b1) => ({
    c0: Fp2.mulByNonresidue(Fp2.mul(c2, b1)),
    c1: Fp2.mul(c0, b1),
    c2: Fp2.mul(c1, b1)
  }),
  // Sparse multiplication
  multiplyBy01({ c0, c1, c2 }, b0, b1) {
    let t0 = Fp2.mul(c0, b0);
    let t1 = Fp2.mul(c1, b1);
    return {
      // ((c1 + c2) * b1 - T1) * (u + 1) + T0
      c0: Fp2.add(Fp2.mulByNonresidue(Fp2.sub(Fp2.mul(Fp2.add(c1, c2), b1), t1)), t0),
      // (b0 + b1) * (c0 + c1) - T0 - T1
      c1: Fp2.sub(Fp2.sub(Fp2.mul(Fp2.add(b0, b1), Fp2.add(c0, c1)), t0), t1),
      // (c0 + c2) * b0 - T0 + T1
      c2: Fp2.add(Fp2.sub(Fp2.mul(Fp2.add(c0, c2), b0), t0), t1)
    };
  },
  multiplyByFp2: ({ c0, c1, c2 }, rhs) => ({
    c0: Fp2.mul(c0, rhs),
    c1: Fp2.mul(c1, rhs),
    c2: Fp2.mul(c2, rhs)
  })
};
var FP6_FROBENIUS_COEFFICIENTS_1 = [
  [BigInt("0x1"), BigInt("0x0")],
  [
    BigInt("0x0"),
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac")
  ],
  [
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),
    BigInt("0x0")
  ],
  [BigInt("0x0"), BigInt("0x1")],
  [
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"),
    BigInt("0x0")
  ],
  [
    BigInt("0x0"),
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe")
  ]
].map((pair) => Fp2.fromBigTuple(pair));
var FP6_FROBENIUS_COEFFICIENTS_2 = [
  [BigInt("0x1"), BigInt("0x0")],
  [
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"),
    BigInt("0x0")
  ],
  [
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"),
    BigInt("0x0")
  ],
  [
    BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"),
    BigInt("0x0")
  ],
  [
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),
    BigInt("0x0")
  ],
  [
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"),
    BigInt("0x0")
  ]
].map((pair) => Fp2.fromBigTuple(pair));
var BLS_X = BigInt("0xd201000000010000");
var BLS_X_LEN = bitLen(BLS_X);
var Fp12Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
  c0: Fp6.add(c0, r0),
  c1: Fp6.add(c1, r1)
});
var Fp12Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
  c0: Fp6.sub(c0, r0),
  c1: Fp6.sub(c1, r1)
});
var Fp12Multiply = ({ c0, c1 }, rhs) => {
  if (typeof rhs === "bigint")
    return { c0: Fp6.mul(c0, rhs), c1: Fp6.mul(c1, rhs) };
  let { c0: r0, c1: r1 } = rhs;
  let t1 = Fp6.mul(c0, r0);
  let t2 = Fp6.mul(c1, r1);
  return {
    c0: Fp6.add(t1, Fp6.mulByNonresidue(t2)),
    // T1 + T2 * v
    // (c0 + c1) * (r0 + r1) - (T1 + T2)
    c1: Fp6.sub(Fp6.mul(Fp6.add(c0, c1), Fp6.add(r0, r1)), Fp6.add(t1, t2))
  };
};
var Fp12Square = ({ c0, c1 }) => {
  let ab = Fp6.mul(c0, c1);
  return {
    // (c1 * v + c0) * (c0 + c1) - AB - AB * v
    c0: Fp6.sub(Fp6.sub(Fp6.mul(Fp6.add(Fp6.mulByNonresidue(c1), c0), Fp6.add(c0, c1)), ab), Fp6.mulByNonresidue(ab)),
    c1: Fp6.add(ab, ab)
  };
};
function Fp4Square(a, b2) {
  const a2 = Fp2.sqr(a);
  const b22 = Fp2.sqr(b2);
  return {
    first: Fp2.add(Fp2.mulByNonresidue(b22), a2),
    // b² * Nonresidue + a²
    second: Fp2.sub(Fp2.sub(Fp2.sqr(Fp2.add(a, b2)), a2), b22)
    // (a + b)² - a² - b²
  };
}
var Fp12 = {
  ORDER: Fp2.ORDER,
  // TODO: unused, but need to verify
  BITS: 2 * Fp2.BITS,
  BYTES: 2 * Fp2.BYTES,
  MASK: bitMask(2 * Fp2.BITS),
  ZERO: { c0: Fp6.ZERO, c1: Fp6.ZERO },
  ONE: { c0: Fp6.ONE, c1: Fp6.ZERO },
  create: (num) => num,
  isValid: ({ c0, c1 }) => Fp6.isValid(c0) && Fp6.isValid(c1),
  is0: ({ c0, c1 }) => Fp6.is0(c0) && Fp6.is0(c1),
  neg: ({ c0, c1 }) => ({ c0: Fp6.neg(c0), c1: Fp6.neg(c1) }),
  eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp6.eql(c0, r0) && Fp6.eql(c1, r1),
  sqrt: () => {
    throw new Error("Not implemented");
  },
  inv: ({ c0, c1 }) => {
    let t = Fp6.inv(Fp6.sub(Fp6.sqr(c0), Fp6.mulByNonresidue(Fp6.sqr(c1))));
    return { c0: Fp6.mul(c0, t), c1: Fp6.neg(Fp6.mul(c1, t)) };
  },
  div: (lhs, rhs) => Fp12.mul(lhs, typeof rhs === "bigint" ? Fp.inv(Fp.create(rhs)) : Fp12.inv(rhs)),
  pow: (num, power) => FpPow(Fp12, num, power),
  invertBatch: (nums) => FpInvertBatch(Fp12, nums),
  // Normalized
  add: Fp12Add,
  sub: Fp12Subtract,
  mul: Fp12Multiply,
  sqr: Fp12Square,
  // NonNormalized stuff
  addN: Fp12Add,
  subN: Fp12Subtract,
  mulN: Fp12Multiply,
  sqrN: Fp12Square,
  // Bytes utils
  fromBytes: (b2) => {
    if (b2.length !== Fp12.BYTES)
      throw new Error(`fromBytes wrong length=${b2.length}`);
    return {
      c0: Fp6.fromBytes(b2.subarray(0, Fp6.BYTES)),
      c1: Fp6.fromBytes(b2.subarray(Fp6.BYTES))
    };
  },
  toBytes: ({ c0, c1 }) => concatBytes2(Fp6.toBytes(c0), Fp6.toBytes(c1)),
  cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
    c0: Fp6.cmov(c0, r0, c),
    c1: Fp6.cmov(c1, r1, c)
  }),
  // Utils
  // toString() {
  //   return `Fp12(${this.c0} + ${this.c1} * w)`;
  // },
  // fromTuple(c: [Fp6, Fp6]) {
  //   return new Fp12(...c);
  // }
  fromBigTwelve: (t) => ({
    c0: Fp6.fromBigSix(t.slice(0, 6)),
    c1: Fp6.fromBigSix(t.slice(6, 12))
  }),
  // Raises to q**i -th power
  frobeniusMap(lhs, power) {
    const r0 = Fp6.frobeniusMap(lhs.c0, power);
    const { c0, c1, c2 } = Fp6.frobeniusMap(lhs.c1, power);
    const coeff = FP12_FROBENIUS_COEFFICIENTS[power % 12];
    return {
      c0: r0,
      c1: Fp6.create({
        c0: Fp2.mul(c0, coeff),
        c1: Fp2.mul(c1, coeff),
        c2: Fp2.mul(c2, coeff)
      })
    };
  },
  // Sparse multiplication
  multiplyBy014: ({ c0, c1 }, o0, o1, o4) => {
    let t0 = Fp6.multiplyBy01(c0, o0, o1);
    let t1 = Fp6.multiplyBy1(c1, o4);
    return {
      c0: Fp6.add(Fp6.mulByNonresidue(t1), t0),
      // T1 * v + T0
      // (c1 + c0) * [o0, o1+o4] - T0 - T1
      c1: Fp6.sub(Fp6.sub(Fp6.multiplyBy01(Fp6.add(c1, c0), o0, Fp2.add(o1, o4)), t0), t1)
    };
  },
  multiplyByFp2: ({ c0, c1 }, rhs) => ({
    c0: Fp6.multiplyByFp2(c0, rhs),
    c1: Fp6.multiplyByFp2(c1, rhs)
  }),
  conjugate: ({ c0, c1 }) => ({ c0, c1: Fp6.neg(c1) }),
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  _cyclotomicSquare: ({ c0, c1 }) => {
    const { c0: c0c0, c1: c0c1, c2: c0c2 } = c0;
    const { c0: c1c0, c1: c1c1, c2: c1c2 } = c1;
    const { first: t3, second: t4 } = Fp4Square(c0c0, c1c1);
    const { first: t5, second: t6 } = Fp4Square(c1c0, c0c2);
    const { first: t7, second: t8 } = Fp4Square(c0c1, c1c2);
    let t9 = Fp2.mulByNonresidue(t8);
    return {
      c0: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.sub(t3, c0c0), _2n5), t3),
        // 2 * (T3 - c0c0)  + T3
        c1: Fp2.add(Fp2.mul(Fp2.sub(t5, c0c1), _2n5), t5),
        // 2 * (T5 - c0c1)  + T5
        c2: Fp2.add(Fp2.mul(Fp2.sub(t7, c0c2), _2n5), t7)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.add(t9, c1c0), _2n5), t9),
        // 2 * (T9 + c1c0) + T9
        c1: Fp2.add(Fp2.mul(Fp2.add(t4, c1c1), _2n5), t4),
        // 2 * (T4 + c1c1) + T4
        c2: Fp2.add(Fp2.mul(Fp2.add(t6, c1c2), _2n5), t6)
      })
    };
  },
  _cyclotomicExp(num, n) {
    let z2 = Fp12.ONE;
    for (let i = BLS_X_LEN - 1; i >= 0; i--) {
      z2 = Fp12._cyclotomicSquare(z2);
      if (bitGet(n, i))
        z2 = Fp12.mul(z2, num);
    }
    return z2;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  finalExponentiate: (num) => {
    const x2 = BLS_X;
    const t0 = Fp12.div(Fp12.frobeniusMap(num, 6), num);
    const t1 = Fp12.mul(Fp12.frobeniusMap(t0, 2), t0);
    const t2 = Fp12.conjugate(Fp12._cyclotomicExp(t1, x2));
    const t3 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicSquare(t1)), t2);
    const t4 = Fp12.conjugate(Fp12._cyclotomicExp(t3, x2));
    const t5 = Fp12.conjugate(Fp12._cyclotomicExp(t4, x2));
    const t6 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicExp(t5, x2)), Fp12._cyclotomicSquare(t2));
    const t7 = Fp12.conjugate(Fp12._cyclotomicExp(t6, x2));
    const t2_t5_pow_q2 = Fp12.frobeniusMap(Fp12.mul(t2, t5), 2);
    const t4_t1_pow_q3 = Fp12.frobeniusMap(Fp12.mul(t4, t1), 3);
    const t6_t1c_pow_q1 = Fp12.frobeniusMap(Fp12.mul(t6, Fp12.conjugate(t1)), 1);
    const t7_t3c_t1 = Fp12.mul(Fp12.mul(t7, Fp12.conjugate(t3)), t1);
    return Fp12.mul(Fp12.mul(Fp12.mul(t2_t5_pow_q2, t4_t1_pow_q3), t6_t1c_pow_q1), t7_t3c_t1);
  }
};
var FP12_FROBENIUS_COEFFICIENTS = [
  [BigInt("0x1"), BigInt("0x0")],
  [
    BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8"),
    BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3")
  ],
  [
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"),
    BigInt("0x0")
  ],
  [
    BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2"),
    BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09")
  ],
  [
    BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),
    BigInt("0x0")
  ],
  [
    BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995"),
    BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116")
  ],
  [
    BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"),
    BigInt("0x0")
  ],
  [
    BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3"),
    BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8")
  ],
  [
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"),
    BigInt("0x0")
  ],
  [
    BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09"),
    BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2")
  ],
  [
    BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"),
    BigInt("0x0")
  ],
  [
    BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116"),
    BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995")
  ]
].map((n) => Fp2.fromBigTuple(n));
var isogenyMapG2 = isogenyMap(Fp2, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((i) => i.map((pair) => Fp2.fromBigTuple(pair.map(BigInt)))));
var isogenyMapG1 = isogenyMap(Fp, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j2) => BigInt(j2))));
var G2_SWU = mapToCurveSimpleSWU(Fp2, {
  A: Fp2.create({ c0: Fp.create(_0n5), c1: Fp.create(BigInt(240)) }),
  // A' = 240 * I
  B: Fp2.create({ c0: Fp.create(BigInt(1012)), c1: Fp.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: Fp2.create({ c0: Fp.create(BigInt(-2)), c1: Fp.create(BigInt(-1)) })
  // Z: -(2 + I)
});
var G1_SWU = mapToCurveSimpleSWU(Fp, {
  A: Fp.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: Fp.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: Fp.create(BigInt(11))
});
var ut_root = Fp6.create({ c0: Fp2.ZERO, c1: Fp2.ONE, c2: Fp2.ZERO });
var wsq = Fp12.create({ c0: ut_root, c1: Fp6.ZERO });
var wcu = Fp12.create({ c0: Fp6.ZERO, c1: ut_root });
var [wsq_inv, wcu_inv] = Fp12.invertBatch([wsq, wcu]);
function psi(x2, y2) {
  const x22 = Fp12.mul(Fp12.frobeniusMap(Fp12.multiplyByFp2(wsq_inv, x2), 1), wsq).c0.c0;
  const y22 = Fp12.mul(Fp12.frobeniusMap(Fp12.multiplyByFp2(wcu_inv, y2), 1), wcu).c0.c0;
  return [x22, y22];
}
function G2psi(c, P3) {
  const affine = P3.toAffine();
  const p2 = psi(affine.x, affine.y);
  return new c(p2[0], p2[1], Fp2.ONE);
}
var PSI2_C1 = BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac");
function psi2(x2, y2) {
  return [Fp2.mul(x2, PSI2_C1), Fp2.neg(y2)];
}
function G2psi2(c, P3) {
  const affine = P3.toAffine();
  const p2 = psi2(affine.x, affine.y);
  return new c(p2[0], p2[1], Fp2.ONE);
}
var htfDefaults = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: Fp.ORDER,
  // m: the extension degree of F, m >= 1
  //     where F is a finite field of characteristic p and order q = p^m
  m: 2,
  // k: the target security level for the suite in bits
  // defined in section 5.1
  k: 128,
  // option to use a message that has already been processed by
  // expand_message_xmd
  expand: "xmd",
  // Hash functions for: expand_message_xmd is appropriate for use with a
  // wide range of hash functions, including SHA-2, SHA-3, BLAKE2, and others.
  // BBS+ uses blake2: https://github.com/hyperledger/aries-framework-go/issues/2247
  hash: sha2562
});
var COMPRESSED_ZERO = setMask(Fp.toBytes(_0n5), { infinity: true, compressed: true });
function parseMask(bytes3) {
  bytes3 = bytes3.slice();
  const mask = bytes3[0] & 224;
  const compressed = !!(mask >> 7 & 1);
  const infinity = !!(mask >> 6 & 1);
  const sort = !!(mask >> 5 & 1);
  bytes3[0] &= 31;
  return { compressed, infinity, sort, value: bytes3 };
}
function setMask(bytes3, mask) {
  if (bytes3[0] & 224)
    throw new Error("setMask: non-empty mask");
  if (mask.compressed)
    bytes3[0] |= 128;
  if (mask.infinity)
    bytes3[0] |= 64;
  if (mask.sort)
    bytes3[0] |= 32;
  return bytes3;
}
function signatureG1ToRawBytes(point) {
  point.assertValidity();
  const isZero = point.equals(bls12_381.G1.ProjectivePoint.ZERO);
  const { x: x2, y: y2 } = point.toAffine();
  if (isZero)
    return COMPRESSED_ZERO.slice();
  const P3 = Fp.ORDER;
  const sort = Boolean(y2 * _2n5 / P3);
  return setMask(numberToBytesBE(x2, Fp.BYTES), { compressed: true, sort });
}
function signatureG2ToRawBytes(point) {
  point.assertValidity();
  const len = Fp.BYTES;
  if (point.equals(bls12_381.G2.ProjectivePoint.ZERO))
    return concatBytes2(COMPRESSED_ZERO, numberToBytesBE(_0n5, len));
  const { x: x2, y: y2 } = point.toAffine();
  const { re: x0, im: x1 } = Fp2.reim(x2);
  const { re: y0, im: y1 } = Fp2.reim(y2);
  const tmp = y1 > _0n5 ? y1 * _2n5 : y0 * _2n5;
  const sort = Boolean(tmp / Fp.ORDER & _1n5);
  const z2 = x0;
  return concatBytes2(setMask(numberToBytesBE(x1, len), { sort, compressed: true }), numberToBytesBE(z2, len));
}
var bls12_381 = bls({
  // Fields
  fields: {
    Fp,
    Fp2,
    Fp6,
    Fp12,
    Fr: Fr2
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: Fp.ZERO,
    b: _4n3,
    htfDefaults: { ...htfDefaults, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, point) => {
      const cubicRootOfUnityModP = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe");
      const phi = new c(Fp.mul(point.px, cubicRootOfUnityModP), point.py, point.pz);
      const xP = point.multiplyUnsafe(bls12_381.params.x).negate();
      const u2P = xP.multiplyUnsafe(bls12_381.params.x);
      return u2P.equals(phi);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (_c, point) => {
      return point.multiplyUnsafe(bls12_381.params.x).add(point);
    },
    mapToCurve: (scalars) => {
      const { x: x2, y: y2 } = G1_SWU(Fp.create(scalars[0]));
      return isogenyMapG1(x2, y2);
    },
    fromBytes: (bytes3) => {
      const { compressed, infinity, sort, value } = parseMask(bytes3);
      if (value.length === 48 && compressed) {
        const P3 = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        const x2 = Fp.create(compressedValue & Fp.MASK);
        if (infinity) {
          if (x2 !== _0n5)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: _0n5, y: _0n5 };
        }
        const right = Fp.add(Fp.pow(x2, _3n4), Fp.create(bls12_381.params.G1b));
        let y2 = Fp.sqrt(right);
        if (!y2)
          throw new Error("Invalid compressed G1 point");
        if (y2 * _2n5 / P3 !== BigInt(sort))
          y2 = Fp.neg(y2);
        return { x: Fp.create(x2), y: Fp.create(y2) };
      } else if (value.length === 96 && !compressed) {
        const x2 = bytesToNumberBE(value.subarray(0, Fp.BYTES));
        const y2 = bytesToNumberBE(value.subarray(Fp.BYTES));
        if (infinity) {
          if (x2 !== _0n5 || y2 !== _0n5)
            throw new Error("G1: non-empty point at infinity");
          return bls12_381.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: Fp.create(x2), y: Fp.create(y2) };
      } else {
        throw new Error("Invalid point G1, expected 48/96 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const isZero = point.equals(c.ZERO);
      const { x: x2, y: y2 } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return COMPRESSED_ZERO.slice();
        const P3 = Fp.ORDER;
        const sort = Boolean(y2 * _2n5 / P3);
        return setMask(numberToBytesBE(x2, Fp.BYTES), { compressed: true, sort });
      } else {
        if (isZero) {
          const x3 = concatBytes2(new Uint8Array([64]), new Uint8Array(2 * Fp.BYTES - 1));
          return x3;
        } else {
          return concatBytes2(numberToBytesBE(x2, Fp.BYTES), numberToBytesBE(y2, Fp.BYTES));
        }
      }
    },
    ShortSignature: {
      fromHex(hex2) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex2, 48));
        const P3 = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        if (infinity)
          return bls12_381.G1.ProjectivePoint.ZERO;
        const x2 = Fp.create(compressedValue & Fp.MASK);
        const right = Fp.add(Fp.pow(x2, _3n4), Fp.create(bls12_381.params.G1b));
        let y2 = Fp.sqrt(right);
        if (!y2)
          throw new Error("Invalid compressed G1 point");
        const aflag = BigInt(sort);
        if (y2 * _2n5 / P3 !== aflag)
          y2 = Fp.neg(y2);
        const point = bls12_381.G1.ProjectivePoint.fromAffine({ x: x2, y: y2 });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG1ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex2(signatureG1ToRawBytes(point));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: Fp2,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: Fp2.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: Fp2.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: Fp2.ZERO,
    b: Fp2.fromBigTuple([_4n3, _4n3]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...htfDefaults },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    mapToCurve: (scalars) => {
      const { x: x2, y: y2 } = G2_SWU(Fp2.fromBigTuple(scalars));
      return isogenyMapG2(x2, y2);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, P3) => {
      return P3.multiplyUnsafe(bls12_381.params.x).negate().equals(G2psi(c, P3));
    },
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (c, P3) => {
      const x2 = bls12_381.params.x;
      let t1 = P3.multiplyUnsafe(x2).negate();
      let t2 = G2psi(c, P3);
      let t3 = P3.double();
      t3 = G2psi2(c, t3);
      t3 = t3.subtract(t2);
      t2 = t1.add(t2);
      t2 = t2.multiplyUnsafe(x2).negate();
      t3 = t3.add(t2);
      t3 = t3.subtract(t1);
      const Q2 = t3.subtract(P3);
      return Q2;
    },
    fromBytes: (bytes3) => {
      const { compressed, infinity, sort, value } = parseMask(bytes3);
      if (!compressed && !infinity && sort || // 00100000
      !compressed && infinity && sort || // 01100000
      sort && infinity && compressed) {
        throw new Error("Invalid encoding flag: " + (bytes3[0] & 224));
      }
      const L2 = Fp.BYTES;
      const slc = (b2, from, to2) => bytesToNumberBE(b2.slice(from, to2));
      if (value.length === 96 && compressed) {
        const b2 = bls12_381.params.G2b;
        const P3 = Fp.ORDER;
        if (infinity) {
          if (value.reduce((p2, c) => p2 !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("Invalid compressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x_1 = slc(value, 0, L2);
        const x_0 = slc(value, L2, 2 * L2);
        const x2 = Fp2.create({ c0: Fp.create(x_0), c1: Fp.create(x_1) });
        const right = Fp2.add(Fp2.pow(x2, _3n4), b2);
        let y2 = Fp2.sqrt(right);
        const Y_bit = y2.c1 === _0n5 ? y2.c0 * _2n5 / P3 : y2.c1 * _2n5 / P3 ? _1n5 : _0n5;
        y2 = sort && Y_bit > 0 ? y2 : Fp2.neg(y2);
        return { x: x2, y: y2 };
      } else if (value.length === 192 && !compressed) {
        if (infinity) {
          if (value.reduce((p2, c) => p2 !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("Invalid uncompressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x1 = slc(value, 0, L2);
        const x0 = slc(value, L2, 2 * L2);
        const y1 = slc(value, 2 * L2, 3 * L2);
        const y0 = slc(value, 3 * L2, 4 * L2);
        return { x: Fp2.fromBigTuple([x0, x1]), y: Fp2.fromBigTuple([y0, y1]) };
      } else {
        throw new Error("Invalid point G2, expected 96/192 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const { BYTES: len, ORDER: P3 } = Fp;
      const isZero = point.equals(c.ZERO);
      const { x: x2, y: y2 } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return concatBytes2(COMPRESSED_ZERO, numberToBytesBE(_0n5, len));
        const flag = Boolean(y2.c1 === _0n5 ? y2.c0 * _2n5 / P3 : y2.c1 * _2n5 / P3);
        return concatBytes2(setMask(numberToBytesBE(x2.c1, len), { compressed: true, sort: flag }), numberToBytesBE(x2.c0, len));
      } else {
        if (isZero)
          return concatBytes2(new Uint8Array([64]), new Uint8Array(4 * len - 1));
        const { re: x0, im: x1 } = Fp2.reim(x2);
        const { re: y0, im: y1 } = Fp2.reim(y2);
        return concatBytes2(numberToBytesBE(x1, len), numberToBytesBE(x0, len), numberToBytesBE(y1, len), numberToBytesBE(y0, len));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(hex2) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex2));
        const P3 = Fp.ORDER;
        const half = value.length / 2;
        if (half !== 48 && half !== 96)
          throw new Error("Invalid compressed signature length, must be 96 or 192");
        const z1 = bytesToNumberBE(value.slice(0, half));
        const z2 = bytesToNumberBE(value.slice(half));
        if (infinity)
          return bls12_381.G2.ProjectivePoint.ZERO;
        const x1 = Fp.create(z1 & Fp.MASK);
        const x2 = Fp.create(z2);
        const x3 = Fp2.create({ c0: x2, c1: x1 });
        const y2 = Fp2.add(Fp2.pow(x3, _3n4), bls12_381.params.G2b);
        let y3 = Fp2.sqrt(y2);
        if (!y3)
          throw new Error("Failed to find a square root");
        const { re: y0, im: y1 } = Fp2.reim(y3);
        const aflag1 = BigInt(sort);
        const isGreater = y1 > _0n5 && y1 * _2n5 / P3 !== aflag1;
        const isZero = y1 === _0n5 && y0 * _2n5 / P3 !== aflag1;
        if (isGreater || isZero)
          y3 = Fp2.neg(y3);
        const point = bls12_381.G2.ProjectivePoint.fromAffine({ x: x3, y: y3 });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG2ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex2(signatureG2ToRawBytes(point));
      }
    }
  },
  params: {
    x: BLS_X,
    // The BLS parameter x for BLS12-381
    r: Fr2.ORDER
    // order; z⁴ − z² + 1; CURVE.n from other curves
  },
  htfDefaults,
  hash: sha2562,
  randomBytes: randomBytes2
});

// src/auth/bls.ts
var import_buffer2 = require("buffer");
var BlsAuthSize = ki.PUBLIC_KEY_LENGTH + ki.SIGNATURE_LENGTH;
var BLS = class _BLS {
  signer;
  signature;
  addr = EMPTY_ADDRESS;
  constructor(signer, signature) {
    this.signer = signer;
    this.signature = signature;
  }
  address() {
    if (bufferEquals(this.addr.toBytes(), EMPTY_ADDRESS.toBytes())) {
      this.addr = Address.newAddress(BLS_ID, ki.publicKeyToBytes(this.signer));
    }
    return this.addr;
  }
  getTypeId() {
    return BLS_ID;
  }
  async verify(message) {
    return ki.verify(this.signer, this.signature, message);
  }
  actor() {
    return this.address();
  }
  sponsor() {
    return this.address();
  }
  size() {
    return BlsAuthSize;
  }
  toBytes() {
    const size = this.size();
    const codec = Codec.newWriter(size, size);
    const signerBytes = ki.publicKeyToBytes(this.signer);
    codec.packFixedBytes(signerBytes);
    const signatureBytes = ki.signatureToBytes(this.signature);
    codec.packFixedBytes(signatureBytes);
    return codec.toBytes();
  }
  static fromBytes(bytes3) {
    const codec = Codec.newReader(bytes3, bytes3.length);
    const signer = ki.publicKeyFromBytes(
      codec.unpackFixedBytes(ki.PUBLIC_KEY_LENGTH)
    );
    const signature = ki.signatureFromBytes(
      codec.unpackFixedBytes(ki.SIGNATURE_LENGTH)
    );
    return [new _BLS(signer, signature), codec.getError()];
  }
  static fromBytesCodec(codec) {
    const codecResult = codec;
    const signer = ki.publicKeyFromBytes(
      codecResult.unpackFixedBytes(ki.PUBLIC_KEY_LENGTH)
    );
    const signature = ki.signatureFromBytes(
      codecResult.unpackFixedBytes(ki.SIGNATURE_LENGTH)
    );
    return [new _BLS(signer, signature), codecResult];
  }
  static publicKeyToHex(publicKey) {
    return import_buffer2.Buffer.from(ki.publicKeyToBytes(publicKey)).toString("hex");
  }
  static hexToPublicKey(hex2) {
    return ki.publicKeyFromBytes(import_buffer2.Buffer.from(hex2, "hex"));
  }
};
var BLSFactory = class _BLSFactory {
  privateKey;
  constructor(privateKey) {
    let privKey = ki.secretKeyFromBytes(randomBytes(32));
    if (privateKey) {
      privKey = privateKey;
    }
    this.privateKey = privKey;
  }
  sign(message) {
    const signer = _BLSFactory.publicKeyFromPrivateKey(this.privateKey);
    const signature = ki.sign(message, this.privateKey);
    return new BLS(signer, ki.signatureFromBytes(signature));
  }
  computeUnits() {
    return BLS_COMPUTE_UNITS;
  }
  bandwidth() {
    return BlsAuthSize;
  }
  static generateKeyPair() {
    const privateKey = new _BLSFactory().privateKey;
    const publicKey = _BLSFactory.publicKeyFromPrivateKey(privateKey);
    return { privateKey, publicKey };
  }
  static publicKeyFromPrivateKey(privateKey) {
    const publicKeyBytes = bls12_381.getPublicKey(privateKey);
    return ki.publicKeyFromBytes(publicKeyBytes);
  }
  static privateKeyToHex(privateKey) {
    return import_buffer2.Buffer.from(ki.secretKeyToBytes(privateKey)).toString("hex");
  }
  static hexToPrivateKey(hex2) {
    return ki.secretKeyFromBytes(import_buffer2.Buffer.from(hex2, "hex"));
  }
};

// src/auth/ed25519.ts
init_polyfills();

// node_modules/@noble/ed25519/index.js
init_polyfills();
var P2 = 2n ** 255n - 19n;
var N2 = 2n ** 252n + 27742317777372353535851937790883648493n;
var Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an;
var Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n;
var CURVE = {
  a: -1n,
  // where a=-1, d = -(121665/121666) == -(121665 * inv(121666)) mod P
  d: 37095705934669439343138083508754565189542113879843219016388785533085940283555n,
  p: P2,
  n: N2,
  h: 8,
  Gx,
  Gy
  // field prime, curve (group) order, cofactor
};
var err = (m2 = "") => {
  throw new Error(m2);
};
var str = (s) => typeof s === "string";
var isu8 = (a) => a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
var au8 = (a, l2) => (
  // is Uint8Array (of specific length)
  !isu8(a) || typeof l2 === "number" && l2 > 0 && a.length !== l2 ? err("Uint8Array of valid length expected") : a
);
var u8n2 = (data) => new Uint8Array(data);
var toU8 = (a, len) => au8(str(a) ? h2b2(a) : u8n2(au8(a)), len);
var mod2 = (a, b2 = P2) => {
  let r = a % b2;
  return r >= 0n ? r : b2 + r;
};
var isPoint = (p2) => p2 instanceof Point ? p2 : err("Point expected");
var Point = class _Point {
  constructor(ex, ey, ez, et2) {
    this.ex = ex;
    this.ey = ey;
    this.ez = ez;
    this.et = et2;
  }
  static fromAffine(p2) {
    return new _Point(p2.x, p2.y, 1n, mod2(p2.x * p2.y));
  }
  static fromHex(hex2, zip215 = false) {
    const { d: d2 } = CURVE;
    hex2 = toU8(hex2, 32);
    const normed = hex2.slice();
    const lastByte = hex2[31];
    normed[31] = lastByte & ~128;
    const y2 = b2n_LE(normed);
    if (zip215 && !(0n <= y2 && y2 < 2n ** 256n))
      err("bad y coord 1");
    if (!zip215 && !(0n <= y2 && y2 < P2))
      err("bad y coord 2");
    const y22 = mod2(y2 * y2);
    const u2 = mod2(y22 - 1n);
    const v2 = mod2(d2 * y22 + 1n);
    let { isValid, value: x2 } = uvRatio(u2, v2);
    if (!isValid)
      err("bad y coordinate 3");
    const isXOdd = (x2 & 1n) === 1n;
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (!zip215 && x2 === 0n && isLastByteOdd)
      err("bad y coord 3");
    if (isLastByteOdd !== isXOdd)
      x2 = mod2(-x2);
    return new _Point(x2, y2, 1n, mod2(x2 * y2));
  }
  get x() {
    return this.toAffine().x;
  }
  // .x, .y will call expensive toAffine.
  get y() {
    return this.toAffine().y;
  }
  // Should be used with care.
  equals(other) {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const { ex: X2, ey: Y2, ez: Z2 } = isPoint(other);
    const X1Z2 = mod2(X1 * Z2), X2Z1 = mod2(X2 * Z1);
    const Y1Z2 = mod2(Y1 * Z2), Y2Z1 = mod2(Y2 * Z1);
    return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
  }
  is0() {
    return this.equals(I2);
  }
  negate() {
    return new _Point(mod2(-this.ex), this.ey, this.ez, mod2(-this.et));
  }
  double() {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const { a } = CURVE;
    const A2 = mod2(X1 * X1);
    const B2 = mod2(Y1 * Y1);
    const C2 = mod2(2n * mod2(Z1 * Z1));
    const D2 = mod2(a * A2);
    const x1y1 = X1 + Y1;
    const E2 = mod2(mod2(x1y1 * x1y1) - A2 - B2);
    const G3 = D2 + B2;
    const F2 = G3 - C2;
    const H2 = D2 - B2;
    const X3 = mod2(E2 * F2);
    const Y3 = mod2(G3 * H2);
    const T3 = mod2(E2 * H2);
    const Z3 = mod2(F2 * G3);
    return new _Point(X3, Y3, Z3, T3);
  }
  add(other) {
    const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
    const { ex: X2, ey: Y2, ez: Z2, et: T2 } = isPoint(other);
    const { a, d: d2 } = CURVE;
    const A2 = mod2(X1 * X2);
    const B2 = mod2(Y1 * Y2);
    const C2 = mod2(T1 * d2 * T2);
    const D2 = mod2(Z1 * Z2);
    const E2 = mod2((X1 + Y1) * (X2 + Y2) - A2 - B2);
    const F2 = mod2(D2 - C2);
    const G3 = mod2(D2 + C2);
    const H2 = mod2(B2 - a * A2);
    const X3 = mod2(E2 * F2);
    const Y3 = mod2(G3 * H2);
    const T3 = mod2(E2 * H2);
    const Z3 = mod2(F2 * G3);
    return new _Point(X3, Y3, Z3, T3);
  }
  mul(n, safe = true) {
    if (n === 0n)
      return safe === true ? err("cannot multiply by 0") : I2;
    if (!(typeof n === "bigint" && 0n < n && n < N2))
      err("invalid scalar, must be < L");
    if (!safe && this.is0() || n === 1n)
      return this;
    if (this.equals(G2))
      return wNAF2(n).p;
    let p2 = I2, f3 = G2;
    for (let d2 = this; n > 0n; d2 = d2.double(), n >>= 1n) {
      if (n & 1n)
        p2 = p2.add(d2);
      else if (safe)
        f3 = f3.add(d2);
    }
    return p2;
  }
  multiply(scalar) {
    return this.mul(scalar);
  }
  // Aliases for compatibilty
  clearCofactor() {
    return this.mul(BigInt(CURVE.h), false);
  }
  // multiply by cofactor
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  // check if P is small order
  isTorsionFree() {
    let p2 = this.mul(N2 / 2n, false).double();
    if (N2 % 2n)
      p2 = p2.add(this);
    return p2.is0();
  }
  toAffine() {
    const { ex: x2, ey: y2, ez: z2 } = this;
    if (this.equals(I2))
      return { x: 0n, y: 1n };
    const iz = invert2(z2);
    if (mod2(z2 * iz) !== 1n)
      err("invalid inverse");
    return { x: mod2(x2 * iz), y: mod2(y2 * iz) };
  }
  toRawBytes() {
    const { x: x2, y: y2 } = this.toAffine();
    const b2 = n2b_32LE(y2);
    b2[31] |= x2 & 1n ? 128 : 0;
    return b2;
  }
  toHex() {
    return b2h(this.toRawBytes());
  }
  // encode to hex string
};
Point.BASE = new Point(Gx, Gy, 1n, mod2(Gx * Gy));
Point.ZERO = new Point(0n, 1n, 1n, 0n);
var { BASE: G2, ZERO: I2 } = Point;
var padh = (num, pad) => num.toString(16).padStart(pad, "0");
var b2h = (b2) => Array.from(b2).map((e) => padh(e, 2)).join("");
var h2b2 = (hex2) => {
  const l2 = hex2.length;
  if (!str(hex2) || l2 % 2)
    err("hex invalid 1");
  const arr = u8n2(l2 / 2);
  for (let i = 0; i < arr.length; i++) {
    const j2 = i * 2;
    const h2 = hex2.slice(j2, j2 + 2);
    const b2 = Number.parseInt(h2, 16);
    if (Number.isNaN(b2) || b2 < 0)
      err("hex invalid 2");
    arr[i] = b2;
  }
  return arr;
};
var n2b_32LE = (num) => h2b2(padh(num, 32 * 2)).reverse();
var b2n_LE = (b2) => BigInt("0x" + b2h(u8n2(au8(b2)).reverse()));
var concatB = (...arrs) => {
  const r = u8n2(arrs.reduce((sum, a) => sum + au8(a).length, 0));
  let pad = 0;
  arrs.forEach((a) => {
    r.set(a, pad);
    pad += a.length;
  });
  return r;
};
var invert2 = (num, md = P2) => {
  if (num === 0n || md <= 0n)
    err("no inverse n=" + num + " mod=" + md);
  let a = mod2(num, md), b2 = md, x2 = 0n, y2 = 1n, u2 = 1n, v2 = 0n;
  while (a !== 0n) {
    const q2 = b2 / a, r = b2 % a;
    const m2 = x2 - u2 * q2, n = y2 - v2 * q2;
    b2 = a, a = r, x2 = u2, y2 = v2, u2 = m2, v2 = n;
  }
  return b2 === 1n ? mod2(x2, md) : err("no inverse");
};
var pow2 = (x2, power) => {
  let r = x2;
  while (power-- > 0n) {
    r *= r;
    r %= P2;
  }
  return r;
};
var pow_2_252_3 = (x2) => {
  const x22 = x2 * x2 % P2;
  const b2 = x22 * x2 % P2;
  const b4 = pow2(b2, 2n) * b2 % P2;
  const b5 = pow2(b4, 1n) * x2 % P2;
  const b10 = pow2(b5, 5n) * b5 % P2;
  const b20 = pow2(b10, 10n) * b10 % P2;
  const b40 = pow2(b20, 20n) * b20 % P2;
  const b80 = pow2(b40, 40n) * b40 % P2;
  const b160 = pow2(b80, 80n) * b80 % P2;
  const b240 = pow2(b160, 80n) * b80 % P2;
  const b250 = pow2(b240, 10n) * b10 % P2;
  const pow_p_5_8 = pow2(b250, 2n) * x2 % P2;
  return { pow_p_5_8, b2 };
};
var RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
var uvRatio = (u2, v2) => {
  const v3 = mod2(v2 * v2 * v2);
  const v7 = mod2(v3 * v3 * v2);
  const pow3 = pow_2_252_3(u2 * v7).pow_p_5_8;
  let x2 = mod2(u2 * v3 * pow3);
  const vx2 = mod2(v2 * x2 * x2);
  const root1 = x2;
  const root2 = mod2(x2 * RM1);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === mod2(-u2);
  const noRoot = vx2 === mod2(-u2 * RM1);
  if (useRoot1)
    x2 = root1;
  if (useRoot2 || noRoot)
    x2 = root2;
  if ((mod2(x2) & 1n) === 1n)
    x2 = mod2(-x2);
  return { isValid: useRoot1 || useRoot2, value: x2 };
};
var modL_LE = (hash) => mod2(b2n_LE(hash), N2);
var _shaS;
var sha512a = (...m2) => etc.sha512Async(...m2);
var sha512s = (...m2) => (
  // Sync SHA512, not set by default
  typeof _shaS === "function" ? _shaS(...m2) : err("etc.sha512Sync not set")
);
var hash2extK = (hashed) => {
  const head = hashed.slice(0, 32);
  head[0] &= 248;
  head[31] &= 127;
  head[31] |= 64;
  const prefix = hashed.slice(32, 64);
  const scalar = modL_LE(head);
  const point = G2.mul(scalar);
  const pointBytes = point.toRawBytes();
  return { head, prefix, scalar, point, pointBytes };
};
var getExtendedPublicKey = (priv) => hash2extK(sha512s(toU8(priv, 32)));
var getPublicKey = (priv) => getExtendedPublicKey(priv).pointBytes;
function hashFinish(asynchronous, res) {
  if (asynchronous)
    return sha512a(res.hashable).then(res.finish);
  return res.finish(sha512s(res.hashable));
}
var _sign = (e, rBytes, msg) => {
  const { pointBytes: P3, scalar: s } = e;
  const r = modL_LE(rBytes);
  const R2 = G2.mul(r).toRawBytes();
  const hashable = concatB(R2, P3, msg);
  const finish = (hashed) => {
    const S2 = mod2(r + modL_LE(hashed) * s, N2);
    return au8(concatB(R2, n2b_32LE(S2)), 64);
  };
  return { hashable, finish };
};
var sign = (msg, privKey) => {
  const m2 = toU8(msg);
  const e = getExtendedPublicKey(privKey);
  const rBytes = sha512s(e.prefix, m2);
  return hashFinish(false, _sign(e, rBytes, m2));
};
var dvo = { zip215: true };
var _verify = (sig, msg, pub, opts = dvo) => {
  msg = toU8(msg);
  sig = toU8(sig, 64);
  const { zip215 } = opts;
  let A2, R2, s, SB, hashable = new Uint8Array();
  try {
    A2 = Point.fromHex(pub, zip215);
    R2 = Point.fromHex(sig.slice(0, 32), zip215);
    s = b2n_LE(sig.slice(32, 64));
    SB = G2.mul(s, false);
    hashable = concatB(R2.toRawBytes(), A2.toRawBytes(), msg);
  } catch (error) {
  }
  const finish = (hashed) => {
    if (SB == null)
      return false;
    if (!zip215 && A2.isSmallOrder())
      return false;
    const k2 = modL_LE(hashed);
    const RkA = R2.add(A2.mul(k2, false));
    return RkA.add(SB.negate()).clearCofactor().is0();
  };
  return { hashable, finish };
};
var verify = (s, m2, p2, opts = dvo) => hashFinish(false, _verify(s, m2, p2, opts));
var cr2 = () => (
  // We support: 1) browsers 2) node.js 19+
  typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0
);
var etc = {
  bytesToHex: b2h,
  hexToBytes: h2b2,
  concatBytes: concatB,
  mod: mod2,
  invert: invert2,
  randomBytes: (len = 32) => {
    const crypto3 = cr2();
    if (!crypto3 || !crypto3.getRandomValues)
      err("crypto.getRandomValues must be defined");
    return crypto3.getRandomValues(u8n2(len));
  },
  sha512Async: async (...messages) => {
    const crypto3 = cr2();
    if (!crypto3 || !crypto3.subtle)
      err("crypto.subtle or etc.sha512Async must be defined");
    const m2 = concatB(...messages);
    return u8n2(await crypto3.subtle.digest("SHA-512", m2.buffer));
  },
  sha512Sync: void 0
  // Actual logic below
};
Object.defineProperties(etc, { sha512Sync: {
  configurable: false,
  get() {
    return _shaS;
  },
  set(f3) {
    if (!_shaS)
      _shaS = f3;
  }
} });
var W2 = 8;
var precompute = () => {
  const points = [];
  const windows = 256 / W2 + 1;
  let p2 = G2, b2 = p2;
  for (let w2 = 0; w2 < windows; w2++) {
    b2 = p2;
    points.push(b2);
    for (let i = 1; i < 2 ** (W2 - 1); i++) {
      b2 = b2.add(p2);
      points.push(b2);
    }
    p2 = b2.double();
  }
  return points;
};
var Gpows = void 0;
var wNAF2 = (n) => {
  const comp = Gpows || (Gpows = precompute());
  const neg = (cnd, p3) => {
    let n2 = p3.negate();
    return cnd ? n2 : p3;
  };
  let p2 = I2, f3 = G2;
  const windows = 1 + 256 / W2;
  const wsize = 2 ** (W2 - 1);
  const mask = BigInt(2 ** W2 - 1);
  const maxNum = 2 ** W2;
  const shiftBy = BigInt(W2);
  for (let w2 = 0; w2 < windows; w2++) {
    const off = w2 * wsize;
    let wbits = Number(n & mask);
    n >>= shiftBy;
    if (wbits > wsize) {
      wbits -= maxNum;
      n += 1n;
    }
    const off1 = off, off2 = off + Math.abs(wbits) - 1;
    const cnd1 = w2 % 2 !== 0, cnd2 = wbits < 0;
    if (wbits === 0) {
      f3 = f3.add(neg(cnd1, comp[off1]));
    } else {
      p2 = p2.add(neg(cnd2, comp[off2]));
    }
  }
  return { p: p2, f: f3 };
};

// src/crypto/ed25519.ts
init_polyfills();
var import_crypto4 = require("crypto");
var import_crypto_browserify2 = __toESM(require_crypto_browserify(), 1);
var isNode2 = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
var createHash2 = isNode2 ? import_crypto4.createHash : import_crypto_browserify2.createHash;
var PUBLIC_KEY_LENGTH = 32;
var PRIVATE_KEY_LENGTH = 32;
var SIGNATURE_LENGTH = 64;
function secretKeyFromBytes(skBytes) {
  return typeof skBytes === "string" ? jo.hexToBuffer(skBytes) : skBytes;
}
function secretKeyToBytes(sk) {
  return sk;
}
function publicKeyFromBytes(pkBytes) {
  return typeof pkBytes === "string" ? jo.hexToBuffer(pkBytes) : pkBytes;
}
function publicKeyToBytes(pk) {
  return pk;
}
function signatureFromBytes(sigBytes) {
  return sigBytes;
}
function signatureToBytes(sig) {
  return sig;
}
function verify2(pk, sig, msg) {
  const message = typeof msg === "string" ? jo.hexToBuffer(msg) : msg;
  return verify(sig, message, pk);
}
function sign2(msg, sk) {
  const message = typeof msg === "string" ? jo.hexToBuffer(msg) : msg;
  return sign(message, sk);
}
etc.sha512Sync = (...messages) => {
  const hash = createHash2("sha512");
  for (const message of messages) {
    hash.update(message);
  }
  return new Uint8Array(hash.digest());
};

// src/utils/hex.ts
init_polyfills();
var import_buffer3 = require("buffer");
function isHex(str2) {
  const hexRegex = /^[0-9a-fA-F]+$/;
  return hexRegex.test(str2);
}
function toHex(b2) {
  return import_buffer3.Buffer.from(b2).toString("hex");
}
function loadHex(s, expectedSize) {
  const bytes3 = import_buffer3.Buffer.from(s, "hex");
  if (expectedSize !== -1 && bytes3.length !== expectedSize) {
    throw new Error("Invalid size");
  }
  return new Uint8Array(bytes3);
}

// src/auth/ed25519.ts
var import_buffer4 = require("buffer");
var Ed25519AuthSize = PUBLIC_KEY_LENGTH + SIGNATURE_LENGTH;
var ED25519 = class _ED25519 {
  signer;
  signature;
  addr = EMPTY_ADDRESS;
  constructor(signer, signature) {
    this.signer = signer;
    this.signature = signature;
  }
  address() {
    if (bufferEquals(this.addr.toBytes(), EMPTY_ADDRESS.toBytes())) {
      this.addr = Address.newAddress(ED25519_ID, this.signer);
    }
    return this.addr;
  }
  getTypeId() {
    return ED25519_ID;
  }
  async verify(message) {
    return verify2(this.signer, this.signature, message);
  }
  actor() {
    return this.address();
  }
  sponsor() {
    return this.address();
  }
  size() {
    return Ed25519AuthSize;
  }
  toBytes() {
    const size = this.size();
    const codec = Codec.newWriter(size, size);
    codec.packFixedBytes(this.signer);
    codec.packFixedBytes(this.signature);
    return codec.toBytes();
  }
  static fromBytes(bytes3) {
    const codec = Codec.newReader(bytes3, bytes3.length);
    const signer = codec.unpackFixedBytes(PUBLIC_KEY_LENGTH);
    const signature = codec.unpackFixedBytes(SIGNATURE_LENGTH);
    return [new _ED25519(signer, signature), codec.getError()];
  }
  static fromBytesCodec(codec) {
    const codecResult = codec;
    const signer = codecResult.unpackFixedBytes(PUBLIC_KEY_LENGTH);
    const signature = codecResult.unpackFixedBytes(SIGNATURE_LENGTH);
    return [new _ED25519(signer, signature), codecResult];
  }
  static publicKeyToHex(publicKey) {
    return import_buffer4.Buffer.from(publicKey).toString("hex");
  }
  static hexToPublicKey(hex2) {
    return import_buffer4.Buffer.from(hex2, "hex");
  }
};
var ED25519Factory = class _ED25519Factory {
  privateKey;
  constructor(privateKey) {
    let privKey = randomBytes(32);
    if (privateKey) {
      privKey = privateKey;
    }
    this.privateKey = privKey;
  }
  sign(message) {
    const publicKey = getPublicKey(this.privateKey);
    const signature = sign2(message, this.privateKey);
    return new ED25519(publicKey, signature);
  }
  computeUnits() {
    return ED25519_COMPUTE_UNITS;
  }
  bandwidth() {
    return Ed25519AuthSize;
  }
  static generateKeyPair() {
    const privateKey = new _ED25519Factory().privateKey;
    const publicKey = getPublicKey(privateKey);
    return { privateKey, publicKey };
  }
  static publicKeyFromPrivateKey(privateKey) {
    return getPublicKey(privateKey);
  }
  static privateKeyToHex(privateKey) {
    return import_buffer4.Buffer.from(privateKey).toString("hex");
  }
  static hexToPrivateKey(hex2) {
    let privateKeyBytes = import_buffer4.Buffer.from(hex2, "hex");
    if (privateKeyBytes.length === PRIVATE_KEY_LENGTH + PUBLIC_KEY_LENGTH) {
      privateKeyBytes = privateKeyBytes.subarray(0, PRIVATE_KEY_LENGTH);
      return loadHex(toHex(privateKeyBytes), PRIVATE_KEY_LENGTH);
    } else if (privateKeyBytes.length !== PRIVATE_KEY_LENGTH) {
      throw new Error("Invalid combined key size");
    }
    return loadHex(hex2, PRIVATE_KEY_LENGTH);
  }
};

// src/codec/typeParser.ts
init_polyfills();
var errTooManyItems = new Error("Too many items");
var errDuplicateItem = new Error("Duplicate item");
var TypeParser = class {
  typeToIndex;
  indexToDecoder;
  constructor() {
    this.typeToIndex = /* @__PURE__ */ new Map();
    this.indexToDecoder = /* @__PURE__ */ new Map();
  }
  // Register a new type into TypeParser
  register(id, f3, y2) {
    if (this.indexToDecoder.size === MaxUint8 + 1) {
      throw errTooManyItems;
    }
    if (this.indexToDecoder.has(id)) {
      throw errDuplicateItem;
    }
    this.indexToDecoder.set(id, { f: f3, y: y2 });
  }
  // LookupIndex returns the decoder function and success of lookup of [index]
  lookupIndex(index) {
    const decoder = this.indexToDecoder.get(index);
    if (decoder) {
      return [decoder.f, true];
    }
    const noop = (codec) => {
      return [void 0, codec];
    };
    return [noop, false];
  }
};

// src/constants/endpoints.ts
init_polyfills();
var MAINNET_PUBLIC_API_BASE_URL = "http://api-mainnet.nuklaivm-dev.net:9650";
var TESTNET_PUBLIC_API_BASE_URL = "http://api-devnet.nuklaivm-dev.net:9650";
var HYPERCHAIN_ID = "zepWp9PbeU9HLHebQ8gXkvxBYH5Bz4v8SoWXE6kyjjwNaMJfC";
var HYPERCHAIN_ENDPOINT = `/ext/bc/${HYPERCHAIN_ID}`;
var COREAPI_PATH = "coreapi";
var COREAPI_METHOD_PREFIX = "hypersdk";

// src/services/rpc.ts
init_polyfills();

// src/chain/baseTx.ts
init_polyfills();
var BaseTxSize = 2 * UINT64_LEN + ID_LEN;
var BaseTx = class _BaseTx {
  timestamp;
  chainId;
  maxFee;
  constructor(timestamp, chainId, maxFee) {
    this.timestamp = timestamp;
    this.chainId = chainId;
    this.maxFee = maxFee;
  }
  size() {
    return BaseTxSize;
  }
  toBytes() {
    const codec = Codec.newWriter(this.size(), this.size());
    codec.packInt64(this.timestamp);
    codec.packID(this.chainId);
    codec.packUint64(this.maxFee);
    return codec.toBytes();
  }
  static fromBytes(bytes3) {
    const codec = Codec.newReader(bytes3, bytes3.length);
    const timestamp = codec.unpackInt64(true);
    if (timestamp % MillisecondsPerSecond !== 0n) {
      return [
        new _BaseTx(0n, EMPTY_ID, 0n),
        new Error("Timestamp is misaligned")
      ];
    }
    const chainId = codec.unpackID(true);
    const maxFee = codec.unpackUint64(true);
    const baseTx = new _BaseTx(timestamp, chainId, maxFee);
    return [baseTx, codec.getError()];
  }
};

// src/chain/fees.ts
init_polyfills();
var import_big_integer = __toESM(require_BigInteger(), 1);
var FeeDimensions = 5;
function mul64(a, b2) {
  return BigInt(a) * BigInt(b2);
}
function add64(a, b2) {
  return a + b2;
}
function mulSum(a, b2) {
  let val = 0n;
  for (let i = 0; i < FeeDimensions; i++) {
    try {
      const v2 = mul64(a[i], b2[i]);
      val = add64(val, v2);
    } catch (err2) {
      return [0n, err2];
    }
  }
  return [val];
}
function estimateUnits(genesisInfo, actions, authFactory) {
  let bandwidth = BaseTxSize;
  let stateKeysMaxChunks = [];
  let computeOp = (0, import_big_integer.default)(genesisInfo.baseUnits);
  let readsOp = (0, import_big_integer.default)(0);
  let allocatesOp = (0, import_big_integer.default)(0);
  let writesOp = (0, import_big_integer.default)(0);
  bandwidth += UINT8_LEN;
  actions.forEach((action) => {
    bandwidth += BYTE_LEN + action.size();
    const actionStateKeysMaxChunks = action.stateKeysMaxChunks();
    stateKeysMaxChunks = [...stateKeysMaxChunks, ...actionStateKeysMaxChunks];
    computeOp = computeOp.add(action.computeUnits());
  });
  bandwidth += BYTE_LEN + authFactory.bandwidth();
  const sponsorStateKeyMaxChunks = [STORAGE_BALANCE_CHUNKS];
  stateKeysMaxChunks = [...stateKeysMaxChunks, ...sponsorStateKeyMaxChunks];
  computeOp = computeOp.add(authFactory.computeUnits());
  const compute = computeOp.valueOf();
  for (const maxChunks of stateKeysMaxChunks) {
    readsOp = readsOp.add(genesisInfo.storageKeyReadUnits);
    allocatesOp = allocatesOp.add(genesisInfo.storageKeyAllocateUnits);
    writesOp = writesOp.add(genesisInfo.storageKeyWriteUnits);
    readsOp = readsOp.add(
      (0, import_big_integer.default)(maxChunks).multiply((0, import_big_integer.default)(genesisInfo.storageValueReadUnits))
    );
    allocatesOp = allocatesOp.add(
      (0, import_big_integer.default)(maxChunks).multiply((0, import_big_integer.default)(genesisInfo.storageValueAllocateUnits))
    );
    writesOp = writesOp.add(
      (0, import_big_integer.default)(maxChunks).multiply((0, import_big_integer.default)(genesisInfo.storageValueWriteUnits))
    );
  }
  const reads = readsOp.valueOf();
  const allocates = allocatesOp.valueOf();
  const writes = writesOp.valueOf();
  return [bandwidth, compute, reads, allocates, writes];
}

// src/chain/transaction.ts
init_polyfills();
var Transaction = class _Transaction {
  base;
  actions;
  auth;
  bytes = new Uint8Array();
  constructor(base, actions) {
    this.base = base;
    this.actions = actions;
  }
  calculateDigest() {
    const codec = Codec.newWriter(this.size(), NETWORK_SIZE_LIMIT);
    codec.packFixedBytes(this.base.toBytes());
    codec.packByte(this.actions.length);
    this.actions.forEach((action) => {
      const actionTypeId = action.getTypeId();
      codec.packByte(actionTypeId);
      codec.packFixedBytes(action.toBytes());
    });
    return [codec.toBytes(), codec.getError()];
  }
  sign(factory, actionRegistry, authRegistry) {
    let [msg, err2] = this.calculateDigest();
    if (err2) {
      return [this, err2];
    }
    this.auth = factory.sign(msg);
    [this.bytes, err2] = this.toBytes();
    if (err2) {
      return [this, err2];
    }
    return _Transaction.fromBytes(this.bytes, actionRegistry, authRegistry);
  }
  toBytes() {
    if (this.bytes.length > 0) {
      return [this.bytes, void 0];
    }
    const codec = Codec.newWriter(this.size(), NETWORK_SIZE_LIMIT);
    const baseBytes = this.base.toBytes();
    codec.packFixedBytes(baseBytes);
    const numActions = this.actions.length;
    codec.packByte(numActions);
    this.actions.forEach((action) => {
      const actionTypeId = action.getTypeId();
      codec.packByte(actionTypeId);
      const actionBytes = action.toBytes();
      codec.packFixedBytes(actionBytes);
    });
    if (this.auth) {
      const authTypeId = this.auth.getTypeId();
      codec.packByte(authTypeId);
      const authBytes = this.auth.toBytes();
      codec.packFixedBytes(authBytes);
    }
    return [codec.toBytes(), codec.getError()];
  }
  static fromBytes(bytes3, actionRegistry, authRegistry) {
    let codec = Codec.newReader(bytes3, bytes3.length);
    const baseBytes = codec.unpackFixedBytes(BaseTxSize);
    let [base, err2] = BaseTx.fromBytes(baseBytes);
    if (err2) {
      return [
        new _Transaction(base, []),
        new Error(`Failed to unpack base transaction: ${err2}`)
      ];
    }
    const numActions = codec.unpackByte();
    if (numActions === 0) {
      return [
        new _Transaction(base, []),
        new Error("Transaction must have at least one action")
      ];
    }
    const actions = [];
    for (let i = 0; i < numActions; i++) {
      const actionTypeId = codec.unpackByte();
      const [fromBytesAction, ok] = actionRegistry.lookupIndex(actionTypeId);
      if (!ok) {
        return [
          new _Transaction(base, []),
          new Error(`Invalid action type: ${actionTypeId}`)
        ];
      }
      const [action, codecAction] = fromBytesAction(codec);
      if (codecAction.getError()) {
        return [
          new _Transaction(base, []),
          new Error(`Failed to unpack action: ${err2}`)
        ];
      }
      codec = codecAction;
      actions.push(action);
    }
    const transaction = new _Transaction(base, actions);
    if (codec.getOffset() < bytes3.length) {
      const authTypeId = codec.unpackByte();
      const [fromBytesAuth, ok] = authRegistry.lookupIndex(authTypeId);
      if (!ok) {
        return [
          new _Transaction(base, []),
          new Error(`Invalid auth type: ${authTypeId}`)
        ];
      }
      const [auth, codecAuth] = fromBytesAuth(codec);
      if (codecAuth.getError()) {
        return [
          new _Transaction(base, []),
          new Error(`Failed to unpack auth: ${err2}`)
        ];
      }
      codec = codecAuth;
      transaction.auth = auth;
    }
    transaction.bytes = bytes3;
    return [transaction, codec.getError()];
  }
  id() {
    return Ve.fromBytes(ToID(this.bytes))[0];
  }
  size() {
    let size = this.base.size() + BYTE_LEN;
    this.actions.forEach((action) => {
      const actionSize = BYTE_LEN + action.size();
      size += actionSize;
    });
    if (this.auth) {
      const authSize = BYTE_LEN + this.auth.size();
      size += authSize;
    }
    return size;
  }
};

// src/common/baseApi.ts
init_polyfills();

// src/common/rpc.ts
init_polyfills();
var JrpcProvider = class {
  constructor(url) {
    this.url = url;
  }
  reqId = 0;
  async callMethod(method, parameters, fetchOptions) {
    const body = {
      jsonrpc: "2.0",
      id: this.reqId++,
      method,
      params: parameters
    };
    const resp = await fetch(this.url, {
      ...fetchOptions,
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions?.headers
      }
    }).then(async (r) => r.json()).then((data) => data);
    if (resp.error) throw new Error(resp.error.message);
    return resp.result;
  }
  // TODO: Batch RPC call
};

// src/common/baseApi.ts
var Api = class {
  constructor(baseURL = MAINNET_PUBLIC_API_BASE_URL, path = `${HYPERCHAIN_ENDPOINT}/${COREAPI_PATH}`, base, fetchOptions) {
    this.path = path;
    this.base = base;
    this.fetchOptions = fetchOptions;
    this.rpcProvider = new JrpcProvider(baseURL + path);
  }
  rpcProvider;
  setFetchOptions(options) {
    this.fetchOptions = options;
  }
  getMethodName = (methodName) => {
    if (!this.base) {
      return methodName;
    }
    return `${this.base}.${methodName}`;
  };
  callRpc = (methodName, params) => this.rpcProvider.callMethod(
    this.getMethodName(methodName),
    params,
    this.fetchOptions
  );
};

// src/services/rpc.ts
var RpcService = class extends Api {
  constructor(config) {
    super(
      config.baseApiUrl,
      `/ext/bc/${config.blockchainId}/${COREAPI_PATH}`,
      COREAPI_METHOD_PREFIX
    );
    this.config = config;
  }
  ping() {
    return this.callRpc("ping");
  }
  // Retrieve network IDs
  getNetworkInfo() {
    return this.callRpc("network");
  }
  // Get information about the last accepted block
  getLastAccepted() {
    return this.callRpc("lastAccepted");
  }
  // Fetch current unit prices for transactions
  getUnitPrices() {
    return this.callRpc("unitPrices");
  }
  // Fetch warp signatures associated with a transaction
  getWarpSignatures(txID) {
    return this.callRpc("getWarpSignatures", {
      txID
    });
  }
  // Submit a transaction to the network
  async submitTransaction(tx) {
    const txBase64 = Array.from(tx);
    return this.callRpc("submitTx", { tx: txBase64 });
  }
  async generateTransaction(genesisInfo, actionRegistry, authRegistry, actions, authFactory) {
    try {
      const timestamp = getUnixRMilli(
        Date.now(),
        genesisInfo.validityWindow
      );
      const chainId = Ve.fromString(this.config.blockchainId);
      const unitPrices = await this.getUnitPrices();
      const units = estimateUnits(genesisInfo, actions, authFactory);
      const [maxFee, error] = mulSum(unitPrices.unitPrices, units);
      if (error) {
        return {
          submit: async () => {
            throw new Error("Transaction failed, cannot submit.");
          },
          txSigned: {},
          err: error
        };
      }
      const base = new BaseTx(timestamp, chainId, maxFee);
      const tx = new Transaction(base, actions);
      const [txSigned, err2] = tx.sign(authFactory, actionRegistry, authRegistry);
      if (err2) {
        return {
          submit: async () => {
            throw new Error("Transaction failed, cannot submit.");
          },
          txSigned: {},
          err: err2
        };
      }
      const submit = async () => {
        const [txBytes, err3] = txSigned.toBytes();
        if (err3) {
          throw new Error(`Transaction failed, cannot submit. Err: ${err3}`);
        }
        return await this.submitTransaction(txBytes);
      };
      return { submit, txSigned, err: void 0 };
    } catch (error) {
      return {
        submit: async () => {
          throw new Error("Transaction failed, cannot submit.");
        },
        txSigned: {},
        err: error
      };
    }
  }
};

// src/actions/index.ts
var actions_exports = {};
__export(actions_exports, {
  Transfer: () => Transfer,
  TransferTxSize: () => TransferTxSize
});
init_polyfills();

// src/actions/action.ts
init_polyfills();

// src/auth/index.ts
var auth_exports = {};
__export(auth_exports, {
  BLS: () => BLS,
  BLSFactory: () => BLSFactory,
  BlsAuthSize: () => BlsAuthSize,
  ED25519: () => ED25519,
  ED25519Factory: () => ED25519Factory,
  Ed25519AuthSize: () => Ed25519AuthSize,
  getAuth: () => getAuth,
  getAuthFactory: () => getAuthFactory
});
init_polyfills();

// src/auth/auth.ts
init_polyfills();

// src/auth/provider.ts
init_polyfills();

// src/utils/base64.ts
init_polyfills();
function isBase64(str2) {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return base64Regex.test(str2);
}
function base64ToUint8Array(base642) {
  const binaryString = atob(base642);
  const len = binaryString.length;
  const bytes3 = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes3[i] = binaryString.charCodeAt(i);
  }
  return bytes3;
}

// src/auth/provider.ts
var import_buffer5 = require("buffer");
function decodePrivateKey(privateKey) {
  if (isHex(privateKey)) {
    return import_buffer5.Buffer.from(privateKey, "hex");
  } else if (isBase64(privateKey)) {
    return base64ToUint8Array(privateKey);
  } else {
    throw new Error("Unsupported private key format");
  }
}
function getAuthFactory(authType, privateKeyString) {
  const privateKeyBytes = decodePrivateKey(privateKeyString);
  const privateKeyHex = import_buffer5.Buffer.from(privateKeyBytes).toString("hex");
  if (authType === "bls") {
    const privateKey = BLSFactory.hexToPrivateKey(privateKeyHex);
    return new BLSFactory(privateKey);
  } else if (authType === "ed25519") {
    const privateKey = ED25519Factory.hexToPrivateKey(privateKeyHex);
    return new ED25519Factory(privateKey);
  } else {
    throw new Error("Unsupported key type");
  }
}
function getAuth(authType, signer, signature) {
  if (authType === "bls") {
    return new BLS(
      ki.publicKeyFromBytes(signer),
      ki.signatureFromBytes(signature)
    );
  } else if (authType === "ed25519") {
    return new ED25519(signer, signature);
  } else {
    throw new Error("Unsupported key type");
  }
}

// src/chain/index.ts
var chain_exports = {};
__export(chain_exports, {
  BaseTx: () => BaseTx,
  BaseTxSize: () => BaseTxSize,
  Transaction: () => Transaction,
  estimateUnits: () => estimateUnits,
  mulSum: () => mulSum
});
init_polyfills();

// src/chain/dependencies.ts
init_polyfills();

// src/codec/index.ts
var codec_exports = {};
__export(codec_exports, {
  Codec: () => Codec,
  TypeParser: () => TypeParser
});
init_polyfills();

// src/common/index.ts
var common_exports = {};
__export(common_exports, {
  Api: () => Api,
  JrpcProvider: () => JrpcProvider
});
init_polyfills();

// src/common/models.ts
init_polyfills();

// src/config.ts
var config_exports = {};
init_polyfills();

// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  ADDRESS_LEN: () => ADDRESS_LEN,
  BLS_COMPUTE_UNITS: () => BLS_COMPUTE_UNITS,
  BLS_ID: () => BLS_ID,
  BOOL_LEN: () => BOOL_LEN,
  BYTE_LEN: () => BYTE_LEN,
  COREAPI_METHOD_PREFIX: () => COREAPI_METHOD_PREFIX,
  COREAPI_PATH: () => COREAPI_PATH,
  CREATEASSET_COMPUTE_UNITS: () => CREATEASSET_COMPUTE_UNITS,
  CREATEASSET_ID: () => CREATEASSET_ID,
  DECIMALS: () => DECIMALS,
  DELEGATE_USER_STAKE_CHUNKS: () => DELEGATE_USER_STAKE_CHUNKS,
  ED25519_COMPUTE_UNITS: () => ED25519_COMPUTE_UNITS,
  ED25519_ID: () => ED25519_ID,
  EMPTY_ADDRESS: () => EMPTY_ADDRESS,
  EMPTY_ID: () => EMPTY_ID,
  HRP: () => HRP,
  HYPERCHAIN_ENDPOINT: () => HYPERCHAIN_ENDPOINT,
  HYPERCHAIN_ID: () => HYPERCHAIN_ID,
  ID_LEN: () => ID_LEN,
  INT64_LEN: () => INT64_LEN,
  INT_LEN: () => INT_LEN,
  LONG_LEN: () => LONG_LEN,
  MAINNET_PUBLIC_API_BASE_URL: () => MAINNET_PUBLIC_API_BASE_URL,
  MAX_DECIMALS: () => MAX_DECIMALS,
  MAX_MEMO_SIZE: () => MAX_MEMO_SIZE,
  MAX_METADATA_SIZE: () => MAX_METADATA_SIZE,
  MAX_SYMBOL_SIZE: () => MAX_SYMBOL_SIZE,
  MINTASSET_COMPUTE_UNITS: () => MINTASSET_COMPUTE_UNITS,
  MINTASSET_ID: () => MINTASSET_ID,
  MaxInt: () => MaxInt,
  MaxStringLen: () => MaxStringLen,
  MaxUint: () => MaxUint,
  MaxUint16: () => MaxUint16,
  MaxUint64: () => MaxUint64,
  MaxUint64Offset: () => MaxUint64Offset,
  MaxUint8: () => MaxUint8,
  MaxUint8Offset: () => MaxUint8Offset,
  MillisecondsPerSecond: () => MillisecondsPerSecond,
  NETWORK_SIZE_LIMIT: () => NETWORK_SIZE_LIMIT,
  REGISTER_VALIDATOR_STAKE_CHUNKS: () => REGISTER_VALIDATOR_STAKE_CHUNKS,
  SECP256R1_COMPUTE_UNITS: () => SECP256R1_COMPUTE_UNITS,
  SECP256R1_ID: () => SECP256R1_ID,
  SHORT_LEN: () => SHORT_LEN,
  STORAGE_ASSET_CHUNKS: () => STORAGE_ASSET_CHUNKS,
  STORAGE_BALANCE_CHUNKS: () => STORAGE_BALANCE_CHUNKS,
  SYMBOL: () => SYMBOL,
  TESTNET_PUBLIC_API_BASE_URL: () => TESTNET_PUBLIC_API_BASE_URL,
  TRANSFER_COMPUTE_UNITS: () => TRANSFER_COMPUTE_UNITS,
  TRANSFER_ID: () => TRANSFER_ID,
  UINT16_LEN: () => UINT16_LEN,
  UINT32_LEN: () => UINT32_LEN,
  UINT64_LEN: () => UINT64_LEN,
  UINT8_LEN: () => UINT8_LEN
});
init_polyfills();

// src/crypto/index.ts
var crypto_exports = {};
__export(crypto_exports, {
  PRIVATE_KEY_LENGTH: () => PRIVATE_KEY_LENGTH,
  PUBLIC_KEY_LENGTH: () => PUBLIC_KEY_LENGTH,
  SIGNATURE_LENGTH: () => SIGNATURE_LENGTH,
  publicKeyFromBytes: () => publicKeyFromBytes,
  publicKeyToBytes: () => publicKeyToBytes,
  secretKeyFromBytes: () => secretKeyFromBytes,
  secretKeyToBytes: () => secretKeyToBytes,
  sign: () => sign2,
  signatureFromBytes: () => signatureFromBytes,
  signatureToBytes: () => signatureToBytes,
  verify: () => verify2
});
init_polyfills();

// src/services/index.ts
var services_exports = {};
__export(services_exports, {
  RpcService: () => RpcService
});
init_polyfills();

// src/utils/index.ts
var utils_exports2 = {};
__export(utils_exports2, {
  Address: () => Address,
  Codec: () => Codec,
  ToID: () => ToID,
  base64ToUint8Array: () => base64ToUint8Array,
  bufferEquals: () => bufferEquals,
  createActionID: () => createActionID,
  formatBalance: () => formatBalance,
  getUnixRMilli: () => getUnixRMilli,
  isBase64: () => isBase64,
  isHex: () => isHex,
  loadHex: () => loadHex,
  parseBalance: () => parseBalance,
  toAssetID: () => toAssetID,
  toHex: () => toHex
});
init_polyfills();

// src/index.ts
var HyperchainSDK = class {
  nodeConfig;
  // Hypervm services
  rpcService;
  // Registry
  actionRegistry = new TypeParser();
  authRegistry = new TypeParser();
  constructor(nodeConfig) {
    const defaultSDKConfig = {
      baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
      blockchainId: HYPERCHAIN_ID
    };
    this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig };
    this.rpcService = new RpcService(this.nodeConfig);
    this.actionRegistry.register(TRANSFER_ID, Transfer.fromBytesCodec, false);
    this.authRegistry.register(BLS_ID, BLS.fromBytesCodec, false);
    this.authRegistry.register(ED25519_ID, ED25519.fromBytesCodec, false);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HyperchainSDK,
  actions,
  auth,
  chain,
  codec,
  common,
  config,
  consts,
  crypto,
  services,
  utils
});
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@avalabs/avalanchejs/dist/es/index.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! micro-eth-signer - MIT License (c) 2021 Paul Miller (paulmillr.com) *)
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/bls12-381.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ed25519/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=index.cjs.js.map