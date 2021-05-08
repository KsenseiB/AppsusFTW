import { NoteOptions } from './NoteOptions.jsx'

export class NoteVid extends React.Component {

    state = {
        className: 'note note-vid',
        src: ''
    }

    componentDidMount() {
        this.setPinned()
        this.createSrc()
    }

    createSrc = () => {
        var { note } = this.props
        var urlId;
        var url = note.info.url
        if (url.includes('=')) urlId = url.slice(url.indexOf('=') + 1, url.length)
        else (urlId = url.slice(url.indexOf('e') + 2, url.length))
        var src = "https://www.youtube.com/embed/" + urlId
        this.setState({ src: src })
    }

    setPinned = () => {
        if (!this.props.note.isPinned) this.setState({ className: 'note note-vid' })
        else (this.setState({ className: 'note note-vid pinned' }))
    }

    render() {
        const divStyle = { backgroundColor: this.props.note.style.backgroundColor }
        const { className, src } = this.state
        const { note, loadNotes } = this.props
        if (!src) return <div>Loading...</div>
        return (
            <div className={className} style={divStyle}>
                <h2>{note.info.title}</h2>
                <iframe width="560" height="315" src={src}
                    title="YouTube video player" allow="fullscreen"></iframe>
                <NoteOptions noteId={note.id} loadNotes={loadNotes} setPinned={this.setPinned} />
            </div>
        )
    }
}