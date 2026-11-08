# Security Policy

This repository contains documentation and lightweight CI workflows. It does not ship
software packages, but we still take security seriously.

## What to report

- A workflow in `.github/workflows/` that could leak secrets or run untrusted code
- A link in the guide that now points to a malicious or phishing site
- Instructions that would lead readers to expose tokens, passwords or personal data

## How to report

Please **do not** open a public issue for security problems.

Use GitHub's private reporting:
**Security → Report a vulnerability** on this repository, or go directly to
[the private advisory form](https://github.com/Y0ussefv/github-achievements-guide/security/advisories/new).

We aim to acknowledge reports within 7 days.

## Out of scope

- Security issues in GitHub itself — report those to the
  [GitHub Security Bug Bounty](https://bounty.github.com/).
- Achievement requirements being wrong — open a normal issue.

## Supported versions

Only the latest version on the `main` branch is maintained.
