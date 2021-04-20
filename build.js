"use strict";

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Text + chalk definitions
const data = {
  name: chalk.white("Vicky Robles/"),
  handle: chalk.cyan("MissVRobles"),
  dev: chalk.cyan("https://dev.to/vikirobles"),
  work: chalk.white("Front-end Engineer"),
  github: chalk.cyan("https://github.com/Viki-Robles"),
  linkedin: chalk.cyan(
    "https://www.linkedin.com/in/vicky-vasilopoulou-52230111b"
  ),
  web: chalk.cyan("https://myportfolio-puce.vercel.app"),
  npm: chalk.white("npm-vrobles-card"),
  labelWork: chalk.white.bold("      Work:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedin: chalk.white.bold("  Linkedin:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelDev: chalk.white.bold("       DevCommunity:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkeding = `${data.labelLinkedin}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const deving = `${data.labelDev}  ${data.dev}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkeding +
  newline +
  webing +
  newline +
  deving +
  newline +
  newline +
  carding;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "white",
    })
  )
);
