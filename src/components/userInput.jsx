import { useState } from 'react'

const UserInputArea = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'password') setPassword(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
    };
    const isFormValid = name && password;
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' name='name' value={name} onChange={handleInputChange} placeholder='Enter Username'/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Enter Password'/>
            </div>
            <input type="submit" 
            value="Continue" 
            disabled={!isFormValid} 
            className="btn"
            />
        </form>
    )
}

export default UserInputArea
