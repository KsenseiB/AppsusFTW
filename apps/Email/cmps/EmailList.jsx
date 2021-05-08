import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onDeleteEmail, EmailDetails }) {

    return (
        <section className="email-list mailbox-main flex-col">
            {emails.length === 0 && <h3>Inbox is empty, find some friends</h3>}

            {emails.map((email) => (
                <EmailPreview email={email} key={email.id} onDeleteEmail={onDeleteEmail} />
            ))}

        </section>
    )
}