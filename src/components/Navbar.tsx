import LogoutIcon from "../assets/logout.png"
import { auth } from "../firebase";
import Name from "./Name"
import ProfileImg from "./ProfileImg"

const signOut = async () => {
    await auth.signOut();
};

export default function Navbar() {


    return (
        <div className="bg-homeBg w-full h-full">

            <div className="flex flex-col items-start justify-center h-full text-3xl font-bold p-4">
                Study Hive
            </div>

            <div className="flex flex-col items-end justify-right h-full text-xl -mt-16 font-bold p-4">

                <div className="inline-flex ">
                Welcome, <Name /> <ProfileImg />
                </div>

                <div className='inline-flex pl-2 mt-1 cursor-pointer' onClick={signOut}>
                    <img src={LogoutIcon} height="40" width="40" className="text-white inline-flex" alt="logout" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}
