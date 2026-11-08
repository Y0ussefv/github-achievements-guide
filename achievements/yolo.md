# <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt="YOLO badge"> YOLO

| | |
| --- | --- |
| **Difficulty** | 🟢 Easy |
| **Levels** | 1 (one-time badge) |
| **Requirement status** | 🧪 Community-reported |

## 1. What it represents

YOLO (“You Only Live Once”) is awarded for merging a pull request **without a code
review**. It is a light-hearted badge — in team projects, reviews are a good habit.

## 2. Requirements

| Requirement | Status |
| --- | :---: |
| You merge a pull request | 🧪 |
| The pull request received no review before merging | 🧪 |
| One-time badge, no tiers | 🧪 |

## 3. Step by step

The safest place is a personal repository where you are the only maintainer.

```bash
# 1. Clone your repository and create a branch
git clone https://github.com/<you>/my-sandbox.git
cd my-sandbox
git switch -c docs/add-usage-section

# 2. Make a real improvement
printf "\n## Usage\n\nRun \`make\` to build the project.\n" >> README.md
git add README.md
git commit -m "docs: add usage section"
git push -u origin docs/add-usage-section

# 3. Open a pull request
gh pr create --title "docs: add usage section" --body "Adds a short usage section."

# 4. Merge it without requesting a review
gh pr merge --squash --delete-branch
```

> [!WARNING]
> Do **not** bypass review on shared or team repositories. If a repository uses
> [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
> that require reviews, respect them.

## 4. Check whether it was awarded

Visit your profile and look for the YOLO badge in the **Achievements** sidebar.
Click it to see which pull request earned it.

## 5. Restrictions and gotchas

- If you also opened the PR, this same merge counts toward [Pull Shark](pull-shark.md). 🧪
- Squash, rebase and merge-commit strategies are all reported to work. ❓

## 6. Sources

- [Merging a pull request — GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
- [About pull request reviews — GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- Community reference: [drknzz/GitHub-Achievements](https://github.com/drknzz/GitHub-Achievements)

[⬅ Back to index](README.md)
