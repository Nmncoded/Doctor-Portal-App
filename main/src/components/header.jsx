import React from 'react'; 
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { updateLoginStatus } from '../store/action';

function Header(props) {
        let {isLoggedin,dispatch} = props;
        return (
            <header className='container'>
                <section className='header flex-between-center' >
                <div>
                    <NavLink to='/'  className='logo' >Doctor's Portal</NavLink>
                </div>
                {
                    isLoggedin ?
                    <AuthorisedUser dispatch={dispatch} />
                    
                    : 
                    <NoAuthorisedUser />
                }

                </section>
            </header>
        )
}

function AuthorisedUser(props){

    const handleLogout = () => {
        props.dispatch(updateLoginStatus(false))
    }

    return(
        <div className='nav-menu' >
            <button className='button-shrink padding'  onClick={handleLogout} >Logout</button>
        </div>
    )
}
function NoAuthorisedUser(props){
    return(
        <div className='nav-menu'  >
            <NavLink  activeClassName='nav-active'  className='nav-links' to='/signup' >Sign up</NavLink>
            <NavLink  activeClassName='nav-active'  className='nav-links' to='/' exact >Sign In</NavLink>
        </div>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Header);