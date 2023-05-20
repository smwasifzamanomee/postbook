import React, { useEffect, useState } from 'react'

const Album = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setAlbums(json))
    }, [])
    return (
        <div className='h-screen'>
            {
                albums.map(album => {
                    return (
                        <div key={album.id} className='border-2 border-gray-300 rounded-lg p-4'>
                            <h1 className='text-2xl font-semibold mt-4'>Title: {album.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Album