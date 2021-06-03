import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory, withRouter} from 'react-router-dom';
import { listCPs } from '../actions/cpAction';
import Loader from './Loader';
import Message from './Message';

let specs = ['Уп. материалы', 'Металлоконтейнеры']

let data = [
    {
        'cp_id': '12675', 
        'date': '12.01.2021', 
        'cp_st': 'Отклонено', 
        'tz_id':'2423', 
        'proj': 'ГК 6040', 
        'o_id': 'Организация 1', 
        'price': '170 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
    {
        'cp_id': '12632', 
        'date': '14.01.2021', 
        'cp_st': 'Активно', 
        'tz_id':'7868', 
        'proj': 'ГК 6040', 
        'o_id': 'Организация 3', 
        'price': '170 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
    {
        'cp_id': '11789', 
        'date': '12.01.2021', 
        'cp_st': 'Активно', 
        'tz_id':'7868', 
        'proj': 'ГК 6040', 
        'o_id': 'Организация 5', 
        'price': '220 руб.', 
        'group': 'Гофрокороб',
        'type': 'Одноразовая',
        'kind': 'Стандартная',
        'task':'Изготовление серии'
    },
]

let stats = ['Активно', 'Архив', 'Отклонено', 'Принято'] 

const C = () => {
 

  const dispatch = useDispatch()
 

  const cpList = useSelector(state => state.cpList)
  const {loading, error, cps} = cpList
  useEffect(() => {dispatch(listCPs())}, [dispatch])

  let cp_idFlag = true 
  let  dateFlag = true
  let cp_stFlag = true 
  let o_idFlag= true
  let tz_idFlag= true

    return(
      <div>
        {loading ? (
        <div ><Loader/>
        </div>
        ) : error ? <Message variant='danger'>{error}</Message> :
        cps ? 
        <table className="main_table">
        <tr>
            <td valign="top" align="justify">
        <div className="filter">
      <form>



<div>
      <p>Дата КП</p>
      <div>
  <p>C</p>
  <input className="form-text-input" type="text"/>
  </div>
  <div>
  <p>По</p>
  <input className="form-text-input" type="text"/>
  </div>
</div>

<div>
  <p>Номер КП</p>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
      </select>
</div>


<div>
  <p>Статус КП</p>
  <div>
    <div>
    {stats.map((item, i)=>{
      return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={item.status}  id={i}/>
        <label className="form-check-label">
          {item}
        </label>
        </div>
        
      )})}
  </div>
  </div>
  </div>

  <div>
  <p>Номер ТЗ</p>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
      </select>
</div>
  

  <div>
  <p>Проект</p>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
      </select>
</div>

<div>
      <p>Поставщик</p>
  <select className="form-select" id="name_select">
          <option selected value="">Не выбрано</option>
      </select>
</div>

    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>


</td>
<td align='justify' valign="top" width="120%">
  
<div className="main_t">
    <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
      <th scope="col">
          <p>Номер КП</p>
          <button onClick={this.onClickId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={cp_idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
        <th scope="col">
          <p>Дата КП</p>
          <button onClick={this.onClickDate} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={dateFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
        <th scope="col">
          <p>Статус КП</p>
          <button onClick={this.onClickCpSt} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={cp_stFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Номер ТЗ</p>
          <button onClick={this.onClickTzId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={tz_idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Проект</p>
          </th>
        <th scope="col">
            <p>Поставщик</p>
            <button onClick={this.onClickOId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={o_idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
            </th>
        <th scope="col">Группа упаковки</th>
        <th scope="col">Тип упаковки</th>
        <th scope="col">Вид упаковки</th>
        <th scope="col">Вид задания</th>
      </tr>
    </thead>
    <tbody>
      {cps.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/cps/link/${item.cp_id}`} >
            {item.cp_id}
          </Link>
        </td>
        <td>{item.date}</td>
        <td>{Date.parse(item.end_date)> Date.now() ?  'Архив': 'Активно'}</td>
        <td>
          <Link to={`/techs/link/${item.tz_id}`}>
          {item.tz_id}
          </Link>
          </td>
        <td>{item.proj}</td>
        <td>
          <Link to={`/orgs/link/${item.o_id}`}>
          {item.o_id}
          </Link></td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task_name}</td>
      </tr>)})}
    </tbody>
  </table> 
 
</div>
 </td>
 </tr>
</table> : <Message variant='sucess'><h1>Предложений нет</h1></Message>}
</div>
)
}

const CP =withRouter(C) 
export default CP;


 /*constructor(props) {
    super(props);
        this.state = {
          data: data, 
          cp_idFlag: true, 
          dateFlag: true,
          cp_stFlag: true, 
          tz_idFlag: true,
          o_idFlag: true,
          filterData: this.props.filterData,
          fname: '', 
          fgroup: '', 
          fcountry: '', 
          fspec: []
        };
  
        this.onClickId = this.onClickId.bind(this)
        this.onClickDate = this.onClickDate.bind(this)
        this.onClickCpSt = this.onClickCpSt.bind(this)
        this.onClickTzId = this.onClickTzId.bind(this)
        this.onClickOId = this.onClickOId.bind(this)
        this.onClick = this.onClick.bind(this)
    }*/



    /*const onClick = (e)=>{
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

    const onClickId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.cp_id > b.cp_id) && this.state.cp_idFlag) {
        return -1;
      }
      if ((a.cp_id < b.cp_id) && this.state.cp_idFlag) {
        return 1;
      }
      if ((a.cp_id > b.cp_id) && !this.state.cp_idFlag) {
        return 1;
      }
      if ((a.cp_id < b.cp_id) && !this.state.cp_idFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      cp_idFlag: !this.state.cp_idFlag
    })

    this.forceUpdate()
  }


  onClickDate = () => {
    let arr = this.state.data.sort((a, b)=>{
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

  onClickOId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.o_id > b.o_id) && this.state.o_idFlag) {
        return -1;
      }
      if ((a.o_id < b.o_id) && this.state.o_idFlag) {
        return 1;
      }
      if ((a.o_id > b.o_id) && !this.state.o_idFlag) {
        return 1;
      }
      if ((a.o_id < b.o_id) && !this.state.o_idFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      o_idFlag: !this.state.o_idFlag
    })

    this.forceUpdate()
  }

  onClickTzId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.tz_id > b.tz_id) && this.state.tz_idFlag) {
        return -1;
      }
      if ((a.tz_id < b.tz_id) && this.state.tz_idFlag) {
        return 1;
      }
      if ((a.tz_id > b.tz_id) && !this.state.tz_idFlag) {
        return 1;
      }
      if ((a.tz_id < b.tz_id) && !this.state.tz_idFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      tz_idFlag: !this.state.tz_idFlag
    })

    this.forceUpdate()
  }
  
  onClickCpSt = () => {
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