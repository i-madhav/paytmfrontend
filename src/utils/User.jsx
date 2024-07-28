import { useEffect, useState } from "react"
import Button from '../utils/Button'
import { SendMoney } from "../components/SendMe";

export const Users = () => {
    // Replace with backend call
    const [usersData, setUsers] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            userSearch();
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [search])

    async function userSearch() {
        const response = await fetch('http://localhost:8000/api/v1/user/bulk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
                searchText: search
            })
        });

        const data = await response.json();
        setUsers(data.data);
    }

    return <>
        <div className="font-bold mt-6 text-lg ">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="px-2 py-1 border rounded border-slate-200  w-[95%]" onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>
        <div>
            {usersData.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
}

function User({ user }) {
    const [visible, setVisible] = useState(false);
    return visible ? <SendMoney /> : <div className="flex justify-between  w-[95%]">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button text={"Send Money"} onClick={() => setVisible(!visible)} />
        </div>
    </div>
}