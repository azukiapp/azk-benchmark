# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## v0.2.2 (2016-02-11)

* Enhancements
  - [Code] Get commit_id and commit_date from azk version
  - [Code] Rename azkBinPath to azk-bin-path argument

## v0.2.0 (2016-02-10)

* Enhancements
  - [Cli] `--repeat` can repeat benchmark several times
  - [Cli] Better output
  - [Code] Summarise results showing **average** but still sends all data to `Keen.IO`
  - [Code] Refactor all variables to simple *cammel case*

## v0.1.29 (2016-02-05)

* Enhancements
  - [Cli] Adding `--plain` option to suppress table from output;
  - [Cli] Properly printing messages to stdout and stderr;

## v0.1.28 (2016-01-21)

* Enhancements
  - [Cli] 3 levels for `--verbose` option;
  - [Cli] show detailed error if occurs;
  - [Cli] `cli-table` to show final results;
  - [Core] `azkBinPath` is passed on instantiation of `AzkBenchmark`;
  - [Config] Rename env variables: `BENCHMARK_AZK_KEEN_IO_PROJECTID` and `BENCHMARK_AZK_KEEN_IO_WRITEKEY` for `AZK_BENCHMARK_KEEN_IO_PROJECTID` and `AZK_BENCHMARK_KEEN_IO_WRITEKEY`;
  - [Cli] Return `1` if an error occurred;
  - [Cli] Adding parameter `--no-color`;

* Bug
  - [Core] Changing to search `azk` in global system not a specific path;

## v0.1.0 (2016-01-18)

* Enhancements
  - [Cli] demo project can be configured by parameters
  - [Core] Send results to Keen.IO
