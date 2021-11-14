import firebase from "firebase"

export default function Right() {
    return (
        <div className="inline-flex">
             {firebase.auth().currentUser.displayName}
        </div>
    )
}
