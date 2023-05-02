import Card from '../Card/Card.jsx';
import style from '../Cards/Cards.module.css'

//!Debemos traer los personajes de characters que son exportados
function Cards({characters, onClose}) {
   // const {characters} = props;
   return( 
      <div className={style.contenedor}>
         {
            characters.map(({name, species, gender, image, status, origin, id}) =>{
               return(
                  <Card
                   key = {id}
                   id = {id}
                   name = {name}
                   status = {status}
                   species = {species}
                   gender = {gender}
                   origin = {origin.name}
                   image = {image}
                   onClose = {onClose}
                  /> 
               );
            })
         }
      </div>
   );
}
export default Cards