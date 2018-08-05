(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.repture = {})));
}(this, (function (exports) { 'use strict';

    function slice(array, start, end) {
        return array.slice(start, end);
    }

    function concat(array) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return array.concat.apply(array, values);
    }

    function compact(array) {
        return array.filter(function (v) { return v; });
    }

    function fill(array, value, start, end) {
        return array.fill(value, start, end);
    }

    function find(array, callback) {
        return array.find(callback);
    }

    function findIndex(array, callback) {
        return array.findIndex(callback);
    }

    function first(array, range) {
        if (range === void 0) { range = 1; }
        return array.slice(0, range);
    }

    function last(array, range) {
        if (range === void 0) { range = -1; }
        return array.slice(-range);
    }

    function head(array) {
        return (array != null && array.length) ? array[0] : undefined;
    }

    function tail(array) {
        if (array == null)
            return [];
        var r = array.slice(1);
        return r;
    }

    function indexOf(array, value) {
        return array.indexOf(value);
    }

    function lastIndexOf(array, value) {
        return array.lastIndexOf(value);
    }

    function join(array, delimeter) {
        return array.join(delimeter);
    }

    function reverse(array) {
        return array.reverse();
    }

    function without(array, value) {
        return array.filter(function (_) { return _ !== value; });
    }

    var main = {
        slice: slice,
        concat: concat,
        compact: compact,
        fill: fill,
        find: find,
        findIndex: findIndex,
        first: first,
        last: last,
        head: head,
        tail: tail,
        indexOf: indexOf,
        lastIndexOf: lastIndexOf,
        join: join,
        reverse: reverse,
        without: without
    };

    exports.default = main;
    exports.slice = slice;
    exports.concat = concat;
    exports.compact = compact;
    exports.fill = fill;
    exports.find = find;
    exports.findIndex = findIndex;
    exports.first = first;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.indexOf = indexOf;
    exports.lastIndexOf = lastIndexOf;
    exports.join = join;
    exports.reverse = reverse;
    exports.without = without;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=repture.js.map
