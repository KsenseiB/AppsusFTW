// import {EmailDetails} from './EmailDetails.jsx'

export function EmailPreview({ email, onDeleteEmail, onOpenEmail }) {
    const previewClass = (email.isRead) ? 'unread' : '';
    return (
        <li className={'flex list-item email-preview ' + previewClass} >
            <p>sender - {email.sender}</p>
            <p>subject - {email.subject}</p>
            <div className="timestamp"><p>sentAt {email.sentAt}</p>
            </div>
            <button onClick={() => onDeleteEmail(email.id)}>X</button>
            {/* <Link to={`/email/${email.id}/${email.sender}`}>Details</Link> */}
        </li>
    )
}