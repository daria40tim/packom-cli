import {TZ_LIST_FAIL, TZ_LIST_SUCCESS, TZ_LIST_REQUEST, TZ_DETAILS_REQUEST, TZ_DETAILS_SUCCESS, TZ_DETAILS_FAIL, TZ_CREATE_REQUEST, TZ_CREATE_SUCCESS, TZ_CREATE_FAIL, TZ_DELETE_CAL_REQUEST, TZ_DELETE_CAL_SUCCESS, TZ_DELETE_CAL_FAIL, TZ_DELETE_CST_REQUEST, TZ_DELETE_CST_SUCCESS, TZ_DELETE_CST_FAIL, TZ_UPDATE_REQUEST, TZ_UPDATE_SUCCESS, TZ_UPDATE_FAIL } from '../constants/tzConstants'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const listTechs = () => async(dispatch) => {
  try {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: TZ_LIST_REQUEST})
    let auth = "Bearer " + userInfo.token


    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.get('http://127.0.0.1:8000/api/techs/', config)

    dispatch({
      type: TZ_LIST_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: TZ_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const listTechDetails = (id) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispatch({type: TZ_DETAILS_REQUEST})
    
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.get(`http://127.0.0.1:8000/api/techs/${id}`, config)

    dispatch({
      type: TZ_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TZ_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createTZ = (proj, group, type, kind, task, pay_cond, end_date, privacy, info, cal, cst, date) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: TZ_CREATE_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    await axios.post(`http://127.0.0.1:8000/api/techs/`, {proj, group, type, kind, task, pay_cond, end_date, privacy, info, cal, cst, date}, config)

    dispatch({
      type: TZ_CREATE_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: TZ_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteCal = (tz_id, task_name) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: TZ_DELETE_CAL_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    await axios.post(`http://127.0.0.1:8000/api/techs/delete_cal`, {tz_id, task_name}, config)

    dispatch({
      type: TZ_DELETE_CAL_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: TZ_DELETE_CAL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const deleteCst = (tz_id, task) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: TZ_DELETE_CST_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    await axios.post(`http://127.0.0.1:8000/api/techs/delete_cst`, {tz_id, task}, config)

    dispatch({
      type: TZ_DELETE_CST_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: TZ_DELETE_CST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const tzUpdate = (tz_id, proj, group, type, kind, task, pay_cond, end_date, info, cal, cst, history) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: TZ_UPDATE_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    await axios.put(`http://127.0.0.1:8000/api/techs/${tz_id}`, {proj, group, type, kind, task, pay_cond, end_date, info, cal, cst, history}, config)

    dispatch({
      type: TZ_UPDATE_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: TZ_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}