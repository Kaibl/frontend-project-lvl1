#!/usr/bin/env node
import runGame from '../src/game engine.js'
import even from '../src/game/even.js'

runGame('Answer "yes" if the number is even, otherwise answer "no"', even);
