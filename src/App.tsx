import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Auth/Login';
import Home from './pages/app/Home';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<div>About</div>} />
                    <Route path='/auth/login' element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
