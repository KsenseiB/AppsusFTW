import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onDeleteEmail }) {


    return (
        <section className="email-list flex-col">
            <ul className="glass clean-list">

                { emails.length === 0 && <h3>Inbox is empty, find some friends</h3> }

                { emails.map((email) => (
                    <EmailPreview email={ email } key={ email.id } onDeleteEmail={ onDeleteEmail } />
                )) }

            </ul>
        </section>
    )
}