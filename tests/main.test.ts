import chai from "chai";
import dirtyChai from "dirty-chai";
import shelljs from "shelljs";
import justEcho from "../src/lib/index";

chai.use(dirtyChai);

describe('justEcho("Bye!")', () => {
  it('should be equal to ["Bye!"]', (done) => {
    const ret = <unknown>justEcho("Bye!");

    if (Array.isArray(ret)) {
      chai.expect(ret[0]).to.be.equal("Bye!");
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

describe('shelljs.exec("npm run --silent cli -- Hi!", { "silent": true }).stdout', () => {
  it('should be equal to "Hi!\\n"', (done) => {
    const ret = shelljs.exec("npm run --silent cli -- Hi!", {
      silent: true,
    }).stdout;

    chai.expect(ret).to.be.equal("Hi!\n");

    return done();
  });
});
