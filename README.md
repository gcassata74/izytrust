# IzyTrust

IzyTrust is the product landing page for the Izylife Solutions trust and
governance gateway for AI agents and MCP tools.

The static site is served from `docs/` and deployed to GitHub Pages by
`.github/workflows/pages.yml`.

The interactive prototype at `docs/demo/` simulates agent identity, an MCP tool request, policy evaluation, optional human approval, tool execution and audit evidence. It never calls a real enterprise system.

## Local preview

```bash
python3 -m http.server 8080 --directory docs
```

Then open `http://localhost:8080`.

## Public URLs

- Landing page: <https://gcassata74.github.io/izytrust/>
- Interactive demo: <https://gcassata74.github.io/izytrust/demo/>
- Company: <https://izylifesolutions.com>

Copyright © 2026 Izylife Solutions s.r.l. All rights reserved.
