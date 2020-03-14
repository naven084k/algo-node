"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
    _classCallCheck(this, Node);

    this.value = value;
    this.next = null;
};

module.exports = Node;