import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let specs = ['Уп. материалы', 'Металлоконтейнеры']

class Filters extends Component {
  constructor() {
    super();
        this.state = {
          fname: '', 
          fgroup: '', 
          fcountry: '', 
          fspec: []
        };
  
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


  render() {
    return( 
    <div className="filter">
        <div>
          <h6>Название</h6>
        </div>
          <select className="form-select" id="name_select">
            <option disabled>Выберите название</option>
            <option selected value="">Не выбрано</option>
            {this.props.data.map((item, i)=>{
        return (
            <option value={item.name}>{item.name}</option>
        )})}
        </select>
       


        <div>
            <h6 className="col-form-label col-sm-2 pt-0">Группа</h6>
            </div>
        <fieldset className="row mb-3">
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='Поставщик'/>
        <label className="form-check-label" for="gridRadios1">
          Поставщик
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value='Клиент' />
        <label className="form-check-label" for="gridRadios2">
          Клиент
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value='Клиент, поставщик' />
        <label className="form-check-label" for="gridRadios3">
          Клиент, поставщик
        </label>
      </div>
    </div>
  </fieldset>


  <div>
          <h6>Страна</h6>
        </div>
          <select className="form-select" id="country_select">
            <option>Россия</option>
        </select>


        <div>
          <h6>Специализация</h6>
        </div>
        <div className="form-check">
            
        {specs.map((item, i)=>{
        return (
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value={item}  id={i}/>
          <label className="form-check-label" for="gridCheck1">
            {item}
          </label>
          </div>
        )})}

      </div>
      <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Применить</button>
    </div>
    )
  }
}

export default Filters;
