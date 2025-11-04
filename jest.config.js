module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: [
    "**/__tests__/**/*.ts",
    "**/?(*.)+(spec|test).ts",
    "**/?(*.)+(spec|test).js",
  ],
  transform: {
    "^.+\\.[tj]s$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            decorators: true,
          },
          transform: { decoratorMetadata: true },
        },
        module: { type: "es6" },
      },
    ],
  },
  collectCoverageFrom: ["**/*.ts", "!server.ts", "!**/*.d.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  verbose: true,
  testTimeout: 30000,
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
