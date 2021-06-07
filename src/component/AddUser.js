import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { addContact } from '../Action/action';
import LoadingBox from './LoadingBox'

function AddUser() {
    let history = useHistory();
    const dispatch = useDispatch()
    
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })

    const {name, username,email,phone} = input;
    const onInputChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandel =async (e)=> {
        e.preventDefault();
        dispatch(addContact(input))
        history.push("/")
    }

    

    return (
        
        <div className="container border shadow mt-4">
           <form onSubmit={submitHandel}>
           <div className="form-group">
                <label >Name</label>
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
                <label >Phone no.</label>
                <input type="tel" className="form-control"
                name="phone" value={phone}  id="exampleInputtel" placeholder="Phone no." onChange={onInputChange}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
            </form> 
        </div>
       
    )
}

export default AddUser



//for="exampleInputName" for="exampleInputPhoneno"  for="exampleInputEmail1" for="exampleInputUserName"