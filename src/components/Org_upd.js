import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {listOrgDetails, listOrgDetailsUpdate} from '../actions/orgAction'
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

const Ord_update = ({match}) => {
  const dispatch = useDispatch()

  const orgDetails = useSelector(state => state.orgDetails)
  const {loading, error, org} = orgDetails

  const orgUpdateDetails = useSelector(state => state.orgUpdateDetails)
  //const { success } = orgUpdateDetails

  useEffect(() => {
    dispatch(listOrgDetails(match.params.o_id))
  }, [dispatch, match])

 /* constructor(props) {
    super(props);
        this.onClick = this.onClick.bind(this)
    }*/

    const [adress, setAdress] = useState(org.adress)
    const [phone, setPhone] = useState(org.phone)
    const [email, setEmail] = useState(org.email)
    const [site, setSite] = useState(org.site)
    const [spec, setSpec] = useState(org.spec)
    const [password, setPassword] = useState('')
    const [old_password, setOldPassword] = useState('')
    const [info, setInfo] = useState(org.info)


    let onClickSave= () => {
        let a = ''
        adress ? a = adress : a = org.adress
        let p = ''
        phone ? p = phone : p = org.phone
        let e = ''
        email ? e = email : e = org.email
        let s = ''
        site ? s = site : s = org.site
        let sp = ''
        spec ? sp = spec : sp = org.spec
        let i = ''
        info ? i = info : i = org.info
        let ps = ''
        password ? ps = password : ps = old_password
        dispatch(listOrgDetailsUpdate(a, p, e, s, sp, password, i))
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
              <td scope="col">Логин</td>
              <td scope="col">{org.email}</td>
            </tr>
            <tr>
              <td scope="col">Адрес</td>
              <td scope="col">
                  <input className='cr_input' value={adress} name='adress' onChange={(e)=>setAdress(e.target.value)} placeholder={org.adress}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Телефон</td>
              <td scope="col">
              <input className='cr_input' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder={org.phone}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Email</td>
              <td scope="col">
              <input className='cr_input' value={email} name='email' onChange={(e)=>setEmail(e.target.value)} placeholder={org.email}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Сайт</td>
              <td scope="col">
              <input className='cr_input' value={site} name='site' onChange={(e)=>setSite(e.target.value)} placeholder={org.site}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Специализация</td>
              <td scope="col">
              <input className='cr_input' value={spec} name='spec' onChange={(e)=>setSpec(e.target.value)} placeholder={org.spec}></input>
              </td>
            </tr>
            <tr>
              <td scope="col" colSpan='2'><h5>
                  Для подтверждения изменений введите старый пароль</h5></td>
            </tr>
            <tr>
              <td scope="col">Пароль</td>
              <td scope="col">
              <input className='cr_input' value={old_password} name='password' type='password' onChange={(e)=>setOldPassword(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td scope="col">Новый пароль</td>
              <td scope="col">
              <input className='cr_input' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}></input>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
          <h5 id="name" className="text-justify">Документация</h5>
          {org.docs ? org.docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )}) : <p className="text-justify">Документов нет</p>}
          <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Добавить</button>

          <h5 className="text-justify">О компании</h5>
          <div>
          <textarea wrap='soft' className='cr_input' value={info} name='info' onChange={(e)=>setInfo(e.target.value)} placeholder={org.info}></textarea>  
          </div> 
</div>
}
<button type="button" className="btn btn-outline-dark m-5" onClick={onClickSave}>Сохранить изменения</button>
</div>
)
  }
//}

const Org_upd = withRouter(Ord_update) 
export default Org_upd;