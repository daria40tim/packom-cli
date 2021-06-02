import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { register } from '../actions/userAction';
import logo from '../pic/logo.svg' 

const SignUp = ({location}) => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [admin_pwd, setAdmin] = useState('')
    const [group_id, setGroup] = useState(0)

    const dispatch = useDispatch()
    

    const onClick = (e) => {
        e.preventDefault();

        dispatch(register(email, name, password, group_id))
    }

 

    return( 
        <div>
        <form className="form-signin">
        <img className="mb-4" src={logo} alt="" width="200" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Регистрация новой организации</h1>
        
        <input className="form-control" placeholder="Логин" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        
        <input className="form-control" placeholder="Название" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        
        
        <input className="form-control" placeholder="Пароль" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

        <input  className="form-control" placeholder="Пароль администратора" value={admin_pwd} onChange={(e)=>{setAdmin(e.target.value)}} />

        <select class="form-control custom-select" id="inputGroupSelect01" onChange={(e)=>{setGroup(e.target.value)}}  value={group_id}>
            <option selected>Группа</option>
            <option value="1">Клиент</option>
            <option value="2">Поставщик</option>
            <option value="3">Клиент, поставщик</option>
        </select>
        
        <button className="btn btn-lg btn-primary btn-block" onClick={onClick}>Зарегистрировать</button>
      </form>
      </div>)
  }

export default SignUp;