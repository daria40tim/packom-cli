import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../actions/userAction';
import logo from '../pic/logo.svg' 



const  Header = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin 

  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    
    window.location.reload()
    //dispatch(logout)
  }

  const user = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  //render() {
    return( 
      <div className="navigator">
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand">  
      <img className="mb-4" src={logo} alt="" height="80"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/tech">Технические задания</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/commertial'>Коммерческие предложения</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tenders">Тендерные решения</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to='/orgs'>Организации</Link>
          </li>
           <li className="nav-item ">
           <Link className="nav-link " to={`/orgs/link/${user.o_id}`}>Моя организация</Link>
         </li> 
  
           <li className="nav-item ">
           <button className="btn sort_btn" onClick={logoutHandler}>Выйти</button>
         </li> 
        </ul>
      </div>
    </div>
  </nav>
  </div>)
  }
//}

export default Header;
