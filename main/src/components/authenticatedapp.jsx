import {Route,Switch} from 'react-router-dom';
import AddNewPatient from './addnewpatient';
import ErrorPage from './errorpage';
import Home from './home';
import PatientDetails from './patientdetails';


function AuthenticatedApp(props){
    console.log("authenticatedapp")
    return(
        <Switch>
            <Route path='/' exact >
                <Home />
            </Route>
            <Route path='/add-new-patient' component={AddNewPatient}  exact />
            <Route path='/patient-details/:id' component={PatientDetails} exact />
            <Route path='*' >
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default AuthenticatedApp;