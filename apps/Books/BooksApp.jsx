const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BooksHome } from './pages/BooksHome.jsx'

export function BooksApp() {
    return (<div>
        <h1>BooksApp</h1>
        <BooksHome />
    </div>
    )
}