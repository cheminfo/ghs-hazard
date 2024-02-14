
import { writeFileSync } from 'fs';

import { loadFile } from './loadFile.mjs';

const filename = 'ghscode_10'

const parsed = loadFile(`${filename}.txt`)
writeFileSync(new URL(`../src/data/${filename}.ts`, import.meta.url), `export const ghs=${JSON.stringify(parsed)}`)
