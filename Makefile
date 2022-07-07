install: # установить зависимости
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
publish: # публикация пакета (тестовая)
	npm publish --dry-run
lint: # запуск линтинга
	npx eslint