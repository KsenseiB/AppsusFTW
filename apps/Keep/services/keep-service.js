import { utilService } from '../../../services/util-service.js'
import {storageService} from '../../../services/storage-service.js'

export const keepService = {
    query,
    saveNote,
    deleteNote,
    changeColor,
    revertColor,
    addTask,
    pinNote,
    removeTask,
    saveNotes,
    loadSaved
}

var gNotes = [{
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "Don't forget to be a fullstack developer!",
            title: 'Fullstack Me Baby!'
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "Don't forget to have your code reviewed",
            title: 'Code Review!'
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg",
            title: 'Sexiest Man Alive'
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://static2.srcdn.com/wordpress/wp-content/uploads/2018/09/Avengers-Infinity-War-Thor-Stabs-Thanos.jpg",
            title: 'Remeber to go for the head'
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            title: "Wiping out half the universe:",
            todos: [{
                    id: utilService.makeId(),
                    txt: "Get the Tesseract from Loki in the Asgardian ship",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Get the Orb from the Nova core",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Get the Soul Stone by killing my daughter infront of a Nazi",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Get the Time Stone from the doc",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Get the Reality Stone from that wirdo collector",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Get the Mind Stone from that sexy robot's head",
                    doneAt: null
                },
                {
                    id: utilService.makeId(),
                    txt: "Become a farmer",
                    doneAt: null
                },
            ]
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteVid",
        isPinned: false,
        info: {
            title: "Best Video Ever",
            url: "https://youtu.be/h6fcK_fRYaI"
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteVid",
        isPinned: false,
        info: {
            title: "Shahar Hason every Thursday",
            url: "https://www.youtube.com/watch?v=NTN5e1JtOAw"
        },
        style: {
            backgroundColor: "#var(--col3)"
        }
    }
];

function query(filterBy) {
    if (filterBy) {
        let {text, submit} = filterBy
        text = text.toLowerCase()
        const filteredNotes = gNotes.filter(note => {
          let {title} = note.info
          title = title.toLowerCase()
        return note.type.includes(submit) && title.includes(text)
      })
      return Promise.resolve(filteredNotes)
    }
    return Promise.resolve(gNotes)
  }

function saveNote(content, title, type) {
    var note;
    if (type === 'txt') {
        note = {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                title,
                txt: content
            },
            style: {
                backgroundColor: "#ebb2e2"
            }
        }
    }

    if (type === 'img') {
        note = {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: false,
            info: {
                title,
                url: content,
            },
            style: {
                backgroundColor: "#ebb2e2"
            }
        }
    }

    if (type === 'vid') {
        note = {
            id: utilService.makeId(),
            type: "NoteVid",
            isPinned: false,
            info: {
                title,
                url: content
            },
            style: {
                backgroundColor: "#000"
            }
        }
    }

    if (type === 'todo') {
        note = {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: false,
            info: {
                title,
                todos: [{
                    id: utilService.makeId(),
                    txt: content,
                    doneAt: null
                }, ]
            },
            style: {
                backgroundColor: "#var(--col3)"
            }
        }
    }


    gNotes.push(note)
}

function deleteNote(id) {
    var pos = gNotes.findIndex(note => note.id === id)
    gNotes.splice(pos, 1)
}

function changeColor(id, color) {
    var pos = gNotes.findIndex(note => note.id === id)
    gNotes[pos].style.backgroundColor = color
}

function revertColor(id) {
    var pos = gNotes.findIndex(note => note.id === id)
    gNotes[pos].style.backgroundColor = "#ebb2e2"
}

function addTask(id, txt) {
    var pos = gNotes.findIndex(note => note.id === id)
    var todos = gNotes[pos].info.todos

    todos.push({
        doneAt: null,
        id: utilService.makeId(),
        txt
    })

}

function pinNote (id) {
    var pos = gNotes.findIndex(note => note.id === id)
    gNotes[pos].isPinned = !gNotes[pos].isPinned
}

function removeTask(todoId, noteId){
    var notePos = gNotes.findIndex(note => note.id === noteId)
    var {todos} = gNotes[notePos].info
    var todoPos = todos.findIndex(todo => todo.id === todoId)
    todos.splice(todoPos, 1)
}

function saveNotes(){
    storageService.saveToStorage('notes', gNotes)
}

function loadSaved(){
    let savedNotes = storageService.loadFromStorage('notes')
    if (savedNotes) gNotes = savedNotes
}