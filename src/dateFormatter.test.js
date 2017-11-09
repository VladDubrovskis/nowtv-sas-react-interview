import dateFormatter from './dateFormatter';

describe('dateFormatter', () => {
  it('should return timestamp', () => {
    expect(dateFormatter('2016-09-11T21:18:00Z')).toEqual('9/11/2016, 10:18:00 PM');
    expect(dateFormatter('2016-03-17T16:30:19Z')).toEqual('3/17/2016, 4:30:19 PM');
    expect(dateFormatter('2016-02-26T10:05:17Z')).toEqual('2/26/2016, 10:05:17 AM');
  })
});
