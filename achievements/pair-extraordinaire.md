# <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt="Pair Extraordinaire badge"> Pair Extraordinaire

| | |
| --- | --- |
| **Difficulty** | 🟢 Easy (base) → 🟠 Hard (gold) |
| **Levels** | 4 |
| **Requirement status** | 🧪 Community-reported |

## 1. What it represents

Pair Extraordinaire celebrates **pair programming**: commits that list more than one
author and end up in a merged pull request.

## 2. Requirements

| Tier | Merged PRs with co-authored commits | Status |
| --- | :---: | :---: |
| Base | 1 | 🧪 |
| Bronze (`x2`) | 10 | 🧪 |
| Silver (`x3`) | 24 | 🧪 |
| Gold (`x4`) | 48 | 🧪 |

| Detail | Status |
| --- | :---: |
| Co-authors are added with a `Co-authored-by:` trailer in the commit message | ✅ ([Docs](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)) |
| The co-author email must be linked to a GitHub account | ✅ (same page) |
| The commit must be part of a **merged** pull request | 🧪 |
| Which participants receive the badge (co-author only, or author too) | ❓ |

## 3. Step by step

### Step 1: Pair with a real collaborator

Work on a change together — in person, over a call, or with
VS Code Live Share. Agree that both of you contributed.

### Step 2: Get your partner's commit email

Ask your partner for the email linked to their GitHub account, or their no-reply address:
`<ID>+<username>@users.noreply.github.com`. You can find their numeric ID with:

```bash
gh api users/<partner-username> --jq .id
```

### Step 3: Commit with a `Co-authored-by` trailer

```bash
git switch -c feat/pair-session-parser
# ... make your changes ...
git add .
git commit -m "feat: add config parser" -m "" \
  -m "Co-authored-by: Partner Name <12345678+partner@users.noreply.github.com>"
```

The commit message must end with the trailer, after a blank line:

```text
feat: add config parser

Co-authored-by: Partner Name <12345678+partner@users.noreply.github.com>
```

### Step 4: Open and merge the pull request

```bash
git push -u origin feat/pair-session-parser
gh pr create --fill
# after review:
gh pr merge --merge
```

> [!NOTE]
> With **squash merging**, the final commit message can be edited before confirming.
> Make sure the `Co-authored-by` trailer is still there, or the co-author credit may be lost.

## 4. Check whether it was awarded

- On the PR's commit list, the commit shows multiple avatars when co-authors are recognised.
- Then check your profile's **Achievements** section.

## 5. Restrictions and ethics

- ❌ Do not add people as co-authors who did not contribute, and never add someone without consent.
- An email that is not linked to any GitHub account will not be attributed.

## 6. Sources

- [Creating a commit with multiple authors — GitHub Docs](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)
- [Setting your commit email address — GitHub Docs](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- Community reference: [drknzz/GitHub-Achievements](https://github.com/drknzz/GitHub-Achievements)

[⬅ Back to index](README.md)
