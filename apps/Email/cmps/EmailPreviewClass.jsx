import {emailService} from '../services/email-service.js';

export class EmailPreview extends React.Component {
  // state = {
  //   email: null
  // }
  componentDidMount() {
    // console.log(this.props.email)
    // this.loadEmail()
  }

  onDeleteEmail = () => {
    emailService.deleteEmail(this.state.email.id)
  }
  
  render() {
    const { email } = this.props.email;
    console.log(email)
    if (!email) return <div>Loading mailbox...</div>
    // const previewClass = (email.isRead) ? 'unread' : '';
    // add to li class name  + previewClass
    return (
      <li className={'flex list-item email-preview '}>
        <p>sender - {email.sender}</p>
        <p>subject - {email.subject}</p>
        <div className="timestamp"><p>sentAt - {email.sentAt}</p>
          <button className="remove-btn" onClick={this.onDeleteEmail}>Delete</button>
        </div>
       {/* <Link to={`/email/${email.id}/${email.sender}`}>Details</Link> */}
      </li>
    )
  }
}



