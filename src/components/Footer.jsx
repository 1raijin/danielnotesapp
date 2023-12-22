import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container mx-auto my-4">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className='font-medium text-lg'>Notes</h1>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-green-500 w-10 h-10 rounded-full"></div>
                        <img src="/menu-icon.svg" className='w-10 h-10' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
