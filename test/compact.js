const { expect } = require('chai');
const { compact } = require('../dist/repture');

describe('compact', () => {

  it('Remove 0', () => {
    expect(compact([ 0 ])).to.deep.equal([]);
  });

  it('Remove false', () => {
    expect(compact([ false ])).to.deep.equal([]);
  });

  it('Remove empty strings', () => {
    expect(compact([ '', `` ])).to.deep.equal([]);
  });

  it('Remove null', () => {
    expect(compact([ null ])).to.deep.equal([]);
  });

  it('Not Remove anything else', () => {
    expect(compact([ 1, 'a', `a`, true, [], {}])).to.deep.equal([ 1, 'a', `a`, true, [], {}]);
  });

});
