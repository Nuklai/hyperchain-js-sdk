var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "node_modules/big-integer/BigInteger.js"(exports, module) {
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
      function divModAny(self, v2) {
        var value, n = parseValue(v2);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
        }
        var a = self.value, b2 = n.value;
        var quotient;
        if (b2 === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
          if (n.isSmall) {
            return [new SmallInteger(truncate(a / b2)), new SmallInteger(a % b2)];
          }
          return [Integer[0], self];
        }
        if (n.isSmall) {
          if (b2 === 1) return [self, Integer[0]];
          if (b2 == -1) return [self.negate(), Integer[0]];
          var abs = Math.abs(b2);
          if (abs < BASE) {
            value = divModSmall(a, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self.sign) remainder = -remainder;
            if (typeof quotient === "number") {
              if (self.sign !== n.sign) quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
          }
          b2 = smallToArray(abs);
        }
        var comparison = compareAbs(a, b2);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];
        if (a.length + b2.length <= 200)
          value = divMod1(a, b2);
        else value = divMod2(a, b2);
        quotient = value[0];
        var qSign = self.sign !== n.sign, mod3 = value[1], mSign = self.sign;
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
    if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
      module.exports = bigInt2;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return bigInt2;
      });
    }
  }
});

// src/constants/endpoints.ts
var MAINNET_PUBLIC_API_BASE_URL = "http://api-mainnet.nuklaivm-dev.net:9650";
var TESTNET_PUBLIC_API_BASE_URL = "http://api-devnet.nuklaivm-dev.net:9650";
var HYPERCHAIN_ID = "zepWp9PbeU9HLHebQ8gXkvxBYH5Bz4v8SoWXE6kyjjwNaMJfC";
var HYPERCHAIN_ENDPOINT = `/ext/bc/${HYPERCHAIN_ID}`;
var COREAPI_PATH = "coreapi";
var COREAPI_METHOD_PREFIX = "hypersdk";

// node_modules/@avalabs/avalanchejs/node_modules/@scure/base/lib/esm/index.js
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

// node_modules/@noble/hashes/esm/cryptoNode.js
import * as nc from "node:crypto";
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

// node_modules/@noble/hashes/esm/_assert.js
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
import u from "util";
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
  console.log(u.inspect(t, { depth: null, colors: true }));
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

// src/chain/fees.ts
var fees_exports = {};
__export(fees_exports, {
  estimateUnits: () => estimateUnits,
  mulSum: () => mulSum
});
var import_big_integer = __toESM(require_BigInteger(), 1);

// src/constants/hypervm.ts
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
import { createHash } from "crypto";
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

// src/transactions/baseTx.ts
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
    const packedTimestampBytes = codec.toBytes();
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

// src/common/rpc.ts
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

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_assert.js
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

// node_modules/@noble/curves/node_modules/@noble/hashes/esm/cryptoNode.js
import * as nc3 from "node:crypto";
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

// node_modules/@noble/curves/esm/abstract/curve.js
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
      for (let window = 0; window < windows; window++) {
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
      for (let window = 0; window < windows; window++) {
        const offset = window * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window % 2 !== 0;
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
    return Buffer.from(ki.publicKeyToBytes(publicKey)).toString("hex");
  }
  static hexToPublicKey(hex2) {
    return ki.publicKeyFromBytes(Buffer.from(hex2, "hex"));
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
    return Buffer.from(ki.secretKeyToBytes(privateKey)).toString("hex");
  }
  static hexToPrivateKey(hex2) {
    return ki.secretKeyFromBytes(Buffer.from(hex2, "hex"));
  }
};

// node_modules/@noble/ed25519/index.js
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
import { createHash as createHash2 } from "crypto";
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
function isHex(str2) {
  const hexRegex = /^[0-9a-fA-F]+$/;
  return hexRegex.test(str2);
}
function toHex(b2) {
  return Buffer.from(b2).toString("hex");
}
function loadHex(s, expectedSize) {
  const bytes3 = Buffer.from(s, "hex");
  if (expectedSize !== -1 && bytes3.length !== expectedSize) {
    throw new Error("Invalid size");
  }
  return new Uint8Array(bytes3);
}

// src/auth/ed25519.ts
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
    return Buffer.from(publicKey).toString("hex");
  }
  static hexToPublicKey(hex2) {
    return Buffer.from(hex2, "hex");
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
    return Buffer.from(privateKey).toString("hex");
  }
  static hexToPrivateKey(hex2) {
    let privateKeyBytes = Buffer.from(hex2, "hex");
    if (privateKeyBytes.length === PRIVATE_KEY_LENGTH + PUBLIC_KEY_LENGTH) {
      privateKeyBytes = privateKeyBytes.subarray(0, PRIVATE_KEY_LENGTH);
      return loadHex(toHex(privateKeyBytes), PRIVATE_KEY_LENGTH);
    } else if (privateKeyBytes.length !== PRIVATE_KEY_LENGTH) {
      throw new Error("Invalid combined key size");
    }
    return loadHex(hex2, PRIVATE_KEY_LENGTH);
  }
};

// src/utils/base64.ts
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
function decodePrivateKey(privateKey) {
  if (isHex(privateKey)) {
    return Buffer.from(privateKey, "hex");
  } else if (isBase64(privateKey)) {
    return base64ToUint8Array(privateKey);
  } else {
    throw new Error("Unsupported private key format");
  }
}
function getAuthFactory(authType, privateKeyString) {
  const privateKeyBytes = decodePrivateKey(privateKeyString);
  const privateKeyHex = Buffer.from(privateKeyBytes).toString("hex");
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

// src/codec/index.ts
var codec_exports = {};
__export(codec_exports, {
  Codec: () => Codec,
  TypeParser: () => TypeParser
});

// src/codec/typeParser.ts
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

// src/common/index.ts
var common_exports = {};
__export(common_exports, {
  Api: () => Api,
  JrpcProvider: () => JrpcProvider
});

// src/config.ts
var config_exports = {};

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

// src/services/index.ts
var services_exports = {};
__export(services_exports, {
  RpcService: () => RpcService
});

// src/transactions/index.ts
var transactions_exports = {};
__export(transactions_exports, {
  BaseTx: () => BaseTx,
  BaseTxSize: () => BaseTxSize,
  Transaction: () => Transaction,
  fees: () => fees_exports
});

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

// src/index.ts
var HyperchainSDK = class {
  nodeConfig;
  // Hypervm services
  rpcService;
  constructor(nodeConfig) {
    const defaultSDKConfig = {
      baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
      blockchainId: HYPERCHAIN_ID
    };
    this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig };
    this.rpcService = new RpcService(this.nodeConfig);
  }
};
export {
  HyperchainSDK,
  actions_exports as actions,
  auth_exports as auth,
  codec_exports as codec,
  common_exports as common,
  config_exports as config,
  constants_exports as consts,
  crypto_exports as crypto,
  services_exports as services,
  transactions_exports as transactions,
  utils_exports2 as utils
};
/*! Bundled license information:

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
//# sourceMappingURL=index.js.map
