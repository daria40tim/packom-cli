import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let specs = ['Уп. материалы', 'Металлоконтейнеры']
let data = [
    {
        "tender_id":'7853', 
        'tz_id': '7868', 
        'date': '29.01.2021', 
        'proj': 'ГК 6040', 
        'group': 'Гофрокороб', 
        'type': 'Одноразовая', 
        'kind': 'Стандартная',
        'task': 'Изготовление серии',
        'count': '2', 
        'min_price': '170 руб.', 
        'max_price': '220 руб.',
        'checked': '12675',
        'sum': '25 500 руб.', 
        'tender_st': 'Требуется решение'
    },
]
let stats = ['Сбор КП', 'Требуется решение', 'Принято', 'Отменено']

class Tenders extends Component {
  constructor(props) {
    super(props);
        this.state = {
          data: this.props.data, 
          dateFlag: true, 
          tender_idFlag: true,
          tz_idFlag: true, 
          tender_stFlag: true,
          filterData: this.props.filterData,
          fname: '', 
          fgroup: '', 
          fcountry: '', 
          fspec: []
        };
  
        this.onClickDate = this.onClickDate.bind(this)
        this.onClickId = this.onClickId.bind(this)
        this.onClickTZId = this.onClickTZId.bind(this)
        this.onClickTenderSt = this.onClickTenderSt.bind(this)
        this.onClick = this.onClick.bind(this)
    }



    onClick(e){
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
    let arr = this.state.data.sort((a, b)=>{
      if ((a.date > b.date) && this.state.nameFlag) {
        return -1;
      }
      if ((a.date < b.date) && this.state.nameFlag) {
        return 1;
      }
      if ((a.date > b.date) && !this.state.nameFlag) {
        return 1;
      }
      if ((a.date < b.date) && !this.state.nameFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      nameFlag: !this.state.nameFlag
    })

    this.forceUpdate()
  }

  onClickId = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.tender_id > b.tender_id) && this.state.tender_idFlag) {
        return -1;
      }
      if ((a.tender_id < b.tender_id) && this.state.tender_idFlag) {
        return 1;
      }
      if ((a.tender_id > b.tender_id) && !this.state.tender_idFlag) {
        return 1;
      }
      if ((a.tender_id < b.tender_id) && !this.state.tender_idFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      tender_idFlag: !this.state.tender_idFlag
    })

    this.forceUpdate()
  }

  onClickTenderSt = () => {
    let arr = this.state.data.sort((a, b)=>{
      if ((a.tender_st > b.tender_st) && this.state.tender_stFlag) {
        return -1;
      }
      if ((a.tender_st < b.tender_st) && this.state.tender_stFlag) {
        return 1;
      }
      if ((a.tender_st > b.tender_st) && !this.state.tender_stFlag) {
        return 1;
      }
      if ((a.tender_st < b.tender_st) && !this.state.tender_stFlag) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      data: arr, 
      tender_stFlag: !this.state.tender_stFlag
    })

    this.forceUpdate()
  }
  
  onClickTZId = () => {
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

  render() {
    return(
      <div>
        <table className="main_table">
          <tr>
            <td valign="top" align="justify">
        <div className="filter">
      <form class="form-inline">




      <p>Дата решения</p>
      <div>
      <p>C</p>
  <input className="form-text-input" type="text"/>
  </div>
  <div>
  <p>По</p>
  <input className="form-text-input" type="text"/>
  </div>
<div>
  <p>Номер решения</p>
  <select className="form-select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.tender_id}>{item.tender_id}</option>
      )})}
      </select>
</div>

<div>
      <p>Номер ТЗ</p>
  <select className="form-select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.tz_id}>{item.tz_id}</option>
      )})}
      </select>
      </div>

      <p>Проект</p>
  <select className="form-select">
          <option disabled>Выберите название</option>
          <option selected value="">Не выбрано</option>
          {data.map((item, i)=>{
      return (
          <option value={item.proj}>{item.proj}</option>
      )})}
      </select>

  

  <p>Статус тендера</p>
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

    <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
</form>
</div>
</td>


      <td align='justify' valign="top">
      <div className="main_t">
    <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
        <th scope="col">
          <p>Номер решения</p>
          <button onClick={this.onClickId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={this.state.tender_idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
        <th scope="col">
          <p>Номер ТЗ</p>
          <button onClick={this.onClickTZId} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={this.state.tz_idFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Дата решения</p>
          <button onClick={this.onClickDate} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={this.state.dateFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
          <th scope="col">
          <p>Проект</p>
          </th>
        <th scope="col">Группа упаковки</th>
        <th scope="col">Тип упаковки</th>
        <th scope="col">Вид упаковки</th>
        <th scope="col">Вид задания</th>
        <th scope="col">Кол-во КП</th>
        <th scope="col">Мин. цена за ед.</th>
        <th scope="col">Макс. цена за ед.</th>
        <th scope="col">Выбранное КП</th>
        <th scope="col">Сумма заказа без НДС</th>
        <th scope="col">
          <p>Статус тендера</p>
          <button onClick={this.onClickTenderSt} type="button" className="btn sort_btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d={this.state.tender_stFlag ? "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" :"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}/>
</svg></button>
          </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i)=>{
        return (
      <tr>
        <td>
          <Link to={`/tenders/link/${item.id}`} >
            {item.tender_id}
          </Link>
        </td>
        <td><Link to={`/tech/link/${item.tz_id}`} >
            {item.tz_id}
          </Link></td>
        <td>{item.date}</td>
        <td>{item.proj}</td>
        <td>{item.group}</td>
        <td>{item.type}</td>
        <td>{item.kind}</td>
        <td>{item.task}</td>
        <td>{item.count}</td>
        <td>{item.min_price}</td>
        <td>{item.max_price}</td>
        <td>{item.checked}</td>
        <td>{item.sum}</td>
        <td>{item.tender_st}</td>
      </tr>)})}
    </tbody>
  </table> 
</div>
</td>
</tr>
</table>
</div>
)
  }
}

export default Tenders;