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
| `portfolio-chiptune-composer` | `#40103C` | aubergine | a chiptune composer and sound designer |
| `portfolio-disk-archivist` | `#2B3A34` | sage slate | a software-preservation archivist |
| `nav-pirate-radio` | `#3D2C08` | tarnished brass | a community radio station that began as a pirate transmitter |
| `faq-hint-hotline` | `#5A2C24` | bakelite | a volunteer hint line for old adventure games |
| `contact-privacy-helpdesk` | `#073B3A` | deep teal | a volunteer digital-security helpdesk |

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
- **Other:** a tile lifted out of the crate by hand: it steps up over a hard shadow and shivers by 1 px while held, a paper (fits) or hatched fault (does not) block marks where it would land, and a tile that does not fit steps back to its space (touch: a short hold to grab; keyboard: Shift with an arrow).

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

### `portfolio-chiptune-composer`
- **Signature:** a tracker pattern (32 rows by four channels) with a playhead that jumps row to row at the track's tempo; notes under it light in their channel's hue and stepped level meters kick and fall. Optional Web Audio playback, off by default.
- **Pointer:** the edit cursor: the row under the pointer inverts as a band, the cell is framed and the meters kick for that row (touch: tap a row; keyboard: grid arrows, Enter plays the row).
- **Scroll:** the order list: the page's parts are the song's orders, with a marker that steps between them; while nothing plays, scrolling steps the playhead through the rows.
- **Load:** the song loads: the pattern fills in four blocks of eight rows, then the four meters kick in channel order.
- **Button:** pulse width: the top edge is a row of square teeth whose duty widens in steps; inverted phase (teeth on the bottom edge, face inverted) on press.
- **Link:** vibrato: the underline becomes a square wave that flips phase three times.
- **Field:** the current row: label and field invert together as a band, with a row number in the gutter.
- **Dialog:** four channels: four vertical strips cut in left to right.
- **Success:** a four-note fanfare: an eight-row pattern the playhead runs through once.

### `portfolio-disk-archivist`
- **Signature:** a block map with one square per medium that consolidates by outcome the way a disk optimiser works: a read cursor and a write cursor swap blocks until each outcome is one run and the map reads as a stacked bar.
- **Pointer:** the read head: a marker in the margin jumps to the row under the pointer, the block is outlined and a readout names the medium (touch: tap; keyboard: arrows, Home and End).
- **Scroll:** scroll progress is the fraction of swaps done, reversible.
- **Load:** outcomes develop: hollow blocks first, then one outcome class at a time.
- **Button:** a shutter plate slides aside in three steps to uncover a window; pushed into the drive on press, with a drive light.
- **Link:** a head block jumps along sector ticks on the underline and parks at its end.
- **Field:** four checksum pips recomputed from the field's text on every keystroke.
- **Dialog:** magnified: 25%, 50%, then full size, in three hard frames.
- **Success:** parity: a row of eight pips whose last pip toggles twice and settles to even parity.

### `nav-pirate-radio`
- **Signature:** the header is a tuner: a needle moves over an 87 to 108 MHz scale in 0.1 MHz detents and locks onto the station nearest within 0.3 MHz, with a lock lamp, a display plate and a five-bar signal meter.
- **Pointer:** the needle follows the pointer along the dial in detents (touch: drag along the scale; keyboard: arrows tune station to station).
- **Scroll:** scrolling tunes: the needle travels between stations through "between stations" and locks as each section arrives.
- **Load:** band scan: the needle sweeps the band and each station name cuts in as it passes.
- **Button:** a tuning eye: two blocks whose gap closes in three steps; fully closed, with the face inverted, on press.
- **Link:** a broken underline whose gap closes from both sides.
- **Field:** an antenna telescopes out of the field's corner in three thinning segments.
- **Dialog:** the frame switches on a side at a time, clockwise, then the content.
- **Success:** a paper slip drops onto a desk spike in three steps.

### `faq-hint-hotline`
- **Signature:** two-tone dialling: every key press lights the key, the tone bar of its row and the tone bar of its column; two digits open, scroll to and focus a question.
- **Pointer:** hovering or focusing a key previews its row and column bars as outlines and what the key would do (touch: the press itself; keyboard: digit, star and hash keys).
- **Scroll:** the cord: a pixel coil between the handset and the sticky keypad pays out loop by loop; the display follows the question being read.
- **Load:** off the hook: the handset lifts off its cradle in two steps and the line lamp comes on.
- **Button:** hook switches: two plungers on the top edge pop up; pushed below the edge, with the face inverted, on press.
- **Link:** the double ring: the underline goes off, on, off, on and holds.
- **Field:** patched through: a plug on a short cord seats in a jack socket at the field's edge.
- **Dialog:** the line opens: from a 2 px line at mid-height to a third, two thirds and full height.
- **Success:** the keypad dials the call-back number by itself, one key at a time.

### `contact-privacy-helpdesk`
- **Signature:** glyph rain with no idle loop: three bands of falling glyphs, one per contact route, that advance one cell per tick only when something drives them.
- **Pointer:** a lane rains harder: hovering or focusing a route runs its band for as long as the pointer stays; the other lanes are unchanged (touch: one second of burst on tap).
- **Scroll:** scrolling is the rain's clock: every 12 px is one tick, down falls and up rises.
- **Load:** twelve ticks of rain into its resting positions, then the lane panels cut in.
- **Button:** a padlock shackle standing proud of the button drops closed; a keyhole pip turns from 12 to 3 o'clock and the face inverts on press.
- **Link:** sealed: the underline closes into a box around the text, side walls first.
- **Field:** a ciphertext strip under the message field grows one block glyph per typed character, in groups of four; typed characters also drop into the rain as bright inverse tiles and step down to ciphertext as they fall.
- **Dialog:** the deadbolt: the panel steps into place and a bolt is thrown into a strike plate.
- **Success:** the rain stops and its bottom rows lock, row by row, into the message's fingerprint.
- **Other:** radio buttons drawn as stepped pixel diamonds.

## About me series

Five designs in the `about` section, set in Departure Mono with ten hues or more each (three vivid, two muted). Unlike the rest of the collection, these designs revisit the families above on purpose: each one gathers every kind of effect as a variation and lists, in its own `design.md` under `## Lineage`, which family each variation descends from and what changed. A twenty-third design may borrow a family from here only by changing it as much again.

| Design | Ground | Name | Palette | Subject |
|---|---|---|---|---|
| `about-vj-visualist` | `#1B22C4` | ultramarine | vivid | a live-visuals artist (VJ) |
| `about-pinball-technician` | `#A3126E` | hot magenta | vivid | a pinball and arcade technician |
| `about-level-designer` | `#B8300F` | vermilion | vivid | a freelance level designer |
| `about-game-translator` | `#5A1626` | burgundy | muted | a game translator, Japanese into German and English |
| `about-pixel-type-designer` | `#18275C` | navy | muted | a designer of bitmap typefaces |

### `about-vj-visualist`
Pointer engine: a feedback tunnel of stepped rectangles aimed by the pointer, ringed in the layer hues. Headline: three-colour registration offsets that close vertically. Load: a ten-bar test card that collapses into a legend. Pinned scene: a 16-step sequencer with a column playhead and five chapter lanes. Marker: a crossfader in eleven detents. Chart: LED columns with a falling peak cap. Toy: a 4x4 pad bank layering dithered 1-bit patterns. Buttons: blackout (stripes step across, then the face goes dark on press); a fader cap travelling its slot. Link: a tiny level meter. Field: a clip on a timeline as wide as the typed text. Choice: lit channel buttons and a blackout switch. Dialog: a video wall switching on in snake order. Success: an encore chase across the pads and the visitor's initials. Wordmark: NIA painted cell by cell through the ten hues.

### `about-pinball-technician`
Pointer engine: a small playfield simulation leaned by the pointer, flippers on click; lit bumpers put a fact on a score display. Headline: score reels. Load: a lamp test. Pinned scene: one long shot rolling a ball through five drop targets. Marker: bonus lamps and a ball counter. Chart: lamp columns on a backglass with a ghost of the last pick. Toy: a spinner that decelerates and marks its flips. Buttons: a start button whose ring blinks twice and a flipper that kicks on press; a wire rollover pressed flat. Link: a ball rolling a wireform and dropping off its end. Field: a two-digit credit display and a coin-slot lamp. Choice: a rotary selector and a rocker switch. Dialog: drop-target plates rising in turn. Success: the match. Wordmark: MARISOL in lamps lit under the pointer, with an attract sweep.

### `about-level-designer`
Pointer engine: a tile editor painted permanently by the pointer, with auto-tiling. Headline: collision boxes before the text. Load: the level scrolling in column by column. Pinned scene: five rooms walked by a marker along a breadth-first route, doors opening. Marker: a minimap with a camera rectangle. Chart: a stepped difficulty curve with a marker row. Toy: a layers panel, layers leaving and arriving through ordered dithering. Buttons: a hop with dust and a squash on press; a key travelling to a lock. Link: breadcrumbs hopped two dots at a time. Field: a hit box with handles and a size readout. Choice: tile swatches and a lever. Dialog: a room assembled in rings from its centre. Success: level clear, a flag and three collectibles. Wordmark: TOMÁS built from falling blocks, knocked up under the pointer.

### `about-game-translator`
Pointer engine: a dialogue box whose width in characters follows the pointer, reflowing the line and spilling what does not fit. Headline: German glosses over three words. Load: the box frame laid cell by cell, then its rows. Pinned scene: one string through five drafts in a string table. Marker: forty string blocks along the bottom edge. Chart: stacked rows of word blocks per year. Toy: a dialogue choice menu with jumping brackets. Buttons: an advance mark that bobs and a doubled frame on press; a ribbon bookmark that lengthens. Link: a tag carrying the word's translation. Field: a character budget drawn as cells. Choice: language tabs and a stamped checkbox. Dialog: a page laid over the previous one. Success: a name seal stamped in two frames. Wordmark: HARUKA sorted from alphabetical order by swaps.

### `about-pixel-type-designer`
Pointer engine: a glyph editor whose edits are used at once by a live specimen line. Headline: metric guides over each line. Load: proofing, ink row by row, then the specimen word by word. Pinned scene: five drafts of one letter with an onion skin of the earlier drafts. Marker: a size scale with a letter set at the marked size. Chart: a calendar of month blocks filled in steps and bands. Toy: a type tester in three invented bitmap faces with a character map. Buttons: a smeared bold on hover; anchor points cut in at the corners. Link: x-height and descender guides around the link. Field: a block caret and a measure in cells. Choice: a stepper and a two-pixel toggle. Dialog: a specimen sheet growing through three type sizes. Success: a proof slip with crop marks. Wordmark: ANSEL in pixels pushed one cell away from the pointer and walking home.

## State of the collection

Twenty-seven designs: the seven from the Arcade series, the fifteen of series two and the five of the About me series. Before adding a twenty-third, read every block above; its subject, its ground and each of its effects must be new.
