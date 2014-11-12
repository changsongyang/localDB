// Generated by CoffeeScript 1.8.0
define(function(require, exports, module) {
  'use strict';
  var Evemit, Server, Storage, Utils;
  Storage = require('lib/storage');
  Evemit = require('lib/evemit');
  Utils = require('lib/utils');
  Server = (function() {
    function Server(config) {
      this.config = config;
      this.allow = this.config.allow || "*";
      this.deny = this.config.deny || [];
      this.ss = new Storage(true);
      this.ls = new Storage(false);
    }

    Server.prototype.postParent = function(mes, origin) {
      return top.postMessage(JSON.stringify(mes), origin);
    };


    /*
     *  支持正则表达式
     *  支持*.xxx.com/www.*.com/www.xxx.*等格式
     */

    Server.prototype.checkOrigin = function(origin) {
      var flag, rule, _i, _j, _len, _len1, _ref, _ref1;
      origin = Utils.getDomain(origin);
      if (Utils.isString(this.allow)) {
        if (!this.checkRule(origin, this.allow)) {
          return false;
        }
      } else {
        flag = true;
        _ref = this.allow;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rule = _ref[_i];
          if (!(this.checkRule(origin, rule))) {
            continue;
          }
          flag = false;
          break;
        }
        if (flag) {
          return false;
        }
      }
      if (Utils.isString(this.deny)) {
        if (this.checkRule(origin, this.deny)) {
          return false;
        }
      } else {
        _ref1 = this.deny;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          rule = _ref1[_j];
          if (this.checkRule(origin, rule)) {
            return false;
          }
        }
      }
      return true;
    };

    Server.prototype.checkRule = function(url, rule) {
      var seg, segList, _i, _len;
      if (Utils.isRegex(rule)) {
        return rule.test(url);
      }
      if (rule.indexOf('*') !== -1) {
        segList = rule.split("*");
        for (_i = 0, _len = segList.length; _i < _len; _i++) {
          seg = segList[_i];
          if (url.indexOf(seg) === -1) {
            return false;
          }
        }
      } else {
        return url === rule;
      }
      return true;
    };

    Server.prototype.init = function() {
      var self;
      self = this;
      return Evemit.bind(window, 'message', function(e) {
        var origin, result, storage;
        origin = e.origin;
        if (!self.checkOrigin(origin)) {
          return false;
        }
        result = JSON.parse(e.data);
        storage = result.session ? self.ss : self.ls;
        switch (result.eve.split("|")[0]) {
          case "key":
            return storage.key(result.index, function(data, err) {
              result.data = data;
              result.err = err;
              return self.postParent(result, origin);
            });
          case "size":
            return storage.size(function(data, err) {
              result.data = data;
              result.err = err;
              return self.postParent(result, origin);
            });
          case "setItem":
            return storage.setItem(result.key, result.val, function(err) {
              result.err = err;
              return self.postParent(result, origin);
            });
          case "getItem":
            return storage.getItem(result.key, function(data, err) {
              result.data = data;
              result.err = err;
              return self.postParent(result, origin);
            });
          case "removeItem":
            return storage.removeItem(result.key, function(err) {
              result.err = err;
              return self.postParent(result, origin);
            });
          case "usage":
            return storage.usage(function(data, err) {
              result.data = data;
              result.err = err;
              return self.postParent(result, origin);
            });
        }
      });
    };

    return Server;

  })();
  return module.exports = Server;
});
