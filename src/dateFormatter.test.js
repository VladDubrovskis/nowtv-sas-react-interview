import dateFormatter from './dateFormatter';

describe('dateFormatter', () => {
  it('should return timestamp', () => {
    expect(dateFormatter('2016-09-11T21:18:00Z')).toEqual('2016/09/11 21:18');
    expect(dateFormatter('2016-03-17T16:30:19Z')).toEqual('2016/03/17 16:30');
    expect(dateFormatter('2016-02-26T10:05:17Z')).toEqual('2016/02/26 10:05');
  })
});
