# Agentic AI Website

Official website for **Agentic AI Show 2026** — India's first conference dedicated to autonomous AI agents.

- **Site**: [agenticaishow.in](https://agenticaishow.in) (custom domain via `AgenticAI/public/CNAME`)
- **Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Hosting**: GitHub Pages (static export)

## Hosting on GitHub Pages

1. **Push this repo** to the target GitHub org/account (e.g. `PingalaSoftware/agentic-ai-website`).

2. **Enable GitHub Pages** in the repo:
   - **Settings → Pages**
   - **Build and deployment → Source**: choose **GitHub Actions** (not "Deploy from a branch").

3. **Deploy**:
   - Push to the `main` branch. The workflow `.github/workflows/deploy-agenticai.yml` runs on push, builds the Next.js app in `AgenticAI/`, and deploys the static export to GitHub Pages.

4. **Custom domain** (optional):
   - `AgenticAI/public/CNAME` is set to `agenticaishow.in`.
   - In **Settings → Pages**, add the same custom domain and configure DNS: CNAME record for `agenticaishow.in` → `<org-or-username>.github.io`.

## Local development

```bash
cd AgenticAI
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

- `AgenticAI/` — Next.js app (static export for GitHub Pages)
- `.github/workflows/deploy-agenticai.yml` — Build and deploy to GitHub Pages on push to `main`

Full app docs: [AgenticAI/README.md](AgenticAI/README.md).
