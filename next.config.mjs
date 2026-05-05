/** @type {import('next').NextConfig} */

// Set REPO_NAME env var when building for a GitHub Project Page
// e.g.  REPO_NAME=my-portfolio pnpm build
// Leave unset when building for a User Page (username.github.io)
const repoName = process.env.REPO_NAME || ''

const nextConfig = {
  output: 'export',      // static HTML export
  trailingSlash: true,   // /about → /about/index.html  (needed for GH Pages)
  basePath: repoName ? `/${repoName}` : '',
  assetPrefix: repoName ? `/${repoName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,   // next/image optimisation requires a server
  },
}

export default nextConfig
