import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory, withRouter} from 'react-router-dom';
import { listSelect } from '../actions/selectAction';
import { createTZ, deleteCal, deleteCst, listTechDetails, tzUpdate } from '../actions/tzAction';

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

const Tec_upd = ({match}) => {
  /*constructor(props) {
    super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick = (e) => {
     console.log("1")
    }*/

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    const [proj, setProj] = useState('')
    const [group, setGroup] = useState('')
    const [type, setType] = useState('')
    const [kind, setKind] = useState('')
    const [task, setTask] = useState('')
    const [pay_cond, setPay_cond] = useState('')
    const [end_date, setEnd_date] = useState(null)
    const [privacy, setPrivacy] = useState(false)
    const [info, setInfo] = useState('')
    const [taskCost, setTaskCost] = useState('')
    const [taskCal, setTaskCal] = useState('')
    const [metr, setMetr] = useState('')
    const [count, setCount] = useState(0)
    const [period, setPeriod] = useState(0)
    const [cal, setCal] = useState([])
    const [cst, setCst] = useState([])
    const [calendar, setCalendar] = useState([])
    const [cost, setCost] = useState([])
    const [last, setLast] = useState(0)
    const date = new Date().toISOString().slice(0, 10)


    const dispatch = useDispatch()
    const tzDetails = useSelector(state => state.tzDetails)
    const {loading, error, tech} = tzDetails
  
    const history = useHistory()
    const selectList = useSelector(state => state.selectList)

    useEffect(() => {
        dispatch(listSelect())
    }, [dispatch])


    useEffect(() => {
        dispatch(listTechDetails(match.params.tz_id))
      }, [dispatch, match])

    useEffect(() => {
        setCst(tech.cst)
        setCal(tech.cal)
    })

    const {load, err, data} = selectList

    const onClickCost = () => {
      let costs = [...cost]
      costs.push({
        task: taskCost, 
        metr: metr, 
        count: parseInt(count)
      })
      setCost(costs)

    }
    const onClickCalendars = () => {
      let calendars = [...calendar]
      calendars.push({
        task_name: taskCal, 
        period: parseInt(period), 
        term: 0
      })
      setCalendar(calendars)
    }

    const onClickAccept = () => {
        let hi = ''
        let proj_ = ''
        if (proj != ''){ 
            proj_ = proj
            hi = hi + " \n Изменен проект: " + proj_
        }else {
            proj_ = tech.proj
        }
        let group_ = ''
        if (group != ''){ 
            group_ = group
            hi = hi + " \n Изменена группа упаковки: " + group_
        }else {
            group_ = tech.group
        }
        let type_ = ''
        if (type != ''){ 
            type_ = type
            hi = hi + " \n Изменен тип упаковки: " + type_
        }else {
            type_ = tech.type
        }
        let kind_ = ''
        if (kind != ''){ 
            kind_ = kind
            hi = hi + " \n Изменен вид упаковки: " + kind_
        }else {
            kind_ = tech.kind
        }
        let task_ = ''
        if (task != ''){ 
            task_ = task
            hi = hi + " \n Изменен вид задания: " + task_
        }else {
            task_ = tech.task
        }
        let pay_cond_ = ''
        if (pay_cond != ''){ 
            pay_cond_ = pay_cond
            hi = hi + " \n Изменены условия оплаты: " + pay_cond_
        }else {
            pay_cond_ = tech.pay_cond
        }
        let end_date_ = ''
        if (end_date != ''){ 
            end_date_ = end_date
            hi = hi + " \n Изменена конечная дата: " + end_date_
        }else {
            end_date_ = tech.end_date
        }
        let info_ = ''
        if (info != ''){ 
            info_ = info
            hi = hi + " \n Изменена общая информация: " + info_
        }else {
            info_ = tech.info
        }

        dispatch(tzUpdate(parseInt(match.params.tz_id), proj_, group_, type_, kind_, task_, pay_cond_, end_date_, info_, calendar, cost, hi+tech.history))
        history.push('/tech/')
    }

    const onClickCstDel = (e) => {
        let costs = [...cst]

        let i = e.target.id
        
        dispatch(deleteCst(match.params.tz_id, costs[i].task))

        document.getElementById(e.target.id).innerHTML = 'Удалено'
        document.getElementById(e.target.id).setAttribute('disabled', true)
    }

    const onClickCalDel = (e) => {
        let calendars = [...cal]

        let i = e.target.id-100000

        console.log(calendars[i].task_name)
        
        dispatch(deleteCal(match.params.tz_id, calendars[i].task_name))

        document.getElementById(e.target.id).innerHTML = 'Удалено'
        document.getElementById(e.target.id).setAttribute('disabled', true)
    }
     
    return(
        <div>
          <div>
        <h4 id="name" className="text-center">Общие данные</h4>
        <h5>Общие данные</h5>
        <div>
        <table className="table w-50 h-1000 one_item" >
          <thead>
          </thead>
          <tbody>
            <tr>
              <td scope="col" colSpan='2'><h5>Общие данные</h5></td>
            </tr>
            <tr>
              <td scope="col">Клиент</td>
              <td scope="col">{userInfo.name}</td>
            </tr>
            <tr>
              <td scope="col">Проект</td>
              <td scope="col">
                  <input className='cr_input' name='proj' value={proj} onChange={(e)=>setProj(e.target.value)} placeholder={tech.proj}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Группа упаковки</td>
              <td scope="col">
                <label>Выберите из списка</label>
                {data.groups ? 
              <select className="form-select cr_input" name="dir" id="selector" value={group} onChange={(e)=>setGroup(e.target.value)}>
                {data.groups.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
                <label>Или введите собственное значение</label>
              <input className='cr_input' name='group' value={group} onChange={(e)=>setGroup(e.target.value)} placeholder={tech.group}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Тип упаковки</td>
              <td scope="col">
              <label>Выберите из списка</label>
                {data.types ? 
              <select className="form-select cr_input" name="dir" id="selector" value={type} onChange={(e)=>setType(e.target.value)}>
                {data.types.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
                <label>Или введите собственное значение</label>
              <input className='cr_input' name='type' value={type} onChange={(e)=>setType(e.target.value)} placeholder={tech.type}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Вид упаковки</td>
              <td scope="col">
              <label>Выберите из списка</label>
                {data.kinds ? 
              <select className="form-select cr_input" name="dir" id="selector" value={kind} onChange={(e)=>setKind(e.target.value)}>
                {data.kinds.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
                <label>Или введите собственное значение</label>
              <input className='cr_input' name='kind' value={kind} onChange={(e)=>setKind(e.target.value)} placeholder={tech.kind}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Вид задания</td>
              <td scope="col">
              <input className='cr_input' name='task' value={task} onChange={(e)=>setTask(e.target.value)} placeholder={tech.task}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Условия оплаты</td>
              <td scope="col">
              <label>Выберите из списка</label>
                {data.pay_conds ? 
              <select className="form-select cr_input" name="dir" id="selector" value={pay_cond} onChange={(e)=>setPay_cond(e.target.value)}>
                {data.pay_conds.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
                <label>Или введите собственное значение</label>
              <input className='cr_input' name='pay_cond' value={pay_cond} onChange={(e)=>setPay_cond(e.target.value)} placeholder={tech.pay_cond}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Дата начала сбора КП</td>
              <td scope="col">{tech.date}</td>
            </tr>
            <tr>
              <td scope="col">Дата завершения сбора КП</td>
              <td scope="col">
              <input className='cr_input' name='end_date' value={end_date} onChange={(e)=>setEnd_date(e.target.value)} placeholder="ГГГГ-ММ-ДД" placeholder={tech.end_date}></input>
                  </td>
            </tr>
            <tr>
              <td scope="col">Доступ к данным ТЗ</td>
              <td scope="col">
              
              { tech.privacy ? "Для доверенных поставщиков" : "Открыт"}</td>
                 
            </tr>
            <tr>
              <td scope="col">Статус ТЗ</td>
              <td scope="col">{'Активно'}</td>
            </tr>
          </tbody>
        </table>
        </div>
          <h5 id="name" className="text-justify">Документация</h5>
         
          <button type="button" className="btn btn-outline-dark" onClick={this.onClick}>Добавить</button>

          <h5 className="text-justify">Описание работ</h5>
          <textarea className='cr_input' name='adress' value={info} onChange={(e)=>setInfo(e.target.value)} placeholder={tech.info}></textarea>

          <h5 className="text-justify">Разбивка стоимости</h5>
          <table className="table w-25" id="cost_table">
    <thead>
      <tr className="org_head">
        <th scope="col">Наименование работ</th>
        <th scope="col">Единицы измерения</th>
        <th scope="col">Кол-во</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {cst ? cst.map((item, i)=>{
        return(
          <tr>
            <td>{item.task}</td>
            <td>{item.metr}</td>
            <td>{item.count}</td>
            <td><button type="button" className="btn btn-outline-dark" onClick={onClickCstDel} id={i}>Удалить</button></td>
          </tr>
        )}) : <a></a>
      }
       {cost ? cost.map((item, i)=>{
        return(
          <tr>
            <td>{item.task}</td>
            <td>{item.metr}</td>
            <td>{item.count}</td>
          </tr>
        )}) : <a></a>
      }
      <tr>
        <td>
        {data.tasks ? 
              <select className="form-select cr_input" name="dir" id="selector" value={taskCost} onChange={(e)=>setTaskCost(e.target.value)} placeholder='Не выбрано'>
                {data.tasks.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
              <input className='cr_input' name='task_name' value={taskCost} onChange={(e)=>setTaskCost(e.target.value)}></input>
        </td>
        <td>
        {data.metrics ? 
              <select className="form-select cr_input" name="dir" id="selector" value={metr} onChange={(e)=>setMetr(e.target.value)} placeholder='Не выбрано'>
                {data.metrics.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
              <input className='cr_input' name='task_name' value={metr} onChange={(e)=>setMetr(e.target.value)}></input>
        </td>
        <td><input className='cr_input' name='pay_cond' value={count} onChange={(e)=>setCount(e.target.value)}></input></td>
      
      
        <td colSpan="3"><button type="button" className="btn btn-outline-dark" onClick={onClickCost}>Добавить</button></td>
</tr>
    </tbody>
    </table>


  <h5 className="text-justify">График выполнения работ</h5>
  <table className="table w-25" id="cal_table">
    <thead>
      <tr className="org_head">
        <th scope="col">Наименование работ</th>
        <th scope="col">Требования клиента</th>
        <th scope="col"></th>
      </tr>
      <tr className="org_head">
        <th scope="col"></th>
        <th scope="col">Период, КН</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {cal ? cal.map((item,i)=>{
        return(
          <tr>
            <td>{item.task_name}</td>
            <td>{item.period}</td>
            <td> <button type="button" className="btn btn-outline-dark" onClick={onClickCalDel} id={100000+i}>Удалить</button></td>
          </tr>
        )}) : <a></a>
      }
      {calendar ? calendar.map((item,i)=>{
        return(
          <tr>
            <td>{item.task_name}</td>
            <td>{item.period}</td>
          </tr>
        )}) : <a></a>
      }
    <tr>
        <td>
                {data.task_names ? 
              <select className="form-select cr_input" name="dir" id="selector" value={taskCal} onChange={(e)=>setTaskCal(e.target.value)} placeholder='Не выбрано'>
                {data.task_names.map((item, i) => { return(
                <option value={item}>{item}</option>
                )})}
                </select> : <label>Список пуст</label>}
              <input className='cr_input' name='task_name' value={taskCal} onChange={(e)=>setTaskCal(e.target.value)}></input>
        </td>
        <td><input className='cr_input' name='pay_cond' value={period} onChange={(e)=>setPeriod(e.target.value)}></input></td>
    

        <td colSpan="3"><button type="button" className="btn btn-outline-dark" onClick={onClickCalendars}>Добавить</button></td>
  </tr>
    </tbody>
</table>
</div>
<button type="button" className="btn btn-outline-dark" onClick={onClickAccept}>Подтвердить</button>
</div>
)
  }
  const Tech_upd =withRouter(Tec_upd) 
  export default Tech_upd;