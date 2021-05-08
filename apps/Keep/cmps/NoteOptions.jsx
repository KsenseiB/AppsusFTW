import {keepService} from '../services/keep-service.js'

export class NoteOptions extends React.Component {
    
    onDelete = () => {
        keepService.deleteNote(this.props.noteId);
        this.props.loadNotes()
    }

    onChangeColor = (ev) => {
        keepService.changeColor(this.props.noteId, ev.target.value)
        this.props.loadNotes()
    }

    onRevertColor = () => {
        keepService.revertColor(this.props.noteId)
        this.props.loadNotes()
    }

    onTogglePin = () => {
        keepService.pinNote(this.props.noteId)
        this.props.setPinned()
        this.props.loadNotes()
    }

    render() {
        return(
            <div className="note-options">
                <button className="btn btn-opt" onClick={this.onDelete}><i className="fas fa-trash-alt"></i></button>
                <input className="input-color" type="color" value="#ebb2e2" onChange={this.onChangeColor} label="hi"></input>
                <button className="btn btn-opt revert" onClick={this.onRevertColor}><i className="fas fa-palette"></i></button>
                <button className="btn btn-opt" onClick={this.onTogglePin}><i className="fas fa-thumbtack"></i></button>
            </div>
        )
    }
}
