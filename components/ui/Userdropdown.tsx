"use client"

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "./avatar"
import { useRouter } from 'next/navigation'
import { Button } from './button'

const Userdropdown = () => {

  const router = useRouter();

  const handleSignOut = async()=>{
    router.push("/sign-in")
  }

  const user = {name:"Pepe", email:"email@gmail.com"}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className='flex items-center gap-3 text-gray-50 hover:bg-gray-100 cursor-pointer'>
          <Avatar className='h-8 w-8'>
            {/* <AvatarImage src="https://github.com/shadcn.png"/> */}
            <AvatarFallback className='bg-gray-50 text-yellow-800 text-sm font-bold'>
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-50">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Userdropdown