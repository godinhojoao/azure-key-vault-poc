# Azure key vault + Nodejs poc

## First, you must create a key vault on your Azure account.

## Steps to use Azure Key Vault

1. `create a .env following the .env.example`
1. Login to azure using the Azure CLI
  1. `az login`
1. `npm run start`

## Node 12

To use this library on node v12

1. copy the index.js file from @azure/identity/dist/ and use it directly on your project.
2. Replace `var promises = require('fs/promises')` for `var promises = require('fs').promises`

This library has to be copied so we can use it directly because nodeJS version 12 doesn't support the "fs/promises" package.
