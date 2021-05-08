export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            text: '',
            submit: '',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.type
        const value = field === 'submit' ? ev.target.name : ev.target.value
        if (field === 'submit' && value === 'all') {
            this.setState({ filterBy: { text: '', submit: '' } }, () => {
                this.props.onSetFilter(this.state.filterBy)
            })
        } else {
            this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
                this.props.onSetFilter(this.state.filterBy)
            })

        }
    }


    render() {
        const { text } = this.state.filterBy
        return (
            <div className="note-filter">
                <h4>Filter Notes By</h4>
                <label htmlFor="search">Search Note</label>
                <input type="text" value={text} onChange={this.handleChange} />
                <button name="NoteText" onClick={this.handleChange}>Text</button>
                <button name="NoteImg" onClick={this.handleChange}>Image</button>
                <button name="NoteTodos" onClick={this.handleChange}>To-Do</button>
                <button name="NoteVid" onClick={this.handleChange}>Video</button>
                <button name="all" onClick={this.handleChange}>Reset Filter</button>
            </div>
        )
    }
}