import { useSelector } from "react-redux/es/exports"

const Favorites = () =>{
    
    const Favs = useSelector((state) => state.myFav);

    return(
        <>
            {Favs.map(({name, species, gender, image, status, origin, id})=>{
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
                  />
                )
            })}
        </>
    )
}