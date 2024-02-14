import { ghs } from './data/ghscode_10';

export interface GHS {
  ghsCode: string;
  ghsPictogramText: string;
  ghsPictogramSVG: string;
}

export interface HStatement {
  hCode: string;
  hStatement: string;
}

export interface PStatement {
  pCode: string;
  pStatement: string;
}

export function getHStatements(): HStatement[] {
  return ghs.hStatements;
}

export function getHStatementsObject() {
  const result: Record<string, HStatement> = {};
  ghs.hStatements.forEach((h) => {
    if (result[h.hCode]) {
      throw new Error(`This should never happen, duplice hCode: ${h.hCode}`);
    }
    result[h.hCode] = h;
  });
  return result;
}

export function getPStatements(): PStatement[] {
  return ghs.pStatements;
}

export function getPStatementsObject() {
  const result: Record<string, PStatement> = {};
  ghs.pStatements.forEach((p) => {
    if (result[p.pCode]) {
      throw new Error(`This should never happen, duplice pCode: ${p.pCode}`);
    }
    result[p.pCode] = p;
  });
  return result;
}

export function getGHS(): GHS[] {
  return ghs.ghsPictograms;
}

export function getGHSObject() {
  const result: Record<string, GHS> = {};
  ghs.ghsPictograms.forEach((g) => {
    if (result[g.ghsCode]) {
      throw new Error(`This should never happen, duplice code: ${g.ghsCode}`);
    }
    result[g.ghsCode] = g;
  });
  return result;
}
