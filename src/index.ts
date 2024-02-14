import { ghs } from './data/ghscode_10';

export function getHStatements() {
  return ghs.hStatements;
}

export function getHStatementsObject() {
  const result = {};
  ghs.hStatements.forEach((h) => {
    if (result[h.hCode]) {
      throw new Error(`This should never happen, duplice hCode: ${h.hCode}`);
    }
    result[h.hCode] = h;
  });
  return result;
}

export function getPStatements() {
  return ghs.pStatements;
}

export function getPStatementsObject() {
  const result = {};
  ghs.pStatements.forEach((p) => {
    if (result[p.pCode]) {
      throw new Error(`This should never happen, duplice pCode: ${p.pCode}`);
    }
    result[p.pCode] = p;
  });
  return result;
}

export function getGHS() {
  return ghs.ghsPictograms;
}

export function getGHSObject() {
  const result = {};
  ghs.ghsPictograms.forEach((g) => {
    if (result[g.ghsCode]) {
      throw new Error(`This should never happen, duplice code: ${g.ghsCode}`);
    }
    result[g.ghsCode] = g;
  });
  return result;
}
