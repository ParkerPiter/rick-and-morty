import { ADD_FAVORITE, REMOVE_PJ } from "./action";

//* Estado para el storage
const initialState = {
    myFav: [],
}

// * Toma el estado actual de la tienda y una acción como argumentos y devuelve el nuevo estado de la tienda en función de la acción
const rootReducer = (state= initialState  , action)=>{
    switch(action.type){

        //* En este caso el reducer devuelve el estado agregando el payload al array
        case ADD_FAVORITE:
            return{...state, myFav: [state.myFav,action.payload]};
        
        //* En este caso el reducer devuelve el estado donde se elimina el array cuyo id conicida con el payload
        case REMOVE_PJ:
            return{...state, myFav: state.myFav.filter((char)=>char.id !== action.payload),}

        default:
            return{...state}
    }
}

export default rootReducer;