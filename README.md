A typescript example project
============================

## What is this?

An example project to show how to setup a node/ typescript project. Requirements:

 * good quality linting and prettier support (with good typechecking with the linting)
 * good unit test integration with code coverage
 * sensible and transparent compilation setup

## Conventions/ tools adopted

 * uses eslint for linting
 * uses prettier for formatting
 * uses jest for testing/ watching and code coverage
 * uses husky and lint-staged to lint/ type check (compile) and test changes

## Prerequisites

 * git, node and yarn

## Installation/ running

 * `yarn` to install dependencies
 * `yarn test` to lint and run the unit tests
 * `yarn watch` to run the unit tests in watch mode (with mac notifications turned on)
 * `yarn start` to run the program in node
