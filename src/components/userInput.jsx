import { useState } from 'react'

const UserInputArea = () => {
    const [position, setPosition] = useState({top: 100, left: 100});
    // const moveInput = () => {
    //     setPosition({
    //         top: position.top + 20,
    //         left: position.left + 20,
    //     });
    // }
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder='Enter Username'/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='text' placeholder='Enter Password'/>
            </div>
            <input type="submit" 
            value="Login" 
            // onClick={moveInput} 
            className="btn" 
            // style={{position: "absolute", top: `${position.top}px`, left: `${position.left}px`,}}
            />
        </form>
    )
}

export default UserInputArea
