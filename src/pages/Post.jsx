import React, { useEffect, useState } from 'react'
import { BiLike, BiCommentDots, BiShare, BiDetail } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))

  }, [])
  
  const handleDetails = (id) => {
    navigate(`/details/${id}`)    
  }

  
  return (
    <div className='h-screen'>
      {
        posts.map(post => {
          return (
            <div key={post.id} className='border-2 border-gray-300 rounded-lg p-4'>
              <span className='text-3xl font-bold text-blue-400'>Profile: {post.userId}</span>
              <h1 className='text-2xl font-semibold mt-4'>{post.title}</h1>
              <p className='text-lg'>{post.body}</p>
              <div className='flex gap-10 mt-10'>
                <span className='flex border border-blue-400 rounded-full w-[20%] justify-between items-start px-4'>Share <BiShare className='text-xl'/></span>
                <button onClick={() => handleDetails(post.id)} className='flex border border-blue-400 rounded-full w-[20%] justify-between items-start px-4'>Details <BiDetail className='text-xl'/></button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Post

// params
