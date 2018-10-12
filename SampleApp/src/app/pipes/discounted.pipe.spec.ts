import { DiscountedPipe } from './discounted.pipe';

describe('DiscountedPipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountedPipe();
    expect(pipe).toBeTruthy();
  });
});
