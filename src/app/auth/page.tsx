import React from 'react'
import AuthButtons from './AuthButtons'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {redirect} from "next/navigation"
import Image from 'next/image'

const page = async() => {
    const{isAuthenticated}=getKindeServerSession();
    if(await isAuthenticated()) return redirect("/");

    return (
    <div className='flex h-screen w-full'>
        
        <div className='flex-1 flex overflow-hidden relative justify-center items-center'>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none select-none z-0"
                style={{ backgroundImage: "url('bg-image.jpeg')" }}
            ></div>

            <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
                <Image 
                    src={"StarkConnect.svg"}
                    alt='StarkConnect Logo'
                    width={763}
                    height={173}
                    className='mt-20 w-[420px] z-0 pointer-events-none select-none'/>

                    <p >
                        The <span className='bg-red-500 px-2 font-bold text-white'>ULTIMATE</span> chat app
                    </p>

                    <AuthButtons />
            </div>
        </div>
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex  bg-noise">
            <Image
            src={"/hero-right.png"}
            alt="Hero Image"
            fill
            className='object-cover  pointer-events-none select-none h-full'></Image>
        </div>

    </div>
  )
}

export default page