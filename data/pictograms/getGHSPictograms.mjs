import { readFileSync } from 'fs';

const ghsPictogramLabel = {
  GHS01: 'Explosive',
  GHS02: 'Flammable',
  GHS03: 'Oxidizing',
  GHS04: 'Compressed Gas',
  GHS05: 'Corrosive',
  GHS06: 'Toxic',
  GHS07: 'Harmful Irritant',
  GHS08: 'Health Hazard',
  GHS09: 'Environmental Hazard',
};

export function getGHSPictograms() {
  const results = []
  for (const key in ghsPictogramLabel) {
    results.push({
      code: key,
      label: ghsPictogramLabel[key],
      svg: readFileSync(new URL(`${key.replace('GHS0', '')}.svg`, import.meta.url), 'utf-8')
    })
  }
  return results
}