# Effects ledger

The source of truth against recycling. PRINCIPLES.md says every effect in this collection is used exactly once. Before a design is briefed, its effects are checked against this file; after it is accepted, its effects are added here.

How to read it: one block per design, one line per slot. The slots are the same for every design: **signature**, **pointer**, **scroll**, **load**, **button** (hover and press), **link**, **field**, **dialog**, **success**, and **other** for anything else the design owns. An effect is taken as an idea, not as a line of code: "cells that light under the pointer" is taken whether it is drawn in canvas, DOM or SVG, at any cell size.

## Grounds already used

No two designs share a ground, and new grounds are spread around the colour wheel. Never pure black, never a tinted near-black.

| Design | Ground | Name |
|---|---|---|
| `cta-indie-game` | `#0A1C26` | harbour navy |
| `hero-racing-arcade` | `#0F2140` | motorway blue |
| `gallery-demoparty` | `#231C6B` | blue-violet |
| `team-fighting-game` | `#2B0F1E` | wine |
| `pricing-net-cafe` | `#221810` | smoked brown |
| `story-speedrun-marathon` | `#27143A` | plum |
| `features-cyberdeck-kit` | `#0E2B1C` | PCB green |

## Subjects already used

Racing-cabinet arcade league, demoparty, fighting-game team, net café, speedrun marathon, cyberdeck kit, indie puzzle game.

## The first seven (from designs-x, the Arcade series)

### `cta-indie-game`
- **Signature:** a lattice of cells that light in a square wake under the pointer; the wordmark drawn in the same cells rises row by row at the end of the page.
- **Pointer:** the cell wake (touch: burst and trail; keyboard: halo of cells around the focused control).
- **Scroll:** bow wave, a full-width row of cells lit at the viewport's leading edge.
- **Load:** headline uncovered behind a wake that crosses it.
- **Button:** fill that grows from the pointer's entry point; press by scale.
- **Link:** underline that sweeps in from the entry side and out toward the exit side.
- **Field:** strip of sparks that steps in under the input.
- **Dialog:** opens out of the button that asked for it.
- **Success:** burst from the confirmation, lines rising in masks.
- **Other:** film grain; checkbox pop.

### `hero-racing-arcade`
- **Signature:** pseudo-3D raster road steered by the pointer.
- **Pointer:** steering the road.
- **Scroll:** scroll as throttle, with checkpoint gantries.
- **Load:** start lights; headline with a speed streak.
- **Button:** checker wipe on hover; "launch" press with speed lines.
- **Link:** tachometer strip.
- **Field:** marching dashed centre line; red/white rumble strip on error.
- **Dialog:** pit board.
- **Success:** waving flag.
- **Other:** chequered checkbox.

### `gallery-demoparty`
- **Signature:** copper bars that follow the pointer, in the border and through the headline letters.
- **Pointer:** the copper bars.
- **Scroll:** sine scroller driven by scroll.
- **Load:** decrunch stripes; tiles built by bit depth.
- **Button:** colour cycling.
- **Link:** sine ripple through the letters.
- **Field / chips:** bit-flip chips.
- **Dialog:** interlace weave.

### `team-fighting-game`
- **Signature:** character-select screen with pixel portraits whose eyes follow the pointer.
- **Pointer:** player-one bracket cursor (beside the native cursor), impact slam with shake.
- **Scroll:** diagonal versus clash, scrubbed.
- **Load:** round call.
- **Button:** lock-on brackets; hit-stop on press.
- **Link:** three-hit underline.
- **Other:** health bars with a damage ghost.

### `pricing-net-cafe`
- **Signature:** a CRT: RGB split that follows the pointer.
- **Pointer:** the RGB split.
- **Scroll:** refresh line and hum bar, scrubbed.
- **Load:** tube power-on, degauss.
- **Button:** glitch slices on hover; static / signal dropout on press.
- **Link:** phosphor afterimage.
- **Field:** scanline sweep.
- **Dialog:** vertical hold.
- **Success:** receipt that prints.
- **Other:** beam re-scan on price change; tracking tear.

### `story-speedrun-marathon`
- **Signature:** scroll plays a side-scrolling platform run with a split timer and a ghost runner.
- **Pointer:** input display; lantern beam aimed at the pointer.
- **Scroll:** the run itself.
- **Load:** tiles build in.
- **Button:** brick that bumps and pops a gem; crack on press.
- **Link:** gem-trail underline.
- **Field / selection:** blinking selector triangle.
- **Dialog:** pause menu over a dithered backdrop.
- **Other:** gem sparkle.

### `features-cyberdeck-kit`
- **Signature:** falling-block assembly scrubbed by scroll.
- **Pointer:** pulses that travel along PCB traces away from the pointer.
- **Scroll:** the assembly.
- **Load:** LED self-test; headline keys "roll" in.
- **Button:** keycap with travel and an LED chase.
- **Link:** DIP switch.
- **Field:** pad tinning.
- **Dialog:** unfolds like a ribbon cable.
- **Other:** jumper as checkbox.

## Generic techniques this collection never uses

Preloaders with a counter, curtains, fade with slide, parallax, horizontal scroll carousel, word-by-word highlight, stacked cards, count-up numbers, SVG stroke drawing, magnetic buttons, dimming siblings, custom cursor or cursor follower, spotlight/lens, automatic marquees, Flip layout transitions, hold to confirm, scrambled text, typewriter, tilt cards, glow that follows the pointer.

## Series two (added in this repository)

Effects are added here batch by batch as designs are accepted, as built. The art direction behind them is in `research/series-two.md`.

### Grounds and subjects added

| Design | Ground | Name | Subject |
|---|---|---|---|
| `portfolio-isometric-artist` | `#0C3F8F` | blueprint cobalt | an isometric pixel illustrator |
| `crud-memory-card` | `#27323E` | gunmetal slate | the house memory card of a retro game bar |
| `nav-game-museum` | `#0F4638` | verdigris | a museum of arcade and home video games |
| `faq-handheld-clinic` | `#2F3210` | olive drab | a mail-in repair clinic for handheld consoles |
| `contact-hackerspace` | `#3B1014` | oxblood | a hackerspace at the end of a harbour pier |
| `portfolio-security-researcher` | `#1B3A10` | moss | an independent security researcher |
| `crud-cartridge-stall` | `#4D270B` | rust | a second-hand game stall at a flea market |
| `testimonials-capsule-club` | `#4A148C` | electric violet | a monthly capsule-toy subscription |
| `process-convoy-night` | `#0B3350` | petrol blue | a flight club's weekly convoy in a space-trading simulator |
| `footer-cartridge-publisher` | `#3B2731` | dusty mauve | a publisher of new cartridges for old consoles |

### `portfolio-isometric-artist`
- **Signature:** commissions as an isometric city on a low-resolution canvas: one tower per year, one floor slab per commission in the hue of its kind, read against an axis.
- **Pointer:** survey: the tower under the pointer steps its floors apart so they can be counted, with a dimension line and total beside it (touch: tap; keyboard: roving buttons on the axis labels).
- **Scroll:** construction: a crane's hook carries each slab down in whole steps and sets it; the scrub position decides how many floors stand.
- **Load:** lot tiles laid in diagonal rows, then the headline lines land like slabs, bottom line first, in two whole steps.
- **Button:** editor zoom: a pixel grid cuts in over the face in two steps (16 px, then 8 px) with a colour swap; nudge: the face jumps one grid cell down and right while pressed.
- **Link:** stair underline: eight segments step up into a 2:1 staircase.
- **Field:** a drafting ruler under the field with a marker that jumps to the width of the typed text.
- **Dialog:** stands up: from a flat isometric tile to the screen plane in four stepped frames.
- **Success:** topping out: a small tower with one floor per answer, windows switching on floor by floor, then a pennant.
- **Other:** regrouping demolishes the towers floor by floor and rebuilds them; picked tiles of an isometric 10x10 floor rise in an anti-diagonal sweep.

### `crud-memory-card`
- **Signature:** a 15-block memory card; each save sits in one to three blocks in its game's hue, with a two-frame identicon generated from the player tag and link pips between adjacent blocks.
- **Pointer:** inspecting a block frames every block of that save and plays the icons' two frames while hover or focus lasts (touch: 1.2 s after a tap; keyboard: grid arrows).
- **Scroll:** a 15-pip block gauge docks to the top edge in two hard frames once the card has scrolled away.
- **Load:** card check: blocks are read from socket to content one at a time under a steady access light.
- **Button:** sticker whose corner peels back in three stepped frames; pressed flat with the face inverted.
- **Link:** a 6x6 glyph that alternates two frames while hovered; the underline cuts from 1 to 2 px.
- **Field:** a write-protect tab that slides shut in two steps as soon as the value is valid for its type.
- **Dialog:** the card turns over: a five-frame horizontal flip (scaleX 1, .5, 0, .5, 1) from card back to form.
- **Success:** writing: blocks fill in eight raster rows each, with "Saving. Do not close this tab."; delete erases them from the bottom, with Undo.

### `nav-game-museum`
- **Signature:** the floor plan is the menu: a visitor marker walks the shortest tile path (breadth-first search) to the door of the room pointed at, leaving footprints, and the room's floor lights in its hue.
- **Pointer:** pointing, focusing or tapping a room sends the marker (touch: first tap walks and shows the note, the Go link navigates).
- **Scroll:** a you-are-here marker steps cell by cell along a minimap strip in the header; the header's second row is cut away after 80 px.
- **Load:** room links arrive as full-height swatches of their hue that collapse to small markers.
- **Button:** admission ticket whose stub tears off along the perforation in two steps; a square hole is punched on press.
- **Link:** a map pin drops onto the start of the link and the underline swaps to a dotted route.
- **Field:** a doorway opens in the field's left wall in two steps; the label plate cuts to above the field; search lights matching rooms.
- **Dialog:** swing gate: hinged on its left edge, four stepped angles.
- **Success:** a date stamp inked onto the ticket in two frames (hollow outline, then solid).

### `faq-handheld-clinic`
- **Signature:** ordered (4x4 Bayer) dithering as the only way anything appears: answers, headline lines, dialog panel and a four-shade diagnostic screen all step through threshold levels.
- **Pointer:** pressing the LCD: a dithered dark pool under the pointer that recovers in three steps (keyboard: a contrast wheel slider that presses a pool at the centre).
- **Scroll:** the diagnostic screen cross-dissolves to the test pattern of the fault group in view and the contrast wheel turns one notch; on phones a swatch by each heading fills through the levels.
- **Load:** the screen powers on through the dither levels, then the headline lines dither in.
- **Button:** membrane key: a frame steps inward in three rings; bottomed out (solid darker face) on press.
- **Link:** underline that steps from a 50% checker to 75% to solid.
- **Field:** contrast up: the field's ground steps one shade lighter through a 50% dither frame; a row of missing pixels marks an error.
- **Dialog:** the panel arrives through dither levels over a flat scrim.
- **Success:** screen test: four shade bars, then a pixel tick.

### `contact-hackerspace`
- **Signature:** a harbour radar that pings instead of sweeping: stepped rings expand from a point and the blips they cross light in their kind's hue, then decay in three steps.
- **Pointer:** the pointer emits pings (at most one every 0.7 s, a click at once); touch taps; keyboard focus on a blip or legend button pings from it; a readout names the nearest place, distance and bearing.
- **Scroll:** the chart cuts between three ranges (2 km, 500 m, 100 m), each its own drawing, as the three parts of the copy pass.
- **Load:** first ping: the chart exists only where the ring has passed.
- **Button:** echo: two rectangles cut in outside the button; they collapse inward and the face inverts on press.
- **Link:** the underline becomes the Morse code of the link's first letter.
- **Field:** a strip of pixel noise under the field that settles to a flat line when the value is valid.
- **Dialog:** clock wipe: a clip-path polygon sweeps clockwise in eight steps.
- **Success:** the visitor's blip joins the chart and the door pings it.

### `portfolio-security-researcher`
- **Signature:** a trace that follows the visitor along grid lines only: one cell per step, right-angle turns, a solid line that keeps the last 48 cells; content blocks are obstacles, so the line hugs the edge of whatever is pointed at.
- **Pointer:** the trace (touch: a drag draws it, a tap routes an L-shaped run; keyboard: the head runs to the focused control and once around it).
- **Scroll:** the embargo lifts: each write-up's lifecycle chip steps through reported, triaged, fixed, disclosed, then redaction bars over its words are cut away one at a time.
- **Load:** the head enters along the row under the headline and boxes the primary button.
- **Button:** packets: the face splits into three segments with opening gaps; on press they jump right one after another.
- **Link:** endpoints: a square node at each end of the underline.
- **Field:** double wall: a second border inside the first; a breached (dashed) outer wall when invalid.
- **Dialog:** reassembled: three horizontal bands step in from alternate sides.
- **Success:** a three-way handshake drawn as three arrows between two endpoints.

### `crud-cartridge-stall`
- **Signature:** a crate as a grid inventory: each record is a tile whose size depends on its kind, packed first-fit; tidying clears the crate and deals the tiles back one at a time.
- **Pointer:** a price tag on a string drops from the tile's corner in two steps (touch: tap; keyboard: grid arrows).
- **Scroll:** tally marks (four strokes and a diagonal) stamped one at a time as the totals rise through the viewport.
- **Load:** the stall's lamps come on: the page starts in two unlit tones and cuts to full colour in two halves.
- **Button:** a starburst sticker stamped on the corner in two frames; a till flag pops up above the button on press.
- **Link:** two jagged chalk lines, the second a moment after the first.
- **Field:** a paper tag: a string is threaded and knotted through its hole on focus; a live reading of the typed value in its type's format.
- **Dialog:** hung on a peg: tilted 4 degrees, then 2, then level.
- **Success:** chalked up: the tile is dealt in with its tag and a new tally mark is stamped; delete strikes a mark, with Undo.

### `testimonials-capsule-club`
- **Signature:** a capsule machine: one full turn of the crank releases a capsule from a staggered pile, which settles in whole steps; the capsule travels down the chute cell by cell, its lid lifts in the tray, and the card cuts to that subscriber's words.
- **Pointer:** the crank is a rotary control with four detents: drag it round its hub in quarter-turn clicks (touch: the same drag, or a tap for four clicks; keyboard: Enter for a turn, arrows for a quarter).
- **Scroll:** in the full list each testimonial sits between a capsule's two halves, which part in steps as the item rises through the viewport.
- **Load:** stocking: the capsules drop into the dome one row at a time, then the crank twitches one detent and back.
- **Button:** a coin drops into a slot at the button's end in three steps; a return flap opens and the face inverts on press.
- **Link:** the seam opens: a two-tone underline parts into two lines.
- **Field:** the lid lifts: the field's top border rises as a separate segment and the label sits in the gap.
- **Dialog:** tumbles in a quarter turn at a time (270, 180, 90 degrees, upright).
- **Success:** the visitor's capsule drops into a tray, bounces twice by whole pixels, and a paper slip with their email sticks out.

### `process-convoy-night`
- **Signature:** the jump: between steps every star stretches into a stepped streak from the vanishing point, the field cuts to that step's own star system, and the streaks collapse.
- **Pointer:** break formation: pointing at a wing's chip moves that wing's three ships ahead and labels them (touch: tap toggles; keyboard: focus).
- **Scroll:** scroll chooses the step; each boundary crossed is one jump, and a fast scroll across several is a single jump to the last.
- **Load:** dropping out of a jump: full streaks collapse to stars.
- **Button:** thrust: an exhaust plume of three blocks builds off the hull's left edge; burn: the hull jumps right and the plume doubles on press.
- **Link:** the underline shoots past the end of the text and thins, like a star stretching.
- **Field:** docking clamps close onto the field's two ends.
- **Dialog:** the airlock cycles: frame and a four-cell pressure bar first, then the content.
- **Success:** a constellation: stars step out of the field to spell the callsign's initials, hold, and drift back.

### `footer-cartridge-publisher`
- **Signature:** the wordmark as dust: thousands of square specks sampled from the display face; a breath blows them along the pointer's direction and they walk home in whole pixels.
- **Pointer:** the breath (touch: a drag blows, a tap puffs; keyboard: a "Blow the dust off" button sends a gust, and focusing a link puffs the word above it).
- **Scroll:** the dust settles: specks fall into place row by row, the name building from its feet upward.
- **Load:** column titles stuck on like labels: a hollow plate for one frame, then filled (on first view of the footer).
- **Button:** a cartridge that lifts on its gold contact fingers; pushed back into its slot on press.
- **Link:** three specks fly off the end of the underline.
- **Field:** a stepped notch cut into the field's corner; the end label takes the chosen line's hue.
- **Dialog:** pulled out of its sleeve: the panel slides out from behind a fixed spine in four steps.
- **Success:** an end label with the visitor's email on a ruled line, and one gust across the wordmark.
