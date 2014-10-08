// Generated by CoffeeScript 1.7.1
"use strict";
var ObjectID, expect;

expect = require("expect.js");

ObjectID = require("../src/lib/bson.js");

describe("ObjectID", function() {
  return it("Init", function() {
    var a, b;
    a = new ObjectID();
    console.log(a.toHexString());
    console.log(a.toString());
    console.log(a.id);
    console.log(a.inspect());
    console.log(a.getTimestamp());
    console.log(a.get_inc());
    b = new ObjectID(a.inspect());
    console.log(b.inspect());
    return expect(a.inspect()).to.be(b.inspect());
  });
});
