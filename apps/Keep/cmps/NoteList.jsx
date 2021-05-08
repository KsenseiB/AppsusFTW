import {NotePreview} from '../cmps/NotePreview.jsx'

export function NoteList({notes, loadNotes}) {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NotePreview note={note} key={note.id} loadNotes={loadNotes}/>
            ))}
        </div>
    )
}