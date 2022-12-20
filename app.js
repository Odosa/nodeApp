//console.log('Starting App')

const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes.js')

// fs.appendFileSync('hello.txt', 'Welcome to Node');

// console.log(notes.add(5, 4))
// console.log(notes.subtract(9, 5))

// console.log(process.argv)
// console.log(yargs.argv)

// let title = process.argv[4]
// console.log(title)

// let title = yargs.argv.title
// console.log(title)

let{title, body} = yargs.argv
let command = yargs.argv._[0]

if (command === 'add') {
    console.log("adding note")
    notes.addNote(title, body)
} else if (command === 'remove') {
    console.log("removing note")
    notes.removeNote(title)
} else if (command === 'read') {
    console.log("reading note")
    notes.readNote(title)
} else if (command === 'list') {
    console.log("listing all note")
    notes.getAll()
} else {
    console.log("Unknown command was used!!!")
}