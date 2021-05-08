const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { BooksApp } from './apps/Books/BooksApp.jsx'
import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { EmailApp } from './apps/Email/EmailApp.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return (
        <Router>
            <AppHeader />
            <main>
                <Switch>
                    {/* <Route component={MailDetails} path="/mail/:mailId" /> */}
                    <Route component={EmailApp} path="/mail" />
                    <Route component={KeepApp} path="/keep" />
                    <Route component={BooksApp} path="/book" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
        </Router>
    )
}