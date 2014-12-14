#!/usr/bin/env bash
npm -d install
npm run test-ci
npm run-script coveralls
