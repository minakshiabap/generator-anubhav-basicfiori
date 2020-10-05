"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
const glob = require("glob");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What project name would you like?",
        validate: (s) => {
          if (/^[a-zA-Z0-9_-]*$/g.test(s)) {
            return true;
          }

          return "Please only use alphanumeric characters for the project name.";
        },
        default: "anubhavfioriapp",
      },
      {
        type: "confirm",
        name: "newDir",
        message: "Would you like to create a new directory for this project?",
        default: true,
      },
      {
        type: "input",
        name: "projectNamespace",
        message: "What is the namespace of your project?",
        default: "anubhav.app",
      },
    ]).then((answers) => {
      if (answers.newDir) {
        this.destinationRoot(`${answers.projectName}`);
      }
      this.config.set(answers);
    });
  }

  writing() {
    this.sourceRoot(path.join(__dirname, "templates"));
    glob
      .sync("**", {
        cwd: this.sourceRoot(),
        nodir: true,
      })
      .forEach((file) => {
        const sOrigin = this.templatePath(file);
        const sTarget = this.destinationPath(file);
        this.fs.copyTpl(sOrigin, sTarget, this.config.getAll());
      });
  }

  install() {
    /*
    This.installDependencies({
      bower: false,
      npm: true
    });
    */
  }

  end() {
    this.log("");
    this.log(
      "Thanks for using, please visit us on https://www.anubhavtrainings.com!!"
    );
    this.log("");
  }
};
