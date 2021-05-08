const { Link } = ReactRouterDOM;
import { emailService } from './email/emailService.jsx';

export class EmailCompose extends React.Component {
    state = {
        mail: {
            recipient: null,
            subject: '',
            body: '',
        }
    }

    handleChange = (ev) => {
        const input = ev.target.name;
        const value = ev.target.value;
        this.setState({ mail: { ...this.state.mail, [ input ]: value } });
    }
    onSendEmail = () => {
        const { recipient, subject, body } = this.state.mail;
        emailService.addEmail(recipient, subject, body);
        console.log('mail sent successfully');
    }

    render() {
        return (
            <div className="compose-email">
                <h3>New Mail</h3>
                <form className="mail-form flex-col glass">
                    <input type="email" name="recipient" id="recipient"
                        placeholder="Recipients" onChange={ this.handleChange } required />

                    <input type="text" name="subject" id="subject"
                        placeholder="Subject..." onChange={ this.handleChange } required />

                    <joomla-ck-editor>
                        <textarea name="content" id="editor" placeholder="Email content.." ></textarea>
                    </joomla-ck-editor>


                    <Link to="/mail" onClick={ () => {
                        this.onSendEmail()
                    } }><input className="btn email-compose-btn" type="submit" value="Send"></input></Link>
                </form>
            </div>
        )
    }
}

// export function EmailCompose() {
//     return (
//         <section className="compose-email">
//             <h3>New Message</h3>
//             <form action="" className="flex-col">
//                 <input type="text" name="recipient" id="recipient" placeholder="Recipients" />
//                 <input type="text" name="subject" id="subject" placeholder="Subject..." />
//                 <input type="textarea" name="subject" id="subject" placeholder="Email content.." />
//                 <button type="submit">Send</button>
//             </form>
//         </section>
//     )
// }

