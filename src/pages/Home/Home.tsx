import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from "../../assets/home.svg"

export default function Home() {

    return (
        <>
            <div className=" md:pt-24 bg-homeBg h-screen w-full">
                <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="pr-4 md:flex md:flex-col md:justify-center align-middle pt-10">

                            <p className="self-center text-xl tracking-wide text-justify font-sourceSerifPro">Want to socialize but don’t know how to step ahead? <br />

                                Join us in becoming more social and acheiving productivity at the same time! <br />

                                We are going to help you socialize with others! <br />

                                Sign up now!</p>

                            <Link to="/topic" className="md:w-1/2">
                                <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">Meet new people</button>
                            </Link>

                        </div>

                        <div className="h-full">
                            <img src={HomeImg} alt="img" className="w-full lg:p-10" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
