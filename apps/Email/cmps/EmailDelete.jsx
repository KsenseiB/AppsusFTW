import { emailService } from '../services/email-service.js';

export class EmailDelete extends React.Component {
    state = {
        emailId: null
    }

    onDeleteEmail = () => {
        this.setState({ emailId: this.props.emailId })
        emailService.deleteEmail(this.props.emailId)

        console.log('this.props.emailId', this.props.emailId);
        console.log('this.props', this.props);
    }

    render() {
        return (
            <button onClick={this.onDeleteEmail}>Delete</button>
        )
    }
}

