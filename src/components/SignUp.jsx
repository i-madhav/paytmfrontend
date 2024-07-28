import React, { useState } from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import Button from '../utils/Button'
import BottomWarning from '../utils/BottomWarning'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    async function handlesignup() {
        try {
            const response = await fetch('http://localhost:8000/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName,
                    firstName,
                    lastName,
                    password
                })
            })

            if (response.ok) {
                window.location.href = "/signin";
                console.log("sigup successfully");
            }
                setUserName("")
                setFirstName("")
                setLastName("")
                setPassword("")

        } catch (error) {
            console.log("Unable to signup!");
        }
    }

    return (
        <div className=' h-screen flex items-center justify-center'>
            <div className='border border-black shadow-lg px-5 py-3 rounded w-[25%]'>
                <Heading heading={"SignUp"} para={"Enter your credentials"} />
                <InputBox placeholder={"ohhyah"} name={"Username"} onChange={e => setUserName(e.target.value)} value={userName} />
                <InputBox placeholder={"jhon"} name={"Firstname"} onChange={e => setFirstName(e.target.value)} value={firstName} />
                <InputBox placeholder={"doe"} name={"Lastname"} onChange={e => setLastName(e.target.value)} value={lastName} />
                <InputBox placeholder={"1234"} name={"Password"} onChange={e => setPassword(e.target.value)} value={password} />


                <div className=' mt-5'>
                    <Button text={"SignUp"} onClick={() => { handlesignup() }} />
                </div>
                <div>
                    <BottomWarning text={"Alredy have a account!"} to={"/signin"} toText={"signin"} />
                </div>
            </div>
        </div>
    )
}

export default SignUp;