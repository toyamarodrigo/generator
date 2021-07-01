const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'eslint',
        message: 'Which ESLint config do you want?',
        choices: [
          {
            name: 'javascript',
          },
          {
            name: 'next',
          },
          {
            name: 'typescript',
          },
        ],
      },
    ]);

    if (answers.eslint.includes('javascript')) {
      this.composeWith(require.resolve('./javascript'));
    }

    if (answers.eslint.includes('typescript')) {
      this.composeWith(require.resolve('./typescript'));
    }

    if (answers.eslint.includes('next')) {
      this.composeWith(require.resolve('./next'));
    }
  }
};
