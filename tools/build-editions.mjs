/* Builds BOTH sellable editions from the root game files:

     preview/  — the 50¢ PREVIEW: first tower + first Warlock battle only.
     full/     — the $2 FULL GAME: tower + swamp + (one day) the mossy tower.

   Each copy is the exact same file with one flag baked in front of its
   first script (window.__EDITION='preview' or ='full'). The root files
   stay the unflagged source of truth — and an unflagged copy served on
   the public web acts as the PREVIEW on its own, so the main site link
   is always safe to share.

   Run it from the repo root after any change to the game files:

       node tools/build-editions.mjs

   On the live site that means:
     …/bomb-blast-tower/          → the preview (safe for everyone)
     …/bomb-blast-tower/full/     → the full game (the link for buyers)
     …/bomb-blast-tower/preview/  → also the preview (good for zipping)

   To sell: zip preview/ for the 50¢ version, zip full/ for the $2 one. */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['index.html', 'tower.html', 'market.html', 'forge.html', 'inventory.html', 'base.html'];

for (const edition of ['preview', 'full']) {
  const FLAG = "<script>window.__EDITION='" + edition + "';</script>";
  mkdirSync(join(root, edition), { recursive: true });
  for (const f of FILES) {
    let s = readFileSync(join(root, f), 'utf8');
    const i = s.indexOf('<script>');
    if (i < 0) throw new Error(f + ' has no <script> to flag');
    if (!s.includes(FLAG)) s = s.slice(0, i) + FLAG + s.slice(i);
    writeFileSync(join(root, edition, f), s);
  }
  console.log(edition + '/ built (' + FILES.length + ' files)');
}
console.log('\nBoth editions built. Zip preview/ (50¢) or full/ ($2) to sell them.');
