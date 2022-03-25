import { GET_DATA_FROM_STORE } from "../actions"



const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_DATA_FROM_STORE:
    return     { ...state, data: [ payload] }


    case "asdsadsad":
        return {}

  default:
    return state
  }
}
