"use client"
import Image from 'next/image'
import React, { createContext, useCallback } from 'react';
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from 'react-icons/bs'
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi'
import FeedCard from '@/components/FeedCard'
import { SlOptions } from 'react-icons/sl'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import toast, { Toaster } from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';

interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notifications',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney />
  },
  {
    title: 'More Options',
    icon: <SlOptions />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  }
]

export default function Home() {

  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error(`Google token not found`);

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken });

    toast.success("Verification Successful");
    console.log(verifyGoogleToken);

    if(verifyGoogleToken) window.localStorage.setItem('__twitter-token', verifyGoogleToken)
}, []);
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='col-span-3 pt-1 justify-start pt-8 ml-15'>
          <div className="text-2xl h-fit hover:bg-gray-600 rounded-full w-fit p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className='mt-2 text-xl pr-4'>
            <ul>
              {SidebarMenuItems.map(item => <li className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 cursor-pointer mt-2 w-fit' key={item.title}><span className='text-3xl'>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className='mt-5 px-3'>
              <button className='bg-[#1d9bf0] font-semibold py-2 px-4 rounded-full w-full text-lg'>Tweet</button>
            </div>
          </div>
        </div>
        <div className='col-span-5 border-l-[0.5px] border-r-[1px] overflow-y-scroll border-gray-600'>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <GoogleOAuthProvider clientId='832602363061-mfvbq97rodunctunvo0jk6s6e1n0d7a0.apps.googleusercontent.com'>
        <div className='p-5 col-span-3'>
          <div className='p-5 bg-slate-700 border rounded-lg'>
            <h1 className='my-2 text-2xl'>New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  )
}