import { NoteOptions } from './NoteOptions.jsx'

export class NoteTxt extends React.Component {

    state = {
        className: 'note note-txt glass',
    }

    componentDidMount() {
        this.setPinned()
    }

    setPinned = () => {
        if (!this.props.note.isPinned) this.setState({ className: 'note note-txt glass' })
        else (this.setState({ className: 'note note-txt pinned' }))
    }

    render() {
        const divStyle = { backgroundColor: this.props.note.style.backgroundColor }
        const { className } = this.state
        const { note, loadNotes } = this.props
        return (
            <div className={className} style={divStyle}>
                <h2>{note.info.title}</h2>
                <p>{note.info.txt}</p>
                <NoteOptions noteId={note.id} loadNotes={loadNotes} setPinned={this.setPinned}/>
            </div>
        )
    }
}