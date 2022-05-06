import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedApp from './authenticatedapp';
import Header from './header';
import Loader from './loader';
import UnAuthenticatedApp from './unauthenticatedapp';
import { connect } from 'react-redux';
import { updateLoginStatus, updatePatientsData } from '../store/action';

function App(props){
  let [isVerifying,setIsVerifying] = useState(true);
  let {isLoggedin, dispatch,allPatientsData}= props;

    useEffect(() => {
      if(allPatientsData){
        localStorage.setItem("data", JSON.stringify(allPatientsData))
      }
    },[allPatientsData])
    
    useEffect(() => {
      let status = JSON.parse(localStorage.getItem("status"));

      if(!allPatientsData || allPatientsData.length === 0){
        let data = JSON.parse(localStorage.getItem("data"));
        dispatch(updatePatientsData(data));
      }

      setTimeout(() => {
        dispatch(updateLoginStatus(status));
        setIsVerifying(false);
      },1000)
    },[])
        if(isVerifying){
            return <Loader />
        }
        return (
          <>
            <Router>
              <Header />
                {
                    isLoggedin ?
                    <AuthenticatedApp  /> : 
                    <UnAuthenticatedApp   />
                }
            </Router>
          </>
        )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(App);
