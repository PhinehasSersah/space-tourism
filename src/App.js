
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './desktop/home.js';
import Destination from './desktop/destination/destination.jsx';
import Crew from './desktop/crew/crew';
import Technology from './desktop/technology/techno';

function App() {
  return (
    // <div className='App'>
    //     <Destination />

    // </div>

    <Router>
      <div className="App">
        <Routes>
          
          <Route  path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
