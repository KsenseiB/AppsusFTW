// const { Link } = ReactRouterDOM

export function EmailDetails({ email, onDeleteEmail, onOpenEmail }){
    return (
        <section className="email-details">
            <h2>{email.subject}</h2>
            <article className="email-content">
                {email.body}
            </article>
            <div className="actions">
            <button onClick={() => onDeleteEmail(email.id)}>Delete</button>
            </div>
        </section>
    )
} 

