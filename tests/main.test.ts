import chai from "chai";
import dirtyChai from "dirty-chai";
import justEcho from "../src/lib/index";

chai.use(dirtyChai);

describe("justEcho('Hi!')", () => {
  it("should return ['Hi!']", () => {
    chai.expect(justEcho("Hi!")[0] === "Hi!").to.be.true();
  });
});
