export class BookFilter extends React.Component {

    state = {
        filterBy:{
            year: 1999,
            lang: '',
            title: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({filterBy:{...this.state.filterBy, [field]: value}}, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const {year, lang, title} = this.state.filterBy
        return (
            <article>
                <label htmlFor="byYear">By Year</label>
                <input type="number" id="byYear" name="year" value={year} onChange={this.handleChange}/>

                <label htmlFor="byLang">By Language</label>
                <input type="text" id="byLang" name="lang" value={lang} onChange={this.handleChange}/>

                <label htmlFor="bytitle">By Title</label>
                <input type="text" id="bytitle" name="title" value={title} onChange={this.handleChange}/>

            </article>
        )
    }
}