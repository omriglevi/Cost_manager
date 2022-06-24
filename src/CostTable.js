import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import clientAPI from "./clentAPI/clientAPI";

export function CostTable(props){
  const { expenses,noticeParentForChange}=props
 
  

  const deleteBtnHandler=async (cost)=>{
    try {
       clientAPI.deleteCostFromUser(cost)
       const newState = [...expenses.filter((expense)=>{
       return expense._id !==  cost._id
       })]

    noticeParentForChange(newState)
    } catch (error) {
      console.log(error);
    }

   

  }

  
 

    return (
      
        <Table striped bordered hover>
           <thead>
    <tr>
      <th>Delete</th>
      <th>Description)</th>
      <th>Category</th>
      <th>Price</th>
    


    </tr>
  </thead>
  <tbody>
 {
   expenses?.length > 0 ?(
     expenses.map(expense=>{
       return(
         <tr>
           <td> <Button onClick={()=>deleteBtnHandler(expense)}> Delete</Button></td>
           <td> {expense.description || '--'}</td>
           <td> {expense.category || '--'}</td>
           <td> {expense.price || '--'} </td>   
         </tr>
       )
     })
   ):
   (
     <tr>
       <td> </td>
     </tr>
   )
}
  </tbody>
</Table>
    )
}