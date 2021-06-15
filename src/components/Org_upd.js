import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Prompt, useHistory, withRouter} from 'react-router-dom';
import {listOrgAddDoc, listOrgDetails, listOrgDetailsUpdate} from '../actions/orgAction'
import { listSpecs } from '../actions/selectAction';
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
    dispatch(listOrgDetails(match.params.o_id))}, [dispatch, match])

  const specsList = useSelector(state => state.specsList)

  useEffect(() => {dispatch(listSpecs())}, [dispatch])

  const {data} = specsList

 /* constructor(props) {
    super(props);
        this.onClick = this.onClick.bind(this)
    }*/
    const history = useHistory();

    const [adress, setAdress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [site, setSite] = useState("")
    const [spec, setSpec] = useState("")
    const [password, setPassword] = useState('')
    const [old_password, setOldPassword] = useState('')
    const [info, setInfo] = useState("")
    const [file, setFile] = useState()
    const [docs, setDocs] = useState([])
    
    
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    const onClickDocs= (e) => {
      /*let data = new FormData()
      data.append('doc', file)
      dispatch(listOrgAddDoc(data))
      console.log(1)*/
      var fileInput = document.getElementById("myfileinput");

      let auth = "Bearer " + userInfo.token

      var myHeaders = new Headers();
      myHeaders.append("Authorization", auth);

      var formdata = new FormData();
      formdata.append("doc", fileInput.files[0], fileInput.files[0].name);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/api/orgs/docs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      let d = [...docs]
      d.push(fileInput.files[0].name)
      setDocs(d)

      alert('Документ добавлен')
  }

  const onClickCancel = ()=>{
    history.push(`/orgs/`)
  }

    const onClickSave= () => {
      if (password != old_password){
        alert('Пароли не совпадают')
        return
      }
      let hi = ''
        let adress_ = ''
        if (adress != ''){ 
            adress_ = adress
            hi = hi + " \n Изменен адрес: " + adress_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            adress_ = org.adress
        }
        let password_ = ''
        if (password != ''){ 
            password_ = password
            hi = hi + " \n Изменен пароль. Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            password_ = ""
        }
        let phone_ = ''
        if (phone != ''){ 
            phone_ = phone
            hi = hi + " \n Изменен телефон: " + phone_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            phone_ = org.phone
        }
        let email_ = ''
        if (email != ''){ 
            email_ = email
            hi = hi + " \n Изменен адрес электронной почты: " + email_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            email_ = org.email
        }
        let site_ = ''
        if (site != ''){ 
            site_ = site
            hi = hi + " \n Изменен сайт: " + site_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            site_ = org.site
        }
        let spec_ = ''
        if (spec != ''){ 
            spec_ = spec
            hi = hi + " \n Изменена специализация: " + spec_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            spec_ = org.spec
        }
        let info_ = ''
        if (info != ''){ 
            info_ = info
            hi = hi + " \n Изменена общая информация: " + info_ + " Дата: " + new Date().toISOString().slice(0, 10)
        }else {
            info_ = org.info
        }
        console.log(hi)
        hi = hi+" "+org.history
        dispatch(listOrgDetailsUpdate(adress_, phone_, email_, site_, spec_, password_, info_, hi))
        history.push(`/orgs/`)
     }

  //render() {
    return(
        <div>
        <Prompt
      when={true}
      message='Все несохраненные изменения удалятся. Вы уверены, что хотите покинуть страницу?'
    />
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
              <td scope="col">{org.login}</td>
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
            {userInfo.group_id =="2" || userInfo.group_id =="3" ? <tr>
              <td scope="col">Специализация</td>
              <td scope="col">
              <label>Выберите из списка</label>
                {data.specs ? 
              <select className="form-select cr_input" name="dir" id="selector" value={spec} onChange={(e)=>setSpec(e.target.value)} placeholder='Не выбрано'>
                {data.specs.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
              </td>
            </tr>:<p></p>}
            <tr>
              <td scope="col">Новый пароль</td>
              <td scope="col">
              <input type='password' className='cr_input' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td scope="col">Подтвердите пароль</td>
              <td scope="col">
              <input type='password' className='cr_input' value={old_password} name='password' onChange={(e)=>setOldPassword(e.target.value)}></input>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
          <h5 id="name" className="text-justify">Документация</h5>
          {org.docs ? org.docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )}) : <p className="text-justify"></p>}
         {docs ? docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )}) : <p className="text-justify">Документов нет</p>}
           <input type="file" className="form-control-file" id="myfileinput" onChange={(e)=>setFile(e.target.files[0])}/>
           <button type="button" className="btn btn-outline-dark m-5" onClick={onClickDocs}>Добавить</button>

          <h5 className="text-justify">О компании</h5>
          <div>
          <textarea wrap='soft' className='cr_input' value={info} name='info' onChange={(e)=>setInfo(e.target.value)} placeholder={org.info}></textarea>  
          </div> 
</div>
}
<button type="button" className="btn btn-outline-dark m-5" onClick={onClickSave}>Сохранить изменения</button>
<button type="button" className="btn btn-outline-dark m-5" onClick={onClickCancel}>Отменить</button>
</div>
)
  }
//}

const Org_upd = withRouter(Ord_update) 
export default Org_upd;