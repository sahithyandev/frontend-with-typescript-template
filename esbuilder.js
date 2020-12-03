/**
 * Builder script for esbuild
 *
 * -w to watch
 * --minify to minify the code
 */
const path = require("path");

//
const srcDir = "src/";
const publicDir = "public/";
const buildDir = "build/";
const mainFile = path.join(srcDir, "main.ts");
//

const esbuild = require("esbuild");
const fsExtra = require("fs-extra");

const isWatching = process.argv.includes("-w");
const wantMinified = process.argv.includes("--minify");

function build() {
  // This if block may not be necessary.
  // Removing it won't affect anything.
  if (fsExtra.existsSync("build")) {
    fsExtra.removeSync("build");
  }

  // bundle typescript code
  esbuild
    .build({
      entryPoints: [mainFile],
      loader: {
        ".ts": "ts",
      },
      bundle: true,
      minify: wantMinified,
      outfile: path.join(buildDir, "bundle.js"),
      format: "esm",
    })
    .then((result) => {
      // on buildFinish

      // copy "public" to "build" directory
      fsExtra.copySync(publicDir, buildDir);

      if (result.warnings && result.warnings.length !== 0) {
        result.warnings.forEach(console.warn);
      }

      console.log("Build Finished");
      if (isWatching) console.log("Watching for changes...");
    });
}

build();
if (isWatching) {
  let fsTimeout;
  const watchDirs = [srcDir, publicDir];
  watchDirs.forEach((dirName) => {
    fsExtra.watch(dirName, (event, fileName) => {
      if (!fsTimeout) {
        console.log(`Changes detected in ${dirName}`);
        fsTimeout = setTimeout(function () {
          fsTimeout = null;
        }, 100);
        build();
      }
    });
  });
}
