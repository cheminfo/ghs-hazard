
import { writeFileSync } from 'fs';

import { euh } from './euh.mjs'
import { loadFile } from './loadFile.mjs';
import { getGHSPictograms } from './pictograms/getGHSPictograms.mjs'

const filename = 'ghscode_10'

const parsed = loadFile(`${filename}.txt`)

for (const key in euh) {
  parsed.hStatements.push({
    code: key,
    statement: euh[key]
  })
}
parsed.pictograms = getGHSPictograms()

writeFileSync(new URL(`../src/data/${filename}.ts`, import.meta.url), `export const ghs=${JSON.stringify(parsed, undefined, 2)}`)
