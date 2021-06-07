const initialState={
    users: [],
    user: null,
  }

 export const userReducer = (state =initialState,action)=>{
    switch(action.type){
        case "USER_REQUEST":
            return{
                loading: true
            }        
        case "USER_GET_SUCCESS":
        return{
            
            ...state,
            loading:false,
            users:action.payload
        }
        
        case "USER_EDIT_SUCCESS":
            return{
                ...state,
                users:state.users.map((item)=>item.id == action.payload.id ? action.payload : item),
            } 
           
        case "USER_GETA_SUCCESS":
            let arr = state.users.filter((item)=>item.id == action.payload)
            arr = arr.values();
            for (let val of arr){
                arr = val;
            }
            return{
                ...state,
                user: arr
            }
        case "USER_ADD_REQUEST":
           
        case "USER_ADD_SUCCESS":
            return{
                
                users:[action.payload,...state.users]
            }
        
        case "USER_VIEW":
            
            return{
                ...state,
                user:action.payload
            }
        case "DELETE_USER":
                return {
                  ...state,
                  users: state.users.filter((Item) => Item.id !=action.payload),
                };
        default:
            return state;
    }
}

