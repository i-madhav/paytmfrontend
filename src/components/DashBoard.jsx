import { Appbar } from '../utils/AppBar'
import { Balance } from '../utils/Balance'
import { Users } from '../utils/User'
import React, { useState , useEffect } from 'react'

const DashBoard = () => {
    const [balance, setBalance] = useState("");
    useEffect(() => {
        handleGetBalance();
    }, []);
    async function handleGetBalance() {
        const response = await fetch('http://localhost:8000/api/v1/account/balance' , {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const data = await response.json();
        setBalance(data.data.balance);
    }

    return (
        <div className=' space-y-5 p-3'>
            <Appbar />
            <Balance value={balance} />
            <Users />
        </div>
    )
}

export default DashBoard;