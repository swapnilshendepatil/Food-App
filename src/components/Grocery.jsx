import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const getUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return data
}
const Grocery = () => {
    const [getData, setGetdata] = useState([])

    const { data } = useQuery({
        queryKey: ['userData'],
        queryFn: getUserData
    })

    useEffect(() => {
        if (data) {
            setGetdata(data)
        }
    }, [data])

    return (
        <div>
            {getData.map((user) => (
                <div key={user.id}>
                    <li >{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                </div>
            ))}
        </div>
    )
}

export default Grocery