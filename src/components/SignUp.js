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
    const [group_id, setGroup] = useState(0)
    const [admin_pwd, setAdmin] = useState('')
    const [country, setCountry] = useState('')

    const dispatch = useDispatch()

    const admin = '35WWzvyj6a0F8VK'
    

    const onClick = (e) => {
        e.preventDefault();
        if (admin_pwd != admin ){
            alert('Пароль админа не введен или неверен')
            return
        }
        if (email == "") {
            alert('Введите логин')
            return
        }
        if (name == "") {
            alert('Введите название организации')
            return
        }
        if (password == "") {
            alert('Поле пароля должно быть заполнено')
            return
        }
        if (group_id == 0) {
            alert('Группа не выбрана')
            return
        }
        if (country == "") {
            alert('Страна не выбрана')
            return
        }
        dispatch(register(email, name, password, group_id, country))
        alert('Новая организация успешно зарегистрирована')
        setName('')
        setPassword("")
        setAdmin("")
        setEmail("")
        setCountry("")
        setGroup(0)
    }

 

    return( 
        <div>
        <form className="form-signin">
        <img className="mb-4" src={logo} alt="" width="200" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Регистрация новой организации</h1>
        
        <label>Логин</label>
        <input className="form-control" placeholder="Логин" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Название</label>
        <input className="form-control" placeholder="Название" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        
        <label>Пароль</label>
        <input className="form-control" placeholder="Пароль" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        
        <label>Страна</label>
        <input className="form-control" placeholder="Страна" value={country} onChange={(e)=>{setCountry(e.target.value)}} />
        
        <label>Пароль администратора</label>
        <input type="password" className="form-control" placeholder="Пароль администратора" value={admin_pwd} onChange={(e)=>{setAdmin(e.target.value)}} />
        <label>Группа</label>
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