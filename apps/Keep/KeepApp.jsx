import { keepService } from './services/keep-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { CreateNote } from './cmps/CreateNote.jsx'
import { NoteFilter } from './cmps/NoteFilter.jsx'


export class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        isClicked: null
    }

    componentDidMount() {
        keepService.loadSaved()
        this.loadNotes()
    }

    loadNotes = () => {
        const {filterBy, isClicked} = this.state
        keepService.query(filterBy, isClicked).then((notes) => {
            this.setState({ notes })
        })
        keepService.saveNotes()
    }

    onSetFilter = (filterBy, isClicked) => {
        this.setState({filterBy, isClicked}, this.loadNotes)
    }


    render() {
        const { notes } = this.state
        if (!notes) return (
            <div className="loading">
                <span>Loading</span>
            </div>
            )
        return (
            <div className="keep-container">
                <main className="keep-main flex-col">
                    <NoteFilter notes={notes} loadNotes={this.loadNotes} onSetFilter={this.onSetFilter}/>
                    <CreateNote loadNotes={this.loadNotes} />
                    <NoteList notes={notes} loadNotes={this.loadNotes} />
                </main>
            </div >
        )
    }
}
