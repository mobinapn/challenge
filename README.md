# challenge
To-Do List
A simple web-based To-Do List application that allows users to add, display, and remove tasks. Each task is stored in the browser's local storage, allowing tasks to persist even after the page is refreshed.

Features
Add Tasks: Users can add new tasks to the list by typing into the input field and clicking the "Add" button.
Remove Tasks: Each task has a remove button (close-circle icon) that allows users to delete tasks individually.
Persistent Storage: Tasks are saved in local storage, allowing them to persist across browser sessions.
Responsive Design: Built using Bootstrap for a responsive and clean interface.
Technologies Used
HTML
CSS (Bootstrap for styling and layout)
JavaScript (for functionality and DOM manipulation)
Local Storage (for storing tasks)
Installation
Clone the repository or download the project files.
Open index.html in your browser to start using the To-Do List app.
Structure
index.html: The main HTML file containing the structure and layout of the app.
style.css: Inline styling within index.html.
to_do_list.js: JavaScript file containing the functionality for adding, removing, and storing tasks.
External Libraries:
Bootstrap: Used for styling and responsive layout.
Ionicons: Used for the delete icon next to each task.
Usage
Adding a Task:

Type the task in the input field.
Click "Add" or press "Enter" to add the task to the list.
Removing a Task:

Click the red close-circle icon next to the task to delete it.
Persistent Tasks:

All tasks are saved in local storage. When you reload the page, tasks will remain in the list until manually deleted.
Code Explanation
Event Listeners:

The app listens for a form submission to add a new task.
It listens for a click event on the task list to identify and remove tasks.
Local Storage:

Tasks are saved to local storage upon creation.
Upon page load, the app retrieves tasks from local storage and displays them.
Function Overview:

newNote(e): Adds a new task to the list and saves it in local storage.
removeNote(): Removes a task from both the DOM and local storage.
addNoteToLocalStorage(note): Adds a task to local storage.
getNoteFromLocalStorage(): Retrieves all tasks from local storage.
localStorageOnload(): Loads tasks from local storage on page load.
removeNoteLocalStorage(noteContent): Removes a task from local storage.
License
This project is licensed under the MIT License.
