import {Route,Switch} from 'react-router-dom';
import ErrorPage from './errorpage';
import Signup from './signup'
import Signin from './signin'

function UnAuthenticatedApp(props){
    return (
        <Switch>
            <Route path='/' exact  component={Signin} />
            <Route path='/signup'exact component={Signup} />
            <Route path='*' >
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default UnAuthenticatedApp;