import React, { Component } from 'react';
import {Link} from 'react-router-dom';
let data =
    {'date': '14.01.2021',
    'selected_cp': '1', 
    "cp_o_id": "1",
    "tz_o_id": "2",
    "cp_org": "Организация 3",
    "tz_org": "Организация 1", 
    "proj": "ГК 6040", 
    "task_name": "Изготовление серии", 
    "tz_id": '1', 
    "cp_count": "2", 
    "max_cp": '33000.00',
    "min_cp": "25500.00", 
    "selected_sum": "25500.00",
    "term": 3, 
    "docs": ["Пример.pdf", "1.doc"],
    "history":"",
    "info": "",
    "tz_calendars": ["Разработка концепта", "Изготовление серии", "Доставка"],
    "tz_costs": [
        {
            "cost_id": 2,
            "task": "Изготовление серии",
            "metr": "шт.",
            "count": 150,
            "tz_id": 25,
            "cp_id": 0,
            "ppu": "0",
            "sum": "0",
            "info": ""
        },
        {
            "cost_id": 3,
            "task": "Доставка",
            "metr": "рейс",
            "count": 1,
            "tz_id": 25,
            "cp_id": 0,
            "sum": "0",
            "ppu": "0",
            "info": ""
        }
    ],
    "cps":[
        {
            "cp_id": "1",
            "org": "Организация 3",
            "o_id": "1",
            "costs": [
                {
                    "task": "Изготовление серии",
                    "cost_sum": "22500.00"
                },
                {
                    "task": "Доставка",
                    "cost_sum": "3000.00"
                },
            ], 
            "sum": "25500.00",
            "sum_ppu": "170.00", 
            "pay_cond": "30% предоплата",
            "calendars":[1,1,1]
        },
        {
            "org": "Организация 5",
            "cp_id": "2",
            "o_id": "1",
            "costs": [
                {
                    "task": "Изготовление серии",
                    "cost_sum": "28000.00"
                },
                {
                    "task": "Доставка",
                    "cost_sum": "5000.00"
                },
            ], 
            "sum": "33000.00",
            "sum_ppu": "220.00", 
            "pay_cond": "100% постоплата",
            "calendars":[0, 2, 1]
               
        },
    ]
    }
  

class Tender extends Component {
  constructor(props) {
    super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick = (e) => {
     console.log("1")
    }

  render() {
    return(
        <div>
          <div>
        <h4 id="name" className="text-center">Общие данные</h4>
        <h5>Общие данные</h5>
        <div>
        <table className="table w-50 one_item" >
          <thead>
          </thead>
          <tbody>
            <tr>
              <td scope="col" colSpan='2'><h5>Общие данные</h5></td>
            </tr>
            <tr align='justify'>
              <td scope="col">Дата тендера</td>
              <td scope="col">{data.date}
                  </td>
            </tr>
            <tr align='justify'>
              <td scope="col">Тендерное решение</td>
              <td scope="col"> 
              <Link to={`/orgs/link/${data.cp_o_id}`} >
                  {data.cp_org}
                </Link>
                </td>
            </tr>
            <tr align='justify'>
              <td scope="col">Клиент</td>
              <td scope="col">
                  <Link to={`/orgs/link/${data.tz_o_id}`} >
                  {data.tz_org}
                </Link>
                </td>
            </tr>
            <tr align='justify'>
              <td scope="col">Проект</td>
              <td scope="col">{data.proj}</td>
            </tr>
            <tr align='justify'>
              <td scope="col">Вид задания</td>
              <td scope="col">{data.task}</td>
            </tr>
            <tr align='justify'>
              <td scope="col">Номер ТЗ</td>
              <td scope="col">  <Link to={`/techs/link/${data.tz_id}`} >
                  {data.tz_id}
                </Link></td>
            </tr>
            <tr align='justify'>
              <td scope="col">Количество собранных КП</td>
              <td scope="col">{data.cp_count}</td>
            </tr>
            <tr align='justify'>
              <td scope="col">Максимальное КП</td>
              <td scope="col">{data.max_cp}</td>
            </tr>
            <tr align='justify'>
              <td scope="col">Минимальное КП</td>
              <td scope="col">{data.min_cp}</td>
            </tr>
            <tr align='justify'>
              <td scope="col">Принятое КП</td>
              <td scope="col"> 
              <Link to={`/cps/link/${data.cp_id}`} >
                  {data.selected_cp}
                </Link></td>
            </tr>
            <tr align='justify'>
              <td scope="col">Срок реализации проекта</td>
              <td scope="col">{data.term}</td>
            </tr>
          </tbody>
        </table>
        </div>

        <h5 id="name" className="text-justify">Документация</h5>
          {data.docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )})}
         
          <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Добавить документ</button>


          <h5 className="text-justify">Тендерная таблица</h5>
          <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
        <th scope="col"></th>
        <th scope="col">Кол-во</th>
        <th scope="col">Единицы измерения</th>
        {data.cps.map((item, i)=>{
        return (<th>{item.org}</th>)})}
      </tr>
    </thead>
    <tbody>
        <tr colSpan='10000'>
            <td align='justify'><h5>Наименование операций</h5></td>
        </tr>
      {data.tz_costs.map((item, i)=>{
        return (
      <tr>
        <td align='justify'>{item.task}</td>
        <td>{item.count}</td>
        <td>{item.metr}</td>
        </tr>)})}
        <tr>
            <td align='justify'>Всего</td>
            <td></td>
            <td></td>
            {data.cps.map((item, i)=>{
        return (<td>{item.sum}</td>)})}
        </tr>
        <tr>
            <td align='justify'>Всего на ед.</td>
            <td></td>
            <td></td>
            {data.cps.map((item, i)=>{
        return (<td>{item.sum_ppu}</td>)})}
        </tr>
        <tr>
            <td align='justify'>Условия оплаты</td>
            <td></td>
            <td></td>
            {data.cps.map((item, i)=>{return (<td>{item.pay_cond}</td>)})}
        </tr>
        <tr colSpan='10000'>
            <td align='justify'><h5>График выполнения работ</h5></td>
        </tr>
            {data.tz_calendars.map((item, is)=>{return (
                <tr>
                <td align='justify'>{item}</td>
                <td></td>
                <td></td>
                {data.cps.map((item, i)=>{return (<td>{item.calendars[is] + " КН"}</td>)})}
                </tr>)
            })}
        <tr>
            <td align='justify'> <h5>Решение</h5></td>
            <td></td>
            <td></td>
            {data.cps.map((item, i)=>{return (
            <td>
                <input className="form-check-input" type="radio" name="gridRadios" id={i} value={item.cp_id} />
                    </td>)})}
        </tr>
    </tbody>
  </table> 

  <button type="button" className="btn btn-outline-dark">Принять решение досрочно</button>

  <h5 className="text-justify">История изменений</h5>
  <p className="text-justify">{data.history}</p>
</div>
</div>
)
  }
}

export default Tender;