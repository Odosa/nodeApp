//console.log('Starting Notes')
const fs = require('fs')

// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// module.exports = {
//     add, subtract
// }

const fetchNotes = () =>{
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch(err) {
        return []
    }
}

const addNote = (title, body) => {

    let notes = fetchNotes();

    let note = {
        title,
        body
    }

    notes.push(note)

    fs.writeFileSync('notes.txt', JSON.stringify(notes))
}

const removeNote = (title) => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) => note.title !== title)

    fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes))
}

const readNote = (title) => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) => note.title === title)

    console.log(filteredNotes)
}

const getAll = () => {
    let notes = fetchNotes();

    console.log(notes)
}

module.exports = {
    addNote, removeNote, readNote, getAll
}