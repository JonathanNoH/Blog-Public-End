import './styles/App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Archive from './components/Archive';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/:id" element={<Article />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
