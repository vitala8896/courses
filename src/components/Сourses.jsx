import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { setCurrency } from '../services/API/currency'


const Сourses = () => {
  const dispatch = useDispatch()
  const { courses } = useSelector(state => ({
    courses: state.currency.currency
  }))
  useEffect(() => { 
    if(courses.length === 0){
     dispatch(setCurrency()) 
    }   
  }, [dispatch, courses])
  const renderList = () => {     
    return courses.map((item, key) => {
      return (
        <Item key={key}>
          <Elem>{item.ccy}</Elem> 
          <Elem>{item.buy}</Elem> 
          <Elem>{item.sale}</Elem> 
        </Item>
      )
    })
  }
  return (
    <div> 
      <Header/>
        <Table>
        <Head>
          <Main>
            <Elems>Currency</Elems> 
            <Elems>buy</Elems> 
            <Elems>sale</Elems> 
          </Main>          
        </Head>
        <Body>
          { renderList() }
        </Body>          
        </Table>        
    </div>
  )
}

export { Сourses }

const Table = styled.table` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;
const Head = styled.thead`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 50%;
  padding: 15px 35px;
  margin-top: 15px;   
  border-radius: 3px;
  border: 1px solid rgb(233, 233, 233);
  cursor: pointer;
  background: #e6e6e6;
  :hover {
    border: 1px solid white;
    box-shadow: 1px 1px 20px  #e6e6e6;
  }
`;

const Main = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 100%;  
`;
const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
  width: 50%; 
`;
const Item = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 100%;
  padding: 15px 35px;
  margin-top: 15px;   
  border-radius: 3px;
  border: 1px solid rgb(233, 233, 233);
  cursor: pointer;
  :hover {
    border: 1px solid white;
    box-shadow: 1px 1px 20px  #e6e6e6;
  }
`;
const Elem = styled.td`
   padding: 5px 15px;
`;
const Elems = styled.th`
   padding-right: 35px;
   font-size: 26px;
   @media(max-width: 768px){
    font-size: 20px;    
   }
`;