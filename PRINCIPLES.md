# Principles

designs-x-personal-taste is a collection of front-end **sections** (hero, features, pricing, testimonials, process, call to action, footer, portfolio, CRUD, navigation, scroll story, gallery, FAQ, contact, team) in one style: **retro gamer / cyberpunk**. It is built to be read and reused by AI agents. Every design is original, self-contained HTML and CSS, and ships with a note that explains why it works.

The collection grew out of the Arcade series in [designs-x](https://github.com/xaviiromf/designs-x). There, repeating a typeface pair was the exception. Here it is the rule: every design shares the same two typefaces and the same family of geometry and motion, and is told apart by its subject, its ground, its palette and its effects.

This document is the taste behind the collection. Read it before using a design, and before making a new one.

## What a design in this collection is

- **A section, not a page or a component.** It has enough content to carry a point of view, and it composes with other sections.
- **Grounded in a real subject.** Each design is made for a specific, concrete, fictional product or organisation from the retro gamer / cyberpunk world: an arcade, a repair bench, a courier guild, a pirate radio, a tournament. Its palette, layout and effects come from that subject's materials, vernacular and tools. No two designs share a subject.
- **One file that runs on its own.** `index.html` opens in a browser with no build step. CSS lives in one `<style>` block. JavaScript lives in one `<script>` block at the end. There are no image files or other assets: everything is drawn with CSS, inline SVG or canvas. External fonts and the two pinned libraries are the only requests.
- **Tokenised.** Every colour, font family, type size, duration and the spacing scale is a CSS custom property on `:root`, commented with its job and its contrast. Porting a design to another brand starts by changing those variables, not by hunting through rules.
- **Portfolio and CRUD sections** are larger, app-like sections. Portfolio designs carry interactive charts and editable contact/social links. CRUD designs create, read, update and delete typed records (text, integer, decimal, date, boolean, choice) kept only for the browser session.
- **Explained.** `design.md` says what the design is for, why it works, what must not be changed, how every animation is built, and how to adapt it.
- **Original.** No design recreates an existing game, console, character, logo or brand. The genre is the reference, never a specific work.

## The style

### Two typefaces, always the same
- **Handjet** is the display face, and only that: headings and the few large words that act as graphics. It is always set with `font-variation-settings: "ELSH" 2, "ELGR" 1`, so its modules are square tiles.
- **Host Grotesk** is everything else: body, labels, buttons, data, forms. Tabular figures where numbers line up.
- No third family, not even a monospace for small data labels.
- A deliberate type scale with intentional weights, tracking and leading. Body line length under about 75 characters.

### A chosen dark ground
Every design is dark, and its ground is a chosen colour with a name and a reason: a harbour navy, a PCB green, a wine red. Never pure black and never a tinted near-black (`#0B0B0B`, `#111`). No two designs share a ground, and the grounds are spread around the colour wheel.

### A wide palette in which every hue has a job
Each design has five to seven hues, and every hue has one stated meaning in the subject's world: a competition, a module, a side, a pace, a state. A hue appears only where its job is. If two hues could swap places and nothing would be lost, one of them has no job and should go. The jobs are written beside the tokens in `:root` and in `design.md`.

### Flat pixel geometry
Square modules, stepped corners, whole-pixel grids. No soft shadows, no blur as decoration, no rounded card kit, no gradient washes. Structure encodes something true about the content: borders, rules, numbers and labels are there because the subject has them.

### Nothing recycled
Every effect in the collection is used exactly once. That covers the signature, the pointer response, the scroll moment, the load sequence, the button hover and press, text links, form fields, the dialog and the success state. `research/effects-ledger.md` is the inventory of every effect already used, and of the generic techniques this collection never uses. A new design takes none of them and adds its own to the ledger. Two designs that share an effect are one design too many.

### Spend boldness in one place
Each design has one signature: an engine, a simulation, an interaction or a layout move that comes from the subject. Everything around it is quiet and supports it. If a design has three clever ideas, it has two too many.

### Words are design
Copy is specific to the subject and written from the end user's side. Plain verbs, sentence case, no filler, no hype. Buttons say exactly what happens. No lorem ipsum: placeholder copy is real enough to judge the design by.

## Motion

Motion that responds to a person's action is welcome when it shows what changed. Every animation respects `prefers-reduced-motion`.

Every design in this collection is a **detailed** design. It uses GSAP (with ScrollTrigger) and Lenis, at pinned versions listed in `libraries`, and it is choreographed end to end: page-load sequence, scroll-driven moments, and a considered response on every interactive item (buttons, links, menus, cards, form controls, pointer). Choreography still has one signature moment; everything else supports it.

- **Stepped, not eased into mush.** Motion moves in `steps()`, whole pixels and hard cuts, like the hardware the style comes from.
- **Reduced motion** shows final states with native scroll and no loops.
- **Every hover effect has a touch and a keyboard equivalent.** Nothing is hover-only.
- **Never hide the native cursor, and never trap the keyboard.**
- **Animate only transform, opacity, clip-path, filters and canvas pixels.**
- **Stop Lenis while a menu or dialog is open.**
- **Loops sleep.** Canvas and ticker loops run only while something is moving, and stop off screen.
- **Progressive enhancement.** If the CDN fails, everything is visible and every flow still works in plain JavaScript.
- **Nothing flashes.** No more than three flashes per second over a large area, at load or anywhere else.

## Defaults we avoid

These are the current tells of generated design. In this collection they are not used.

1. Near-black background with a single acid-green or vermilion accent. The style invites it; the chosen ground and the palette with jobs are the answer.
2. Neon glow as decoration: blurred outer glows, gradient text, scanlines laid over everything, glitch for its own sake.
3. Monospace for small data labels, terminal prompts as chrome, fake boot logs.
4. The SaaS card kit: identical rounded cards, one radius everywhere, the same soft grey shadow, gradient washes as decoration.
5. Template chrome: tracked-out ALL-CAPS eyebrows above every heading, meta strings joined with middle dots, "WORD — fragment" labels, `→` appended to every link.
6. A big number with a small label plus a gradient accent as the default hero.
7. Accenting a single word of a headline in italic, bold or another colour.
8. Fade-and-slide-up on every section, hover lift on every card, and every generic technique listed at the end of `research/effects-ledger.md`.

## Quality floor

Every design meets this without announcing it:

- Responsive from 360px to 1600px wide, no horizontal scroll.
- Semantic HTML: landmarks, real headings in order, real buttons and links.
- Visible keyboard focus on every interactive element.
- Text contrast at WCAG AA or better.
- `prefers-reduced-motion` respected.
- Images and drawings have text alternatives, or are marked decorative.
- No console errors.
- No dead ends. Every link, button and form leads somewhere that works, in the same file: an anchor to an element that exists, or a visible in-page result (a confirmation, a panel, a dialog) with a way back. Forms never submit to a server; they handle `submit` in JavaScript and show the outcome. No `href="#"` placeholders and no relative paths to pages that do not exist. External destinations (mailto:, tel:, wa.me, social profiles) are allowed and open with `target="_blank" rel="noopener"`.

## How an AI should use a design

1. Pick by `section`, `use_when` and `avoid_when` in `design.md`, not by the screenshot alone.
2. Read **Why it works** and **Do not touch** before changing anything.
3. Map the target project's brand onto the `:root` tokens first, keeping each hue's job. Follow **Adapting**.
4. Replace the copy with the target project's real content. Keep its length and tone roughly the same, or revisit the layout.
5. Translate to the target stack (React, Vue, Svelte, Tailwind, etc.) only after the tokens and copy are right. Keep the structure and the one bold idea intact.
6. Never mix two designs' signatures in one section, and never lift a single effect out of a design to decorate another.
