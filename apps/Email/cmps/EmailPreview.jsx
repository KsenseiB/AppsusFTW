const { NavLink, withRouter } = ReactRouterDOM;
const { Link } = ReactRouterDOM;
import { emailService } from "../services/email-service";

export function EmailPreview({ email, onDeleteEmail }) {

    function longTxt() {
        if (email.subject.length > 10) return email.subject.substring(0, 50) + '...';
        else return email.subject;
    }

    function onMarkIsRead() {
        emailService.readEmail(email);
    }

    const previewClass = (!email.isRead) ? 'unread' : '';

    return (
        <React.Fragment>
            <NavLink to={`/mail/${email.id}`} onClick={() => onMarkIsRead()} className="email-link" activeClassName="activeEmail">
                <li className={'flex email-list-item email-preview ' + previewClass} >
                    <div className="flex preview-txt">
                        <p className={previewClass}>{email.sender} | </p>
                        <p className={previewClass}>{longTxt()}</p>
                    </div>
                    <div className="timestamp"><span>{email.sentAt}</span>
                    </div>
                </li>
            </NavLink>
            {/* <button onClick={() => onDeleteEmail(email.id)}><i className="fas fa-trash btn"></i></button> */}
        </React.Fragment>
    )
}
