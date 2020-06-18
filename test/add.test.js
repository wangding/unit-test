const add    = require('../add'),
      expect = require('chai').expect;

describe('加法函数的单元测试', function(){   // 测试套件
  it('0 + 0 = 0', function(){                // 测试用例
    expect(add(0, 0)).to.be.equal(0);
  });

  it('1 + 3 = 4', function() {
    expect(add(1, 3)).to.be.equal(4);
  });

  it('a + b = NaN', function() {
    expect(add('a', 'b')).to.be.NaN;
  });
});

describe('加法函数的动态测试', function() {
  var tests_normal = [
    {args: [0,          0], exp: 0},
    {args: [2,          3], exp: 5},
    {args: [-4,        -2], exp: -6},
    {args: [-4,        10], exp: 6},
    {args: [1,       1023], exp: 1024},
    {args: [2.6,      3.8], exp: 6.4},
    {args: ['2e2', '3e-2'], exp: 200.03}
  ];

  tests_normal.forEach(function(test) {
    it(`${test.args[0]} + ${test.args[1]} = ${test.exp}`, function() {
      expect(add(test.args[0], test.args[1])).to.be.equal(test.exp);
    });
  });

  var tests_ugily = [
    {args: ['a',      'b'], exp: NaN},
    {args: [2,        'a'], exp: NaN},
    {args: [',',        3], exp: NaN}
  ];

  tests_ugily.forEach(function(test) {
    it(`${test.args[0]} + ${test.args[1]} = ${test.exp}`, function() {
      expect(add(test.args[0], test.args[1])).to.be.NaN;
    });
  });
});
