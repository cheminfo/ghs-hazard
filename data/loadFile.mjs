
import { readFileSync } from 'fs';


export function loadFile(filename) {

  const lines = readFileSync(new URL(filename, import.meta.url), 'utf-8').split('\n').filter(line => line.split('\t')[0]);

  const hs = lines.filter(line => line.startsWith('H'))
  const ps = lines.filter(line => line.startsWith('P'))

  return {
    hStatements: parseHs(hs),
    pStatements: parsePs(ps)
  }
}

function parseHs(hs) {
  // eslint-disable-next-line no-unused-vars
  const fields = hs.shift().split('\t');
  const results = [];
  for (const h of hs) {
    const [hCode, hStatement, ghsHazardClass, ghzHazardCategory, unused, ghsPictogram, ghsSignalWord, pCode] = h.trim().split('\t').map(f => f.trim());
    //results.push({ hCode, hStatement, ghsHazardClass, ghzHazardCategory, unused, ghsPictogram, ghsSignalWord, pCodes: pCode ? pCode.split(',') : [] });
    const existing = results.find(r => r.code === hCode);
    if (existing) {
      if (existing.statement !== hStatement) {
        throw new Error(`Duplicate H code with different ${hStatement}`);
      }
    } else {
      results.push({ code: hCode, statement: hStatement });
    }
  }
  return results;
}

function parsePs(ps) {
  const results = [];
  for (const p of ps) {
    const [pCode, pStatement] = p.split('\t');
    results.push({ code: pCode, statement: pStatement });
  }
  return results
}


