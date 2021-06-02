import axios from 'axios';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { listTechs } from '../actions/tzAction';
import '../index.css'
import Loader from './Loader';
import Message from './Message';

let stats = ['Активно', 'Архив']
let cp = ['Активно', 'Архив', 'Отклонено', 'Принято']
let specs = []



const  Techs = () =>  {
 /* constructor(props) {
    super(props);
        this.state = {
          data: data, 
          dateFlag: true, 
          idFlagF: true,
          clientFlag: true, 
          end_dateFlag: true,
          tz_stFlag: true,
          cp_stFlag: true,
          filterData: this.props.filterData,
          fname: '', 
          fgroup: '', 
          fcountry: '', 
          fspec: []
        };
  
        this.onClickClient = this.onClickClient.bind(this)
        this.onClickCommStat = this.onClickCommStat.bind(this)
        this.onClickDate = this.onClickDate.bind(this)
        this.onClickEndDate = this.onClickEndDate.bind(this)
        this.onClickId = this.onClickId.bind(this)
        this.onClickTZStat = this.onClickTZStat.bind(this)
        this.onClick = this.onClick.bind(this)
    }*/



    /*onClick(e){
      e.preventDefault();

      let name = document.getElementById('name_select').value
      
      let group = ""
      if (document.getElementById('gridRadios1').checked) group = 'Поставщик'
      if (document.getElementById('gridRadios2').checked) group = 'Клиент'
      if (document.getElementById('gridRadios3').checked) group = 'Клиент, поставщик'
      
      let country = document.getElementById('country_select').value

      let spec = []
      for (let i=0; i<specs.length;i++) {
        if  (document.getElementById(i).checked) spec.push(document.getElementById(i).value)
      }
      

      this.setState({
        fname: name, 
        fgroup: group, 
        fcountry: country, 
        fspec: spec,
      })

      this.props.handler(name)
    }

  onClickDate = () => {
    let arr = data.sort((a, b)=>{
      if ((a.date > b.date) && this.state.dateFlag) {
        return -1;
      }
      if ((a.date < b.date) && this.state.dateFlag) {
        return 1;
      }
      if ((a.date > b.date) && !this.state.dateFlag) {
        return 1;
      }
      if ((a.date < b.date) && !this.state.dateFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      dateFlag: !this.state.dateFlag
    })

    this.forceUpdate()
  }

  onClickClient = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.client > b.client) && this.state.clientFlag) {
        return -1;
      }
      if ((a.client < b.client) && this.state.clientFlag) {
        return 1;
      }
      if ((a.client > b.client) && !this.state.clientFlag) {
        return 1;
      }
      if ((a.client < b.client) && !this.state.clientFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      clientFlag: !this.state.clientFlag
    })

    this.forceUpdate()
  }

  onClickId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.id > b.id) && this.state.idFlag) {
        return -1;
      }
      if ((a.id < b.id) && this.state.idFlag) {
        return 1;
      }
      if ((a.id > b.id) && !this.state.idFlag) {
        return 1;
      }
      if ((a.id < b.id) && !this.state.idFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      idFlag: !this.state.idFlag
    })

    this.forceUpdate()
  }
  
  onClickEndDate = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.end_date > b.end_date) && this.state.end_dateFlag) {
        return -1;
      }
      if ((a.end_date < b.end_date) && this.state.end_dateFlag) {
        return 1;
      }
      if ((a.end_date > b.end_date) && !this.state.end_dateFlag) {
        return 1;
      }
      if ((a.end_date < b.end_date) && !this.state.end_dateFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      end_dateFlag: !this.state.end_dateFlag
    })

    this.forceUpdate()
  }

  onClickTZStat = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.tz_st > b.tz_st) && this.state.tz_stFlag) {
        return -1;
      }
      if ((a.tz_st < b.tz_st) && this.state.tz_stFlag) {
        return 1;
      }
      if ((a.tz_st > b.tz_st) && !this.state.tz_stFlag) {
        return 1;
      }
      if ((a.tz_st < b.tz_st) && !this.state.tz_stFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      tz_stFlag: !this.state.tz_stFlag
    })

    this.forceUpdate()
  }

  onClickCommStat = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.cp_st > b.cp_st) && this.state.cp_stFlag) {
        return -1;
      }
      if ((a.cp_st < b.cp_st) && this.state.cp_stFlag) {
        return 1;
      }
      if ((a.cp_st > b.cp_st) && !this.state.cp_stFlag) {
        return 1;
      }
      if ((a.cp_st < b.cp_st) && !this.state.cp_stFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      cp_stFlag: !this.state.cp_stFlag
    })

    this.forceUpdate()
  }*/

  const history = useHistory()
  const onClickTZ = () => {
    history.push(`/techs/create`)
  }

  const dispatch = useDispatch()

  const tzList = useSelector(state => state.tzList)
    
  let idFlag = true 
  let  dateFlag = true
  let clientFlag = true 
  let end_dateFlag= true
  let tz_stFlag= true
  let cp_stFlag= true
  
  
    useEffect(() => {dispatch(listTechs())}, [dispatch])
    const {loading, error, data} = tzList
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null




    return(
      <div>
         {loading ? (
        <div ><Loader/>
        </div>
        ) : error ? <Message variant='danger'>{error}</Message> :
        <table className="main_table">
          <tr>
            <td valign="top" align="justify">
        <div className="filter">
      <form>
  
      <div>
      <p>Номер ТЗ</p>
  <select className="form-select" id="name_select">
          <option disabled>Выберите номер</option>
          <option selected value="">Не выбрано</option>
          {data.techs.map((item, i)=>{
      return (
          <option value={item.tz_id}>{item.tz_id}</option>
      )})}
      </select>
      </div>

  <div>
  <p>Дата создания</p>
  <p>C</p>
  <input className="form-text-input" type="text"/>
  </div>
  <div>
  <p>По</p>
  <input className="form-text-input" type="text"/>
      </div>

<div>
      <p>Клиент</p>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.techs.map((item, i)=>{
      return (
          <option value={item.client}>{item.client}</option>
      )})}
      </select>
      </div>


<div>
      <p>Номер ТЗ</p>
  <select className="form-select" id="name_select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.techs.map((item, i)=>{
      return (
          <option value={item.tz_id}>{item.tz_id}</option>
      )})}
      </select>
</div>

<div>
      <p>Дата завершения</p>
      <p>C</p>
  <input className="form-text-input" type="text"/>
  </div>
  <div>
  <p>По</p>
  <input className="form-text-input" type="text"/>
</div>

<div>
<div>
      <p>Статус КП</p>
  <div>
      {cp.map((item, i)=>{
      return (
        <div>
        <input type="checkbox" value={item}  id={i}/>
        <label>
          {item}
        </label>
        </div>
        
      )})}

</div>
</div>

      <p>Статус ТЗ</p>
  <div>


          
      {stats.map((item, i)=>{
      return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={item}  id={i}/>
        <label className="form-check-label">
          {item}
        </label>
        </div>
        
      )})}

      </div>
</div>
    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>
</td>



<td align='justify' valign="top" width="150%">
      <div className="main_t">
    <table className="table" id="org_table">
    <thead  >
      <tr className="org_head">
        <th scope="col">
          <p>Номер ТЗ</p>
          <button onClick={this.onClickId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
        <th scope="col">
          <p>Дата ТЗ</p>
          <button onClick={this.onClickDate} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={dateFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Клиент</p>
          <button onClick={this.onClickClient} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={clientFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Дата завершения</p>
          <button onClick={this.onClickEndDate} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={end_dateFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
            <p>Статус ТЗ</p>
            <button onClick={this.onClickTZStat} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={tz_stFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
            </th>
            <th onClick={this.onClickCommStat} scope="col">
            <p>Статус КП</p>
            <button onClick={this.onClickCommStat} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={cp_stFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
            </th>
        <th scope="col">
            <p>Проект</p>
        </th>
        <th scope="col">Группа упаковки</th>
        <th scope="col">Тип упаковки</th>
        <th scope="col">Вид упаковки</th>
        <th scope="col">Вид задания</th>
       
        <th scope="col">Статус тендера</th>
        <th scope="col">Кол-во КП</th>
        
      </tr>
    </thead>
    <tbody>
      {data.techs.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/techs/link/${item.tz_id}`} >
            {item.tz_id}
          </Link>
        </td>
        <td>{new Date(item.date).toISOString().slice(0, 10)}</td>
        <td>{item.client}</td>
        <td>{new Date(item.end_date).toISOString().slice(0, 10)}</td>
        <td>{Date.parse(item.end_date)> Date.now() ? 'Активно' : 'Архив'}</td>
        <td>{userInfo.group_id == 1 || userInfo.o_id == item.o_id ? '-'
        : !data.cps ? 'Не подано'
        : data.cps.find(value => {return value.tz_id == item.tz_id}) ? 'Подано' : 'Не подано'}
        </td>
        <td>{item.proj}</td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task}</td>
        <td>{item.tender_st}</td>
        <td>{item.count}</td>
        
      </tr>)})}
    </tbody>
  </table> 
  {userInfo.group_id == "1" || userInfo.group_id == "3" ? 
  <button type="button" className="btn btn-outline-dark" onClick={onClickTZ}>
    Добавить ТЗ
    </button> : <p></p>}
</div>
</td>
</tr>
</table>}
</div>
)
  }

export default Techs;





/*let data = [
    {
        'date': '12.01.2021', 
        'client': 'Организация 8', 
        'tz_id': '4368', 
        'end_date': '26.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Активно', 
        'tender_st': 'Не проведен', 
        'count': '', 
        'cp_st': 'Не подано'
    },
    {
      'date': '12.01.2021', 
      'client': 'Организация 8', 
      'tz_id': '4368', 
      'end_date': '26.01.2021', 
      'proj': 'ГК 6040', 
      'group': 'Гофрокороб', 
      'kind': 'Стандартная', 
      'type': 'Одноразовая', 
      'task': 'Изготовление серии', 
      'tz_st': 'Активно', 
      'tender_st': 'Не проведен', 
      'count': '', 
      'cp_st': 'Не подано'
  },
  {
    'date': '12.01.2021', 
    'client': 'Организация 8', 
    'tz_id': '4368', 
    'end_date': '26.01.2021', 
    'proj': 'ГК 6040', 
    'group': 'Гофрокороб', 
    'kind': 'Стандартная', 
    'type': 'Одноразовая', 
    'task': 'Изготовление серии', 
    'tz_st': 'Активно', 
    'tender_st': 'Не проведен', 
    'count': '', 
    'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
    {
        'date': '05.03.2020', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '15.03.2020', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Специальная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Завершен', 
        'count': '', 
        'cp_st': 'Отклонено'
    },
    {
        'date': '20.02.2020', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '05.03.2020', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Завершен', 
        'count': '', 
        'cp_st': 'Принято'
    },
    {
      'date': '12.01.2021', 
      'client': 'Организация 8', 
      'tz_id': '4368', 
      'end_date': '26.01.2021', 
      'proj': 'ГК 6040', 
      'group': 'Гофрокороб', 
      'kind': 'Стандартная', 
      'type': 'Одноразовая', 
      'task': 'Изготовление серии', 
      'tz_st': 'Активно', 
      'tender_st': 'Не проведен', 
      'count': '', 
      'cp_st': 'Не подано'
  },
  {
    'date': '12.01.2021', 
    'client': 'Организация 8', 
    'tz_id': '4368', 
    'end_date': '26.01.2021', 
    'proj': 'ГК 6040', 
    'group': 'Гофрокороб', 
    'kind': 'Стандартная', 
    'type': 'Одноразовая', 
    'task': 'Изготовление серии', 
    'tz_st': 'Активно', 
    'tender_st': 'Не проведен', 
    'count': '', 
    'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},

{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},
{
  'date': '12.01.2021', 
  'client': 'Организация 8', 
  'tz_id': '4368', 
  'end_date': '26.01.2021', 
  'proj': 'ГК 6040', 
  'group': 'Гофрокороб', 
  'kind': 'Стандартная', 
  'type': 'Одноразовая', 
  'task': 'Изготовление серии', 
  'tz_st': 'Активно', 
  'tender_st': 'Не проведен', 
  'count': '', 
  'cp_st': 'Не подано'
},

    {
        'date': '12.01.2021', 
        'client': 'Организация 1', 
        'tz_id': '4368', 
        'end_date': '26.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'kind': 'Стандартная', 
        'type': 'Одноразовая', 
        'task': 'Изготовление серии', 
        'tz_st': 'Архив', 
        'tender_st': 'Требуется решение', 
        'count': '2', 
        'cp_st': ''
    },
]*/