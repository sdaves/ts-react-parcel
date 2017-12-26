import { compose } from "."

describe("compose function", () => {
  it("returns undefined if there is no functions and arguments", () => {
    expect(compose()()).toBeUndefined();
  });

  it("executes received functions in order", () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    compose(fn1, fn2, fn3);

    expect(fn1).toHaveBeenCalled;
    expect(fn2).toHaveBeenCalled;
    expect(fn3).toHaveBeenCalled;
  });

  it("executes received functions with their arguments", () => {
    const args = ["hi", "hello", "ola"];

    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    compose(fn1, fn2, fn3)(...args);

    expect(fn1).toHaveBeenCalledWith(...args);
    expect(fn2).toHaveBeenCalledWith(...args);
    expect(fn3).toHaveBeenCalledWith(...args);
  });
  
  it('passes data down the line', () => {
    var found = []
    const double = x => found.push(x)
    const add5 = x => found.push(x)
    compose(double, add5)(2)
    expect(found).toEqual([2, 2])
  })
});
