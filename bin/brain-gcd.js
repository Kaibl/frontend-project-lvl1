#!/usr/bin/env node
import runGame from '../src/game engine.js';
import gcd from '../src/game/gcd.js';

runGame('What is the result of the expression?', gcd);
