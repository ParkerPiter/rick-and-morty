import s from'./App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {

   //* Funcion de Search
    const onSearch = (id) =>{
      const URL_BASE = "https://rickandmortyapi.com/api/";
      //! Validación para que no se repitan pj
      // if(characters.find((char)=> char.id === id)){
      //    return alert("No se puede repetir personaje")

       fetch(`${URL_BASE}/character/${id}`)
         .then(response=>response.json())
         .then(data=>{
            if(data.name && !characters.find((char)=> char.id === data.id)){
             setCharacters((oldChars)=>[...oldChars, data]);
             // setCharacters([...charaters, data])
            }
            else{
             alert("No hay personaje con ese nombre");
            }
       });
    };

    //* Funcion de Close
    const onClose = (id)=>{
      setCharacters(characters.filter((char) => char.id !== id))
      //! Filter no modifica el array original
    }

   //! HOOKS
    //* Estado
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
    //* Hook para storagelocal
   const [access, setAccess] = useState(false);
  
   //? Credenciales de prueba
   const user = "gabriel.leal.n1@gmail.com";
   const password = "qwerty1!";

   //* Location
   const {pathname} = useLocation(); //* Es un objeto

   //! Funcion Login
   const login = (userData)=>{
      if(userData.user === user && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
      else{
         alert("Credenciales incorrectas")
      }
   }
    //* Usamos este hook para luego de logear cambiar de pagina
    useEffect(()=>{
      !access && navigate("/")
   }, [access])

  

   //!RENDERIZADO
   return (
      <div className={s.app}>
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:detailId' element={<Detail />}></Route>
         </Routes> 
      </div>
   );
}

export default App;
