import {NoteOptions} from './NoteOptions.jsx'

export class NoteImg extends React.Component {

    state = {
        className: 'note note-img glass',
    }

    componentDidMount() {
        this.setPinned()
    }

    setPinned = () => {
        if (!this.props.note.isPinned) this.setState({className: 'note note-img'})
        else (this.setState({className: 'note note-img pinned'}))
    }

    render(){
    const divStyle = {backgroundColor: this.props.note.style.backgroundColor}
    const {className} = this.state
    const {note, loadNotes} = this.props 
    return (
        <div className={className} style={divStyle}>
            <h2>{note.info.title}</h2>
            <img src={note.info.url}></img>
            <NoteOptions noteId={note.id} loadNotes={loadNotes} setPinned={this.setPinned}/>
        </div>
    )
    }
}