import React, { useEffect, useState } from 'react'
import { BiCommentDots, BiDetail, BiLike, BiShare } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import HorizontalNavigation from '../component/HorizontalNavigation'

const Details = () => {
    const [details, setDetails] = useState({})
    const [like, setLike] = useState('')
    const [comment, setComment] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setDetails(json))
    }, [])

    console.log(
        details
    )

    const handleLink = () => {
        const color = like ? '' : 'text-blue-400'
        setLike(color)
    }

    const handleComment = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(json => setComment(json))
    }

    console.log(comment)

    return (
        <div>
            <HorizontalNavigation />

            <div className='container mx-auto border-2 border-gray-300 rounded-lg p-20'>
                <span className='text-3xl font-bold text-blue-400'>Profile: {details.userId}</span>
                <h1 className='text-2xl font-semibold mt-4'>{details.title}</h1>
                <p className='text-lg'>{details.body}</p>
                <div className='flex gap-10 mt-10'>
                    <span  className='flex border border-blue-400 rounded-full w-[20%] justify-between items-start px-4'>Like <BiLike onClick={handleLink} className={`text-xl ${like}`}/></span>
                    <span onClick={() => handleComment(id)} className='flex border border-blue-400 rounded-full w-[20%] justify-between items-start px-4'>Comment <BiCommentDots className='text-xl' /></span>                    
                </div>
                <div className='h-[150px] overflow-y-scroll'>
                    {/* all comment */}
                    {comment && comment.map(com => {
                        return (
                            <div key={com.id} className='border-2 border-gray-300 rounded-lg p-4 mt-4'>
                                <h1 className='text-2xl font-semibold mt-4'>Name: {com.name}</h1>
                                <p className='text-lg'>Comment: {com.body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default Details