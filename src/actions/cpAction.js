import axios from "axios"
import { CP_CREATE_FAIL, CP_CREATE_REQUEST, CP_CREATE_SUCCESS, CP_DELETE_CAL_FAIL, CP_DELETE_CAL_REQUEST, CP_DELETE_CAL_SUCCESS, CP_DELETE_CST_FAIL, CP_DELETE_CST_REQUEST, CP_DELETE_CST_SUCCESS, CP_DETAILES_FAIL, CP_DETAILES_REQUEST, CP_DETAILES_SUCCESS, CP_LIST_FAIL, CP_LIST_REQUEST, CP_LIST_SUCCESS, CP_UPDATE_FAIL, CP_UPDATE_REQUEST, CP_UPDATE_SUCCESS } from "../constants/cpConstants"

export const listCPs = () => async(dispatch) => {
    try {

        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
        dispatch({type: CP_LIST_REQUEST})
        let auth = "Bearer " + userInfo.token
    
    
        const config = {
          headers: {
              'Content-Type': 'application/json',
              "Authorization": auth
          },
          mode: 'cors'
      }
    
        const { data } = await axios.get('http://127.0.0.1:8000/api/cps/',config)
    
        dispatch({
          type: CP_LIST_SUCCESS,
          payload: data.data
        })
      } catch (error) {
        dispatch({
          type: CP_LIST_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
      }
  }



  export const listCPDetails = (id) => async(dispatch) => {
    try {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
      dispatch({type: CP_DETAILES_REQUEST})
      
      let auth = "Bearer " + userInfo.token
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      const { data } = await axios.get(`http://127.0.0.1:8000/api/cps/${id}`, config)
  
      dispatch({
        type: CP_DETAILES_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: CP_DETAILES_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }


  export const createCP = (tz_id, pay_cond, end_date, info, cal, cst, date, docs, proj) => async(dispatch) => {
    try {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      dispatch({type: CP_CREATE_REQUEST})
      let auth = "Bearer " + userInfo.token
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      await axios.post(`http://127.0.0.1:8000/api/cps/`, {tz_id, pay_cond, end_date, info, cal, cst, date, docs, proj}, config)
  
      dispatch({
        type: CP_CREATE_SUCCESS,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: CP_CREATE_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }


  export const cpUpdate = (cp_id, pay_cond, end_date, info, cal, cst, docs) => async(dispatch) => {
    try {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      dispatch({type: CP_UPDATE_REQUEST})
      let auth = "Bearer " + userInfo.token
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      await axios.put(`http://127.0.0.1:8000/api/cps/${cp_id}`, {pay_cond, end_date, info, cal, cst, docs}, config)
  
      dispatch({
        type: CP_UPDATE_SUCCESS,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: CP_UPDATE_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }


  export const cpDeleteCal = (cp_id) => async(dispatch) => {
    try {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      dispatch({type: CP_DELETE_CAL_REQUEST})
      let auth = "Bearer " + userInfo.token
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      await axios.post(`http://127.0.0.1:8000/api/cps/delete_cal`, cp_id, config)
  
      dispatch({
        type: CP_DELETE_CAL_SUCCESS,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: CP_DELETE_CAL_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }
  
  
  export const cpDeleteCst = (cp_id) => async(dispatch) => {
    try {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      dispatch({type: CP_DELETE_CST_REQUEST})
      let auth = "Bearer " + userInfo.token
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      await axios.post(`http://127.0.0.1:8000/api/cps/delete_cst`, cp_id, config)
  
      dispatch({
        type: CP_DELETE_CST_SUCCESS,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: CP_DELETE_CST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }