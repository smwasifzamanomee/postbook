import React, { useEffect, useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    console.log(users)
    return (
        <div className='h-screen'>
            {
                users.map(user => { 
                    return (
                        <div key={user.id} className='border-2 border-gray-300 rounded-lg p-4'>
                            <h1 className='text-2xl font-semibold mt-4'>Name: {user.name}</h1>
                            <p className='text-lg'>Email: {user.email}</p>
                            <p className='text-lg'>Phone: {user.phone}</p>
                            <p className='text-lg'>Website: {user.website}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User