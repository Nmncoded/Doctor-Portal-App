import {Route,Switch} from 'react-router-dom';
// import Home from './home.js';
// import SingleArticle from './singleArticle';
import ErrorPage from './errorpage';
import Signup from './signup'
import Signin from './signin'

function UnAuthenticatedApp(props){
    return (
        <Switch>
            <Route path='/' exact >
                <Signin />
            </Route>
            <Route path='/signup'exact >
                <Signup   />
            </Route>
            <Route path='*' >
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default UnAuthenticatedApp;