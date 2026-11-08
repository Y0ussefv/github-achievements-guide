# <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt="Pull Shark badge"> Pull Shark

| | |
| --- | --- |
| **Difficulty** | 🟢 Easy (base) → 🔴 Very hard (gold) |
| **Levels** | 4 |
| **Requirement status** | 🧪 Community-reported |

## 1. What it represents

Pull Shark celebrates pull requests that you **opened** and that were **merged**.
It is the most common badge and a good sign of real collaboration.

## 2. Requirements

| Tier | Merged PRs | Status |
| --- | :---: | :---: |
| Base | 2 | 🧪 |
| Bronze (`x2`) | 16 | 🧪 |
| Silver (`x3`) | 128 | 🧪 |
| Gold (`x4`) | 1024 | 🧪 |

Additional notes:

| Detail | Status |
| --- | :---: |
| You must be the **author** of the PR; merging someone else's PR does not count | 🧪 |
| PRs merged into public repositories count | 🧪 |
| PRs you merged yourself in your own repository count | ❓ Reports conflict (most say yes; some say GitHub reduced self-merge farming in 2026) |
| Private-repository PRs count only if private contributions are enabled | ❓ |

## 3. Step by step — a genuine contribution

### Step 1: Find a project

Look for issues labelled `good first issue` or `help wanted`. See
[Open-source contributions](../guides/open-source-contributions.md).

### Step 2: Fork and clone

```bash
gh repo fork <owner>/<project> --clone
cd <project>
```

### Step 3: Create a branch

```bash
git switch -c fix/typo-in-installation-docs
```

### Step 4: Make and commit your change

```bash
# edit the file(s), then:
git add docs/installation.md
git commit -m "docs: fix typo in installation steps"
git push -u origin fix/typo-in-installation-docs
```

Make sure your commit email is linked to your GitHub account
([Setting your commit email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)):

```bash
git config user.email   # should be a verified email or your <id>+<user>@users.noreply.github.com
```

### Step 5: Open the pull request

```bash
gh pr create --repo <owner>/<project> \
  --title "docs: fix typo in installation steps" \
  --body "Fixes #123. Corrects the package name in the install command."
```

### Step 6: Get it reviewed and merged

- Follow the project's `CONTRIBUTING.md` and PR template.
- Respond politely and quickly to review comments; push follow-up commits to the same branch.
- Be patient — maintainers are often volunteers.

```bash
gh pr status          # see the state of your PRs
gh pr checks          # see CI results
```

### Step 7: Repeat

After the **second** merged PR, the base badge should appear.

## 4. Check whether it was awarded

- Open your profile → **Achievements**. Hover the badge to see the tier (`x2`, `x3`, `x4`).
- Since 11 September 2026 the profile shows your **highest** tier
  ([Changelog](https://github.blog/changelog/2026-09-11-profiles-now-show-your-highest-achievement-badge-tier/)).
- List your merged PRs:

```bash
gh search prs --author @me --merged --limit 100
```

## 5. Restrictions and ethics

- ❌ Do not open trivial or automated PRs on other people's projects just to farm the badge.
  Maintainers may close them, and it can violate the
  [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies).
- ✅ Small, useful fixes (docs, typos, tests) are welcome in most projects.
- Commits made with an email not linked to your account may not be attributed to you.

## 6. Sources

- [Creating a pull request — GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [Contributing to a project — GitHub Docs](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
- [Profiles now show your highest achievement badge tier — GitHub Changelog](https://github.blog/changelog/2026-09-11-profiles-now-show-your-highest-achievement-badge-tier/)
- Community: [drknzz/GitHub-Achievements](https://github.com/drknzz/GitHub-Achievements),
  [community discussion #198068](https://github.com/orgs/community/discussions/198068)

[⬅ Back to index](README.md)
