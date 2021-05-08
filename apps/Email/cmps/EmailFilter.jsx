export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            isRead: false
        }
    }
    inputRef = React.createRef();

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus()
      }

      handleChange = (ev) => {
        const input = ev.target.name;
        const value = ev.target.value;
        this.setState(({ filterBy }) => ({
          filterBy: { ...filterBy, [input]: value }
        }), () => {
          this.props.onSetFilter(this.state.filterBy)
        })
      }
    
      onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
      }
    
}