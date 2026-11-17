# Memory Atlas — HANDOFF LOG

> Read this first. Then read the spec (`docs/superpowers/specs/2026-11-17-memory-atlas-design.md`) and plan (`docs/superpowers/plans/2026-11-17-memory-atlas.md`).
> Every agent appends to the log at the end of its stage: what changed, which tests pass, what's next, gotchas.

## Current status
| Stage | Status | Notes |
|---|---|---|
| 0 Planning docs | ✅ done | spec + plan + this file |
| 1 Nav restructure | ⏳ in progress | |
| 2 Research datasets | ⏳ in progress (parallel subagents) | outputs in `docs/memory/research/` |
| 3 Build pipeline + data tests | ⬜ todo | |
| 4 Page shell | ⬜ todo | |
| 5 Engine | ⬜ todo | |
| 6 Content/SEO/deploy | ⬜ todo | |
| 7 Final review | ⬜ todo | |

## Environment gotchas
- Windows + pwsh. Files in repo use CRLF in `.js` (ai_capital*.js); new files may use LF — fine.
- Git push: run `$env:GITHUB_TOKEN=''; git push origin main` directly in pwsh. Do NOT wrap in `powershell -Command "..."` (the `$env` gets eaten → harmless error noise).
- GitHub Pages deploy watch: `gh run list --limit 3` then `gh run watch <id> --interval 5`.
- Live URL base: https://eljja.github.io/SiMarket/
- `node_modules/echarts` is installed locally → SSR smoke tests: `echarts.init(null, null, {renderer:'svg', ssr:true, width, height})`.
- Existing regression tests: `node scratch/verify_ai_capital.js; node scratch/test_single_play.js; node scratch/test_browser_morph.js; node scratch/test_bar_morph.js`.

## Decisions log
- 2026-11-17: Single bilingual data file + single engine for Memory Atlas (not EN/KO duplicated files like older apps) — removes number-parity risk.
- 2026-11-17: History starts 1980 (data defensibility). NOR null before 1988, NAND null before 1989.
- 2026-11-17: App nav labels: `📊 Si Market` / `🔄 AI Capital Flow` / `💾 Memory Atlas` (KO: `📊 Si Market` / `🔄 AI 자금 순환` / `💾 메모리 아틀라스`).

## Log
- 2026-11-17 23:05 (coordinator): Stage 0 complete. Launched Stage 2 research subagents (5 domains). Coordinator doing Stage 1 nav.
