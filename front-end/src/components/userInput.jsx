import { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import "./userInput.css";

const UserInputArea = () => {
    const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        // if (name === 'password') setPassword(value);
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/travelplans', { state: { name } });
    };
    // const isFormValid = name && password;
    const isFormValid = name;
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Where would you like to go?</label>
                <input type='text' name='name' value={name} onChange={handleInputChange} placeholder='Enter Here'/>
            </div>
            {/* <div className='form-control'>
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Enter Password'/>
            </div> */}
            <input type="submit" 
            value="Continue" 
            disabled={!isFormValid} 
            className="btn"
            />
        </form>
    )
}

export default UserInputArea;
