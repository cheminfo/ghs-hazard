import {
  getHStatements,
  getHStatementsObject,
  getPStatements,
  getPStatementsObject,
  getGHS,
  getGHSObject,
} from '..';

describe('test ghs-hazard', () => {
  it('getHStatements', () => {
    const hs = getHStatements();
    expect(hs).toHaveLength(137);
  });

  it('getHStatementsObject', () => {
    const hs = getHStatementsObject();
    expect(Object.keys(hs)).toHaveLength(137);
  });

  it('getPStatements', () => {
    const ps = getPStatements();
    expect(ps).toHaveLength(168);
  });

  it('getPStatementsObject', () => {
    const ps = getPStatementsObject();
    expect(Object.keys(ps)).toHaveLength(168);
  });

  it('getGHS', () => {
    const ghs = getGHS();
    expect(ghs).toHaveLength(9);
  });

  it('getGHSObject', () => {
    const ghs = getGHSObject();
    expect(Object.keys(ghs)).toHaveLength(9);
  });
});
