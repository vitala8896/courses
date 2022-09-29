import axios from '../axios'
import { setReduxCurrency, firstReduxSelect, secondReduxSelect 
} from '../../store/currencySlice'

export const setCurrency = () => {   
  return async dispatch => {
    try {
      await axios.get('/p24api/pubinfo?json&exchange&coursid=5').then(response => {
        dispatch(setReduxCurrency(response.data))
      }) 
    } catch (e) {
      console.log(e)
    }
  }
}
export const changeFirstSelect = (res) => {   
  return async dispatch => {    
    dispatch(firstReduxSelect(res))    
  }
}
export const changeSecondSelect = (res) => {  
  return async dispatch => {    
    dispatch(secondReduxSelect(res))   
  }
}