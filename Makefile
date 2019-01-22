.PHONY: all

SHELL := /bin/bash

all: ci-test

nvm: 
	source "${HOME}/.nvm/nvm.sh" && nvm use 11.7

yarn: nvm
	npm i yarn

node_modules: package.json yarn
	yarn install 

ci-test: node_modules
	CI=true yarn test
