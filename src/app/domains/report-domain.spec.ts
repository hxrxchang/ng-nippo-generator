import { Settings, DateTime } from 'luxon';

import { makeDatePath } from './report-domain';

describe('call makeDatePath() method', () => {
  it('1 January 2020', () => {
    Settings.now = () => new Date('2020-01-01').valueOf();
    expect(makeDatePath()).toEqual('2020/01/01');
  });

  it('10 October 2020', () => {
    Settings.now = () => new Date('2020-10-10').valueOf();
    expect(makeDatePath()).toEqual('2020/10/10');
  });
});
