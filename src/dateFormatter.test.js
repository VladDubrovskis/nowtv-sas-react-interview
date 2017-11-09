import dateFormatter from './dateFormatter';

describe('dateFormatter', () => {
  it('should return timestamp', () => {
    expect(dateFormatter('123')).toEqual('123');
  })
});
