// Generated by CoffeeScript 1.7.1
define(function(require, exports, module) {
  'use strict';
  var Collection, Engine, LocalDB, Support, Utils, dbPrefix;
  Utils = require('lib/utils');
  Collection = require('lib/collection');
  Engine = require('lib/engine');
  Support = require('lib/support');
  dbPrefix = "ldb_";
  LocalDB = (function() {

    /*
     *  Constructor
     *  var db = new LocalDB('foo')
     *  var db = new LocaoDB('foo', {
            session: true,
            encrypt: true,
            proxy: "http://www.foo.com/getProxy.html"
        })
     *
     *  Engine will decide to choose the best waty to handle the data automatically.
     *  when session is true, the data will be alive while browser stay open. e.g. sessionStorage
     *  when session is false, the data will be alive even after browser is closed. e.g. localStorage
     *  true by default
     *  The data will be stored encrypted if the encrpyt options is true, true by default.
     */
    function LocalDB(dbName, options) {
      if (options == null) {
        options = {};
      }
      if (dbName === void 0) {
        throw new Error("dbName should be specified.");
      }
      this.name = dbPrefix + dbName;
      this.session = options.session != null ? options.session : true;
      this.encrypt = options.encrypt != null ? options.encrypt : true;
      this.proxy = options.proxy != null ? options.proxy : null;
      this.engine = new Engine(this.session, this.encrypt, this.name, this.proxy);
    }

    LocalDB.prototype.options = function() {
      return {
        name: this.name.substr(dbPrefix.length),
        session: this.session,
        encrypt: this.encrypt,
        proxy: this.proxy
      };
    };


    /*
     *  Get Collection
     *  var collection = db.collection('bar')
     */

    LocalDB.prototype.collection = function(collectionName) {
      return new Collection(collectionName, this.engine);
    };


    /*
     *  Delete Collection: db.drop(collectionName)
     *  Delete DB: db.drop()
     */

    return LocalDB;

  })();

  /*
   *  Check Browser Feature Compatibility
   */
  LocalDB.support = Support;

  /*
   *  Get Timestamp
   *  Convert ObjectId to timestamp
   */
  LocalDB.getTimestamp = function(objectId) {
    return Utils.getTimestamp(objectId);
  };

  /*
   *  Get Time
   *  Convert ObjectId to time
   */
  LocalDB.getTime = function(objectId) {
    return Utils.getTime(objectId);
  };
  return module.exports = LocalDB;
});
