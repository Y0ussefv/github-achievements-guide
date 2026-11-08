# ✨ GitHub profile optimization

Achievements are one small part of a profile. These steps make the whole profile useful
to recruiters, collaborators and maintainers.

## 1. Basics

- A clear profile picture and display name.
- A one-line **bio** saying what you work on.
- Location / company / website if you are comfortable sharing them.
- Pronouns are optional.

Official tutorial: [Personalize your profile](https://docs.github.com/en/account-and-profile/tutorials/personalize-your-profile)

## 2. Profile README

Create a public repository with **the same name as your username**. Its `README.md`
appears at the top of your profile.

```bash
gh repo create <your-username> --public --add-readme --clone
cd <your-username>
```

A simple template:

```markdown
## Hi, I'm Alex 👋

- 🔭 Working on: a CLI for managing dotfiles
- 🌱 Learning: Rust and WebAssembly
- 💬 Ask me about: Git, CI/CD, Python packaging
- 📫 Reach me: https://example.com

### Achievements I'm working toward
- [x] Quickdraw
- [ ] Pull Shark
- [ ] Galaxy Brain
```

Docs: [Managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)

## 3. Pin your best work

Pin up to six repositories or gists that show what you can do.
Docs: [Pinning items to your profile](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile)

## 4. Make each pinned repository shine

- Description and topics (`gh repo edit --description "…" --add-topic …`)
- README with a screenshot, install and usage
- A license
- Releases or tags for usable versions

## 5. Contribution graph

Decide whether to show private contributions (anonymised). See
[Manage visibility settings](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/manage-visibility-settings-for-private-contributions-and-achievements).

## 6. What not to do

- Don't auto-generate commits to fill the contribution graph.
- Don't buy followers or stars — see the [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies).
