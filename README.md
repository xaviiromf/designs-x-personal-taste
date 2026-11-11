# designs-x-personal-taste

A collection of original front-end sections in one style: retro gamer / cyberpunk. Every design shares two typefaces (Handjet for display, Host Grotesk for text), sits on a chosen dark ground, uses flat pixel geometry and stepped motion, and is made for a concrete, fictional subject from that world. Each one is a single self-contained HTML file with design notes, written for AI agents to reference and port.

The collection grew out of the "Arcade series" in [designs-x](https://github.com/xaviiromf/designs-x), whose seven designs are included here unchanged.

- Browse: https://xaviiromf.github.io/designs-x-personal-taste/
- Index for agents: https://xaviiromf.github.io/designs-x-personal-taste/llms.txt
- Everything in one file: https://xaviiromf.github.io/designs-x-personal-taste/llms-full.txt

## Using it with an AI agent

Point the agent at `llms.txt`, or clone this repo and tell the agent to read `SKILL.md`. The agent should pick a design by its `use_when` and `avoid_when`, read its notes, map the target brand onto the `:root` tokens, then translate to the target stack.

## Layout

```
designs/<slug>/index.html   the design, opens directly in a browser
designs/<slug>/design.md    metadata and design notes
designs/<slug>/preview.png  1440x900 capture of the top of the section
PRINCIPLES.md               the taste behind the collection
research/effects-ledger.md  every effect already used in the collection; nothing may be reused
research/series-two.md      the art direction behind the fifteen designs of series two
SKILL.md                    instructions for agents using a local clone
site/                       Astro catalogue, deployed to GitHub Pages
scripts/shot.sh             screenshot a design with system Chromium
scripts/check-flows.mjs     node scripts/check-flows.mjs [slug] [--json|--self-test]: fail on dead links, broken flows, console errors
```

## Contributing a design

Copy `designs/_template/design.md`, read `PRINCIPLES.md`, check `research/effects-ledger.md` so no effect is reused, and build to the quality floor.

## License

MIT
