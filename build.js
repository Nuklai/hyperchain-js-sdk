// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { build } from "esbuild";
import path from "path";
import { fileURLToPath } from "url";
import alias from "esbuild-plugin-alias";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonOptions = {
  bundle: true,
  sourcemap: true,
  target: "esnext",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    global: "globalThis",
  },
  inject: ["./polyfills.js"],
};

const builds = [
  {
    ...commonOptions,
    entryPoints: ["./src/index.ts"],
    platform: "browser",
    format: "esm",
    outfile: "dist/index.esm.js",
    external: ['ws'],
    plugins: [
      alias({
        crypto: path.resolve(__dirname, "node_modules/crypto-browserify/index.js"),
        stream: path.resolve(__dirname, "node_modules/stream-browserify/index.js"),
        buffer: path.resolve(__dirname, "node_modules/buffer/index.js"),
        zlib: path.resolve(__dirname, "node_modules/browserify-zlib/index.js"),
        util: path.resolve(__dirname, "node_modules/util/util.js"),
        process: path.resolve(__dirname, "node_modules/process/browser.js"),
        events: path.resolve(__dirname, "node_modules/events/events.js")
      }),
      NodeModulesPolyfillPlugin()
    ]
  },
  {
    ...commonOptions,
    entryPoints: ["./src/index.ts"],
    platform: "node",
    format: "cjs",
    outfile: "dist/index.cjs.js",
    external: ['ws'] 
  }
];

Promise.all(builds.map(build)).catch(() => process.exit(1));
