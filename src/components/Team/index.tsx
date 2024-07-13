'use client'

import { useState } from "react"

export default function Team(){
    const [members,setMembers] = useState<any>([
        {
            name:'jhon',
            email:'jhon@gmail.com',
            role:'admin',
            status:'active'
        },
        {
            name:'doe',
            email:'doe@gmail.com',
            role:'manager',
            status:'pending'
        },
        {
            name:'alex',
            email:'alex@gmail.com',
            role:'member',
            status:'removed'
        },
    ])
    return (
        <div>
            Team component
        </div>
    )
}