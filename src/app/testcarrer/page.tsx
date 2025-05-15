import React from 'react'
import { Button } from "@/components/ui/button"

const page = () => {
    return (
        <div className="container h-screen py-8 px-4">
            <h1 className='text-2xl text-center font-medium'>Test page</h1>
            <div>
                <Button>Click me</Button>
            </div>
        </div>
    )
}

export default page