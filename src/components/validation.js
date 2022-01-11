
const validation = (values ) => {
    let errors={};
    if(!values.fullname)
    {
        errors.fullname="name is required";
    }
if(!values.email)
{       
    errors.email="email is required";
}
else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="email is inavlid";
}
if(!values.password)
{
    errors.password="password is required";
}
else if(values.password.length<5){
    errors.email="password must be more than 5 characters";
}



        return errors;
    }

export default validation;
