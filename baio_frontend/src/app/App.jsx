import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    
      <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
        </Routes>
      </main>
    </Router>
    
    
  );
}
