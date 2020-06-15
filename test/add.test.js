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
