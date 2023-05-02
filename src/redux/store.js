import { legacy_createStore , applyMiddleware, compose} from "redux";
//! Importante que ahora redux usa legacy para crear el store

import rootReducer from "./reducer";
import thunkMiddleware from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//* Pasamos nuestro store y le agregamos lo que usemos en reducer
//* window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ o compose si la primera no está disponible. Esto permite utilizar las herramientas de desarrollo de Redux en el navegador si están instaladas.
const store = legacy_createStore (
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)
//* El “enhancer” también aplica el middleware thunkMiddleware a la tienda utilizando la función applyMiddleware. Esto permite utilizar funciones “thunk” en la tienda para manejar acciones asíncronas.

export default store;