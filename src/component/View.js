import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link ,useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { viewaContact } from '../Action/action';
import LoadingBox from './LoadingBox'

function View() {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    const user = useSelector(state=>state.user)
    
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })
    

    useEffect(()=>{
        
        dispatch(viewaContact(id))
        
    },[])

 if(!user){
     return <h1>loading...</h1>
 }

    return (
       
        <div className="border shadow container mt-4 bg-danger ">
            <Link className="btn btn-primary mt-2 mb-2" to="/">Back to Home
            </Link>
            <ul className="list-group w-50 container mt-2 mb-2 ">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">Username: {user.username}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">phone: {user.phone}</li>
            </ul>

        </div>
        
    )
}

export default View
