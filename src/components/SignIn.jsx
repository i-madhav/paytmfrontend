import React from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import Button from '../utils/Button'
import BottomWarning from '../utils/BottomWarning'

const SignIn = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>
            <div className=' border border-black p-3 rounded space-y-3'>
                <Heading heading={"SignIn"} para={"Enter your credentials to access your account"} />
                <InputBox placeholder={"Your unique username"} name={"username"} />
                <InputBox placeholder={"password"} name={"password"} />

                <div className='mt-5'>
                    <Button text={"SignIn"} />
                </div>

                <div>
                    <BottomWarning text={"Do not have a account!"} to={"/signup"} toText={"signup"} />
                </div>
            </div>
        </div>
    )
}

export default SignIn