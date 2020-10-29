git init

npm init -y

npm i -D git-commit-msg-linter

npm i -D typescript @types/node

tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "ES2019",
    "esModuleInterop": true,
    "allowJs": true
  }
}
```

npm i -D eslint@7 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@3 eslint-config-standard-with-typescript

.eslintrc.js

```javascript
module.exports = {
  extends: "standard-with-typescript",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```

- git add .
  git commit --amend --no-edit

npm i -D husky

huskyrc.json

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

npm i -D lint-staged
.lintstagedrc.json

```json
{
  "*.ts": ["eslint 'src/**' --fix", "git add"]
}
```

npm i -D jest @types/jest ts-jest

jest --init
yes, node, yes, no

jest --clearCache

jest.config.js

```javascript
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
```

links:
https://www.npmjs.com/package/eslint-config-standard-with-typescript
https://standardjs.com/readme-ptbr.html


npm install -g stryker-cli
npm install --save-dev @stryker-mutator/core

stryker init

stryker run

```
/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "typescript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
  tsconfigFile: "tsconfig.json" ,
  mutate: ["src/**/*.ts"]
};
```

