// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { build } from "esbuild";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

const commonOptions = {
  bundle: true,
  sourcemap: true,
  target: "es2020",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    global: "globalThis",
  },
  inject: ["./polyfills.js"],
  logLevel: "info",
  external: ["ws"],
};

const builds = [
  // ESM build (for modern environments including Next.js)
  {
    ...commonOptions,
    entryPoints: ["./src/index.ts"],
    format: "esm",
    outfile: "dist/index.esm.js",
    platform: "browser",
    plugins: [
      NodeModulesPolyfillPlugin(),
      {
        name: 'node-globals',
        setup(build) {
          build.onResolve({ filter: /^(process|buffer|crypto)$/ }, args => {
            return { path: args.path, namespace: 'node-globals' }
          })
          build.onLoad({ filter: /.*/, namespace: 'node-globals' }, () => {
            return { contents: 'export default {}' }
          })
        },
      },
    ],
  },
  // CJS build (for Node.js and older bundlers)
  {
    ...commonOptions,
    entryPoints: ["./src/index.ts"],
    format: "cjs",
    outfile: "dist/index.cjs.js",
    platform: "node",
  }
];

async function runBuilds() {
  for (const config of builds) {
    try {
      console.log(`Starting build for ${config.outfile}...`);
      const result = await build(config);
      console.log(`Build completed for ${config.outfile}`);
      if (result.warnings.length > 0) {
        console.warn('Warnings:', result.warnings);
      }
      if (result.errors.length > 0) {
        console.error('Errors:', result.errors);
      }
    } catch (error) {
      console.error(`Build failed for ${config.outfile}:`, error);
      process.exit(1);
    }
  }
}

runBuilds().catch(error => {
  console.error('Unexpected error during build process:', error);
  process.exit(1);
});
