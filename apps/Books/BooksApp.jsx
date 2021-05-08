const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BooksHome } from './pages/BooksHome.jsx'

export function BooksApp() {
    return (<div>
        <BooksHome />
    </div>
    )
}