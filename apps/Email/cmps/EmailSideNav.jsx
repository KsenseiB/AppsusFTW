
export function EmailSideNav() {
    return (
       <nav className="email-nav flex-col">
           <button className="email-compose-btn">+ Compose</button>
           <a href="">Inbox
           <span className="unread-count">num of unread mails</span></a>
           <a href="">Sent Mail</a>
           <a href="">Spam</a>
           <a href="">Deleted</a>
       </nav>
    )
}