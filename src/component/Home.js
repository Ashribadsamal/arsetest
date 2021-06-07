import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import { deleteContact, getContact } from '../Action/action';
import LoadingBox from './LoadingBox'


function Home() {
    const users = useSelector(state=>state.users)
    const loading = useSelector(state=>state.loading)
    const [user,setUser] = useState([])
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getContact())
        setUser(users.reverse())
    },[])


    const deleteHandel =(id)=>{
        dispatch(deleteContact(id))
    }

   
    return (
        <div>
            {loading ?(
                <LoadingBox></LoadingBox>
            ):(
        <div className="container pt-2">
            <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item,index)=>(
                     <tr  key={item.id}>
                     <th scope="row">{index + 1}</th>
                     <td >{item.name}</td>
                     <td>{item.username}</td>
                     <td>{item.email}</td>
                     <td>
                         <Link className= "btn btn-primary mr-2" to={`/view/${item.id}`}>View</Link>
                         <Link className= "btn btn-outline-success mr-2" to ={`/${item.id}`}>Edit</Link>
                         <Link className= "btn btn-outline-success" onClick={()=>deleteHandel(item.id)} >Delete</Link>
                     </td>
                     </tr>
                ))}
            </tbody>
            </table>

        </div>
        )}
        </div>  
    )
}

export default Home



