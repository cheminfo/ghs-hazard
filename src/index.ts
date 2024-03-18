import { ghs } from './data/ghscode_10';

export interface GHS {
  code: string;
  label: string;
  svg: string;
}

export interface HStatement {
  code: string;
  statement: string;
}

export interface PStatement {
  code: string;
  statement: string;
}

export function getHStatements(): HStatement[] {
  return ghs.hStatements;
}

export function getHStatementsObject() {
  const result: Record<string, HStatement> = {};
  ghs.hStatements.forEach((h) => {
    if (result[h.code]) {
      throw new Error(`This should never happen, duplice hCode: ${h.code}`);
    }
    result[h.code] = h;
  });
  return result;
}

export function getPStatements(): PStatement[] {
  return ghs.pStatements;
}

export function getPStatementsObject() {
  const result: Record<string, PStatement> = {};
  ghs.pStatements.forEach((p) => {
    if (result[p.code]) {
      throw new Error(`This should never happen, duplice code: ${p.code}`);
    }
    result[p.code] = p;
  });
  return result;
}

export function getGHS(): GHS[] {
  return ghs.pictograms;
}

export function getGHSObject() {
  const result: Record<string, GHS> = {};
  ghs.pictograms.forEach((g) => {
    if (result[g.code]) {
      throw new Error(`This should never happen, duplice code: ${g.code}`);
    }
    result[g.code] = g;
  });
  return result;
}
