install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

game:
	node bin/brain-calc.js
	node bin/brain-even.js
	node bin/brain-gcd.js
	node bin/brain-prime.js
	node bin/brain-progression.js