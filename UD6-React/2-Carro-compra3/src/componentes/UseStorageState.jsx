import { useState , useEffect } from "react";7
import LocalStorageServicio from "../servicios/LocalStorageServicio";


function UseStorageStateServicio(clave, valorInicial){
    const[state , setState]=useState(()=>{
        const valorGuardado=LocalStorageServicio.get(clave);
        return  valorGuardado !== null ? valorGuardado : valorInicial;
    });

    useEffect(()=>{
        LocalStorageServicio.set(clave,state);
    },[clave,state]);

    return [state , setState];
}

export default UseStorageStateServicio;