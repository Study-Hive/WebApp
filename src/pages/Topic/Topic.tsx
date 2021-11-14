import { Link } from "react-router-dom"
import MathImg from "../../assets/maths.svg"
import Science from "../../assets/science.svg"
import EnglistImg from "../../assets/english.svg"
import HistoryImg from "../../assets/history.svg"
import ForeignLang from "../../assets/foreign_lang.svg"

export default function Topic() {
  return (
    <div className="bg-homeBg">
      <div className="grid place-items-center text-3xl font-bold">Time to Study</div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
        <Link to='/chatroom'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 p-8 border-4 bg-homeBg border-red-400 rounded-lg" alt="" src={MathImg} />
              <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg- font-sourceSerifPro">Maths</div>
            </div>
          </div>
        </Link>

        <Link to='/chatroom'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 p-8 border-4 bg-homeBg border-red-400 rounded-lg" alt="" src={Science} />
              <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg- font-sourceSerifPro">Science</div>
            </div>
          </div>
        </Link>

        <Link to='/chatroom'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 p-8 border-4 bg-homeBg border-red-400 rounded-lg" alt="" src={EnglistImg} />
              <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg- font-sourceSerifPro">English</div>
            </div>
          </div>
        </Link>

        <Link to='/chatroom'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 p-8 border-4 bg-homeBg border-red-400 rounded-lg" alt="" src={HistoryImg} />
              <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg- font-sourceSerifPro">History</div>
            </div>
          </div>
        </Link>

        <Link to='/chatroom'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 p-8 border-4 bg-homeBg border-red-400 rounded-lg" alt="" src={ForeignLang} />
              <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg- font-sourceSerifPro">Foreign Language</div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}
