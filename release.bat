cd D:\github\test
$env:REPO_NAME="test" ; pnpm build   # .nojekyll 現在自動包含在 out/ 裡

$w = "D:\github\gh-pages-work"
git worktree add $w gh-pages
Get-ChildItem $w -Exclude ".git" | Remove-Item -Recurse -Force
Copy-Item out\* $w -Recurse -Force
cd $w
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin gh-pages
cd D:\github\test
git worktree remove $w