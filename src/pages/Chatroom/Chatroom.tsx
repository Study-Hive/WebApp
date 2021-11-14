import React from 'react';
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from "../../firebase"
import ProfileImg from "../../components/ProfileImg"
import Name from "../../components/Name"
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface Message {
    text: string,
    uid: string,
    photoURL: string,
    id: string
}

type ChatMessageProps = {
    message: Message,
    key: string
}

function ChatMessage(props: ChatMessageProps) {
    const { text, uid, photoURL } = props.message
    const messageClass = auth.currentUser != null && uid === auth.currentUser.uid ? 'sent flex-row-reverse text-white self-end' : 'received'
    return <div className={`message ${messageClass} flex items-center`}>
        <img src={photoURL} className="w-8 h-8 m-2 rounded-full shadow-lg bg-gray-500" />
        <p className="flex ml-1 h-auto text-md font-normal p-1 items-end rounded-md">{text}</p>
    </div>
}

function ChatRoom() {


    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages]: [Message[] | undefined, boolean, Error | undefined] = useCollectionData<Message>(query, { idField: 'id' })

    const [formValue, setFormValue] = React.useState('')

    const dummy = React.useRef<HTMLDivElement>(null)

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        const user = auth && auth.currentUser && auth.currentUser;

        const uid = user && user.uid
        const photoURL = user && user.photoURL

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        dummy.current && dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="grid bg-white mr-56 pb-4 place-content-center rounded-lg">
            <main className="mr-24 w-full overflow-y-scroll flex flex-col">
                {
                    messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
                }
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage} className="w-full flex justify-center border-2 border-black rounded-3xl ">
                <input
                    className="h-8 p-2 w-full focus:outline-none bg-red-500 rounded-bl-2xl rounded-tl-2xl"
                    value={formValue}
                    onChange={e => setFormValue(e.target.value)}
                />
                <button type="submit" className="w-16 font-bold tracking-wider text-black "><ArrowNarrowRightIcon className="h-7 w-7 focus:outline-none" aria-hidden="true" /></button>
            </form>
        </div>
    )
}

function Chatroom() {

    return (
        <div className="pt-20 bg-homeBg">

            <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                <div className="pr-4 md:flex md:flex-col text-3xl ml-16 md:justify-center align-middle pt-10">
                    User Information:
                    <div className=" h-52">
                        <Name /> <br />
                        <ProfileImg />
                    </div>
                </div>

                <div className="">
                    <ChatRoom />
                </div>

            </div>
        </div>
    );
}

export default Chatroom;
