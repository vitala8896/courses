import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { setCurrency, changeFirstSelect, changeSecondSelect } from '../services/API/currency'


const Сonverter = () => {
  const dispatch = useDispatch()
  const { courses, inputs, select } = useSelector(state => ({
    courses: state.currency.currency,
    inputs: state.currency.inputs,
    select: state.currency.select,
  }))

  const [first, setFirst] = useState(inputs.first)
  const [second, setSecond] = useState(inputs.second)

  useEffect( () => { 
    if(courses.length === 0){
     dispatch(setCurrency()) 
    }   
  }, [dispatch, courses, inputs, select])  
  const check = (sec) => {
    if (sec === "EUR"){
      return courses[1].buy
    }else if (sec === "USD"){
      return courses[0].buy
    }else{
      return 1
    }
  }
  const changeSelect1 = (e) => {
    dispatch(changeFirstSelect(e))
    dispatch(changeSecondSelect(e))
    setFirst(1)
    setSecond((first/check(select.second)).toFixed(3))    
  }
  const changeSelect2 = (name) => { 
    dispatch(changeFirstSelect(name))
    dispatch(changeSecondSelect(name))
    setFirst(1)
    setSecond((1/check(name)).toFixed(3))
  }
  const firstHandle = e => {
    let val = e.target.value
    setFirst(val)
    setSecond((val/check(select.second)).toFixed(3))
  }  
  const secondHandle = () => {
    setSecond(first)
  }
  return (
    <div> 
      <Header/>
      <Container>
        <h2>{first} Українська(-их) гривня(-нь) дорівнює</h2>
        <Result>{second}{(select.second).toLowerCase()}</Result>
        <IN>
          <input placeholder='1' value={ first } onChange={e => firstHandle(e)}/>
          <div>
            <select value="Українська гривня" onChange={e => changeSelect1(e.target.value)}>
              <option value="UK">Українська гривня</option>
            </select>
          </div>
        </IN>
        <OUT>
          <input placeholder='1' value={ second } onChange={e => secondHandle(e)} disabled/>
          <div>
            <select onChange={e => changeSelect2(e.target.value)}>
              <option value="UK">Українська гривня</option>
              <option value="EUR">Євро</option>
              <option value="USD">Долар США</option>
            </select>
          </div>
        </OUT>
        <p>* конвертер тільки для гривень !</p>
      </Container>
    </div>
  )
}

export { Сonverter }

const Container = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 70%;
  margin: 0 auto;
`;
const IN = styled.div`  
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;  
  margin-bottom: 15px;
  :focus{
    border: 1px solid black;
  }
  input {
    width: 150px;
    height: 30px;
    border: 0;
    border-right: 1px solid gray;
    margin: 15px;
    font-size: 20px;
    :focus{
      outline: none;
    }
  }
  div {
    width: 250px;
    select {
      display: flex;
      justify-content: flex-end;
      width: 90%;
      border: 0; 
      font-size: 20px; 
      :focus{
        outline: none;
      }   
    }
  }
`;
const OUT = styled.div`  
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;  
  input {
    width: 150px;
    height: 30px;
    border: 0;
    border-right: 1px solid gray;
    margin: 15px;
    font-size: 20px;
    :focus{
      outline: none;
    }
  }
  div {
    width: 250px;
    select {
      width: 90%;
      border: 0; 
      font-size: 20px; 
      :focus{
        outline: none;
      }    
    }
  }
`;
const Result = styled.div`  
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;