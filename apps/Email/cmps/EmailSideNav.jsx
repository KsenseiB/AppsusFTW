const { Link } = ReactRouterDOM
import { EmailStatus } from './EmailStatus.jsx'
export function EmailSideNav() {
    return (
        <nav className="email-nav glass">
            <div className="email-nav-actions flex-col">
                <Link to={ `/mail/compose` }><button className="btn email-compose-btn"><i className="fas fa-pen"></i> Compose</button></Link>
                <input className="txt-input" type="search" placeholder="Search"></input>
            </div>
            <ul className="email-nav-list clean-list">
                <li href=""><i className="fas fa-inbox"></i> Inbox
                <span className="unread-count"> <EmailStatus /></span>
                </li>
                <li href=""><i className="fas fa-paper-plane"></i> Sent</li>
                <li href=""><i className="fas fa-exclamation-triangle"></i> Spam</li>
                <li href=""><i className="fas fa-trash"></i> Bin</li>
            </ul>
        </nav>
    )
}