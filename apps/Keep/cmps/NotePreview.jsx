import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVid } from './NoteVid.jsx'

export function NotePreview({ note, loadNotes }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteTxt note={note} loadNotes={loadNotes} className="glass" />
        case 'NoteImg':
            return <NoteImg note={note} loadNotes={loadNotes} className="glass" />
        case 'NoteTodos':
            return <NoteTodos note={note} loadNotes={loadNotes} className="glass" />
        case 'NoteVid':
            return <NoteVid note={note} loadNotes={loadNotes} />
    }
}