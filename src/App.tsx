import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<div>Home</div>} />
                    <Route path='/about' element={<div>About</div>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
