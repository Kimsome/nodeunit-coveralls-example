const should = require('should');
const add = require('../index')

describe('add', () => {
    it('1 + 2', () => {
        add(1, 2).should.be.equal(3);
    });

    it('1 + undefined', () => {
        add(1).should.be.equal(1);
    });

    it('undefined + 2', () => {
        add(undefined, 2).should.be.equal(2);
    });
});