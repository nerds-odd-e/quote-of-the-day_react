.PHONY: all

SHELL := /bin/bash

all: ci-test

ci-test:
	source "${HOME}/.nvm/nvm.sh" && nvm use 11.7 && npm i yarn && yarn install && CI=true yarn test
	
