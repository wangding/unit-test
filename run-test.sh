#!/bin/bash

./app.js&
./node_modules/.bin/mocha
pkill -2 'app.js'
