# Contributing to GitHub Achievements Guide

Thank you for helping keep this guide accurate! GitHub changes achievements without much
notice, so community reports are what keep this project useful.

By participating you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

| I want to… | Do this |
| --- | --- |
| Report something wrong or outdated | [Incorrect information issue](https://github.com/Y0ussefv/github-achievements-guide/issues/new?template=incorrect-information.yml) |
| Report a missing achievement | [Missing achievement issue](https://github.com/Y0ussefv/github-achievements-guide/issues/new?template=missing-achievement.yml) |
| Improve wording, structure or examples | [Documentation improvement issue](https://github.com/Y0ussefv/github-achievements-guide/issues/new?template=documentation-improvement.yml) or a PR |
| Suggest something else | [General suggestion issue](https://github.com/Y0ussefv/github-achievements-guide/issues/new?template=general-suggestion.yml) |

## Workflow

### 1. Fork the repository

```bash
gh repo fork Y0ussefv/github-achievements-guide --clone
cd github-achievements-guide
```

Or click **Fork** on GitHub, then `git clone https://github.com/<you>/github-achievements-guide.git`.

### 2. Create a branch

```bash
git switch -c docs/update-galaxy-brain-tiers
```

Branch prefixes: `docs/`, `fix/`, `feat/` (new pages), `ci/`.

### 3. Make your change and check it locally

```bash
npx markdownlint-cli2 "**/*.md"
node scripts/validate-docs.mjs
```

### 4. Commit and push

```bash
git add -A
git commit -m "docs: update Galaxy Brain tier thresholds"
git push -u origin docs/update-galaxy-brain-tiers
```

### 5. Open a pull request

```bash
gh pr create --fill
```

Fill in the PR template, including **sources**. CI runs Markdown linting, link checking
and documentation validation on every PR.

## Reporting outdated information

Please include:

1. The page and the exact sentence that is wrong.
2. What is true now.
3. Evidence — ideally an official link; otherwise a screenshot of your badge detail view,
   dates, and the activity that triggered (or did not trigger) the badge.

Never post tokens, private repository names or personal data in screenshots.

## Suggesting new achievements

Only add an achievement when there is evidence it exists on github.com:

- an official GitHub Docs / Changelog / Blog mention, **or**
- the badge appearing on real profiles, with links to several examples.

New achievements start labelled 🧪 or ❓ until confirmed.

## Documentation standards

- **Accuracy first.** Every factual claim needs a source.
- **Label every requirement:** ✅ Official · 🧪 Community-reported · ❓ Unverified.
- **Ethics:** never describe spam, fake accounts, purchased stars, automation that floods
  repositories, or anything else against the
  [GitHub Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies).
- **Achievement pages** must contain these sections (checked by CI):
  `## 1. What it represents`, `## 2. Requirements`, `## 3. Step by step`,
  `## 4. Check whether it was awarded`, `## 5. Restrictions`, `## 6. Sources`.
- Use GitHub-flavoured Markdown, fenced code blocks with a language, relative links between pages.
- Commands must be realistic and tested. Use `<placeholders>` for user-specific values.
- Badge images: link to `github.githubassets.com`; do not commit GitHub's artwork (see [assets/badges](assets/badges/README.md)).
- Write in clear, beginner-friendly English.

## Providing official sources

Preferred, in order:

1. [docs.github.com](https://docs.github.com/)
2. [GitHub Changelog](https://github.blog/changelog/) and [GitHub Blog](https://github.blog/)
3. Replies from GitHub staff in [GitHub Community discussions](https://github.com/orgs/community/discussions)
4. Well-maintained community references (mark the claim 🧪)

Add new long-lived sources to [`resources/official-links.md`](resources/official-links.md).
