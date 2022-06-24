
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {  addCost, addUser } from "./clentAPI/clientAPI";

export function AddUserComp(props){
    const {noticeParentForChange,expenses}=props
    const [description,setDescription]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const [phoneNum,setPhoneNum]=useState("")

   

     const addOrUpdateBtnClicked=async ()=>{
         const obj={
            "description":description,
            "category":category,
            "price":Number(price),
            "spent_by":"62b488e4f92eeb2a3c5849a6"
        }
        
        try {
          const user= await addCost(obj)
       if(user){
         let new_state=[...expenses, obj]
          noticeParentForChange(new_state)
          return 
       }
        } catch (error) {
          console.log(error);
          return
          
        }
        }
  
      
  return(
        <Form>
      <Row>
        <Col>
          <Form.Control onChange={(e)=>setDescription(e.target.value) } placeholder="description" />
        </Col>
        <Col>
          <Form.Control onChange={(e)=>setCategory(e.target.value) } placeholder="category" />
        </Col>
        <Col>
          <Form.Control onChange={(e)=>setPrice(e.target.value) } placeholder="price" />
        </Col>
        <Col>
          <Button onClick={addOrUpdateBtnClicked} > Add Cost</Button>
        </Col>
      </Row>
    
    
    </Form>
    )
}