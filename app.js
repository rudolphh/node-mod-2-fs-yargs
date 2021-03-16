#!/usr/bin/env node
const fs = require('fs');
const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help').argv;


let filename = argv.filename;
let fileArray = [];
  
fs.readFile('./data/filenames.txt', function(err, data) {

  // if the file exists
  if(data) {
    fileArray = JSON.parse(data);

    if(fileArray.includes(filename)) {

      console.log('file already exists, please enter a new filename');
      process.exit();
    } else { // if file doesn't already exist
      
      fileArray.push(filename);

      fs.writeFile('./data/files/' + filename, 'You are awesome', (err) => { });
      fs.writeFile('./data/filenames.txt', JSON.stringify(fileArray), (err) => { });
    }
  } else if (err) {
    console.log(err);
  }
});



