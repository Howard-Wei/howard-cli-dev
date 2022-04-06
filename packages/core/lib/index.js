#! usr/bin/env node
const utils = require('@howard-cli-dev/utils')
const argvs = require('process').argv
console.log('🚀 ~ file: index.js ~ line 3 ~ argvs', argvs)
const command = argvs[2]
const [option, value] = argvs.slice(2)

if (command) {
  if (utils[command]) {
    utils[command](option, value)
  } else {
    console.error('command not found')
  }
} else {
  console.error('no command')
}
