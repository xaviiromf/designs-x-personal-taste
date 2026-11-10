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

Effects are added here batch by batch as designs are accepted.
