# <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt="Quickdraw badge"> Quickdraw

| | |
| --- | --- |
| **Difficulty** | 🟢 Easy |
| **Levels** | 1 (one-time badge) |
| **Requirement status** | 🧪 Community-reported |
| **Badge text on GitHub** | “Gitty up!” |

## 1. What it represents

Quickdraw rewards closing an issue or pull request very soon after it was opened —
typically a duplicate you noticed, a typo in the title, or a mistake you caught right away.

## 2. Requirements

| Requirement | Status |
| --- | :---: |
| Close an issue **or** a pull request within **5 minutes** of it being opened | 🧪 |
| It counts once; there are no higher tiers | 🧪 |
| You must have permission to close it (author or repository maintainer) | ✅ ([Closing an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)) |

## 3. Step by step

The most natural way to earn Quickdraw is during normal work: you open an issue,
immediately realise it is a duplicate or already fixed, and close it.

To practise on **your own** repository:

```bash
# 1. Create (or pick) a personal repository
gh repo create my-sandbox --public --add-readme --clone
cd my-sandbox

# 2. Open an issue
gh issue create --title "Track README improvements" --body "Checklist for README updates."

# 3. Within 5 minutes, close it with a reason
gh issue close 1 --reason "not planned" --comment "Duplicate of my local TODO list, closing."
```

Using the web UI instead:

1. Go to your repository → **Issues** → **New issue**, then submit it.
2. Within five minutes, click **Close issue** (optionally choose *Close as not planned*).

> [!TIP]
> Only do this on repositories you own or maintain. Opening and closing issues on
> someone else's project just to get a badge creates notification noise for them.

## 4. Check whether it was awarded

1. Open `https://github.com/<your-username>`.
2. Look at the **Achievements** section in the left sidebar.
3. Click the badge to see the issue or PR that earned it.

Allow some time — community reports range from a few minutes to 24 hours.

## 5. Restrictions and gotchas

- Profiles set to private hide achievements from others.
- If **Show Achievements on my profile** is unchecked in settings, nobody sees the badge.
- Deleting the issue/PR is not the same as closing it.

## 6. Sources

- [Closing an issue — GitHub Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)
- [Profile reference — GitHub Docs](https://docs.github.com/en/account-and-profile/reference/profile-reference)
- Community reference: [drknzz/GitHub-Achievements](https://github.com/drknzz/GitHub-Achievements)

[⬅ Back to index](README.md)
