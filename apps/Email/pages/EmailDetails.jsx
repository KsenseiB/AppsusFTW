const { NavLink, Link } = ReactRouterDOM;
import { emailService } from '../services/email-service.js';

export class EmailDetails extends React.Component {
	state = {
		mail: null
	}
	componentDidMount() {
		this.loadMail();
	}

	loadMail = () => {
		const id = this.props.match.params.mailId;
		emailService.getEmailById(id).then(mail => {
			if (!mail) return this.props.history.push('/')
			this.setState({ mail });
		})
	}

	onDeleteMail = () => {
		const id = this.props.match.params.mailId;
		emailService.deleteEmail(id);
	}

	onMarkUnread = () => {
		const id = this.props.match.params.mailId;
		emailService.unReadEmail(id);
	}

	render() {
		const { mail } = this.state;
		if (!mail) return <h1>Loading...</h1>;
		return (
			<section className="full-page-email glass">

				<div className="mail-actions flex">
					<NavLink to="/mail" className="email-link" activeClassName="activeEmail">
						<i className="fas fa-arrow-left"></i>
					</NavLink>
					<NavLink to="/mail" onClick={() => { this.onDeleteMail() }}
						className="email-link" activeClassName="activeEmail">
						<i className="fas fa-trash"></i>
					</NavLink>
					{/* <NavLink to="/mail" onClick={ () => { this.onMarkUnread() } }><i className="fas fa-envelope"></i></NavLink> */}
				</div>

				<div className="email-content">
					<div className="mail-info flex">
						<h4>{mail.subject}</h4>
						<h5>{mail.sentAt}</h5>
					</div>
					<h5>From: {mail.sender}</h5>
					<div className="line"></div>
					<p >{mail.body}</p>

				</div>

			</section>
		)
	}



}