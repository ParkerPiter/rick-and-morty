import Card from './Card';

//!Debemos traer los personajes de characters que son exportados
export default function Cards(props) {
   const {characters} = props;
   const onClose = ()=> window.alert("Emulacion");
   return( 
      <div>
         {
            characters.map((character) =>{
               return(
                  <Card
                   key = {character.id}
                   name = {character.name}
                   status = {character.status}
                   species = {character.species}
                   gender = {character.gender}
                   origin = {character.origin.name}
                   image = {character.image}
                   onClose = {onClose}
                  /> 
               );
            })
         }
      </div>
   );
}
