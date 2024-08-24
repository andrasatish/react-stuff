import { useState } from "react";
import './binding.css';

function Binding(){
    //DECLARATIONS
    //FUNCTIONS
    //API CALLS
    //useState -> ReactHook
    const [title, setTitle] = useState('This is the first REACT APP');
    const [username, setUsername] = useState('Sudheer');
    const [make,setMake] = useState('Audi');

    const updateMake = () => {
        setMake('TATA');
    }

    return (
        <>
            <h1>{title}</h1>
            <p>Username : {username}</p>
            <p>Car : <span className="text-bold">{make}</span></p>

            <button className="btn" onClick={updateMake}>update car</button>
        </>
    )
}

export default Binding;