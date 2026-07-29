interface Props {

    type:string;

    placeholder:string;

    value:string;

    name:string;

    onChange:
    (
        e:React.ChangeEvent<HTMLInputElement>
    )=>void;

}


export default function Input({

    type,
    placeholder,
    value,
    name,
    onChange

}:Props){


return (

<input

type={type}

name={name}

placeholder={placeholder}

value={value}

onChange={onChange}

className="auth-input"

/>

)

}