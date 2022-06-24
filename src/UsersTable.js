import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import clientAPI from "./clentAPI/clientAPI";

export function UserTable(props){
  const {users,noticeParentForChange}=props
 
  

  const deleteBtnHandler=async (id)=>{
    console.log("ID"+id);
    await clientAPI.deleteUser(id);
    const temp_users=[...users]
    const result = temp_users.filter(user => user._id != id);
    noticeParentForChange(result)

  }

  const updateFieldHandler=async(user,fieldName)=>{
    //get input 
    const userInput=window.prompt(`Select value for field :${fieldName}`)
    const updateObj={[fieldName]:userInput}
    console.log(`Update Object ==== ${updateObj}`);
    try {
      const updatedUser= await clientAPI.updateUser(updateObj,user._id)
    //  console.log(updatedUser);
    
      let new_state=[...users]
      const oldUser_idx=users.findIndex((user)=>user._id == updatedUser._id )
      new_state.splice(oldUser_idx,1,updatedUser)
   

      noticeParentForChange(new_state)
    } catch (error) {
      console.log(error);
      // alert('Could not update')
      return
    }
    
  }
 

    return (
      
        <Table striped bordered hover>
           <thead>
    <tr>
      <th>Delete</th>
      <th>Full Name (Editable)</th>
      <th>IP</th>
      <th>Phone (Editable)</th>
      <th>Person ID</th>
      <th>City</th>
      <th>Country</th>



    </tr>
  </thead>
  <tbody>
 {
   users.length > 0 ?(
     users.map(user=>{
       return(
         <tr>
           <td> <Button onClick={()=>deleteBtnHandler(user._id)}> Delete</Button></td>
           <td onClick={e=>updateFieldHandler(user,'full_name')}> {user.full_name}</td>
           <td> {user.ip_adress}</td>
           <td onClick={e=>updateFieldHandler(user,'phone_number')} >{user.phone_number} </td>
           <td> {user.person_id}</td>
           <td>{user.city} </td>
           <td>{user.country} </td>

           
         </tr>
       )
     })
   ):
   (
     <tr>
       <td> om</td>
       <td>om </td>
       <td> om</td>

     </tr>
   )
}
  </tbody>
</Table>
    )
}