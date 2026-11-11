---
name: designs-x-personal-taste
description: Original retro gamer / cyberpunk front-end section designs (Handjet and Host Grotesk, dark grounds, flat pixel geometry, stepped motion), each a self-contained HTML file with design notes. Also five large About me sections (a whole personal page for one person, set in Departure Mono with ten-hue palettes) that gather every kind of motion in the collection. Use when building or restyling a landing page or marketing section for a game, arcade, esports, demoscene or similar subject and you want a distinctive, non-templated starting point to adapt to the project's brand and stack.
---

# Using designs-x-personal-taste

1. Read `PRINCIPLES.md` once. It defines the taste and the defaults to avoid.
2. List candidates: every `designs/*/design.md` has frontmatter with `section`, `subject`, `aesthetic`, `mode`, `use_when` and `avoid_when`. Filter by `section`, then choose by `use_when`/`avoid_when` against the target project.
3. Open the chosen `designs/<slug>/index.html`. All tokens are CSS custom properties on `:root`.
4. Follow the design's `## Adapting` section: map the target brand to the tokens, replace copy with real content, keep **Do not touch** items intact.
5. Translate to the target stack last. Keep the one bold idea described in **Why it works**.

Never copy the sample copy into a real project. Never mix two designs' bold ideas in one section. When adding a design, check `research/effects-ledger.md` first: no effect already listed may be reused.
