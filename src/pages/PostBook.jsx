import React from 'react'
import Post from './Post'

const PostBook = () => {
    return (
        <div className='flex'>
            {/* status/album */}
            <div className='w-[20%]'>
                status
            </div>
            {/* post */}
            <div className='w-[60%] overflow-y-scroll '>
                <Post/>
            </div>
            {/* user */}
            <div className='w-[20%]'>
                user
            </div>
        </div>
    )
}

export default PostBook