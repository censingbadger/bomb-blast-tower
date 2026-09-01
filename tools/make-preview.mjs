/* Builds the PREVIEW EDITION into preview/ — the 50¢ version.
   It is the exact same game files with window.__EDITION='preview' baked in,
   which means: the first tower and the first Warlock battle only. No swamp,
   no mossy tower, no Swamp hex — beating Floor 50 shows the cliffhanger and
   points at the FULL game instead of traveling.

   Run it from the repo root after any change to the game files:

       node tools/make-preview.mjs

   The root files stay the FULL EDITION (the $2 version — tower + swamp +,
   one day, the mossy tower). To sell them, zip each folder:
   the whole repo root (minus preview/ and tools/) is the full game,
   preview/ is the preview. */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['index.html', 'tower.html', 'market.html', 'forge.html', 'inventory.html', 'base.html'];
const FLAG = "<script>window.__EDITION='preview';</script>";

mkdirSync(join(root, 'preview'), { recursive: true });
for (const f of FILES) {
  let s = readFileSync(join(root, f), 'utf8');
  // the flag rides in front of the page's first script, so every copy knows
  // which edition it is before a single game line runs
  const i = s.indexOf('<script>');
  if (i < 0) throw new Error(f + ' has no <script> to flag');
  if (!s.includes(FLAG)) s = s.slice(0, i) + FLAG + s.slice(i);
  writeFileSync(join(root, 'preview', f), s);
  console.log('preview/' + f, '(' + s.length + ' chars)');
}
console.log('\nPREVIEW EDITION built. Zip preview/ to sell the 50¢ version.');
