import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Player from './Components/Player';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="player" element={<Player />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
