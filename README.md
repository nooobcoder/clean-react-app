## Default package manager: Yarn (light)

A very clean React App starter template by [Ankur Paul](https://github.com/nooobcoder)

### Update today by running `npm i next@latest`.

## Update for NextJS 11.1

> Read the entire changelog here: [NextJS 11.1 update](https://nextjs.org/blog/next-11-1#es-modules-support)

### [ES Modules Support](https://nextjs.org/blog/next-11-1#es-modules-support)

We're working on extensive [ES Modules](https://nodejs.org/docs/latest/api/esm.html) support in Next.js, both as input modules and as an output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules (e.g. `"type": "module"` in their `package.json`) with an experimental flag.

```

// next.config.js

module.exports = {

// Prefer loading of ES Modules over CommonJS

experimental: { esmExternals: true }

}



```

ES Modules support includes backward compatibility to support the previous import behavior of [CommonJS](https://nodejs.org/docs/latest/api/modules.html). In Next.js 12, `esmExternals: true` will become the default. We recommend trying the new option and [leave feedback GitHub Discussions](https://github.com/vercel/next.js/discussions/27876) if you have suggestions for improvement.

### [Adopting Rust-based SWC](https://nextjs.org/blog/next-11-1#adopting-rust-based-swc)

We're working on integrating [SWC](https://swc.rs/), a super-fast JavaScript and TypeScript compiler written in Rust, that will replace two toolchains used in Next.js: **Babel** for individual files and **Terser** for minifying of output bundles.

As part of replacing Babel with SWC, we are porting all custom code transformations Next.js uses to SWC transforms written in Rust to maximize performance. For example, tree shaking unused code inside `getStaticProps`, `getStaticPaths`, and `getServerSideProps`.

As part of replacing Terser, we are working on ensuring the SWC minifier has similar output to Terser while massively improving performance and parallelization of minification.

### [Builds & Data Fetching](https://nextjs.org/blog/next-11-1#builds--data-fetching)

When using `next build`and making numerous HTTP requests, we've **improved performance by ~2x** on average. For example, if you're using `getStaticProps` and `getStaticPaths` to fetch content from a Headless CMS, you should see noticeably faster builds.

Next.js automatically polyfills [node-fetch](https://nextjs.org/docs/basic-features/supported-browsers-features#polyfills) and now enables [HTTP Keep-Alive](https://en.wikipedia.org/wiki/HTTP_persistent_connection) by default. According to [external benchmarks](https://github.com/Ethan-Arrowood/undici-fetch/blob/main/benchmarks.md#fetch), this should make pre-rendering **~2x faster**.

To disable HTTP Keep-Alive for certain `fetch()` calls, you can add the agent option:

```

import { Agent } from 'https'

const url = '<https://example.com>'

const agent = new Agent({ keepAlive: false })

fetch(url, { agent })



```

To override all `fetch()` calls globally, you can use `next.config.js`:

```

module.exports = {

httpAgentOptions: {

keepAlive: false

}

}

```

### [Common Typos](https://nextjs.org/blog/next-11-1#common-typos)

Linting for common typos in `getStaticProps`, `getStaticPaths`, and `getServerSideProps` will now warn by default. This will help with cases where a small typo causes data fetching to not be called. For example `getstaticprops` or `getStaticprops` will show a warning.

![profile-avatar](https://avatars.githubusercontent.com/u/50350828?s=400&u=82f5ebc3cbedef0c5ca3c59086cf0f38c45dedbc&v=4)
