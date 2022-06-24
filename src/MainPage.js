import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddUserComp } from "./AddUserComp";
import clientAPI from "./clentAPI/clientAPI";
import { CostTable } from "./CostTable";

export function MainPage(props){
  const [expenses,setExpenses]=useState([])
  const [needUpdate, setNeedUpdate]=useState(false)
  const [totalExpenses, setTotalExpenses] = useState('-')
   const letChildChangeParentState=()=>{
      setNeedUpdate(!needUpdate)
    // if(expenses?.length < 0 ){
    //   setExpenses([...expenses])
    //   return
    // }
    // setExpenses([])
   }

  const fillStateExpenses=async ()=>{
    try {
      const {expenses, totalExpenses}=await clientAPI.getUserExpenses();
      console.log(expenses);
      setExpenses(expenses);
      setTotalExpenses(totalExpenses)
    } catch (error) {
      alert(error.message) 
      setExpenses([])
    }
      
      
  }
  useEffect(()=>{
    fillStateExpenses();

  },[setExpenses, needUpdate])
    return (
        <Container>
        <Row className="inputForm">
           <AddUserComp  noticeParentForChange={letChildChangeParentState} expenses={expenses}/>
           </Row>
            <Row>
               <CostTable noticeParentForChange={letChildChangeParentState} expenses={expenses}/>
           
        </Row>
        <Row>
           <h5> Total Expenses : {totalExpenses} </h5>
        </Row>
       
    </Container>
    )
}