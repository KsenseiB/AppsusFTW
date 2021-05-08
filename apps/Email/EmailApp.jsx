const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM;
import { emailService } from './services/email-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx'
import { EmailSideNav } from './cmps/EmailSideNav.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query().then((emails) => {
            this.setState({ emails })
        })
    }

    deleteEmail = (emailId) => {
        emailService.deleteEmail(emailId)
            .then(() => this.loadEmails())
    }
    // onOpenEmail={this.openEmail}
    // openEmail =(emailId) =>{
    //     //link to open email
    //     console.log('need Link to new page')
    // }
    render() {
        const { emails } = this.state
        if (!emails) return (<div className="loading">
            <span>Loading</span>
        </div>)
        console.log('emails', emails);
        return (
            <section className="mailbox-container flex">
                <div className="loading">
                    <span>Loading</span>
                </div>
                <EmailSideNav />
                <EmailList emails={emails} onDeleteEmail={this.deleteEmail} />
                <EmailCompose />
            </section >
        )
    }
}
