
import { React, Router, Route, Routes, Register, LoginPage, Navbar} from './import/all_import.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
