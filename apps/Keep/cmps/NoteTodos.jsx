import { keepService } from '../services/keep-service.js'
import { NoteOptions } from './NoteOptions.jsx'
export class NoteTodos extends React.Component {

    state = {
        taskTxt: '',
        className: 'note note-todo'
    }

    componentDidMount() {
        this.setPinned()
    }

    setPinned = () => {
        if (!this.props.note.isPinned) this.setState({ className: 'note note-todo' })
        else (this.setState({ className: 'note note-todo pinned' }))
    }

    markCheck = (ev) => {
        if (ev.target.className === "unchecked") ev.target.className = "checked"
        else (ev.target.className = "unchecked")
    }

    onAddTask = (ev) => {
        ev.preventDefault()
        if (!this.state.taskTxt) return
        keepService.addTask(this.props.note.id, this.state.taskTxt)
        this.props.loadNotes()
        this.setState({ taskTxt: '' })
    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState({ taskTxt: value })
    }

    onRemoveTask = (todoId) => {
        keepService.removeTask(todoId, this.props.note.id)
        this.props.loadNotes()
    }

    render() {
        const divStyle = { backgroundColor: this.props.note.style.backgroundColor }
        const { todos, title } = this.props.note.info
        const { taskPlaceholder, taskTxt, className } = this.state
        return (<div className={className} style={divStyle}>
            <h2>{title}</h2>
            <ul>
                {todos.map((todo) => (
                    <li className="unchecked" onClick={this.markCheck} key={todo.id}>
                        {todo.txt}
                        <button onClick={() => this.onRemoveTask(todo.id)}><i className="todo-trash fas fa-trash-alt"></i></button>
                    </li>

                ))}
                <form className="add-task" onSubmit={this.onAddTask}>
                    <input type="text" value={taskTxt} onChange={this.handleChange} placeholder={taskPlaceholder} />
                    <button>Add new task</button>
                </form>
            </ul>
            <NoteOptions noteId={this.props.note.id} loadNotes={this.props.loadNotes} setPinned={this.setPinned} />
        </div>)
    }
}