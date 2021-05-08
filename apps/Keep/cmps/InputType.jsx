import { keepService } from '../services/keep-service.js'

export class InputType extends React.Component {

    state = {
        noteTxt: '',
        noteTitle: '',
        txtPlaceholder: 'enter your text here',
        imgPlaceholder: 'enter the image URL here',
        vidPlaceholder: 'enter the youtube URL here',
        todoPlaceholder: 'enter your first task here',
        titlePlaceholder: 'enter your note\'s title here(optional)'
    }

    handleChange = (ev) => {
        const value = ev.target.value
        const Key = ev.target.name
        this.setState({ [Key]: value })
    }

    onSaveNote = () => {
        if (!this.state.noteTxt) return
        keepService.saveNote(this.state.noteTxt, this.state.noteTitle, this.props.type)
        this.props.loadNotes()
        this.setState({ noteTxt: '' , noteTitle: ''})
        this.onCloseModal()
    }

    onCloseModal = () => {
        this.setState({ noteTxt: '' , noteTitle: ''})
        this.props.changeType('')
    }


    render() {
        const
            { noteTxt, txtPlaceholder, imgPlaceholder, vidPlaceholder,
                todoPlaceholder, titlePlaceholder, noteTitle } = this.state
        switch (this.props.type) {
            case 'txt':
                return (
                    <div className="input-modal">
                        <input type="text" value={noteTitle} name="noteTitle" onChange={this.handleChange} placeholder={titlePlaceholder} />
                        <input type="text" value={noteTxt} name="noteTxt" onChange={this.handleChange} placeholder={txtPlaceholder} />
                        <button onClick={this.onSaveNote}>Add Note</button>
                        <button onClick={this.onCloseModal}>X</button>
                    </div>
                )
            case 'img':
                return (
                    <div className="input-modal">
                        <input type="text" value={noteTitle} name="noteTitle" onChange={this.handleChange} placeholder={titlePlaceholder} />
                        <input type="text" value={noteTxt} name="noteTxt" onChange={this.handleChange} placeholder={imgPlaceholder} />
                        <button onClick={this.onSaveNote}>Add Note</button>
                        <button onClick={this.onCloseModal}>X</button>
                    </div>
                )
            case 'vid':
                return (
                    <div className="input-modal">
                        <input type="text" value={noteTitle} name="noteTitle" onChange={this.handleChange} placeholder={titlePlaceholder} />
                        <input type="text" value={noteTxt} name="noteTxt" onChange={this.handleChange} placeholder={vidPlaceholder} />
                        <button onClick={this.onSaveNote}>Add Note</button>
                        <button onClick={this.onCloseModal}>X</button>
                    </div>
                )
            case 'todo':
                return (
                    <div className="input-modal">
                        <input type="text" value={noteTitle} name="noteTitle" onChange={this.handleChange} placeholder={titlePlaceholder} />
                        <input type="text" value={noteTxt} name="noteTxt" onChange={this.handleChange} placeholder={todoPlaceholder} />
                        <button onClick={this.onSaveNote}>Add Note</button>
                        <button onClick={this.onCloseModal}>X</button>
                    </div>
                )
            default:
                return (<p></p>)
        }
    }
}