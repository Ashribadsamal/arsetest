import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { EditaContact, EditContact, viewaContact,addContact } from '../Action/action';
import LoadingBox from './LoadingBox'

function EditUser() {
    let history = useHistory();
    let {id} = useParams()
    
    let user = useSelector(state=>state.user)
    let users = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })
    

    useEffect(() => {
        if(user != null){
            setInput(user)
        }
    }, [user])
   

    useEffect(() => {
       loadUser()
    }, [])
    

   const {name, username,email,phone} = input;
    const onInputChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        
    }

    const submitsHandel =async(e)=> {
        e.preventDefault();
        dispatch(EditContact(input))
        history.push("/")
    }

    const loadUser =() =>{
        dispatch( viewaContact(id) )
        console.log(id) 
    }
    if(!input){
        return <h1>loading...</h1>
    }

   return(
    
    <div className="container border shadow mt-4">
    <form onSubmit={submitsHandel}>
    <div className="form-group">
         <label>Name</label>
         <input type="text" className="form-control"
         name="name" value={name} placeholder="Enter Name" onChange={ onInputChange}/>
     </div>
     <div className="form-group">
         <label >User Name</label>
         <input type="text" className="form-control" id="exampleInputUserName"
         name="username" value={username}  placeholder="Enter UserName" onChange={onInputChange}/>
         
     </div>
     <div className="form-group">
         <label >Email address</label>
         <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} placeholder="Enter email" onChange={onInputChange}/>
         
     </div>
     <div className="form-group">
         <label>Phone no.</label>
         <input type="tel" className="form-control"
         name="phone" value={phone}  id="exampleInputtel" placeholder="Phone no." onChange={onInputChange}/>
     </div>
     
     <button type="submit" className="btn btn-primary">Update </button>
     
     </form> 
     </div>
    
     ) 
}

export default EditUser
