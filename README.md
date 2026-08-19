# Bomb Blast Tower

A game by **Jing & Ash Games** 💣

## The homepage

**Storm Dive won!** `index.html` is the official homepage: the cinematic intro
plays on its own (parapet in the storm, look over the edge, the ground rushes
up, the 180 whip-around), and its Tower and Market buttons enter the game.

The other three designs live on in `homepage-options/` (side-by-side archive
at `homepage-options/chooser.html`):

| # | Option | File | Vibe |
|---|--------|------|------|
| 1 | **Paper Sketch** | `homepage-options/option-1-paper-sketch.html` | The drawing itself, brought to life — pencil lines on paper |
| 2 | **Neon Arcade** | `homepage-options/option-2-neon-arcade.html` | Glowing retro arcade cabinet with a pixel font |
| 3 | **Cartoon Blast** | `homepage-options/option-3-cartoon-blast.html` | Sunny, chunky mobile-game style, with the grey stone tower |
| 4 | **Storm Dive** | `homepage-options/option-4-storm-dive.html` | 🔊 Stormy night with a cinematic intro — dive down the tower through lightning and thunder |

**About the Storm Dive intro:** it plays automatically when the page opens — you start
at the top of the tower in a thunderstorm, lean out over the edge until you're staring
straight down the wall, drop face-first, race down alongside the stone, whip around —
and land facing the tower as the home screen arrives. The thunder is synthesized live
in the browser (no sound files). Browsers only allow sound after your first tap or
keypress, so the thunder joins in as soon as you touch anything — or hit *replay intro*
in the footer to watch it again with full sound. There's a skip button and a mute
button too.

Every option has the same pieces from the drawing:

- "← Jing & Ash Games → presents..." banner up top
- The **Bomb Blast** logo — the bomb plays the "O", with a lit fuse
- An explosion burst behind the **A** in BLAST
- **TOWER** on a sign hanging from two chains (it swings!)
- Three hexagon menu buttons: **Tower**, **Market**, and **Inventory & Stats**
- 🤫 Secret: try clicking the bomb.

Each page is a single self-contained HTML file (fonts included) — no build step, no
internet needed. Just double-click to open.

## How to view

```
# easiest: double-click index.html
# or serve the folder:
python3 -m http.server
# then visit http://localhost:8000
```

## Game screens

- **The Tower** (`tower.html`) — the game! An isometric action crawler in the
  spirit of Back Stab's dungeon mode: WASD/arrows or a touch joystick to move,
  K/click to swing your sword, SPACE to hop, **B to drop a bomb**. Dark, dank
  floors with torches, red carpets and hanging chains. Bombs blow open cracked
  walls and **boost you onto platforms** (your own bombs never hurt you).
  Zombies, skeletons and spike traps stand between you and the glowing
  staircase; die and the floor resets to the start. Beat the floor: VICTORY —
  +25 gems — but the Warlock who took the tower is FURIOUS, and his ambush
  races straight to your Base (see below). Survive it and the Tower button
  leads to the next floor. **The tower is 50 floors tall** — Floors 1–3 are
  hand-drawn, and Floors 4–50 (*The Dusty Halls*, *The Bone Pit*, *The Skeleton
  Choir*, all the way up to *The Warlock's Roost*) are built from their own
  floor number, so Floor 17 is always the same Floor 17 for everybody. They get
  bigger, more crowded and tougher as you climb — more bad guys, faster
  skeletons, extra monster health past Floor 11, and a bigger victory prize
  every floor (+25 on Floor 1, +172 on Floor 50).

  Every floor is a proper trek (about 66 tiles of walking, over 100 near the
  top): rooms are strung out across the whole floor and you snake through all
  of them, with **the staircase waiting in the very last room**. On the way,
  **gates** block the corridors — a **platform you have to bomb-boost onto**
  (there is no walking around it) and, on most floors, a **cracked wall you
  have to blow open**. The way into the staircase room is always shut behind
  one of them, so you fight your way through the monsters and blast your way
  in. A bomb crate waits in the room before every gate, so you never run dry.
  Each gate is checked while the floor is built: if you could sneak around it,
  that floor is thrown away and built again.

  Enemies drop gems you can spend in the Market. **Six bomb types** from the drawings, swapped with V (or SWAP):
  **Bomb** (boosts upwards) · **Dynamite** (destroys blocks, big blast, no
  boost) · **Landmine** (explodes when touched — monsters trigger it too — and
  boosts you sideways) · **Time Bomb** (you set the timer with T: 1/3/5s, and
  the countdown shows on the bomb) · **Remote Bomb** (press R to push the
  button) · **Stick Bomb** (sticks to walls and even rides monsters; boosts
  you diagonally upwards). Floor 1 teaches the Bomb; Floors 2–3 unlock the
  rest, and every floor above that hands you all six (with a few more of each
  the higher you go). Owning the Market's Box-o-Bombs grants +3 bombs every floor.
  Smashing things also earns **crafting materials** for the Forge: monsters
  drop **metal**, bombed-open walls burst into **stone**, and bomb crates
  hold **wood** (walk over one for +2 bombs and a plank; blow one up and it
  splinters into extra wood). Your metal/stone/wood counts live right in the
  HUD next to your gems.

- **Market** (`market.html`) — based on Asher's market drawing. Two shelves
  (Artifacts and Weapons on hanging signs), a floor row, prices in gems, rarity
  tags from Common to Legendary, and the Forge teaser. Everyone starts
  **broke — 0 💎** — every gem is earned in the Tower. Buying really works:
  gems go down and your purchases are remembered.
  **The shelves refill as you shop:** buy something and the shopkeeper digs
  a different item out of the back room to fill the empty spot, with a green
  NEW! tag — an Everburning Lantern, Iron Boots, a Thunder Rod, a Toy Sword
  that squeaks, Zombie Repellent, a Golden Bomb, the Warlock's Old Hat, and a
  dozen more. There are **28 things** he can put out and only 12 spots, so the
  shop looks different every time you come back (and it remembers what was on
  the shelves). The Inventory and the Forge recognise everything he invents.
  The *restock shop* link **costs 25 💎** (the shopkeeper doesn't work for
  free): it clears the shelves for a whole new mix, puts everything you bought
  back on sale — stars and all — and asks you to click twice so nobody
  restocks by accident.
  Reachable from the Market button on every homepage option. The Forge
  signpost at the end of the floor row now really walks you to the Forge.

- **The Forge** (`forge.html`) — from the Forge drawing: a dark smithy with
  drifting embers and four stations. **Workbench** — *"Repair & craft your own
  items!"*: repairing (20 💎) patches your armor for **+1 ❤ on your next Tower
  run**, and crafting (130 💎 + materials) builds your own gear — pick a base
  (Sword, Shield, Hammer, Charm) and a material (metal, stone or wood) and get
  a rare item like the *Stone Hammer*. **Anvil** — *"Upgrade items!"*: each ★
  (60 💎 + 6 metal, up to ★★★) makes your sword hit harder in the Tower.
  **Combinatron** — *"A machine from a different time, hmmm…"*: feed it two
  items and 300 💎 and it welds them into **one new weapon** with a
  future-machine name, one rarity higher, stars carried over. The new weapon
  really *looks* like both things you fed in: a sword and a scythe come out as
  a scythe curve on one side and a sword blade on the other, mounted on a
  sword handle with a gold guard — a Dagger of Ice + a Box-o-Bombs gives you
  an ice dagger and a bomb on one hilt, a Thunder Rod + an Upgrade Orb gives
  you a lightning bolt and a glowing orb. The Combinatron shows off what it
  built, the weapon lands in your **Weapons** grid ready to equip, and your
  knight holds it on the Inventory screen. **Lava** — *"Burn things you don't
  want."* Gone forever — though sometimes the lava burps up a few gems.
  Everything is shared with the rest of the game through your gems, materials
  and gear.

- **Inventory & Stats** (`inventory.html`) — from the I&S drawing: your
  character sheet. **Weapons**, **Armor** and **Bombs** slot grids (plus the
  mysterious empty Bow slot — nobody has found one yet), your hero in the
  middle as a proud stick figure with callouts for armor, main-hand weapon
  and off-hand bomb — click anything you own to equip it and the **E** tag
  follows. Your off-hand favorite bomb really starts selected in the Tower.
  The **STATS** panel is all real numbers from your save: enemies defeated
  (the Tower counts every one), money, a computed **Power** score with a
  status from *Weak* up to *LEGENDARY*, upgrades, floors beaten, weapon
  upgrades, and your material pockets. Bomb types you haven't unlocked yet
  show as ? slots until you reach their floor.

- **The Base** (`base.html`) — from the BASE drawing: your own fort, a hut
  with a thatched roof inside a ring of rocks, and a home to come back to
  and **build**. Every price is straight off the drawing sheet. **Building**:
  a six-wall ladder from *Picket Fence* (40 💎) up to *Chained Stone Wall*
  (210 💎) — a broken wall replaces for about half (65 💎 fence → 35 to
  replace, just like the drawing says); five gates (20–120 💎); three fort
  roofs; add-ons (Chimney, Lookout Window, Side Tower, Battlements); and
  guards — you start with 1, hire more for 50 💎. **Weapons & traps**: Bomb
  Cannon 100, Wall-mounted Bomb Cannon 100, Spike Trap 120, Moat 130 (upgrade
  it to a **Lava Moat** for 220), Throwing Spears for your guards 100, Bomb
  Slingshot 140, Spikes on Wall 150, and the 600 💎 **Turret** ("how did that
  get here?"). Every time you beat a Tower floor, the **Warlock sends an
  ambush at your base** — a "WAVE N" flag goes up and monsters march on your
  wall and gate, stronger with every floor you've beaten. Your defenses fight
  on their own and **you can tap the field to throw bombs**. Hold them off:
  gems and salvage. If they smash through: **the base falls** — you lose a
  chunk of gems and materials and your wall breaks. There's a practice alarm
  too, so you can test your fort any time without risking anything.
  **Getting there:** the **Base** hex on the homepage, or the green *Base*
  button in the header of the Market, the Forge and Inventory & Stats — so
  your fort is one click away from wherever you are.

## What's next

Once a homepage is picked, it becomes the real `index.html`. Still to build:

- **More tower floors**
