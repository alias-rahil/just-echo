import chai from "chai";
import dirtyChai from "dirty-chai";
import shelljs from "shelljs";
import justEcho from "../src/lib/index";

chai.use(dirtyChai);

describe('justEcho("hi")', () => {
  it('should be equal to ["hi"]', (done) => {
    const ret = <unknown>justEcho("hi");

    if (Array.isArray(ret)) {
      chai.expect(ret[0]).to.be.equal("hi");
      chai.expect(ret.length).to.be.equal(1);

      return done();
    }

    return done(
      new chai.AssertionError(
        `Expected Array.isArray(${JSON.stringify(ret)}) to be true`
      )
    );
  });
});

describe('shelljs.exec("npm run --silent cli -- hi", { "silent": true }).stdout', () => {
  it('should be equal to "hi\\n"', (done) => {
    const ret = shelljs.exec("npm run --silent cli -- hi", {
      silent: true,
    }).stdout;

    chai.expect(ret).to.be.equal("hi\n");

    return done();
  });
});
