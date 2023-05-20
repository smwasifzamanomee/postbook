import React from 'react'
import Post from './Post'
import User from './User'
import Album from './Album'

const PostBook = () => {
    return (
        <div className='flex'>
            {/* status/album */}
            <div className='w-[20%] overflow-y-scroll'>
                <Album/>
            </div>
            {/* post */}
            <div className='w-[60%] overflow-y-scroll '>
                <Post/>
            </div>
            {/* user */}
            <div className='w-[20%] overflow-y-scroll'>
                <User/>
            </div>
        </div>
    )
}

export default PostBook