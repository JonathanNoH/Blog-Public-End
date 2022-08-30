import './styles/App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Archive from './components/Archive';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
