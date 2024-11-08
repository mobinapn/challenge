// variables
const noteList = document.querySelector("#taskList")

// EventListeners
EventListeners()
function EventListeners(){
    document.querySelector("#form").addEventListener('submit', newNote)
    document.querySelector('#taskList').addEventListener('click', removeNote)
    document.addEventListener('DOMContentLoaded', localStorageOnload)
}

// functions

// adding new note
function newNote(e){
    e.preventDefault();
    // access the value
    const note = document.querySelector("#input").value

    // create remove btn
    const removeBtn = document.createElement("ion-icon");
    removeBtn.setAttribute("name", "close-circle-outline");
    removeBtn.classList = "remove"

    // create <li> element
    const li = document.createElement('li')
    li.classList.add('list-group-item');
    li.appendChild(document.createTextNode(note))
    li.appendChild(removeBtn)

    // add li to the note list
    noteList.appendChild(li)

    // add note to local storage
    addNoteToLocalStorage(note)

    // clear input field
    this.reset()

    //alert
    alert('successfull')
}


// remove note from list
function removeNote(e){
    if (e.target.classList.contains('remove')) {
        // remove note from DOM
        e.target.parentElement.remove()

        // remove note from local storage
        removeNoteLocalStorage(e.target.parentElement.textContent.trim());
    }
}

// add note to local storage
function addNoteToLocalStorage(note){
    const notes = getNoteFromLocalStorage();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// get notes from local storage
function getNoteFromLocalStorage(){
    let notes;
    let getFromLS = localStorage.getItem('notes');
    if (getFromLS === null) {
        notes = []
    } else {
        notes = JSON.parse(getFromLS)
    }
    return notes
}


// load notes from local storage on page load
function localStorageOnload(){
    const notes = getNoteFromLocalStorage();
    
    notes.forEach(function(note) {
        // create remove btn
        const removeBtn = document.createElement("ion-icon");
        removeBtn.setAttribute("name", "close-circle-outline");
        removeBtn.classList = "remove"

        // create <li> element
        const li = document.createElement('li')
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(note))
        li.appendChild(removeBtn)

        noteList.appendChild(li)
    });
}

// remove note from local storage
function removeNoteLocalStorage(noteContent){
    // get notes from local storage
    let notes = getNoteFromLocalStorage();

    // filter out the note to be removed
    notes = notes.filter(item => item !== noteContent);

    // update local storage
    localStorage.setItem('notes', JSON.stringify(notes));
}
