export const GuardarenStorage = ( clave, elemento) =>{
    //conseguir los elementos del localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    // comprobar de que sea un array
    if(Array.isArray(elementos)){
      //añadir un elemento nevo
      elementos.push(elemento);
    }else{
      //crar una peli nueva
      elementos = [elemento];
    }
    // guardar en el localsotrage
    localStorage.setItem(clave, JSON.stringify(elementos));
    // devolver el objeto
    return elemento;
}
