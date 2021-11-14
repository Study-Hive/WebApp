import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Main from "./container/Main"
import Login from "./pages/Login/Login"

function App() {

  const user = useContext(AuthContext);

  return (
    <div className="App">
      {user ?
        <Main />
        :
        <Login />
      }
    </div>
  );
}

export default App;
