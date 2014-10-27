// Generated by CoffeeScript 1.7.1
define(function(require, exports, module) {
  'use strict';
  var Storage, Support, UserData;
  Support = require('lib/support');
  UserData = require('lib/userdata');
  Storage = (function() {
    function Storage(session) {
      this.session = session;
      if (this.session) {
        if (!Support.sessionstorage()) {
          throw new Error("sessionStorage is not supported!");
        }
      } else if (!Support.localstorage()) {
        if (!Support.userdata()) {
          throw new Error("no browser storage engine is supported in your browser!");
        }
        this.userdata = new UserData();
      }
    }

    Storage.prototype.key = function(index) {
      return (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).key(index);
    };

    Storage.prototype.size = function() {
      if (this.session) {
        return sessionStorage.length;
      } else if (Support.localstorage()) {
        return localStorage.length;
      } else {
        return this.userdata.size();
      }
    };

    Storage.prototype.setItem = function(key, val) {
      return (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).setItem(key, val);
    };

    Storage.prototype.getItem = function(key) {
      return (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).getItem(key);
    };

    Storage.prototype.removeItem = function(key) {
      return (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).removeItem(key);
    };

    Storage.prototype.usage = function() {

      /*
       *  check it out: http://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
       */
      var allStrings, key, val;
      allStrings = "";
      if (this.tyep === 1) {
        for (key in sessionStorage) {
          val = sessionStorage[key];
          allStrings += val;
        }
      } else if (Support.localstorage()) {
        for (key in localStorage) {
          val = localStorage[key];
          allStrings += val;
        }
      } else {
        console.log("todo");
      }
      return allStrings.length / 512;
    };

    return Storage;

  })();
  return module.exports = Storage;
});
