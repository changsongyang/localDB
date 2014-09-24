// Generated by CoffeeScript 1.7.1
'use strict';
var Collection, LocalDB, Where, db, expect;

expect = require('expect.js');

LocalDB = require('../src/localdb.js');

Collection = require('../src/lib/collection.js');

Where = require('../src/lib/where.js');

db = new LocalDB("foo");

describe('Where', function() {
  it('Where Comparison gt', function() {
    var obj, result, where;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gt": 1
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": [
        {
          "$gt": 1
        }, {
          "$lt": 3
        }
      ]
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 2,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gt": 1
      }
    };
    result = Where(obj, where);
    expect(result).to.be.ok();
    obj = {
      "a": 0,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gt": 1
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Comparison gte', function() {
    var obj, where;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gte": 1
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 2,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gte": 1
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 0,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$gte": 1
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Comparisongte lt', function() {
    var obj, where;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lt": 10
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lt": 10
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lt": 10
      }
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  it('Where Comparisonlte lte', function() {
    var obj, where;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lte": 10
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lte": 10
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$lte": 10
      }
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  it('Where Comparison ne', function() {
    var obj, where;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$ne": 10
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$ne": 10
      }
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  it('Where Comparison in', function() {
    var obj, where;
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$in": [10, 9, 8]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$in": [10, 11, 12]
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Comparison nin', function() {
    var obj, where;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$nin": [1, 2, 3]
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$nin": [4, 2, 3]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": "1",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$nin": ["1", "2", "3"]
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Logical or', function() {
    var obj, where;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$or": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$or": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$or": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$or": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Logical and', function() {
    var obj, where;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$and": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$and": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$and": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$and": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Logical not', function() {
    var obj, where;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$not": {
          "$lt": 0
        }
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$not": {
          "$gt": 0
        }
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Logical nor', function() {
    var obj, where;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$nor": [
        {
          "a": 5
        }, {
          "b": 4
        }
      ]
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "$nor": [
        {
          "a": 1
        }, {
          "b": 5
        }
      ]
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  it('Where Element exists', function() {
    var obj, where;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$exists": true
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "z": {
        "$exists": true
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "z": {
        "$exists": false
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$exists": false
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Element type', function() {
    var obj, where;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$type": "number"
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$type": "string"
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": "5",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$type": "string"
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$type": "eric"
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "d.e": {
        "$type": -1
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Evaluation mod', function() {
    var obj, where;
    obj = {
      "a": 0,
      "b": 5,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$mod": [2, 0]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 4,
      "b": 4,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$mod": [2, 0]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 5,
      "c": 0,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$mod": [3, 2]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": 5,
      "b": 5,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$mod": [2, 0]
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Evaluation regex', function() {
    var obj, where;
    obj = {
      "a": ['1', '2', '3', '4'],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": /\d/
    };
    expect(Where(obj, where)).to.be.ok();
    obj = [
      {
        "a": '1'
      }, {
        "a": '1'
      }
    ];
    where = {
      "a": /\d/
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": '1',
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": /\d/
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": "hello",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$regex": 'ello'
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": "hello",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$regex": 'what'
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": /\d/
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": '1',
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": /\b/
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  it('Where Array all', function() {
    var obj, where;
    obj = {
      "a": [1, 2, 3],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$all": [1, 2]
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": [1, 2],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$all": [3, 2]
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$all": [3, 2]
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
  it('Where Array eleMatch', function() {
    var obj, where;
    obj = [
      {
        "a": [
          {
            "book": "abc",
            "price": 8
          }, {
            "book": "xyz",
            "price": 7
          }
        ],
        "b": 4,
        "c": 5,
        "d": {
          "e": "4",
          "f": 5
        }
      }, {
        "a": 1
      }
    ];
    where = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": [
        {
          "book": "abc",
          "price": 8
        }, {
          "book": "xyz",
          "price": 7
        }
      ],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": [
        {
          "book": "abc",
          "price": 8
        }, {
          "book": "xyz",
          "price": 9
        }
      ],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    return expect(Where(obj, where)).to.be.ok();
  });
  return it('Where Array size', function() {
    var obj, where;
    obj = [
      {
        "a": [1, 2, 3],
        "b": 4,
        "c": 5,
        "d": {
          "e": "4",
          "f": 5
        }
      }, {
        "a": 1
      }
    ];
    where = {
      "a": {
        "$size": 3
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": [1, 2, 3],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$size": 3
      }
    };
    expect(Where(obj, where)).to.be.ok();
    obj = {
      "a": [1, 2, 3, 4],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$size": 3
      }
    };
    expect(Where(obj, where)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    where = {
      "a": {
        "$size": 3
      }
    };
    return expect(Where(obj, where)).not.to.be.ok();
  });
});
