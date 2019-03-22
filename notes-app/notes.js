const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();

  // Will filter all notes
  const duplicateNotes = notes.filter(note => note.title === title);
  // Will filter until value is true, will return undefined if no match
  const duplicateNote = notes.find(note => note.title === title);

  debugger

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
  } else {
    console.log("Title already exists");
  }


}

const removeNote = title => {
  const notes = loadNotes();
  const result = notes.filter(note => note.title !== title);
  saveNotes(result);
  
}

const listNotes = () => {
  const notes = loadNotes();
  console.log("###### Your Notes ######");

  notes.forEach(note => {
    console.log(note.title);
  })
}

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(note.title)
    console.log(note.body);
  } else {
    console.log("Note not found");
  } 
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};