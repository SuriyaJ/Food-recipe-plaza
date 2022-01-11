import React, { useState } from "react";
import Signupform from "./signupform";
//import SignupFormSuccess from "./signupformsuccess";
import Recipie from "../Rindex";


const Form = () => {
    const [formissubmitted, setformissubmitted] = useState(false);

    const submitForm = () => {
        setformissubmitted(true);
    };
    return ( <div > {!formissubmitted ? ( <Signupform submitForm = { submitForm } />) : (<Recipie/>) } </div>);
};

export default Form;