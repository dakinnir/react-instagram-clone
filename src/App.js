import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./hooks/context/UserContext";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className='app'>
      <UserContextProvider>
        <Routes>
        <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
