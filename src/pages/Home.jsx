import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import { GrArchive, GrTrash } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const [content, setContent] = useState([])

    const deleteContent = (id) => {
        const newContent = content.filter((data) => {
            if (data?.id !== id) {
                return data
            }
        })
        setContent(newContent)
        sessionStorage.setItem('myNotes', JSON.stringify(newContent))
        alert('Successfully removed!')
    }
    const archiveContent = (id) => {
        const updatedContent = JSON.parse(sessionStorage?.getItem('myNotes'))?.map((data) => {
            if (data.id === id) {
                return { ...data, archived: true };
            }
            return data;
        });
        setContent(updatedContent?.filter((data) => {
            if (data.archived) {
            } else {
                return data
            }
        }));
        sessionStorage.setItem('myNotes', JSON.stringify(updatedContent));

        alert('Successfully Archived!');
    }

    useEffect(() => {
        setContent(JSON.parse(sessionStorage.getItem('myNotes'))?.filter((data) => {
            if (data.archived) {
            } else {
                return data
            }
        }))
    }, [])

    return (
        <>
            <Topbar />
            <div className="container mx-auto">
                <main className="flex gap-5">
                    <Sidebar active_tab={1} />
                    <div className='w-full mb-5'>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='font-semibold text-2xl'>Active Notes</h1>
                            <button className='bg-green-200 px-4 py-2 rounded-sm' onClick={() => navigate('/add-note')}>Add a note</button>
                        </div>
                        {/* Content Start */}
                        {
                            content ? (
                                content?.map((data, i) => (
                                    <div className="bg-white px-7 py-8 rounded-sm border hover:bg-green-50 mt-3" key={i}>
                                        <h1 className='font-medium text-lg'>{data?.title}</h1>
                                        <p className='font-light text-md mt-3'>
                                            {data?.body}
                                        </p>
                                        <div className="w-full flex justify-between mt-4">
                                            <small className='font-extralight text-gray-500'>
                                                {data?.createdAt}
                                            </small>
                                            <div className="icons flex gap-3">
                                                <GrTrash
                                                    className='hover:text-red-500 hover:cursor-pointer'
                                                    onClick={() => deleteContent(data?.id)}
                                                />
                                                <GrArchive
                                                    className='hover:text-orange-500 hover:cursor-pointer'
                                                    onClick={() => archiveContent(data?.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className='text-center'>There are no notes here</h1>
                            )
                        }
                    </div>
                </main>
            </div>
        </>
    )
}
