import firebase from "firebase"

export default function Right() {
    return (
        <div className="inline-flex">
           <img className="h-8 w-8 rounded-full p-1" src={firebase.auth().currentUser.photoURL} alt="" />
        </div>
    )
}
