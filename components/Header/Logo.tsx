"use client";

import React from 'react'
import logo from "../../public/logo.png"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export const Logo = () => {

    const router = useRouter()

  return (
    <>
    <Image
        src={logo}
        alt="logo"
        onClick={() => router.push("/")}
        className='cursor-alias' 
    />
    </>
  )
}
