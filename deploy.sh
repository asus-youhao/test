#!/usr/bin/env bash
# =============================================================================
# deploy.sh  —  Build Next.js static site and push to GitHub Pages
# =============================================================================
#
# USAGE
#   Project page  (https://<user>.github.io/<repo>/)
#     REPO_NAME=my-portfolio ./deploy.sh
#
#   User/org page (https://<user>.github.io/)
#     ./deploy.sh
#
# REQUIREMENTS
#   git, pnpm (or npm/yarn — change INSTALL_CMD / BUILD_CMD below)
# =============================================================================

set -euo pipefail

# ── Configurable ─────────────────────────────────────────────────────────────
REPO_NAME="${REPO_NAME:-}"          # leave empty for user page
BUILD_CMD="npm run build"           # change to: pnpm build / yarn build
OUT_DIR="out"                       # Next.js static export output directory
DEPLOY_BRANCH="gh-pages"            # branch GitHub Pages serves from
COMMIT_MSG="chore: deploy $(date '+%Y-%m-%d %H:%M:%S')"
# ─────────────────────────────────────────────────────────────────────────────

# Ensure Node 18+ is used (prefer snap node on Ubuntu if default is too old)
if node --version 2>/dev/null | grep -qE '^v(0|[1-9]|1[0-7])\.'; then
  if [ -x /snap/bin/node ]; then
    export PATH=/snap/bin:/snap/node/current/bin:$PATH
    echo "ℹ  Using snap Node: $(node --version)"
  else
    echo "❌  Node.js 18+ required. Current: $(node --version). Install via: sudo snap install node --classic --channel=20"
    exit 1
  fi
fi

echo "=========================================="
echo " GitHub Pages Deploy Script"
echo "=========================================="

# 1. Confirm we are in the project root
if [[ ! -f "package.json" ]]; then
  echo "❌  Run this script from the project root (where package.json lives)."
  exit 1
fi

# 2. Build
echo ""
echo "▶  Building static export..."
if [[ -n "$REPO_NAME" ]]; then
  echo "   basePath  = /${REPO_NAME}"
  REPO_NAME="$REPO_NAME" $BUILD_CMD
else
  echo "   basePath  = (none — user/org page)"
  $BUILD_CMD
fi

# 3. Add .nojekyll so GitHub doesn't run Jekyll on underscore folders
echo ""
echo "▶  Writing .nojekyll..."
touch "${OUT_DIR}/.nojekyll"

# 4. Push the out/ directory to the gh-pages branch
echo ""
echo "▶  Deploying to '${DEPLOY_BRANCH}' branch..."

# Save the current branch so we can return
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Stash any outstanding changes so they don't get lost
git stash --include-untracked --quiet || true

# Ensure the deploy branch exists (local)
if git show-ref --quiet "refs/heads/${DEPLOY_BRANCH}"; then
  # Branch exists: checkout and wipe it
  git checkout "${DEPLOY_BRANCH}"
  git rm -rf . --quiet
else
  # Create a fresh orphan branch
  git checkout --orphan "${DEPLOY_BRANCH}"
  git rm -rf . --quiet
fi

# Copy build output into root of the branch
cp -r "${OUT_DIR}/." .

# Create a .gitignore for the gh-pages branch to exclude source files
printf 'node_modules/\n.next/\n' > .gitignore

# Commit and push
git add -A
git commit -m "${COMMIT_MSG}"
git push origin "${DEPLOY_BRANCH}" --force

echo ""
echo "✅  Deploy complete!"
if [[ -n "$REPO_NAME" ]]; then
  echo "   Your site will be live at:"
  echo "   https://<your-github-username>.github.io/${REPO_NAME}/"
else
  echo "   Your site will be live at:"
  echo "   https://<your-github-username>.github.io/"
fi
echo ""

# 5. Return to original branch and restore stash
git checkout "${CURRENT_BRANCH}"
git stash pop --quiet 2>/dev/null || true

echo "   Returned to branch: ${CURRENT_BRANCH}"
echo "=========================================="
