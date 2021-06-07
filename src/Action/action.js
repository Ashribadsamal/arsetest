import Axios from "axios"


//get
export const getContact=()=>async(dispatch)=>{
    dispatch({
        type: "USER_REQUEST"
    });
    
    const {data} = await Axios.get("http://localhost:3002/users");
    dispatch({
        type: "USER_GET_SUCCESS",
        payload: data,
    })
    

}

//add
export const addContact=(input)=>async(dispatch)=>{
        const {data} = await Axios.post("http://localhost:3002/users",input);
        dispatch({
            type: "USER_ADD_SUCCESS",
            payload: data,
        })
}

//edit
export const EditContact=(input,id)=>async(dispatch)=>{ 
    const {data} = await Axios.put(`http://localhost:3002/users/${input.id}`,input)
    dispatch({
        type: "USER_EDIT_SUCCESS",
        payload: data,
    })

}

//View user from id
export const viewaContact =(id)=>async(dispatch)=>{
    const result = await Axios.get(`http://localhost:3002/users/${id}`);
    dispatch({
        type: "USER_VIEW",
        payload: result.data,
    })
}


//delete
export const deleteContact = (id) => async (dispatch) => {
    await Axios.delete(`http://localhost:3002/users/${id}`);
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };