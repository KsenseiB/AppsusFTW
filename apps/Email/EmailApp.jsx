const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { emailService } from './services/email-service.js'
import { EmailSideNav } from './cmps/EmailSideNav.jsx'
import { EmailList } from './cmps/EmailList.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null
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

    setFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails } = this.state;
        if (!emails) return (<div className="loading">
            <span>Loading</span>
        </div>)
        console.log('emails', emails);
        return (
            <section className="mailbox-container flex">
                <EmailSideNav onSetFilter={ this.setFilter } />
                <EmailList loadEmail={ this.loadEmails } emails={ emails } onDeleteEmail={ this.deleteEmail } />
            </section >
        )
    }
}
