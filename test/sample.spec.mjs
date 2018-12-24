process.env.NODE_ENV = 'test';

describe('Sample Test', () => {
  it('should pass', (done) => {
    const sum = 1 + 2;
    expect(sum).toEqual(3);
    expect(sum).not.toEqual(4);
    done();
  });

});
