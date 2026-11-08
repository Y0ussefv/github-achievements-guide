# ✅ Achievement progress tracker

Copy the block below into a personal note, a GitHub issue, or your profile README.

> [!NOTE]
> This checklist is **manual**. Ticking a box does not synchronise with GitHub, and
> GitHub does not read it. Your profile's **Achievements** section is the only source of truth.

```markdown
## 🏆 My GitHub Achievements

### One-time badges
- [ ] Quickdraw — closed an issue/PR within 5 minutes
- [ ] YOLO — merged a PR without review
- [ ] Public Sponsor — sponsored someone via GitHub Sponsors

### Pull Shark (merged PRs I authored)
- [ ] Base — 2
- [ ] Bronze x2 — 16
- [ ] Silver x3 — 128
- [ ] Gold x4 — 1024

### Pair Extraordinaire (merged PRs with co-authored commits)
- [ ] Base — 1
- [ ] Bronze x2 — 10
- [ ] Silver x3 — 24
- [ ] Gold x4 — 48

### Galaxy Brain (accepted Discussion answers)
- [ ] Base — 2
- [ ] Bronze x2 — 8
- [ ] Silver x3 — 16
- [ ] Gold x4 — 32

### Starstruck (stars on a repo I created)
- [ ] Base — 16
- [ ] Bronze x2 — 128
- [ ] Silver x3 — 512
- [ ] Gold x4 — 4096

### Not currently earnable (for reference)
- Heart On Your Sleeve — unreleased
- Open Sourcerer — unreleased
- Arctic Code Vault Contributor — retired
- Mars 2020 Helicopter Contributor — retired
```

Tier numbers are community-reported; see the [achievement index](../achievements/README.md).

## Check your numbers with the GitHub CLI

```bash
# Merged PRs you authored (Pull Shark)
gh search prs --author @me --merged --json url --limit 1000 --jq length

# Stars on each of your repositories (Starstruck)
gh repo list --limit 100 --json name,stargazerCount \
  --jq 'sort_by(-.stargazerCount) | .[] | "\(.stargazerCount)\t\(.name)"'
```
