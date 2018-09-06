.DEFAULT_GOAL := build
build:
	zip -rj breeze-dark.tdesktop-theme src/
clean:
	git clean --force -d -X
