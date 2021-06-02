import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {listOrgDetails, listOrgAdd} from '../actions/orgAction'
import Loader from './Loader';
import Message from './Message';
let data = 
    {"o_id": "0", 
      "name": "ЗАО МИФ Мебель", 
      "group":"Поставщик", 
      "spec": "Металлоконтейнеры", 
      "country": "Россия", 
      "site": "info.ru", 
      "phone": "+7(495)545-42-59", 
      "email": "sales@mif-mebel.ru",
      "adress": "г. Москва ул. Автозаводская 23, стр. 82",
      "info":`С 2008 года нами было полностью освоено производство многооборотной металической тары для транспортировки кузовных элементов автомобилей и их различных узлов. По настоящее время мы выпустили более двадцати тысяч единиц подобной тары.
      Наша тара может оснащаться различными пластиковыми и деревянными элементами, обработанными с помощью 3D-технологий, а также тканевыми вставками. Специально для Вас мы предлагаем спектр услуг: порошковая окраска металлоконструкций (широкая цветовая гамма), гибка круглых и профильных труб, гибка листового металла, резка, холодная штамповка изделий из металла, 3D-фрезеровка, пошив чехлов и тентов и многое другое. Применение новейших технологий и современного оборудования позволило нам добиться высокого качества продукции."
      `, 
      "orgs": [
        {"o_id": "0", 
    "name": "ЗАО МИФ Мебель", 
    "group": "Поставщик", 
    "spec": "Металлоконтейнеры", 
    "country": "Россия", 
    "site": "info.ru", 
    "phone": "+7(495)545-42-59", 
    "email": "sales@mif-mebel.ru",
    "adress": "г. Москва ул. Автозаводская 23, стр. 82",
    "info":`С 2008 года нами было полностью освоено производство многооборотной металической тары для транспортировки кузовных элементов автомобилей и их различных узлов. По настоящее время мы выпустили более двадцати тысяч единиц подобной тары.
    Наша тара может оснащаться различными пластиковыми и деревянными элементами, обработанными с помощью 3D-технологий, а также тканевыми вставками. Специально для Вас мы предлагаем спектр услуг: порошковая окраска металлоконструкций (широкая цветовая гамма), гибка круглых и профильных труб, гибка листового металла, резка, холодная штамповка изделий из металла, 3D-фрезеровка, пошив чехлов и тентов и многое другое. Применение новейших технологий и современного оборудования позволило нам добиться высокого качества продукции."
    `
  }, 
  {"o_id": "1", 
    "name": `ООО "ПК" ТИСО"`, 
    "group": "Поставщик", 
    "spec": "Металлоконтейнеры", 
    "country": "Россия", 
    "site": "https://pk-tiso.ru/", 
    "phone": "+7(812) 336-90-95",
    "adress": "194044 г. Санкт-Петербург, ул. Боткинская 15, корп. 1", 
    "email": "info@pk-tiso.ru"
  }, 
  {"o_id": "2", 
    "name": `Та-Пласт`, 
    "group": "Поставщик", 
    "spec": "Уп.материалы", 
    "country": "Россия", 
    "site": "", 
    "phone": "7 982 422 22 60", 
    "adress": "Казань", 
    "email": "utkuzov.a@gmail.com"
  }, 
      ], 
      "docs": ["Устав.pdf", "1.doc"],
      "history": "" 
    }

const Or = ({match}) => {
  const dispatch = useDispatch()

  const orgDetails = useSelector(state => state.orgDetails)
  const {loading, error, org} = orgDetails

  useEffect(() => {
    dispatch(listOrgDetails(match.params.o_id))
  }, [dispatch, match])

  
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

 /* constructor(props) {
    super(props);
        this.onClick = this.onClick.bind(this)
    }*/

    const onClick = (e) => {
      //e.preventDefault();

      dispatch(listOrgAdd(match.params.o_id))
  }


  //render() {
    return(
        <div>
          {loading ? <Loader/>: error ? <Message variant="danger">{error}</Message> :
          <div>
        <h4 id="name" className="text-center">{org.name}</h4>
        <h5>Общие данные</h5>
        <div>
        <table className="table w-50 one_item" >
          <thead>
          </thead>
          <tbody>
          <tr>
              <td scope="col" colSpan='2'><h5>{org.name}</h5></td>
            </tr>
            <tr>
              <td scope="col" colSpan='2'>Общие данные</td>
            </tr>
            <tr>
              <td scope="col">Название</td>
              <td scope="col">{org.name}</td>
            </tr>
            <tr>
              <td scope="col">Группа</td>
              <td scope="col">{org.group}</td>
            </tr>
            <tr>
              <td scope="col">Страна</td>
              <td scope="col">{org.country}</td>
            </tr>
            <tr>
              <td scope="col">Адрес</td>
              <td scope="col">{org.adress}</td>
            </tr>
            <tr>
              <td scope="col">Телефон</td>
              <td scope="col">{org.phone}</td>
            </tr>
            <tr>
              <td scope="col">Email</td>
              <td scope="col">{org.email}</td>
            </tr>
            <tr>
              <td scope="col">Сайт</td>
              <td scope="col">{org.site}</td>
            </tr>
            <tr>
              <td scope="col">Специализация</td>
              <td scope="col">{org.spec}</td>
            </tr>
          </tbody>
        </table>
        </div>
        {userInfo.o_id == match.params.o_id ? <button type="button" className="btn btn-outline-dark">
          <Link className="nav-link " to={`/orgs/upd/${userInfo.o_id}`}>Изменить данные</Link>
          </button>
         : <button type="button" className="btn btn-outline-dark" onClick={onClick}>Добавить в список поставщиков</button>}
          <h5 id="name" className="text-justify">Документация</h5>
          {org.docs ? org.docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )}) : <p className="text-justify">Документов нет</p>}

          <h5 className="text-justify">О компании</h5>
          <p className="text-justify">{org.info}</p>

          <h5 className="text-justify">Список поставщиков</h5>
          <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
        <th scope="col">Наименование</th>
        <th scope="col">Группа</th>
        <th scope="col">Специализация</th>
        <th scope="col">Страна</th>
        <th scope="col">Сайт</th>
        <th scope="col">Телефон</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      {org.orgs ? org.orgs.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/orgs/link/${item.o_id}`} >
            {item.name}
          </Link>
        </td>
        <td>{item.group}</td>
        <td>{item.spec}</td>
        <td>{item.country}</td>
        <td>{item.site}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
      </tr>)}) : <tr></tr>}
    </tbody>
  </table> 
  <h5 className="text-justify">История изменений</h5>
  <p className="text-justify">{org.history}</p>
</div>
}
</div>
)
  }
//}

const Org =withRouter(Or) 
export default Org;