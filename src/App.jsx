import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Home from "./Home";
import Landing from "./component/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
