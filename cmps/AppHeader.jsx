const { NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {
    render() {
        // const svgHeader = <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        //     <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:red;"></path>
        // </svg>;

        return (
            <header className="app-header">
                {/* <div className="header-bg"> </div> */ }
                <h1 className="logo">One app to rule them all.</h1>
                <div className="nav">
                    <NavLink exact to="/" className="nav-link" activeClassName="activeNav" >Home</NavLink>
                    <NavLink to="/book" className="nav-link" activeClassName="activeNav">Books</NavLink>
                    <NavLink to="/mail" className="nav-link" activeClassName="activeNav">Mail</NavLink>
                    <NavLink to="/keep" className="nav-link" activeClassName="activeNav">Keep</NavLink>
                </div>
            </header>

        )
    }

}