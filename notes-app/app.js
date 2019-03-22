const validator = require('validator');
const yargs = require('yargs');
const fs = require('fs');
const note = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'body text',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.removeNote(argv.title)
  }
})

// List out command
yargs.command({
  command: 'list',
  describe: "List out all notes",
  handler: function () {
    note.listNotes();
  }
})

// Read Command
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.readNote(argv.title)
  }
})


yargs.parse();