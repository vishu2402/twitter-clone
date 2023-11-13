import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const FeedCard: React.FC = () => {
    return <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-800 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src="https://imgs.search.brave.com/aA1cGYCgI9iKDbI1bBO5J1kylF1SNbWLNLcILZBgI6g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzYxNjgy/Ni9zY3JlZW5zaG90/cy8yNDYwNzg3L2Fj/dXNlcmF2YXRhcl9k/cmliYmJsZV8yX3Yy/LnBuZz9yZXNpemU9/NDAweDMwMCZ2ZXJ0/aWNhbD1jZW50ZXI"
                    alt='user-image' height={50} width={50} />
            </div>
            <div className='col-span-11'>
                <h5>Vishal Kumar</h5>
                <p>Lorem ipsum dolor sit amet cons, ajnnmncm xxnmvxvm bm cc asi porro praesentium voluptatibus.</p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%] '>
                    <div>
                        <BiMessageRounded />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiUpload />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard