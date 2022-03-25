import axios from "axios"
export const GET_DATA_FROM_STORE="GET_DATA_FROM_STORE"

const data=(param)=>{
   return{
    type:GET_DATA_FROM_STORE,
    payload:param
   }
}

export function dataApi() {
    return dispatch => {
        console.log("asd");
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(resDis => dispatch(data(resDis)))
            .catch(err => console.log(err))
    }
}

