---
title: Capsule machine testimonials
section: testimonials
subject: Capsule Club, a fictional monthly subscription from a three-person studio in Nagoya that posts one pixel-creature figure, a sticker and a card in a capsule. Nine subscribers say what they did with the figures, what went wrong and who they gave it to.
aesthetic: A toy capsule machine drawn in flat pixels on electric violet. Pixel-disc capsules in three series hues, a brass crank with four detents, paper slips that sit between the halves of a capsule, and a coin that drops into every button.
mode: dark
fonts:
  - Handjet (Google Fonts, variable). Display only: the h2, set at 700 with ELSH 2 and ELGR 1 so the modules are square tiles.
  - Host Grotesk (Google Fonts, variable wght 300-800). Everything else: quotes at 500, names and buttons at 700, tabular-nums on months, sizes and dates.
js: Draws the machine on an 84 x 106 canvas and runs its pile, crank and chute logic, fills the card, parses the nine testimonials from the list in the page, validates the subscription form, handles the dialog and, with the libraries, plays the load, the scrubbed capsule halves and the dialog and success frames.
libraries: [GSAP 3.15 (ScrollTrigger), Lenis 1.3.26]
tags: [testimonials, capsule, vending, subscription, canvas, crank, pointer, dialog, form, dark, violet, gsap, lenis]
use_when:
  - A subscription, collectible or drop-based product whose reviews are best met one at a time, as something the visitor draws out.
  - You want testimonials that are all present in plain text but still give the visitor something to operate.
  - The brand is playful and small, with a physical object (a box, a tin, a machine) that can stand for the content.
avoid_when:
  - Testimonials that must be compared side by side, or carry star ratings and numbers to scan. The machine shows one at a time.
  - Serious or regulated sectors, where a toy machine reads as a joke.
  - A page that already has a large canvas or a pointer effect near the first screen.
---

## Why it works

**The one bold idea: a testimonial is what comes out of a capsule.** The machine on the right is the whole signature. A dome holds 24 pixel-disc capsules in the three series hues. Turn the crank one full turn and one capsule leaves: the pile settles in whole steps, the capsule goes down the chute cell by cell to the tray, its top half lifts off in three steps, and the card on the left cuts to that subscriber's words. The capsule that falls is the colour of the series the subscriber started with, because the order in which the 24 capsules will leave is simulated before the dome is filled, and each capsule is given the series of the card it will bring. Nothing about the machine is decoration: its colours, its count ("23 capsules in the dome") and its tray all say what the card is.

- **Nothing is hidden behind the machine.** The card shows one testimonial; "Read all nine" is a plain ordered list of all of them, each on a milk paper slip between the two halves of its capsule. The card and the machine read their data from that list, so there is one copy of the words. The queue cycles through all nine in shuffled order before any repeats, and never repeats across the seam. The dome refills with a hard cut when it is empty.
- **The crank is a real rotary control.** It has four detents (up, right, down, left). Dragging round the hub turns it in quarter clicks, four clicks make a turn. A tap or click without a drag plays a full turn as four clicks 120 ms apart. The crank is a `<button>` laid over the drawn hub: Enter and Space turn once, arrow keys click a quarter at a time, and "Turn the crank for another" does the same as Enter. A half-turned crank clicks back to rest after 2.5 s.
- **Colour jobs.** `--violet` is the ground (and the deep, mid, lite and hi tones are the machine: body, shadow side, chute, glass, edges). `--milk` is text and the paper slips. `--haze` is secondary text and rules. `--pond`, `--attic` and `--rooftop`, each with a deeper lower-half tone, appear only on capsules, chips and marks of that series. `--coin` is for what the visitor operates: the crank, the coin, the primary button, the checked box and every focus ring. `--fault` is errors only. Series are always named in words too ("Started with Pond"), so colour is never the only carrier.
- **Structure.** Machine and card sit side by side on desktop (the machine is sized in whole pixel multiples to the window height, so it is above the fold at 1440x900, 1366x650 and 1280x600) and the machine drops under the headline on phones. Then the list, then the form. The first heading is the `h2`; the list and the form have `h3`s; the dialog's title is an `h2`.
- **Type.** Handjet at square modules for the headline only, Host Grotesk for everything else. Quotes are 20px at weight 500 on a milk slip with deep-violet ink (14.8:1).
- **Copy.** Real numbers and places: 8 + 8 + 6 figures over 22 months, 11 euro a month, 38 countries, shipping on the first working day. The nine testimonials include what went wrong (a lost foot, a cracked seam, an empty capsule, a wrong address) and how it was fixed.
- **Flows.** The form validates on submit with specific messages, `aria-invalid`, a reserved two-line error space per field and focus on the first bad control. Success echoes the series and the email, computes the first working day of next month in script, and "Change this" restores the form. The dialog is a native `<dialog>` closed by Close, Escape and a backdrop click that began on the backdrop, returns focus to its opener and scrolls inside itself on short screens.
- **Different from the nearest designs.** The cyberdeck kit also assembles a drawn object, but there the scroll builds it from blocks; here the visitor operates it and it dispenses content. The racing and net-café designs also run canvases, but this one has no loop at all: the canvas is redrawn only when a step happens.

Deviations from the brief, and why:

- **The chute is four cells, not five,** after the drawing was changed to a 10-pixel capsule pitch so neighbouring capsules never merge. The idea is unchanged.
- **The load starts with an empty dome** (the shell is drawn at once) rather than hiding the machine under `html.js:not(.go)`: the dome is a canvas, so its pre-state is the script's `shown` row count, reset to full on cleanup and in reduced motion. No text is ever hidden.
- **On wide windows shorter than 700px the hint and count under the machine become visually hidden** so nothing is cut by the bottom edge; they remain available to assistive tech.

## Do not touch

- **The drawing is 84 x 106 logical pixels and is scaled by a whole number** (`fit()`), with `image-rendering: pixelated`. Fractional scaling gives uneven pixels. The crank button's percentages (11.9%, 63.21%, 40.48%, 32.08%) match the hub box x10-44, y67-101 of that drawing; change the drawing and change them together.
- **The chute column, bottom row and rest row** (`EXX 63`, `ROW0 51`, `REST 91`, pitch 10) are tied to the dome, channel and tray in `render()`.
- **The order is simulated before the dome is filled** (`drainOrder`, `fillPile`). Changing the settle rules without that simulation breaks the match between a falling capsule and the card it brings.
- **The list is the data.** `TESTI` is read from `.nine > li` (data-series, quote, name, meta). Keep those classes.
- **Pixel corners live on inner spans, not on the `<button>`/`<a>`,** so focus outlines are never clipped. The slip, chips and button faces carry the `clip-path`.
- **The caps never cover text.** Closed, the halves overlap only the slip's padding (8px of the 28px top and bottom padding); the row gap (72px) leaves room for the 18px of travel.
- **Hover and press use `:hover`, `:focus-visible` and `:active` in CSS plus `.is-hot`, `.is-down` and `.is-tap` from script**, so touch and keyboard see the same states and a quick tap is held for at least 160 ms (a link for 200 ms).
- **Hues keep their jobs.** Do not use a series hue for a button or a link, or `--coin` for a series.

## Motion

House rule: everything moves in whole steps. `steps(1, end)` keyframes, hard cuts from script, whole-pixel offsets, no easing on anything larger than a few pixels. The libraries are used for the timeline and for scroll; the machine's logic is plain JavaScript and the same functions run instantly without them. No loop runs at any time: the canvas is redrawn only on each step. Lenis runs on `gsap.ticker` with `autoRaf: false` and `lagSmoothing(0)`, and is stopped while the dialog is open. Everything is built inside `gsap.matchMedia` (motion, reduce).

| Animation | Technique | Trigger | Timing | Reduced motion |
|---|---|---|---|---|
| Load: stocking | Canvas rows revealed bottom row first, hard cuts, then the crank goes to detent 1 and back | After fonts (1.5 s race) and a visible page | 5 rows, 90 ms apart (`--d-pile`); twitch 120 ms (`--d-twitch`) | Dome full, no twitch |
| Crank click | Handle jumps between four drawn positions | Drag (quadrant of the pointer), arrow keys, or the tap sequence | One detent per click, 120 ms apart in a tap (`--d-click`) | Instant |
| A turn: release | Plan of timed calls on a GSAP timeline: exit capsule leaves, pile settles one step per tick, capsule goes down the chute, top half lifts 3, 6, 9 px, card cuts, refill when empty | Fourth click; tap or click on the crank; Enter or Space; "Turn the crank for another" | Settle 70 ms a step (`--d-settle`), chute 4 cells at 70 ms (`--d-chute`), lift 3 steps at 110 ms (`--d-lift`) | All steps run at once, same result |
| Drag partial reset | Timeout back to detent 0 | Pointer released with 1 to 3 clicks | 2.5 s (`--d-idle`) | Same |
| Capsules open as they pass | ScrollTrigger per list item sets `--o` (0 to 3), CSS moves the halves 6 px per step | Item top at 94% to centre at 44% of the viewport, both directions | 4 states: closed, 6 px, 12 px, 18 px | All items open (`--o: 3`) |
| Button hover: the coin drops | CSS keyframes, `steps(1, end)`, coin behind the face; slot turns coin | `:hover`, `:focus-visible`; touch: `.is-hot` for 600 ms on pointerdown | 3 steps over 240 ms (`--d-coin`) | Coin ends hidden, slot lit |
| Button press: the return flap | Flap panel `scaleY(.25)` from its top edge (two states) and the face inverts | `:active`, `.is-down` (pointer, Enter, Space) | Held at least 160 ms (`--d-hold`) | Same (instant) |
| Text link: the seam opens | Two 2px lines from a 4px seam, two keyframe steps | `:hover`, `:focus-visible`; touch `.is-tap` | 2 steps over 120 ms (`--d-seam`); touch held 200 ms (`--d-tap`) | Open state, instant |
| Field: the lid lifts | Lid `translateY(-4px)` in two steps; invalid forces it shut | `:focus-within`; invalid on submit | 120 ms, `steps(2)` (`--d-lid`) | Instant |
| Dialog tumble in | Four hard frames: x -45vw, -30vw, -15vw, 0 with rotation 270, 180, 90, 0 | Click "What is in a capsule" | 70 ms a frame (`--d-tumble`) | Instant |
| Dialog out | Two frames: quarter turn, then out to the left, then `close()` and focus returns | Close, Escape, backdrop press-and-release | 2 frames, 70 ms | Instant |
| Success: your capsule | Capsule offsets -72, -48, -24, 0, then -3, 0, -1, 0 px | Valid submit | 8 frames, 70 ms (`--d-drop`) | Lands at once |

Touch and keyboard: the crank drags by touch (`touch-action: none`) or taps for a full turn; by keyboard it is a button with Enter, Space and arrows. Hover effects have `:focus-visible` and touch equivalents as above.

## Adapting

1. Change the tokens first: the ground and its four machine tones, the three series hues (each with a deeper lower half), then `--coin` and `--fault`. Keep every hue's job.
2. Replace the nine `<li>` in `.nine` (keep `data-series`, `.who`, `.meta`, the quote `p`) and the three series names in `SERIES`, the tile copy and the series classes. The card, queue and machine follow.
3. To change the number of capsules, edit `MASK` (cells per row), keep `COLS`, `ROWS` and the exit column, and adjust the dome in `render()`.
4. To redraw the machine, edit `render()` only; keep the 84 x 106 grid, or update `W`, `H`, the canvas attributes and the crank button's percentages together.
5. Retime with the `--d-*` tokens; the script reads them.
6. In a framework, keep the list as the source of truth, port the script as one effect that returns the `gsap.matchMedia` cleanup, and keep the pure functions (`stepSettle`, `drainOrder`, `shipDate`) separate.

| Token | Role |
|---|---|
| `--violet` | The ground and the field label chips |
| `--violet-deep` | Machine shadow side, chute, tray, ink on paper, seam, scrim, dialog surface |
| `--violet-mid`, `--violet-lite`, `--violet-hi` | Dome glass, machine body, machine edges and the return flap (decorative) |
| `--milk` | Text and the paper slips |
| `--haze`, `--ink-soft` | Secondary text and rules; secondary text on paper (7.7:1) |
| `--pond`, `--pond-deep` | Series Pond: upper and lower capsule halves, chips, marks |
| `--attic`, `--attic-deep` | Series Attic |
| `--rooftop`, `--rooftop-deep` | Series Rooftop |
| `--coin` | Crank, coin, primary button, checked box, focus rings |
| `--fault` | Errors only |
| `--scrim` | Dialog backdrop |
| `--font-display`, `--font-text`, `--modules` | Handjet (ELSH 2, ELGR 1) and Host Grotesk |
| `--t-small` to `--t-h2` | Type scale: 13, 17, 21, 20 (quote), 30, clamp(46px, min(6.4vw, 11.5svh), 100px) |
| `--cell`, `--s1` to `--s8` | The 12px cell (8px on phones) and the spacing scale |
| `--notch`, `--flap`, `--tap`, `--hit`, `--max-w` | Stepped corner 4px, return flap 4px, button height 48px, minimum text target 44px, content width 1296px |
| `--d-*` | Durations: click, pile, twitch, settle, chute, lift, coin, hold, tap, seam, lid, tumble, drop, idle |
