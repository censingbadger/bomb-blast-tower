# Bomb Blast Tower

A game by **Jing & Ash Games** 💣

## Homepage designs

Based on Asher's hand-drawn homepage design, there are **three homepage options** to
choose from. Open `index.html` in any browser to see all three side by side, or open
them directly:

| # | Option | File | Vibe |
|---|--------|------|------|
| 1 | **Paper Sketch** | `homepage-options/option-1-paper-sketch.html` | The drawing itself, brought to life — pencil lines on paper |
| 2 | **Neon Arcade** | `homepage-options/option-2-neon-arcade.html` | Glowing retro arcade cabinet with a pixel font |
| 3 | **Cartoon Blast** | `homepage-options/option-3-cartoon-blast.html` | Sunny, chunky mobile-game style |

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

## What's next

Once a homepage is picked, it becomes the real `index.html`, and the three hexagon
buttons will link to the actual game screens:

- **Tower** — the main game
- **Market** — buy upgrades and gear
- **Inventory & Stats** — what you own and how you're doing
