# 🌍 Making real open-source contributions

Genuine contributions are the most reliable path to **Pull Shark**, **Pair Extraordinaire**
and eventually **Starstruck** — and they build real skills.

## 1. Find a project

- Start with tools you already use.
- Browse issues labelled `good first issue` or `help wanted`:

  ```bash
  gh search issues --label "good first issue" --state open --language python --limit 20
  ```

- GitHub's own guide: [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)

## 2. Read before you code

- `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`
- Existing issues and PRs on the same topic
- Comment on the issue to say you'd like to work on it, and wait for a maintainer's OK if the project asks for that.

## 3. Fork, branch, commit

```bash
gh repo fork <owner>/<repo> --clone
cd <repo>
git switch -c fix/issue-123-null-check

# make the change, run the project's tests
git add -A
git commit -m "fix: handle null config path (#123)"
git push -u origin fix/issue-123-null-check
```

## 4. Open the pull request

```bash
gh pr create --repo <owner>/<repo> --fill
```

A good PR description includes:

- What changed and why
- `Fixes #123` to link the issue
- How you tested it
- Screenshots for UI changes

Docs: [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## 5. Keep your fork up to date

```bash
gh repo sync <you>/<repo>
git pull
```

## 6. Handle review

- Thank reviewers, address each comment, and push new commits to the same branch.
- If CI fails, read the logs (`gh pr checks`) and fix the issue.
- If there is no response after a week or two, a polite ping is fine.

## Etiquette

| ✅ Do | ❌ Don't |
| --- | --- |
| Make focused, small PRs | Open dozens of one-character PRs to farm badges |
| Follow the project's style | Reformat entire files unasked |
| Disclose AI assistance if the project asks | Submit unreviewed generated code |
| Accept “no” gracefully | Argue with maintainers' decisions |
