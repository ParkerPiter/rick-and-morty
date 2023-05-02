export let ADD_FAVORITE = `ADD_FAVORITE`;
export let REMOVE_PJ = `REMOVE_PJ`;

// * Exportamos esta action que su tipo es de añadir y pasa el payload al store del personaje
export const addFav = (character) =>{
    return {type: ADD_FAVORITE, payload: character};
}

//* Exportamos esta action que su tipo es de remover y pasa el id al store 
export const removeFav = (id) =>{
    return{ type: REMOVE_PJ,payload: id}
}