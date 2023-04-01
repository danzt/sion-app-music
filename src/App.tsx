import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
// import About from './pages/About';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Home/>
            }
          />
          <Route path="register" element={<SignUp/>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
