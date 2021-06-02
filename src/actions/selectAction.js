import axios from "axios"
import { SELECT_ALL_FAIL, SELECT_ALL_REQUEST, SELECT_ALL_SUCCESS } from "../constants/selectConstants"

export const listSelect = () => async(dispatch) => {
    try {
  
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      dispatch({type: SELECT_ALL_REQUEST})
      let auth = "Bearer " + userInfo.token
  
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": auth
        },
        mode: 'cors'
    }
  
      const { data } = await axios.get('http://127.0.0.1:8000/api/techs/select', config)
  
      dispatch({
        type: SELECT_ALL_SUCCESS,
        payload: data.data
      })
    } catch (error) {
      dispatch({
        type: SELECT_ALL_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }