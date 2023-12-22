import React from "react";
import { Link } from "react-router-dom";

export default function HomeHome() {
    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            <div className="container my-4">
                <div className="flex justify-between">
                    <div className="pl-4">
                        <p className='text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold'>Notes</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center custom-height">
                <p className="text-6xl font-normal">Welcome to <b className="font-heavy">Notes</b></p>
                <Link to="/Home" className="box">
                    <button className="text-left"> 	&nbsp; &nbsp;+ create your notes here  !</button>
                </Link>
            </div>
        </>
    )
}