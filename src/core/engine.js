// Generated by CoffeeScript 1.8.0
define(function(require, exports, module) {
  "use strict";
  var Engine, Proxy, Storage, Support;
  Support = require("lib/support");
  Storage = require("core/storage");
  Proxy = require("core/proxy");
  Engine = (function() {
    function Engine(options) {

      /* TODO
       *  增加 @expire 类型判断，目前应该只有"none"和"window"，后续会增加"browser"和Date()类型
       */
      var proxy;
      proxy = options.proxy;
      this.name = options.name;
      if (proxy != null) {
        proxy = proxy.trim();
        if (proxy.indexOf("http") === -1) {
          proxy = "http://" + proxy;
        }
        this.proxy = new Proxy(options);
      } else {
        this.storage = new Storage(options);
      }
      return;
    }

    Engine.prototype.key = function(index, callback) {
      return (this.proxy != null ? this.proxy : this.storage).key(index, callback);
    };

    Engine.prototype.size = function(callback) {
      return (this.proxy != null ? this.proxy : this.storage).size(callback);
    };

    Engine.prototype.setItem = function(key, val, callback) {
      return (this.proxy != null ? this.proxy : this.storage).setItem(key, val, callback);
    };

    Engine.prototype.getItem = function(key, callback) {
      return (this.proxy != null ? this.proxy : this.storage).getItem(key, callback);
    };

    Engine.prototype.removeItem = function(key, callback) {
      return (this.proxy != null ? this.proxy : this.storage).removeItem(key, callback);
    };

    Engine.prototype.usage = function(callback) {
      return (this.proxy != null ? this.proxy : this.storage).usage(callback);
    };

    return Engine;

  })();
  return module.exports = Engine;
});
