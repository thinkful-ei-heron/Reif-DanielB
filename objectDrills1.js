'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'hello';
    },
  };
}

const test = createMyObject();

function updateObject(obj) {
  obj.foo = 'foo',
    obj.bar = 'bar',
    obj.bizz = 'bizz',
    obj.bang = 'bang';
}

updateObject(test);
console.log(test);
