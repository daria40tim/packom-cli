import { ORG_FAIL, ORG_LIST_FAIL, ORG_LIST_REQUEST, ORG_LIST_SORTEDBY_NAME, ORG_LIST_SUCCESS, ORG_REQUEST, ORG_SUCCESS, ORG_UPDATE_REQUEST, ORG_UPDATE_FAIL, ORG_UPDATE_SUCCESS, ADD_ORG_REQUEST, ADD_ORG_SUCCESS, ADD_ORG_FAIL } from '../constants/orgConstants'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const listOrg = () => async(dispatch) => {
  try {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: ORG_LIST_REQUEST})
    let auth = "Bearer " + userInfo.token


    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.get('http://127.0.0.1:8000/api/orgs/',config)

    dispatch({
      type: ORG_LIST_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: ORG_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
 

export const listOrgDetails = (id) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispatch({type: ORG_REQUEST})
    
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.get(`http://127.0.0.1:8000/api/orgs/${id}`, config)

    dispatch({
      type: ORG_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORG_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const sortOrgsByName = (orgs, nameFlag) => async(dispatch) => {
  try {
    dispatch({type: ORG_LIST_SORTEDBY_NAME})

    const data = orgs.sort((a, b)=>{
      if ((a.name > b.name) && nameFlag) {
        return -1;
      }
      if ((a.name < b.name) && nameFlag) {
        return 1;
      }
      if ((a.name > b.name) && !nameFlag) {
        return 1;
      }
      if ((a.name < b.name) && !nameFlag) {
        return -1;
      }
      return 0;
    })

    dispatch({
      type: ORG_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORG_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listOrgDetailsUpdate = (adress, phone, email, site, specs, password, info) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: ORG_UPDATE_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.put(`http://127.0.0.1:8000/api/orgs/`, {adress, phone, email, site, specs, password, info}, config)

    dispatch({
      type: ORG_UPDATE_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: ORG_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const listOrgAdd = (id) => async(dispatch) => {
  try {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    dispatch({type: ADD_ORG_REQUEST})
    let auth = "Bearer " + userInfo.token

    const config = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": auth
      },
      mode: 'cors'
  }

    const { data } = await axios.put(`http://127.0.0.1:8000/api/orgs/${id}`,{}, config)

    dispatch({
      type: ADD_ORG_SUCCESS,
      payload: true
    })
  } catch (error) {
    dispatch({
      type: ADD_ORG_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
