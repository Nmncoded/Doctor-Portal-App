import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
// import store from '../store/store';
import AuthenticatedApp from './authenticatedapp';
import Header from './header';
import Loader from './loader';
import UnAuthenticatedApp from './unauthenticatedapp';
import { connect } from 'react-redux';

function App(props){
  console.log(props);
  let {isLoggedin, isVerifying}= props;
    // let [user,setUser] = useState(null);
    // let [isLoggedin,setIsLoggedIn] = useState(false);
    // let [isVerifying,setIsVerifying] = useState(true);
    
    useEffect(() => {
        
        // let key = localStorage[url.localStorageKey];
        // let {userVerifyURL} = url;
        // if(key){
        //     fetch(userVerifyURL,{
        //         method: 'GET',
        //         headers:{
        //             authorization : `Token ${key}`,
        //         }
        //     }).then(res => {
        //         if(!res.ok){
        //             return res.json().then(({errors}) => {
        //                 return Promise.reject(errors);
        //             });
        //         }else{
        //             return res.json()
        //         }
        //     })
        //     .then(({user}) => {
                
        //         updateUser(user);
        //     })
        //     .catch(errors => console.log(errors))
        // }else {
        //     setIsVerifying(isVerifying = false);
        // }
    },[])
    // const updateUser = (user) => {
    //     // this.setState({isLoggedin:true,user,isVerifying:false});
    //     setIsLoggedIn(isLoggedin = true);
    //     setUser(user);
    //     setIsVerifying(isVerifying = false);
    //     localStorage.setItem( url.localStorageKey, user.token);
    // }
    // const handleLogout = () => {
    //     // console.log("logout")
    //     localStorage.clear();
    //     setIsLoggedIn(isLoggedin = false)
    //     // this.setState({isLoggedin:false})
    // }
        // if(isVerifying){
        //     return <Loader />
        // }
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
