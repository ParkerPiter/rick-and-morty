export default function Card(props) {
   return ( //* Destructuring al objeto para usarlo por partes 
            //! {name, species, gender, origin, image, status, id, onClose}
            //? Importamos el objeto RICK de
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>ID: {props.id}</h2>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin} </h2>
         <img src={props.image} alt='' /> 
      </div>
   );
}
