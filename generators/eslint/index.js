const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "Which ESLint config do you want?",
        choices: [
          {
            name: "yarn-javascript",
          },
          {
            name: "yarn-typescript",
          },
          {
            name: "npm-typescript",
          },
          {
            name: "npm-typescript",
          },
        ],
      },
    ]);

    if (answers.eslint.includes("yarn-javascript")) {
      this.composeWith(require.resolve("./yarn-javascript"));
    }

    if (answers.eslint.includes("yarn-typescript")) {
      this.composeWith(require.resolve("./yarn-typescript"));
    }

    if (answers.eslint.includes("npm-javascript")) {
      this.composeWith(require.resolve("./npm-typescript"));
    }

    if (answers.eslint.includes("npm-typescript")) {
      this.composeWith(require.resolve("./npm-typescript"));
    }
  }
};
