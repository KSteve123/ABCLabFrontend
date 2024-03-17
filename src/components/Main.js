import React from "react";
import {setGlobalState, useGlobalSate} from '../state';

export default function Profile(){
    const [x] = useGlobalSate("");
    if(x !="Incorrect Credential"){
        console.log(x);
        //return <Redirect to="/PatientLogin"/>;
    }
    console.log(x);
    return <div>you are allowed</div>;


}