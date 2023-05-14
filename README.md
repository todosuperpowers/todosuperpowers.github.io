# Website

This is the todosuperpowers website.

## Dev Setup

The stack for this site consists of:

* NextJS 13 (using node v20.x)
* TailwindCSS

### To Get Setup for Development

Checkout the Code:

* Create an ssh key and register it in the github profile settings at https://github.com/todosuperpowers/todosuperpowers.github.io
* git -c core.sshCommand="ssh -i ~/.ssh/todosuperpowers_id_rsa" clone git@github.com:todosuperpowers/todosuperpowers.github.io.git

Override your personal git settings for this repo:

* git config --local core.sshCommand "ssh -i ~/.ssh/todosuperpowers_id_rsa"
* git config --local user.name "Todo Superpowers"
* git config --local user.email "dev@todosuperpowers.com"

Install deps and run the app:

* npm i
* npm run dev

To deploy on github pages, run:

* npm run build
* npm run deploy
