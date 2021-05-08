const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { JoomlaCKEditor } from './cmps/TextToolbar.jsx'
import { BooksApp } from './apps/Books/BooksApp.jsx'
import { BookDetails } from './apps/Books/pages/BookDetails.jsx'
import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { EmailApp } from './apps/Email/EmailApp.jsx'
import { EmailDetails } from './apps/Email/pages/EmailDetails.jsx'
import { EmailCompose } from './apps/Email/pages/EmailCompose.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return (
        <Router>
            <AppHeader />
            <main className="main">
                <Switch >
                <Route component={ EmailCompose } path="/mail/compose" />
                    <Route component={ EmailDetails } path="/mail/:mailId" />
                    <Route component={ EmailApp } path="/mail" />
                    <Route component={ KeepApp } path="/keep" />
                    <Route component={BookDetails} path="/book/:bookId" />
                    <Route component={ BooksApp } path="/book" />
                    <Route component={ Home } path="/" />
                </Switch>
            </main>
        </Router>
    )
}