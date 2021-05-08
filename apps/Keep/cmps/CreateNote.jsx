import { InputType } from './InputType.jsx'
export class CreateNote extends React.Component {

    state = {
        type: '',
    }
    
    changeType = (type) => {
        this.setState({ type })
    }
    
    
    render() {
        const { type } = this.state
        return (
            <div className="create-note">
                <InputType type={type} loadNotes={this.props.loadNotes} changeType={this.changeType}/>
                <button className="btn btn-type" onClick={() => this.changeType('txt')}><i className="fas fa-font"></i></button>
                <button className="btn btn-type" onClick={() => this.changeType('img')}><i className="fas fa-image"></i></button>
                <button className="btn btn-type" onClick={() => this.changeType('todo')}><i className="fas fa-list-ul"></i></button>
                <button className="btn btn-type" onClick={() => this.changeType('vid')}><i className="fab fa-youtube"></i></button>
            </div>
        )
    }
}