/**
 * Builder script for esbuild
 */

const esbuild = require("esbuild");

const publicDir = "public";
const buildDir = "build/";
const mainSourceFile = "src/main.ts";

// bundle typescript code
esbuild
  .build({
    entryPoints: [mainSourceFile],
    loader: {
      ".ts": "ts",
    },
    bundle: true,
    outfile: buildDir + "bundle.js",
    format: "esm",
  })
  .then((result) => {
    // on buildFinish

    // copy "public" to "build" directory
    const fsExtra = require("fs-extra");
    fsExtra.copySync(publicDir, buildDir);

    if (result.warnings && result.warnings.length !== 0) {
      // result.warnings.forEach(console.warn);
    }

    console.log("Build Finished");
  });
