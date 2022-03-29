const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installingDependencies() {
    this.npmInstall(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-standard",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-prettier",
        "eslint-plugin-promise",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin",
      ],
      { dev: true },
    );
  }
  eslint() {
    this.fs.copy(this.templatePath(".eslintrc.js"), this.destinationPath(".eslintrc.js"));
  }
  esLintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }
};
