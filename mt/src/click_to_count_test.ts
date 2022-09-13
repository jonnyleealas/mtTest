import { clickToCountActivity } from './click_to_count';

describe('clickToCountActivity', () => {
  it('Should be a button', () => {
    const clickToCount = clickToCountActivity();
    
    expect(clickToCount.nodeName).toEqual('BUTTON');
  });
});