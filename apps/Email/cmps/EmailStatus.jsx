import { emailService } from '../services/email-service.js'

export class EmailStatus extends React.Component {
    // state = {
    //     //count how many are isRead true
    //     unread: null
    // }
    // componentDidMount() { }
    render() {
        const unreadCount = emailService.countUnread();
        return (
            <span className="unread-count">{ unreadCount }</span>
        )
    }
}
