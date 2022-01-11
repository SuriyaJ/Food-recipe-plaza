import React, { useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => {

    const [values, setvalues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [errors, seterrors] = useState({});
    const [dataIscorrect, setdataIscorrect] = useState(false);

    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleformsubmit = (event) => {
        event.preventDefault();
        seterrors(validation(values));
        setdataIscorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIscorrect) {
            submitForm(true);
        }
    }, [errors]);
    return { handleChange, handleformsubmit, errors, values };

};

export default useForm;