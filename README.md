Template for using TypeScript in frontend.

## Get Started

```sh
git init my-web-project --template https://github.com/sahithyandev/frontend-with-typescript-template.git
cd my-web-project
yarn install
```

`yarn install` will install the required dependencies. After that you are ready to go.

## The Process

Instead of Webpack or Parcel, I am using [ESBuild](https://esbuild.github.io/).
The building is done by `esbuilder.js` file. This script does these things.

1. Remove the `build` directory, if it already exist.
2. Bundle the typescript code, `src/main.ts` as the entry point and output to `build/bundle.js`.
3. Copy `public/` into `build/`
4. If `-w` is passed to the script, the above 3 steps will be re-done when a file changes in `src/` or `public/`

Feel free to change the code in `esbuilder.js` if you want.