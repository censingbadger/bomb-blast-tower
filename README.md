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
  floors with torches, red carpets and hanging chains. Dynamite blows open
  cracked walls and Bombs **boost you onto platforms** (your own bombs never
  hurt you).
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
  in. Each gate is checked while the floor is built: if you could sneak around
  it, that floor is thrown away and built again.

  **Every floor is a little bomb puzzle now.** The game walks each floor
  before you do and counts exactly what it demands — one Bomb per mandatory
  platform boost, one Dynamite per mandatory wall — and your pack is **the
  demand plus one spare each**: a hard floor stacked with platforms hands you
  a big pack, an easy floor keeps you honest with a lean one (some floors
  hand you a single bomb!). A **🎒 PACK CHECK** banner announces the plan as
  you walk in ("2💣 for 1 boost · 2🧨 for 1 wall — spend them wisely!"),
  and the game warns you as you place your **LAST 💣** or **LAST 🧨**. Bomb
  crates are the rescue ration — each holds exactly **+1 Bomb and +1
  Dynamite** (blow one open and it also splinters into extra wood), with one
  waiting in the room before every gate, so a wasted bomb costs you a
  walk-back instead of the floor. Waste everything anyway? Falling in battle
  resets the floor, pack and all — take a breath and plan the bombs better.

  Enemies drop gems you can spend in the Market. **Six bomb types** from the
  drawings — tap **SWAP** (or V) and a **ring of all six bombs** pops up
  around you: just tap the one you want instead of flipping through them.
  The whole game holds its breath while the ring is open (fuses too), so
  picking is never how you get chomped. Bombs you haven't unlocked yet sit
  in the ring with a little lock. And **every bomb has exactly ONE job**,
  so you pick the right tool:
  **Bomb** (the ONLY one that boosts you UP onto platforms) ·
  **Dynamite** (the ONLY one that blows up cracked walls) ·
  **Landmine** (the trap — monsters step on it, and it dashes YOU sideways) ·
  **Time Bomb** (you set the timer with T, and it hits the HARDEST — 6 damage) ·
  **Remote Bomb** (place a whole bunch, then R fires them ALL at once) ·
  **Stick Bomb** (sticks to walls and rides monsters; the only DIAGONAL boost).
  Floor 1 hands you Bombs *and* Dynamite and teaches the swap; Floor 2 adds
  landmines, Floor 3 the rest, and every floor above that carries all six. Owning the Market's Box-o-Bombs grants +3 bombs every floor.
  Smashing things also earns **crafting materials** for the Forge: monsters
  drop **metal**, bombed-open walls burst into **stone**, and bomb crates
  hold **wood** (walk over one for +2 bombs and a plank; blow one up and it
  splinters into extra wood). Your metal/stone/wood counts live right in the
  HUD next to your gems.

  **It has a soundtrack now** — a catchy loop the browser plays live (no music
  files): bass, drums and a hook over Am–F–C–G that jumps an octave every few
  bars so it doesn't get boring. It goes calm when you die and gets faster
  during a base attack. **Every bomb has its own fuse and its own bang** — the
  Bomb fizzes, Dynamite rumbles deep, the Landmine clicks live then CRACKS, the
  Time Bomb *ticks down out loud*, the Remote blips like a radio and waits for
  the button, the Stick Bomb thwips and pops. **Every weapon has its own
  swing** too, picked from whatever you equipped in the Inventory: a dagger
  shinks, a cleaver chops, a hammer whoomphs, a scythe whooshes, a Thunder Rod
  crackles, and a fused weapon gets its own magic ring. The 🔊 button in the
  corner mutes everything and remembers your choice.

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
  drifting embers and five stations. **Workbench** — *"Repair & craft your own
  items!"*: repairing (20 💎) patches your armor for **+1 ❤ on your next Tower
  run**, and crafting opens **the blueprint book** — twelve real builds, from
  a 60 💎 Wooden Shield up to epic two-headed weapons welded onto one handle:
  the **Bomb Blade** (a sword with a bomb on it, obviously), the **Zombie
  Chopper** (cleaver + fang), the **Dragon Spear**, **Frost Fang**, **Double
  Trouble** (two blades, zero patience), the **Star Scythe**, the **Thunder
  Hammer** (every whack is a thunderclap) and the **Key Blade** (opens
  monsters). Each has its own gem + materials price, the Workbench shows off
  what you built, and it lands in your Inventory ready to equip. **Anvil** — *"Upgrade items!"*: each ★
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
  knight holds it on the Inventory screen. **Enchanting Table** — *"Give
  weapons special powers!"*: the glowing spell book **is the drawn
  enchantment sheet**, entry for entry, in the sheet's own format — each
  enchantment's **name**, how many **levels** it has, **what it does**,
  and **which weapons it can be put on**. All fourteen from the sheet:
  *Ending Flourish* (every 4th swing is a downward SMASH with splash
  damage), *Critical Strike* I–V (chance of TRIPLE damage), *Fortune*
  (enemies drop more loot), *Icy Blade* (enemies freeze inside an actual
  ice cube for 5 seconds — and it **cannot pair with Trail Blazer**,
  the book says so), *Shocking Blast* (your bomb blasts stun for 1–3
  seconds), *Laser Cutter* (a lucky swing chops a monster STRAIGHT IN
  HALF), **Killius Maximus** (the 1000 💎 legend: every 5th beaten enemy
  fires a BEAM that destroys everything in its path, cracked walls
  included), *Deadly Point* I–VII (+1 damage a level), *Trail Blazer*
  (your swings leave fire burning on the ground), *Deafening Blast*
  (bombs explode wider), *Bone Crusher* (+2 damage per level to
  skeletons), *Exploding Smash* (hammer and spear strikes can explode),
  *Edge of Doom* I–VI (your weapon reaches further) and *The Bigg Boom*
  (bombs hit harder) — plus the three house extras that don't overlap the
  sheet: *Yeet*, *Vampire Teeth* and *Zoomies*. Each level costs gems
  plus sparkly stone dust, a **fused weapon takes any enchantment**, and
  fusing two enchanted things keeps the best of both. An enchanted weapon
  **shimmers purple and glows faintly** — on the shelf, in the Inventory,
  in your knight's hand, and up the Tower, where every power really works
  (the smashing, the freezing, the beam — all of it). **Lava** — *"Burn things you don't
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
  **When you hold the base**, the victory card offers **Next Floor →** (straight
  back into the Tower, on the floor you just unlocked), **🏠 Home Screen**, and
  **Back to building** if you'd rather spend your winnings on the fort first.
  If the base falls you get **Rebuild** and **🏠 Home Screen**. Either card
  waits a beat before its buttons switch on — so a finger still spam-tapping
  bombs when the wave ends can't accidentally press anything.
  **Getting there:** the **Base** hex on the homepage, or the green *Base*
  button in the header of the Market, the Forge and Inventory & Stats — so
  your fort is one click away from wherever you are.

## What's next

Once a homepage is picked, it becomes the real `index.html`. Still to build:

- **More tower floors**
- **The Build list** (spotted in the corner of the enchantment sheet):
  a Cursed Axe, Heavy Metal Armor, a Goblin Bow (the empty Bow slot
  waits!), an Iron Amulet, a Gong, and a Mushroom
