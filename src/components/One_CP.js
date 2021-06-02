import React, { Component } from 'react';
import {Link} from 'react-router-dom';
let data = 
    {'date': '14.01.2021',
    'cp_id': '1',
    'tz_date': '12.01.2021', 
    'org': 'Организация 3', 
    "o_id": '1',
    "tz_o_id": '1',
    "tz_org": 'Организация 8',
    'tz_id': '4368', 
    'end_date': '28.01.2021', 
    'tz_end_date': '26.01.2021', 
    'proj': 'ГК 6040', 
    'group': 'Гофрокороб', 
    'kind': 'Стандартная', 
    'type': 'Одноразовая', 
    'task': 'Изготовление серии', 
    'tz_st': 'Активно', 
    'tender_st': 'Не проведен', 
    'count': '', 
    'cp_st': 'Активно',
    'tz_pay_cond': '100% постоплата',
    'pay_cond': '30% предоплата',
    'private': 'Общий', 
    'tz_info': `Требуется изготовить и доставить 150 гофрокоробов. Изготавливаемая упаковка должна отвечать требованиям технической документации (см. вложение). Дополнительно необходимо нанести маркировку с 4-х сторон`,
    "info": `Производится согласно ТЗ`,
    "tz_docs": ["Пример.pdf", "1.doc"],
    "docs": ["Договор.doc"],
    "costs": [
        {
            "cost_id": 11,
            "task": "Изготовление серии",
            "metr": "шт.",
            "count": 0,
            "tz_id": 0,
            "cp_id": 4,
            "ppu": "150.00",
            "sum": "22500.00",
            "info": ""
        },
        {
            "cost_id": 12,
            "task": "Доставка",
            "metr": "рейс",
            "count": 0,
            "tz_id": 0,
            "cp_id": 4,
            "ppu": "3000.00",
            "sum": "3000.00",
            "info": ""
        }
    ],
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
    "calendars": [
        {
            "cal_id": 19,
            "name": "Разработка концепта",
            "period": 1,
            "term": 6,
            "tz_id": 0,
            "cp_id": 4
        },
        {
            "cal_id": 20,
            "name": "Изготовление серии",
            "period": 1,
            "term": 8,
            "tz_id": 0,
            "cp_id": 4
        },
        {
            "cal_id": 21,
            "name": "Доставка",
            "period": 1,
            "term": 9,
            "tz_id": 0,
            "cp_id": 4
        }
    ],
    
    "tz_calendars": [
        {
            "cal_id": 4,
            "name": "Разработка концепта",
            "period": 1,
            "term": 7,
            "tz_id": 25,
            "cp_id": 0
        },
        {
            "cal_id": 5,
            "name": "Изготовление серии",
            "period": 2,
            "term": 9,
            "tz_id": 25,
            "cp_id": 0
        },
        {
            "cal_id": 6,
            "name": "Доставка",
            "period": 1,
            "term": 10,
            "tz_id": 25,
            "cp_id": 0
        }
    ],
    "cp_docs": ["Презентация.pdf", "Предложение.doc"],
    "tz_docs": ["Пример.pdf", "1.doc"],
    "history": "" 
    }

class One_CP extends Component {
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
        <h4 id="name" className="text-center">Общие данные по ТЗ</h4>
        <h5>Общие данные</h5>
        <div>
            <table className="w-100">
                <thead></thead>
                <tbody>
                    <tr>
                        <td valign='top' align='justify' width="50%">
        <table className="table w-100 one_item" >
          <thead>
          </thead>
          <tbody>
            <tr>
              <td scope="col" colSpan='2'><h5>Общие данные по ТЗ</h5></td>
            </tr>
            <tr>
              <td scope="col">Клиент</td>
              <td scope="col">
              <Link to={`/orgs/link/${data.tz_o_id}`} >
                  {data.tz_org}
                </Link>
                  </td>
            </tr>
            <tr>
              <td scope="col">Проект</td>
              <td scope="col">{data.proj}</td>
            </tr>
            <tr>
              <td scope="col">Группа упаковки</td>
              <td scope="col">{data.group}</td>
            </tr>
            <tr>
              <td scope="col">Тип упаковки</td>
              <td scope="col">{data.type}</td>
            </tr>
            <tr>
              <td scope="col">Вид упаковки</td>
              <td scope="col">{data.kind}</td>
            </tr>
            <tr>
              <td scope="col">Вид задания</td>
              <td scope="col">{data.task}</td>
            </tr>
            <tr>
              <td scope="col">Условия оплаты</td>
              <td scope="col">{data.tz_pay_cond}</td>
            </tr>
            <tr>
              <td scope="col">Дата начала сбора КП</td>
              <td scope="col">{data.tz_date}</td>
            </tr>
            <tr>
              <td scope="col">Дата завершения сбора КП</td>
              <td scope="col">{data.tz_end_date}</td>
            </tr>
            <tr>
              <td scope="col">Доступ к данным ТЗ</td>
              <td scope="col">{data.private}</td>
            </tr>
            <tr>
              <td scope="col">Номер ТЗ</td>
              <td scope="col">
              <Link to={`/techs/link/${data.tz_id}`} >
                  {data.tz_id}
                  </Link>
                  </td>
            </tr>
            <tr>
              <td scope="col">Статус ТЗ</td>
              <td scope="col">{data.tz_st}</td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">
                  <h5>Описание работ по ТЗ</h5>
            </td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">{data.tz_info}</td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">
                  <h5>Документация ТЗ</h5>
                  </td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">{data.tz_docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )})}
       </td>
            </tr>
            
          </tbody>
        </table>
        </td>
        
        
        
        
        <td valign='top' align='justify'>
        <table className="table one_item" >
          <thead>
          </thead>
          <tbody>
            <tr>
              <td scope="col" colSpan='2'><h5>Общие данные от поставщика</h5></td>
            </tr>
            <tr>
              <td scope="col">Поставщик</td>
              <td scope="col">
              <Link to={`/orgs/link/${data.o_id}`} >
                  {data.org}
                </Link>
            </td>
            </tr>
            <tr>
              <td scope="col">Условия оплаты</td>
              <td scope="col">{data.pay_cond}</td>
            </tr>
            <tr>
              <td scope="col">Дата предоставления КП</td>
              <td scope="col">{data.date}</td>
            </tr>
            <tr>
              <td scope="col">Срок действия КП</td>
              <td scope="col">{data.end_date}</td>
            </tr>
            <tr>
              <td scope="col">Статус КП</td>
              <td scope="col">{data.cp_st}</td>
            </tr>
            <tr>
              <td scope="col" colSpan="2"><h5>Описание работ от поставщика</h5></td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">{data.info}</td>
            </tr>
            <tr>
              <td scope="col" colSpan="2"><h5>Документация от поставщика</h5></td>
            </tr>
            <tr>
              <td scope="col" colSpan="2">{data.docs.map((item, i)=>{
        return (
          <p className="text-justify">{item}</p>
       )})}
       </td>
            </tr>
          </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
         
          <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Добавить документ</button>


          <h5 className="text-justify">Разбивка стоимости</h5>
          <table className="w-100">
                <thead></thead>
                <tbody>
                    <tr>
                        <td valign='top' align='justify' width="50%">
          <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
        <th scope="col">Наименование работ</th>
        <th scope="col">Единицы измерения</th>
        <th scope="col">Кол-во</th>
      </tr>
    </thead>
    <tbody>
      {data.tz_costs.map((item, i)=>{
        return (
      <tr>
        <td>{item.task}</td>
        <td>{item.metr}</td>
        <td>{item.count}</td>
      </tr>)})}
    </tbody>
  </table> 
  </td>
  <td valign='top' align='justify' width="50%">
  <table className="table" id="org_table">
    <thead>
      <tr className="org_head">
        <th scope="col">Цена б/НДС/ед.</th>
        <th scope="col">Итого б/НДС</th>
        <th scope="col">Комментарий</th>
      </tr>
    </thead>
    <tbody>
      {data.costs.map((item, i)=>{
        return (
      <tr>
        <td>{item.ppu}</td>
        <td>{item.sum}</td>
        <td>{item.info}</td>
      </tr>)})}
    </tbody>
  </table> 
  </td>
</tr>
</tbody>
</table>



  <h5 className="text-justify">График выполнения работ</h5>
  <table className="w-100">
                <thead></thead>
                <tbody>
                    <tr>
                        <td valign='top' align='justify' width="50%">
          <table className="table" id="org_table">
    <thead>
    <tr className="org_head">
        <th scope="col">Наименование работ</th>
        <th scope="col" colSpan="2">Требования клиента</th>
      </tr>
      <tr className="org_head">
        <th scope="col"></th>
        <th scope="col">Период, КН</th>
        <th scope="col">Срок</th>
      </tr>
    </thead>
    <tbody>
      {data.tz_calendars.map((item, i)=>{
        return (
      <tr>
        <td>{item.name}</td>
        <td>{item.period}</td>
        <td>{item.term}</td>
      </tr>)})}
    </tbody>
  </table> 
  </td>
  <td valign='top' align='justify' width="50%">
  <table className="table" id="org_table">
    <thead>
    <tr className="org_head">
        <th scope="col" colSpan="2">Предложение поставщика</th>
      </tr>
      <tr className="org_head">
        <th scope="col">Период, КН</th>
        <th scope="col">Срок</th>
      </tr>
    </thead>
    <tbody>
      {data.calendars.map((item, i)=>{
        return (
      <tr>
        <td>{item.period}</td>
        <td>{item.term}</td>
      </tr>)})}
    </tbody>
  </table> 
  </td>
</tr>
</tbody>
</table>

  <h5 className="text-justify">История изменений</h5>
  <p className="text-justify">{data.history}</p>
</div>
</div>
)
  }
}

export default One_CP;