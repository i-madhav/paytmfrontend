import React, { useState } from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import Button from '../utils/Button'
import BottomWarning from '../utils/BottomWarning'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    console.log(userName, password);
    async function handleSignIn() {
        try {
            const response = await fetch('http://localhost:8000/api/v1/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName,
                    password
                })
            });

            const data = await response.json();
            console.log(data.data.accessToken);

            if (response.ok) {
                localStorage.setItem("accessToken" , data.data.accessToken)
                navigate("/dashboard")
            }
        } catch (error) {
            console.log("Unable to signin" + error?.message);
        }
    }
    return (
        <div className=' h-screen flex items-center justify-center'>
            <div className=' border border-black p-3 rounded space-y-3'>
                <Heading heading={"SignIn"} para={"Enter your credentials to access your account"} />
                <InputBox placeholder={"Your unique username"} name={"username"} onChange={(e) => setUserName(e.target.value)} value={userName} />
                <InputBox placeholder={"password"} name={"password"} onChange={(e) => setPassword(e.target.value)} value={password} />

                <div className='mt-5'>
                    <Button text={"SignIn"} onClick={() => handleSignIn()} />
                </div>

                <div>
                    <BottomWarning text={"Do not have a account!"} to={"/signup"} toText={"signup"} />
                </div>
            </div>
        </div>
    )
}

export default SignIn