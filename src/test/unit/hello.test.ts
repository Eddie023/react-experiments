import 'mocha'
import { expect } from 'chai';

const hello = () => 'Hello World!';

describe('hello()', () => {
  it('should return hello world', () => {
    const result = hello();

    expect(result).to.equal('Hello World!');
  })
})