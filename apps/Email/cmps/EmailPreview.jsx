import { emailService } from "../services/email-service";

const { Link } = ReactRouterDOM
// import { showUserMsg } from '../../../services/event-bus-service.js'

export function EmailPreview({ email, onDeleteEmail }) {

    function longTxt() {
        if (email.subject.length > 10) return email.subject.substring(0, 10) + '...';
        else return email.subject;
    }
    //should this be on main emailApp class component?
    function onMarkIsRead() {
        emailService.readEmail(email);
    }

    //onClick={ () => toggleIsRead(email.id)

    const previewClass = (!email.isRead) ? 'unread' : '';

    return (
        <React.Fragment>
        <Link to={ `/mail/${ email.id }` } onClick={ () => onMarkIsRead() }>
            <li className={ 'flex email-list-item email-preview ' + previewClass } >

                <p className={ previewClass }>{ email.sender }</p>
                <p className={ previewClass }>{ longTxt() }</p>
                <div className="timestamp"><span>{ email.sentAt }</span>
                </div>
            </li>
        </Link>
                    <button onClick={ () => onDeleteEmail(email.id) }><i className="fas fa-trash btn"></i></button>
                    </React.Fragment>
    )
}



{/* <tr className={'flex list-item email-preview ' + previewClass} >
        <td>{email.sender}</td>
        <td>{email.subject}</td>
        <td>{email.sentAt}</td>
        <td><button onClick={() => onDeleteEmail(email.id)}>X</button></td>
    </tr> */}