const chai = require('chai');
const dirtyChai = require('dirty-chai');
const justEcho = require('../dist/index');

chai.use(dirtyChai);

describe("justEcho('Hi!')", () => {
  it("should return ['Hi!']", () => {
    chai.expect(justEcho('Hi!')[0] === 'Hi!').to.be.true();
  });
});
