{
  "name": "{{{ name }}}",
  "description":  "{{{ description }}}",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsup",
    "release": "semantic-release"
  },
  "peerDependencies": {
    "react": "^16.8.6 || ^17.0"
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  }
}