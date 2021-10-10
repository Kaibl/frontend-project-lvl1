#!/usr/bin/env node
import runGame from '../src/game engine.js'
import prime from '../src/game/prime.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', prime);