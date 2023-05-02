const validation = (userData, errors, setErrors)=>{
    //! Validacion de user
    if(!userData.user) {
        setErrors({...errors, user: "Por favor complete este campo"});
    }
    else if(userData.user.length > 35) {
        setErrors({...errors, user: "No debe superar los 35 caracteres"});
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{4})+$/.test(userData.user)){
        setErrors({...errors, user: "Email invalido"});
    }
    else{
        setErrors({...errors, user:""})
    }

    //! Password
    if(userData.password < 6 || userData.password >10){
        setErrors({...errors, password: "Longitud no es valida"});
    }
    else if(!/\d/.test(userData.password)){
        setErrors({...errors, password: "Debe contener al menos 1 numero"});
    }
    else{
        setErrors({...errors,password: ""});
    }
};

export default validation;