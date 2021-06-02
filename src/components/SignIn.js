import React, { Component, useEffect, useState } from 'react';
import '../styles/login.css'
import logo from '../pic/logo.svg' 
import {login} from '../actions/userAction'
import {useDispatch, useSelector} from 'react-redux'
import Message from './Message';
import Loader from './Loader';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const SignIn = (location) =>  {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    /*useEffect(() => {
        if(userInfo){
            console.log("1")
        }
    }, [ userInfo, redirect])*/

    const submitHandler = (e) => {
        const info = {email, password} 
        dispatch(login(email, password))
        history.push(`/orgs/`)
        }

    const onClick = (e) => {
        e.preventDefault();
        }




  //render() {

    return( 
        <div>
        <form onSubmit={submitHandler} className="form-signin">
        <img className="mb-4" src={logo} alt="" width="200" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Войдите в систему</h1>

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}

        <label className="sr-only">Email address</label>
        <input className="form-control" placeholder="Логин" onChange={(e)=>setEmail(e.target.value)}/>
        <label className="sr-only">Password</label>
        <input type="password" className="form-control" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submitHandler}>
            <Link to='/orgs'>Войти</Link>
            </button>
        <p className="mt-5 mb-3 text-muted">Для получения логина и пароля обратитесь на почтовый ящик mail4reserve@gmail.com</p>
      </form>
      </div>)
  }
//}

export default SignIn;
